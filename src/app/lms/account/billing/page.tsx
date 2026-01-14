'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const mockInvoices = [
  {
    id: 'inv_001',
    date: '2024-03-15',
    course: 'AAC Foundations',
    amount: 3000,
    status: 'Paid',
    invoiceUrl: '#',
  },
  {
    id: 'inv_002',
    date: '2024-02-10',
    course: 'AIO Oversight Core',
    amount: 1600,
    status: 'Paid',
    invoiceUrl: '#',
  },
  {
    id: 'inv_003',
    date: '2024-01-05',
    course: 'Task Decomposition Module',
    amount: 1800,
    status: 'Paid',
    invoiceUrl: '#',
  },
];

export default function BillingPage() {
  const [selectedInvoice, setSelectedInvoice] = useState<string | null>(null);

  return (
    <div className="space-y-6">
      <div>
        <Link href="/lms/account" className="text-sm text-primary hover:underline mb-4 inline-block">
          ← Back to Account
        </Link>
        <h2 className="text-2xl font-semibold text-foreground">Billing & Receipts</h2>
        <p className="text-sm text-muted-foreground">View your invoices, receipts, and payment history.</p>
      </div>

      <div className="rounded-2xl border border-border bg-card p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Payment History</h3>
        <div className="space-y-4">
          {mockInvoices.map((invoice) => (
            <div
              key={invoice.id}
              className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-muted/50"
            >
              <div className="flex-1">
                <p className="text-sm font-semibold text-foreground">{invoice.course}</p>
                <p className="text-xs text-muted-foreground">
                  Invoice {invoice.id} · {new Date(invoice.date).toLocaleDateString()}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <p className="text-sm font-semibold text-foreground">€{invoice.amount.toLocaleString()}</p>
                <span className="px-2 py-1 rounded-full text-xs bg-success/10 text-success">
                  {invoice.status}
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    // TODO: Download invoice PDF
                    alert(`Downloading invoice ${invoice.id}`);
                  }}
                >
                  Download
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-border bg-card p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Payment Methods</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Manage your payment methods for future purchases.
        </p>
        <Button variant="outline">Add Payment Method</Button>
      </div>

      <div className="rounded-2xl border border-border bg-card p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Billing Address</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Update your billing address for invoices.
        </p>
        <Button variant="outline">Update Address</Button>
      </div>
    </div>
  );
}
