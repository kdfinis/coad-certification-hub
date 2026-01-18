import { NextRequest, NextResponse } from 'next/server';
import {
  AUTH_COOKIE_NAME,
  CSRF_COOKIE_NAME,
  checkRateLimit,
  getUserByEmail,
  logAuthEvent,
  stripSensitiveUser,
  verifyUserPassword,
  createSession,
} from '@/lib/auth/store';
import { getRoleLandingPath } from '@/lib/auth/role-routing';

const getClientIp = (request: NextRequest) =>
  request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'local';

export async function POST(request: NextRequest) {
  const csrfHeader = request.headers.get('x-csrf-token');
  const csrfCookie = request.cookies.get(CSRF_COOKIE_NAME)?.value;
  if (!csrfHeader || !csrfCookie || csrfHeader !== csrfCookie) {
    return NextResponse.json({ message: 'Invalid CSRF token.' }, { status: 403 });
  }

  const body = await request.json().catch(() => null);
  if (!body || typeof body.email !== 'string' || typeof body.password !== 'string') {
    return NextResponse.json({ message: 'Email and password are required.' }, { status: 400 });
  }

  const rememberMe = Boolean(body.rememberMe);
  const email = body.email.trim();
  const password = body.password;
  const ip = getClientIp(request);
  const rateKey = `login:${ip}:${email.toLowerCase()}`;
  if (!checkRateLimit(rateKey, 10)) {
    return NextResponse.json({ message: 'Too many login attempts. Try again later.' }, { status: 429 });
  }

  const user = getUserByEmail(email);
  if (!user || !verifyUserPassword(user, password)) {
    logAuthEvent({ event: 'login_failed', email, ip });
    return NextResponse.json({ message: 'Invalid email or password.' }, { status: 401 });
  }

  if (user.status !== 'active') {
    logAuthEvent({ event: 'login_blocked', userId: user.id, email: user.email, ip });
    return NextResponse.json({ message: 'Account is not active.' }, { status: 403 });
  }

  const { sessionId, expiresAt } = createSession(user.id, rememberMe);
  logAuthEvent({ event: 'login_success', userId: user.id, email: user.email, ip });

  const response = NextResponse.json({
    user: stripSensitiveUser(user),
    redirectTo: getRoleLandingPath(user.role),
  });
  response.cookies.set(AUTH_COOKIE_NAME, sessionId, {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    expires: new Date(expiresAt),
  });
  return response;
}
