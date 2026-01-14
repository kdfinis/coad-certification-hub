type RubricsPageProps = {
  params: { courseId: string };
};

const rubrics = [
  { title: 'Capstone Rubric', status: 'Active' },
  { title: 'Risk Memo Rubric', status: 'Active' },
  { title: 'Quiz Accuracy Rubric', status: 'Draft' },
];

export default function RubricsPage({ params }: RubricsPageProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-foreground">Rubrics</h2>
        <p className="text-sm text-muted-foreground">Course: {params.courseId}</p>
      </div>
      <div className="space-y-4">
        {rubrics.map((rubric) => (
          <div key={rubric.title} className="rounded-xl border border-border bg-card p-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-foreground">{rubric.title}</p>
              <span className="text-xs text-muted-foreground">{rubric.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
