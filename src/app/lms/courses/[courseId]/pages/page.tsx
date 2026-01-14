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
