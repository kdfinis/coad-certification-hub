import { NextRequest, NextResponse } from 'next/server';
import { OAUTH_STATE_COOKIE_NAME, createCsrfToken } from '@/lib/auth/store';

export async function GET(request: NextRequest) {
  const origin = process.env.NEXT_PUBLIC_SITE_URL || request.nextUrl.origin;
  const state = createCsrfToken();
  const linkedInAuthUrl = `https://www.linkedin.com/oauth/v2/authorization?${new URLSearchParams({
    client_id: process.env.LINKEDIN_CLIENT_ID || '',
    redirect_uri: `${origin}/api/auth/linkedin/callback`,
    response_type: 'code',
    scope: 'r_liteprofile r_emailaddress',
    state,
  })}`;

  const response = NextResponse.redirect(linkedInAuthUrl);
  response.cookies.set(OAUTH_STATE_COOKIE_NAME, `linkedin:${state}`, {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
  });
  return response;
}
