'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaPhoneAlt, FaChevronDown } from 'react-icons/fa';
import { useEnquiryModal } from '@/context/EnquiryModalContext';

const navLinks = [
  { label: 'Home', href: '/' },
  {
    label: 'Properties',
    href: '/properties',
    children: [
      { label: 'All Properties', href: '/properties' },
      { label: 'Luxury Villas Mashobra', href: '/luxury-villas-mashobra' },
      { label: '3 BHK Villas', href: '/3-bhk-villas-mashobra' },
      { label: '4 BHK Villas', href: '/4-bhk-villas-mashobra' },
      { label: 'The Ridge Mashobra', href: '/projects/the-ridge-mashobra' },
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
  { label: 'Contact', href: '/contact-us' },
];

export default function Header() {
  const { openEnquiryModal } = useEnquiryModal();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

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
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-0'
            : 'bg-white/90 backdrop-blur-sm shadow-sm py-1'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 flex-shrink-0 group">
              <div className="w-8 h-8 bg-[#1E3A5F] rounded flex items-center justify-center transition-transform group-hover:scale-105">
                <span className="text-white font-bold text-sm">TR</span>
              </div>
              <div className="leading-tight">
                <div className="text-[#1E3A5F] font-bold text-sm leading-none" style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}>
                  The Ridge
                </div>
                <div className="text-[#64748B] text-xs leading-none">Mashobra, Shimla</div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1" ref={dropdownRef}>
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <div key={link.href} className="relative">
                    {link.children ? (
                      <button
                        onClick={() => setActiveDropdown(activeDropdown === link.label ? null : link.label)}
                        className={`relative flex items-center gap-1.5 px-3 py-2 rounded text-sm font-medium transition-colors ${
                          active
                            ? 'text-[#1E3A5F] font-semibold'
                            : 'text-[#172033] hover:text-[#1E3A5F]'
                        }`}
                      >
                        <span>{link.label}</span>
                        <FaChevronDown
                          className={`text-[10px] transition-transform duration-200 ${
                            activeDropdown === link.label ? 'rotate-180 text-[#E07A2F]' : ''
                          }`}
                        />
                        {active && (
                          <motion.span
                            layoutId="activeNavIndicator"
                            className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#E07A2F] rounded-full"
                            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                          />
                        )}
                      </button>
                    ) : (
                      <Link
                        href={link.href}
                        className={`relative px-3 py-2 rounded text-sm font-medium transition-colors ${
                          active
                            ? 'text-[#1E3A5F] font-semibold'
                            : 'text-[#172033] hover:text-[#1E3A5F]'
                        }`}
                      >
                        <span>{link.label}</span>
                        {active && (
                          <motion.span
                            layoutId="activeNavIndicator"
                            className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#E07A2F] rounded-full"
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
                href="tel:+91XXXXXXXXXX"
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

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2 text-[#172033] hover:text-[#1E3A5F] transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle navigation"
            >
              {mobileOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
            </button>
          </div>
        </div>

        {/* Animated Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="lg:hidden bg-white border-t border-[#E2E8F0] shadow-xl overflow-hidden"
            >
              <nav className="px-4 py-4 space-y-1 max-h-[75vh] overflow-y-auto">
                {navLinks.map((link) => (
                  <div key={link.href}>
                    <Link
                      href={link.href}
                      className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        isActive(link.href)
                          ? 'bg-[#F1F5F9] text-[#1E3A5F] font-semibold'
                          : 'text-[#172033] hover:bg-[#F1F5F9]'
                      }`}
                    >
                      {link.label}
                    </Link>
                    {link.children && (
                      <div className="ml-4 mt-1 space-y-1 border-l-2 border-[#E2E8F0] pl-2">
                        {link.children.slice(1).map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-3 py-1.5 text-xs text-[#64748B] hover:text-[#1E3A5F] rounded"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-4 border-t border-[#E2E8F0] space-y-2">
                  <button
                    type="button"
                    onClick={() => {
                      setMobileOpen(false);
                      openEnquiryModal({ source: 'mobile-drawer-enquire-btn', title: 'Priority Property Enquiry' });
                    }}
                    className="block w-full text-center bg-[#E07A2F] text-white px-4 py-2.5 rounded-lg text-sm font-semibold cursor-pointer shadow-sm hover:bg-[#c96b22] transition-colors"
                  >
                    Enquire Now
                  </button>
                  <a
                    href="tel:+91XXXXXXXXXX"
                    className="flex items-center justify-center gap-2 w-full text-center border border-[#E2E8F0] text-[#172033] px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-[#F1F5F9] transition-colors"
                  >
                    <FaPhoneAlt className="text-xs text-[#E07A2F]" />
                    Call Us
                  </a>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Spacer */}
      <div className="h-16 lg:h-18" />
    </>
  );
}

