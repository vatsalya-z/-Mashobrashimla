'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Mountain, 
  MapPin, 
  ArrowDown, 
  CheckCircle2, 
  BookOpen, 
  ShieldCheck 
} from 'lucide-react';
import EnquireModalButton from '@/components/ui/EnquireModalButton';

interface BlogHeroProps {
  imageSrc?: string;
}

export default function BlogHero({ 
  imageSrc = '/images/blog/property-buying-guide.webp' 
}: BlogHeroProps) {
  const shouldReduceMotion = useReducedMotion();

  const handleScrollToArticles = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById('articles-list');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full min-h-[82vh] lg:min-h-[105vh] flex flex-col justify-between overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt="Architectural documentation, mountain homes, and Himalayan vistas in Mashobra, Shimla"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center transform transition-transform duration-[4000ms] ease-out scale-100 hover:scale-103"
        />

      </div>
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 lg:pt-28 pb-14 flex-1 flex items-center justify-center">
        <div className="max-w-4xl w-full text-white text-center flex flex-col items-center">
          
          
          {/* Main Heading (H1) */}
          <motion.h1
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-[1.18] drop-shadow-md text-center"
            style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}
          >
            Expert Mountain Property Insights &amp; Buying Guides
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="text-white/85 text-base sm:text-lg lg:text-xl mb-8 leading-relaxed font-light max-w-3xl mx-auto drop-shadow-sm text-center"
          >
            Comprehensive legal analysis, Section 118 buyer advisories, architectural reviews, and micro-market comparisons. Empowering discerning buyers to make confident, well-informed property investments in Mashobra and Shimla.
          </motion.p>

          {/* Trust & Reassurance Points */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-4 pt-6 border-t border-white/15 text-xs sm:text-sm text-white/85 max-w-3xl mx-auto text-center"
          >
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 size={16} className="text-[#E07A2F] flex-shrink-0" />
              <span>Section 118 &amp; HRERA Verified</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 size={16} className="text-[#E07A2F] flex-shrink-0" />
              <span>Factual Micro-Market Insights</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 size={16} className="text-[#E07A2F] flex-shrink-0" />
              <span>Independent Buyer Guidance</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          BOTTOM STATS & HIGHLIGHTS RIBBON (MATCHING ABOUT & HOME)
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
                <BookOpen size={20} className="text-[#E07A2F] sm:w-6 sm:h-6 flex-shrink-0 group-hover:scale-110 transition-transform" />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] sm:text-xs text-white/60 truncate">Editorial Library</div>
                <div className="font-bold text-xs sm:text-base leading-tight">In-Depth Guides</div>
              </div>
            </div>

            <div className="flex items-center gap-2.5 sm:gap-3 bg-white/5 border border-white/10 rounded-xl p-2.5 sm:p-3.5 group cursor-default">
              <div className="p-1.5 sm:p-2 rounded-lg bg-white/5 group-hover:bg-[#E07A2F]/20 transition-colors">
                <ShieldCheck size={20} className="text-[#E07A2F] sm:w-6 sm:h-6 flex-shrink-0 group-hover:scale-110 transition-transform" />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] sm:text-xs text-white/60 truncate">Legal Framework</div>
                <div className="font-bold text-xs sm:text-base leading-tight">Section 118 Clarity</div>
              </div>
            </div>

            <div className="flex items-center gap-2.5 sm:gap-3 bg-white/5 border border-white/10 rounded-xl p-2.5 sm:p-3.5 group cursor-default">
              <div className="p-1.5 sm:p-2 rounded-lg bg-white/5 group-hover:bg-[#E07A2F]/20 transition-colors">
                <Mountain size={20} className="text-[#E07A2F] sm:w-6 sm:h-6 flex-shrink-0 group-hover:scale-110 transition-transform" />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] sm:text-xs text-white/60 truncate">Elevation &amp; Climate</div>
                <div className="font-bold text-xs sm:text-base leading-tight">2,100 m Realities</div>
              </div>
            </div>

            <div className="flex items-center gap-2.5 sm:gap-3 bg-white/5 border border-white/10 rounded-xl p-2.5 sm:p-3.5 group cursor-default">
              <div className="p-1.5 sm:p-2 rounded-lg bg-white/5 group-hover:bg-[#E07A2F]/20 transition-colors">
                <MapPin size={20} className="text-[#E07A2F] sm:w-6 sm:h-6 flex-shrink-0 group-hover:scale-110 transition-transform" />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] sm:text-xs text-white/60 truncate">Coverage Area</div>
                <div className="font-bold text-xs sm:text-base leading-tight">Mashobra &amp; Shimla</div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

