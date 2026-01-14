import { calculateProgress, formatCourseDuration, getRoleDisplayName, formatPrice, calculateVAT, isValidEmail, generateEnrollmentId, formatDate, formatDateTime } from '@/lib/lms-utils';
import type { CourseProgress } from '@/lib/lms-utils';

describe('LMS Utils', () => {
  describe('calculateProgress', () => {
    it('should calculate progress correctly', () => {
      const progress: CourseProgress = {
        courseId: 'test',
        completedModules: 4,
        totalModules: 8,
        assignmentsSubmitted: 5,
        totalAssignments: 10,
        currentGrade: null,
      };
      expect(calculateProgress(progress)).toBe(50); // 50% modules + 50% assignments = 50% overall
    });

    it('should return 0 for empty course', () => {
      const progress: CourseProgress = {
        courseId: 'test',
        completedModules: 0,
        totalModules: 0,
        assignmentsSubmitted: 0,
        totalAssignments: 0,
        currentGrade: null,
      };
      expect(calculateProgress(progress)).toBe(0);
    });

    it('should handle completed courses', () => {
      const progress: CourseProgress = {
        courseId: 'test',
        completedModules: 8,
        totalModules: 8,
        assignmentsSubmitted: 10,
        totalAssignments: 10,
        currentGrade: 95,
      };
      expect(calculateProgress(progress)).toBe(100);
    });
  });

  describe('formatCourseDuration', () => {
    it('should format hours correctly', () => {
      expect(formatCourseDuration(20)).toBe('20 hours');
      expect(formatCourseDuration(39)).toBe('39 hours');
    });

    it('should format days correctly', () => {
      expect(formatCourseDuration(40)).toBe('5 days');
      expect(formatCourseDuration(80)).toBe('10 days');
    });

    it('should format weeks correctly', () => {
      expect(formatCourseDuration(200)).toBe('5 weeks');
      expect(formatCourseDuration(400)).toBe('10 weeks');
    });

    it('should format months correctly', () => {
      expect(formatCourseDuration(800)).toBe('5 months');
    });
  });

  describe('formatPrice', () => {
    it('should format EUR prices correctly', () => {
      expect(formatPrice(1000, 'EUR')).toContain('1,000');
      expect(formatPrice(99.99, 'EUR')).toContain('99.99');
    });

    it('should default to EUR', () => {
      expect(formatPrice(1000)).toContain('1,000');
    });
  });

  describe('calculateVAT', () => {
    it('should calculate Luxembourg VAT', () => {
      expect(calculateVAT(1000, 'LU')).toBe(170);
    });

    it('should calculate German VAT', () => {
      expect(calculateVAT(1000, 'DE')).toBe(190);
    });

    it('should calculate French VAT', () => {
      expect(calculateVAT(1000, 'FR')).toBe(200);
    });

    it('should return 0 for non-EU countries', () => {
      expect(calculateVAT(1000, 'US')).toBe(0);
    });
  });

  describe('isValidEmail', () => {
    it('should validate correct emails', () => {
      expect(isValidEmail('test@example.com')).toBe(true);
      expect(isValidEmail('user.name@domain.co.uk')).toBe(true);
    });

    it('should reject invalid emails', () => {
      expect(isValidEmail('invalid')).toBe(false);
      expect(isValidEmail('@example.com')).toBe(false);
    });
  });

  describe('generateEnrollmentId', () => {
    it('should generate unique IDs', () => {
      const id1 = generateEnrollmentId();
      const id2 = generateEnrollmentId();
      expect(id1).not.toBe(id2);
      expect(id1).toMatch(/^enroll_/);
    });
  });

  describe('formatDate', () => {
    it('should format dates correctly', () => {
      const date = new Date('2024-01-15');
      const formatted = formatDate(date);
      expect(formatted).toContain('January');
      expect(formatted).toContain('2024');
    });
  });

  describe('formatDateTime', () => {
    it('should format date and time correctly', () => {
      const date = new Date('2024-01-15T14:30:00');
      const formatted = formatDateTime(date);
      expect(formatted).toContain('January');
      expect(formatted).toContain('2024');
    });
  });
});
