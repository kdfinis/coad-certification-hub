import { NextRequest, NextResponse } from 'next/server';
import {
  CSRF_COOKIE_NAME,
  checkRateLimit,
  createPasswordReset,
  getUserByEmail,
  logAuthEvent,
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
  if (!body || typeof body.email !== 'string') {
    return NextResponse.json({ message: 'Email is required.' }, { status: 400 });
  }

  const email = body.email.trim();
  const ip = getClientIp(request);
  const rateKey = `forgot:${ip}:${email.toLowerCase()}`;
  if (!checkRateLimit(rateKey, 5)) {
    return NextResponse.json({ message: 'Too many requests. Try again later.' }, { status: 429 });
  }

  const user = getUserByEmail(email);
  if (!user) {
    logAuthEvent({ event: 'password_reset_requested_unknown', email, ip });
    return NextResponse.json({ message: 'If the account exists, a reset link will be sent.' });
  }

  const resetRecord = createPasswordReset(user.id);
  logAuthEvent({ event: 'password_reset_requested', userId: user.id, email: user.email, ip });

  const responsePayload: Record<string, string> = {
    message: 'If the account exists, a reset link will be sent.',
  };
  if (process.env.NODE_ENV !== 'production') {
    responsePayload.resetToken = resetRecord.token;
  }

  return NextResponse.json(responsePayload);
}
