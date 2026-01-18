'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { lmsDiscussions } from '@/lib/lms-data';

type DiscussionDetailProps = {
  params: { courseId: string; threadId: string };
};

const initialReplies = [
  { author: 'COAD Faculty', message: 'Share your main learning goal for this module.' },
  { author: 'Student A', message: 'I want to improve governance workflows for AI audits.' },
];

export default function DiscussionDetailPage({ params }: DiscussionDetailProps) {
  const [replyText, setReplyText] = useState('');
  const [replies, setReplies] = useState(initialReplies);
  const thread = useMemo(
    () => (lmsDiscussions[params.courseId] ?? []).find((item) => item.id === params.threadId),
    [params.courseId, params.threadId]
  );

  if (!thread) {
    return (
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold text-foreground">Discussion not found</h2>
          <p className="text-sm text-muted-foreground">We could not locate that thread.</p>
        </div>
        <Link
          href={`/lms/courses/${params.courseId}/discussions`}
          className="inline-flex rounded-md border border-border px-4 py-2 text-sm text-foreground hover:bg-muted"
        >
          Back to discussions
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-foreground">{thread.title}</h2>
        <p className="text-sm text-muted-foreground">
          Course: {params.courseId} · Started by {thread.author ?? 'COAD Faculty'} · Last activity {thread.lastActivity}
        </p>
      </div>
      <div className="rounded-2xl border border-border bg-card p-6">
        <p className="text-sm font-semibold text-foreground">Prompt</p>
        <p className="mt-2 text-sm text-muted-foreground">{thread.excerpt}</p>
      </div>
      <div className="space-y-4">
        {replies.map((reply, index) => (
          <div key={`${reply.author}-${index}`} className="rounded-xl border border-border bg-card p-4">
            <p className="text-sm font-semibold text-foreground">{reply.author}</p>
            <p className="text-sm text-muted-foreground">{reply.message}</p>
          </div>
        ))}
      </div>
      <div className="rounded-2xl border border-border bg-card p-4">
        <p className="text-sm font-semibold text-foreground">Reply</p>
        <textarea
          className="mt-2 w-full rounded-md border border-border p-2 text-sm"
          rows={4}
          value={replyText}
          onChange={(event) => setReplyText(event.target.value)}
        />
        <button
          className="mt-3 rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground hover:bg-primary/90"
          type="button"
          onClick={async () => {
            if (!replyText.trim()) return;
            
            try {
              // TODO: Submit reply to API
              // const response = await fetch('/api/discussions/reply', {
              //   method: 'POST',
              //   headers: { 'Content-Type': 'application/json' },
              //   body: JSON.stringify({
              //     threadId: params.threadId,
              //     courseId: params.courseId,
              //     message: replyText.trim(),
              //   }),
              // });
              
              setReplies((prev) => [...prev, { author: 'You', message: replyText.trim() }]);
              setReplyText('');
            } catch (error) {
              console.error('Failed to post reply:', error);
              alert('Failed to post reply. Please try again.');
            }
          }}
        >
          Post reply
        </button>
      </div>
    </div>
  );
}
