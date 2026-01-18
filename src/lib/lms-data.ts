export type LmsCourse = {
  id: string;
  title: string;
  term: string;
  instructor: string;
  code?: string;
  description?: string;
  status?: 'Active' | 'Completed' | 'Upcoming';
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
  points?: number;
  submissionType?: string;
  description?: string;
  rubric?: string;
};

export type LmsQuiz = {
  id: string;
  title: string;
  status: string;
  due?: string;
  timeLimit?: string;
  attempts?: string;
  questions?: number;
};

export type LmsDiscussion = {
  id: string;
  title: string;
  replies: number;
  lastActivity: string;
  author?: string;
  excerpt?: string;
};

export type LmsAnnouncement = {
  id: string;
  title: string;
  summary: string;
  courseId?: string;
  date: string;
};

export type LmsTodo = {
  id: string;
  title: string;
  due: string;
  courseId?: string;
  status: 'Upcoming' | 'Due soon' | 'Overdue' | 'Completed';
};

export type LmsActivity = {
  id: string;
  title: string;
  time: string;
  courseId?: string;
  type: 'announcement' | 'assignment' | 'discussion' | 'grade';
};

export const lmsCourses: LmsCourse[] = [
  {
    id: 'aac-foundations',
    title: 'AAC Foundations',
    term: 'Spring 2026',
    instructor: 'COAD Faculty',
    code: 'AAC-101',
    description: 'Foundational agentic AI competency with live labs and applied projects.',
    status: 'Active',
  },
  {
    id: 'aio-oversight',
    title: 'AIO Oversight Core',
    term: 'Spring 2026',
    instructor: 'COAD Faculty',
    code: 'AIO-201',
    description: 'Oversight, risk, and governance workflows aligned with EU AI Act.',
    status: 'Active',
  },
  {
    id: 'acd-qap',
    title: 'ACD QAP Tier',
    term: 'Winter 2025',
    instructor: 'COAD Faculty',
    code: 'ACD-301',
    description: 'Qualified AI Practitioner tier focused on delivery and tooling.',
    status: 'Completed',
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
    {
      id: 'project-brief',
      title: 'Project Brief',
      due: 'Apr 12',
      status: 'Submitted',
      points: 100,
      submissionType: 'File upload',
      description: 'Submit a concise brief outlining your project scope and milestones.',
      rubric: 'Capstone Rubric',
    },
    {
      id: 'risk-memo',
      title: 'Risk Memo',
      due: 'Apr 19',
      status: 'Due soon',
      points: 50,
      submissionType: 'Text entry',
      description: 'Provide a risk memo covering governance, safety, and compliance checks.',
      rubric: 'Risk Memo Rubric',
    },
    {
      id: 'capstone-proposal',
      title: 'Capstone Proposal',
      due: 'Apr 30',
      status: 'Locked',
      points: 150,
      submissionType: 'URL',
      description: 'Share your capstone proposal link and brief rationale.',
      rubric: 'Capstone Rubric',
    },
  ],
  'aio-oversight': [
    {
      id: 'audit-plan',
      title: 'Audit Plan',
      due: 'Apr 15',
      status: 'In progress',
      points: 80,
      submissionType: 'File upload',
      description: 'Upload your audit plan with scope and stakeholder mapping.',
      rubric: 'Audit Rubric',
    },
    {
      id: 'policy-review',
      title: 'Policy Review',
      due: 'Apr 24',
      status: 'Locked',
      points: 60,
      submissionType: 'Text entry',
      description: 'Summarize gaps in policy alignment with EU AI Act.',
      rubric: 'Policy Review Rubric',
    },
  ],
  'acd-qap': [
    {
      id: 'deployment-check',
      title: 'Deployment Checklist',
      due: 'Mar 10',
      status: 'Graded',
      points: 40,
      submissionType: 'Checklist',
      description: 'Complete the deployment readiness checklist.',
      rubric: 'Deployment Rubric',
    },
  ],
};

export const lmsQuizzes: Record<string, LmsQuiz[]> = {
  'aac-foundations': [
    {
      id: 'quiz-1',
      title: 'Quiz 1: Fundamentals',
      status: 'Available',
      due: 'Apr 18',
      timeLimit: '20 min',
      attempts: '2',
      questions: 10,
    },
    {
      id: 'quiz-2',
      title: 'Quiz 2: Applied Case',
      status: 'Locked',
      due: 'Apr 25',
      timeLimit: '30 min',
      attempts: '1',
      questions: 12,
    },
  ],
  'aio-oversight': [
    {
      id: 'quiz-safety',
      title: 'Safety & Risk Check',
      status: 'Available',
      due: 'Apr 20',
      timeLimit: '15 min',
      attempts: '2',
      questions: 8,
    },
  ],
  'acd-qap': [
    {
      id: 'quiz-tools',
      title: 'Tooling Assessment',
      status: 'Complete',
      due: 'Mar 05',
      timeLimit: '25 min',
      attempts: '1',
      questions: 14,
    },
  ],
};

export const lmsDiscussions: Record<string, LmsDiscussion[]> = {
  'aac-foundations': [
    {
      id: 'introductions',
      title: 'Introduce yourself',
      replies: 24,
      lastActivity: '2h ago',
      author: 'COAD Faculty',
      excerpt: 'Share your background and what you want to learn this term.',
    },
    {
      id: 'ai-act',
      title: 'AI Act compliance questions',
      replies: 12,
      lastActivity: 'Today',
      author: 'COAD Faculty',
      excerpt: 'Ask questions about Article 13/15 and risk classification.',
    },
    {
      id: 'feedback',
      title: 'Project feedback',
      replies: 7,
      lastActivity: 'Yesterday',
      author: 'Student A',
      excerpt: 'Share peer feedback and improvement ideas.',
    },
  ],
  'aio-oversight': [
    {
      id: 'ethics',
      title: 'Ethical oversight scenarios',
      replies: 9,
      lastActivity: 'Today',
      author: 'COAD Faculty',
      excerpt: 'Discuss real-world oversight scenarios and mitigations.',
    },
  ],
  'acd-qap': [
    {
      id: 'debugging',
      title: 'Debugging workflows',
      replies: 5,
      lastActivity: 'Mon',
      author: 'COAD Faculty',
      excerpt: 'Share your troubleshooting playbooks.',
    },
  ],
};

export const lmsUpcomingEvents = [
  { title: 'Live Zoom: AAC Kickoff', time: 'Wed 10:00 CET' },
  { title: 'Assignment Draft Review', time: 'Thu 16:00 CET' },
  { title: 'Office Hours', time: 'Fri 12:00 CET' },
];

export const lmsAnnouncements: LmsAnnouncement[] = [
  {
    id: 'aac-update',
    title: 'AAC Cohort Update',
    summary: 'Module 3 is now available with updated case studies.',
    courseId: 'aac-foundations',
    date: 'Today',
  },
  {
    id: 'aio-ethics',
    title: 'AIO Ethics Briefing',
    summary: 'Weekly oversight briefing posted to the course home.',
    courseId: 'aio-oversight',
    date: 'Yesterday',
  },
];

export const lmsTodos: LmsTodo[] = [
  { id: 'todo-1', title: 'Finish Module 2 quiz', due: 'Apr 16', courseId: 'aac-foundations', status: 'Due soon' },
  { id: 'todo-2', title: 'Submit AIO risk memo', due: 'Apr 19', courseId: 'aio-oversight', status: 'Upcoming' },
  { id: 'todo-3', title: 'Attend Zoom lab', due: 'Apr 20', courseId: 'aac-foundations', status: 'Upcoming' },
];

export const lmsActivity: LmsActivity[] = [
  { id: 'act-1', title: 'Feedback posted on Project Brief', time: '2h ago', courseId: 'aac-foundations', type: 'grade' },
  { id: 'act-2', title: 'New discussion: AI Act compliance questions', time: 'Yesterday', courseId: 'aac-foundations', type: 'discussion' },
  { id: 'act-3', title: 'Assignment Draft Review scheduled', time: 'Yesterday', courseId: 'aio-oversight', type: 'assignment' },
];

export const mockCourses = lmsCourses;
export const mockEvents = lmsUpcomingEvents;
