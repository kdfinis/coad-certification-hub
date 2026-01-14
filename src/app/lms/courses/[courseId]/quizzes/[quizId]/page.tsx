'use client';

import { useState } from 'react';

type QuizDetailProps = {
  params: { courseId: string; quizId: string };
};

const questions = [
  { id: 'q1', prompt: 'Which EU AI Act article covers human oversight?' },
  { id: 'q2', prompt: 'Select the correct definition of a high-risk AI system.' },
];

export default function QuizDetailPage({ params }: QuizDetailProps) {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-foreground">Quiz: {params.quizId}</h2>
        <p className="text-sm text-muted-foreground">Course: {params.courseId}</p>
      </div>
      <div className="rounded-2xl border border-border bg-card p-6 space-y-4">
        {questions.map((question) => (
          <div key={question.id} className="space-y-2">
            <p className="text-sm font-semibold text-foreground">{question.prompt}</p>
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
