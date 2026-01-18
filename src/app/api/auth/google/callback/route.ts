import { NextRequest, NextResponse } from 'next/server';
import {
  AUTH_COOKIE_NAME,
  OAUTH_STATE_COOKIE_NAME,
  createSession,
  findOrCreateOAuthUser,
  logAuthEvent,
  stripSensitiveUser,
} from '@/lib/auth/store';
import { getRoleLandingPath } from '@/lib/auth/role-routing';

const getOrigin = (request: NextRequest) => process.env.NEXT_PUBLIC_SITE_URL || request.nextUrl.origin;

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const code = searchParams.get('code');
  const returnedState = searchParams.get('state');
  const storedState = request.cookies.get(OAUTH_STATE_COOKIE_NAME)?.value;

  if (!code) {
    return NextResponse.redirect(`${getOrigin(request)}/lms/auth?error=google_missing_code`);
  }

  if (!returnedState || storedState !== `google:${returnedState}`) {
    return NextResponse.redirect(`${getOrigin(request)}/lms/auth?error=google_state_mismatch`);
  }

  try {
    const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        code,
        client_id: process.env.GOOGLE_CLIENT_ID || '',
        client_secret: process.env.GOOGLE_CLIENT_SECRET || '',
        redirect_uri: `${getOrigin(request)}/api/auth/google/callback`,
        grant_type: 'authorization_code',
      }),
    });

    if (!tokenResponse.ok) {
      return NextResponse.redirect(`${getOrigin(request)}/lms/auth?error=google_token_failed`);
    }

    const tokenData = (await tokenResponse.json()) as { access_token?: string; id_token?: string };
    if (!tokenData.access_token) {
      return NextResponse.redirect(`${getOrigin(request)}/lms/auth?error=google_token_missing`);
    }

    const profileResponse = await fetch('https://openidconnect.googleapis.com/v1/userinfo', {
      headers: { Authorization: `Bearer ${tokenData.access_token}` },
    });
    if (!profileResponse.ok) {
      return NextResponse.redirect(`${getOrigin(request)}/lms/auth?error=google_profile_failed`);
    }

    const profile = (await profileResponse.json()) as {
      sub?: string;
      email?: string;
      name?: string;
      picture?: string;
    };

    if (!profile.sub || !profile.email) {
      return NextResponse.redirect(`${getOrigin(request)}/lms/auth?error=google_email_missing`);
    }

    const user = findOrCreateOAuthUser({
      provider: 'google',
      providerAccountId: profile.sub,
      email: profile.email,
      name: profile.name || profile.email.split('@')[0],
      avatarUrl: profile.picture,
    });

    if (!user || user.status !== 'active') {
      return NextResponse.redirect(`${getOrigin(request)}/lms/auth?error=google_account_inactive`);
    }

    const { sessionId, expiresAt } = createSession(user.id, true);
    logAuthEvent({ event: 'oauth_google_success', userId: user.id, email: user.email });

    const response = NextResponse.redirect(`${getOrigin(request)}${getRoleLandingPath(user.role)}`);
    response.cookies.set(AUTH_COOKIE_NAME, sessionId, {
      httpOnly: true,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      expires: new Date(expiresAt),
    });
    response.cookies.set(OAUTH_STATE_COOKIE_NAME, '', {
      httpOnly: true,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      expires: new Date(0),
    });
    response.headers.set('x-user', JSON.stringify(stripSensitiveUser(user)));
    return response;
  } catch (error) {
    logAuthEvent({ event: 'oauth_google_error', details: { message: String(error) } });
    return NextResponse.redirect(`${getOrigin(request)}/lms/auth?error=google_exception`);
  }
}
