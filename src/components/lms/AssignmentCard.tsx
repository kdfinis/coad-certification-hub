'use client';

import Link from 'next/link';
import type { Assignment } from '@/lib/types';
import { formatDateTime } from '@/lib/lms-utils';

type AssignmentCardProps = {
  assignment: Assignment;
  submission?: {
    submittedAt?: string;
    grade?: number;
  };
  showCourse?: boolean;
  courseName?: string;
};

export default function AssignmentCard({ assignment, submission, showCourse, courseName }: AssignmentCardProps) {
  const isOverdue = new Date(assignment.dueDate) < new Date() && !submission?.submittedAt;
  const isSubmitted = !!submission?.submittedAt;

  return (
    <Link href={`/lms/courses/${assignment.courseId}/assignments/${assignment.id}`}>
      <div className={`rounded-xl border p-4 card-hover ${
        isOverdue ? 'border-destructive bg-destructive/5' :
        isSubmitted ? 'border-success bg-success/5' :
        'border-border'
      }`}>
        <div className="flex items-start justify-between mb-2">
          <h4 className="text-sm font-semibold text-foreground">{assignment.title}</h4>
          <span className="text-xs text-muted-foreground">{assignment.points} pts</span>
        </div>
        {showCourse && courseName && (
          <p className="text-xs text-muted-foreground mb-2">{courseName}</p>
        )}
        <div className="flex items-center justify-between text-xs">
          <span className={`${
            isOverdue ? 'text-destructive' :
            new Date(assignment.dueDate) < new Date(Date.now() + 3 * 24 * 60 * 60 * 1000) ? 'text-warning' :
            'text-muted-foreground'
          }`}>
            Due: {formatDateTime(assignment.dueDate)}
          </span>
          {isSubmitted && (
            <span className="text-success">✓ Submitted</span>
          )}
          {submission?.grade !== undefined && (
            <span className="text-foreground font-semibold">{submission.grade}%</span>
          )}
        </div>
      </div>
    </Link>
  );
}
