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
      <div className="rounded-2xl border border-border bg-card p-4 space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-foreground">Compose announcement</p>
            <p className="text-xs text-muted-foreground">Use rich text, links, and media embeds.</p>
          </div>
          <button
            className="rounded-md border border-border px-3 py-1 text-xs text-muted-foreground"
            type="button"
            disabled
          >
            Post now
          </button>
        </div>
        <div className="flex flex-wrap gap-2">
          {['Bold', 'Italic', 'Heading', 'Link', 'Image', 'Video', 'Quote'].map((tool) => (
            <span
              key={tool}
              className="rounded-full border border-border px-2 py-1 text-[11px] text-muted-foreground"
            >
              {tool}
            </span>
          ))}
        </div>
        <div className="rounded-lg border border-dashed border-border p-3 text-xs text-muted-foreground">
          Announcement editor placeholder (draft, preview, attachments).
        </div>
      </div>
      <div className="rounded-2xl border border-border bg-card p-4 space-y-4">
        <div>
          <p className="text-sm font-semibold text-foreground">Automation</p>
          <p className="text-xs text-muted-foreground">
            Schedule announcements for automatic delivery.
          </p>
        </div>
        <div className="grid gap-3 md:grid-cols-[2fr_1fr]">
          <div className="space-y-2">
            <label className="text-xs font-semibold text-muted-foreground">Scheduled send</label>
            <input
              className="w-full rounded-md border border-border px-3 py-2 text-sm"
              placeholder="Apr 20 · 09:00 CET"
              type="text"
              disabled
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold text-muted-foreground">Audience</label>
            <input
              className="w-full rounded-md border border-border px-3 py-2 text-sm"
              placeholder="All enrolled learners"
              type="text"
              disabled
            />
          </div>
        </div>
        <div className="flex items-center justify-between rounded-lg border border-dashed border-border px-3 py-2">
          <p className="text-xs text-muted-foreground">Automation status: Not scheduled</p>
          <button
            className="rounded-md border border-border px-3 py-1 text-xs text-muted-foreground"
            type="button"
            disabled
          >
            Schedule send
          </button>
        </div>
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
