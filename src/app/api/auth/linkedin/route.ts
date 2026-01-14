import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const code = searchParams.get('code');

  // TODO: Implement LinkedIn OAuth flow
  // 1. Exchange code for access token
  // 2. Fetch user profile from LinkedIn API
  // 3. Create or link user account
  // 4. Generate session token
  // 5. Redirect to LMS dashboard

  if (!code) {
    // Redirect to LinkedIn OAuth consent screen
    const linkedInAuthUrl = `https://www.linkedin.com/oauth/v2/authorization?${new URLSearchParams({
      client_id: process.env.LINKEDIN_CLIENT_ID || '',
      redirect_uri: `${process.env.NEXT_PUBLIC_SITE_URL}/api/auth/linkedin/callback`,
      response_type: 'code',
      scope: 'r_liteprofile r_emailaddress',
    })}`;
    
    return NextResponse.redirect(linkedInAuthUrl);
  }

  return NextResponse.json({ message: 'LinkedIn OAuth callback received' });
}
