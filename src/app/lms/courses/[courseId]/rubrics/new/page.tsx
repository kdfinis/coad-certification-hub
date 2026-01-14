'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

type NewRubricProps = {
  params: { courseId: string };
};

type Criterion = {
  id: string;
  title: string;
  points: string;
  description: string;
};

export default function NewRubricPage({ params }: NewRubricProps) {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [criteria, setCriteria] = useState<Criterion[]>([]);

  const addCriterion = () => {
    setCriteria((prev) => [
      ...prev,
      { id: Date.now().toString(), title: '', points: '25', description: '' },
    ]);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-foreground">Create Rubric</h2>
        <p className="text-sm text-muted-foreground">Course: {params.courseId}</p>
      </div>
      <div className="rounded-2xl border border-border bg-card p-6 space-y-4">
        <div>
          <label className="text-xs uppercase tracking-wide text-muted-foreground">Rubric title</label>
          <input
            className="mt-2 w-full rounded-md border border-border px-3 py-2 text-sm"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="e.g., Capstone Project Rubric"
          />
        </div>
        <div>
          <p className="text-xs uppercase tracking-wide text-muted-foreground mb-3">Criteria</p>
          {criteria.map((criterion) => (
            <div key={criterion.id} className="mb-4 rounded-xl border border-border bg-background p-4 space-y-3">
              <div className="grid gap-3 md:grid-cols-2">
                <input
                  className="rounded-md border border-border px-3 py-2 text-sm"
                  value={criterion.title}
                  onChange={(event) => {
                    setCriteria((prev) =>
                      prev.map((c) => (c.id === criterion.id ? { ...c, title: event.target.value } : c))
                    );
                  }}
                  placeholder="Criterion title"
                />
                <input
                  className="rounded-md border border-border px-3 py-2 text-sm"
                  type="number"
                  value={criterion.points}
                  onChange={(event) => {
                    setCriteria((prev) =>
                      prev.map((c) => (c.id === criterion.id ? { ...c, points: event.target.value } : c))
                    );
                  }}
                  placeholder="Points"
                />
              </div>
              <textarea
                className="w-full rounded-md border border-border px-3 py-2 text-sm"
                rows={2}
                value={criterion.description}
                onChange={(event) => {
                  setCriteria((prev) =>
                    prev.map((c) => (c.id === criterion.id ? { ...c, description: event.target.value } : c))
                  );
                }}
                placeholder="Description..."
              />
            </div>
          ))}
          <button
            className="rounded-md border border-border px-4 py-2 text-sm text-foreground/80 hover:bg-muted"
            type="button"
            onClick={addCriterion}
          >
            + Add criterion
          </button>
        </div>
        <div className="flex gap-3">
          <button
            className="rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground hover:bg-primary/90"
            type="button"
            onClick={() => router.push(`/lms/courses/${params.courseId}/rubrics`)}
          >
            Save rubric
          </button>
          <button
            className="rounded-md border border-border px-4 py-2 text-sm text-foreground/80 hover:bg-muted"
            type="button"
            onClick={() => router.push(`/lms/courses/${params.courseId}/rubrics`)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
