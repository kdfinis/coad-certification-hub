import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function AccountPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-foreground">Account Settings</h2>
        <p className="text-sm text-muted-foreground">Manage your COAD Canvas profile, billing, security, and data.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Link href="/lms/account/profile">
          <div className="rounded-2xl border border-border bg-card p-6 card-hover h-full">
            <h3 className="text-base font-semibold text-foreground mb-2">Profile</h3>
            <p className="text-sm text-muted-foreground mb-4">Name, email, and organization details.</p>
            <Button variant="outline" size="sm">Manage Profile</Button>
          </div>
        </Link>
        <Link href="/lms/account/billing">
          <div className="rounded-2xl border border-border bg-card p-6 card-hover h-full">
            <h3 className="text-base font-semibold text-foreground mb-2">Billing & Receipts</h3>
            <p className="text-sm text-muted-foreground mb-4">View invoices, receipts, and payment history.</p>
            <Button variant="outline" size="sm">View Billing</Button>
          </div>
        </Link>
        <div className="rounded-2xl border border-border bg-card p-6 h-full">
          <h3 className="text-base font-semibold text-foreground mb-2">Security</h3>
          <p className="text-sm text-muted-foreground mb-4">Password and multi-provider sign-in options.</p>
          <Button variant="outline" size="sm">Manage Security</Button>
        </div>
        <Link href="/lms/account/gdpr">
          <div className="rounded-2xl border border-border bg-card p-6 card-hover h-full">
            <h3 className="text-base font-semibold text-foreground mb-2">Data & Privacy</h3>
            <p className="text-sm text-muted-foreground mb-4">GDPR: Export or delete your data.</p>
            <Button variant="outline" size="sm">Manage Data</Button>
          </div>
        </Link>
      </div>
    </div>
  );
}
