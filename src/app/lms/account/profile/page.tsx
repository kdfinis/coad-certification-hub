'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { validateEmail, validateRequired } from '@/lib/validation';

export default function ProfilePage() {
  const [formData, setFormData] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    organization: 'Acme Corp',
    phone: '+352 123 456 789',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [saved, setSaved] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setErrors({});
    setSaved(false);

    const nameValidation = validateRequired(formData.name, 'Name');
    if (!nameValidation.valid) {
      setErrors({ name: nameValidation.error || '' });
      return;
    }

    const emailValidation = validateEmail(formData.email);
    if (!emailValidation.valid) {
      setErrors({ email: emailValidation.error || '' });
      return;
    }

    // TODO: Save profile via API
    // await fetch('/api/users/profile', { method: 'PUT', body: JSON.stringify(formData) });

    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="space-y-6">
      <div>
        <Link href="/lms/account" className="text-sm text-primary hover:underline mb-4 inline-block">
          ← Back to Account
        </Link>
        <h2 className="text-2xl font-semibold text-foreground">Profile Settings</h2>
        <p className="text-sm text-muted-foreground">Update your personal information and organization details.</p>
      </div>

      <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-card p-6 space-y-6">
        <div>
          <label className="text-xs uppercase tracking-wide text-muted-foreground mb-2 block">
            Full Name
          </label>
          <input
            className={`w-full rounded-md border px-3 py-2 text-sm ${
              errors.name ? 'border-destructive' : 'border-border'
            }`}
            value={formData.name}
            onChange={(e) => {
              setFormData({ ...formData, name: e.target.value });
              if (errors.name) setErrors({ ...errors, name: '' });
            }}
          />
          {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
        </div>

        <div>
          <label className="text-xs uppercase tracking-wide text-muted-foreground mb-2 block">
            Email Address
          </label>
          <input
            type="email"
            className={`w-full rounded-md border px-3 py-2 text-sm ${
              errors.email ? 'border-destructive' : 'border-border'
            }`}
            value={formData.email}
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
              if (errors.email) setErrors({ ...errors, email: '' });
            }}
          />
          {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
        </div>

        <div>
          <label className="text-xs uppercase tracking-wide text-muted-foreground mb-2 block">
            Organization
          </label>
          <input
            className="w-full rounded-md border border-border px-3 py-2 text-sm"
            value={formData.organization}
            onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
          />
        </div>

        <div>
          <label className="text-xs uppercase tracking-wide text-muted-foreground mb-2 block">
            Phone Number
          </label>
          <input
            type="tel"
            className="w-full rounded-md border border-border px-3 py-2 text-sm"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
        </div>

        {saved && (
          <div className="rounded-lg bg-success/10 p-3 text-sm text-success">
            Profile updated successfully
          </div>
        )}

        <Button type="submit">Save Changes</Button>
      </form>

      <div className="rounded-2xl border border-border bg-card p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Connected Accounts</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 rounded-lg border border-border">
            <div>
              <p className="text-sm font-semibold text-foreground">Google (Gmail)</p>
              <p className="text-xs text-muted-foreground">john.doe@gmail.com</p>
            </div>
            <Button variant="outline" size="sm">Disconnect</Button>
          </div>
          <div className="flex items-center justify-between p-3 rounded-lg border border-border">
            <div>
              <p className="text-sm font-semibold text-foreground">LinkedIn</p>
              <p className="text-xs text-muted-foreground">Not connected</p>
            </div>
            <Button variant="outline" size="sm">Connect</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
