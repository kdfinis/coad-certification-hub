'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function GDPRPage() {
  const [exportRequested, setExportRequested] = useState(false);
  const [deleteRequested, setDeleteRequested] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);

  const handleExport = async () => {
    try {
      const response = await fetch('/api/gdpr/export', { method: 'POST' });
      const data = await response.json();
      
      if (data.success) {
        setExportRequested(true);
        alert('Data export requested. You will receive an email with your data within 30 days.');
      } else {
        alert('Failed to request data export. Please contact support.');
      }
    } catch (error) {
      console.error('Export failed:', error);
      alert('Failed to request data export. Please contact support.');
    }
  };

  const handleDelete = async () => {
    if (!confirmDelete) {
      alert('Please confirm deletion by checking the box');
      return;
    }

    try {
      const response = await fetch('/api/gdpr/delete', { method: 'POST' });
      const data = await response.json();
      
      if (data.success) {
        setDeleteRequested(true);
        alert(`Account deletion requested. Your account will be deleted on ${new Date(data.scheduledDate).toLocaleDateString()}. You will receive a confirmation email.`);
      } else {
        alert('Failed to request account deletion. Please contact support.');
      }
    } catch (error) {
      console.error('Delete failed:', error);
      alert('Failed to request account deletion. Please contact support.');
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <Link href="/lms/account" className="text-sm text-primary hover:underline mb-4 inline-block">
          ← Back to Account
        </Link>
        <h2 className="text-2xl font-semibold text-foreground">Data & Privacy (GDPR)</h2>
        <p className="text-sm text-muted-foreground">
          Manage your data rights under GDPR. Export or delete your account data.
        </p>
      </div>

      <div className="rounded-2xl border border-border bg-card p-6">
        <h3 className="text-lg font-semibold text-foreground mb-2">Export Your Data</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Request a copy of all your personal data stored in the COAD LMS. This includes:
        </p>
        <ul className="text-sm text-muted-foreground mb-4 space-y-1 list-disc list-inside">
          <li>Profile information</li>
          <li>Course enrollments and progress</li>
          <li>Assignment submissions and grades</li>
          <li>Quiz attempts and results</li>
          <li>Discussion posts and replies</li>
          <li>Messages and notifications</li>
          <li>Billing and payment history</li>
        </ul>
        <p className="text-sm text-muted-foreground mb-4">
          You will receive your data in a machine-readable format (JSON) within 30 days.
        </p>
        <Button onClick={handleExport} disabled={exportRequested}>
          {exportRequested ? 'Export Requested' : 'Request Data Export'}
        </Button>
      </div>

      <div className="rounded-2xl border border-destructive/50 bg-card p-6">
        <h3 className="text-lg font-semibold text-destructive mb-2">Delete Your Account</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Permanently delete your account and all associated data. This action cannot be undone.
        </p>
        <p className="text-sm text-muted-foreground mb-4">
          <strong>Warning:</strong> This will delete:
        </p>
        <ul className="text-sm text-muted-foreground mb-4 space-y-1 list-disc list-inside">
          <li>Your profile and account information</li>
          <li>All course enrollments and progress</li>
          <li>All submissions, grades, and certificates</li>
          <li>All messages and activity logs</li>
        </ul>
        <p className="text-sm text-muted-foreground mb-4">
          Your account will be deleted within 30 days. You will receive a confirmation email.
        </p>
        <div className="mb-4">
          <label className="flex items-start gap-2">
            <input
              type="checkbox"
              checked={confirmDelete}
              onChange={(e) => setConfirmDelete(e.target.checked)}
              className="mt-1"
            />
            <span className="text-sm text-foreground">
              I understand that this action is permanent and cannot be undone.
            </span>
          </label>
        </div>
        <Button variant="destructive" onClick={handleDelete} disabled={deleteRequested || !confirmDelete}>
          {deleteRequested ? 'Deletion Requested' : 'Request Account Deletion'}
        </Button>
      </div>

      <div className="rounded-2xl border border-border bg-card p-6">
        <h3 className="text-lg font-semibold text-foreground mb-2">Contact Support</h3>
        <p className="text-sm text-muted-foreground mb-4">
          For questions about your data rights or GDPR requests, contact our support team.
        </p>
        <div className="flex gap-3">
          <Link href="/support">
            <Button variant="outline">Visit Support Center</Button>
          </Link>
          <a href="mailto:contact@coad.ai">
            <Button variant="outline">Email Support</Button>
          </a>
        </div>
      </div>
    </div>
  );
}
