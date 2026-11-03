// src/lib/analytics/gtag.ts
'use client';

export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || '';

type GTagEvent = {
  action: string;
  category: string;
  label?: string;
  value?: number;
};

export function gtag_event({ action, category, label, value }: GTagEvent) {
  if (typeof window === 'undefined') return;
  // @ts-expect-error gtag loaded by GTM
  if (typeof window.gtag !== 'function') return;
  // @ts-expect-error gtag loaded by GTM
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value,
  });
}

export function trackEnquirySubmission(source: string) {
  gtag_event({ action: 'enquiry_submission', category: 'Lead', label: source });
}

export function trackWhatsAppClick(source: string) {
  gtag_event({ action: 'whatsapp_click', category: 'Contact', label: source });
}

export function trackPhoneClick(source: string) {
  gtag_event({ action: 'phone_click', category: 'Contact', label: source });
}

export function trackBrochureRequest(property: string) {
  gtag_event({ action: 'brochure_request', category: 'Lead', label: property });
}

export function trackSiteVisitRequest(property: string) {
  gtag_event({ action: 'site_visit_request', category: 'Lead', label: property });
}

export function trackPropertyView(slug: string) {
  gtag_event({ action: 'property_view', category: 'Content', label: slug });
}

