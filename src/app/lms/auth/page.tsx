'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function LmsAuthPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [csrfToken, setCsrfToken] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const errorParam = searchParams.get('error');
    if (errorParam) {
      setError(`Authentication failed (${errorParam}). Please try again.`);
      setShowEmailForm(true);
    }
  }, [searchParams]);

  useEffect(() => {
    const init = async () => {
      const csrfResponse = await fetch('/api/auth/csrf');
      if (csrfResponse.ok) {
        const data = (await csrfResponse.json()) as { token: string };
        setCsrfToken(data.token);
      }
      const meResponse = await fetch('/api/auth/me');
      if (meResponse.ok) {
        const data = (await meResponse.json()) as { redirectTo?: string };
        router.replace(data.redirectTo || '/lms');
      }
    };
    init();
  }, [router]);

  const handleEmailAuth = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-csrf-token': csrfToken ?? '',
        },
        body: JSON.stringify({ email, password, rememberMe }),
      });
      const data = (await response.json()) as { message?: string; redirectTo?: string };
      if (!response.ok) {
        setError(data.message ?? 'Unable to sign in.');
        return;
      }
      router.push(data.redirectTo || '/lms');
    } catch (err) {
      setError(`Sign in failed: ${String(err)}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleGoogleAuth = () => {
    window.location.href = '/api/auth/google';
  };

  const handleLinkedInAuth = () => {
    window.location.href = '/api/auth/linkedin';
  };

  return (
    <div className="min-h-screen bg-background px-6 py-12">
      <div className="mx-auto max-w-md rounded-2xl border border-border bg-card p-8">
        <div className="mb-6 flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-teal" />
          <div>
            <p className="text-sm font-semibold text-foreground">COAD Canvas</p>
            <p className="text-xs text-muted-foreground">Learning workspace</p>
          </div>
        </div>
        <h2 className="text-2xl font-semibold text-foreground">Sign in to COAD Canvas</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Use your COAD account, Google, or LinkedIn to continue into the LMS.
        </p>
        <div className="mt-6 space-y-3">
          {error && (
            <div className="rounded-md border border-destructive/30 bg-destructive/10 px-3 py-2 text-sm text-destructive">
              {error}
            </div>
          )}
          {!showEmailForm ? (
            <>
              <Button className="w-full" onClick={() => setShowEmailForm(true)}>
                Continue with email
              </Button>
              <Button variant="outline" className="w-full" onClick={handleGoogleAuth}>
                Continue with Google
              </Button>
              <Button variant="outline" className="w-full" onClick={handleLinkedInAuth}>
                Continue with LinkedIn
              </Button>
            </>
          ) : (
            <form onSubmit={handleEmailAuth} className="space-y-3">
              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-md border border-border px-3 py-2 text-sm"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <div className="space-y-2">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  className="w-full rounded-md border border-border px-3 py-2 text-sm"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <label className="flex items-center gap-2 text-xs text-muted-foreground">
                  <input
                    type="checkbox"
                    checked={showPassword}
                    onChange={(event) => setShowPassword(event.target.checked)}
                  />
                  Show password
                </label>
              </div>
              <label className="flex items-center gap-2 text-xs text-muted-foreground">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(event) => setRememberMe(event.target.checked)}
                />
                Remember this device
              </label>
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <Link href="/lms/auth/forgot-password" className="text-primary hover:underline">
                  Forgot password?
                </Link>
                <span>Password reset available for local accounts.</span>
              </div>
              <div className="flex gap-2">
                <Button type="submit" className="flex-1" disabled={isSubmitting || !csrfToken}>
                  {isSubmitting ? 'Signing in...' : 'Sign in'}
                </Button>
                <Button type="button" variant="outline" onClick={() => setShowEmailForm(false)}>
                  Cancel
                </Button>
              </div>
            </form>
          )}
        </div>
        <p className="mt-6 text-xs text-muted-foreground">
          By continuing you agree to{' '}
          <Link href="/legal/terms-of-service" className="text-primary hover:underline">
            COAD LMS terms
          </Link>{' '}
          and{' '}
          <Link href="/legal/privacy-policy" className="text-primary hover:underline">
            privacy policy
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
