'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import NotificationsPanel from '@/components/lms/NotificationsPanel';

const globalNavItems = [
  { label: 'Dashboard', href: '/lms' },
  { label: 'Courses', href: '/lms/courses' },
  { label: 'Calendar', href: '/lms/calendar' },
  { label: 'Inbox', href: '/lms/inbox' },
];

const courseNavItems = [
  { label: 'Home', href: (id: string) => `/lms/courses/${id}` },
  { label: 'Announcements', href: (id: string) => `/lms/courses/${id}/announcements` },
  { label: 'Modules', href: (id: string) => `/lms/courses/${id}/modules` },
  { label: 'Assignments', href: (id: string) => `/lms/courses/${id}/assignments` },
  { label: 'Quizzes', href: (id: string) => `/lms/courses/${id}/quizzes` },
  { label: 'Discussions', href: (id: string) => `/lms/courses/${id}/discussions` },
  { label: 'Grades', href: (id: string) => `/lms/courses/${id}/grades` },
  { label: 'People', href: (id: string) => `/lms/courses/${id}/people` },
  { label: 'Files', href: (id: string) => `/lms/courses/${id}/files` },
  { label: 'Syllabus', href: (id: string) => `/lms/courses/${id}/syllabus` },
  { label: 'Zoom Sessions', href: (id: string) => `/lms/courses/${id}/conferences` },
  { label: 'Certificate', href: (id: string) => `/lms/courses/${id}/certificate` },
  { label: 'Rubrics', href: (id: string) => `/lms/courses/${id}/rubrics` },
  { label: 'Outcomes', href: (id: string) => `/lms/courses/${id}/outcomes` },
  { label: 'Groups', href: (id: string) => `/lms/courses/${id}/groups` },
  { label: 'Pages', href: (id: string) => `/lms/courses/${id}/pages` },
  { label: 'Collaborations', href: (id: string) => `/lms/courses/${id}/collaborations` },
  { label: 'Analytics', href: (id: string) => `/lms/courses/${id}/analytics` },
  { label: 'Settings', href: (id: string) => `/lms/courses/${id}/settings` },
];

const instructorTools = [
  { label: 'Gradebook', href: (id: string) => `/lms/courses/${id}/gradebook` },
  { label: 'SpeedGrader', href: (id: string) => `/lms/courses/${id}/speedgrader` },
];

const roleOptions = ['Student', 'Instructor', 'Admin', 'Observer'] as const;
type LmsRole = (typeof roleOptions)[number];

function NavSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="space-y-2">
      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{title}</p>
      <div className="space-y-1">{children}</div>
    </div>
  );
}

export default function LmsLayout({ children }: { children: ReactNode }) {
  const [role, setRole] = useState<LmsRole>('Student');
  const showInstructorTools = useMemo(() => role === 'Instructor' || role === 'Admin', [role]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="flex min-h-screen">
        <aside className="w-64 border-r border-border bg-card">
          <div className="px-5 py-6 border-b border-border">
            <Link href="/" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary to-teal" />
              <div>
                <p className="text-sm font-semibold text-foreground">COAD LMS</p>
                <p className="text-xs text-muted-foreground">Canvas-like platform</p>
              </div>
            </Link>
          </div>
          <div className="px-5 py-6 space-y-6">
            <NavSection title="Navigation">
              {globalNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-md px-3 py-2 text-sm text-foreground/80 hover:bg-muted hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
            </NavSection>
            <NavSection title="Course Quick Links">
              {courseNavItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href('sample-course')}
                  className="block rounded-md px-3 py-2 text-sm text-foreground/70 hover:bg-muted hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
            </NavSection>
            {showInstructorTools && (
              <NavSection title="Instructor Tools">
                {instructorTools.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href('sample-course')}
                    className="block rounded-md px-3 py-2 text-sm text-foreground/70 hover:bg-muted hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                ))}
              </NavSection>
            )}
            <NavSection title="Administration">
              <Link
                href="/lms/admin"
                className="block rounded-md px-3 py-2 text-sm text-foreground/70 hover:bg-muted hover:text-foreground"
              >
                Admin Console
              </Link>
              <Link
                href="/lms/admin/organization"
                className="block rounded-md px-3 py-2 text-sm text-foreground/70 hover:bg-muted hover:text-foreground"
              >
                Organizations
              </Link>
              <Link
                href="/lms/admin/users"
                className="block rounded-md px-3 py-2 text-sm text-foreground/70 hover:bg-muted hover:text-foreground"
              >
                Users & Roles
              </Link>
              <Link
                href="/lms/admin/audit"
                className="block rounded-md px-3 py-2 text-sm text-foreground/70 hover:bg-muted hover:text-foreground"
              >
                Audit Logs
              </Link>
              <Link
                href="/lms/admin/enrollments"
                className="block rounded-md px-3 py-2 text-sm text-foreground/70 hover:bg-muted hover:text-foreground"
              >
                Enrollments
              </Link>
            </NavSection>
          </div>
        </aside>
        <div className="flex-1">
          <header className="border-b border-border bg-background">
            <div className="flex items-center justify-between px-8 py-4">
              <div>
                <p className="text-xs uppercase tracking-wide text-muted-foreground">Learning Workspace</p>
                <h1 className="text-xl font-semibold text-foreground">COAD Learning Hub</h1>
              </div>
              <div className="flex items-center gap-3">
                <NotificationsPanel />
                <div className="flex items-center gap-2">
                  <span className="text-xs uppercase tracking-wide text-muted-foreground">Role</span>
                  <select
                    className="rounded-md border border-border bg-background px-2 py-1 text-xs text-foreground"
                    value={role}
                    onChange={(event) => setRole(event.target.value as LmsRole)}
                  >
                    {roleOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
                <Link
                  href="/lms/account"
                  className="text-sm font-medium text-foreground/80 hover:text-foreground"
                >
                  Account
                </Link>
              </div>
            </div>
          </header>
          <main className="px-8 py-6">{children}</main>
        </div>
      </div>
    </div>
  );
}
