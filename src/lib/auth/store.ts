import 'server-only';
import crypto from 'crypto';
import type { User, UserRole } from '@/lib/types';

type AuthProvider = 'local' | 'google' | 'linkedin';
type UserStatus = 'active' | 'suspended';

export const AUTH_COOKIE_NAME = 'lms_session';
export const CSRF_COOKIE_NAME = 'lms_csrf';
export const OAUTH_STATE_COOKIE_NAME = 'lms_oauth_state';

const SESSION_TTL_MS = 1000 * 60 * 60 * 24 * 7;
const SESSION_TTL_REMEMBER_MS = 1000 * 60 * 60 * 24 * 30;
const RESET_TTL_MS = 1000 * 60 * 30;
const RATE_LIMIT_WINDOW_MS = 1000 * 60 * 10;

export interface AuthUser extends User {
  status: UserStatus;
  authProviders: AuthProvider[];
  passwordHash?: string;
}

interface SessionRecord {
  id: string;
  userId: string;
  createdAt: string;
  expiresAt: string;
  lastSeenAt: string;
}

interface PasswordResetRecord {
  token: string;
  userId: string;
  createdAt: string;
  expiresAt: string;
  usedAt?: string;
}

interface OAuthAccount {
  provider: AuthProvider;
  providerAccountId: string;
  userId: string;
}

interface RateLimitRecord {
  count: number;
  resetAt: number;
}

interface AuditLogEntry {
  id: string;
  event: string;
  userId?: string;
  email?: string;
  ip?: string;
  createdAt: string;
  details?: Record<string, string | number | boolean | null>;
}

interface AuthStore {
  usersById: Map<string, AuthUser>;
  usersByEmail: Map<string, AuthUser>;
  sessions: Map<string, SessionRecord>;
  passwordResets: Map<string, PasswordResetRecord>;
  oauthAccounts: Map<string, OAuthAccount>;
  rateLimits: Map<string, RateLimitRecord>;
  auditLogs: AuditLogEntry[];
}

declare global {
  // eslint-disable-next-line no-var
  var __lmsAuthStore: AuthStore | undefined;
}

const store: AuthStore =
  global.__lmsAuthStore ??
  ({
    usersById: new Map(),
    usersByEmail: new Map(),
    sessions: new Map(),
    passwordResets: new Map(),
    oauthAccounts: new Map(),
    rateLimits: new Map(),
    auditLogs: [],
  } satisfies AuthStore);

global.__lmsAuthStore = store;

const seedUsers: Array<{ email: string; name: string; role: UserRole; password: string }> = [
  { email: 'admin@coad.ai', name: 'COAD Admin', role: 'Admin', password: 'Admin123!' },
  { email: 'instructor@coad.ai', name: 'COAD Instructor', role: 'Instructor', password: 'Instructor123!' },
  { email: 'ta@coad.ai', name: 'COAD TA', role: 'TA', password: 'TA123456!' },
  { email: 'student@coad.ai', name: 'COAD Student', role: 'Student', password: 'Student123!' },
  { email: 'observer@coad.ai', name: 'COAD Observer', role: 'Observer', password: 'Observer123!' },
];

const nowIso = () => new Date().toISOString();

export const normalizeEmail = (email: string) => email.trim().toLowerCase();

const createPasswordHash = (password: string) => {
  const salt = crypto.randomBytes(16).toString('hex');
  const hash = crypto.scryptSync(password, salt, 64).toString('hex');
  return `${salt}:${hash}`;
};

const verifyPasswordHash = (password: string, storedHash?: string) => {
  if (!storedHash) return false;
  const [salt, hash] = storedHash.split(':');
  if (!salt || !hash) return false;
  const candidate = crypto.scryptSync(password, salt, 64).toString('hex');
  return crypto.timingSafeEqual(Buffer.from(hash, 'hex'), Buffer.from(candidate, 'hex'));
};

const ensureSeedUsers = () => {
  if (store.usersByEmail.size > 0) {
    return;
  }

  seedUsers.forEach((seed) => {
    const userId = crypto.randomUUID();
    const createdAt = nowIso();
    const user: AuthUser = {
      id: userId,
      email: normalizeEmail(seed.email),
      name: seed.name,
      role: seed.role,
      status: 'active',
      authProviders: ['local'],
      passwordHash: createPasswordHash(seed.password),
      createdAt,
      updatedAt: createdAt,
    };
    store.usersById.set(userId, user);
    store.usersByEmail.set(user.email, user);
  });
};

const recordAudit = (entry: Omit<AuditLogEntry, 'id' | 'createdAt'>) => {
  store.auditLogs.unshift({
    id: crypto.randomUUID(),
    createdAt: nowIso(),
    ...entry,
  });
};

export const validatePasswordPolicy = (password: string) => {
  if (password.length < 10) {
    return 'Password must be at least 10 characters.';
  }
  if (!/[A-Za-z]/.test(password) || !/\d/.test(password)) {
    return 'Password must include letters and numbers.';
  }
  return null;
};

export const checkRateLimit = (key: string, limit: number) => {
  const now = Date.now();
  const record = store.rateLimits.get(key);
  if (!record || record.resetAt < now) {
    store.rateLimits.set(key, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }
  if (record.count >= limit) {
    return false;
  }
  record.count += 1;
  return true;
};

export const createCsrfToken = () => crypto.randomBytes(16).toString('hex');

export const getUserByEmail = (email: string) => {
  ensureSeedUsers();
  return store.usersByEmail.get(normalizeEmail(email)) ?? null;
};

export const getUserById = (id: string) => {
  ensureSeedUsers();
  return store.usersById.get(id) ?? null;
};

export const verifyUserPassword = (user: AuthUser, password: string) => {
  return verifyPasswordHash(password, user.passwordHash);
};

export const updateUserPassword = (user: AuthUser, newPassword: string) => {
  user.passwordHash = createPasswordHash(newPassword);
  user.updatedAt = nowIso();
  if (!user.authProviders.includes('local')) {
    user.authProviders.push('local');
  }
  store.usersById.set(user.id, user);
  store.usersByEmail.set(user.email, user);
};

export const createSession = (userId: string, rememberMe: boolean) => {
  const sessionId = crypto.randomUUID();
  const createdAt = nowIso();
  const ttl = rememberMe ? SESSION_TTL_REMEMBER_MS : SESSION_TTL_MS;
  const expiresAt = new Date(Date.now() + ttl).toISOString();
  store.sessions.set(sessionId, {
    id: sessionId,
    userId,
    createdAt,
    expiresAt,
    lastSeenAt: createdAt,
  });
  return { sessionId, expiresAt };
};

export const getSession = (sessionId: string) => {
  const session = store.sessions.get(sessionId);
  if (!session) return null;
  if (new Date(session.expiresAt).getTime() < Date.now()) {
    store.sessions.delete(sessionId);
    return null;
  }
  session.lastSeenAt = nowIso();
  return session;
};

export const clearSession = (sessionId: string) => {
  store.sessions.delete(sessionId);
};

export const createPasswordReset = (userId: string) => {
  const token = crypto.randomBytes(24).toString('hex');
  const record: PasswordResetRecord = {
    token,
    userId,
    createdAt: nowIso(),
    expiresAt: new Date(Date.now() + RESET_TTL_MS).toISOString(),
  };
  store.passwordResets.set(token, record);
  return record;
};

export const consumePasswordReset = (token: string) => {
  const record = store.passwordResets.get(token);
  if (!record) return null;
  if (record.usedAt) return null;
  if (new Date(record.expiresAt).getTime() < Date.now()) {
    store.passwordResets.delete(token);
    return null;
  }
  record.usedAt = nowIso();
  store.passwordResets.set(token, record);
  return record;
};

export const findOrCreateOAuthUser = ({
  provider,
  providerAccountId,
  email,
  name,
  avatarUrl,
}: {
  provider: AuthProvider;
  providerAccountId: string;
  email: string;
  name: string;
  avatarUrl?: string;
}) => {
  ensureSeedUsers();
  const normalizedEmail = normalizeEmail(email);
  const accountKey = `${provider}:${providerAccountId}`;
  const existingAccount = store.oauthAccounts.get(accountKey);
  if (existingAccount) {
    const user = store.usersById.get(existingAccount.userId) ?? null;
    return user ?? null;
  }

  let user = store.usersByEmail.get(normalizedEmail) ?? null;
  if (!user) {
    const userId = crypto.randomUUID();
    const createdAt = nowIso();
    user = {
      id: userId,
      email: normalizedEmail,
      name,
      role: 'Student',
      status: 'active',
      authProviders: [provider],
      avatarUrl,
      createdAt,
      updatedAt: createdAt,
    };
    store.usersById.set(userId, user);
    store.usersByEmail.set(normalizedEmail, user);
  } else if (!user.authProviders.includes(provider)) {
    user.authProviders.push(provider);
    user.updatedAt = nowIso();
    store.usersById.set(user.id, user);
    store.usersByEmail.set(normalizedEmail, user);
  }

  store.oauthAccounts.set(accountKey, { provider, providerAccountId, userId: user.id });
  return user;
};

export const logAuthEvent = (entry: Omit<AuditLogEntry, 'id' | 'createdAt'>) => {
  recordAudit(entry);
};

export const stripSensitiveUser = (user: AuthUser) => {
  const safeUser = { ...user };
  delete safeUser.passwordHash;
  return safeUser;
};
