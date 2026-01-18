type PagesPageProps = {
  params: { courseId: string };
};

const pages = [
  { title: 'Course Overview', status: 'Published', updated: 'Apr 1' },
  { title: 'Resources & Links', status: 'Published', updated: 'Apr 2' },
  { title: 'FAQ', status: 'Draft', updated: 'Apr 3' },
];

export default function PagesPage({ params }: PagesPageProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-foreground">Pages</h2>
        <p className="text-sm text-muted-foreground">Course: {params.courseId}</p>
      </div>
      <div className="rounded-2xl border border-border bg-card p-4 space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-foreground">Rich text editor</p>
            <p className="text-xs text-muted-foreground">Draft course pages with formatting and embeds.</p>
          </div>
          <button
            className="rounded-md border border-border px-3 py-1 text-xs text-muted-foreground"
            type="button"
            disabled
          >
            Publish page
          </button>
        </div>
        <div className="flex flex-wrap gap-2">
          {['Bold', 'Italic', 'Heading', 'Link', 'Image', 'Embed', 'Bullet list'].map((tool) => (
            <span
              key={tool}
              className="rounded-full border border-border px-2 py-1 text-[11px] text-muted-foreground"
            >
              {tool}
            </span>
          ))}
        </div>
        <div className="rounded-lg border border-dashed border-border p-3 text-xs text-muted-foreground">
          Content editor placeholder (rich text blocks, tables, media embeds).
        </div>
      </div>
      <div className="space-y-4">
        {pages.map((page) => (
          <div key={page.title} className="rounded-xl border border-border bg-card p-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-foreground">{page.title}</p>
              <div className="flex items-center gap-3">
                <span className="text-xs text-muted-foreground">{page.status}</span>
                <span className="text-xs text-muted-foreground">Updated {page.updated}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
