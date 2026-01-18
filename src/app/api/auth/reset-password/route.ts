import { NextRequest, NextResponse } from 'next/server';
import {
  CSRF_COOKIE_NAME,
  consumePasswordReset,
  getUserById,
  logAuthEvent,
  updateUserPassword,
  validatePasswordPolicy,
} from '@/lib/auth/store';

const getClientIp = (request: NextRequest) =>
  request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'local';

export async function POST(request: NextRequest) {
  const csrfHeader = request.headers.get('x-csrf-token');
  const csrfCookie = request.cookies.get(CSRF_COOKIE_NAME)?.value;
  if (!csrfHeader || !csrfCookie || csrfHeader !== csrfCookie) {
    return NextResponse.json({ message: 'Invalid CSRF token.' }, { status: 403 });
  }

  const body = await request.json().catch(() => null);
  if (!body || typeof body.token !== 'string' || typeof body.password !== 'string') {
    return NextResponse.json({ message: 'Token and password are required.' }, { status: 400 });
  }

  const token = body.token.trim();
  const password = body.password;
  const policyError = validatePasswordPolicy(password);
  if (policyError) {
    return NextResponse.json({ message: policyError }, { status: 400 });
  }

  const resetRecord = consumePasswordReset(token);
  if (!resetRecord) {
    return NextResponse.json({ message: 'Invalid or expired token.' }, { status: 400 });
  }

  const user = getUserById(resetRecord.userId);
  if (!user) {
    return NextResponse.json({ message: 'User not found.' }, { status: 404 });
  }

  updateUserPassword(user, password);
  logAuthEvent({
    event: 'password_reset_completed',
    userId: user.id,
    email: user.email,
    ip: getClientIp(request),
  });

  return NextResponse.json({ success: true });
}
