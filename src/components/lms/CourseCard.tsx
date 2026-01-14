'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import CourseProgress from './CourseProgress';
import type { Course } from '@/lib/types';

type CourseCardProps = {
  course: Course;
  showProgress?: boolean;
  progress?: {
    completedModules: number;
    totalModules: number;
    assignmentsSubmitted: number;
    totalAssignments: number;
    currentGrade: number | null;
  };
};

export default function CourseCard({ course, showProgress = false, progress }: CourseCardProps) {
  return (
    <Link href={`/lms/courses/${course.id}`}>
      <div className="rounded-2xl border border-border bg-card p-6 card-hover h-full flex flex-col">
        <div className="mb-4">
          {course.code && (
            <span className="text-xs text-muted-foreground mb-2 block">{course.code}</span>
          )}
          <h3 className="text-lg font-semibold text-foreground mb-2">{course.title}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{course.description}</p>
        </div>

        {showProgress && progress && (
          <div className="mb-4">
            <CourseProgress {...progress} />
          </div>
        )}

        <div className="mt-auto flex items-center justify-between">
          <span className="text-xs text-muted-foreground">{course.term}</span>
          <span className={`px-2 py-1 rounded-full text-xs ${
            course.status === 'Active' ? 'bg-success/10 text-success' :
            course.status === 'Completed' ? 'bg-primary/10 text-primary' :
            'bg-muted text-muted-foreground'
          }`}>
            {course.status}
          </span>
        </div>
      </div>
    </Link>
  );
}
