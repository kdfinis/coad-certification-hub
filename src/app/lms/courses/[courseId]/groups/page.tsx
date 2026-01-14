type GroupsPageProps = {
  params: { courseId: string };
};

const groups = [
  { name: 'Group A: Risk Analysis', members: 4, status: 'Active' },
  { name: 'Group B: Compliance Audit', members: 3, status: 'Active' },
  { name: 'Group C: Capstone Project', members: 5, status: 'Forming' },
];

export default function GroupsPage({ params }: GroupsPageProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-foreground">Groups</h2>
        <p className="text-sm text-muted-foreground">Course: {params.courseId}</p>
      </div>
      <div className="space-y-4">
        {groups.map((group) => (
          <div key={group.name} className="rounded-xl border border-border bg-card p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-foreground">{group.name}</p>
                <p className="text-xs text-muted-foreground">{group.members} members</p>
              </div>
              <span className="text-xs text-muted-foreground">{group.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
