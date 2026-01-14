'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const faqCategories = [
  {
    title: 'Enrollment & Access',
    questions: [
      {
        q: 'How do I access my course after purchase?',
        a: 'After purchase, you will receive an email with LMS access instructions. You can also log in at /lms using your account credentials.',
      },
      {
        q: 'When will I get LMS access?',
        a: 'LMS access is granted immediately after successful payment. You should receive access within minutes of purchase.',
      },
      {
        q: 'Can I access courses on mobile?',
        a: 'Yes, the LMS is fully responsive and works on all devices. Mobile access is optimized for learning on the go.',
      },
    ],
  },
  {
    title: 'Certification & Credentials',
    questions: [
      {
        q: 'What certification do I receive?',
        a: 'You receive a blockchain-verified certificate of competency that is EU AI Act compliant and convertible to ECTS credits.',
      },
      {
        q: 'How do I share my certificate?',
        a: 'Certificates can be shared on LinkedIn and added to compliance portfolios. Verification links are provided for employers.',
      },
      {
        q: 'Are certificates recognized internationally?',
        a: 'Yes, COAD certifications are recognized as professional designations and are ECTS-compatible for academic credit transfer.',
      },
    ],
  },
  {
    title: 'Zoom Sessions & Live Learning',
    questions: [
      {
        q: 'How do I join Zoom sessions?',
        a: 'Zoom session links are available in your course modules. Sessions are scheduled and appear in your LMS calendar.',
      },
      {
        q: 'Are sessions recorded?',
        a: 'Yes, recorded sessions are available in your course modules for asynchronous review.',
      },
      {
        q: 'What if I miss a live session?',
        a: 'All live sessions are recorded and available in your course. You can watch recordings at your convenience.',
      },
    ],
  },
  {
    title: 'Refunds & Billing',
    questions: [
      {
        q: 'What is your refund policy?',
        a: 'Refunds are available within 14 days of purchase if you have not accessed more than 20% of course content. See our refund policy for details.',
      },
      {
        q: 'Do you provide invoices?',
        a: 'Yes, invoices are automatically generated and sent to your email after purchase. VAT is included for EU customers.',
      },
      {
        q: 'Can I pay in installments?',
        a: 'Contact us for corporate training options. Individual course payments are one-time transactions.',
      },
    ],
  },
];

export default function SupportPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <div className="container-coad py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="university-heading-1 text-foreground mb-4">Support Center</h1>
          <p className="body-large text-muted-foreground mb-12">
            Find answers to common questions or contact our support team.
          </p>

          <div className="space-y-6 mb-12">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="rounded-2xl border border-border bg-card p-6">
                <h2 className="university-heading-3 text-foreground mb-4">{category.title}</h2>
                <div className="space-y-3">
                  {category.questions.map((item, questionIndex) => {
                    const index = `${categoryIndex}-${questionIndex}`;
                    const isOpen = openIndex === categoryIndex * 100 + questionIndex;
                    return (
                      <div key={questionIndex} className="border-b border-border/50 last:border-0 pb-3 last:pb-0">
                        <button
                          className="w-full text-left flex items-center justify-between text-sm font-semibold text-foreground hover:text-primary"
                          onClick={() => setOpenIndex(isOpen ? null : categoryIndex * 100 + questionIndex)}
                        >
                          <span>{item.q}</span>
                          <svg
                            className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        {isOpen && <p className="mt-2 text-sm text-muted-foreground">{item.a}</p>}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 mb-6">
            <h2 className="university-heading-3 text-foreground mb-4">LMS-Specific Help</h2>
            <p className="text-sm text-muted-foreground mb-4">
              Need help with assignments, grades, Zoom sessions, or course access? Visit our LMS Help Center.
            </p>
            <Link href="/support/lms-help">
              <Button>Visit LMS Help Center</Button>
            </Link>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6">
            <h2 className="university-heading-3 text-foreground mb-4">Still need help?</h2>
            <p className="text-sm text-muted-foreground mb-4">
              Contact our support team or check your LMS inbox for course-specific questions.
            </p>
            <div className="flex gap-3">
              <Link href="/lms/inbox">
                <Button>Open LMS Inbox</Button>
              </Link>
              <a href="mailto:contact@coad.ai">
                <Button variant="outline">Email Support</Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
