'use client';

import { useEffect, useRef } from 'react';
import { FaTimes, FaStar } from 'react-icons/fa';
import EnquiryForm from './EnquiryForm';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  subtitle?: string;
  source?: string;
  propertySlug?: string;
}

export default function EnquiryModal({
  isOpen,
  onClose,
  title = 'Property Enquiry & Callback',
  subtitle = 'Connect directly with our Mashobra property specialist for current availability, floor plans, and site visits.',
  source = 'homepage-hero-popup',
  propertySlug,
}: EnquiryModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  // Close on Escape key
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    }
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/65 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-[#E2E8F0] overflow-hidden max-h-[92vh] flex flex-col animate-in zoom-in-95 duration-200"
      >
        {/* Modal Header */}
        <div className="relative bg-[#1E3A5F] text-white p-5 sm:p-6 pb-6">
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <FaTimes className="text-base" />
          </button>

          <div className="inline-flex items-center gap-1.5 bg-[#E07A2F]/20 text-[#E07A2F] text-xs font-semibold px-2.5 py-1 rounded-full mb-2">
            <FaStar className="text-[10px]" />
            Priority Consultation
          </div>

          <h3
            className="text-xl sm:text-2xl font-bold text-white pr-8"
            style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}
          >
            {title}
          </h3>
          {subtitle && (
            <p className="text-white/70 text-xs sm:text-sm mt-1 leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>

        {/* Modal Body / Form */}
        <div className="p-5 sm:p-6 overflow-y-auto flex-1">
          <EnquiryForm source={source} propertySlug={propertySlug} compact />
        </div>
      </div>
    </div>
  );
}

