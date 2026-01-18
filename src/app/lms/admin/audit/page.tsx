const logs = [
  {
    id: 'evt-1001',
    event: 'User invited',
    detail: 'Student A invited by Admin Team',
    actor: 'Admin Team',
    category: 'Access',
    scope: 'Global',
    time: 'Apr 01 09:12',
  },
  {
    id: 'evt-1002',
    event: 'Course published',
    detail: 'AAC Foundations published to catalog',
    actor: 'Instructor Lead',
    category: 'Courses',
    scope: 'AAC Foundations',
    time: 'Apr 01 10:30',
  },
  {
    id: 'evt-1003',
    event: 'Enrollment updated',
    detail: '24 learners added via CSV import',
    actor: 'Provisioning Bot',
    category: 'Provisioning',
    scope: 'Cohort Spring 26',
    time: 'Apr 01 16:20',
  },
  {
    id: 'evt-1004',
    event: 'Grade updated',
    detail: 'Risk Memo graded in 12 submissions',
    actor: 'Faculty Reviewer',
    category: 'Assessments',
    scope: 'AAC Foundations',
    time: 'Apr 02 14:45',
  },
  {
    id: 'evt-1005',
    event: 'SIS sync completed',
    detail: 'Nightly sync completed with 0 errors',
    actor: 'SIS Sync',
    category: 'Provisioning',
    scope: 'Global',
    time: 'Apr 02 22:05',
  },
];

export default function AuditLogPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-foreground">Audit Logs</h2>
        <p className="text-sm text-muted-foreground">Track critical changes across the LMS.</p>
      </div>
      <div className="rounded-2xl border border-border bg-card p-4 space-y-4">
        <div>
          <p className="text-sm font-semibold text-foreground">Filters</p>
          <p className="text-xs text-muted-foreground">Narrow the audit stream by actor, category, or date.</p>
        </div>
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          <input
            className="rounded-md border border-border px-3 py-2 text-sm"
            placeholder="Search events"
            type="search"
          />
          <select className="rounded-md border border-border px-3 py-2 text-sm">
            <option>All categories</option>
            <option>Access</option>
            <option>Courses</option>
            <option>Provisioning</option>
            <option>Assessments</option>
          </select>
          <select className="rounded-md border border-border px-3 py-2 text-sm">
            <option>All actors</option>
            <option>Admin Team</option>
            <option>Instructor Lead</option>
            <option>Provisioning Bot</option>
            <option>Faculty Reviewer</option>
          </select>
          <input className="rounded-md border border-border px-3 py-2 text-sm" placeholder="Date range" />
        </div>
        <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
          <span className="rounded-full border border-border px-2 py-1">Last 7 days</span>
          <span className="rounded-full border border-border px-2 py-1">Exportable</span>
          <span className="rounded-full border border-border px-2 py-1">Retention: 365 days</span>
        </div>
      </div>

      <div className="space-y-3">
        {logs.map((log) => (
          <div key={log.id} className="rounded-xl border border-border bg-card p-4 space-y-2">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="text-sm font-semibold text-foreground">{log.event}</p>
              <span className="text-xs text-muted-foreground">{log.time}</span>
            </div>
            <p className="text-xs text-muted-foreground">{log.detail}</p>
            <div className="flex flex-wrap gap-2 text-xs">
              <span className="rounded-full bg-muted px-2 py-1 text-muted-foreground">{log.category}</span>
              <span className="rounded-full bg-muted px-2 py-1 text-muted-foreground">{log.actor}</span>
              <span className="rounded-full bg-muted px-2 py-1 text-muted-foreground">{log.scope}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
