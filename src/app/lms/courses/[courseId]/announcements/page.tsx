type AnnouncementsPageProps = {
  params: { courseId: string };
};

const announcements = [
  { title: 'Welcome to the cohort', date: 'Apr 1', author: 'COAD Faculty' },
  { title: 'Zoom session updated', date: 'Apr 5', author: 'Program Ops' },
];

export default function AnnouncementsPage({ params }: AnnouncementsPageProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-foreground">Announcements</h2>
        <p className="text-sm text-muted-foreground">Course: {params.courseId}</p>
      </div>
      <div className="space-y-4">
        {announcements.map((item) => (
          <div key={item.title} className="rounded-xl border border-border bg-card p-4">
            <p className="text-sm font-semibold text-foreground">{item.title}</p>
            <p className="text-xs text-muted-foreground">{item.author} · {item.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
