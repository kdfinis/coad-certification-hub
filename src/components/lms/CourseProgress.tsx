'use client';

type CourseProgressProps = {
  completedModules: number;
  totalModules: number;
  assignmentsSubmitted: number;
  totalAssignments: number;
  currentGrade: number | null;
};

export default function CourseProgress({
  completedModules,
  totalModules,
  assignmentsSubmitted,
  totalAssignments,
  currentGrade,
}: CourseProgressProps) {
  const moduleProgress = totalModules > 0 ? (completedModules / totalModules) * 100 : 0;
  const assignmentProgress = totalAssignments > 0 ? (assignmentsSubmitted / totalAssignments) * 100 : 0;
  const overallProgress = (moduleProgress * 0.6 + assignmentProgress * 0.4);

  return (
    <div className="rounded-2xl border border-border bg-card p-6 space-y-4">
      <div>
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-semibold text-foreground">Course Progress</h3>
          <span className="text-sm font-semibold text-primary">{Math.round(overallProgress)}%</span>
        </div>
        <div className="w-full h-2 rounded-full bg-muted overflow-hidden">
          <div
            className="h-full bg-primary transition-all duration-300"
            style={{ width: `${overallProgress}%` }}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <p className="text-muted-foreground mb-1">Modules</p>
          <p className="font-semibold text-foreground">
            {completedModules} / {totalModules} completed
          </p>
        </div>
        <div>
          <p className="text-muted-foreground mb-1">Assignments</p>
          <p className="font-semibold text-foreground">
            {assignmentsSubmitted} / {totalAssignments} submitted
          </p>
        </div>
      </div>

      {currentGrade !== null && (
        <div className="pt-4 border-t border-border">
          <p className="text-sm text-muted-foreground mb-1">Current Grade</p>
          <p className="text-2xl font-bold text-foreground">{currentGrade}%</p>
        </div>
      )}
    </div>
  );
}
