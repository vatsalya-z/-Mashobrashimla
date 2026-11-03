'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { Mountain, Trees, MapPin, Home } from 'lucide-react';
import { FaCheckCircle } from 'react-icons/fa';
import { websiteImages } from '@/lib/images';
import TextType from './TextType';

const heroSlides = [
  {
    src: websiteImages.hero.main.src,
    mobileSrc: websiteImages.hero.mobile[0].src,
    alt: websiteImages.hero.main.alt,
    mobileAlt: websiteImages.hero.mobile[0].alt,
    caption: 'Luxury Mountain Villa in Deodar Forest',
  },
  {
    src: websiteImages.banners.projectPanorama.src,
    mobileSrc: websiteImages.hero.mobile[1].src,
    alt: websiteImages.banners.projectPanorama.alt,
    mobileAlt: websiteImages.hero.mobile[1].alt,
    caption: '150-Acre Gated Mountain Enclave Panorama',
  },
  {
    src: websiteImages.hero.mountainVilla.src,
    mobileSrc: websiteImages.hero.mobile[2].src,
    alt: websiteImages.hero.mountainVilla.alt,
    mobileAlt: websiteImages.hero.mobile[2].alt,
    caption: 'Modern Himalayan Slope Architecture',
  },
  {
    src: websiteImages.hero.morningResidence.src,
    mobileSrc: websiteImages.hero.mobile[0].src,
    alt: websiteImages.hero.morningResidence.alt,
    mobileAlt: websiteImages.hero.mobile[0].alt,
    caption: 'Morning Sunlight over Himalayan Ridges',
  },
  {
    src: websiteImages.banners.estateOverview.src,
    mobileSrc: websiteImages.hero.mobile[1].src,
    alt: websiteImages.banners.estateOverview.alt,
    mobileAlt: websiteImages.hero.mobile[1].alt,
    caption: 'Exclusive Residential Estate Grounds',
  },
];

export default function HomeHero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);

  // Subtle Parallax effect on Hero Background Image
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 800], [0, 120]);

  // Automatically cycle through images every 3 seconds (3000ms) without chevron arrows
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevIndex) => (prevIndex + 1) % heroSlides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative w-full min-h-[88vh] lg:min-h-[92vh] flex flex-col justify-between overflow-hidden"
    >
      <motion.div 
        style={shouldReduceMotion ? {} : { y: yParallax }} 
        className="absolute inset-0 will-change-transform"
      >
        {heroSlides.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={slide.src}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              {/* Desktop View Image (Untouched original landscape) */}
              <div className="hidden md:block absolute inset-0">
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  priority={index === 0}
                  sizes="100vw"
                  className={`object-cover object-center transform transition-transform duration-[4000ms] ease-out ${
                    isActive ? 'scale-105' : 'scale-100'
                  }`}
                />
              </div>

              {/* Mobile View Image (Dedicated 9:16 vertical portrait) */}
              <div className="block md:hidden absolute inset-0">
                <Image
                  src={slide.mobileSrc}
                  alt={slide.mobileAlt}
                  fill
                  priority={index === 0}
                  sizes="100vw"
                  className={`object-cover object-center transform transition-transform duration-[4000ms] ease-out ${
                    isActive ? 'scale-105' : 'scale-100'
                  }`}
                />
              </div>
            </div>
          );
        })}
      </motion.div>

      <div className="relative z-30 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 lg:pt-28 pb-16 flex-1 flex items-center justify-center">
        <div className="max-w-4xl w-full text-white text-center flex flex-col items-center">
          {/* 1. Location Tag Badge */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="inline-flex items-center gap-2 bg-[#E07A2F]/20 border border-[#E07A2F]/50 text-[#E07A2F] text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full mb-6 uppercase tracking-wider backdrop-blur-md shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-[#E07A2F] animate-pulse" />
            Mashobra · Shimla · Himachal Pradesh
          </motion.div>

          {/* 2. Main Headline with Animated TextType */}
          <motion.h1
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-[1.15] drop-shadow-md text-center min-h-[4rem] sm:min-h-[5.5rem] lg:min-h-[7rem] flex items-center justify-center"
            style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}
          >
            <span className="sr-only">Discover Your Dream Home in Mashobra, Shimla</span>
            <TextType
              text={[
                "Discover Your Dream Home in Mashobra, Shimla",
                "Luxury 3 & 4 BHK Mountain Villas",
                "Panoramic Himalayan Views & Serenity",
              ]}
              typingSpeed={75}
              pauseDuration={1500}
              deletingSpeed={50}
              deleteMode="backspace"
              typeEffect="none"
              mistakes={0}
              cursorStyle="underscore"
              cursorGlide
              showCursor
              cursorColor="#E07A2F"
              prefixColor="currentColor"
              cursorBlinkDuration={0.5}
              cursorCharacter="_"
              prefix=""
            />
          </motion.h1>

          {/* 3. Description */}
          <motion.p
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.48, ease: [0.22, 1, 0.36, 1] }}
            className="text-white/85 text-base sm:text-lg lg:text-xl mb-8 leading-relaxed font-light max-w-2xl mx-auto drop-shadow-sm text-center"
          >
            Explore thoughtfully selected residential properties, luxury 3 &amp; 4 BHK villas, and tranquil second homes amidst pristine Deodar cedar forests. Panoramic Himalayan views, clean mountain air, and refined mountain architecture.
          </motion.p>

          {/* 4. Trust Points Entrance - Responsive Grid */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-4 pt-6 border-t border-white/15 text-xs sm:text-sm text-white/80 max-w-3xl mx-auto text-center"
          >
            <div className="flex items-center justify-center gap-2">
              <FaCheckCircle className="text-[#E07A2F] flex-shrink-0 text-sm" />
              <span>100% Verified Project Listings</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <FaCheckCircle className="text-[#E07A2F] flex-shrink-0 text-sm" />
              <span>Section 118 Legal Due Diligence</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <FaCheckCircle className="text-[#E07A2F] flex-shrink-0 text-sm" />
              <span>Private Site Visits Coordinated</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          FULL-WIDTH STATS & HIGHLIGHTS RIBBON WITH ENTRANCE ANIMATION
      ═══════════════════════════════════════════════════════════════ */}
      <motion.div
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.8 }}
        className="relative z-30 w-full border-t border-white/10 bg-[#172033]/85 backdrop-blur-md py-4 sm:py-5"
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
                <div className="text-[10px] sm:text-xs text-white/60 truncate">Configurations</div>
                <div className="font-bold text-xs sm:text-base leading-tight">3 &amp; 4 BHK Villas</div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
