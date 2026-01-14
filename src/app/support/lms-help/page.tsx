'use client';

import { useState } from 'react';
import Link from 'next/link';

const lmsFaqs = [
  {
    category: 'Enrollment & Access',
    questions: [
      {
        q: 'How do I access my course after purchase?',
        a: 'After purchase, you will receive an email with LMS access instructions. Log in at /lms using your account credentials (email/password, Google, or LinkedIn).',
      },
      {
        q: 'I can\'t see my course in the dashboard',
        a: 'Enrollment is usually instant. If you don\'t see your course, check your email for enrollment confirmation. If still missing, contact support with your purchase receipt.',
      },
      {
        q: 'How do I reset my password?',
        a: 'Use the "Forgot Password" link on the login page. You\'ll receive a password reset email. If using OAuth (Google/LinkedIn), you can reset through your provider.',
      },
    ],
  },
  {
    category: 'Assignments & Submissions',
    questions: [
      {
        q: 'How do I submit an assignment?',
        a: 'Navigate to the assignment in your course, upload your file or paste your text, and click "Submit Assignment". You can resubmit before the deadline.',
      },
      {
        q: 'I submitted the wrong file',
        a: 'You can resubmit assignments before the deadline. Go back to the assignment and upload the correct file. Your previous submission will be replaced.',
      },
      {
        q: 'When will I receive my grade?',
        a: 'Grades are typically returned within 5-7 business days after the deadline. You\'ll receive a notification when your grade is posted.',
      },
    ],
  },
  {
    category: 'Zoom Sessions',
    questions: [
      {
        q: 'How do I join a Zoom session?',
        a: 'Zoom session links are available in your course modules and calendar. Click the join link to enter the meeting. Sessions are also recorded for later viewing.',
      },
      {
        q: 'I missed a live session',
        a: 'All live sessions are recorded and available in your course modules. You can watch recordings at your convenience.',
      },
      {
        q: 'The Zoom link isn\'t working',
        a: 'Check that you\'re logged into the LMS and have access to the course. If the link still doesn\'t work, contact your instructor or support.',
      },
    ],
  },
  {
    category: 'Grades & Feedback',
    questions: [
      {
        q: 'Where can I see my grades?',
        a: 'View all your grades in the "Grades" section of each course. Your overall course grade is displayed on the course home page.',
      },
      {
        q: 'I disagree with my grade',
        a: 'Contact your instructor through the LMS inbox or course discussions. Include details about the assignment and your concern.',
      },
      {
        q: 'How do I download my certificate?',
        a: 'Certificates are available in your course after completion. Go to the course home page and click "Download Certificate".',
      },
    ],
  },
];

export default function LMSHelpPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <div className="container-coad py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link href="/support" className="text-sm text-primary hover:underline mb-4 inline-block">
              ← Back to Support Center
            </Link>
            <h1 className="university-heading-1 text-foreground mb-4">LMS Help Center</h1>
            <p className="body-large text-muted-foreground">
              Get help with using the Canvas-like LMS platform, assignments, grades, and course access.
            </p>
          </div>

          <div className="space-y-6 mb-12">
            {lmsFaqs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="rounded-2xl border border-border bg-card p-6">
                <h2 className="university-heading-3 text-foreground mb-4">{category.category}</h2>
                <div className="space-y-3">
                  {category.questions.map((item, questionIndex) => {
                    const index = categoryIndex * 100 + questionIndex;
                    const isOpen = openIndex === index;
                    return (
                      <div key={questionIndex} className="border-b border-border/50 last:border-0 pb-3 last:pb-0">
                        <button
                          className="w-full text-left flex items-center justify-between text-sm font-semibold text-foreground hover:text-primary"
                          onClick={() => setOpenIndex(isOpen ? null : index)}
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

          <div className="rounded-2xl border border-border bg-card p-6">
            <h2 className="university-heading-3 text-foreground mb-4">Still need help?</h2>
            <p className="text-sm text-muted-foreground mb-4">
              Contact our support team or use the LMS inbox for course-specific questions.
            </p>
            <div className="flex gap-3">
              <Link href="/lms/inbox">
                <button className="rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground hover:bg-primary/90">
                  Open LMS Inbox
                </button>
              </Link>
              <a href="mailto:contact@coad.ai">
                <button className="rounded-md border border-border px-4 py-2 text-sm text-foreground hover:bg-muted">
                  Email Support
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
