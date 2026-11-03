'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  PhoneCall, 
  ArrowDown, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  MapPin, 
  CalendarCheck 
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

interface ContactHeroProps {
  imageSrc?: string;
  phone?: string;
  whatsappUrl?: string;
}

export default function ContactHero({ 
  imageSrc = '/images/hero/hero-mashobra-main.webp',
  phone = '+91-9999995151',
  whatsappUrl = 'https://wa.me/919999995151'
}: ContactHeroProps) {
  const shouldReduceMotion = useReducedMotion();

  const handleScrollToForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById('enquiry-section');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full min-h-[80vh] lg:min-h-[86vh] flex flex-col justify-between overflow-hidden">
     
      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt="Contemporary luxury mountain villas and Himalayan valley in Mashobra, Shimla"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center transform transition-transform duration-[4000ms] ease-out scale-100 hover:scale-103"
        />

        {/* Text-legibility gradient overlays matching homepage and about page */}
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          HERO FOREGROUND CONTENT WITH ELEGANT ENTRANCE ANIMATIONS
      ═══════════════════════════════════════════════════════════════ */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 lg:pt-28 pb-12 flex-1 flex items-center justify-center">
        <div className="max-w-4xl w-full text-white text-center flex flex-col items-center">
          
          {/* Breadcrumb Navigation */}
          
          {/* Small Label Badge */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-[#E07A2F]/20 border border-[#E07A2F]/50 text-[#E07A2F] text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full mb-6 uppercase tracking-wider backdrop-blur-md shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-[#E07A2F] animate-pulse" />
            CONNECT WITH OUR PROPERTY DESK
          </motion.div>

          {/* Main Heading (H1) */}
          <motion.h1
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-[1.18] drop-shadow-md text-center"
            style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}
          >
            Get in Touch for Mashobra &amp; Shimla Property Advisory
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="text-white/85 text-base sm:text-lg lg:text-xl mb-8 leading-relaxed font-light max-w-3xl mx-auto drop-shadow-sm text-center"
          >
            Whether you are arranging a private site visit, seeking Section 118 statutory clarity, or requesting current villa availability, our local property consultants provide verified, prompt assistance.
          </motion.p>

          {/* CTA Buttons - Responsive Mobile Grid */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-8 w-full max-w-md mx-auto"
          >
            <a
              href="#enquiry-section"
              onClick={handleScrollToForm}
              className="inline-flex items-center justify-center gap-2 bg-[#E07A2F] text-white font-bold text-sm sm:text-base px-6 py-3.5 rounded-xl hover:bg-[#c96b22] hover:scale-102 active:scale-98 transition-all shadow-lg group w-full cursor-pointer"
            >
              <span>Submit Online Enquiry</span>
              <ArrowDown size={16} className="group-hover:translate-y-1 transition-transform" />
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20b858] text-white font-bold text-sm sm:text-base px-6 py-3.5 rounded-xl hover:scale-102 active:scale-98 transition-all shadow-lg group w-full"
            >
              <FaWhatsapp className="text-lg" />
              <span>Chat on WhatsApp</span>
            </a>
          </motion.div>

          {/* Trust & Reassurance Points */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-4 pt-6 border-t border-white/15 text-xs sm:text-sm text-white/85 max-w-3xl mx-auto text-center"
          >
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 size={16} className="text-[#E07A2F] flex-shrink-0" />
              <span>Prompt Callback Within 24 Hrs</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 size={16} className="text-[#E07A2F] flex-shrink-0" />
              <span>Section 118 Legal Due Diligence</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 size={16} className="text-[#E07A2F] flex-shrink-0" />
              <span>Accompanied On-Ground Tours</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          BOTTOM STATS & HIGHLIGHTS RIBBON (MATCHING HOMEPAGE & ABOUT US)
      ═══════════════════════════════════════════════════════════════ */}
      <motion.div
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.75 }}
        className="relative z-20 w-full border-t border-white/10 bg-[#172033]/85 backdrop-blur-md py-4 sm:py-5"
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 text-white">
            <div className="flex items-center gap-2.5 sm:gap-3 bg-white/5 border border-white/10 rounded-xl p-2.5 sm:p-3.5 group cursor-default">
              <div className="p-1.5 sm:p-2 rounded-lg bg-white/5 group-hover:bg-[#E07A2F]/20 transition-colors">
                <Clock size={20} className="text-[#E07A2F] sm:w-6 sm:h-6 flex-shrink-0 group-hover:scale-110 transition-transform" />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] sm:text-xs text-white/60 truncate">Response Time</div>
                <div className="font-bold text-xs sm:text-base leading-tight">Within 24 Hours</div>
              </div>
            </div>

            <div className="flex items-center gap-2.5 sm:gap-3 bg-white/5 border border-white/10 rounded-xl p-2.5 sm:p-3.5 group cursor-default">
              <div className="p-1.5 sm:p-2 rounded-lg bg-white/5 group-hover:bg-[#E07A2F]/20 transition-colors">
                <ShieldCheck size={20} className="text-[#E07A2F] sm:w-6 sm:h-6 flex-shrink-0 group-hover:scale-110 transition-transform" />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] sm:text-xs text-white/60 truncate">Compliance Guidance</div>
                <div className="font-bold text-xs sm:text-base leading-tight">HRERA &amp; Sec 118</div>
              </div>
            </div>

            <div className="flex items-center gap-2.5 sm:gap-3 bg-white/5 border border-white/10 rounded-xl p-2.5 sm:p-3.5 group cursor-default">
              <div className="p-1.5 sm:p-2 rounded-lg bg-white/5 group-hover:bg-[#E07A2F]/20 transition-colors">
                <MapPin size={20} className="text-[#E07A2F] sm:w-6 sm:h-6 flex-shrink-0 group-hover:scale-110 transition-transform" />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] sm:text-xs text-white/60 truncate">Regional Coverage</div>
                <div className="font-bold text-xs sm:text-base leading-tight">Mashobra &amp; Shimla</div>
              </div>
            </div>

            <div className="flex items-center gap-2.5 sm:gap-3 bg-white/5 border border-white/10 rounded-xl p-2.5 sm:p-3.5 group cursor-default">
              <div className="p-1.5 sm:p-2 rounded-lg bg-white/5 group-hover:bg-[#E07A2F]/20 transition-colors">
                <CalendarCheck size={20} className="text-[#E07A2F] sm:w-6 sm:h-6 flex-shrink-0 group-hover:scale-110 transition-transform" />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] sm:text-xs text-white/60 truncate">Site Inspection</div>
                <div className="font-bold text-xs sm:text-base leading-tight">Private Walkthroughs</div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

