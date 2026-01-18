'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';

export default function ResetPasswordPage() {
  const searchParams = useSearchParams();
  const tokenFromQuery = useMemo(() => searchParams.get('token') || '', [searchParams]);
  const [token, setToken] = useState(tokenFromQuery);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [csrfToken, setCsrfToken] = useState<string | null>(null);
  const [status, setStatus] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setToken(tokenFromQuery);
  }, [tokenFromQuery]);

  useEffect(() => {
    const init = async () => {
      const response = await fetch('/api/auth/csrf');
      if (response.ok) {
        const data = (await response.json()) as { token: string };
        setCsrfToken(data.token);
      }
    };
    init();
  }, []);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setStatus(null);
    if (password !== confirmPassword) {
      setStatus('Passwords do not match.');
      return;
    }
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/auth/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-csrf-token': csrfToken ?? '',
        },
        body: JSON.stringify({ token, password }),
      });
      const data = (await response.json()) as { message?: string; success?: boolean };
      if (!response.ok) {
        setStatus(data.message ?? 'Unable to reset password.');
        return;
      }
      setStatus('Password updated. You can sign in now.');
    } catch (error) {
      setStatus(`Reset failed: ${String(error)}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background px-6 py-12">
      <div className="mx-auto max-w-md rounded-2xl border border-border bg-card p-8">
        <h2 className="text-2xl font-semibold text-foreground">Set a new password</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Use a password with at least 10 characters, including letters and numbers.
        </p>
        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Reset token"
            className="w-full rounded-md border border-border px-3 py-2 text-sm"
            value={token}
            onChange={(event) => setToken(event.target.value)}
            required
          />
          <input
            type="password"
            placeholder="New password"
            className="w-full rounded-md border border-border px-3 py-2 text-sm"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirm new password"
            className="w-full rounded-md border border-border px-3 py-2 text-sm"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            required
          />
          <Button type="submit" className="w-full" disabled={!csrfToken || isSubmitting}>
            {isSubmitting ? 'Updating...' : 'Update password'}
          </Button>
        </form>
        {status && (
          <div className="mt-4 rounded-md border border-border bg-muted/40 px-3 py-2 text-xs text-muted-foreground">
            {status}
          </div>
        )}
        <div className="mt-6 text-xs text-muted-foreground">
          <Link href="/lms/auth" className="text-primary hover:underline">
            Back to sign in
          </Link>
        </div>
      </div>
    </div>
  );
}
