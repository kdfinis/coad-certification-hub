import { Button } from '@/components/ui/button';

const courseKpis = [
  { label: 'Active Courses', value: '18', delta: '+2 this month' },
  { label: 'Avg. Completion Rate', value: '86%', delta: '+4% vs last cohort' },
  { label: 'Avg. Time to Grade', value: '28 hrs', delta: '-6 hrs vs last week' },
  { label: 'Content Engagement', value: '72%', delta: '+5% week over week' },
];

const studentKpis = [
  { label: 'Active Learners', value: '1,102', delta: '+3% vs last month' },
  { label: 'At-Risk Learners', value: '48', delta: '-12 vs last week' },
  { label: 'Avg. Attendance', value: '91%', delta: '+1% week over week' },
  { label: 'Support Tickets', value: '14', delta: '-5 vs last week' },
];

const exportReports = [
  {
    title: 'Course Performance Export',
    description: 'CSV/BI export for course completion, grades, and pacing.',
  },
  {
    title: 'Student Engagement Export',
    description: 'Download learner activity, attendance, and participation signals.',
  },
  {
    title: 'Provisioning Audit Export',
    description: 'Download CSV of provisioning runs and SIS sync outcomes.',
  },
];

export default function AdminAnalyticsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-foreground">Analytics Dashboards</h2>
        <p className="text-sm text-muted-foreground">Course and learner KPIs with exportable reports.</p>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-2xl border border-border bg-card p-6 space-y-4">
          <div>
            <h3 className="text-base font-semibold text-foreground">Course KPIs</h3>
            <p className="text-sm text-muted-foreground">Operational health across live cohorts.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {courseKpis.map((kpi) => (
              <div key={kpi.label} className="rounded-xl border border-border bg-background p-4">
                <p className="text-xs text-muted-foreground">{kpi.label}</p>
                <p className="text-2xl font-semibold text-foreground">{kpi.value}</p>
                <p className="text-xs text-muted-foreground">{kpi.delta}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 space-y-4">
          <div>
            <h3 className="text-base font-semibold text-foreground">Student KPIs</h3>
            <p className="text-sm text-muted-foreground">Engagement and intervention signals.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {studentKpis.map((kpi) => (
              <div key={kpi.label} className="rounded-xl border border-border bg-background p-4">
                <p className="text-xs text-muted-foreground">{kpi.label}</p>
                <p className="text-2xl font-semibold text-foreground">{kpi.value}</p>
                <p className="text-xs text-muted-foreground">{kpi.delta}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-border bg-card p-6 space-y-4">
        <div>
          <h3 className="text-base font-semibold text-foreground">Reports & Exports</h3>
          <p className="text-sm text-muted-foreground">
            Placeholder exports for BI tooling, CSV downloads, and scheduled delivery.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {exportReports.map((report) => (
            <div key={report.title} className="rounded-xl border border-border bg-background p-4 space-y-3">
              <div>
                <p className="text-sm font-semibold text-foreground">{report.title}</p>
                <p className="text-xs text-muted-foreground">{report.description}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                <Button variant="outline">Export CSV</Button>
                <Button variant="ghost">Schedule Delivery</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
