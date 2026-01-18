type SpeedGraderPageProps = {
  params: { courseId: string };
};

const submissions = [
  { student: 'Student A', assignment: 'Project Brief', status: 'Needs grading' },
  { student: 'Student B', assignment: 'Risk Memo', status: 'Needs grading' },
  { student: 'Student C', assignment: 'Quiz 1', status: 'Graded' },
];

export default function SpeedGraderPage({ params }: SpeedGraderPageProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-foreground">SpeedGrader</h2>
        <p className="text-sm text-muted-foreground">Course: {params.courseId}</p>
      </div>
      <div className="rounded-2xl border border-border bg-card p-6">
        <h3 className="text-base font-semibold text-foreground">Submission Queue</h3>
        <div className="mt-4 space-y-3">
          {submissions.map((submission) => (
            <div key={`${submission.student}-${submission.assignment}`} className="flex items-center justify-between rounded-xl border border-border bg-background p-4">
              <div>
                <p className="text-sm font-semibold text-foreground">{submission.assignment}</p>
                <p className="text-xs text-muted-foreground">{submission.student}</p>
              </div>
              <span className="text-xs text-muted-foreground">{submission.status}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-2xl border border-border bg-card p-6 space-y-4">
        <h3 className="text-base font-semibold text-foreground">Grading Panel</h3>
        <div className="rounded-xl border border-dashed border-border bg-background p-4">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-foreground">Submission preview</p>
            <span className="text-xs text-muted-foreground">PDF · 12 pages</span>
          </div>
          <div className="mt-3 grid gap-3 md:grid-cols-[1fr_200px]">
            <div className="rounded-lg border border-border bg-card/40 p-4 text-sm text-muted-foreground">
              Preview placeholder. Render inline annotations and page thumbnails here.
            </div>
            <div className="space-y-2 text-xs text-muted-foreground">
              <div className="rounded-md border border-border bg-background px-3 py-2">Page 1: Overview</div>
              <div className="rounded-md border border-border bg-background px-3 py-2">Page 2: Evidence</div>
              <div className="rounded-md border border-border bg-background px-3 py-2">Page 3: Recommendations</div>
            </div>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="text-xs uppercase tracking-wide text-muted-foreground">Score</label>
            <input className="mt-2 w-full rounded-md border border-border px-3 py-2 text-sm" placeholder="e.g. 92" />
          </div>
          <div>
            <label className="text-xs uppercase tracking-wide text-muted-foreground">Rubric</label>
            <select className="mt-2 w-full rounded-md border border-border px-3 py-2 text-sm">
              <option>Capstone Rubric</option>
              <option>Risk Memo Rubric</option>
            </select>
          </div>
        </div>
        <div>
          <label className="text-xs uppercase tracking-wide text-muted-foreground">Feedback</label>
          <textarea className="mt-2 w-full rounded-md border border-border p-2 text-sm" rows={4} placeholder="Leave feedback..." />
        </div>
        <div className="rounded-xl border border-border bg-background p-4 space-y-3">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-foreground">Rubric scoring</p>
            <span className="text-xs text-muted-foreground">0/100 pts</span>
          </div>
          <div className="space-y-2 text-sm text-muted-foreground">
            <div className="flex items-center justify-between rounded-lg border border-border px-3 py-2">
              <span>Critical thinking</span>
              <span>0/30</span>
            </div>
            <div className="flex items-center justify-between rounded-lg border border-border px-3 py-2">
              <span>Technical depth</span>
              <span>0/40</span>
            </div>
            <div className="flex items-center justify-between rounded-lg border border-border px-3 py-2">
              <span>Clarity & formatting</span>
              <span>0/30</span>
            </div>
          </div>
          <button className="rounded-md border border-border px-4 py-2 text-sm text-foreground/80 hover:bg-muted" type="button">
            Open rubric
          </button>
        </div>
        <button className="rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground hover:bg-primary/90" type="button">
          Post grade
        </button>
      </div>
    </div>
  );
}
