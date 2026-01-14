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
    </div>
  );
}
