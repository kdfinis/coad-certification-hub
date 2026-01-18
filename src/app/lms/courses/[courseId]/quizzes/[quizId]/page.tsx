'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { lmsQuizzes } from '@/lib/lms-data';

type QuizDetailProps = {
  params: { courseId: string; quizId: string };
};

const questions = [
  { id: 'q1', prompt: 'Which EU AI Act article covers human oversight?', points: 10 },
  { id: 'q2', prompt: 'Select the correct definition of a high-risk AI system.', points: 15 },
];

export default function QuizDetailPage({ params }: QuizDetailProps) {
  const [submitted, setSubmitted] = useState(false);
  const quiz = useMemo(
    () => (lmsQuizzes[params.courseId] ?? []).find((item) => item.id === params.quizId),
    [params.courseId, params.quizId]
  );

  if (!quiz) {
    return (
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold text-foreground">Quiz not found</h2>
          <p className="text-sm text-muted-foreground">We could not locate that quiz.</p>
        </div>
        <Link
          href={`/lms/courses/${params.courseId}/quizzes`}
          className="inline-flex rounded-md border border-border px-4 py-2 text-sm text-foreground hover:bg-muted"
        >
          Back to quizzes
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-foreground">{quiz.title}</h2>
        <p className="text-sm text-muted-foreground">
          Course: {params.courseId} · Due {quiz.due ?? 'TBD'} · {quiz.questions ?? 0} questions
        </p>
      </div>
      <div className="grid gap-4 lg:grid-cols-[1.2fr_1fr]">
        <div className="rounded-2xl border border-border bg-card p-6 space-y-3">
          <h3 className="text-base font-semibold text-foreground">Quiz settings</h3>
          <div className="grid gap-3 md:grid-cols-2 text-sm text-muted-foreground">
            <div className="flex items-center justify-between rounded-lg border border-border bg-background px-3 py-2">
              <span>Time limit</span>
              <span>{quiz.timeLimit ?? 'No limit'}</span>
            </div>
            <div className="flex items-center justify-between rounded-lg border border-border bg-background px-3 py-2">
              <span>Attempts</span>
              <span>{quiz.attempts ?? 'Unlimited'}</span>
            </div>
            <div className="flex items-center justify-between rounded-lg border border-border bg-background px-3 py-2">
              <span>Shuffle questions</span>
              <span>On</span>
            </div>
            <div className="flex items-center justify-between rounded-lg border border-border bg-background px-3 py-2">
              <span>Access code</span>
              <span>Not required</span>
            </div>
          </div>
        </div>
        <div className="rounded-2xl border border-dashed border-border bg-card p-6 text-sm text-muted-foreground">
          Delivery placeholder. Timer, proctoring, and accommodations show here.
        </div>
      </div>
      <div className="rounded-2xl border border-border bg-card p-6 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-semibold text-foreground">Question list</h3>
          <span className="text-xs text-muted-foreground">25 pts total</span>
        </div>
        {questions.map((question) => (
          <div key={question.id} className="space-y-2">
            <div className="flex items-center justify-between text-sm font-semibold text-foreground">
              <span>{question.prompt}</span>
              <span className="text-xs text-muted-foreground">{question.points} pts</span>
            </div>
            <div className="space-y-2 text-sm text-muted-foreground">
              <label className="flex items-center gap-2">
                <input type="radio" name={question.id} /> Option A
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name={question.id} /> Option B
              </label>
            </div>
          </div>
        ))}
        <button
          className="rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground hover:bg-primary/90"
          onClick={async () => {
            try {
              // TODO: Collect answers and submit
              // const answers = questions.map(q => ({
              //   questionId: q.id,
              //   answer: document.querySelector(`input[name="${q.id}"]:checked`)?.value,
              // }));
              // const response = await fetch('/api/quizzes/submit', {
              //   method: 'POST',
              //   headers: { 'Content-Type': 'application/json' },
              //   body: JSON.stringify({
              //     quizId: params.quizId,
              //     courseId: params.courseId,
              //     answers,
              //   }),
              // });
              
              setSubmitted(true);
            } catch (error) {
              console.error('Quiz submission failed:', error);
              alert('Submission failed. Please try again.');
            }
          }}
          type="button"
        >
          Submit quiz
        </button>
        {submitted && <p className="text-sm text-success">Quiz submitted. Results will post after review.</p>}
      </div>
    </div>
  );
}
