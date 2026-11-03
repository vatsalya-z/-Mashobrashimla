'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQAccordionProps {
  faqs: FAQItem[];
  defaultOpenIndex?: number | null;
}

export default function FAQAccordion({ faqs, defaultOpenIndex = 0 }: FAQAccordionProps) {
  // First item open by default for engaging initial view (or custom defaultOpenIndex)
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);
  const shouldReduceMotion = useReducedMotion();

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="space-y-4 max-w-4xl mx-auto">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={faq.question}
            className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
              isOpen
                ? 'bg-white border-[#1E3A5F]/20 shadow-md ring-1 ring-[#1E3A5F]/10'
                : 'bg-white/80 border-[#E2E8F0] hover:border-[#CBD5E1] hover:bg-white shadow-xs'
            }`}
          >
            <button
              type="button"
              onClick={() => toggleFAQ(index)}
              aria-expanded={isOpen}
              className="w-full text-left p-5 sm:p-6 flex items-start sm:items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1E3A5F]"
            >
              <div className="flex items-start sm:items-center gap-3.5 min-w-0">
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-200 ${
                    isOpen ? 'bg-[#1E3A5F] text-white' : 'bg-[#1E3A5F]/10 text-[#1E3A5F]'
                  }`}
                >
                  <HelpCircle size={16} />
                </div>
                <span
                  className="font-bold text-[#172033] text-sm sm:text-base leading-snug"
                  style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}
                >
                  {faq.question}
                </span>
              </div>

              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                  isOpen ? 'bg-[#E07A2F] text-white rotate-180' : 'bg-[#F1F5F9] text-[#64748B]'
                }`}
              >
                <ChevronDown size={16} />
              </div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, height: 0 }}
                  animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, height: 'auto' }}
                  exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-1 text-xs sm:text-sm text-[#64748B] leading-relaxed border-t border-[#F1F5F9] pl-16">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

