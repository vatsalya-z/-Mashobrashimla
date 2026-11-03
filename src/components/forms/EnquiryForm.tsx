// src/components/forms/EnquiryForm.tsx
'use client';

import { useState, useRef } from 'react';
import { FaPaperPlane, FaCheckCircle, FaExclamationCircle, FaSpinner } from 'react-icons/fa';
import { trackEnquirySubmission } from '@/lib/analytics/gtag';

interface EnquiryFormProps {
  propertySlug?: string;
  source?: string;
  compact?: boolean;
}

const locations = ['Mashobra', 'Shimla', 'Kufri', 'Naldehra', 'Any Location'];
const configurations = ['2 BHK', '3 BHK', '4 BHK', 'Plot / Land', 'Other'];
const budgets = [
  'Under ₹50 Lakhs',
  '₹50 Lakhs – ₹1 Crore',
  '₹1 Crore – ₹2 Crore',
  '₹2 Crore – ₹5 Crore',
  'Above ₹5 Crore',
  'Open to Discussion',
];
const purposes = ['Personal Residence', 'Second Home', 'Investment', 'Other'];
const contactTimes = ['Morning (9am–12pm)', 'Afternoon (12pm–4pm)', 'Evening (4pm–8pm)', 'Any Time'];

export default function EnquiryForm({ propertySlug, source = 'website', compact = false }: EnquiryFormProps) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const submitTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === 'loading') return;

    // Prevent double submit
    if (submitTimeout.current) clearTimeout(submitTimeout.current);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      fullName: formData.get('fullName'),
      mobile: formData.get('mobile'),
      email: formData.get('email'),
      preferredLocation: formData.get('preferredLocation'),
      configuration: formData.get('configuration'),
      budget: formData.get('budget'),
      purpose: formData.get('purpose'),
      preferredContactTime: formData.get('preferredContactTime'),
      message: formData.get('message'),
      consent: formData.get('consent') === 'on',
      propertySlug: propertySlug || '',
      source,
      referrer: typeof window !== 'undefined' ? document.referrer : '',
      utmSource: new URLSearchParams(typeof window !== 'undefined' ? window.location.search : '').get('utm_source') || '',
      utmMedium: new URLSearchParams(typeof window !== 'undefined' ? window.location.search : '').get('utm_medium') || '',
      utmCampaign: new URLSearchParams(typeof window !== 'undefined' ? window.location.search : '').get('utm_campaign') || '',
    };

    setStatus('loading');
    setFieldErrors({});
    setErrorMsg('');

    try {
      const res = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        if (result.errors) {
          const errs: Record<string, string> = {};
          for (const err of result.errors) {
            errs[err.field] = err.message;
          }
          setFieldErrors(errs);
        }
        setErrorMsg(result.message || 'Something went wrong. Please try again.');
        setStatus('error');
        return;
      }

      setStatus('success');
      form.reset();
      trackEnquirySubmission(source);
    } catch {
      setErrorMsg('Network error. Please check your connection and try again.');
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center py-10 text-center">
        <FaCheckCircle className="text-green-500 text-5xl mb-4" />
        <h3 className="text-xl font-semibold text-[#172033] mb-2">Thank You for Your Enquiry!</h3>
        <p className="text-[#64748B] text-sm max-w-sm">
          We have received your enquiry and will contact you within 24 hours. You can also reach us directly via WhatsApp or phone.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-5 text-[#1E3A5F] text-sm underline"
        >
          Submit another enquiry
        </button>
      </div>
    );
  }

  const inputCls = (field: string) =>
    `w-full border rounded px-3 py-2.5 text-sm text-[#172033] focus:outline-none focus:ring-2 focus:ring-[#1E3A5F]/30 placeholder:text-[#64748B]/60 transition ${
      fieldErrors[field] ? 'border-red-400 bg-red-50' : 'border-[#E2E8F0] bg-white'
    }`;

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <div className={compact ? 'grid grid-cols-1 gap-4' : 'grid grid-cols-1 sm:grid-cols-2 gap-4'}>
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="block text-xs font-medium text-[#172033] mb-1">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            autoComplete="name"
            placeholder="Your full name"
            className={inputCls('fullName')}
          />
          {fieldErrors.fullName && <p className="text-xs text-red-500 mt-1">{fieldErrors.fullName}</p>}
        </div>

        {/* Mobile */}
        <div>
          <label htmlFor="mobile" className="block text-xs font-medium text-[#172033] mb-1">
            Mobile Number <span className="text-red-500">*</span>
          </label>
          <input
            id="mobile"
            name="mobile"
            type="tel"
            required
            autoComplete="tel"
            placeholder="10-digit mobile number"
            maxLength={10}
            className={inputCls('mobile')}
          />
          {fieldErrors.mobile && <p className="text-xs text-red-500 mt-1">{fieldErrors.mobile}</p>}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-xs font-medium text-[#172033] mb-1">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="your@email.com"
            className={inputCls('email')}
          />
          {fieldErrors.email && <p className="text-xs text-red-500 mt-1">{fieldErrors.email}</p>}
        </div>

        {/* Location */}
        <div>
          <label htmlFor="preferredLocation" className="block text-xs font-medium text-[#172033] mb-1">
            Preferred Location <span className="text-red-500">*</span>
          </label>
          <select id="preferredLocation" name="preferredLocation" required className={inputCls('preferredLocation')}>
            <option value="">Select location</option>
            {locations.map((l) => <option key={l} value={l}>{l}</option>)}
          </select>
          {fieldErrors.preferredLocation && <p className="text-xs text-red-500 mt-1">{fieldErrors.preferredLocation}</p>}
        </div>

        {/* Configuration */}
        <div>
          <label htmlFor="configuration" className="block text-xs font-medium text-[#172033] mb-1">
            Property Configuration <span className="text-red-500">*</span>
          </label>
          <select id="configuration" name="configuration" required className={inputCls('configuration')}>
            <option value="">Select configuration</option>
            {configurations.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
          {fieldErrors.configuration && <p className="text-xs text-red-500 mt-1">{fieldErrors.configuration}</p>}
        </div>

        {/* Budget */}
        <div>
          <label htmlFor="budget" className="block text-xs font-medium text-[#172033] mb-1">
            Budget Range <span className="text-red-500">*</span>
          </label>
          <select id="budget" name="budget" required className={inputCls('budget')}>
            <option value="">Select budget</option>
            {budgets.map((b) => <option key={b} value={b}>{b}</option>)}
          </select>
          {fieldErrors.budget && <p className="text-xs text-red-500 mt-1">{fieldErrors.budget}</p>}
        </div>

        {/* Purpose */}
        <div>
          <label htmlFor="purpose" className="block text-xs font-medium text-[#172033] mb-1">
            Purpose of Purchase <span className="text-red-500">*</span>
          </label>
          <select id="purpose" name="purpose" required className={inputCls('purpose')}>
            <option value="">Select purpose</option>
            {purposes.map((p) => <option key={p} value={p}>{p}</option>)}
          </select>
          {fieldErrors.purpose && <p className="text-xs text-red-500 mt-1">{fieldErrors.purpose}</p>}
        </div>

        {/* Preferred Contact Time */}
        <div>
          <label htmlFor="preferredContactTime" className="block text-xs font-medium text-[#172033] mb-1">
            Preferred Contact Time
          </label>
          <select id="preferredContactTime" name="preferredContactTime" className={inputCls('preferredContactTime')}>
            <option value="">Select time</option>
            {contactTimes.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-xs font-medium text-[#172033] mb-1">
          Additional Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          placeholder="Any specific requirements or questions..."
          className={`${inputCls('message')} resize-none`}
        />
      </div>

      {/* Consent */}
      <div className="flex items-start gap-2">
        <input
          id="consent"
          name="consent"
          type="checkbox"
          required
          className="mt-0.5 w-4 h-4 accent-[#1E3A5F] flex-shrink-0"
        />
        <label htmlFor="consent" className="text-xs text-[#64748B] leading-relaxed">
          I consent to being contacted by The Ridge Mashobra property consultancy regarding property enquiries. I have read the{' '}
          <a href="/privacy-policy" className="text-[#1E3A5F] underline" target="_blank" rel="noopener">
            Privacy Policy
          </a>
          .
        </label>
        {fieldErrors.consent && <p className="text-xs text-red-500 mt-1">{fieldErrors.consent}</p>}
      </div>

      {/* Error Message */}
      {status === 'error' && errorMsg && (
        <div className="flex items-center gap-2 bg-red-50 border border-red-200 rounded p-3 text-sm text-red-600">
          <FaExclamationCircle className="text-base flex-shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full flex items-center justify-center gap-2 bg-[#E07A2F] text-white font-semibold py-3 rounded hover:bg-[#c96b22] disabled:opacity-60 disabled:cursor-not-allowed transition-colors cursor-pointer shadow-md"
      >
        {status === 'loading' ? (
          <>
            <FaSpinner className="animate-spin text-base" />
            Submitting...
          </>
        ) : (
          <>
            <FaPaperPlane className="text-sm" />
            Submit Enquiry
          </>
        )}
      </button>

      <p className="text-xs text-[#64748B] text-center">
        We typically respond within 24 hours. Your information is kept confidential.
      </p>
    </form>
  );
}

