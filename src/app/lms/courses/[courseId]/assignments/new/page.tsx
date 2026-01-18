'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

type NewAssignmentProps = {
  params: { courseId: string };
};

export default function NewAssignmentPage({ params }: NewAssignmentProps) {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [points, setPoints] = useState('100');
  const [dueDate, setDueDate] = useState('');
  const [submissionType, setSubmissionType] = useState('file');
  const [description, setDescription] = useState('');
  const [rubricTitle, setRubricTitle] = useState('Capstone Rubric');

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-foreground">Create Assignment</h2>
        <p className="text-sm text-muted-foreground">Course: {params.courseId}</p>
      </div>
      <div className="rounded-2xl border border-border bg-card p-6 space-y-4">
        <div>
          <label className="text-xs uppercase tracking-wide text-muted-foreground">Assignment title</label>
          <input
            className="mt-2 w-full rounded-md border border-border px-3 py-2 text-sm"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="e.g., Risk Memo"
          />
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="text-xs uppercase tracking-wide text-muted-foreground">Points</label>
            <input
              className="mt-2 w-full rounded-md border border-border px-3 py-2 text-sm"
              type="number"
              value={points}
              onChange={(event) => setPoints(event.target.value)}
            />
          </div>
          <div>
            <label className="text-xs uppercase tracking-wide text-muted-foreground">Due date</label>
            <input
              className="mt-2 w-full rounded-md border border-border px-3 py-2 text-sm"
              type="datetime-local"
              value={dueDate}
              onChange={(event) => setDueDate(event.target.value)}
            />
          </div>
        </div>
        <div>
          <label className="text-xs uppercase tracking-wide text-muted-foreground">Submission type</label>
          <select
            className="mt-2 w-full rounded-md border border-border px-3 py-2 text-sm"
            value={submissionType}
            onChange={(event) => setSubmissionType(event.target.value)}
          >
            <option value="file">File upload</option>
            <option value="text">Text entry</option>
            <option value="url">URL</option>
            <option value="media">Media recording</option>
          </select>
        </div>
        <div>
          <label className="text-xs uppercase tracking-wide text-muted-foreground">Description</label>
          <textarea
            className="mt-2 w-full rounded-md border border-border px-3 py-2 text-sm"
            rows={6}
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            placeholder="Assignment instructions and requirements..."
          />
        </div>
        <div className="grid gap-4 lg:grid-cols-[1.2fr_1fr]">
          <div className="rounded-xl border border-dashed border-border p-4 space-y-3">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-foreground">Rubric placeholder</p>
              <span className="text-xs text-muted-foreground">Draft</span>
            </div>
            <div>
              <label className="text-xs uppercase tracking-wide text-muted-foreground">Rubric title</label>
              <input
                className="mt-2 w-full rounded-md border border-border px-3 py-2 text-sm"
                value={rubricTitle}
                onChange={(event) => setRubricTitle(event.target.value)}
                placeholder="Select or create rubric"
              />
            </div>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center justify-between rounded-lg border border-border bg-background px-3 py-2">
                <span>Critical thinking</span>
                <span>30 pts</span>
              </div>
              <div className="flex items-center justify-between rounded-lg border border-border bg-background px-3 py-2">
                <span>Technical depth</span>
                <span>40 pts</span>
              </div>
              <div className="flex items-center justify-between rounded-lg border border-border bg-background px-3 py-2">
                <span>Clarity & formatting</span>
                <span>30 pts</span>
              </div>
            </div>
            <button
              className="w-full rounded-md border border-border px-4 py-2 text-sm text-foreground/80 hover:bg-muted"
              type="button"
            >
              + Attach rubric
            </button>
          </div>
          <div className="rounded-xl border border-border bg-background p-4 space-y-3">
            <p className="text-sm font-semibold text-foreground">Points & grading</p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center justify-between">
                <span>Total points</span>
                <span className="text-foreground">{points || '0'} pts</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Grading scheme</span>
                <span>Points</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Submission attempts</span>
                <span>Unlimited</span>
              </div>
            </div>
            <div className="rounded-lg border border-dashed border-border p-3 text-xs text-muted-foreground">
              Rubric scoring placeholder. Link outcomes and scoring ranges here.
            </div>
          </div>
        </div>
        <div className="flex gap-3">
          <button
            className="rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground hover:bg-primary/90"
            type="button"
            onClick={() => router.push(`/lms/courses/${params.courseId}/assignments`)}
          >
            Save & publish
          </button>
          <button
            className="rounded-md border border-border px-4 py-2 text-sm text-foreground/80 hover:bg-muted"
            type="button"
            onClick={() => router.push(`/lms/courses/${params.courseId}/assignments`)}
          >
            Save draft
          </button>
        </div>
      </div>
    </div>
  );
}
