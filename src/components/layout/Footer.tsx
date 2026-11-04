'use client';

import Link from 'next/link';
import Image from 'next/image';
import { 
  FaPhoneAlt, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaFacebookF, 
  FaInstagram, 
  FaYoutube, 
  FaTwitter, 
  FaWhatsapp, 
  FaArrowRight
} from 'react-icons/fa';
import { useEnquiryModal } from '@/context/EnquiryModalContext';

const footerLinks = {
  quickLinks: [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about-us' },
    { label: 'Properties', href: '/properties' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact Us', href: '/contact-us' },
    { label: 'Enquire Now', href: '/enquire-now' },
  ],
  properties: [
    { label: 'The Ridge Mashobra', href: '/the-ridge-mashobra' },
    { label: 'Project Amenities', href: '/project/amenities' },
    { label: 'Luxury Villas Mashobra', href: '/luxury-villas-mashobra' },
    { label: '3 BHK Villas Mashobra', href: '/3-bhk-villas-mashobra' },
    { label: '4 BHK Villas Mashobra', href: '/4-bhk-villas-mashobra' },
    { label: 'Holiday Homes Himachal', href: '/holiday-homes-himachal' },
    { label: 'Luxury Second Homes', href: '/luxury-second-homes' },
  ],
  locations: [
    { label: 'Mashobra', href: '/locations/mashobra' },
    { label: 'Shimla', href: '/locations/shimla' },
    { label: 'Kufri', href: '/locations/kufri' },
    { label: 'Naldehra', href: '/locations/naldehra' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms & Conditions', href: '/terms-and-conditions' },
    { label: 'Disclaimer', href: '/disclaimer' },
  ],
};

const PHONE_NUMBER = process.env.NEXT_PUBLIC_PHONE || '+91-9999995151';
const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP || '+919999995151';

const socialLinks = [
  { icon: FaFacebookF, label: 'Facebook', href: '#', hoverBg: 'hover:bg-[#1877F2]' },
  { icon: FaInstagram, label: 'Instagram', href: '#', hoverBg: 'hover:bg-[#E4405F]' },
  { icon: FaYoutube, label: 'YouTube', href: '#', hoverBg: 'hover:bg-[#FF0000]' },
  { icon: FaTwitter, label: 'Twitter', href: '#', hoverBg: 'hover:bg-[#1DA1F2]' },
  { 
    icon: FaWhatsapp, 
    label: 'WhatsApp', 
    href: `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, '')}`,
    hoverBg: 'hover:bg-[#25D366]'
  },
];

export default function Footer() {
  const { openEnquiryModal } = useEnquiryModal();

  return (
    <footer className="bg-[#1E3A5F] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* ═══════════════════════════════════════════════════════════
              LEFT SIDE: BRAND, DETAILS & CONTACT INFO
          ═══════════════════════════════════════════════════════════ */}
          <div className="md:col-span-5 lg:col-span-4">
            <Link href="/" className="inline-block mb-5 group">
              <div className="bg-white px-3.5 py-2 rounded-xl inline-flex items-center shadow-md transition-transform group-hover:scale-102">
                <Image
                  src="/images/logo.png"
                  alt="The House of Abhinandan Lodha"
                  width={160}
                  height={95}
                  className="h-10 sm:h-12 w-auto object-contain"
                />
              </div>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-6 max-w-sm">
              An independent real estate consultancy facilitating property enquiries for premium residential
              developments in Mashobra and the Shimla region.
            </p>
            <div className="space-y-2.5 text-sm">
              <div className="flex items-center gap-2.5 text-white/70">
                <FaPhoneAlt className="text-[#E07A2F] text-xs flex-shrink-0" />
                <a href={`tel:${PHONE_NUMBER.replace(/\s+/g, '')}`} className="hover:text-white transition-colors">
                  {PHONE_NUMBER}
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-white/70">
                <FaEnvelope className="text-[#E07A2F] text-xs flex-shrink-0" />
                <a href="mailto:info@mashobrashimla.com" className="hover:text-white transition-colors break-all">
                  info@mashobrashimla.com
                </a>
              </div>
              <div className="flex items-start gap-2.5 text-white/70">
                <FaMapMarkerAlt className="text-[#E07A2F] text-xs flex-shrink-0 mt-1" />
                <span>Mashobra, Shimla, Himachal Pradesh 171007</span>
              </div>
            </div>

            {/* Social Icons - Responsive 5-column grid */}
            <div className="grid grid-cols-5 gap-2.5 w-fit mt-6">
              {socialLinks.map(({ icon: IconComp, label, href, hoverBg }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`w-10 h-10 bg-white/10 ${hoverBg} rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 text-white text-sm shadow-sm`}
                >
                  <IconComp />
                </a>
              ))}
            </div>
          </div>

          {/* ═══════════════════════════════════════════════════════════
              RIGHT SIDE: RESPONSIVE GRID OF LINKS & MAP
          ═══════════════════════════════════════════════════════════ */}
          <div className="md:col-span-7 lg:col-span-8 flex flex-col gap-8">
            {/* Responsive Grid for Links: 2 cols on mobile, 4 cols on tablet/desktop */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-6 lg:gap-8">
              {/* 1. Quick Links */}
              <div>
                <h3 className="text-white font-semibold text-sm mb-3 sm:mb-4 uppercase tracking-wider">Quick Links</h3>
                <ul className="space-y-2">
                  {footerLinks.quickLinks.map((link) => (
                    <li key={link.href}>
                      {link.href === '/enquire-now' ? (
                        <button
                          type="button"
                          onClick={() => openEnquiryModal({ source: 'footer-quick-link', title: 'Connect with Property Advisor' })}
                          className="text-white/70 hover:text-white text-sm transition-colors flex items-center gap-1.5 group cursor-pointer text-left"
                        >
                          <span className="text-[#E07A2F] opacity-0 group-hover:opacity-100 transition-opacity text-xs">›</span>
                          {link.label}
                        </button>
                      ) : (
                        <Link href={link.href} className="text-white/70 hover:text-white text-sm transition-colors flex items-center gap-1.5 group">
                          <span className="text-[#E07A2F] opacity-0 group-hover:opacity-100 transition-opacity text-xs">›</span>
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              {/* 2. Properties */}
              <div>
                <h3 className="text-white font-semibold text-sm mb-3 sm:mb-4 uppercase tracking-wider">Properties</h3>
                <ul className="space-y-2">
                  {footerLinks.properties.slice(0, 6).map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-white/70 hover:text-white text-sm transition-colors flex items-center gap-1.5 group">
                        <span className="text-[#E07A2F] opacity-0 group-hover:opacity-100 transition-opacity text-xs">›</span>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 3. Locations */}
              <div>
                <h3 className="text-white font-semibold text-sm mb-3 sm:mb-4 uppercase tracking-wider">Locations</h3>
                <ul className="space-y-2">
                  {footerLinks.locations.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-white/70 hover:text-white text-sm transition-colors flex items-center gap-1.5 group">
                        <span className="text-[#E07A2F] opacity-0 group-hover:opacity-100 transition-opacity text-xs">›</span>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 4. Legal & Policy Links */}
              <div>
                <h3 className="text-white font-semibold text-sm mb-3 sm:mb-4 uppercase tracking-wider">Legal</h3>
                <ul className="space-y-2">
                  {footerLinks.legal.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-white/70 hover:text-white text-sm transition-colors flex items-center gap-1.5 group">
                        <span className="text-[#E07A2F] opacity-0 group-hover:opacity-100 transition-opacity text-xs">›</span>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom Row: Map at Bottom Right Side, Below the Navigation Sections */}
            <div className="pt-6 border-t border-white/10">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <h3 className="text-white font-semibold text-sm uppercase tracking-wider flex items-center gap-2">
                  <FaMapMarkerAlt className="text-[#E07A2F] flex-shrink-0" />
                  <span>Location Map · Mashobra, Shimla</span>
                </h3>
                <a
                  href="https://maps.google.com/?q=Mashobra,+Shimla,+Himachal+Pradesh+171007"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#E07A2F] hover:underline text-xs font-semibold inline-flex items-center gap-1 self-start sm:self-auto"
                >
                  <span>Get Directions</span>
                  <FaArrowRight className="text-[10px]" />
                </a>
              </div>
              <div className="relative w-full aspect-[16/9] sm:h-52 rounded-xl overflow-hidden border border-white/15 shadow-xl bg-white/5 group">
                <iframe
                  title="Mashobra, Shimla Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13656.765691062085!2d77.2289457!3d31.1305416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390582845c05ab59%3A0xe5452fc3be2d2f7a!2sMashobra%2C%20Himachal%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full filter contrast-105 opacity-90 group-hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="mt-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs text-white/60">
                <span className="truncate">The Ridge Mashobra, Shimla, Himachal Pradesh 171007</span>
                <span className="text-[#E07A2F] flex-shrink-0">Elevation: 2,100 Metres</span>
              </div>
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════
            BOTTOM BAR: COPYRIGHT, ATTRIBUTION & LEGAL LINKS
        ═══════════════════════════════════════════════════════════ */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/70">
          {/* Left: Copyright & Developer Credit */}
          <div className="text-center md:text-left space-y-1">
            <div>
              &copy; {new Date().getFullYear()} The Ridge Mashobra. All Rights Reserved.
            </div>
            <div className="text-white/60">
              Design And Developed By - <span className="font-semibold text-white">Zoom Digital</span>
            </div>
          </div>

          {/* Right: Location & Legal Links with Dot Separators */}
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-3 gap-y-1 text-center md:text-right">
            <span>Mashobra, Shimla: Himachal Pradesh</span>
            <span className="text-white/40 select-none">·</span>
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span className="text-white/40 select-none">·</span>
            <Link href="/terms-and-conditions" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <span className="text-white/40 select-none">·</span>
            <Link href="/disclaimer" className="hover:text-white transition-colors">
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
