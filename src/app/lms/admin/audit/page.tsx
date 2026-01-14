const logs = [
  { event: 'User invited', detail: 'Student A invited by Admin', time: 'Apr 01 09:12' },
  { event: 'Course published', detail: 'AAC Foundations published', time: 'Apr 01 10:30' },
  { event: 'Grade updated', detail: 'Risk Memo graded', time: 'Apr 02 14:45' },
];

export default function AuditLogPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-foreground">Audit Logs</h2>
        <p className="text-sm text-muted-foreground">Track critical changes across the LMS.</p>
      </div>
      <div className="space-y-3">
        {logs.map((log) => (
          <div key={log.time} className="rounded-xl border border-border bg-card p-4">
            <p className="text-sm font-semibold text-foreground">{log.event}</p>
            <p className="text-xs text-muted-foreground">{log.detail}</p>
            <p className="text-xs text-muted-foreground">{log.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
