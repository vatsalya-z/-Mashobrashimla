// src/app/contact-us/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  PhoneCall, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  CalendarCheck, 
  SlidersHorizontal, 
  Compass, 
  Building2, 
  ArrowRight,
  HelpCircle,
  MessageSquare
} from 'lucide-react';
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';

import ContactHero from '@/components/contact/ContactHero';
import EnquiryForm from '@/components/forms/EnquiryForm';
import FAQAccordion, { FAQItem } from '@/components/ui/FAQAccordion';
import EnquireModalButton from '@/components/ui/EnquireModalButton';
import { 
  FadeInUp, 
  StaggerContainer, 
  StaggerItem, 
  AnimatedCard 
} from '@/components/motion/MotionComponents';
import JsonLd, { 
  breadcrumbSchema, 
  organizationSchema, 
  faqSchema 
} from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Contact Us – Mashobra & Shimla Property Advisory & Site Visits',
  description:
    'Contact our dedicated property desk for verified enquiries, pricing details, and private site visits for luxury villas and residential properties in Mashobra, Shimla.',
  alternates: { 
    canonical: 'https://mashobrashimla.com/contact-us' 
  },
  openGraph: {
    title: 'Contact Us – The Ridge Mashobra & Shimla Property Advisory',
    description:
      'Connect with our property specialists for verified project documentation, Section 118 legal guidance, and on-ground site visit coordination in Mashobra and Shimla.',
    url: 'https://mashobrashimla.com/contact-us',
    siteName: 'The Ridge Mashobra, Shimla',
    images: [
      {
        url: 'https://mashobrashimla.com/images/hero/hero-mashobra-main.webp',
        width: 1200,
        height: 630,
        alt: 'Contact The Ridge Mashobra Property Advisory Desk',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us – The Ridge Mashobra, Shimla',
    description:
      'Get in touch with our property consultants for verified luxury villa and plot enquiries in Mashobra and Shimla.',
    images: ['https://mashobrashimla.com/images/hero/hero-mashobra-main.webp'],
  },
};

const PHONE_NUMBER = process.env.NEXT_PUBLIC_PHONE || '+91-9999995151';
const EMAIL_ADDRESS = process.env.NEXT_PUBLIC_EMAIL || 'info@mashobrashimla.com';
const WHATSAPP_RAW = process.env.NEXT_PUBLIC_WHATSAPP || '+919999995151';
const WHATSAPP_NUMBER = WHATSAPP_RAW.replace(/\D/g, '');
const WHATSAPP_MSG = 'Hello, I am interested in luxury properties in Mashobra, Shimla. Please share current details and arrange a callback.';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MSG)}`;

// 4 Communication Channels
const contactChannels = [
  {
    icon: PhoneCall,
    label: 'Call Direct Desk',
    value: PHONE_NUMBER,
    href: `tel:${PHONE_NUMBER.replace(/\s+/g, '')}`,
    subtext: 'Mon – Sat: 9:00 AM – 7:00 PM',
    cta: 'Call Consultant Now',
    color: 'text-[#E07A2F] bg-[#E07A2F]/10 group-hover:bg-[#E07A2F] group-hover:text-white',
  },
  {
    icon: FaWhatsapp,
    label: 'Instant WhatsApp',
    value: 'Chat on WhatsApp',
    href: WHATSAPP_URL,
    isExternal: true,
    subtext: 'Typical response in ~15 mins',
    cta: 'Open WhatsApp Chat',
    color: 'text-[#25D366] bg-[#25D366]/10 group-hover:bg-[#25D366] group-hover:text-white',
  },
  {
    icon: Mail,
    label: 'Email Advisory',
    value: EMAIL_ADDRESS,
    href: `mailto:${EMAIL_ADDRESS}`,
    subtext: 'Verified project dossiers & plans',
    cta: 'Send Direct Email',
    color: 'text-[#1E3A5F] bg-[#1E3A5F]/10 group-hover:bg-[#1E3A5F] group-hover:text-white',
  },
  {
    icon: MapPin,
    label: 'Regional Enclave',
    value: 'Mashobra, Shimla',
    href: '#enquiry-section',
    subtext: '2,100 m Altitude · Himachal Pradesh',
    cta: 'Request Site Walkthrough',
    color: 'text-[#E07A2F] bg-[#E07A2F]/10 group-hover:bg-[#E07A2F] group-hover:text-white',
  },
];

// 4 Step Consultation Workflow
const consultationSteps = [
  {
    step: '01',
    icon: SlidersHorizontal,
    title: 'Requirement Mapping',
    desc: 'We understand your preferred configuration (3 BHK / 4 BHK / Plots), budget parameters, timeline, and lifestyle preferences.',
  },
  {
    step: '02',
    icon: Compass,
    title: 'Verified Project Dossier',
    desc: 'Receive comprehensive master plans, current price lists, architectural layouts, and HRERA registration details.',
  },
  {
    step: '03',
    icon: CalendarCheck,
    title: 'Private Site Walkthrough',
    desc: 'We coordinate an accompanied on-ground visit to inspect the mountain location, forest trails, and villa construction quality.',
  },
  {
    step: '04',
    icon: ShieldCheck,
    title: 'Due Diligence & Registry',
    desc: 'Assistance with Section 118 statutory documentation, title chain clarity, and seamless transition through legal formalities.',
  },
];

// FAQs
const contactFaqs: FAQItem[] = [
  {
    question: 'How quickly will a property consultant respond to my enquiry?',
    answer:
      'We respond to all online enquiries, emails, and callback requests within 2 to 24 hours. If you require immediate assistance, you can call our direct phone desk or message us on WhatsApp during business hours (9:00 AM – 7:00 PM).',
  },
  {
    question: 'Do you charge buyers any consultation fee for property enquiries?',
    answer:
      'No. Our property advisory, project documentation sharing, and site visit coordination services are 100% complimentary for prospective property buyers and families.',
  },
  {
    question: 'Can you help coordinate private transportation for our site visit from Shimla or Chandigarh?',
    answer:
      'Yes. Our team can assist with coordinating your ground travel logistics from Shimla Mall Road, Jubbarhatti Airport, or Chandigarh upon prior request and schedule confirmation.',
  },
  {
    question: 'Are weekend site visits available in Mashobra?',
    answer:
      'Yes. On-ground site walkthroughs are available on Saturdays and Sundays by prior appointment. We recommend requesting your visit at least 24 to 48 hours in advance to ensure our dedicated property specialist is reserved for your tour.',
  },
  {
    question: 'Can out-of-state buyers schedule video walkthroughs before visiting in person?',
    answer:
      'Yes. If you reside in Delhi NCR, Mumbai, Bangalore, or abroad, our consultants can conduct personalized high-definition live video walkthroughs, sharing drone footage and terrain perspectives before your physical visit.',
  },
  {
    question: 'What legal documentation can your team help verify before purchase?',
    answer:
      'We facilitate verification of HRERA registration numbers, Town & Country Planning (TCP) sanctioned building drawings, freehold land titles, and Section 118 statutory compliance certificates.',
  },
];

export default function ContactUsPage() {
  return (
    <>
      {/* ═══════════════════════════════════════════════════════════════
          STRUCTURED DATA (JSON-LD)
      ═══════════════════════════════════════════════════════════════ */}
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: 'https://mashobrashimla.com' },
          { name: 'Contact Us', url: 'https://mashobrashimla.com/contact-us' },
        ])}
      />
      <JsonLd data={organizationSchema()} />
      <JsonLd data={faqSchema(contactFaqs)} />

      {/* ═══════════════════════════════════════════════════════════════
          1. HERO SECTION (CINEMATIC BACKGROUND MATCHING HOMEPAGE & ABOUT)
      ═══════════════════════════════════════════════════════════════ */}
      <ContactHero 
        imageSrc="/images/hero/hero-mashobra-main.webp"
        phone={PHONE_NUMBER}
        whatsappUrl={WHATSAPP_URL}
      />

      {/* ═══════════════════════════════════════════════════════════════
          2. DIRECT CHANNELS GRID (2 COLS ON MOBILE, 4 ON DESKTOP)
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <FadeInUp>
            <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
              <span className="text-[#E07A2F] text-xs sm:text-sm font-semibold uppercase tracking-wider inline-flex items-center gap-1.5">
                <MessageSquare size={15} />
                Direct Communication
              </span>
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#172033] mt-2 mb-3"
                style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}
              >
                Reach Out Through Your Preferred Channel
              </h2>
              <p className="text-[#64748B] text-xs sm:text-base leading-relaxed">
                Connect directly with our local Mashobra consultants for factual property specifications, pricing, and site inspection coordination.
              </p>
            </div>
          </FadeInUp>

          {/* 4 Cards Grid - 2 cols on mobile */}
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {contactChannels.map((ch) => {
              const IconComp = ch.icon;
              return (
                <StaggerItem key={ch.label} className="h-full">
                  <AnimatedCard className="h-full">
                    <a
                      href={ch.href}
                      target={ch.isExternal ? '_blank' : undefined}
                      rel={ch.isExternal ? 'noopener noreferrer' : undefined}
                      className="group bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl sm:rounded-2xl p-3.5 sm:p-6 hover:bg-white hover:border-[#1E3A5F]/30 hover:shadow-xl transition-all duration-300 block h-full flex flex-col justify-between"
                    >
                      <div>
                        <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 transition-all duration-300 ${ch.color}`}>
                          <IconComp className="w-5 h-5 sm:w-6 sm:h-6" />
                        </div>
                        <span className="text-[10px] sm:text-xs font-bold text-[#94A3B8] uppercase tracking-wider block mb-1">
                          {ch.label}
                        </span>
                        <div
                          className="font-bold text-[#172033] text-xs sm:text-base mb-1.5 group-hover:text-[#1E3A5F] transition-colors truncate"
                          style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}
                        >
                          {ch.value}
                        </div>
                        <p className="text-[11px] sm:text-xs text-[#64748B] leading-tight sm:leading-relaxed">
                          {ch.subtext}
                        </p>
                      </div>

                      <div className="pt-3 sm:pt-4 mt-3 sm:mt-5 border-t border-[#E2E8F0]/60 flex items-center justify-between text-[10px] sm:text-xs font-bold text-[#1E3A5F] group-hover:text-[#E07A2F] transition-colors">
                        <span>{ch.cta}</span>
                        <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </a>
                  </AnimatedCard>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          3. MAIN INTERACTIVE ENQUIRY & PROPERTY ADVISORY SECTION
      ═══════════════════════════════════════════════════════════════ */}
      <section id="enquiry-section" className="py-16 lg:py-24 bg-[#F8FAFC] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column: Comprehensive Enquiry Form (8 cols) */}
            <div className="lg:col-span-7 xl:col-span-8">
              <FadeInUp>
                <div className="bg-white rounded-2xl sm:rounded-3xl border border-[#E2E8F0] p-5 sm:p-10 shadow-sm hover:shadow-md transition-shadow">
                  <div className="mb-6 sm:mb-8 pb-5 border-b border-[#F1F5F9] text-center sm:text-left">
                    <span className="text-[#E07A2F] text-xs sm:text-sm font-bold uppercase tracking-wider inline-flex items-center justify-center sm:justify-start gap-1.5 mb-2">
                      <CalendarCheck size={16} />
                      Direct Buyer Assistance
                    </span>
                    <h2
                      className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#172033]"
                      style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}
                    >
                      Send Us an Enquiry
                    </h2>
                    <p className="text-[#64748B] text-xs sm:text-sm mt-2 leading-relaxed">
                      Fill in your preferences below. Our property specialist will prepare a customized dossier with verified availability, floor plans, and pricing within 24 hours.
                    </p>
                  </div>

                  {/* High Quality Client Form */}
                  <EnquiryForm source="contact-us-page" />
                </div>
              </FadeInUp>
            </div>

            {/* Right Column: Support Details & Direct Contact Desk (4 cols) */}
            <div className="lg:col-span-5 xl:col-span-4 space-y-5">
              <FadeInUp delay={0.15}>
                
                {/* 1. Direct Specialist Support Card */}
                <div className="bg-[#1E3A5F] text-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-md text-center sm:text-left">
                  <span className="text-[#E07A2F] text-xs font-bold uppercase tracking-wider block mb-2 text-center sm:text-left">
                    Priority Assistance
                  </span>
                  <h3
                    className="text-xl sm:text-2xl font-bold text-white mb-2"
                    style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}
                  >
                    Prefer Speaking Directly?
                  </h3>
                  <p className="text-white/80 text-xs sm:text-sm leading-relaxed mb-6">
                    Connect directly with our local Mashobra specialist to discuss specific villa configurations, legal criteria, or schedule your site visit.
                  </p>

                  <div className="space-y-3">
                    <a
                      href={`tel:${PHONE_NUMBER.replace(/\s+/g, '')}`}
                      className="flex items-center justify-center gap-2.5 bg-white text-[#1E3A5F] font-bold text-xs sm:text-sm py-3.5 px-4 rounded-xl hover:bg-slate-100 transition-colors shadow-sm w-full"
                    >
                      <FaPhoneAlt className="text-xs" />
                      <span>Call {PHONE_NUMBER}</span>
                    </a>

                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2.5 bg-[#25D366] text-white font-bold text-xs sm:text-sm py-3.5 px-4 rounded-xl hover:bg-[#20b858] transition-colors shadow-sm w-full"
                    >
                      <FaWhatsapp className="text-base" />
                      <span>Instant WhatsApp Chat</span>
                    </a>
                  </div>
                </div>

                {/* 2. Operational Hours & Office Details Card */}
                <div className="bg-white rounded-2xl border border-[#E2E8F0] mt-5 p-6 shadow-xs">
                  <h4
                    className="text-base sm:text-lg font-bold text-[#172033] mb-4 flex items-center gap-2"
                    style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}
                  >
                    <Clock size={18} className="text-[#E07A2F]" />
                    <span>Desk Hours &amp; Visits</span>
                  </h4>
                  
                  <div className="space-y-3.5 text-xs sm:text-sm text-[#475569]">
                    <div className="flex justify-between items-center pb-2.5 border-b border-[#F1F5F9]">
                      <span className="text-[#64748B]">Monday – Saturday</span>
                      <strong className="text-[#172033]">9:00 AM – 7:00 PM</strong>
                    </div>
                    <div className="flex justify-between items-center pb-2.5 border-b border-[#F1F5F9]">
                      <span className="text-[#64748B]">Sundays &amp; Holidays</span>
                      <strong className="text-[#E07A2F]">By Prior Appointment</strong>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[#64748B]">Response Time</span>
                      <strong className="text-[#172033]">Under 24 Hours</strong>
                    </div>
                  </div>
                </div>

                {/* 3. Regional Presence Card */}
                <div className="bg-white rounded-2xl border border-[#E2E8F0] mt-5 p-6 shadow-xs">
                  <h4
                    className="text-base sm:text-lg font-bold text-[#172033] mb-3 flex items-center gap-2"
                    style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}
                  >
                    <MapPin size={18} className="text-[#E07A2F]" />
                    <span>Regional Presence</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed mb-3">
                    Specialized on-ground presence in Mashobra, Shimla, Kufri, and Naldehra, Himachal Pradesh.
                  </p>
                  <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-3 flex items-center justify-between text-xs">
                    <span className="text-[#64748B]">Mashobra Elevation</span>
                    <strong className="text-[#1E3A5F] font-bold">2,100 m Altitude</strong>
                  </div>
                </div>


              </FadeInUp>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          4. CONSULTATION WORKFLOW (FOUR STRUCTURED CARDS - 2 COLS ON MOBILE)
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-16 lg:py-20 bg-white border-t border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <FadeInUp>
            <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
              <span className="text-[#E07A2F] text-xs sm:text-sm font-semibold uppercase tracking-wider">
                Seamless Coordination
              </span>
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#172033] mt-2 mb-3"
                style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}
              >
                How We Assist You from Enquiry to Site Visit
              </h2>
              <p className="text-[#64748B] text-xs sm:text-base leading-relaxed">
                A structured, transparent property discovery methodology designed around your specific requirements.
              </p>
            </div>
          </FadeInUp>

          {/* 4 Cards Grid - 2 cols on mobile */}
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {consultationSteps.map((step) => {
              const IconComp = step.icon;
              return (
                <StaggerItem key={step.title} className="h-full">
                  <AnimatedCard className="bg-[#F8FAFC] rounded-xl sm:rounded-2xl p-3.5 sm:p-7 border border-[#E2E8F0] shadow-xs hover:shadow-xl hover:border-[#1E3A5F]/30 hover:bg-white transition-all duration-300 h-full flex flex-col justify-between group">
                    <div>
                      <div className="flex items-center justify-between mb-3 sm:mb-5">
                        <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-[#1E3A5F]/10 text-[#1E3A5F] group-hover:bg-[#1E3A5F] group-hover:text-white flex items-center justify-center transition-colors duration-300">
                          <IconComp className="w-4 h-4 sm:w-6 sm:h-6" />
                        </div>
                        <span className="text-[9px] sm:text-xs font-bold text-[#94A3B8] tracking-widest uppercase bg-white border border-[#E2E8F0] px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full group-hover:text-[#E07A2F] transition-colors">
                          Step {step.step}
                        </span>
                      </div>
                      <h3
                        className="text-xs sm:text-lg font-bold text-[#172033] mb-1.5 sm:mb-2.5 group-hover:text-[#1E3A5F] transition-colors leading-snug"
                        style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}
                      >
                        {step.title}
                      </h3>
                      <p className="text-[11px] sm:text-sm text-[#64748B] leading-snug sm:leading-relaxed">
                        {step.desc}
                      </p>
                    </div>

                    <div className="pt-3 sm:pt-4 mt-3 sm:mt-5 border-t border-[#E2E8F0]/60 flex items-center text-[10px] sm:text-xs font-semibold text-[#1E3A5F] group-hover:text-[#E07A2F] transition-colors">
                      <span>Verified Guidance</span>
                    </div>
                  </AnimatedCard>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          5. CONTACT & SITE VISIT FAQS ACCORDION
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-16 lg:py-20 bg-[#F1F5F9]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <FadeInUp>
            <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
              <span className="text-[#E07A2F] text-xs sm:text-sm font-semibold uppercase tracking-wider">
                Common Questions
              </span>
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#172033] mt-2 mb-3"
                style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}
              >
                Enquiry &amp; Site Visit FAQs
              </h2>
              <p className="text-[#64748B] text-xs sm:text-base leading-relaxed">
                Clear answers regarding property enquiries, response times, weekend visits, and buyer assistance.
              </p>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.15}>
            <FAQAccordion faqs={contactFaqs} />
          </FadeInUp>

          <div className="mt-10 sm:mt-12 text-center flex justify-center">
            <a
              href={`tel:${PHONE_NUMBER.replace(/\s+/g, '')}`}
              className="inline-flex items-center gap-2 bg-[#1E3A5F] text-white font-bold text-xs sm:text-base px-7 py-3.5 rounded-xl hover:bg-[#162d4a] transition-all shadow-sm hover:shadow-md group"
            >
              <span>Have an Immediate Question? Call Us</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          6. FINAL NAVY BOTTOM CTA BANNER (HOMEPAGE & ABOUT US ALIGNED)
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-16 lg:py-20 bg-[#1E3A5F] overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center text-white">
          <FadeInUp>
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4"
              style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}
            >
              Let&apos;s Find Your Ideal Mountain Home in Mashobra
            </h2>
            <p className="text-white/80 text-sm sm:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Connect with our property specialists for verified project documentation, pricing breakdowns, and on-ground site visit coordination.
            </p>

            {/* Guarantees 3-Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl mx-auto mb-8 text-white/90 text-xs sm:text-sm">
              <div className="bg-white/10 rounded-xl p-3 flex items-center justify-center gap-2 border border-white/10">
                <span className="text-[#E07A2F] font-bold">✓</span>
                <span>Verified Project Information</span>
              </div>
              <div className="bg-white/10 rounded-xl p-3 flex items-center justify-center gap-2 border border-white/10">
                <span className="text-[#E07A2F] font-bold">✓</span>
                <span>Personalized Site Visits</span>
              </div>
              <div className="bg-white/10 rounded-xl p-3 flex items-center justify-center gap-2 border border-white/10">
                <span className="text-[#E07A2F] font-bold">✓</span>
                <span>Prompt Enquiry Response</span>
              </div>
            </div>

            {/* Action Buttons - Responsive Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-md mx-auto">
              <EnquireModalButton
                source="contact-bottom-cta"
                title="Request Priority Property Information"
                subtitle="Connect directly with our Mashobra specialist for current villa opportunities and pricing."
                className="flex items-center justify-center gap-2 bg-[#E07A2F] text-white font-semibold text-xs sm:text-base px-6 py-3.5 rounded-xl hover:bg-[#c96b22] hover:scale-102 active:scale-98 transition-all cursor-pointer shadow-lg w-full"
              >
                <span>Enquire Now</span>
              </EnquireModalButton>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border border-white/30 text-white font-semibold text-xs sm:text-base px-6 py-3.5 rounded-xl hover:bg-white/10 hover:border-white/50 transition-all w-full"
              >
                <FaWhatsapp className="text-4xl" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
