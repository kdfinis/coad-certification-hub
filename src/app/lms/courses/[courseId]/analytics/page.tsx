type AnalyticsPageProps = {
  params: { courseId: string };
};

const metrics = [
  { label: 'Average grade', value: '87%' },
  { label: 'Completion rate', value: '92%' },
  { label: 'Active students', value: '24' },
  { label: 'Assignments submitted', value: '18/20' },
];

export default function AnalyticsPage({ params }: AnalyticsPageProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-foreground">Analytics</h2>
        <p className="text-sm text-muted-foreground">Course: {params.courseId}</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => (
          <div key={metric.label} className="rounded-xl border border-border bg-card p-4">
            <p className="text-xs uppercase tracking-wide text-muted-foreground">{metric.label}</p>
            <p className="mt-2 text-2xl font-semibold text-foreground">{metric.value}</p>
          </div>
        ))}
      </div>
      <div className="rounded-2xl border border-border bg-card p-6">
        <h3 className="text-base font-semibold text-foreground">Engagement Trends</h3>
        <p className="mt-2 text-sm text-muted-foreground">Chart visualization placeholder for student activity over time.</p>
      </div>
    </div>
  );
}
