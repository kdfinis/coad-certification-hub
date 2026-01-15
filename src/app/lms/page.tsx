'use client';

import Link from 'next/link';
import { mockCourses, mockEvents } from '@/lib/lms-data';
import UpcomingDeadlines from '@/components/lms/UpcomingDeadlines';

export default function LmsDashboardPage() {
  return (
    <div className="space-y-8">
      <section className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <div className="rounded-2xl border border-border bg-card p-6">
          <h2 className="text-lg font-semibold text-foreground">Your Courses</h2>
          <p className="text-sm text-muted-foreground">Quick access to active and completed courses.</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {mockCourses.slice(0, 4).map((course) => (
              <div key={course.id} className="rounded-xl border border-border bg-background p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-semibold text-foreground">{course.title}</p>
                    <p className="text-xs text-muted-foreground">{course.term}</p>
                  </div>
                  <span className="rounded-full bg-muted px-2 py-1 text-xs text-muted-foreground">Instructor: {course.instructor}</span>
                </div>
                <Link
                  href={`/lms/courses/${course.id}`}
                  className="mt-4 inline-flex text-sm font-medium text-primary hover:text-primary/80"
                >
                  Open course
                </Link>
              </div>
            ))}
          </div>
        </div>
        <UpcomingDeadlines
          deadlines={[
            {
              id: '1',
              title: 'Assignment: Risk Memo',
              type: 'assignment',
              dueDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString(),
              courseId: 'aac-foundations',
              courseName: 'AAC Foundations',
            },
            {
              id: '2',
              title: 'Quiz: AI Act Articles',
              type: 'quiz',
              dueDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString(),
              courseId: 'aac-foundations',
              courseName: 'AAC Foundations',
            },
            {
              id: '3',
              title: 'Zoom: Live Session',
              type: 'discussion',
              dueDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString(),
              courseId: 'aio-oversight',
              courseName: 'AIO Oversight',
            },
          ]}
        />
      </section>
      <section className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-2xl border border-border bg-card p-6">
          <h3 className="text-base font-semibold text-foreground">Announcements</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Latest updates from instructors and COAD admin.
          </p>
          <div className="mt-4 rounded-lg border border-border bg-background p-3">
            <p className="text-sm font-medium text-foreground">AAC Cohort Update</p>
            <p className="text-xs text-muted-foreground">New module content published.</p>
          </div>
        </div>
        <div className="rounded-2xl border border-border bg-card p-6">
          <h3 className="text-base font-semibold text-foreground">To-Do</h3>
          <p className="mt-2 text-sm text-muted-foreground">Checklist for the week.</p>
          <ul className="mt-4 space-y-2 text-sm text-foreground">
            <li>Finish Module 2 quiz</li>
            <li>Submit AIO risk memo</li>
            <li>Attend Zoom lab</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-border bg-card p-6">
          <h3 className="text-base font-semibold text-foreground">Support</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Need help? Visit the support center or message your instructor.
          </p>
          <div className="mt-4 flex gap-3">
            <Link
              href="/lms/inbox"
              className="rounded-md border border-border px-3 py-2 text-sm text-foreground hover:bg-muted"
            >
              Open inbox
            </Link>
            <Link
              href="/support"
              className="rounded-md bg-primary px-3 py-2 text-sm text-primary-foreground hover:bg-primary/90"
            >
              Support center
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
