import { validateEmail, validatePassword, validateVATId, validateRequired, validateFileSize, validateFileType } from '@/lib/validation';

describe('Validation Functions', () => {
  describe('validateEmail', () => {
    it('should validate correct email addresses', () => {
      expect(validateEmail('test@example.com').valid).toBe(true);
      expect(validateEmail('user.name@domain.co.uk').valid).toBe(true);
    });

    it('should reject invalid email addresses', () => {
      expect(validateEmail('invalid').valid).toBe(false);
      expect(validateEmail('@example.com').valid).toBe(false);
      expect(validateEmail('test@').valid).toBe(false);
    });

    it('should require email input', () => {
      expect(validateEmail('').valid).toBe(false);
      expect(validateEmail('').error).toContain('required');
    });
  });

  describe('validatePassword', () => {
    it('should validate passwords with 8+ characters', () => {
      expect(validatePassword('password123').valid).toBe(true);
      expect(validatePassword('SecurePass!').valid).toBe(true);
    });

    it('should reject short passwords', () => {
      expect(validatePassword('short').valid).toBe(false);
      expect(validatePassword('1234567').valid).toBe(false);
    });

    it('should require password input', () => {
      expect(validatePassword('').valid).toBe(false);
    });
  });

  describe('validateVATId', () => {
    it('should validate Luxembourg VAT IDs', () => {
      expect(validateVATId('LU12345678', 'LU').valid).toBe(true);
      expect(validateVATId('LU87654321', 'LU').valid).toBe(true);
    });

    it('should validate German VAT IDs', () => {
      expect(validateVATId('DE123456789', 'DE').valid).toBe(true);
    });

    it('should validate French VAT IDs', () => {
      expect(validateVATId('FRAB123456789', 'FR').valid).toBe(true);
    });

    it('should allow empty VAT ID (optional)', () => {
      expect(validateVATId('', 'LU').valid).toBe(true);
    });

    it('should reject invalid VAT formats', () => {
      expect(validateVATId('INVALID', 'LU').valid).toBe(false);
      expect(validateVATId('DE123', 'DE').valid).toBe(false);
    });
  });

  describe('validateRequired', () => {
    it('should validate non-empty strings', () => {
      expect(validateRequired('value', 'Field').valid).toBe(true);
      expect(validateRequired('  value  ', 'Field').valid).toBe(true);
    });

    it('should reject empty or whitespace-only strings', () => {
      expect(validateRequired('', 'Field').valid).toBe(false);
      expect(validateRequired('   ', 'Field').valid).toBe(false);
    });
  });

  describe('validateFileSize', () => {
    it('should validate files under size limit', () => {
      const file = new File(['content'], 'test.pdf', { type: 'application/pdf' });
      Object.defineProperty(file, 'size', { value: 1024 * 1024 }); // 1MB
      expect(validateFileSize(file, 5).valid).toBe(true);
    });

    it('should reject files over size limit', () => {
      const file = new File(['content'], 'test.pdf', { type: 'application/pdf' });
      Object.defineProperty(file, 'size', { value: 10 * 1024 * 1024 }); // 10MB
      expect(validateFileSize(file, 5).valid).toBe(false);
    });
  });

  describe('validateFileType', () => {
    it('should validate allowed file types', () => {
      const file = new File(['content'], 'test.pdf', { type: 'application/pdf' });
      expect(validateFileType(file, ['application/pdf']).valid).toBe(true);
    });

    it('should reject disallowed file types', () => {
      const file = new File(['content'], 'test.exe', { type: 'application/x-msdownload' });
      expect(validateFileType(file, ['application/pdf']).valid).toBe(false);
    });
  });
});
