import { NextResponse } from 'next/server';
import { CSRF_COOKIE_NAME, createCsrfToken } from '@/lib/auth/store';

export async function GET() {
  const token = createCsrfToken();
  const response = NextResponse.json({ token });
  response.cookies.set(CSRF_COOKIE_NAME, token, {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
  });
  return response;
}
