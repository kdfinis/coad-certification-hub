import type { LmsRole } from './lms-roles';

export type EnrollmentStatus = 'active' | 'completed' | 'pending' | 'cancelled';

export type CourseProgress = {
  courseId: string;
  completedModules: number;
  totalModules: number;
  assignmentsSubmitted: number;
  totalAssignments: number;
  currentGrade: number | null;
};

export function calculateProgress(progress: CourseProgress): number {
  if (progress.totalModules === 0) return 0;
  const moduleProgress = (progress.completedModules / progress.totalModules) * 0.6;
  const assignmentProgress = progress.totalAssignments > 0
    ? (progress.assignmentsSubmitted / progress.totalAssignments) * 0.4
    : 0;
  return Math.round((moduleProgress + assignmentProgress) * 100);
}

export function formatCourseDuration(hours: number): string {
  if (hours < 40) return `${hours} hours`;
  if (hours < 168) return `${Math.round(hours / 8)} days`;
  if (hours < 720) return `${Math.round(hours / 40)} weeks`;
  return `${Math.round(hours / 160)} months`;
}

export function getRoleDisplayName(role: LmsRole): string {
  const roleNames: Record<LmsRole, string> = {
    Student: 'Student',
    Instructor: 'Instructor',
    Admin: 'Administrator',
    Observer: 'Observer',
  };
  return roleNames[role];
}

export function formatPrice(amount: number, currency: string = 'EUR'): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(amount);
}

export function calculateVAT(amount: number, country: string): number {
  const vatRates: Record<string, number> = {
    LU: 0.17, // Luxembourg
    DE: 0.19, // Germany
    FR: 0.20, // France
  };
  const rate = vatRates[country] || 0;
  return amount * rate;
}

export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function generateEnrollmentId(): string {
  return `enroll_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

export function formatDate(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(d);
}

export function formatDateTime(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZoneName: 'short',
  }).format(d);
}
