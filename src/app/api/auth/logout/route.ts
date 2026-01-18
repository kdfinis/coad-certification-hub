import { NextRequest, NextResponse } from 'next/server';
import { AUTH_COOKIE_NAME, clearSession } from '@/lib/auth/store';

export async function POST(request: NextRequest) {
  const sessionId = request.cookies.get(AUTH_COOKIE_NAME)?.value;
  if (sessionId) {
    clearSession(sessionId);
  }
  const response = NextResponse.json({ success: true });
  response.cookies.set(AUTH_COOKIE_NAME, '', {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    expires: new Date(0),
  });
  return response;
}
