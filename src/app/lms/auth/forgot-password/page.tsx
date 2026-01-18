'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [csrfToken, setCsrfToken] = useState<string | null>(null);
  const [status, setStatus] = useState<string | null>(null);
  const [resetToken, setResetToken] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    setResetToken(null);
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/auth/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-csrf-token': csrfToken ?? '',
        },
        body: JSON.stringify({ email }),
      });
      const data = (await response.json()) as { message?: string; resetToken?: string };
      setStatus(data.message || 'Check your email for next steps.');
      if (data.resetToken) {
        setResetToken(data.resetToken);
      }
    } catch (error) {
      setStatus(`Request failed: ${String(error)}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background px-6 py-12">
      <div className="mx-auto max-w-md rounded-2xl border border-border bg-card p-8">
        <h2 className="text-2xl font-semibold text-foreground">Reset your password</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Enter the email associated with your LMS account and we will send a reset link.
        </p>
        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email address"
            className="w-full rounded-md border border-border px-3 py-2 text-sm"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
          <Button type="submit" className="w-full" disabled={!csrfToken || isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send reset link'}
          </Button>
        </form>
        {status && (
          <div className="mt-4 rounded-md border border-border bg-muted/40 px-3 py-2 text-xs text-muted-foreground">
            {status}
            {resetToken && (
              <div className="mt-2">
                Dev reset token: <span className="font-mono">{resetToken}</span>
              </div>
            )}
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
