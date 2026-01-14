'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="container-coad text-center">
        <h1 className="university-heading-1 text-foreground mb-4">Something went wrong</h1>
        <p className="body-large text-muted-foreground mb-8 max-w-md mx-auto">
          An unexpected error occurred. Please try again or contact support if the problem persists.
        </p>
        <div className="flex gap-4 justify-center">
          <Button size="lg" onClick={reset}>
            Try Again
          </Button>
          <Link href="/">
            <Button variant="outline" size="lg">Go Home</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
