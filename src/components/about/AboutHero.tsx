'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Mountain, 
  Trees, 
  MapPin, 
  Home, 
  ArrowRight, 
  CheckCircle2 
} from 'lucide-react';
import EnquireModalButton from '@/components/ui/EnquireModalButton';

interface AboutHeroProps {
  imageSrc?: string;
}

export default function AboutHero({ 
  imageSrc = '/images/about/about-mashobra-property.jpg' 
}: AboutHeroProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative w-full min-h-[82vh] lg:min-h-[88vh] flex flex-col justify-between overflow-hidden">
      {/* ═══════════════════════════════════════════════════════════════
          SINGLE LARGE HERO IMAGE BACKGROUND WITH SUBTLE ZOOM & OVERLAY
      ═══════════════════════════════════════════════════════════════ */}
      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt="Scenic luxury mountain villa and Himalayan valley in Mashobra, Shimla"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center transform transition-transform duration-[4000ms] ease-out scale-100 hover:scale-103"
        />

        {/* Text-legibility gradient overlays matching homepage */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#172033]/95 via-[#172033]/55 to-[#172033]/75 pointer-events-none" />
        <div className="absolute inset-0 bg-black/25 pointer-events-none" />
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          HERO FOREGROUND CONTENT WITH ELEGANT ENTRANCE ANIMATIONS
      ═══════════════════════════════════════════════════════════════ */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 lg:pt-28 pb-14 flex-1 flex items-center justify-center">
        <div className="max-w-4xl w-full text-white text-center flex flex-col items-center">
          
          {/* Breadcrumb Navigation */}
          <motion.nav 
            aria-label="Breadcrumb"
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex  gap-2 text-xs sm:text-sm text-white/70 mb-5"
          >
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-white/40">/</span>
            <span className="text-white font-medium">About Us</span>
          </motion.nav>

          {/* Small Label Badge */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-[#E07A2F]/20 border border-[#E07A2F]/50 text-[#E07A2F] text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full mb-6 uppercase tracking-wider backdrop-blur-md shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-[#E07A2F] animate-pulse" />
            ABOUT THE RIDGE MASHOBRA
          </motion.div>

          {/* Main Heading (H1) */}
          <motion.h1
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-[1.18] drop-shadow-md text-center"
            style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}
          >
            Discover a Better Way of Living in the Hills
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="text-white/85 text-base sm:text-lg lg:text-xl mb-8 leading-relaxed font-light max-w-3xl mx-auto drop-shadow-sm text-center"
          >
            Explore the charm of Mashobra, Shimla, and discover residential property opportunities surrounded by the natural beauty of the Himalayas. We help individuals and families explore property options that match their lifestyle, preferences and aspirations.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4 mb-8"
          >
            <Link
              href="/properties"
              className="inline-flex items-center gap-2 bg-[#E07A2F] text-white font-bold text-sm sm:text-base px-8 py-3.5 rounded-xl hover:bg-[#c96b22] hover:scale-102 active:scale-98 transition-all shadow-lg group"
            >
              <span>Explore Properties</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>

            <EnquireModalButton
              source="about-hero"
              title="Get in Touch with our Property Specialist"
              subtitle="Submit your requirements to receive tailored property options and guidance for Mashobra & Shimla."
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/25 font-bold text-sm sm:text-base px-8 py-3.5 rounded-xl hover:scale-102 active:scale-98 transition-all backdrop-blur-sm cursor-pointer shadow-md"
            >
              <span>Get in Touch</span>
            </EnquireModalButton>
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
              <span>Verified Residential Insights</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 size={16} className="text-[#E07A2F] flex-shrink-0" />
              <span>Mashobra &amp; Shimla Specialisation</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 size={16} className="text-[#E07A2F] flex-shrink-0" />
              <span>Personalised Site Visit Coordination</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          BOTTOM STATS & HIGHLIGHTS RIBBON (MATCHING HOMEPAGE HERO)
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
                <Mountain size={20} className="text-[#E07A2F] sm:w-6 sm:h-6 flex-shrink-0 group-hover:scale-110 transition-transform" />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] sm:text-xs text-white/60 truncate">Elevation</div>
                <div className="font-bold text-xs sm:text-base leading-tight">2,100 Metres</div>
              </div>
            </div>

            <div className="flex items-center gap-2.5 sm:gap-3 bg-white/5 border border-white/10 rounded-xl p-2.5 sm:p-3.5 group cursor-default">
              <div className="p-1.5 sm:p-2 rounded-lg bg-white/5 group-hover:bg-[#E07A2F]/20 transition-colors">
                <Trees size={20} className="text-[#E07A2F] sm:w-6 sm:h-6 flex-shrink-0 group-hover:scale-110 transition-transform" />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] sm:text-xs text-white/60 truncate">Surroundings</div>
                <div className="font-bold text-xs sm:text-base leading-tight">Deodar Forests</div>
              </div>
            </div>

            <div className="flex items-center gap-2.5 sm:gap-3 bg-white/5 border border-white/10 rounded-xl p-2.5 sm:p-3.5 group cursor-default">
              <div className="p-1.5 sm:p-2 rounded-lg bg-white/5 group-hover:bg-[#E07A2F]/20 transition-colors">
                <MapPin size={20} className="text-[#E07A2F] sm:w-6 sm:h-6 flex-shrink-0 group-hover:scale-110 transition-transform" />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] sm:text-xs text-white/60 truncate">Connectivity</div>
                <div className="font-bold text-xs sm:text-base leading-tight">13 km to Shimla</div>
              </div>
            </div>

            <div className="flex items-center gap-2.5 sm:gap-3 bg-white/5 border border-white/10 rounded-xl p-2.5 sm:p-3.5 group cursor-default">
              <div className="p-1.5 sm:p-2 rounded-lg bg-white/5 group-hover:bg-[#E07A2F]/20 transition-colors">
                <Home size={20} className="text-[#E07A2F] sm:w-6 sm:h-6 flex-shrink-0 group-hover:scale-110 transition-transform" />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] sm:text-xs text-white/60 truncate">Property Types</div>
                <div className="font-bold text-xs sm:text-base leading-tight">Villas &amp; Homes</div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

