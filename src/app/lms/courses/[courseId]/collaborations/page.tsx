type CollaborationsPageProps = {
  params: { courseId: string };
};

const collaborations = [
  { title: 'Risk Memo Collaboration', type: 'Google Docs', participants: 3 },
  { title: 'Capstone Planning', type: 'Notion', participants: 5 },
];

export default function CollaborationsPage({ params }: CollaborationsPageProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-foreground">Collaborations</h2>
        <p className="text-sm text-muted-foreground">Course: {params.courseId}</p>
      </div>
      <div className="rounded-2xl border border-border bg-card p-4 space-y-4">
        <div>
          <p className="text-sm font-semibold text-foreground">Collaboration integrations</p>
          <p className="text-xs text-muted-foreground">
            Connect external suites to create shared documents and workspaces.
          </p>
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          {[
            { name: 'Google Workspace', desc: 'Docs, Sheets, Slides, Drive access' },
            { name: 'Microsoft 365', desc: 'Word, Excel, PowerPoint, OneDrive' },
          ].map((provider) => (
            <div key={provider.name} className="rounded-xl border border-dashed border-border p-4">
              <p className="text-sm font-semibold text-foreground">{provider.name}</p>
              <p className="text-xs text-muted-foreground">{provider.desc}</p>
              <button
                className="mt-3 rounded-md border border-border px-3 py-1 text-xs text-muted-foreground"
                type="button"
                disabled
              >
                Connect account
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-4">
        {collaborations.map((collab) => (
          <div key={collab.title} className="rounded-xl border border-border bg-card p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-foreground">{collab.title}</p>
                <p className="text-xs text-muted-foreground">{collab.type} · {collab.participants} participants</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
