type SyllabusPageProps = {
  params: { courseId: string };
};

const syllabusSections = [
  { title: 'Course Overview', detail: 'Canvas-like structure with weekly modules and live Zoom labs.' },
  { title: 'Learning Outcomes', detail: 'Applied AI delivery, governance, and compliance readiness.' },
  { title: 'Assessments', detail: 'Assignments, quizzes, and capstone projects with rubrics.' },
];

export default function SyllabusPage({ params }: SyllabusPageProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-foreground">Syllabus</h2>
        <p className="text-sm text-muted-foreground">Course: {params.courseId}</p>
      </div>
      <div className="space-y-4">
        {syllabusSections.map((section) => (
          <div key={section.title} className="rounded-xl border border-border bg-card p-4">
            <p className="text-sm font-semibold text-foreground">{section.title}</p>
            <p className="text-sm text-muted-foreground">{section.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
