import { useState, useCallback } from 'react';
import { validateEmail, validateRequired, validateVATId, validatePassword } from '@/lib/validation';

type ValidationRule = 'email' | 'required' | 'password' | 'vat';

type ValidationConfig = {
  [key: string]: ValidationRule[];
};

type ValidationErrors = {
  [key: string]: string;
};

export function useFormValidation<T extends Record<string, any>>(
  initialValues: T,
  validationConfig: ValidationConfig
) {
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const validateField = useCallback(
    (name: string, value: any): string | null => {
      const rules = validationConfig[name];
      if (!rules) return null;

      for (const rule of rules) {
        let result: { valid: boolean; error?: string } = { valid: true };

        switch (rule) {
          case 'email':
            result = validateEmail(value);
            break;
          case 'required':
            result = validateRequired(value, name);
            break;
          case 'password':
            result = validatePassword(value);
            break;
          case 'vat':
            // VAT validation requires country, handled separately
            break;
        }

        if (!result.valid) {
          return result.error || `${name} is invalid`;
        }
      }

      return null;
    },
    [validationConfig]
  );

  const validateForm = useCallback(
    (values: T): boolean => {
      const newErrors: ValidationErrors = {};

      Object.keys(validationConfig).forEach((field) => {
        const error = validateField(field, values[field]);
        if (error) {
          newErrors[field] = error;
        }
      });

      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    },
    [validationConfig, validateField]
  );

  const handleBlur = useCallback(
    (name: string) => {
      setTouched((prev) => ({ ...prev, [name]: true }));
    },
    []
  );

  const handleChange = useCallback(
    (name: string, value: any) => {
      if (touched[name]) {
        const error = validateField(name, value);
        setErrors((prev) => ({
          ...prev,
          [name]: error || '',
        }));
      }
    },
    [touched, validateField]
  );

  const clearErrors = useCallback(() => {
    setErrors({});
    setTouched({});
  }, []);

  return {
    errors,
    touched,
    validateForm,
    validateField,
    handleBlur,
    handleChange,
    clearErrors,
  };
}
