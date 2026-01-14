type PeoplePageProps = {
  params: { courseId: string };
};

const people = [
  { name: 'COAD Faculty', role: 'Instructor' },
  { name: 'Karlo Definis', role: 'Admin' },
  { name: 'Student Cohort', role: 'Students' },
];

export default function PeoplePage({ params }: PeoplePageProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-foreground">People</h2>
        <p className="text-sm text-muted-foreground">Course: {params.courseId}</p>
      </div>
      <div className="space-y-3">
        {people.map((person) => (
          <div key={person.name} className="flex items-center justify-between rounded-xl border border-border bg-card p-4">
            <p className="text-sm font-semibold text-foreground">{person.name}</p>
            <span className="text-xs text-muted-foreground">{person.role}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
