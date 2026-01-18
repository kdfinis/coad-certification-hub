'use client';

import Link from 'next/link';
import CourseProgress from '@/components/lms/CourseProgress';
import UpcomingDeadlines from '@/components/lms/UpcomingDeadlines';
import { lmsAssignments, lmsCourses, lmsDiscussions, lmsModules } from '@/lib/lms-data';

type CoursePageProps = {
  params: { courseId: string };
};

const highlights = [
  'Live Zoom sessions every week',
  'Project-based assessments',
  'Verified competency certificate',
];

const syllabusSections = [
  { title: 'Course Overview', detail: 'Canvas-like structure with weekly modules and live Zoom labs.' },
  { title: 'Learning Outcomes', detail: 'Applied AI delivery, governance, and compliance readiness.' },
  { title: 'Assessments', detail: 'Assignments, quizzes, and capstone projects with rubrics.' },
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
  const course = lmsCourses.find((item) => item.id === params.courseId);
  const modules = lmsModules[params.courseId] ?? [];
  const assignments = lmsAssignments[params.courseId] ?? [];
  const discussions = lmsDiscussions[params.courseId] ?? [];

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-border bg-card p-6">
        <p className="text-xs uppercase tracking-wide text-muted-foreground">Course home</p>
        <h2 className="mt-2 text-2xl font-semibold text-foreground">{course?.title ?? params.courseId}</h2>
        {course && (
          <p className="mt-1 text-sm text-muted-foreground">
            {course.term} · Instructor: {course.instructor}
          </p>
        )}
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
            className="rounded-md border border-border px-4 py-2 text-sm text-foreground hover:bg-muted"
          >
            View assignments
          </Link>
          <Link
            href={`/lms/courses/${params.courseId}/certificate`}
            className="rounded-md border border-border px-4 py-2 text-sm text-foreground hover:bg-muted"
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
          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-semibold text-foreground">Modules</h3>
              <Link href={`/lms/courses/${params.courseId}/modules`} className="text-sm text-primary hover:underline">
                View all
              </Link>
            </div>
            <div className="mt-4 space-y-3">
              {modules.slice(0, 3).map((module) => (
                <div key={module.id} className="rounded-lg border border-border bg-background p-3">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-foreground">{module.title}</p>
                    <span className="rounded-full bg-muted px-2 py-1 text-xs text-muted-foreground">
                      {module.status}
                    </span>
                  </div>
                </div>
              ))}
              {modules.length === 0 && (
                <p className="text-sm text-muted-foreground">No modules available yet.</p>
              )}
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-semibold text-foreground">Assignments</h3>
              <Link
                href={`/lms/courses/${params.courseId}/assignments`}
                className="text-sm text-primary hover:underline"
              >
                View all
              </Link>
            </div>
            <div className="mt-4 space-y-3">
              {assignments.slice(0, 3).map((assignment) => (
                <div key={assignment.id} className="rounded-lg border border-border bg-background p-3">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-foreground">{assignment.title}</p>
                    <span className="text-xs text-muted-foreground">Due {assignment.due}</span>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">Status: {assignment.status}</p>
                </div>
              ))}
              {assignments.length === 0 && (
                <p className="text-sm text-muted-foreground">No assignments posted yet.</p>
              )}
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-semibold text-foreground">Discussions</h3>
              <Link
                href={`/lms/courses/${params.courseId}/discussions`}
                className="text-sm text-primary hover:underline"
              >
                View all
              </Link>
            </div>
            <div className="mt-4 space-y-3">
              {discussions.slice(0, 3).map((thread) => (
                <div key={thread.id} className="rounded-lg border border-border bg-background p-3">
                  <p className="text-sm font-medium text-foreground">{thread.title}</p>
                  <p className="text-xs text-muted-foreground">
                    Replies: {thread.replies} · Last activity: {thread.lastActivity}
                  </p>
                </div>
              ))}
              {discussions.length === 0 && (
                <p className="text-sm text-muted-foreground">No discussions started yet.</p>
              )}
            </div>
          </div>
        </div>
        <UpcomingDeadlines deadlines={mockDeadlines} />
      </div>
      <div className="rounded-2xl border border-border bg-card p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-semibold text-foreground">Syllabus snapshot</h3>
          <Link href={`/lms/courses/${params.courseId}/syllabus`} className="text-sm text-primary hover:underline">
            View full syllabus
          </Link>
        </div>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {syllabusSections.map((section) => (
            <div key={section.title} className="rounded-lg border border-border bg-background p-3">
              <p className="text-sm font-medium text-foreground">{section.title}</p>
              <p className="text-xs text-muted-foreground">{section.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
