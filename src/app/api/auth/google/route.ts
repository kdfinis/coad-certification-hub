import { NextRequest, NextResponse } from 'next/server';
import { OAUTH_STATE_COOKIE_NAME, createCsrfToken } from '@/lib/auth/store';

export async function GET(request: NextRequest) {
  const origin = process.env.NEXT_PUBLIC_SITE_URL || request.nextUrl.origin;
  const state = createCsrfToken();
  const googleAuthUrl = `https://accounts.google.com/o/oauth2/v2/auth?${new URLSearchParams({
    client_id: process.env.GOOGLE_CLIENT_ID || '',
    redirect_uri: `${origin}/api/auth/google/callback`,
    response_type: 'code',
    scope: 'openid email profile',
    state,
    prompt: 'select_account',
  })}`;

  const response = NextResponse.redirect(googleAuthUrl);
  response.cookies.set(OAUTH_STATE_COOKIE_NAME, `google:${state}`, {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
  });
  return response;
}
