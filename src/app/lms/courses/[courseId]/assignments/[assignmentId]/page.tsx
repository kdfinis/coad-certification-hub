'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { lmsAssignments } from '@/lib/lms-data';

type AssignmentDetailProps = {
  params: { courseId: string; assignmentId: string };
};

export default function AssignmentDetailPage({ params }: AssignmentDetailProps) {
  const [fileName, setFileName] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const assignment = useMemo(
    () => (lmsAssignments[params.courseId] ?? []).find((item) => item.id === params.assignmentId),
    [params.courseId, params.assignmentId]
  );

  if (!assignment) {
    return (
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold text-foreground">Assignment not found</h2>
          <p className="text-sm text-muted-foreground">We could not locate that assignment.</p>
        </div>
        <Link
          href={`/lms/courses/${params.courseId}/assignments`}
          className="inline-flex rounded-md border border-border px-4 py-2 text-sm text-foreground hover:bg-muted"
        >
          Back to assignments
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-foreground">{assignment.title}</h2>
        <p className="text-sm text-muted-foreground">
          Course: {params.courseId} · Due {assignment.due} · {assignment.points ?? 0} pts
        </p>
      </div>
      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <div className="rounded-2xl border border-border bg-card p-6 space-y-4">
          <div>
            <p className="text-sm font-semibold text-foreground">Overview</p>
            <p className="text-sm text-muted-foreground">{assignment.description}</p>
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            <div className="rounded-lg border border-border bg-background p-3 text-sm">
              <p className="text-xs uppercase tracking-wide text-muted-foreground">Status</p>
              <p className="mt-1 font-semibold text-foreground">{assignment.status}</p>
            </div>
            <div className="rounded-lg border border-border bg-background p-3 text-sm">
              <p className="text-xs uppercase tracking-wide text-muted-foreground">Submission</p>
              <p className="mt-1 font-semibold text-foreground">{assignment.submissionType ?? 'File upload'}</p>
            </div>
            <div className="rounded-lg border border-border bg-background p-3 text-sm">
              <p className="text-xs uppercase tracking-wide text-muted-foreground">Rubric</p>
              <p className="mt-1 font-semibold text-foreground">{assignment.rubric ?? 'None'}</p>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground">Submission Instructions</p>
            <p className="text-sm text-muted-foreground">
              Upload a PDF or link to your project. Rubric-based grading will be applied.
            </p>
          </div>
          <div className="rounded-xl border border-dashed border-border p-4 text-sm text-muted-foreground">
            <input
              type="file"
              className="block w-full text-sm text-muted-foreground"
              onChange={(event) => {
                const file = event.target.files?.[0];
                setFileName(file ? file.name : null);
                setSubmitted(false);
              }}
            />
            {fileName && <p className="mt-2 text-xs text-foreground">Selected: {fileName}</p>}
          </div>
          <button
            className="rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground hover:bg-primary/90"
            onClick={async () => {
              if (!fileName) {
                alert('Please select a file first');
                return;
              }
              
              try {
                // TODO: Implement actual submission
                // const formData = new FormData();
                // formData.append('file', file);
                // formData.append('assignmentId', params.assignmentId);
                // formData.append('courseId', params.courseId);
                // const response = await fetch('/api/assignments/submit', {
                //   method: 'POST',
                //   body: formData,
                // });
                
                setSubmitted(true);
              } catch (error) {
                console.error('Submission failed:', error);
                alert('Submission failed. Please try again.');
              }
            }}
            type="button"
          >
            Submit assignment
          </button>
          {submitted && (
            <p className="text-sm text-success">Submission received. You can resubmit before the deadline.</p>
          )}
        </div>
        <div className="space-y-4">
          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="text-base font-semibold text-foreground">Rubric snapshot</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              {assignment.rubric ?? 'No rubric attached'} · 3 criteria
            </p>
            <div className="mt-4 space-y-2 text-sm text-muted-foreground">
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
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="text-base font-semibold text-foreground">Submission history</h3>
            <div className="mt-4 space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center justify-between rounded-lg border border-border bg-background px-3 py-2">
                <span>Initial submission</span>
                <span>Apr 10 · 10:34</span>
              </div>
              <div className="flex items-center justify-between rounded-lg border border-border bg-background px-3 py-2">
                <span>Revision</span>
                <span>Apr 11 · 09:02</span>
              </div>
            </div>
            <p className="mt-3 text-xs text-muted-foreground">Latest submission is used for grading.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
