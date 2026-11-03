'use client';

import React from 'react';
import { useEnquiryModal, EnquiryModalOptions } from '@/context/EnquiryModalContext';

interface EnquireModalButtonProps extends EnquiryModalOptions {
  className?: string;
  children: React.ReactNode;
}

export default function EnquireModalButton({
  className = 'bg-[#E07A2F] text-white font-semibold px-6 py-3 rounded hover:bg-[#c96b22] transition-colors cursor-pointer',
  children,
  title = 'Property Enquiry & Callback',
  subtitle = 'Connect directly with our Mashobra property specialist for current availability, floor plans, and site visits.',
  source = 'cta-button',
  propertySlug,
}: EnquireModalButtonProps) {
  const { openEnquiryModal } = useEnquiryModal();

  return (
    <button
      type="button"
      onClick={() => openEnquiryModal({ title, subtitle, source, propertySlug })}
      className={className}
    >
      {children}
    </button>
  );
}

