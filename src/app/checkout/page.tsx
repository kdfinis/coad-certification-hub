'use client';

import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { validateEmail, validateRequired, validateVATId } from '@/lib/validation';
import Loading from '@/components/ui/loading';

const coursePrices: Record<string, { title: string; price: number }> = {
  'aac-foundations': { title: 'AAC Foundations', price: 3000 },
  'aio-oversight': { title: 'AIO Oversight Core', price: 1600 },
  'acd-qap': { title: 'ACD QAP Tier', price: 1800 },
};

export default function CheckoutPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const courseId = searchParams.get('course') || '';
  const course = coursePrices[courseId] || { title: 'Course', price: 0 };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    vatId: '',
    company: '',
  });

  const [agreedToRefund, setAgreedToRefund] = useState(false);
  const [vat, setVat] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const total = course.price + vat;

  useEffect(() => {
    if (formData.country === 'LU' || formData.country === 'DE' || formData.country === 'FR') {
      setVat(course.price * 0.17);
    } else {
      setVat(0);
    }
  }, [formData.country, course.price]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setErrors({});
    setIsSubmitting(true);
    
    // Validate form
    const nameValidation = validateRequired(formData.name, 'Name');
    if (!nameValidation.valid) {
      setErrors((prev) => ({ ...prev, name: nameValidation.error || '' }));
      setIsSubmitting(false);
      return;
    }
    
    const emailValidation = validateEmail(formData.email);
    if (!emailValidation.valid) {
      setErrors((prev) => ({ ...prev, email: emailValidation.error || '' }));
      setIsSubmitting(false);
      return;
    }
    
    const countryValidation = validateRequired(formData.country, 'Country');
    if (!countryValidation.valid) {
      setErrors((prev) => ({ ...prev, country: countryValidation.error || '' }));
      setIsSubmitting(false);
      return;
    }
    
    if (formData.vatId && formData.country) {
      const vatValidation = validateVATId(formData.vatId, formData.country);
      if (!vatValidation.valid) {
        setErrors((prev) => ({ ...prev, vatId: vatValidation.error || '' }));
        setIsSubmitting(false);
        return;
      }
    }
    
    if (!agreedToRefund) {
      setErrors((prev) => ({ ...prev, refund: 'You must agree to the refund policy' }));
      setIsSubmitting(false);
      return;
    }
    
    try {
      // TODO: Replace with actual payment processing
      // const paymentResponse = await fetch('/api/payments/create-intent', {
      //   method: 'POST',
      //   body: JSON.stringify({ courseId, amount: total, ...formData }),
      // });
      
      // Create enrollment after payment success
      const enrollmentResponse = await fetch('/api/enrollments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: formData.email, // Temporary: use email as user ID
          courseId,
          role: 'Student',
        }),
      });
      
      if (enrollmentResponse.ok) {
        router.push(`/checkout/success?course=${courseId}`);
      } else {
        setErrors({ submit: 'Enrollment failed. Please contact support.' });
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error('Checkout error:', error);
      setErrors({ submit: 'An error occurred. Please try again.' });
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container-coad py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="university-heading-1 text-foreground mb-8">Checkout</h1>

          <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
            <div className="space-y-6">
              <div className="rounded-2xl border border-border bg-card p-6">
                <h2 className="university-heading-3 text-foreground mb-4">Billing Information</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-xs uppercase tracking-wide text-muted-foreground">Full name</label>
                    <input
                      className={`mt-2 w-full rounded-md border px-3 py-2 text-sm ${
                        errors.name ? 'border-destructive' : 'border-border'
                      }`}
                      required
                      value={formData.name}
                      onChange={(event) => {
                        setFormData({ ...formData, name: event.target.value });
                        if (errors.name) setErrors((prev) => ({ ...prev, name: '' }));
                      }}
                    />
                    {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-wide text-muted-foreground">Email</label>
                    <input
                      className={`mt-2 w-full rounded-md border px-3 py-2 text-sm ${
                        errors.email ? 'border-destructive' : 'border-border'
                      }`}
                      type="email"
                      required
                      value={formData.email}
                      onChange={(event) => {
                        setFormData({ ...formData, email: event.target.value });
                        if (errors.email) setErrors((prev) => ({ ...prev, email: '' }));
                      }}
                    />
                    {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-wide text-muted-foreground">Country</label>
                    <select
                      className={`mt-2 w-full rounded-md border px-3 py-2 text-sm ${
                        errors.country ? 'border-destructive' : 'border-border'
                      }`}
                      required
                      value={formData.country}
                      onChange={(event) => {
                        setFormData({ ...formData, country: event.target.value });
                        if (errors.country) setErrors((prev) => ({ ...prev, country: '' }));
                      }}
                    >
                      <option value="">Select country</option>
                      <option value="LU">Luxembourg</option>
                      <option value="DE">Germany</option>
                      <option value="FR">France</option>
                      <option value="US">United States</option>
                    </select>
                    {errors.country && <p className="mt-1 text-xs text-destructive">{errors.country}</p>}
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-wide text-muted-foreground">Company (optional)</label>
                    <input
                      className="mt-2 w-full rounded-md border border-border px-3 py-2 text-sm"
                      value={formData.company}
                      onChange={(event) => setFormData({ ...formData, company: event.target.value })}
                    />
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-wide text-muted-foreground">VAT ID (if applicable)</label>
                    <input
                      className={`mt-2 w-full rounded-md border px-3 py-2 text-sm ${
                        errors.vatId ? 'border-destructive' : 'border-border'
                      }`}
                      value={formData.vatId}
                      onChange={(event) => {
                        setFormData({ ...formData, vatId: event.target.value });
                        if (errors.vatId) setErrors((prev) => ({ ...prev, vatId: '' }));
                      }}
                    />
                    {errors.vatId && <p className="mt-1 text-xs text-destructive">{errors.vatId}</p>}
                  </div>
                  <div className="flex items-start gap-2">
                    <input
                      type="checkbox"
                      required
                      checked={agreedToRefund}
                      onChange={(event) => {
                        setAgreedToRefund(event.target.checked);
                        if (errors.refund) setErrors((prev) => ({ ...prev, refund: '' }));
                      }}
                    />
                    <label className="text-sm text-foreground">
                      I agree to the{' '}
                      <Link href="/legal/refund-policy" className="text-primary hover:underline">
                        refund policy
                      </Link>
                    </label>
                  </div>
                  {errors.refund && <p className="text-xs text-destructive">{errors.refund}</p>}
                  {errors.submit && <p className="text-sm text-destructive">{errors.submit}</p>}
                  <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        Processing...
                      </span>
                    ) : (
                      'Complete Purchase'
                    )}
                  </Button>
                </form>
              </div>
            </div>

            <div className="lg:sticky lg:top-24">
              <div className="rounded-2xl border border-border bg-card p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Order Summary</h3>
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-foreground">{course.title}</span>
                    <span className="text-foreground">€{course.price.toLocaleString()}</span>
                  </div>
                  {vat > 0 && (
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">VAT</span>
                      <span className="text-muted-foreground">€{vat.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="border-t border-border pt-3 flex justify-between font-semibold">
                    <span className="text-foreground">Total</span>
                    <span className="text-foreground">€{total.toFixed(2)}</span>
                  </div>
                </div>
                <div className="text-xs text-muted-foreground space-y-1">
                  <p>✓ Instant LMS access</p>
                  <p>✓ Invoice provided</p>
                  <p>✓ Secure payment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
