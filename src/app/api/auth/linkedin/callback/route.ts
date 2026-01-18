import { NextRequest, NextResponse } from 'next/server';
import {
  AUTH_COOKIE_NAME,
  OAUTH_STATE_COOKIE_NAME,
  createSession,
  findOrCreateOAuthUser,
  logAuthEvent,
} from '@/lib/auth/store';
import { getRoleLandingPath } from '@/lib/auth/role-routing';

const getOrigin = (request: NextRequest) => process.env.NEXT_PUBLIC_SITE_URL || request.nextUrl.origin;

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const code = searchParams.get('code');
  const returnedState = searchParams.get('state');
  const storedState = request.cookies.get(OAUTH_STATE_COOKIE_NAME)?.value;

  if (!code) {
    return NextResponse.redirect(`${getOrigin(request)}/lms/auth?error=linkedin_missing_code`);
  }

  if (!returnedState || storedState !== `linkedin:${returnedState}`) {
    return NextResponse.redirect(`${getOrigin(request)}/lms/auth?error=linkedin_state_mismatch`);
  }

  try {
    const tokenResponse = await fetch('https://www.linkedin.com/oauth/v2/accessToken', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        grant_type: 'authorization_code',
        code,
        redirect_uri: `${getOrigin(request)}/api/auth/linkedin/callback`,
        client_id: process.env.LINKEDIN_CLIENT_ID || '',
        client_secret: process.env.LINKEDIN_CLIENT_SECRET || '',
      }),
    });

    if (!tokenResponse.ok) {
      return NextResponse.redirect(`${getOrigin(request)}/lms/auth?error=linkedin_token_failed`);
    }

    const tokenData = (await tokenResponse.json()) as { access_token?: string };
    if (!tokenData.access_token) {
      return NextResponse.redirect(`${getOrigin(request)}/lms/auth?error=linkedin_token_missing`);
    }

    const profileResponse = await fetch('https://api.linkedin.com/v2/userinfo', {
      headers: { Authorization: `Bearer ${tokenData.access_token}` },
    });
    const profileData = profileResponse.ok
      ? ((await profileResponse.json()) as { sub?: string; name?: string; email?: string; picture?: string })
      : null;

    let email = profileData?.email;
    if (!email) {
      const emailResponse = await fetch(
        'https://api.linkedin.com/v2/emailAddress?q=members&projection=(elements*(handle~))',
        {
          headers: { Authorization: `Bearer ${tokenData.access_token}` },
        },
      );
      if (emailResponse.ok) {
        const emailData = (await emailResponse.json()) as {
          elements?: Array<{ ['handle~']?: { emailAddress?: string } }>;
        };
        email = emailData.elements?.[0]?.['handle~']?.emailAddress;
      }
    }

    if (!profileData?.sub || !email) {
      return NextResponse.redirect(`${getOrigin(request)}/lms/auth?error=linkedin_email_missing`);
    }

    const user = findOrCreateOAuthUser({
      provider: 'linkedin',
      providerAccountId: profileData.sub,
      email,
      name: profileData.name || email.split('@')[0],
      avatarUrl: profileData.picture,
    });

    if (!user || user.status !== 'active') {
      return NextResponse.redirect(`${getOrigin(request)}/lms/auth?error=linkedin_account_inactive`);
    }

    const { sessionId, expiresAt } = createSession(user.id, true);
    logAuthEvent({ event: 'oauth_linkedin_success', userId: user.id, email: user.email });

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
    return response;
  } catch (error) {
    logAuthEvent({ event: 'oauth_linkedin_error', details: { message: String(error) } });
    return NextResponse.redirect(`${getOrigin(request)}/lms/auth?error=linkedin_exception`);
  }
}
