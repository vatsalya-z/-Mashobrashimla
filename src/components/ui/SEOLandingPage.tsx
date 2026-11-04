// src/components/ui/SEOLandingPage.tsx
import Image from 'next/image';
import Link from 'next/link';
import { 
  FaCheckCircle, 
  FaArrowRight, 
  FaPhoneAlt, 
  FaWhatsapp, 
  FaShieldAlt, 
  FaHome 
} from 'react-icons/fa';
import PropertyCard from '@/components/ui/PropertyCard';
import EnquireModalButton from '@/components/ui/EnquireModalButton';
import FAQAccordion from '@/components/ui/FAQAccordion';
import JsonLd, { breadcrumbSchema, faqSchema } from '@/components/seo/JsonLd';
import { FadeInUp, StaggerContainer, StaggerItem, AnimatedCard } from '@/components/motion/MotionComponents';
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

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP || '+919999995151';
const waMsg = 'Hello, I am interested in exploring properties in Mashobra and Shimla. Please share available options.';

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
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, '')}?text=${encodeURIComponent(waMsg)}`;

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbs),
          ...(faqs ? [faqSchema(faqs)] : []),
        ]}
      />

      {/* ═══════════════════════════════════════════════════════════════
          1. HERO SECTION
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative w-full min-h-[500px] sm:min-h-[580px] lg:min-h-[640px] flex items-center justify-center overflow-hidden">
        <Image
          src={heroImage}
          alt={heroAlt}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />

        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="inline-flex items-center gap-2 text-xs sm:text-sm text-white/70 mb-5 bg-white/10 px-4 py-1.5 rounded-full backdrop-blur-xs border border-white/10">
            {breadcrumbs.map((b, i) => (
              <span key={b.url} className="flex items-center gap-2">
                {i > 0 && <span className="text-white/40">/</span>}
                {i < breadcrumbs.length - 1 ? (
                  <Link href={b.url.replace('https://mashobrashimla.com', '') || '/'} className="hover:text-white transition-colors">{b.name}</Link>
                ) : (
                  <span className="text-[#E07A2F] font-semibold">{b.name}</span>
                )}
              </span>
            ))}
          </nav>

          <span className="text-[#E07A2F] text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2">
            Curated Mountain Portfolio
          </span>

          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight max-w-4xl text-center"
            style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}
          >
            {h1}
          </h1>

          {subtitle && (
            <p className="text-white/85 text-base sm:text-lg max-w-2xl mx-auto mb-8 font-light leading-relaxed text-center">
              {subtitle}
            </p>
          )}

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center items-center gap-3.5 sm:gap-4">
            {featuredProperties && featuredProperties.length > 0 && (
              <a
                href="#featured-properties"
                className="inline-flex items-center gap-2 bg-[#E07A2F] text-white font-bold text-sm sm:text-base px-7 sm:px-8 py-3.5 rounded-xl hover:bg-[#c96b22] hover:scale-102 active:scale-98 transition-all shadow-lg"
              >
                <span>Explore Properties</span>
                <FaArrowRight className="text-xs" />
              </a>
            )}
            <EnquireModalButton
              source={ctaSource}
              title={`Enquire About ${title}`}
              subtitle="Connect directly with our mountain real estate specialists to receive verified brochures, pricing, and availability."
              className="inline-flex items-center gap-2 bg-white/15 text-white font-semibold text-sm sm:text-base px-6 sm:px-7 py-3.5 rounded-xl hover:bg-white/25 active:scale-98 transition-all backdrop-blur-xs border border-white/20 cursor-pointer"
            >
              <span>Enquire Now</span>
            </EnquireModalButton>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          2. OVERVIEW & HIGHLIGHTS
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#E2E8F0]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <FadeInUp>
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
              <span className="text-[#E07A2F] text-xs sm:text-sm font-semibold uppercase tracking-wider">
                Overview &amp; Character
              </span>
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#172033] mt-2 mb-4"
                style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}
              >
                Why Choose {title}?
              </h2>
              <p className="text-[#64748B] text-base sm:text-lg leading-relaxed">
                {intro}
              </p>
            </div>
          </FadeInUp>

          {/* Highlights Grid */}
          {highlights && highlights.length > 0 && (
            <StaggerContainer className="grid grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 max-w-6xl mx-auto">
              {highlights.map((h) => (
                <StaggerItem key={h}>
                  <AnimatedCard className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-4 sm:p-5 flex items-start gap-3 h-full shadow-xs hover:shadow-md transition-shadow">
                    <FaCheckCircle className="text-[#E07A2F] text-base sm:text-lg mt-0.5 flex-shrink-0" />
                    <p className="text-[#172033] text-xs sm:text-sm font-medium leading-relaxed">
                      {h}
                    </p>
                  </AnimatedCard>
                </StaggerItem>
              ))}
            </StaggerContainer>
          )}

          {/* Custom Body Content */}
          {bodyContent && (
            <div className="max-w-4xl mx-auto mt-12 p-6 sm:p-8 bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] shadow-xs">
              {bodyContent}
            </div>
          )}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          3. FEATURED PROPERTIES GRID
      ═══════════════════════════════════════════════════════════════ */}
      {featuredProperties && featuredProperties.length > 0 && (
        <section id="featured-properties" className="py-16 sm:py-20 lg:py-24 bg-[#F8FAFC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <FadeInUp>
              <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
                <span className="text-[#E07A2F] text-xs sm:text-sm font-semibold uppercase tracking-wider">
                  Featured Portfolio
                </span>
                <h2
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#172033] mt-2 mb-4"
                  style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}
                >
                  Available Residences &amp; Villas
                </h2>
                <p className="text-[#64748B] text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
                  Explore verified residential chalets and mountain villas matching this configuration.
                </p>
              </div>
            </FadeInUp>

            {/* Responsive Grid */}
            <StaggerContainer className="grid grid-cols-1 min-[380px]:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
              {featuredProperties.map((p) => (
                <StaggerItem key={p.id}>
                  <PropertyCard property={p} />
                </StaggerItem>
              ))}
            </StaggerContainer>

            <div className="mt-10 sm:mt-12 text-center">
              <Link
                href="/properties"
                className="inline-flex items-center gap-2 border border-[#1E3A5F] text-[#1E3A5F] hover:bg-[#1E3A5F] hover:text-white font-semibold text-sm px-6 py-3 rounded-xl transition-all shadow-xs group"
              >
                <span>View All Properties</span>
                <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════════════════════════════
          4. FAQS SECTION
      ═══════════════════════════════════════════════════════════════ */}
      {faqs && faqs.length > 0 && (
        <section className="py-16 sm:py-20 bg-white border-t border-[#E2E8F0]/60">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <FadeInUp>
              <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
                <span className="text-[#E07A2F] text-xs sm:text-sm font-semibold uppercase tracking-wider">
                  Buyer Information
                </span>
                <h2
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#172033] mt-2 mb-4"
                  style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}
                >
                  Frequently Asked Questions
                </h2>
                <p className="text-[#64748B] text-sm sm:text-base leading-relaxed">
                  Clear answers to key questions regarding properties, legal aspects, and purchasing in Mashobra and Shimla.
                </p>
              </div>
            </FadeInUp>

            <FAQAccordion faqs={faqs} />
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════════════════════════════
          5. ENQUIRY CTA SECTION
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-16 lg:py-20 bg-[#1E3A5F] text-white overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <FadeInUp>
            <span className="text-[#E07A2F] text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2 inline-block">
              Begin Your Mountain Journey
            </span>
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4"
              style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}
            >
              Plan Your Mountain Property Visit
            </h2>
            <p className="text-white/80 text-base sm:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Connect with our property consultants to receive verified brochures, current pricing schedules, and private on-ground site visit coordination.
            </p>

            {/* Quick Guarantees Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl mx-auto mb-8 text-white/90 text-xs sm:text-sm">
              <div className="bg-white/10 rounded-xl p-3 flex items-center justify-center gap-2 border border-white/10 backdrop-blur-xs">
                <FaShieldAlt className="text-[#E07A2F] flex-shrink-0" />
                <span>Verified Land Titles</span>
              </div>
              <div className="bg-white/10 rounded-xl p-3 flex items-center justify-center gap-2 border border-white/10 backdrop-blur-xs">
                <FaCheckCircle className="text-[#E07A2F] flex-shrink-0" />
                <span>Personalized Site Visits</span>
              </div>
              <div className="bg-white/10 rounded-xl p-3 flex items-center justify-center gap-2 border border-white/10 backdrop-blur-xs">
                <FaHome className="text-[#E07A2F] flex-shrink-0" />
                <span>Direct Price Transparency</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap justify-center items-center gap-3.5 sm:gap-4">
              <EnquireModalButton
                source={ctaSource}
                title={`Enquire About ${title}`}
                subtitle="Share your preferred configuration and budget to receive verified brochures and availability."
                className="flex items-center gap-2 bg-[#E07A2F] text-white font-bold px-7 sm:px-8 py-3.5 rounded-xl hover:bg-[#c96b22] hover:scale-102 active:scale-98 transition-all cursor-pointer shadow-lg"
              >
                <span>Enquire Now</span>
                <FaArrowRight className="text-xs" />
              </EnquireModalButton>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#25D366] text-white font-semibold px-6 py-3.5 rounded-xl hover:bg-[#1fad55] active:scale-98 transition-all shadow-md"
              >
                <FaWhatsapp className="text-base" />
                <span>Chat on WhatsApp</span>
              </a>
              <a
                href="tel:+91"
                className="flex items-center gap-2 border border-white/30 text-white font-semibold px-6 py-3.5 rounded-xl hover:bg-white/10 hover:border-white/50 active:scale-98 transition-all backdrop-blur-xs"
              >
                <FaPhoneAlt className="text-xs" />
                <span>Call Us Now</span>
              </a>
            </div>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
