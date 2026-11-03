// src/components/ui/SEOLandingPage.tsx
import Image from 'next/image';
import Link from 'next/link';
import { FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import PropertyCard from '@/components/ui/PropertyCard';
import EnquiryForm from '@/components/forms/EnquiryForm';
import FAQAccordion from '@/components/ui/FAQAccordion';
import JsonLd, { breadcrumbSchema, faqSchema } from '@/components/seo/JsonLd';
import { Property } from '@/types';

interface FAQ {
  question: string;
  answer: string;
}

interface SEOLandingPageProps {
  title: string;
  subtitle?: string;
  heroImage: string;
  heroAlt: string;
  breadcrumbs: { name: string; url: string }[];
  canonicalUrl: string;
  h1: string;
  intro: string;
  highlights?: string[];
  bodyContent?: React.ReactNode;
  properties?: Property[];
  faqs?: FAQ[];
  ctaSource: string;
}

export default function SEOLandingPage({
  title,
  subtitle,
  heroImage,
  heroAlt,
  breadcrumbs,
  canonicalUrl,
  h1,
  intro,
  highlights,
  bodyContent,
  properties: featuredProperties,
  faqs,
  ctaSource,
}: SEOLandingPageProps) {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbs),
          ...(faqs ? [faqSchema(faqs)] : []),
        ]}
      />

      {/* Hero */}
      <div className="relative h-64 sm:h-80 overflow-hidden">
        <Image src={heroImage} alt={heroAlt} fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#172033]/80 via-[#172033]/50 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-8 sm:pb-12 w-full">
            <nav className="flex items-center gap-1 text-xs text-white/60 mb-3">
              {breadcrumbs.map((b, i) => (
                <span key={b.url} className="flex items-center gap-1">
                  {i > 0 && <span>/</span>}
                  {i < breadcrumbs.length - 1 ? (
                    <Link href={b.url.replace('https://mashobrashimla.com', '') || '/'} className="hover:text-white transition-colors">{b.name}</Link>
                  ) : (
                    <span className="text-white">{b.name}</span>
                  )}
                </span>
              ))}
            </nav>
            <h1 className="text-2xl sm:text-4xl font-bold text-white max-w-2xl" style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}>
              {h1}
            </h1>
            {subtitle && <p className="text-white/70 mt-2">{subtitle}</p>}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 lg:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main */}
          <div className="lg:col-span-2">
            {/* Intro */}
            <div className="mb-8 prose prose-sm max-w-none text-[#64748B] leading-relaxed">
              <p>{intro}</p>
            </div>

            {/* Highlights */}
            {highlights && highlights.length > 0 && (
              <div className="mb-8">
                <h2 className="font-bold text-[#172033] text-xl mb-4" style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}>
                  Why {title}?
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {highlights.map((h) => (
                    <div key={h} className="flex items-center gap-2 text-sm text-[#64748B]">
                      <FaCheckCircle className="text-[#E07A2F] text-xs flex-shrink-0" />
                      {h}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Custom Body */}
            {bodyContent && <div className="mb-8">{bodyContent}</div>}

            {/* Properties */}
            {featuredProperties && featuredProperties.length > 0 && (
              <div className="mb-8">
                <h2 className="font-bold text-[#172033] text-xl mb-5" style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}>
                  Featured Properties
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {featuredProperties.map((p) => (
                    <PropertyCard key={p.id} property={p} />
                  ))}
                </div>
                <div className="mt-5">
                  <Link href="/properties" className="flex items-center gap-1.5 text-[#1E3A5F] font-semibold text-sm hover:text-[#E07A2F] transition-colors">
                    View All Properties <FaArrowRight className="text-xs" />
                  </Link>
                </div>
              </div>
            )}

            {/* FAQs */}
            {faqs && faqs.length > 0 && (
              <div className="mt-8">
                <h2 className="font-bold text-[#172033] text-xl mb-4" style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}>
                  Frequently Asked Questions
                </h2>
                <FAQAccordion faqs={faqs} />
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="bg-white rounded-xl border border-[#E2E8F0] p-6 shadow-sm">
              <h3 className="font-bold text-[#172033] mb-4" style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}>
                Enquire Now
              </h3>
              <EnquiryForm source={ctaSource} compact />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

