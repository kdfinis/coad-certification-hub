type AssignmentsPageProps = {
  params: { courseId: string };
};

'use client';

import Link from 'next/link';
import { useState } from 'react';
import { lmsAssignments } from '@/lib/lms-data';

export default function AssignmentsPage({ params }: AssignmentsPageProps) {
  const [newTitle, setNewTitle] = useState('');
  const [newDue, setNewDue] = useState('');
  const [localAssignments, setLocalAssignments] = useState(() => lmsAssignments[params.courseId] ?? []);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-foreground">Assignments</h2>
        <p className="text-sm text-muted-foreground">Course: {params.courseId}</p>
      </div>
      <div className="rounded-2xl border border-border bg-card p-4 space-y-3">
        <p className="text-sm font-semibold text-foreground">Create assignment</p>
        <div className="grid gap-3 md:grid-cols-2">
          <input
            className="rounded-md border border-border px-3 py-2 text-sm"
            placeholder="Assignment title"
            value={newTitle}
            onChange={(event) => setNewTitle(event.target.value)}
          />
          <input
            className="rounded-md border border-border px-3 py-2 text-sm"
            placeholder="Due date"
            value={newDue}
            onChange={(event) => setNewDue(event.target.value)}
          />
        </div>
        <button
          className="rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground hover:bg-primary/90"
          type="button"
          onClick={() => {
            if (!newTitle.trim()) return;
            const id = newTitle.toLowerCase().replace(/\s+/g, '-');
            setLocalAssignments((prev) => [
              { id, title: newTitle.trim(), due: newDue || 'TBD', status: 'Draft' },
              ...prev,
            ]);
            setNewTitle('');
            setNewDue('');
          }}
        >
          Add assignment
        </button>
      </div>
      <div className="space-y-4">
        {localAssignments.map((assignment) => (
          <div key={assignment.id} className="rounded-xl border border-border bg-card p-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-foreground">{assignment.title}</p>
              <span className="text-xs text-muted-foreground">Due {assignment.due}</span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">Status: {assignment.status}</p>
            <Link
              href={`/lms/courses/${params.courseId}/assignments/${assignment.id}`}
              className="mt-2 inline-flex text-sm font-medium text-primary hover:text-primary/80"
            >
              Open assignment
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
