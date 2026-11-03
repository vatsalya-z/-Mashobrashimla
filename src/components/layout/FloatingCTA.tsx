'use client';

import { FaWhatsapp, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { Phone, Calendar } from 'lucide-react';
import { useEnquiryModal } from '@/context/EnquiryModalContext';

const PHONE_NUMBER = process.env.NEXT_PUBLIC_PHONE || '+91-9999995151';
const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP || '+919999995151';
const WHATSAPP_MESSAGE = 'Hello, I am interested in luxury villas and properties at The Ridge Mashobra, Shimla. Please share brochure and details.';

export function WhatsAppFloat() {
  const { openEnquiryModal } = useEnquiryModal();
  const cleanWaNumber = WHATSAPP_NUMBER.replace(/\D/g, '');
  const waUrl = `https://wa.me/${cleanWaNumber}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <div className="hidden lg:flex fixed bottom-8 right-8 z-40 flex-col items-end gap-3 pointer-events-auto">
      {/* Quick Enquiry Modal Trigger (Desktop) */}
      

      {/* Call Floating Button */}
      <a
        href={`tel:${PHONE_NUMBER}`}
        aria-label="Call Property Consultant"
        title="Call Property Consultant"
        className="group relative flex items-center justify-center w-13 h-13 bg-[#1E3A5F] text-white rounded-full shadow-2xl hover:bg-[#172033] hover:scale-110 transition-all border-2 border-white/30"
      >
        <FaPhoneAlt className="text-lg group-hover:rotate-12 transition-transform" />
        <span className="absolute right-full mr-3 px-3 py-1 bg-[#172033] text-white text-xs font-semibold rounded-lg shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Call Advisor
        </span>
      </a>

      {/* WhatsApp Floating Button */}
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
        className="group relative flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl hover:bg-[#20ba59] hover:scale-110 transition-all border-2 border-white/40"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />
        <FaWhatsapp className="relative text-2xl group-hover:scale-110 transition-transform" />
        <span className="absolute right-full mr-3 px-3 py-1 bg-[#172033] text-white text-xs font-semibold rounded-lg shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap">
          WhatsApp Us
        </span>
      </a>
    </div>
  );
}

/**
 * Mobile Sticky Bottom Action Bar matching user reference design:
 * - Left: "CALL NOW" with cyan phone outline icon
 * - Center: Elevated circular WhatsApp button with halo ring & "WHATSAPP" pill badge
 * - Right: "BOOK NOW" with cyan calendar outline icon
 */
export function MobileStickyBar() {
  const { openEnquiryModal } = useEnquiryModal();
  const cleanWaNumber = WHATSAPP_NUMBER.replace(/\D/g, '');
  const waUrl = `https://wa.me/${cleanWaNumber}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#E07A2F] border-t border-[#c96b22] shadow-[0_-4px_25px_rgba(224,122,47,0.35)] lg:hidden pb-[env(safe-area-inset-bottom,0px)]">
      <div className="grid grid-cols-3 items-center h-[62px] px-2 max-w-md mx-auto">
        {/* 1. Left: CALL NOW */}
        <a
          href={`tel:${PHONE_NUMBER}`}
          className="flex flex-col items-center justify-center py-1 text-center group active:scale-95 transition-transform"
          aria-label="Call Property Advisor Now"
        >
          <Phone className="w-5 h-5 text-white mb-1 group-hover:scale-110 transition-transform drop-shadow-xs" strokeWidth={2.4} />
          <span className="text-white font-extrabold text-[11px] sm:text-xs tracking-wider uppercase leading-none drop-shadow-xs">
            CALL NOW
          </span>
        </a>

        {/* 2. Center: WHATSAPP (Elevated Circular Button with Halo Ring & Pill Badge) */}
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center -mt-5 group active:scale-95 transition-transform"
          aria-label="Chat on WhatsApp"
        >
          {/* Circular Button with Dark Halo Ring & Soft Green Glow */}
          <div className="p-1 rounded-full shadow-[0_0_18px_rgba(37,211,102,0.5)] group-hover:scale-105 transition-transform">
            <div className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-md">
              <FaWhatsapp className="text-4xl" />
            </div>
          </div>
          
        </a>

        {/* 3. Right: BOOK NOW */}
        <button
          type="button"
          onClick={() => openEnquiryModal({ source: 'mobile-sticky-book-now', title: 'Schedule Private Site Visit & Consultation' })}
          className="flex flex-col items-center justify-center py-1 text-center group active:scale-95 transition-transform cursor-pointer"
          aria-label="Book Private Site Visit Now"
        >
          <Calendar className="w-5 h-5 text-white mb-1 group-hover:scale-110 transition-transform drop-shadow-xs" strokeWidth={2.4} />
          <span className="text-white font-extrabold text-[11px] sm:text-xs tracking-wider uppercase leading-none drop-shadow-xs">
            BOOK NOW
          </span>
        </button>
      </div>
    </div>
  );
}
