'use client';

import { ReactNode } from 'react';

type FormFieldProps = {
  label: string;
  name: string;
  error?: string;
  required?: boolean;
  hint?: string;
  children: ReactNode;
};

export default function FormField({ label, name, error, required, hint, children }: FormFieldProps) {
  return (
    <div>
      <label htmlFor={name} className="text-xs uppercase tracking-wide text-muted-foreground mb-2 block">
        {label}
        {required && <span className="text-destructive ml-1">*</span>}
      </label>
      <div className={error ? 'border-destructive' : ''}>
        {children}
      </div>
      {hint && !error && (
        <p className="mt-1 text-xs text-muted-foreground">{hint}</p>
      )}
      {error && (
        <p className="mt-1 text-xs text-destructive" role="alert" aria-live="polite">
          {error}
        </p>
      )}
    </div>
  );
}
