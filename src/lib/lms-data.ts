export type LmsCourse = {
  id: string;
  title: string;
  term: string;
  instructor: string;
};

export type LmsModule = {
  id: string;
  title: string;
  status: 'Complete' | 'In progress' | 'Locked';
};

export type LmsAssignment = {
  id: string;
  title: string;
  due: string;
  status: string;
};

export type LmsQuiz = {
  id: string;
  title: string;
  status: string;
};

export type LmsDiscussion = {
  id: string;
  title: string;
  replies: number;
};

export const lmsCourses: LmsCourse[] = [
  {
    id: 'aac-foundations',
    title: 'AAC Foundations',
    term: 'Spring 2026',
    instructor: 'COAD Faculty',
  },
  {
    id: 'aio-oversight',
    title: 'AIO Oversight Core',
    term: 'Spring 2026',
    instructor: 'COAD Faculty',
  },
  {
    id: 'acd-qap',
    title: 'ACD QAP Tier',
    term: 'Winter 2025',
    instructor: 'COAD Faculty',
  },
];

export const lmsModules: Record<string, LmsModule[]> = {
  'aac-foundations': [
    { id: 'm1', title: 'Module 1: Foundations', status: 'Complete' },
    { id: 'm2', title: 'Module 2: Applied Projects', status: 'In progress' },
    { id: 'm3', title: 'Module 3: Capstone', status: 'Locked' },
  ],
  'aio-oversight': [
    { id: 'm1', title: 'Domain 1: Safety & Risk', status: 'In progress' },
    { id: 'm2', title: 'Domain 2: Ethical Oversight', status: 'Locked' },
  ],
  'acd-qap': [
    { id: 'm1', title: 'Tier 1: QAP Essentials', status: 'Complete' },
    { id: 'm2', title: 'Tier 1: Tooling Lab', status: 'Complete' },
  ],
};

export const lmsAssignments: Record<string, LmsAssignment[]> = {
  'aac-foundations': [
    { id: 'project-brief', title: 'Project Brief', due: 'Apr 12', status: 'Submitted' },
    { id: 'risk-memo', title: 'Risk Memo', due: 'Apr 19', status: 'Due soon' },
    { id: 'capstone-proposal', title: 'Capstone Proposal', due: 'Apr 30', status: 'Locked' },
  ],
  'aio-oversight': [
    { id: 'audit-plan', title: 'Audit Plan', due: 'Apr 15', status: 'In progress' },
    { id: 'policy-review', title: 'Policy Review', due: 'Apr 24', status: 'Locked' },
  ],
  'acd-qap': [
    { id: 'deployment-check', title: 'Deployment Checklist', due: 'Mar 10', status: 'Graded' },
  ],
};

export const lmsQuizzes: Record<string, LmsQuiz[]> = {
  'aac-foundations': [
    { id: 'quiz-1', title: 'Quiz 1: Fundamentals', status: 'Available' },
    { id: 'quiz-2', title: 'Quiz 2: Applied Case', status: 'Locked' },
  ],
  'aio-oversight': [
    { id: 'quiz-safety', title: 'Safety & Risk Check', status: 'Available' },
  ],
  'acd-qap': [
    { id: 'quiz-tools', title: 'Tooling Assessment', status: 'Complete' },
  ],
};

export const lmsDiscussions: Record<string, LmsDiscussion[]> = {
  'aac-foundations': [
    { id: 'introductions', title: 'Introduce yourself', replies: 24 },
    { id: 'ai-act', title: 'AI Act compliance questions', replies: 12 },
    { id: 'feedback', title: 'Project feedback', replies: 7 },
  ],
  'aio-oversight': [
    { id: 'ethics', title: 'Ethical oversight scenarios', replies: 9 },
  ],
  'acd-qap': [
    { id: 'debugging', title: 'Debugging workflows', replies: 5 },
  ],
};

export const lmsUpcomingEvents = [
  { title: 'Live Zoom: AAC Kickoff', time: 'Wed 10:00 CET' },
  { title: 'Assignment Draft Review', time: 'Thu 16:00 CET' },
  { title: 'Office Hours', time: 'Fri 12:00 CET' },
];
