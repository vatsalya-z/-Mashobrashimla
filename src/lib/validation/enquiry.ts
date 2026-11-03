// src/lib/validation/enquiry.ts

export interface ValidationError {
  field: string;
  message: string;
}

export interface ValidationResult {
  valid: boolean;
  errors: ValidationError[];
}

export function validateEnquiry(data: Record<string, unknown>): ValidationResult {
  const errors: ValidationError[] = [];

  // Full Name
  if (!data.fullName || typeof data.fullName !== 'string' || data.fullName.trim().length < 2) {
    errors.push({ field: 'fullName', message: 'Full name must be at least 2 characters.' });
  }

  // Mobile
  const mobile = String(data.mobile || '').trim();
  if (!mobile || !/^[6-9]\d{9}$/.test(mobile)) {
    errors.push({ field: 'mobile', message: 'Please enter a valid 10-digit Indian mobile number.' });
  }

  // Email
  const email = String(data.email || '').trim();
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.push({ field: 'email', message: 'Please enter a valid email address.' });
  }

  // Preferred Location
  if (!data.preferredLocation || typeof data.preferredLocation !== 'string' || data.preferredLocation.trim() === '') {
    errors.push({ field: 'preferredLocation', message: 'Please select a preferred location.' });
  }

  // Configuration
  if (!data.configuration || typeof data.configuration !== 'string' || data.configuration.trim() === '') {
    errors.push({ field: 'configuration', message: 'Please select a property configuration.' });
  }

  // Budget
  if (!data.budget || typeof data.budget !== 'string' || data.budget.trim() === '') {
    errors.push({ field: 'budget', message: 'Please select a budget range.' });
  }

  // Purpose
  if (!data.purpose || typeof data.purpose !== 'string' || data.purpose.trim() === '') {
    errors.push({ field: 'purpose', message: 'Please select a purpose of purchase.' });
  }

  // Consent
  if (!data.consent || data.consent !== true) {
    errors.push({ field: 'consent', message: 'You must provide consent to proceed.' });
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}

export function sanitizeString(value: unknown): string {
  if (typeof value !== 'string') return '';
  return value.trim().slice(0, 500).replace(/[<>]/g, '');
}

