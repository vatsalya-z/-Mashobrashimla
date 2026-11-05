'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { FaPhoneAlt, FaChevronDown, FaWhatsapp, FaArrowRight } from 'react-icons/fa';
import { 
  Building2, 
  Sparkles, 
  Gem, 
  Home, 
  Crown, 
  Trees, 
  Compass, 
  Snowflake, 
  MapPin, 
  ArrowRight,
  BookOpen,
  PhoneCall,
  X
} from 'lucide-react';
import { useEnquiryModal } from '@/context/EnquiryModalContext';

const PHONE_NUMBER = process.env.NEXT_PUBLIC_PHONE || '+91-9999995151';
const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP || '+919999995151';
const WHATSAPP_MESSAGE = 'Hello, I am interested in luxury villas and properties at The Ridge Mashobra, Shimla. Please share brochure and details.';

export interface NavDropdownChild {
  label: string;
  href: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string | null;
}

interface NavLinkItem {
  label: string;
  href: string;
  subtitle?: string;
  icon?: React.ComponentType<{ className?: string }>;
  badge?: string | null;
  children?: NavDropdownChild[];
}

const navLinks: NavLinkItem[] = [
  { 
    label: 'Home', 
    href: '/',
    subtitle: 'Estate Overview & Welcome',
    icon: Home,
  },
  { 
    label: 'The Ridge Mashobra', 
    href: '/the-ridge-mashobra',
    subtitle: 'Signature 150-Acre Sanctuary',
    icon: Sparkles,
    badge: 'Signature',
  },
  {
    label: 'Properties',
    href: '/properties',
    subtitle: 'Villas, Chalets & Estates',
    icon: Building2,
    badge: '6 Types',
    children: [
      {
        label: 'All Properties',
        href: '/properties',
        desc: 'Explore complete portfolio & pricing tiers',
        icon: Building2,
      },
      {
        label: 'The Ridge Mashobra',
        href: '/the-ridge-mashobra',
        desc: '150-acre gated luxury mountain estate at 2,100 m',
        icon: Sparkles,
        badge: 'Signature',
      },
      {
        label: 'Luxury Villas Mashobra',
        href: '/luxury-villas-mashobra',
        desc: 'High-altitude residences with Himalayan vistas',
        icon: Gem,
      },
      {
        label: '3 BHK Villas',
        href: '/3-bhk-villas-mashobra',
        desc: 'Balanced tri-bedroom homes with valley balconies',
        icon: Home,
      },
      {
        label: '4 BHK Villas',
        href: '/4-bhk-villas-mashobra',
        desc: 'Grand multi-tier chalets with panoramic decks',
        icon: Crown,
      },
      {
        label: 'Holiday Homes',
        href: '/holiday-homes-himachal',
        desc: 'Tranquil family vacation retreats in cedar woods',
        icon: Trees,
      },
    ],
  },
  {
    label: 'Locations',
    href: '/locations',
    subtitle: 'Mashobra, Shimla & Kufri',
    icon: Compass,
    badge: '4 Valleys',
    children: [
      {
        label: 'All Locations',
        href: '/locations',
        desc: 'Compare elevation, climate, and lifestyle',
        icon: Compass,
      },
      {
        label: 'Mashobra',
        href: '/locations/mashobra',
        desc: '2,146 m · Ancient cedar reserves & clean air (AQI < 30)',
        icon: Trees,
        badge: 'Prime',
      },
      {
        label: 'Shimla',
        href: '/locations/shimla',
        desc: '2,206 m · Capital healthcare, schools & connectivity',
        icon: Building2,
      },
      {
        label: 'Kufri',
        href: '/locations/kufri',
        desc: '2,622 m · Alpine winter snowfall & mountain ridges',
        icon: Snowflake,
      },
      {
        label: 'Naldehra',
        href: '/locations/naldehra',
        desc: '2,044 m · Historic British-era golf course sanctuary',
        icon: MapPin,
      },
    ],
  },
  { 
    label: 'About Us', 
    href: '/about-us',
    subtitle: 'The House of Abhinandan Lodha',
    icon: Trees,
  },
  { 
    label: 'Blog', 
    href: '/blog',
    subtitle: 'Mountain Living & Stories',
    icon: BookOpen,
  },
  { 
    label: 'Contact Us', 
    href: '/contact-us',
    subtitle: 'Private Concierge & Visit',
    icon: PhoneCall,
  },
];

export default function Header() {
  const { openEnquiryModal } = useEnquiryModal();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [expandedMobileSubmenu, setExpandedMobileSubmenu] = useState<string | null>(null);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const cleanWaNumber = WHATSAPP_NUMBER.replace(/\D/g, '');
  const waUrl = `https://wa.me/${cleanWaNumber}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 180);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route changes
  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileOpen(false);
      }
    };
    if (mobileOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileOpen]);

  // Lock background scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [mobileOpen]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isActive = (href: string) => pathname === href || (href !== '/' && pathname.startsWith(href));

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || mobileOpen
            ? 'bg-white shadow-md'
            : 'bg-white/95 backdrop-blur-md shadow-xs'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo */}
            <Link href="/" className="flex items-center flex-shrink-0 group py-1">
              <Image
                src="/images/logo.png"
                alt="The House of Abhinandan Lodha"
                width={160}
                height={95}
                priority
                className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-102"
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1" ref={dropdownRef}>
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <div
                    key={link.href}
                    className="relative"
                    onMouseEnter={() => link.children && handleMouseEnter(link.label)}
                    onMouseLeave={() => link.children && handleMouseLeave()}
                  >
                    {link.children ? (
                      <button
                        type="button"
                        onClick={() => setActiveDropdown(activeDropdown === link.label ? null : link.label)}
                        className={`relative flex items-center gap-1 xl:gap-1.5 px-2.5 xl:px-3 py-2 rounded-lg text-xs xl:text-sm font-medium transition-colors cursor-pointer ${
                          active || activeDropdown === link.label
                            ? 'text-[#1E3A5F] font-semibold bg-[#F1F5F9]/80'
                            : 'text-[#172033] hover:text-[#1E3A5F] hover:bg-[#F8FAFC]'
                        }`}
                        aria-expanded={activeDropdown === link.label}
                        aria-haspopup="true"
                      >
                        <span>{link.label}</span>
                        <FaChevronDown
                          className={`text-[9px] xl:text-[10px] transition-transform duration-200 ${
                            activeDropdown === link.label ? 'rotate-180 text-[#E07A2F]' : 'text-[#94A3B8]'
                          }`}
                        />
                        {active && (
                          <motion.span
                            layoutId="activeNavIndicator"
                            className="absolute bottom-0 left-2.5 xl:left-3 right-2.5 xl:right-3 h-0.5 bg-[#E07A2F] rounded-full"
                            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                          />
                        )}
                      </button>
                    ) : (
                      <Link
                        href={link.href}
                        className={`relative px-2.5 xl:px-3 py-2 rounded-lg text-xs xl:text-sm font-medium transition-colors ${
                          active
                            ? 'text-[#1E3A5F] font-semibold'
                            : 'text-[#172033] hover:text-[#1E3A5F] hover:bg-[#F8FAFC]'
                        }`}
                      >
                        <span>{link.label}</span>
                        {active && (
                          <motion.span
                            layoutId="activeNavIndicator"
                            className="absolute bottom-0 left-2.5 xl:left-3 right-2.5 xl:right-3 h-0.5 bg-[#E07A2F] rounded-full"
                            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                          />
                        )}
                      </Link>
                    )}

                    {/* Animated Premium Dropdown */}
                    <AnimatePresence>
                      {link.children && activeDropdown === link.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 6, scale: 0.98 }}
                          transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                          className={`absolute top-full pt-2 z-50 w-[380px] sm:w-[400px] ${
                            link.label === 'Locations' ? 'left-[-30px]' : 'left-0'
                          }`}
                          onMouseEnter={() => {
                            if (timeoutRef.current) clearTimeout(timeoutRef.current);
                          }}
                          onMouseLeave={handleMouseLeave}
                        >
                          <div className="bg-white/98 backdrop-blur-xl rounded-2xl shadow-[0_22px_55px_-12px_rgba(15,23,42,0.18)] border border-[#E2E8F0] p-2.5 overflow-hidden">
                            {/* Dropdown Category Header */}
                            <div className="px-3 py-2 flex items-center justify-between border-b border-[#F1F5F9] mb-1.5">
                              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#94A3B8]">
                                {link.label === 'Properties' ? 'Curated Mountain Portfolio' : 'Shimla Hills Micro-Markets'}
                              </span>
                              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                                link.label === 'Properties' 
                                  ? 'text-[#E07A2F] bg-[#E07A2F]/10' 
                                  : 'text-[#1E3A5F] bg-[#1E3A5F]/10'
                              }`}>
                                {link.label === 'Properties' ? 'Mashobra & Shimla' : 'Himachal Pradesh'}
                              </span>
                            </div>

                            {/* Dropdown Links List */}
                            <div className="space-y-1">
                              {link.children.map((child) => {
                                const Icon = child.icon;
                                const isChildActive = pathname === child.href;
                                return (
                                  <Link
                                    key={child.href}
                                    href={child.href}
                                    onClick={() => setActiveDropdown(null)}
                                    className={`group flex items-start gap-3 p-2.5 rounded-xl transition-all relative border ${
                                      isChildActive
                                        ? 'bg-[#1E3A5F]/5 border-[#1E3A5F]/15'
                                        : 'border-transparent hover:bg-[#F8FAFC] hover:border-[#E2E8F0]/70'
                                    }`}
                                  >
                                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors shadow-2xs ${
                                      isChildActive
                                        ? 'bg-[#1E3A5F] text-white'
                                        : 'bg-[#F1F5F9] text-[#1E3A5F] group-hover:bg-[#E07A2F] group-hover:text-white'
                                    }`}>
                                      <Icon className="w-4 h-4 transition-transform group-hover:scale-110" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <div className="flex items-center gap-1.5">
                                        <span className={`text-[13px] font-bold transition-colors leading-tight ${
                                          isChildActive
                                            ? 'text-[#1E3A5F]'
                                            : 'text-[#172033] group-hover:text-[#1E3A5F]'
                                        }`}>
                                          {child.label}
                                        </span>
                                        {child.badge && (
                                          <span className="text-[9px] font-extrabold uppercase tracking-wide bg-[#E07A2F]/15 text-[#E07A2F] px-1.5 py-0.5 rounded-md leading-none">
                                            {child.badge}
                                          </span>
                                        )}
                                      </div>
                                      <p className="text-[11px] text-[#64748B] group-hover:text-[#475569] leading-snug line-clamp-1 mt-0.5">
                                        {child.desc}
                                      </p>
                                    </div>
                                    <ArrowRight className="w-3.5 h-3.5 text-[#CBD5E1] group-hover:text-[#E07A2F] group-hover:translate-x-0.5 transition-all opacity-0 group-hover:opacity-100 self-center flex-shrink-0" />
                                  </Link>
                                );
                              })}
                            </div>

                            {/* Dropdown Action Footer */}
                            <div className="mt-1.5 pt-2 border-t border-[#F1F5F9] px-2 pb-1">
                              {link.label === 'Properties' ? (
                                <button
                                  type="button"
                                  onClick={() => {
                                    setActiveDropdown(null);
                                    openEnquiryModal({
                                      source: 'header-nav-properties',
                                      title: 'Bespoke Property Inquiry',
                                      subtitle: 'Speak with our Mashobra property specialist for floor plans and pricing.',
                                    });
                                  }}
                                  className="w-full flex items-center justify-between text-[11px] text-[#1E3A5F] font-semibold hover:text-[#E07A2F] p-1.5 rounded-lg hover:bg-[#1E3A5F]/5 transition-colors cursor-pointer"
                                >
                                  <span className="flex items-center gap-1.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#E07A2F]" />
                                    Looking for custom configurations?
                                  </span>
                                  <span className="inline-flex items-center gap-1 font-bold">
                                    Consult Desk &rarr;
                                  </span>
                                </button>
                              ) : (
                                <button
                                  type="button"
                                  onClick={() => {
                                    setActiveDropdown(null);
                                    openEnquiryModal({
                                      source: 'header-nav-locations',
                                      title: 'Private Site Inspection',
                                      subtitle: 'Schedule a tailored reconnaissance visit to Mashobra, Shimla, Kufri or Naldehra.',
                                    });
                                  }}
                                  className="w-full flex items-center justify-between text-[11px] text-[#1E3A5F] font-semibold hover:text-[#E07A2F] p-1.5 rounded-lg hover:bg-[#1E3A5F]/5 transition-colors cursor-pointer"
                                >
                                  <span className="flex items-center gap-1.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#E07A2F]" />
                                    Planning an on-ground tour?
                                  </span>
                                  <span className="inline-flex items-center gap-1 font-bold">
                                    Schedule Visit &rarr;
                                  </span>
                                </button>
                              )}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="flex items-center gap-2 text-sm text-[#64748B] hover:text-[#1E3A5F] transition-colors group"
              >
                <span className="w-8 h-8 rounded-full bg-[#1E3A5F]/10 flex items-center justify-center text-[#E07A2F] group-hover:scale-105 transition-transform">
                  <FaPhoneAlt className="text-xs" />
                </span>
                <span className="font-medium">Call Us</span>
              </a>
              <motion.button
                whileHover={{ y: -1, scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.15 }}
                type="button"
                onClick={() => openEnquiryModal({ source: 'header-enquire-btn', title: 'Priority Property Enquiry' })}
                className="bg-[#E07A2F] text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#c96b22] transition-colors cursor-pointer shadow-sm hover:shadow-md"
              >
                Enquire Now
              </motion.button>
            </div>

            {/* Mobile Actions: Quick Call & Luxury Animated Hamburger */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href={`tel:${PHONE_NUMBER}`}
                aria-label="Direct Call Advisory"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-[#F8FAFC] hover:bg-[#E07A2F] text-[#1E3A5F] hover:text-white border border-[#E2E8F0] hover:border-[#E07A2F] transition-all duration-200 shadow-2xs active:scale-95 cursor-pointer group"
              >
                <FaPhoneAlt className="text-xs text-[#E07A2F] group-hover:text-white transition-colors" />
              </a>

              {/* Luxury Hamburger Toggle Button */}
              <button
                type="button"
                onClick={() => setMobileOpen((prev) => !prev)}
                className={`mobile-nav-toggle group relative flex items-center gap-2.5 h-10 px-3 sm:px-3.5 rounded-full border transition-all duration-300 select-none cursor-pointer focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#E07A2F] active:scale-95 ${
                  mobileOpen
                    ? 'bg-gradient-to-r from-[#1E3A5F] to-[#122339] text-white border-[#1E3A5F] shadow-[0_4px_18px_rgba(30,58,95,0.3)] ring-1 ring-white/20'
                    : 'bg-white/95 backdrop-blur-md border-[#E2E8F0] text-[#1E3A5F] shadow-[0_2px_10px_-2px_rgba(30,58,95,0.08),0_1px_3px_rgba(0,0,0,0.04)] hover:border-[#E07A2F]/60 hover:shadow-[0_4px_16px_-2px_rgba(224,122,47,0.22)]'
                }`}
                aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={mobileOpen}
                aria-controls="mobile-navigation-menu"
              >
                {/* Status Dot / Live Concierge Indicator */}
                

                {/* Micro Typography Label */}
                <span
                  className="text-[10.5px] font-extrabold tracking-[0.14em] uppercase transition-colors"
                  style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}
                >
                </span>

                {/* Dynamic Architectural Hamburger / Cross Bars */}
                <div className="w-[18px] h-[14px] relative flex flex-col justify-between items-center pointer-events-none flex-shrink-0">
                  {/* Top Bar */}
                  <motion.span
                    animate={
                      mobileOpen
                        ? { rotate: 45, y: 6, width: 18 }
                        : { rotate: 0, y: 0, width: 18 }
                    }
                    transition={
                      shouldReduceMotion
                        ? { duration: 0 }
                        : { duration: 0.24, ease: [0.16, 1, 0.3, 1] }
                    }
                    className={`h-[2px] w-[18px] rounded-full origin-center transition-colors ${
                      mobileOpen ? 'bg-white' : 'bg-[#1E3A5F]'
                    }`}
                  />

                  {/* Middle Bar (Luxury Amber Accent) */}
                  <motion.span
                    animate={
                      mobileOpen
                        ? { opacity: 0, scaleX: 0, width: 18 }
                        : { opacity: 1, scaleX: 1, width: 18 }
                    }
                    transition={
                      shouldReduceMotion
                        ? { duration: 0 }
                        : { duration: 0.16, ease: [0.16, 1, 0.3, 1] }
                    }
                    className={`h-[2px] w-[18px] rounded-full origin-center transition-all ${
                      mobileOpen ? 'bg-[#E07A2F]' : 'bg-gradient-to-r from-[#E07A2F] to-[#F59E0B]'
                    }`}
                  />

                  {/* Bottom Bar */}
                  <motion.span
                    animate={
                      mobileOpen
                        ? { rotate: -45, y: -6, width: 18 }
                        : { rotate: 0, y: 0, width: 18 }
                    }
                    transition={
                      shouldReduceMotion
                        ? { duration: 0 }
                        : { duration: 0.24, ease: [0.16, 1, 0.3, 1] }
                    }
                    className={`h-[2px] w-[18px] rounded-full origin-center transition-all ${
                      mobileOpen ? 'bg-white' : 'bg-[#1E3A5F]'
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Animated Mobile Menu Drawer & Backdrop */}
        <AnimatePresence>
          {mobileOpen && (
            <>
              {/* Dimmed Backdrop */}
              <motion.div
                key="mobile-backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
                onClick={() => setMobileOpen(false)}
                className="fixed inset-0 top-16 bg-[#0B1528]/55 backdrop-blur-xs z-40 lg:hidden"
                aria-hidden="true"
              />

              {/* Slide-in Drawer */}
              <motion.aside
                key="mobile-drawer"
                id="mobile-navigation-menu"
                role="dialog"
                aria-modal="true"
                aria-label="Navigation Menu"
                initial={shouldReduceMotion ? { opacity: 0 } : { x: '100%' }}
                animate={shouldReduceMotion ? { opacity: 1 } : { x: 0 }}
                exit={shouldReduceMotion ? { opacity: 0 } : { x: '100%' }}
                transition={
                  shouldReduceMotion
                    ? { duration: 0.1 }
                    : { type: 'spring', damping: 28, stiffness: 300 }
                }
                className="fixed top-16 right-0 bottom-0 w-full sm:w-[390px] bg-white/98 backdrop-blur-xl z-50 shadow-[0_25px_60px_-15px_rgba(15,23,42,0.35)] flex flex-col border-l border-[#E2E8F0]/80 lg:hidden overflow-hidden"
              >
                {/* Header Micro-bar */}
                <div className="px-5 py-3.5 border-b border-[#F1F5F9] bg-gradient-to-r from-[#F8FAFC] via-white to-[#F8FAFC] flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="w-8 h-8 rounded-xl bg-[#E07A2F]/10 flex items-center justify-center text-[#E07A2F] shadow-2xs">
                      <Crown className="w-4 h-4" />
                    </span>
                    <div>
                      <p
                        className="font-extrabold tracking-wider uppercase text-[11px] text-[#1E3A5F] leading-none"
                        style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}
                      >
                        The Ridge Mashobra
                      </p>
                      <p className="text-[10px] text-[#64748B] mt-0.5 font-medium">Shimla Hills · 2,100 m</p>
                    </div>
                  </div>
                  
                </div>

                {/* Scrollable Nav List */}
                <div className="flex-1 overflow-y-auto px-3.5 py-3 space-y-1.5">
                  <motion.ul
                    initial="hidden"
                    animate="show"
                    variants={{
                      hidden: { opacity: 0 },
                      show: {
                        opacity: 1,
                        transition: {
                          staggerChildren: shouldReduceMotion ? 0 : 0.04,
                        },
                      },
                    }}
                    className="space-y-1.5"
                  >
                    {navLinks.map((link) => {
                      const active = isActive(link.href);
                      const hasChildren = Boolean(link.children && link.children.length > 0);
                      const isSubmenuOpen = expandedMobileSubmenu === link.label;
                      const Icon = link.icon || Home;

                      return (
                        <motion.li
                          key={link.href}
                          variants={{
                            hidden: { opacity: 0, x: 12 },
                            show: { opacity: 1, x: 0, transition: { duration: 0.22, ease: 'easeOut' } },
                          }}
                          className="rounded-2xl overflow-hidden"
                        >
                          <div
                            className={`group relative flex items-center justify-between p-2 rounded-2xl transition-all duration-200 border ${
                              active
                                ? 'bg-gradient-to-r from-[#1E3A5F]/8 via-[#1E3A5F]/4 to-transparent border-[#1E3A5F]/20 shadow-xs'
                                : 'border-transparent hover:bg-[#F8FAFC] hover:border-[#E2E8F0]/80'
                            }`}
                          >
                            {/* Active Amber Indicator Bar */}
                            {active && (
                              <span className="absolute left-0 top-2.5 bottom-2.5 w-1 bg-[#E07A2F] rounded-r-full" />
                            )}

                            {/* Main Clickable Area */}
                            <Link
                              href={link.href}
                              onClick={() => setMobileOpen(false)}
                              className="flex-1 flex items-center gap-3 py-1 pl-2 pr-1"
                              style={{ fontFamily: 'var(--font-inter, sans-serif)' }}
                            >
                              {/* Icon Squircle */}
                              <div
                                className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-200 shadow-2xs ${
                                  active
                                    ? 'bg-[#1E3A5F] text-white shadow-sm ring-2 ring-[#1E3A5F]/15'
                                    : 'bg-[#F1F5F9] text-[#1E3A5F] group-hover:bg-[#E07A2F] group-hover:text-white'
                                }`}
                              >
                                <Icon className="w-4 h-4 transition-transform group-hover:scale-110" />
                              </div>

                              {/* Title & Subtitle */}
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2">
                                  <span
                                    className={`text-[14.5px] leading-tight transition-colors ${
                                      active
                                        ? 'font-bold text-[#1E3A5F]'
                                        : 'font-semibold text-[#172033] group-hover:text-[#1E3A5F]'
                                    }`}
                                  >
                                    {link.label}
                                  </span>
                                  {link.badge && (
                                    <span className="text-[9px] font-extrabold uppercase tracking-wide bg-[#E07A2F]/15 text-[#E07A2F] px-1.5 py-0.5 rounded-md leading-none">
                                      {link.badge}
                                    </span>
                                  )}
                                </div>
                                {link.subtitle && (
                                  <p className="text-[11px] text-[#64748B] group-hover:text-[#475569] leading-snug mt-0.5 truncate">
                                    {link.subtitle}
                                  </p>
                                )}
                              </div>
                            </Link>

                            {/* Action Indicator / Submenu Button */}
                            {hasChildren ? (
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.preventDefault();
                                  e.stopPropagation();
                                  setExpandedMobileSubmenu(isSubmenuOpen ? null : link.label);
                                }}
                                className={`flex items-center justify-center w-8 h-8 rounded-xl transition-all cursor-pointer ${
                                  isSubmenuOpen
                                    ? 'bg-[#E07A2F]/15 text-[#E07A2F]'
                                    : 'bg-[#F1F5F9] text-[#64748B] hover:text-[#1E3A5F] hover:bg-[#E2E8F0]'
                                }`}
                                aria-label={`Toggle ${link.label} submenu`}
                                aria-expanded={isSubmenuOpen}
                              >
                                <FaChevronDown
                                  className={`text-xs transition-transform duration-200 ${
                                    isSubmenuOpen ? 'rotate-180 text-[#E07A2F]' : ''
                                  }`}
                                />
                              </button>
                            ) : (
                              <Link
                                href={link.href}
                                onClick={() => setMobileOpen(false)}
                                className="p-2 text-[#CBD5E1] group-hover:text-[#E07A2F] group-hover:translate-x-0.5 transition-all"
                                aria-label={`Navigate to ${link.label}`}
                              >
                                <ArrowRight className="w-4 h-4" />
                              </Link>
                            )}
                          </div>

                          {/* Collapsible Submenu */}
                          <AnimatePresence>
                            {hasChildren && isSubmenuOpen && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.2, ease: 'easeInOut' }}
                                className="overflow-hidden bg-[#F8FAFC] rounded-2xl mt-1.5 mb-1 p-2 border border-[#E2E8F0]/80 shadow-inner"
                              >
                                <div className="space-y-1">
                                  {link.children!.map((child) => {
                                    const childActive = pathname === child.href;
                                    const ChildIcon = child.icon;
                                    return (
                                      <Link
                                        key={child.href}
                                        href={child.href}
                                        onClick={() => setMobileOpen(false)}
                                        className={`flex items-start gap-3 p-2.5 rounded-xl transition-all ${
                                          childActive
                                            ? 'text-[#1E3A5F] font-bold bg-white shadow-xs border border-[#1E3A5F]/15'
                                            : 'text-[#64748B] hover:text-[#1E3A5F] hover:bg-white/70'
                                        }`}
                                        style={{ fontFamily: 'var(--font-inter, sans-serif)' }}
                                      >
                                        <span className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 text-xs shadow-2xs mt-0.5 ${
                                          childActive ? 'bg-[#E07A2F] text-white' : 'bg-[#1E3A5F]/5 text-[#1E3A5F]'
                                        }`}>
                                          <ChildIcon className="w-3.5 h-3.5" />
                                        </span>
                                        <div className="flex-1 min-w-0">
                                          <div className="flex items-center gap-1.5">
                                            <span className="text-[13px] font-semibold text-[#172033] leading-tight">{child.label}</span>
                                            {child.badge && (
                                              <span className="text-[8px] font-bold uppercase tracking-wide bg-[#E07A2F]/15 text-[#E07A2F] px-1.5 py-0.5 rounded">
                                                {child.badge}
                                              </span>
                                            )}
                                          </div>
                                          <p className="text-[10px] text-[#94A3B8] line-clamp-1 mt-0.5">{child.desc}</p>
                                        </div>
                                        <ArrowRight className="w-3.5 h-3.5 text-[#CBD5E1] self-center flex-shrink-0" />
                                      </Link>
                                    );
                                  })}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.li>
                      );
                    })}
                  </motion.ul>

                  {/* Curated Mountain Sanctuary Teaser Card */}
                </div>

                {/* Bottom CTA Area */}
                
              </motion.aside>
            </>
          )}
        </AnimatePresence>
      </header>

      {/* Spacer */}
      <div className="h-16 lg:h-18" />
    </>
  );
}

