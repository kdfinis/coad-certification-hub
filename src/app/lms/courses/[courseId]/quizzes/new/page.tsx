'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

type NewQuizProps = {
  params: { courseId: string };
};

type Question = {
  id: string;
  type: 'multiple_choice' | 'true_false' | 'essay' | 'fill_blank';
  prompt: string;
  points: string;
};

export default function NewQuizPage({ params }: NewQuizProps) {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [timeLimit, setTimeLimit] = useState('');
  const [questions, setQuestions] = useState<Question[]>([]);

  const addQuestion = () => {
    setQuestions((prev) => [
      ...prev,
      { id: Date.now().toString(), type: 'multiple_choice', prompt: '', points: '10' },
    ]);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-foreground">Create Quiz</h2>
        <p className="text-sm text-muted-foreground">Course: {params.courseId}</p>
      </div>
      <div className="rounded-2xl border border-border bg-card p-6 space-y-4">
        <div>
          <label className="text-xs uppercase tracking-wide text-muted-foreground">Quiz title</label>
          <input
            className="mt-2 w-full rounded-md border border-border px-3 py-2 text-sm"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="e.g., Fundamentals Assessment"
          />
        </div>
        <div>
          <label className="text-xs uppercase tracking-wide text-muted-foreground">Time limit (minutes)</label>
          <input
            className="mt-2 w-full rounded-md border border-border px-3 py-2 text-sm"
            type="number"
            value={timeLimit}
            onChange={(event) => setTimeLimit(event.target.value)}
            placeholder="Leave blank for no limit"
          />
        </div>
        <div>
          <p className="text-xs uppercase tracking-wide text-muted-foreground mb-3">Questions</p>
          {questions.map((question) => (
            <div key={question.id} className="mb-4 rounded-xl border border-border bg-background p-4 space-y-3">
              <div className="grid gap-3 md:grid-cols-2">
                <select
                  className="rounded-md border border-border px-3 py-2 text-sm"
                  value={question.type}
                  onChange={(event) => {
                    setQuestions((prev) =>
                      prev.map((q) => (q.id === question.id ? { ...q, type: event.target.value as Question['type'] } : q))
                    );
                  }}
                >
                  <option value="multiple_choice">Multiple choice</option>
                  <option value="true_false">True/False</option>
                  <option value="essay">Essay</option>
                  <option value="fill_blank">Fill in the blank</option>
                </select>
                <input
                  className="rounded-md border border-border px-3 py-2 text-sm"
                  type="number"
                  value={question.points}
                  onChange={(event) => {
                    setQuestions((prev) =>
                      prev.map((q) => (q.id === question.id ? { ...q, points: event.target.value } : q))
                    );
                  }}
                  placeholder="Points"
                />
              </div>
              <textarea
                className="w-full rounded-md border border-border px-3 py-2 text-sm"
                rows={2}
                value={question.prompt}
                onChange={(event) => {
                  setQuestions((prev) =>
                    prev.map((q) => (q.id === question.id ? { ...q, prompt: event.target.value } : q))
                  );
                }}
                placeholder="Question prompt..."
              />
            </div>
          ))}
          <button
            className="rounded-md border border-border px-4 py-2 text-sm text-foreground/80 hover:bg-muted"
            type="button"
            onClick={addQuestion}
          >
            + Add question
          </button>
        </div>
        <div className="flex gap-3">
          <button
            className="rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground hover:bg-primary/90"
            type="button"
            onClick={() => router.push(`/lms/courses/${params.courseId}/quizzes`)}
          >
            Save & publish
          </button>
          <button
            className="rounded-md border border-border px-4 py-2 text-sm text-foreground/80 hover:bg-muted"
            type="button"
            onClick={() => router.push(`/lms/courses/${params.courseId}/quizzes`)}
          >
            Save draft
          </button>
        </div>
      </div>
    </div>
  );
}
