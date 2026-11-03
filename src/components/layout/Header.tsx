'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { FaPhoneAlt, FaChevronDown, FaWhatsapp, FaArrowRight } from 'react-icons/fa';
import { useEnquiryModal } from '@/context/EnquiryModalContext';

const PHONE_NUMBER = process.env.NEXT_PUBLIC_PHONE || '+91-9999995151';
const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP || '+919999995151';
const WHATSAPP_MESSAGE = 'Hello, I am interested in luxury villas and properties at The Ridge Mashobra, Shimla. Please share brochure and details.';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'The Ridge Mashobra', href: '/the-ridge-mashobra' },
  {
    label: 'Properties',
    href: '/properties',
    children: [
      { label: 'All Properties', href: '/properties' },
      { label: 'Luxury Villas Mashobra', href: '/luxury-villas-mashobra' },
      { label: '3 BHK Villas', href: '/3-bhk-villas-mashobra' },
      { label: '4 BHK Villas', href: '/4-bhk-villas-mashobra' },
      { label: 'The Ridge Mashobra', href: '/the-ridge-mashobra' },
      { label: 'Holiday Homes', href: '/holiday-homes-himachal' },
    ],
  },
  {
    label: 'Locations',
    href: '/locations',
    children: [
      { label: 'All Locations', href: '/locations' },
      { label: 'Mashobra', href: '/locations/mashobra' },
      { label: 'Shimla', href: '/locations/shimla' },
      { label: 'Kufri', href: '/locations/kufri' },
      { label: 'Naldehra', href: '/locations/naldehra' },
    ],
  },
  { label: 'About Us', href: '/about-us' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact Us', href: '/contact-us' },
];

export default function Header() {
  const { openEnquiryModal } = useEnquiryModal();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [expandedMobileSubmenu, setExpandedMobileSubmenu] = useState<string | null>(null);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const cleanWaNumber = WHATSAPP_NUMBER.replace(/\D/g, '');
  const waUrl = `https://wa.me/${cleanWaNumber}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route changes
  useEffect(() => {
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
                  <div key={link.href} className="relative">
                    {link.children ? (
                      <button
                        onClick={() => setActiveDropdown(activeDropdown === link.label ? null : link.label)}
                        className={`relative flex items-center gap-1 xl:gap-1.5 px-2.5 xl:px-3 py-2 rounded text-xs xl:text-sm font-medium transition-colors ${
                          active
                            ? 'text-[#1E3A5F] font-semibold'
                            : 'text-[#172033] hover:text-[#1E3A5F]'
                        }`}
                      >
                        <span>{link.label}</span>
                        <FaChevronDown
                          className={`text-[9px] xl:text-[10px] transition-transform duration-200 ${
                            activeDropdown === link.label ? 'rotate-180 text-[#E07A2F]' : ''
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
                        className={`relative px-2.5 xl:px-3 py-2 rounded text-xs xl:text-sm font-medium transition-colors ${
                          active
                            ? 'text-[#1E3A5F] font-semibold'
                            : 'text-[#172033] hover:text-[#1E3A5F]'
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

                    {/* Animated Dropdown */}
                    <AnimatePresence>
                      {link.children && activeDropdown === link.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.98 }}
                          transition={{ duration: 0.2, ease: 'easeOut' }}
                          className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-[#E2E8F0] py-2 z-50 overflow-hidden"
                        >
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block px-4 py-2.5 text-sm text-[#172033] hover:bg-[#F1F5F9] hover:text-[#1E3A5F] transition-colors"
                            >
                              {child.label}
                            </Link>
                          ))}
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

            {/* Mobile Animated Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              className="lg:hidden relative w-11 h-11 -mr-2 flex items-center justify-center rounded-xl text-[#1E3A5F] hover:bg-[#F1F5F9] active:scale-95 transition-all focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#E07A2F] cursor-pointer"
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation-menu"
            >
              <div className="w-5 h-4 relative flex flex-col justify-between pointer-events-none">
                <motion.span
                  animate={
                    mobileOpen
                      ? { rotate: 45, y: 7 }
                      : { rotate: 0, y: 0 }
                  }
                  transition={
                    shouldReduceMotion
                      ? { duration: 0 }
                      : { duration: 0.24, ease: [0.4, 0, 0.2, 1] }
                  }
                  className="w-5 h-[2px] bg-[#1E3A5F] rounded-full origin-center"
                />
                <motion.span
                  animate={
                    mobileOpen
                      ? { opacity: 0, scaleX: 0 }
                      : { opacity: 1, scaleX: 1 }
                  }
                  transition={
                    shouldReduceMotion
                      ? { duration: 0 }
                      : { duration: 0.18, ease: [0.4, 0, 0.2, 1] }
                  }
                  className="w-5 h-[2px] bg-[#1E3A5F] rounded-full origin-center"
                />
                <motion.span
                  animate={
                    mobileOpen
                      ? { rotate: -45, y: -7 }
                      : { rotate: 0, y: 0 }
                  }
                  transition={
                    shouldReduceMotion
                      ? { duration: 0 }
                      : { duration: 0.24, ease: [0.4, 0, 0.2, 1] }
                  }
                  className="w-5 h-[2px] bg-[#1E3A5F] rounded-full origin-center"
                />
              </div>
            </button>
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
                className="fixed inset-0 top-16 bg-[#0f172a]/45 backdrop-blur-xs z-40 lg:hidden"
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
                className="fixed top-16 right-0 bottom-0 w-full sm:w-[380px] bg-white z-50 shadow-2xl flex flex-col border-l border-[#E2E8F0] lg:hidden overflow-hidden"
              >
                {/* Header Micro-bar */}
                <div className="px-5 py-3 border-b border-[#F1F5F9] flex items-center justify-between text-xs text-[#64748B]">
                  <span
                    className="font-bold tracking-wider uppercase text-[11px] text-[#1E3A5F]"
                    style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}
                  >
                    The Ridge Mashobra
                  </span>
                  <span className="text-[10px] bg-[#1E3A5F]/5 text-[#1E3A5F] font-semibold px-2 py-0.5 rounded-full">
                    Shimla, HP
                  </span>
                </div>

                {/* Scrollable Nav List */}
                <div className="flex-1 overflow-y-auto px-4 py-3 space-y-1">
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
                    className="space-y-1"
                  >
                    {navLinks.map((link) => {
                      const active = isActive(link.href);
                      const hasChildren = Boolean(link.children && link.children.length > 0);
                      const isSubmenuOpen = expandedMobileSubmenu === link.label;

                      return (
                        <motion.li
                          key={link.href}
                          variants={{
                            hidden: { opacity: 0, x: 12 },
                            show: { opacity: 1, x: 0, transition: { duration: 0.22, ease: 'easeOut' } },
                          }}
                          className="rounded-xl overflow-hidden"
                        >
                          <div
                            className={`flex items-center justify-between rounded-xl transition-all ${
                              active
                                ? 'bg-[#1E3A5F]/5 text-[#1E3A5F] font-semibold'
                                : 'text-[#172033] hover:bg-[#F8FAFC] hover:text-[#1E3A5F]'
                            }`}
                          >
                            <Link
                              href={link.href}
                              onClick={() => setMobileOpen(false)}
                              className="flex-1 py-3 px-3.5 text-[15px] font-medium flex items-center gap-2"
                              style={{ fontFamily: 'var(--font-inter, sans-serif)' }}
                            >
                              {active && (
                                <span className="w-1.5 h-1.5 rounded-full bg-[#E07A2F] flex-shrink-0" />
                              )}
                              <span>{link.label}</span>
                            </Link>

                            {hasChildren && (
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.preventDefault();
                                  e.stopPropagation();
                                  setExpandedMobileSubmenu(isSubmenuOpen ? null : link.label);
                                }}
                                className="p-3 text-[#64748B] hover:text-[#1E3A5F] transition-colors cursor-pointer"
                                aria-label={`Toggle ${link.label} submenu`}
                                aria-expanded={isSubmenuOpen}
                              >
                                <FaChevronDown
                                  className={`text-xs transition-transform duration-200 ${
                                    isSubmenuOpen ? 'rotate-180 text-[#E07A2F]' : ''
                                  }`}
                                />
                              </button>
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
                                className="overflow-hidden bg-[#F8FAFC] rounded-lg mt-1 ml-3 border-l-2 border-[#E07A2F]/40"
                              >
                                <div className="py-1.5 pl-3 pr-2 space-y-0.5">
                                  {link.children!.map((child) => {
                                    const childActive = pathname === child.href;
                                    return (
                                      <Link
                                        key={child.href}
                                        href={child.href}
                                        onClick={() => setMobileOpen(false)}
                                        className={`block py-2 px-2.5 rounded-md text-xs sm:text-sm transition-colors ${
                                          childActive
                                            ? 'text-[#E07A2F] font-semibold bg-white shadow-xs'
                                            : 'text-[#64748B] hover:text-[#1E3A5F] hover:bg-white/60'
                                        }`}
                                        style={{ fontFamily: 'var(--font-inter, sans-serif)' }}
                                      >
                                        {child.label}
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
                </div>

                {/* Bottom CTA Area */}
                <div className="p-4 border-t border-[#E2E8F0] bg-white space-y-2.5">
                  <button
                    type="button"
                    onClick={() => {
                      setMobileOpen(false);
                      openEnquiryModal({
                        source: 'mobile-drawer-enquire-btn',
                        title: 'Priority Property Enquiry',
                        subtitle: 'Connect directly with our mountain real estate specialists.',
                      });
                    }}
                    className="w-full flex items-center justify-center gap-2 bg-[#E07A2F] text-white font-bold py-3.5 px-4 rounded-xl shadow-md hover:bg-[#c96b22] active:scale-98 transition-all text-sm cursor-pointer"
                    style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}
                  >
                    <span>Enquire Now</span>
                    <FaArrowRight className="text-xs" />
                  </button>

                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href={`tel:${PHONE_NUMBER}`}
                      className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl border border-[#E2E8F0] text-[#1E3A5F] text-xs font-semibold hover:bg-[#F8FAFC] active:scale-98 transition-all"
                    >
                      <FaPhoneAlt className="text-xs text-[#E07A2F]" />
                      <span>Call Advisory</span>
                    </a>
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 text-[#128C7E] text-xs font-semibold hover:bg-[#25D366]/20 active:scale-98 transition-all"
                    >
                      <FaWhatsapp className="text-sm text-[#25D366]" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
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

