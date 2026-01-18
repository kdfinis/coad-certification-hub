'use client';

import { useState } from 'react';

type CourseSettingsProps = {
  params: { courseId: string };
};

export default function CourseSettingsPage({ params }: CourseSettingsProps) {
  const [title, setTitle] = useState(params.courseId);
  const [visibility, setVisibility] = useState('Private');
  const [timezone, setTimezone] = useState('Europe/Luxembourg');

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-foreground">Course Settings</h2>
        <p className="text-sm text-muted-foreground">Course: {params.courseId}</p>
      </div>
      <div className="rounded-2xl border border-border bg-card p-6 space-y-4">
        <div>
          <label className="text-xs uppercase tracking-wide text-muted-foreground">Course title</label>
          <input
            className="mt-2 w-full rounded-md border border-border px-3 py-2 text-sm"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div>
          <label className="text-xs uppercase tracking-wide text-muted-foreground">Visibility</label>
          <select
            className="mt-2 w-full rounded-md border border-border px-3 py-2 text-sm"
            value={visibility}
            onChange={(event) => setVisibility(event.target.value)}
          >
            <option>Private</option>
            <option>Public</option>
            <option>Invite only</option>
          </select>
        </div>
        <div>
          <label className="text-xs uppercase tracking-wide text-muted-foreground">Timezone</label>
          <select
            className="mt-2 w-full rounded-md border border-border px-3 py-2 text-sm"
            value={timezone}
            onChange={(event) => setTimezone(event.target.value)}
          >
            <option>Europe/Luxembourg</option>
            <option>Europe/Berlin</option>
            <option>UTC</option>
          </select>
        </div>
        <button className="rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground hover:bg-primary/90" type="button">
          Save settings
        </button>
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-2xl border border-border bg-card p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-semibold text-foreground">Roster</h3>
            <button className="rounded-md border border-border px-3 py-1 text-xs text-foreground/80 hover:bg-muted" type="button">
              Invite learner
            </button>
          </div>
          <div className="space-y-2 text-sm text-muted-foreground">
            <div className="flex items-center justify-between rounded-lg border border-border bg-background px-3 py-2">
              <span>Student A</span>
              <span>Section 01</span>
            </div>
            <div className="flex items-center justify-between rounded-lg border border-border bg-background px-3 py-2">
              <span>Student B</span>
              <span>Section 02</span>
            </div>
            <div className="flex items-center justify-between rounded-lg border border-border bg-background px-3 py-2">
              <span>Student C</span>
              <span>Section 01</span>
            </div>
          </div>
          <div className="rounded-lg border border-dashed border-border p-3 text-xs text-muted-foreground">
            Roster management placeholder. Filter by role, status, and last activity.
          </div>
        </div>
        <div className="rounded-2xl border border-border bg-card p-6 space-y-4">
          <h3 className="text-base font-semibold text-foreground">Sections</h3>
          <div className="space-y-2 text-sm text-muted-foreground">
            <div className="flex items-center justify-between rounded-lg border border-border bg-background px-3 py-2">
              <span>Section 01</span>
              <span>Mon/Wed · 18 learners</span>
            </div>
            <div className="flex items-center justify-between rounded-lg border border-border bg-background px-3 py-2">
              <span>Section 02</span>
              <span>Tue/Thu · 16 learners</span>
            </div>
          </div>
          <div className="rounded-lg border border-dashed border-border p-3 text-xs text-muted-foreground">
            Section settings placeholder. Add meeting times, TA assignments, and capacity.
          </div>
        </div>
      </div>
    </div>
  );
}
