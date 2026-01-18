type PeoplePageProps = {
  params: { courseId: string };
};

const people = [
  { name: 'COAD Faculty', role: 'Instructor', section: 'Section 01', status: 'Active' },
  { name: 'COAD TA', role: 'TA', section: 'Section 01', status: 'Active' },
  { name: 'Karlo Definis', role: 'Admin', section: 'Section 01', status: 'Active' },
  { name: 'Student A', role: 'Student', section: 'Section 01', status: 'Active' },
  { name: 'Student B', role: 'Student', section: 'Section 02', status: 'Active' },
  { name: 'Student C', role: 'Student', section: 'Section 02', status: 'Invited' },
];

export default function PeoplePage({ params }: PeoplePageProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-foreground">People</h2>
        <p className="text-sm text-muted-foreground">Course: {params.courseId}</p>
      </div>
      <div className="rounded-2xl border border-border bg-card p-4">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <p className="text-sm font-semibold text-foreground">Teaching Team & Roster</p>
          <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
            <span className="rounded-full bg-muted px-2 py-1">Section 01</span>
            <span className="rounded-full bg-muted px-2 py-1">Section 02</span>
            <span className="rounded-full bg-muted px-2 py-1">Invited</span>
          </div>
        </div>
      </div>
      <div className="space-y-3">
        {people.map((person) => (
          <div key={person.name} className="flex items-center justify-between rounded-xl border border-border bg-card p-4">
            <div>
              <p className="text-sm font-semibold text-foreground">{person.name}</p>
              <p className="text-xs text-muted-foreground">
                {person.role} · {person.section}
              </p>
            </div>
            <span className="text-xs text-muted-foreground">{person.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
