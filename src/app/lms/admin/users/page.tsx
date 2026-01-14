'use client';

import { useState } from 'react';

const initialUsers = [
  { name: 'Student A', role: 'Student', status: 'Active' },
  { name: 'Student B', role: 'Student', status: 'Active' },
  { name: 'COAD Faculty', role: 'Instructor', status: 'Active' },
];

export default function UsersAdminPage() {
  const [users, setUsers] = useState(initialUsers);
  const [name, setName] = useState('');
  const [role, setRole] = useState('Student');

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-foreground">Users & Roles</h2>
        <p className="text-sm text-muted-foreground">Manage platform access and permissions.</p>
      </div>
      <div className="rounded-2xl border border-border bg-card p-4 space-y-3">
        <p className="text-sm font-semibold text-foreground">Add user</p>
        <div className="grid gap-3 md:grid-cols-2">
          <input
            className="rounded-md border border-border px-3 py-2 text-sm"
            placeholder="Full name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <select
            className="rounded-md border border-border px-3 py-2 text-sm"
            value={role}
            onChange={(event) => setRole(event.target.value)}
          >
            <option>Student</option>
            <option>Instructor</option>
            <option>Admin</option>
            <option>Observer</option>
          </select>
        </div>
        <button
          className="rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground hover:bg-primary/90"
          type="button"
          onClick={async () => {
            if (!name.trim()) return;
            
            try {
              // TODO: Invite user via API
              // const response = await fetch('/api/users/invite', {
              //   method: 'POST',
              //   headers: { 'Content-Type': 'application/json' },
              //   body: JSON.stringify({
              //     name: name.trim(),
              //     role,
              //   }),
              // });
              
              setUsers((prev) => [{ name: name.trim(), role, status: 'Invited' }, ...prev]);
              setName('');
              setRole('Student');
            } catch (error) {
              console.error('Failed to invite user:', error);
              alert('Failed to invite user. Please try again.');
            }
          }}
        >
          Invite user
        </button>
      </div>
      <div className="overflow-hidden rounded-xl border border-border bg-card">
        <div className="grid grid-cols-[2fr_1fr_1fr] gap-4 border-b border-border px-4 py-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          <span>User</span>
          <span>Role</span>
          <span>Status</span>
        </div>
        {users.map((user) => (
          <div key={user.name} className="grid grid-cols-[2fr_1fr_1fr] gap-4 px-4 py-3 text-sm text-foreground">
            <span>{user.name}</span>
            <span>{user.role}</span>
            <span className="text-muted-foreground">{user.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
