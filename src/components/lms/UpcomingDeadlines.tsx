'use client';

type Deadline = {
  id: string;
  title: string;
  type: 'assignment' | 'quiz' | 'discussion';
  dueDate: string;
  courseId: string;
  courseName: string;
};

type UpcomingDeadlinesProps = {
  deadlines: Deadline[];
};

export default function UpcomingDeadlines({ deadlines }: UpcomingDeadlinesProps) {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'assignment':
        return (
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        );
      case 'quiz':
        return (
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
        );
      default:
        return (
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        );
    }
  };

  const getDaysUntilDue = (dueDate: string) => {
    const due = new Date(dueDate);
    const now = new Date();
    const diff = due.getTime() - now.getTime();
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    return days;
  };

  const sortedDeadlines = [...deadlines].sort((a, b) => 
    new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime()
  );

  return (
    <div className="rounded-2xl border border-border bg-card p-6">
      <h3 className="text-lg font-semibold text-foreground mb-4">Upcoming Deadlines</h3>
      {sortedDeadlines.length === 0 ? (
        <p className="text-sm text-muted-foreground">No upcoming deadlines</p>
      ) : (
        <div className="space-y-3">
          {sortedDeadlines.slice(0, 5).map((deadline) => {
            const daysUntil = getDaysUntilDue(deadline.dueDate);
            const isOverdue = daysUntil < 0;
            const isUrgent = daysUntil >= 0 && daysUntil <= 3;

            return (
              <div
                key={deadline.id}
                className={`p-3 rounded-lg border ${
                  isOverdue
                    ? 'border-destructive bg-destructive/5'
                    : isUrgent
                    ? 'border-warning bg-warning/5'
                    : 'border-border'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className={`mt-0.5 ${
                    isOverdue ? 'text-destructive' : isUrgent ? 'text-warning' : 'text-muted-foreground'
                  }`}>
                    {getTypeIcon(deadline.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-foreground truncate">{deadline.title}</p>
                    <p className="text-xs text-muted-foreground">{deadline.courseName}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className={`text-xs ${
                        isOverdue ? 'text-destructive' : isUrgent ? 'text-warning' : 'text-muted-foreground'
                      }`}>
                        {isOverdue
                          ? `Overdue by ${Math.abs(daysUntil)} day${Math.abs(daysUntil) !== 1 ? 's' : ''}`
                          : daysUntil === 0
                          ? 'Due today'
                          : daysUntil === 1
                          ? 'Due tomorrow'
                          : `Due in ${daysUntil} days`}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {new Date(deadline.dueDate).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
