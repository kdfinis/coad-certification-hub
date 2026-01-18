'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import NotificationsPanel from '@/components/lms/NotificationsPanel';
import SearchBar from '@/components/lms/SearchBar';
import { canViewAdminTools, canViewInstructorTools } from '@/lib/lms-roles';
import { getRoleDisplayName } from '@/lib/lms-utils';
import type { User } from '@/lib/types';

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
  { label: 'LTI Tools', href: (id: string) => `/lms/courses/${id}/lti-tools` },
  { label: 'Collaborations', href: (id: string) => `/lms/courses/${id}/collaborations` },
  { label: 'Analytics', href: (id: string) => `/lms/courses/${id}/analytics` },
  { label: 'Settings', href: (id: string) => `/lms/courses/${id}/settings` },
];

const instructorTools = [
  { label: 'Gradebook', href: (id: string) => `/lms/courses/${id}/gradebook` },
  { label: 'SpeedGrader', href: (id: string) => `/lms/courses/${id}/speedgrader` },
];

function NavSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="space-y-2">
      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{title}</p>
      <div className="space-y-1">{children}</div>
    </div>
  );
}

export default function LmsLayout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const showInstructorTools = useMemo(() => (user ? canViewInstructorTools(user.role) : false), [user]);
  const showAdminTools = useMemo(() => (user ? canViewAdminTools(user.role) : false), [user]);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const response = await fetch('/api/auth/me');
        if (!response.ok) {
          router.replace('/lms/auth');
          return;
        }
        const data = (await response.json()) as { user: User };
        setUser(data.user);
      } finally {
        setIsLoading(false);
      }
    };
    loadUser();
  }, [router]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background px-8 py-12 text-muted-foreground">
        Loading your workspace...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="flex min-h-screen">
        <aside className="w-64 border-r border-border bg-card">
          <div className="px-5 py-6 border-b border-border">
            <Link href="/" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary to-teal" />
              <div>
                <p className="text-sm font-semibold text-foreground">COAD Canvas</p>
                <p className="text-xs text-muted-foreground">Canvas-level LMS</p>
              </div>
            </Link>
          </div>
          <div className="px-5 py-6 space-y-6">
            <NavSection title="Navigation">
              {globalNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-md px-3 py-2 text-sm text-foreground hover:bg-muted"
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
                  className="block rounded-md px-3 py-2 text-sm text-foreground hover:bg-muted"
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
                    className="block rounded-md px-3 py-2 text-sm text-foreground hover:bg-muted"
                  >
                    {item.label}
                  </Link>
                ))}
              </NavSection>
            )}
            {showAdminTools && (
              <NavSection title="Administration">
                <Link
                  href="/lms/admin"
                  className="block rounded-md px-3 py-2 text-sm text-foreground/70 hover:bg-muted hover:text-foreground"
                >
                  Admin Console
                </Link>
                <Link
                  href="/lms/admin/analytics"
                  className="block rounded-md px-3 py-2 text-sm text-foreground/70 hover:bg-muted hover:text-foreground"
                >
                  Analytics Dashboards
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
            )}
            <div className="rounded-xl border border-border bg-background p-4 space-y-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Accessibility Helper
                </p>
                <p className="text-sm font-semibold text-foreground">Keyboard + ARIA notes</p>
              </div>
              <ul className="space-y-1 text-xs text-muted-foreground">
                <li>Tab / Shift+Tab: move between links, buttons, and form fields.</li>
                <li>Enter / Space: activate focused controls.</li>
                <li>Esc: close menus or dialogs (where available).</li>
              </ul>
              <div className="rounded-lg border border-dashed border-border p-2 text-[11px] text-muted-foreground">
                ARIA audit notes: labels, focus rings, and announcements are tracked per page.
                Update this panel as accessibility reviews are completed.
              </div>
            </div>
          </div>
        </aside>
        <div className="flex-1">
          <header className="border-b border-border bg-background">
            <div className="flex flex-col gap-4 px-8 py-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-xs uppercase tracking-wide text-muted-foreground">Learning Workspace</p>
                <h1 className="text-xl font-semibold text-foreground">COAD Canvas</h1>
              </div>
              <div className="flex flex-1 items-center gap-3 lg:justify-center">
                <div className="w-full max-w-md">
                  <SearchBar />
                </div>
              </div>
              <div className="flex items-center gap-3">
                <NotificationsPanel />
                <div className="flex items-center gap-2">
                  <span className="text-xs uppercase tracking-wide text-muted-foreground">Role</span>
                  <span className="rounded-md border border-border bg-background px-2 py-1 text-xs text-foreground">
                    {getRoleDisplayName(user?.role ?? 'Student')}
                  </span>
                </div>
                <Link
                  href="/lms/account"
                  className="text-sm font-medium text-foreground hover:text-primary"
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
