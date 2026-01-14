'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

type NewDiscussionProps = {
  params: { courseId: string };
};

export default function NewDiscussionPage({ params }: NewDiscussionProps) {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [requireInitialPost, setRequireInitialPost] = useState(false);
  const [graded, setGraded] = useState(false);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-foreground">Create Discussion</h2>
        <p className="text-sm text-muted-foreground">Course: {params.courseId}</p>
      </div>
      <div className="rounded-2xl border border-border bg-card p-6 space-y-4">
        <div>
          <label className="text-xs uppercase tracking-wide text-muted-foreground">Discussion title</label>
          <input
            className="mt-2 w-full rounded-md border border-border px-3 py-2 text-sm"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="e.g., AI Act Compliance Scenarios"
          />
        </div>
        <div>
          <label className="text-xs uppercase tracking-wide text-muted-foreground">Initial message</label>
          <textarea
            className="mt-2 w-full rounded-md border border-border px-3 py-2 text-sm"
            rows={6}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="Discussion prompt or initial post..."
          />
        </div>
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm text-foreground">
            <input
              type="checkbox"
              checked={requireInitialPost}
              onChange={(event) => setRequireInitialPost(event.target.checked)}
            />
            Require students to post before seeing replies
          </label>
          <label className="flex items-center gap-2 text-sm text-foreground">
            <input type="checkbox" checked={graded} onChange={(event) => setGraded(event.target.checked)} />
            This is a graded discussion
          </label>
        </div>
        <div className="flex gap-3">
          <button
            className="rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground hover:bg-primary/90"
            type="button"
            onClick={() => router.push(`/lms/courses/${params.courseId}/discussions`)}
          >
            Save & publish
          </button>
          <button
            className="rounded-md border border-border px-4 py-2 text-sm text-foreground/80 hover:bg-muted"
            type="button"
            onClick={() => router.push(`/lms/courses/${params.courseId}/discussions`)}
          >
            Save draft
          </button>
        </div>
      </div>
    </div>
  );
}
