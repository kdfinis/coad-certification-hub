type DiscussionsPageProps = {
  params: { courseId: string };
};

'use client';

import Link from 'next/link';
import { useState } from 'react';
import { lmsDiscussions } from '@/lib/lms-data';

export default function DiscussionsPage({ params }: DiscussionsPageProps) {
  const [newTitle, setNewTitle] = useState('');
  const [localThreads, setLocalThreads] = useState(() => lmsDiscussions[params.courseId] ?? []);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-foreground">Discussions</h2>
        <p className="text-sm text-muted-foreground">Course: {params.courseId}</p>
      </div>
      <div className="rounded-2xl border border-border bg-card p-4 space-y-3">
        <p className="text-sm font-semibold text-foreground">Start a discussion</p>
        <input
          className="rounded-md border border-border px-3 py-2 text-sm"
          placeholder="Discussion title"
          value={newTitle}
          onChange={(event) => setNewTitle(event.target.value)}
        />
        <button
          className="rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground hover:bg-primary/90"
          type="button"
          onClick={() => {
            if (!newTitle.trim()) return;
            const id = newTitle.toLowerCase().replace(/\s+/g, '-');
            setLocalThreads((prev) => [{ id, title: newTitle.trim(), replies: 0 }, ...prev]);
            setNewTitle('');
          }}
        >
          Create discussion
        </button>
      </div>
      <div className="space-y-4">
        {localThreads.map((thread) => (
          <div key={thread.id} className="rounded-xl border border-border bg-card p-4">
            <p className="text-sm font-semibold text-foreground">{thread.title}</p>
            <p className="text-xs text-muted-foreground">Replies: {thread.replies}</p>
            <Link
              href={`/lms/courses/${params.courseId}/discussions/${thread.id}`}
              className="mt-2 inline-flex text-sm font-medium text-primary hover:text-primary/80"
            >
              Open discussion
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
