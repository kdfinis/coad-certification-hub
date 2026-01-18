type GradebookPageProps = {
  params: { courseId: string };
};

const assignments = [
  { id: 'a1', title: 'Project Brief', points: 100 },
  { id: 'a2', title: 'Risk Memo', points: 50 },
  { id: 'a3', title: 'Quiz 1', points: 25 },
];

const students = [
  { name: 'Student A', average: '89%', status: 'On track', scores: ['92', '45', '22'] },
  { name: 'Student B', average: '76%', status: 'Needs review', scores: ['78', '38', '20'] },
  { name: 'Student C', average: '92%', status: 'On track', scores: ['95', '48', '23'] },
];

export default function GradebookPage({ params }: GradebookPageProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-foreground">Gradebook</h2>
        <p className="text-sm text-muted-foreground">Course: {params.courseId}</p>
      </div>
      <div className="overflow-hidden rounded-xl border border-border bg-card">
        <div
          className="grid gap-4 border-b border-border px-4 py-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground"
          style={{ gridTemplateColumns: `2fr ${assignments.map(() => '1fr').join(' ')} 1fr 1fr` }}
        >
          <span>Student</span>
          {assignments.map((assignment) => (
            <span key={assignment.id}>
              {assignment.title}
              <span className="ml-1 text-[10px] text-muted-foreground/70">({assignment.points})</span>
            </span>
          ))}
          <span>Average</span>
          <span>Status</span>
        </div>
        {students.map((student) => (
          <div
            key={student.name}
            className="grid gap-4 px-4 py-3 text-sm text-foreground"
            style={{ gridTemplateColumns: `2fr ${assignments.map(() => '1fr').join(' ')} 1fr 1fr` }}
          >
            <span>{student.name}</span>
            {student.scores.map((score, index) => (
              <span key={`${student.name}-${assignments[index].id}`} className="text-muted-foreground">
                {score}
              </span>
            ))}
            <span>{student.average}</span>
            <span className="text-muted-foreground">{student.status}</span>
          </div>
        ))}
      </div>
      <div className="rounded-2xl border border-border bg-card p-6">
        <h3 className="text-base font-semibold text-foreground">Grade Actions</h3>
        <p className="text-sm text-muted-foreground">Export grades or apply rubric templates.</p>
        <div className="mt-4 flex flex-wrap gap-3">
          <button className="rounded-md border border-border px-4 py-2 text-sm text-foreground/80 hover:bg-muted" type="button">
            Export CSV
          </button>
          <button className="rounded-md border border-border px-4 py-2 text-sm text-foreground/80 hover:bg-muted" type="button">
            Apply rubric
          </button>
        </div>
      </div>
    </div>
  );
}
