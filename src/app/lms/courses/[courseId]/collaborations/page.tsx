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
