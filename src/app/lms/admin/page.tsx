import Link from 'next/link';
import { Button } from '@/components/ui/button';

const adminStats = {
  totalUsers: 1245,
  activeCourses: 18,
  organizations: 12,
  pendingEnrollments: 5,
};

const adminTasks = [
  { id: 1, task: 'Review pending enrollments', priority: 'High', count: 5 },
  { id: 2, task: 'Configure new course template', priority: 'Medium', count: 1 },
  { id: 3, task: 'Audit support requests', priority: 'Medium', count: 12 },
  { id: 4, task: 'Review platform analytics', priority: 'Low', count: 0 },
];

export default function AdminPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-foreground">Admin Console</h2>
        <p className="text-sm text-muted-foreground">Platform operations and LMS configuration.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-2xl border border-border bg-card p-6">
          <p className="text-sm text-muted-foreground mb-1">Total Users</p>
          <p className="text-3xl font-bold text-foreground">{adminStats.totalUsers.toLocaleString()}</p>
        </div>
        <div className="rounded-2xl border border-border bg-card p-6">
          <p className="text-sm text-muted-foreground mb-1">Active Courses</p>
          <p className="text-3xl font-bold text-foreground">{adminStats.activeCourses}</p>
        </div>
        <div className="rounded-2xl border border-border bg-card p-6">
          <p className="text-sm text-muted-foreground mb-1">Organizations</p>
          <p className="text-3xl font-bold text-foreground">{adminStats.organizations}</p>
        </div>
        <div className="rounded-2xl border border-border bg-card p-6">
          <p className="text-sm text-muted-foreground mb-1">Pending Enrollments</p>
          <p className="text-3xl font-bold text-foreground">{adminStats.pendingEnrollments}</p>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-2xl border border-border bg-card p-6">
          <h3 className="text-base font-semibold text-foreground mb-4">Priority Tasks</h3>
          <ul className="space-y-3">
            {adminTasks.map((task) => (
              <li key={task.id} className="flex items-center justify-between p-3 rounded-lg border border-border">
                <div>
                  <p className="text-sm font-semibold text-foreground">{task.task}</p>
                  <p className="text-xs text-muted-foreground">{task.priority} priority</p>
                </div>
                {task.count > 0 && (
                  <span className="px-2 py-1 rounded-full text-xs bg-primary/10 text-primary">
                    {task.count}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6">
          <h3 className="text-base font-semibold text-foreground mb-4">Quick Actions</h3>
          <div className="space-y-2">
            <Link href="/lms/admin/users">
              <Button variant="outline" className="w-full justify-start">Manage Users</Button>
            </Link>
            <Link href="/lms/admin/enrollments">
              <Button variant="outline" className="w-full justify-start">Manage Enrollments</Button>
            </Link>
            <Link href="/lms/admin/organization">
              <Button variant="outline" className="w-full justify-start">Organizations</Button>
            </Link>
            <Link href="/lms/admin/audit">
              <Button variant="outline" className="w-full justify-start">Audit Logs</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
