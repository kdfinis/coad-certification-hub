type ModulesPageProps = {
  params: { courseId: string };
};

import { lmsModules } from '@/lib/lms-data';

export default function ModulesPage({ params }: ModulesPageProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-foreground">Modules</h2>
        <p className="text-sm text-muted-foreground">Course: {params.courseId}</p>
      </div>
      <div className="space-y-4">
        {(lmsModules[params.courseId] ?? []).map((module) => (
          <div key={module.title} className="rounded-xl border border-border bg-card p-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-foreground">{module.title}</p>
              <span className="rounded-full bg-muted px-2 py-1 text-xs text-muted-foreground">
                {module.status}
              </span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">Lesson pages, assignments, and Zoom sessions.</p>
          </div>
        ))}
      </div>
    </div>
  );
}
