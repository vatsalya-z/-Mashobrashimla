// src/app/blog/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowRight, 
  Mountain, 
  Scale, 
  FileText, 
  CalendarCheck, 
  ShieldCheck, 
  Compass, 
  Building2, 
  CheckCircle2, 
  BookOpen
} from 'lucide-react';

import BlogHero from '@/components/blog/BlogHero';
import BlogArticlesSection from '@/components/blog/BlogArticlesSection';
import FAQAccordion, { FAQItem } from '@/components/ui/FAQAccordion';
import EnquireModalButton from '@/components/ui/EnquireModalButton';
import { 
  FadeInUp, 
  StaggerContainer, 
  StaggerItem, 
  AnimatedCard 
} from '@/components/motion/MotionComponents';
import { blogPosts } from '@/lib/data/blog';
import JsonLd, { 
  breadcrumbSchema, 
  faqSchema 
} from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Property Insights & Guides – Mashobra, Shimla Real Estate Blog',
  description:
    'Read expert property guides, Section 118 legal advisories, buying tips and micro-market insights for Mashobra, Shimla and Himachal Pradesh real estate.',
  alternates: { 
    canonical: 'https://mashobrashimla.com/blog' 
  },
  openGraph: {
    title: 'Property Insights & Guides – Mashobra, Shimla Real Estate Blog',
    description:
      'Expert property guides, legal due diligence and location insights for luxury villas, second homes, and estates in Mashobra and Shimla, Himachal Pradesh.',
    url: 'https://mashobrashimla.com/blog',
    siteName: 'The Ridge Mashobra, Shimla',
    images: [
      {
        url: 'https://mashobrashimla.com/images/blog/property-buying-guide.webp',
        width: 1200,
        height: 630,
        alt: 'Property Insights & Guides – The Ridge Mashobra, Shimla',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Property Insights & Guides – Mashobra, Shimla Real Estate Blog',
    description:
      'Read expert property guides, buying tips and location insights for Mashobra and Shimla real estate.',
    images: ['https://mashobrashimla.com/images/blog/property-buying-guide.webp'],
  },
};

// ═══════════════════════════════════════════════════════════════
// DATA DEFINITIONS (DESIGN SYSTEM MATCHING HOMEPAGE & ABOUT US)
// ═══════════════════════════════════════════════════════════════

const blogCategories = [
  'All',
  'Property Guide',
  'Legal & Documentation',
  'Market Analysis',
  "Buyer's Guide",
];

// Core Editorial Pillars
const editorialPillars = [
  {
    step: '01',
    icon: Scale,
    title: 'Section 118 & Legal Due Diligence',
    desc: 'Understanding Himachal Pradesh land tenancy laws, HRERA compliance, title verification, and how non-Himachalis legally buy residential villas.',
  },
  {
    step: '02',
    icon: Compass,
    title: 'Micro-Market Comparative Analysis',
    desc: 'Deep evaluations comparing Mashobra, Shimla Mall Road, Kufri, and Naldehra in terms of elevation, lifestyle tranquility, and investment potential.',
  },
  {
    step: '03',
    icon: Building2,
    title: 'Mountain Architecture & Climate',
    desc: 'Insights into earthquake-resistant structural engineering, cedar-wood finishes, natural slate roofing, and winter thermal insulation.',
  },
  {
    step: '04',
    icon: CalendarCheck,
    title: 'Site Visit Protocols & Buyer Checklists',
    desc: 'Practical guidance for evaluating property road gradient, winter accessibility, water infrastructure, and surrounding reserve forest limits.',
  },
];

// Why Rely on Our Guides / Editorial Pillars
const whyTrustGuides = [
  {
    icon: ShieldCheck,
    title: 'Factual Legal Realities',
    desc: 'Clear, straightforward explanations of Section 118 and regulatory procedures without high-pressure marketing tactics.',
  },
  {
    icon: Mountain,
    title: 'Local High-Altitude Knowledge',
    desc: 'Realistic insights regarding Mashobra’s 2,100 m elevation, seasonal winter temperatures, and forest canopy topography.',
  },
  {
    icon: FileText,
    title: 'Objective Market Perspectives',
    desc: 'In-depth analysis of genuine pricing metrics, long-term capital appreciation trends, and rental yields in Himachal Pradesh.',
  },
  {
    icon: CheckCircle2,
    title: 'Transition to Site Visits',
    desc: 'Go beyond online reading to arrange an on-ground, guided property walkthrough coordinated with local advisors.',
  },
];

// Frequently Asked Questions
const blogFaqs: FAQItem[] = [
  {
    question: 'Can non-Himachalis legally buy residential property in Mashobra, Shimla?',
    answer:
      'Yes. While Section 118 of the HP Tenancy and Land Reforms Act regulates the transfer of agricultural land to non-agriculturists, buyers from any Indian state can legally acquire built-up residential apartments and approved villas in government-sanctioned, HRERA-registered developments.',
  },
  {
    question: 'What is the main difference between buying in Mashobra vs Shimla city?',
    answer:
      'Shimla city is the administrative and commercial hub with dense urban settlement, higher traffic, and older apartment buildings. Mashobra, situated 13 km away at 2,100 m elevation, offers expansive pine and deodar forests, clean Himalayan air, lower density, and purpose-built luxury mountain villas.',
  },
  {
    question: 'How do I verify if a property is HRERA-approved in Himachal Pradesh?',
    answer:
      'You can verify any residential project directly on the official Himachal Pradesh Real Estate Regulatory Authority (HP RERA) portal by searching for the project name or developer registration number. All sanctioned developments display their RERA number openly on marketing materials.',
  },
  {
    question: 'Is Mashobra accessible and habitable during the winter snow season?',
    answer:
      'Yes. Mashobra is connected via the well-maintained Dhalli bypass road which is kept clear by public works departments during snowfall. Modern villas in Mashobra feature dedicated heating, double-glazed windows, and insulated roofs designed specifically for comfortable year-round alpine living.',
  },
  {
    question: 'Can I schedule a physical site visit to inspect properties discussed in these articles?',
    answer:
      'Yes. You can submit a site visit request through our enquiry form or reach out directly via WhatsApp. Our local property specialists will coordinate your schedule and host a personalized on-ground walkthrough of available villas and surrounding infrastructure.',
  },
  {
    question: 'Are these guides published by an official developer or an independent consultancy?',
    answer:
      'These articles are published by an independent real estate consultancy focused on Mashobra and Shimla. We provide transparent, factual market information, legal guidance, and buyer assistance without developer bias.',
  },
];

export default function BlogPage() {
  return (
    <>
      {/* ═══════════════════════════════════════════════════════════════
          STRUCTURED DATA (JSON-LD)
      ═══════════════════════════════════════════════════════════════ */}
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: 'https://mashobrashimla.com' },
          { name: 'Blog', url: 'https://mashobrashimla.com/blog' },
        ])}
      />
      <JsonLd data={faqSchema(blogFaqs)} />

      {/* ═══════════════════════════════════════════════════════════════
          1. HERO SECTION (CINEMATIC BACKGROUND MATCHING ABOUT US & HOME)
      ═══════════════════════════════════════════════════════════════ */}
      <BlogHero imageSrc="/images/blog/property-buying-guide.webp" />

      

     
      {/* ═══════════════════════════════════════════════════════════════
          4. INTERACTIVE ARTICLES SHOWCASE WITH SEARCH & CATEGORY FILTERS
      ═══════════════════════════════════════════════════════════════ */}
      <BlogArticlesSection posts={blogPosts} categories={blogCategories} />

      
      {/* ═══════════════════════════════════════════════════════════════
          6. FAQ SECTION (SMOOTH ACCORDION & FAQ SCHEMA)
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-16 lg:py-20 bg-[#F1F5F9]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <FadeInUp>
            <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
              <span className="text-[#E07A2F] text-sm font-semibold uppercase tracking-wider">
                Common Questions
              </span>
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#172033] mt-2 mb-3"
                style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}
              >
                Frequently Asked Questions
              </h2>
              <p className="text-[#64748B] text-sm sm:text-base leading-relaxed">
                Find clear answers regarding Section 118 eligibility, living in Mashobra, HRERA verification, and arranging site visits.
              </p>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.15}>
            <FAQAccordion faqs={blogFaqs} />
          </FadeInUp>

          <div className="mt-10 sm:mt-12 text-center flex justify-center">
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 bg-[#1E3A5F] text-white font-bold text-sm sm:text-base px-8 py-3.5 rounded-xl hover:bg-[#162d4a] transition-all shadow-sm hover:shadow-md group"
            >
              <span>Have Additional Questions? Contact Us</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          7. FINAL CTA BANNER (MATCHING HOMEPAGE & ABOUT US EXACTLY)
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-16 lg:py-20 bg-[#1E3A5F] overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center text-white">
          <FadeInUp>
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4"
              style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}
            >
              Ready to Explore Mountain Properties in Mashobra?
            </h2>
            <p className="text-white/80 text-base sm:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Have specific questions about legal procedures, pricing details, or project availability? Connect directly with our property specialists.
            </p>

            {/* Quick Guarantees Responsive Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl mx-auto mb-8 text-white/90 text-xs sm:text-sm">
              <div className="bg-white/10 rounded-xl p-3 flex items-center justify-center gap-2 border border-white/10">
                <span className="text-[#E07A2F] font-bold">✓</span>
                <span>Verified Property Information</span>
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

            {/* Action Buttons - Responsive Mobile Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-md mx-auto">
              <EnquireModalButton
                source="blog-bottom-cta"
                title="Request Property Information & Callback"
                subtitle="Connect with our Mashobra property specialist for current residential opportunities and legal insights."
                className="flex items-center justify-center gap-2 bg-[#E07A2F] text-white font-semibold text-sm sm:text-base px-6 py-3.5 rounded-xl hover:bg-[#c96b22] hover:scale-102 active:scale-98 transition-all cursor-pointer shadow-lg w-full"
              >
                <span>Enquire Now</span>
              </EnquireModalButton>

              <Link
                href="/contact-us"
                className="flex items-center justify-center gap-2 border border-white/30 text-white font-semibold text-sm sm:text-base px-6 py-3.5 rounded-xl hover:bg-white/10 hover:border-white/50 transition-all w-full"
              >
                <span>Contact Us</span>
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
