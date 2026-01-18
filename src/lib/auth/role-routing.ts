import type { UserRole } from '@/lib/types';

export const getRoleLandingPath = (role: UserRole) => {
  switch (role) {
    case 'Admin':
      return '/lms/admin';
    case 'Instructor':
    case 'TA':
      return '/lms/courses';
    case 'Observer':
      return '/lms';
    case 'Student':
    default:
      return '/lms';
  }
};
