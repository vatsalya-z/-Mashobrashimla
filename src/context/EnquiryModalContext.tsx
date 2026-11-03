'use client';

import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import EnquiryModal from '@/components/forms/EnquiryModal';

export interface EnquiryModalOptions {
  title?: string;
  subtitle?: string;
  source?: string;
  propertySlug?: string;
}

interface EnquiryModalContextType {
  openEnquiryModal: (options?: EnquiryModalOptions) => void;
  closeEnquiryModal: () => void;
  isOpen: boolean;
}

const EnquiryModalContext = createContext<EnquiryModalContextType>({
  openEnquiryModal: () => {},
  closeEnquiryModal: () => {},
  isOpen: false,
});

export function useEnquiryModal() {
  return useContext(EnquiryModalContext);
}

// Global helper to trigger enquiry modal from any component without hook prop drilling
export function triggerEnquiryModal(options?: EnquiryModalOptions) {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('open-enquiry-modal', { detail: options || {} }));
  }
}

export function EnquiryModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState<EnquiryModalOptions>({
    title: 'Property Enquiry & Callback',
    subtitle: 'Connect directly with our Mashobra property specialist for current availability, floor plans, and site visits.',
    source: 'enquire-button',
  });

  const openEnquiryModal = useCallback((opts?: EnquiryModalOptions) => {
    if (opts) {
      setOptions({
        title: opts.title || 'Property Enquiry & Callback',
        subtitle: opts.subtitle || 'Connect directly with our Mashobra property specialist for current availability, floor plans, and site visits.',
        source: opts.source || 'enquire-button',
        propertySlug: opts.propertySlug,
      });
    }
    setIsOpen(true);
  }, []);

  const closeEnquiryModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  // Listen to global 'open-enquiry-modal' window events
  useEffect(() => {
    function handleGlobalEvent(e: Event) {
      const customEvent = e as CustomEvent<EnquiryModalOptions>;
      openEnquiryModal(customEvent.detail);
    }

    window.addEventListener('open-enquiry-modal', handleGlobalEvent);
    return () => {
      window.removeEventListener('open-enquiry-modal', handleGlobalEvent);
    };
  }, [openEnquiryModal]);

  return (
    <EnquiryModalContext.Provider value={{ openEnquiryModal, closeEnquiryModal, isOpen }}>
      {children}
      <EnquiryModal
        isOpen={isOpen}
        onClose={closeEnquiryModal}
        title={options.title}
        subtitle={options.subtitle}
        source={options.source}
        propertySlug={options.propertySlug}
      />
    </EnquiryModalContext.Provider>
  );
}

