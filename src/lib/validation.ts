export function validateEmail(email: string): { valid: boolean; error?: string } {
  if (!email) {
    return { valid: false, error: 'Email is required' };
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { valid: false, error: 'Please enter a valid email address' };
  }
  return { valid: true };
}

export function validatePassword(password: string): { valid: boolean; error?: string } {
  if (!password) {
    return { valid: false, error: 'Password is required' };
  }
  if (password.length < 8) {
    return { valid: false, error: 'Password must be at least 8 characters' };
  }
  return { valid: true };
}

export function validateVATId(vatId: string, country: string): { valid: boolean; error?: string } {
  if (!vatId) {
    return { valid: true }; // VAT ID is optional
  }
  
  // Basic VAT ID format validation
  const vatPatterns: Record<string, RegExp> = {
    LU: /^LU\d{8}$/,
    DE: /^DE\d{9}$/,
    FR: /^FR[A-Z0-9]{2}\d{9}$/,
  };
  
  const pattern = vatPatterns[country];
  if (pattern && !pattern.test(vatId)) {
    return { valid: false, error: 'Invalid VAT ID format for selected country' };
  }
  
  return { valid: true };
}

export function validateRequired(value: string, fieldName: string): { valid: boolean; error?: string } {
  if (!value || !value.trim()) {
    return { valid: false, error: `${fieldName} is required` };
  }
  return { valid: true };
}

export function validateFileSize(file: File, maxSizeMB: number): { valid: boolean; error?: string } {
  const maxSizeBytes = maxSizeMB * 1024 * 1024;
  if (file.size > maxSizeBytes) {
    return { valid: false, error: `File size must be less than ${maxSizeMB}MB` };
  }
  return { valid: true };
}

export function validateFileType(file: File, allowedTypes: string[]): { valid: boolean; error?: string } {
  if (!allowedTypes.includes(file.type)) {
    return { valid: false, error: `File type not allowed. Allowed types: ${allowedTypes.join(', ')}` };
  }
  return { valid: true };
}
