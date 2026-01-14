type OutcomesPageProps = {
  params: { courseId: string };
};

const outcomes = [
  { title: 'AI Governance Fundamentals', mastery: 'Target 85%' },
  { title: 'Applied Risk Controls', mastery: 'Target 80%' },
  { title: 'Portfolio Delivery', mastery: 'Target 90%' },
];

export default function OutcomesPage({ params }: OutcomesPageProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-foreground">Outcomes</h2>
        <p className="text-sm text-muted-foreground">Course: {params.courseId}</p>
      </div>
      <div className="space-y-4">
        {outcomes.map((outcome) => (
          <div key={outcome.title} className="rounded-xl border border-border bg-card p-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-foreground">{outcome.title}</p>
              <span className="text-xs text-muted-foreground">{outcome.mastery}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
