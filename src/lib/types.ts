/**
 * Shared TypeScript types and interfaces
 */

export type UserRole = 'Student' | 'Instructor' | 'TA' | 'Admin' | 'Observer';

export type CourseStatus = 'Active' | 'Completed' | 'Pending' | 'Archived';

export type EnrollmentStatus = 'active' | 'completed' | 'pending' | 'cancelled';

export type AssignmentType = 'file' | 'text' | 'url' | 'external_tool';

export type QuizType = 'practice_quiz' | 'assignment' | 'graded_survey' | 'survey';

export type NotificationType = 'announcement' | 'assignment' | 'grade' | 'discussion' | 'system';

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  organizationId?: string;
  avatarUrl?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Course {
  id: string;
  title: string;
  code?: string;
  description: string;
  term: string;
  status: CourseStatus;
  instructor: string;
  startDate?: string;
  endDate?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Enrollment {
  id: string;
  userId: string;
  courseId: string;
  role: UserRole;
  status: EnrollmentStatus;
  enrolledAt: string;
  completedAt?: string;
}

export interface Assignment {
  id: string;
  courseId: string;
  title: string;
  description: string;
  dueDate: string;
  points: number;
  submissionType: AssignmentType;
  createdAt: string;
  updatedAt: string;
}

export interface Submission {
  id: string;
  assignmentId: string;
  userId: string;
  submittedAt: string;
  grade?: number;
  feedback?: string;
  fileUrl?: string;
}

export interface Quiz {
  id: string;
  courseId: string;
  title: string;
  description: string;
  quizType: QuizType;
  timeLimit?: number;
  attempts: number;
  points: number;
  dueDate?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Discussion {
  id: string;
  courseId: string;
  title: string;
  message: string;
  authorId: string;
  replies: DiscussionReply[];
  createdAt: string;
  updatedAt: string;
}

export interface DiscussionReply {
  id: string;
  discussionId: string;
  message: string;
  authorId: string;
  createdAt: string;
  updatedAt: string;
}

export interface Notification {
  id: string;
  userId: string;
  type: NotificationType;
  title: string;
  message: string;
  read: boolean;
  link?: string;
  createdAt: string;
}

export interface Certificate {
  id: string;
  userId: string;
  courseId: string;
  verificationHash: string;
  issuedAt: string;
  downloadUrl?: string;
}

export interface Organization {
  id: string;
  name: string;
  domain?: string;
  adminId: string;
  userCount: number;
  courseCount: number;
  createdAt: string;
  updatedAt: string;
}

export interface ApiError {
  message: string;
  code?: string;
  status?: number;
  details?: Record<string, any>;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    pageSize: number;
    total: number;
    totalPages: number;
  };
}
