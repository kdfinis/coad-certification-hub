'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function LmsAuthPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showEmailForm, setShowEmailForm] = useState(false);

  const handleEmailAuth = async (event: React.FormEvent) => {
    event.preventDefault();
    // TODO: Implement email/password authentication
    // const response = await fetch('/api/auth/login', {
    //   method: 'POST',
    //   body: JSON.stringify({ email, password }),
    // });
    router.push('/lms');
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
        <h2 className="text-2xl font-semibold text-foreground">Sign in to COAD LMS</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Use your email, Google (Gmail), or LinkedIn account to continue.
        </p>
        <div className="mt-6 space-y-3">
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
              <input
                type="password"
                placeholder="Password"
                className="w-full rounded-md border border-border px-3 py-2 text-sm"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <div className="flex gap-2">
                <Button type="submit" className="flex-1">Sign in</Button>
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
