'use client';

import Link from 'next/link';
import { lmsActivity, lmsAnnouncements, lmsCourses, lmsTodos } from '@/lib/lms-data';
import UpcomingDeadlines from '@/components/lms/UpcomingDeadlines';

export default function LmsDashboardPage() {
  return (
    <div className="space-y-8">
      <section className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <div className="rounded-2xl border border-border bg-card p-6">
          <h2 className="text-lg font-semibold text-foreground">Your Courses</h2>
          <p className="text-sm text-muted-foreground">Quick access to active and completed courses.</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {lmsCourses.slice(0, 4).map((course) => (
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
          <div className="mt-4 space-y-3">
            {lmsAnnouncements.map((announcement) => (
              <div key={announcement.id} className="rounded-lg border border-border bg-background p-3">
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{announcement.courseId ? announcement.courseId.replace('-', ' ') : 'General'}</span>
                  <span>{announcement.date}</span>
                </div>
                <p className="mt-2 text-sm font-medium text-foreground">{announcement.title}</p>
                <p className="text-xs text-muted-foreground">{announcement.summary}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-2xl border border-border bg-card p-6">
          <h3 className="text-base font-semibold text-foreground">To-Do</h3>
          <p className="mt-2 text-sm text-muted-foreground">Checklist for the week.</p>
          <ul className="mt-4 space-y-3 text-sm text-foreground">
            {lmsTodos.map((todo) => (
              <li key={todo.id} className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-medium text-foreground">{todo.title}</p>
                  <p className="text-xs text-muted-foreground">
                    Due {todo.due} · {todo.courseId ? todo.courseId.replace('-', ' ') : 'General'}
                  </p>
                </div>
                <span className="rounded-full bg-muted px-2 py-1 text-xs text-muted-foreground">{todo.status}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-border bg-card p-6">
          <h3 className="text-base font-semibold text-foreground">Recent activity</h3>
          <p className="mt-2 text-sm text-muted-foreground">Updates across your courses.</p>
          <div className="mt-4 space-y-3">
            {lmsActivity.map((activity) => (
              <div key={activity.id} className="rounded-lg border border-border bg-background p-3">
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{activity.type.replace('_', ' ')}</span>
                  <span>{activity.time}</span>
                </div>
                <p className="mt-2 text-sm font-medium text-foreground">{activity.title}</p>
                <p className="text-xs text-muted-foreground">
                  {activity.courseId ? activity.courseId.replace('-', ' ') : 'General'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="rounded-2xl border border-border bg-card p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-base font-semibold text-foreground">Support</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Need help? Visit the support center or message your instructor.
            </p>
          </div>
          <div className="flex gap-3">
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
