'use client';

import Link from 'next/link';
import CourseProgress from '@/components/lms/CourseProgress';
import UpcomingDeadlines from '@/components/lms/UpcomingDeadlines';

type CoursePageProps = {
  params: { courseId: string };
};

const highlights = [
  'Live Zoom sessions every week',
  'Project-based assessments',
  'Verified competency certificate',
];

const mockDeadlines = [
  {
    id: '1',
    title: 'Assignment: Risk Memo',
    type: 'assignment' as const,
    dueDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString(),
    courseId: 'aac-foundations',
    courseName: 'AAC Foundations',
  },
  {
    id: '2',
    title: 'Quiz: AI Act Articles',
    type: 'quiz' as const,
    dueDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString(),
    courseId: 'aac-foundations',
    courseName: 'AAC Foundations',
  },
];

export default function CourseHomePage({ params }: CoursePageProps) {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-border bg-card p-6">
        <p className="text-xs uppercase tracking-wide text-muted-foreground">Course home</p>
        <h2 className="mt-2 text-2xl font-semibold text-foreground">{params.courseId}</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Welcome to your Canvas-like course space. Use the navigation to access modules, assignments,
          quizzes, discussions, and grades.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            href={`/lms/courses/${params.courseId}/modules`}
            className="rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground hover:bg-primary/90"
          >
            Go to modules
          </Link>
          <Link
            href={`/lms/courses/${params.courseId}/assignments`}
            className="rounded-md border border-border px-4 py-2 text-sm text-foreground/80 hover:bg-muted"
          >
            View assignments
          </Link>
          <Link
            href={`/lms/courses/${params.courseId}/certificate`}
            className="rounded-md border border-border px-4 py-2 text-sm text-foreground/80 hover:bg-muted"
          >
            View Certificate
          </Link>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <div className="space-y-6">
          <CourseProgress
            completedModules={3}
            totalModules={8}
            assignmentsSubmitted={5}
            totalAssignments={10}
            currentGrade={85}
          />
          <div className="grid gap-4 md:grid-cols-3">
            {highlights.map((item) => (
              <div key={item} className="rounded-xl border border-border bg-card p-4 text-sm text-foreground">
                {item}
              </div>
            ))}
          </div>
        </div>
        <UpcomingDeadlines deadlines={mockDeadlines} />
      </div>
    </div>
  );
}
