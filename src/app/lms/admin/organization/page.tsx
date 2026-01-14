'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const mockOrgs = [
  { id: 'org_001', name: 'Acme Corporation', users: 45, courses: 3, status: 'Active' },
  { id: 'org_002', name: 'Tech Solutions Inc', users: 120, courses: 5, status: 'Active' },
  { id: 'org_003', name: 'Global Industries', users: 28, courses: 2, status: 'Active' },
];

export default function OrganizationAdminPage() {
  const [orgName, setOrgName] = useState('');
  const [orgs, setOrgs] = useState(mockOrgs);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-foreground">Organization Management</h2>
        <p className="text-sm text-muted-foreground">Manage client organizations, bulk enrollments, and corporate reporting.</p>
      </div>

      <div className="rounded-2xl border border-border bg-card p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Create New Organization</h3>
        <div className="flex gap-3">
          <input
            className="flex-1 rounded-md border border-border px-3 py-2 text-sm"
            placeholder="Organization name"
            value={orgName}
            onChange={(e) => setOrgName(e.target.value)}
          />
          <Button
            onClick={() => {
              if (!orgName.trim()) return;
              setOrgs([...orgs, { id: `org_${Date.now()}`, name: orgName.trim(), users: 0, courses: 0, status: 'Active' }]);
              setOrgName('');
            }}
          >
            Create Organization
          </Button>
        </div>
      </div>

      <div className="rounded-2xl border border-border bg-card p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Organizations</h3>
        <div className="overflow-hidden rounded-xl border border-border">
          <div className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-4 border-b border-border px-4 py-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            <span>Organization</span>
            <span>Users</span>
            <span>Courses</span>
            <span>Status</span>
            <span>Actions</span>
          </div>
          {orgs.map((org) => (
            <div key={org.id} className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-4 px-4 py-3 text-sm text-foreground border-b border-border last:border-0">
              <span className="font-semibold">{org.name}</span>
              <span>{org.users}</span>
              <span>{org.courses}</span>
              <span className="px-2 py-1 rounded-full text-xs bg-success/10 text-success w-fit">
                {org.status}
              </span>
              <div className="flex gap-2">
                <Link href={`/lms/admin/organization/${org.id}`}>
                  <Button variant="outline" size="sm">Manage</Button>
                </Link>
                <Button variant="outline" size="sm">Report</Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-2xl border border-border bg-card p-6">
          <h3 className="text-base font-semibold text-foreground mb-2">Bulk Enrollment</h3>
          <p className="text-sm text-muted-foreground mb-4">Import users and assign courses in bulk for organizations.</p>
          <Link href="/lms/admin/enrollments">
            <Button variant="outline">Go to Enrollment Management</Button>
          </Link>
        </div>
        <div className="rounded-2xl border border-border bg-card p-6">
          <h3 className="text-base font-semibold text-foreground mb-2">Corporate Reporting</h3>
          <p className="text-sm text-muted-foreground mb-4">Generate reports on enrollment, progress, and completion for corporate clients.</p>
          <Button variant="outline">Generate Report</Button>
        </div>
      </div>
    </div>
  );
}
