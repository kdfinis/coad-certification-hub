type QuizzesPageProps = {
  params: { courseId: string };
};

'use client';

import Link from 'next/link';
import { useState } from 'react';
import { lmsQuizzes } from '@/lib/lms-data';

export default function QuizzesPage({ params }: QuizzesPageProps) {
  const [newTitle, setNewTitle] = useState('');
  const [localQuizzes, setLocalQuizzes] = useState(() => lmsQuizzes[params.courseId] ?? []);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-foreground">Quizzes</h2>
        <p className="text-sm text-muted-foreground">Course: {params.courseId}</p>
      </div>
      <div className="rounded-2xl border border-border bg-card p-4 space-y-3">
        <p className="text-sm font-semibold text-foreground">Create quiz</p>
        <div className="grid gap-3 md:grid-cols-2">
          <input
            className="rounded-md border border-border px-3 py-2 text-sm"
            placeholder="Quiz title"
            value={newTitle}
            onChange={(event) => setNewTitle(event.target.value)}
          />
        </div>
        <button
          className="rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground hover:bg-primary/90"
          type="button"
          onClick={() => {
            if (!newTitle.trim()) return;
            const id = newTitle.toLowerCase().replace(/\s+/g, '-');
            setLocalQuizzes((prev) => [{ id, title: newTitle.trim(), status: 'Draft' }, ...prev]);
            setNewTitle('');
          }}
        >
          Add quiz
        </button>
      </div>
      {localQuizzes.length === 0 ? (
        <div className="rounded-2xl border border-border bg-card p-8 text-center text-sm text-muted-foreground">
          No quizzes yet. Create one to get started.
        </div>
      ) : (
        <div className="space-y-4">
          {localQuizzes.map((quiz) => (
            <div key={quiz.id} className="rounded-xl border border-border bg-card p-4">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-foreground">{quiz.title}</p>
                <span className="rounded-full bg-muted px-2 py-1 text-xs text-muted-foreground">{quiz.status}</span>
              </div>
              <div className="mt-2 flex flex-wrap gap-3 text-xs text-muted-foreground">
                <span>Due {quiz.due ?? 'TBD'}</span>
                <span>{quiz.timeLimit ?? 'No time limit'}</span>
                <span>{quiz.questions ?? 0} questions</span>
                <span>{quiz.attempts ?? 'Unlimited'} attempts</span>
              </div>
              <Link
                href={`/lms/courses/${params.courseId}/quizzes/${quiz.id}`}
                className="mt-3 inline-flex text-sm font-medium text-primary hover:text-primary/80"
              >
                Open quiz
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
