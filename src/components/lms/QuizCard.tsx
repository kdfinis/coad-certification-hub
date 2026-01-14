'use client';

import Link from 'next/link';
import type { Quiz } from '@/lib/types';
import { formatDateTime } from '@/lib/lms-utils';

type QuizCardProps = {
  quiz: Quiz;
  attempt?: {
    score?: number;
    submittedAt?: string;
  };
  showCourse?: boolean;
  courseName?: string;
};

export default function QuizCard({ quiz, attempt, showCourse, courseName }: QuizCardProps) {
  const isCompleted = !!attempt?.submittedAt;
  const isOverdue = quiz.dueDate && new Date(quiz.dueDate) < new Date() && !isCompleted;

  return (
    <Link href={`/lms/courses/${quiz.courseId}/quizzes/${quiz.id}`}>
      <div className={`rounded-xl border p-4 card-hover ${
        isOverdue ? 'border-destructive bg-destructive/5' :
        isCompleted ? 'border-success bg-success/5' :
        'border-border'
      }`}>
        <div className="flex items-start justify-between mb-2">
          <h4 className="text-sm font-semibold text-foreground">{quiz.title}</h4>
          <span className="text-xs text-muted-foreground">{quiz.points} pts</span>
        </div>
        {showCourse && courseName && (
          <p className="text-xs text-muted-foreground mb-2">{courseName}</p>
        )}
        <div className="space-y-1 text-xs text-muted-foreground">
          {quiz.timeLimit && (
            <p>Time limit: {quiz.timeLimit} minutes</p>
          )}
          {quiz.dueDate && (
            <p className={isOverdue ? 'text-destructive' : ''}>
              Due: {formatDateTime(quiz.dueDate)}
            </p>
          )}
          {isCompleted && attempt?.score !== undefined && (
            <p className="text-success font-semibold">Score: {attempt.score}%</p>
          )}
        </div>
      </div>
    </Link>
  );
}
