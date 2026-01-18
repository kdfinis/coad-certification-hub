type LtiToolsPageProps = {
  params: { courseId: string };
};

const registry = [
  { name: 'Turnitin', status: 'Available', launch: 'Assignment similarity check' },
  { name: 'Panopto', status: 'Configured', launch: 'Lecture capture' },
  { name: 'Miro', status: 'Pending approval', launch: 'Collaborative whiteboard' },
];

export default function LtiToolsPage({ params }: LtiToolsPageProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-foreground">LTI Tools</h2>
        <p className="text-sm text-muted-foreground">Course: {params.courseId}</p>
      </div>
      <div className="rounded-2xl border border-border bg-card p-4 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-foreground">Tool registry</p>
            <p className="text-xs text-muted-foreground">Manage LTI 1.3 tools and placements.</p>
          </div>
          <button
            className="rounded-md border border-border px-3 py-1 text-xs text-muted-foreground"
            type="button"
            disabled
          >
            Add LTI tool
          </button>
        </div>
        <div className="space-y-3">
          {registry.map((tool) => (
            <div key={tool.name} className="rounded-xl border border-dashed border-border p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-foreground">{tool.name}</p>
                  <p className="text-xs text-muted-foreground">{tool.launch}</p>
                </div>
                <span className="text-xs text-muted-foreground">{tool.status}</span>
              </div>
              <div className="mt-3 flex flex-wrap gap-2 text-xs text-muted-foreground">
                <button className="rounded-md border border-border px-2 py-1" type="button" disabled>
                  Launch test
                </button>
                <button className="rounded-md border border-border px-2 py-1" type="button" disabled>
                  View placements
                </button>
                <button className="rounded-md border border-border px-2 py-1" type="button" disabled>
                  View registration
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-2xl border border-border bg-card p-4 space-y-3">
        <div>
          <p className="text-sm font-semibold text-foreground">Launch placeholders</p>
          <p className="text-xs text-muted-foreground">
            Assign tools to modules, assignments, or navigation placements.
          </p>
        </div>
        <div className="grid gap-3 md:grid-cols-3">
          {['Module launch', 'Assignment launch', 'Navigation link'].map((slot) => (
            <div key={slot} className="rounded-lg border border-dashed border-border p-3 text-xs text-muted-foreground">
              {slot} placeholder
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
