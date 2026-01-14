'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import FormField from '@/components/ui/FormField';
import { useFormValidation } from '@/hooks/useFormValidation';
import { validateVATId } from '@/lib/validation';
import { calculateVAT } from '@/lib/lms-utils';
import { api } from '@/lib/api-client';
import Loading from '@/components/ui/loading';
import Link from 'next/link';

type CheckoutFormProps = {
  courseId: string;
  courseTitle: string;
  coursePrice: number;
};

export default function CheckoutForm({ courseId, courseTitle, coursePrice }: CheckoutFormProps) {
  const router = useRouter();
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

  const { errors, touched, validateForm, handleBlur, handleChange, clearErrors } = useFormValidation(
    formData,
    {
      name: ['required'],
      email: ['required', 'email'],
      country: ['required'],
    }
  );

  useEffect(() => {
    if (formData.country && (formData.country === 'LU' || formData.country === 'DE' || formData.country === 'FR')) {
      setVat(calculateVAT(coursePrice, formData.country));
    } else {
      setVat(0);
    }
  }, [formData.country, coursePrice]);

  useEffect(() => {
    if (formData.vatId && formData.country && touched.vatId) {
      const vatValidation = validateVATId(formData.vatId, formData.country);
      if (!vatValidation.valid) {
        handleChange('vatId', formData.vatId);
      }
    }
  }, [formData.vatId, formData.country, touched.vatId, handleChange]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    clearErrors();

    if (!validateForm(formData)) {
      return;
    }

    if (formData.vatId && formData.country) {
      const vatValidation = validateVATId(formData.vatId, formData.country);
      if (!vatValidation.valid) {
        return;
      }
    }

    if (!agreedToRefund) {
      return;
    }

    setIsSubmitting(true);

    try {
      const enrollmentResponse = await api.post('/enrollments', {
        userId: formData.email,
        courseId,
        role: 'Student',
      });

      if (enrollmentResponse.success) {
        router.push(`/checkout/success?course=${courseId}`);
      } else {
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error('Checkout error:', error);
      setIsSubmitting(false);
    }
  };

  const total = coursePrice + vat;

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <FormField label="Full name" name="name" required error={errors.name}>
        <input
          id="name"
          className={`w-full rounded-md border px-3 py-2 text-sm ${
            errors.name ? 'border-destructive' : 'border-border'
          }`}
          value={formData.name}
          onChange={(e) => {
            setFormData({ ...formData, name: e.target.value });
            handleChange('name', e.target.value);
          }}
          onBlur={() => handleBlur('name')}
        />
      </FormField>

      <FormField label="Email" name="email" required error={errors.email}>
        <input
          id="email"
          type="email"
          className={`w-full rounded-md border px-3 py-2 text-sm ${
            errors.email ? 'border-destructive' : 'border-border'
          }`}
          value={formData.email}
          onChange={(e) => {
            setFormData({ ...formData, email: e.target.value });
            handleChange('email', e.target.value);
          }}
          onBlur={() => handleBlur('email')}
        />
      </FormField>

      <FormField label="Country" name="country" required error={errors.country}>
        <select
          id="country"
          className={`w-full rounded-md border px-3 py-2 text-sm ${
            errors.country ? 'border-destructive' : 'border-border'
          }`}
          value={formData.country}
          onChange={(e) => {
            setFormData({ ...formData, country: e.target.value });
            handleChange('country', e.target.value);
          }}
          onBlur={() => handleBlur('country')}
        >
          <option value="">Select country</option>
          <option value="LU">Luxembourg</option>
          <option value="DE">Germany</option>
          <option value="FR">France</option>
          <option value="US">United States</option>
        </select>
      </FormField>

      <FormField label="Company" name="company" hint="Optional">
        <input
          id="company"
          className="w-full rounded-md border border-border px-3 py-2 text-sm"
          value={formData.company}
          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
        />
      </FormField>

      <FormField
        label="VAT ID"
        name="vatId"
        hint="If applicable"
        error={errors.vatId}
      >
        <input
          id="vatId"
          className={`w-full rounded-md border px-3 py-2 text-sm ${
            errors.vatId ? 'border-destructive' : 'border-border'
          }`}
          value={formData.vatId}
          onChange={(e) => {
            setFormData({ ...formData, vatId: e.target.value });
            handleChange('vatId', e.target.value);
          }}
          onBlur={() => handleBlur('vatId')}
        />
      </FormField>

      <div className="flex items-start gap-2">
        <input
          type="checkbox"
          id="refund-agreement"
          checked={agreedToRefund}
          onChange={(e) => setAgreedToRefund(e.target.checked)}
          className="mt-1"
        />
        <label htmlFor="refund-agreement" className="text-sm text-foreground">
          I agree to the{' '}
          <Link href="/legal/refund-policy" className="text-primary hover:underline">
            refund policy
          </Link>
        </label>
      </div>
      {!agreedToRefund && touched.refund && (
        <p className="text-xs text-destructive">You must agree to the refund policy</p>
      )}

      {errors.submit && <p className="text-sm text-destructive">{errors.submit}</p>}

      <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
        {isSubmitting ? (
          <span className="flex items-center gap-2">
            Processing...
          </span>
        ) : (
          `Complete Purchase - €${total.toLocaleString()}`
        )}
      </Button>
    </form>
  );
}
