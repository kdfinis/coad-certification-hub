'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function CheckoutSuccessPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container-coad py-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <div className="mx-auto w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="university-heading-1 text-foreground mb-4">Enrollment Successful!</h1>
            <p className="body-large text-muted-foreground">
              Your enrollment has been confirmed. You now have access to the Canvas-like LMS platform.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 mb-8 space-y-4">
            <div>
              <p className="text-sm text-muted-foreground mb-2">What happens next:</p>
              <ul className="text-left space-y-2 text-sm text-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-success">✓</span>
                  <span>Check your email for enrollment confirmation and LMS access instructions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success">✓</span>
                  <span>Invoice and receipt have been sent to your email</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success">✓</span>
                  <span>Your course is now available in your LMS dashboard</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex gap-4 justify-center">
            <Link href="/lms">
              <Button size="lg">Go to LMS Dashboard</Button>
            </Link>
            <Link href="/catalog">
              <Button variant="outline" size="lg">Browse More Courses</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
