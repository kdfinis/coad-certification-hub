'use client';

import { useState } from 'react';

type AssignmentDetailProps = {
  params: { courseId: string; assignmentId: string };
};

export default function AssignmentDetailPage({ params }: AssignmentDetailProps) {
  const [fileName, setFileName] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-foreground">Assignment: {params.assignmentId}</h2>
        <p className="text-sm text-muted-foreground">Course: {params.courseId}</p>
      </div>
      <div className="rounded-2xl border border-border bg-card p-6 space-y-4">
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
    </div>
  );
}
