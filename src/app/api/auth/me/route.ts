import { NextRequest, NextResponse } from 'next/server';
import { AUTH_COOKIE_NAME, getSession, getUserById, stripSensitiveUser } from '@/lib/auth/store';
import { getRoleLandingPath } from '@/lib/auth/role-routing';

export async function GET(request: NextRequest) {
  const sessionId = request.cookies.get(AUTH_COOKIE_NAME)?.value;
  if (!sessionId) {
    return NextResponse.json({ message: 'Not authenticated.' }, { status: 401 });
  }
  const session = getSession(sessionId);
  if (!session) {
    return NextResponse.json({ message: 'Session expired.' }, { status: 401 });
  }
  const user = getUserById(session.userId);
  if (!user) {
    return NextResponse.json({ message: 'User not found.' }, { status: 404 });
  }
  return NextResponse.json({
    user: stripSensitiveUser(user),
    redirectTo: getRoleLandingPath(user.role),
  });
}
