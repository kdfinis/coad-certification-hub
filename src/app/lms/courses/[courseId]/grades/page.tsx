type GradesPageProps = {
  params: { courseId: string };
};

import Link from 'next/link';

const grades = [
  { item: 'Project Brief', score: '92%', status: 'Graded' },
  { item: 'Risk Memo', score: 'Pending', status: 'Submitted' },
  { item: 'Quiz 1', score: '88%', status: 'Graded' },
];

export default function GradesPage({ params }: GradesPageProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-foreground">Grades</h2>
        <p className="text-sm text-muted-foreground">Course: {params.courseId}</p>
      </div>
      <div className="overflow-hidden rounded-xl border border-border bg-card">
        <div className="grid grid-cols-[2fr_1fr_1fr] gap-4 border-b border-border px-4 py-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          <span>Item</span>
          <span>Score</span>
          <span>Status</span>
        </div>
        {grades.map((grade) => (
          <div key={grade.item} className="grid grid-cols-[2fr_1fr_1fr] gap-4 px-4 py-3 text-sm text-foreground">
            <span>{grade.item}</span>
            <span>{grade.score}</span>
            <span className="text-muted-foreground">{grade.status}</span>
          </div>
        ))}
      </div>
      <div className="rounded-2xl border border-border bg-card p-6">
        <h3 className="text-base font-semibold text-foreground">Instructor tools</h3>
        <p className="text-sm text-muted-foreground">Gradebook and SpeedGrader views.</p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            href={`/lms/courses/${params.courseId}/gradebook`}
            className="rounded-md border border-border px-4 py-2 text-sm text-foreground/80 hover:bg-muted"
          >
            Open gradebook
          </Link>
          <Link
            href={`/lms/courses/${params.courseId}/speedgrader`}
            className="rounded-md border border-border px-4 py-2 text-sm text-foreground/80 hover:bg-muted"
          >
            Open SpeedGrader
          </Link>
        </div>
      </div>
    </div>
  );
}
