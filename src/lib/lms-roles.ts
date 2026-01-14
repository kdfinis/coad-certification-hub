export type LmsRole = 'Student' | 'Instructor' | 'Admin' | 'Observer';

export const canViewInstructorTools = (role: LmsRole): boolean => {
  return role === 'Instructor' || role === 'Admin';
};

export const canViewAdminTools = (role: LmsRole): boolean => {
  return role === 'Admin';
};

export const canEditCourse = (role: LmsRole): boolean => {
  return role === 'Instructor' || role === 'Admin';
};

export const canGrade = (role: LmsRole): boolean => {
  return role === 'Instructor' || role === 'Admin';
};

export const canManageUsers = (role: LmsRole): boolean => {
  return role === 'Admin';
};

export const canViewAuditLogs = (role: LmsRole): boolean => {
  return role === 'Admin';
};
