/**
 * Application-wide constants
 */

export const APP_CONFIG = {
  name: 'COAD',
  fullName: 'COAD SARL-S',
  domain: 'coad.ai',
  email: 'contact@coad.ai',
  address: '6 Rue Leonardo da Vinci, L-1946 Luxembourg',
} as const;

export const VAT_RATES = {
  LU: 0.17, // Luxembourg
  DE: 0.19, // Germany
  FR: 0.20, // France
  AT: 0.20, // Austria
  BE: 0.21, // Belgium
  IT: 0.22, // Italy
  ES: 0.21, // Spain
  NL: 0.21, // Netherlands
} as const;

export const FILE_UPLOAD_LIMITS = {
  maxSize: 10 * 1024 * 1024, // 10MB
  allowedTypes: [
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'text/plain',
    'image/jpeg',
    'image/png',
    'image/gif',
  ],
} as const;

export const PAGINATION = {
  defaultPageSize: 20,
  maxPageSize: 100,
} as const;

export const DEADLINE_URGENCY = {
  overdue: 0,
  urgent: 3, // days
  warning: 7, // days
} as const;

export const COURSE_STATUS = {
  active: 'Active',
  completed: 'Completed',
  pending: 'Pending',
  archived: 'Archived',
} as const;

export const ENROLLMENT_STATUS = {
  active: 'active',
  completed: 'completed',
  pending: 'pending',
  cancelled: 'cancelled',
} as const;

export const USER_ROLES = {
  student: 'Student',
  instructor: 'Instructor',
  admin: 'Admin',
  observer: 'Observer',
} as const;

export const API_ENDPOINTS = {
  enrollments: '/api/enrollments',
  users: '/api/users',
  courses: '/api/courses',
  assignments: '/api/assignments',
  quizzes: '/api/quizzes',
  discussions: '/api/discussions',
  files: '/api/files',
  messages: '/api/messages',
  calendar: '/api/calendar',
  zoom: '/api/zoom',
  gdpr: '/api/gdpr',
  payments: '/api/payments',
} as const;

export const ROUTES = {
  home: '/',
  catalog: '/catalog',
  checkout: '/checkout',
  lms: '/lms',
  support: '/support',
  about: '/about',
  legal: '/legal',
} as const;
