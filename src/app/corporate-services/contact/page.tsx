'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function CorporateContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    companySize: '',
    needs: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
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
              <h1 className="university-heading-1 text-foreground mb-4">Request Received</h1>
              <p className="body-large text-muted-foreground">
                Thank you for your interest in COAD corporate training. Our team will contact you within 24 hours to discuss your needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container-coad py-16">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12">
            <h1 className="university-heading-1 text-foreground mb-4">Corporate Training Inquiry</h1>
            <p className="body-large text-muted-foreground">
              Request a demo, custom quote, or consultation for enterprise AI training solutions.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="text-xs uppercase tracking-wide text-muted-foreground mb-2 block">
                    Full name *
                  </label>
                  <input
                    className="w-full rounded-md border border-border px-3 py-2 text-sm"
                    required
                    value={formData.name}
                    onChange={(event) => setFormData({ ...formData, name: event.target.value })}
                  />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-wide text-muted-foreground mb-2 block">
                    Email *
                  </label>
                  <input
                    className="w-full rounded-md border border-border px-3 py-2 text-sm"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(event) => setFormData({ ...formData, email: event.target.value })}
                  />
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="text-xs uppercase tracking-wide text-muted-foreground mb-2 block">
                    Company *
                  </label>
                  <input
                    className="w-full rounded-md border border-border px-3 py-2 text-sm"
                    required
                    value={formData.company}
                    onChange={(event) => setFormData({ ...formData, company: event.target.value })}
                  />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-wide text-muted-foreground mb-2 block">
                    Your role *
                  </label>
                  <input
                    className="w-full rounded-md border border-border px-3 py-2 text-sm"
                    required
                    value={formData.role}
                    onChange={(event) => setFormData({ ...formData, role: event.target.value })}
                  />
                </div>
              </div>

              <div>
                <label className="text-xs uppercase tracking-wide text-muted-foreground mb-2 block">
                  Company size *
                </label>
                <select
                  className="w-full rounded-md border border-border px-3 py-2 text-sm"
                  required
                  value={formData.companySize}
                  onChange={(event) => setFormData({ ...formData, companySize: event.target.value })}
                >
                  <option value="">Select size</option>
                  <option value="1-50">1-50 employees</option>
                  <option value="51-200">51-200 employees</option>
                  <option value="201-1000">201-1000 employees</option>
                  <option value="1000+">1000+ employees</option>
                </select>
              </div>

              <div>
                <label className="text-xs uppercase tracking-wide text-muted-foreground mb-2 block">
                  Training needs *
                </label>
                <select
                  className="w-full rounded-md border border-border px-3 py-2 text-sm"
                  required
                  value={formData.needs}
                  onChange={(event) => setFormData({ ...formData, needs: event.target.value })}
                >
                  <option value="">Select need</option>
                  <option value="ai-compliance">AI Act compliance training</option>
                  <option value="team-upskilling">Team upskilling</option>
                  <option value="executive-coaching">Executive coaching</option>
                  <option value="custom-program">Custom program</option>
                  <option value="demo">Request demo</option>
                </select>
              </div>

              <div>
                <label className="text-xs uppercase tracking-wide text-muted-foreground mb-2 block">
                  Message
                </label>
                <textarea
                  className="w-full rounded-md border border-border px-3 py-2 text-sm"
                  rows={6}
                  value={formData.message}
                  onChange={(event) => setFormData({ ...formData, message: event.target.value })}
                  placeholder="Tell us about your training goals, timeline, and any specific requirements..."
                />
              </div>

              <Button type="submit" className="w-full" size="lg">
                Submit Request
              </Button>
            </form>
          </div>

          <div className="mt-8 rounded-2xl border border-border bg-card p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Why Choose COAD for Corporate Training?</h3>
            <ul className="space-y-2 text-sm text-foreground">
              <li className="flex items-start gap-2">
                <span className="text-success">✓</span>
                <span>EU AI Act compliant curriculum</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-success">✓</span>
                <span>Customized programs for your organization</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-success">✓</span>
                <span>Bulk enrollment and org management</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-success">✓</span>
                <span>Dedicated support and reporting</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
