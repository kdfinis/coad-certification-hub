type RubricsPageProps = {
  params: { courseId: string };
};

const rubrics = [
  { title: 'Capstone Rubric', status: 'Active', criteria: ['Critical thinking', 'Technical depth', 'Clarity'] },
  { title: 'Risk Memo Rubric', status: 'Active', criteria: ['Risk framing', 'Compliance', 'Mitigations'] },
  { title: 'Quiz Accuracy Rubric', status: 'Draft', criteria: ['Correctness', 'Reasoning'] },
];

export default function RubricsPage({ params }: RubricsPageProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-foreground">Rubrics</h2>
        <p className="text-sm text-muted-foreground">Course: {params.courseId}</p>
      </div>
      <div className="rounded-2xl border border-border bg-card p-4">
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold text-foreground">Rubric library</p>
          <button className="rounded-md border border-border px-3 py-1 text-xs text-foreground/80 hover:bg-muted" type="button">
            + New rubric
          </button>
        </div>
      </div>
      <div className="space-y-4">
        {rubrics.map((rubric) => (
          <div key={rubric.title} className="rounded-xl border border-border bg-card p-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-foreground">{rubric.title}</p>
              <span className="text-xs text-muted-foreground">{rubric.status}</span>
            </div>
            <div className="mt-3 flex flex-wrap gap-2 text-xs text-muted-foreground">
              {rubric.criteria.map((criterion) => (
                <span key={criterion} className="rounded-full bg-muted px-2 py-1">
                  {criterion}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
