// src/app/properties/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { 
  FaArrowRight, 
  FaPhoneAlt, 
  FaWhatsapp, 
  FaShieldAlt, 
  FaCheckCircle, 
  FaHome,
  FaGem,
  FaBed
} from 'react-icons/fa';
import PropertyCard from '@/components/ui/PropertyCard';
import EnquireModalButton from '@/components/ui/EnquireModalButton';
import { properties } from '@/lib/data/properties';
import { websiteImages } from '@/lib/images';
import JsonLd, { breadcrumbSchema } from '@/components/seo/JsonLd';
import { FadeInUp, StaggerContainer, StaggerItem } from '@/components/motion/MotionComponents';

export const metadata: Metadata = {
  title: 'Properties in Mashobra & Shimla | Explore Available Properties',
  description:
    'Explore verified luxury mountain villas, 3 BHK and 4 BHK residential chalets, and second-home enclaves in Mashobra, Shimla, Kufri, and Naldehra. Himalayan views, clean mountain air, and transparent advisory.',
  alternates: { canonical: 'https://mashobrashimla.com/properties' },
  openGraph: {
    title: 'Properties in Mashobra & Shimla | Explore Available Properties',
    description:
      'Discover 3 BHK and 4 BHK luxury residences set amidst the Deodar cedar forests of Mashobra and greater Shimla.',
    images: [{ url: 'https://mashobrashimla.com/images/hero/hero-mountain-villa.webp', width: 1200, height: 630 }],
  },
};

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP || '+91XXXXXXXXXX';
const waMsg = 'Hello, I am interested in exploring properties in Mashobra and Shimla. Please share available options.';

export default function PropertiesPage() {
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, '')}?text=${encodeURIComponent(waMsg)}`;

  // Filtered property lists for the 3 key sections
  const luxuryVillas = properties.filter((p) => p.category.includes('luxury-villa'));
  const threeBhkVillas = properties.filter((p) => p.category.includes('3bhk'));
  const fourBhkVillas = properties.filter((p) => p.category.includes('4bhk'));

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: 'https://mashobrashimla.com' },
          { name: 'Properties', url: 'https://mashobrashimla.com/properties' },
        ])}
      />

      {/* ═══════════════════════════════════════════════════════════════
          1. HERO SECTION
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative w-full min-h-[500px] sm:min-h-[580px] lg:min-h-[640px] flex items-center justify-center overflow-hidden">
        <Image
          src={websiteImages.hero.mountainVilla.src}
          alt={websiteImages.hero.mountainVilla.alt}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#1E3A5F]/80 to-[#0f172a]/75" />

        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="inline-flex items-center gap-2 text-xs sm:text-sm text-white/70 mb-5 bg-white/10 px-4 py-1.5 rounded-full backdrop-blur-xs border border-white/10">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-white/40">/</span>
            <span className="text-[#E07A2F] font-semibold">Properties</span>
          </nav>

          <span className="text-[#E07A2F] text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2">
            Verified Mountain Residences
          </span>

          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight max-w-3xl"
            style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}
          >
            Properties in Mashobra &amp; Shimla
          </h1>

          <p className="text-white/85 text-base sm:text-lg max-w-2xl mx-auto mb-8 font-light leading-relaxed">
            Discover handpicked luxury mountain villas, 3 BHK and 4 BHK residential chalets, and second-home enclaves surrounded by ancient Deodar forests with panoramic Himalayan views.
          </p>

          {/* Quick Jump Category Pills */}
          <div className="flex flex-wrap justify-center items-center gap-2.5 sm:gap-3 mb-8">
            <a
              href="#luxury-villas"
              className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white text-xs sm:text-sm font-medium px-4 py-2 rounded-full backdrop-blur-xs border border-white/20 transition-all hover:scale-102"
            >
              <FaGem className="text-[#E07A2F] text-xs" />
              <span>Luxury Villas Mashobra</span>
            </a>
            <a
              href="#3-bhk-villas"
              className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white text-xs sm:text-sm font-medium px-4 py-2 rounded-full backdrop-blur-xs border border-white/20 transition-all hover:scale-102"
            >
              <FaBed className="text-[#E07A2F] text-xs" />
              <span>3 BHK Villas</span>
            </a>
            <a
              href="#4-bhk-villas"
              className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white text-xs sm:text-sm font-medium px-4 py-2 rounded-full backdrop-blur-xs border border-white/20 transition-all hover:scale-102"
            >
              <FaHome className="text-[#E07A2F] text-xs" />
              <span>4 BHK Villas</span>
            </a>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center items-center gap-3.5 sm:gap-4">
            <a
              href="#luxury-villas"
              className="inline-flex items-center gap-2 bg-[#E07A2F] text-white font-bold text-sm sm:text-base px-7 sm:px-8 py-3.5 rounded-xl hover:bg-[#c96b22] hover:scale-102 active:scale-98 transition-all shadow-lg"
            >
              <span>Explore All Sections</span>
              <FaArrowRight className="text-xs" />
            </a>
            <EnquireModalButton
              source="properties-hero"
              title="Enquire About Shimla Region Properties"
              subtitle="Connect directly with our mountain real estate specialists to receive verified brochures, pricing, and availability."
              className="inline-flex items-center gap-2 bg-white/15 text-white font-semibold text-sm sm:text-base px-6 sm:px-7 py-3.5 rounded-xl hover:bg-white/25 active:scale-98 transition-all backdrop-blur-xs border border-white/20 cursor-pointer"
            >
              <span>Enquire Now</span>
            </EnquireModalButton>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          2. SECTION 1: LUXURY VILLAS MASHOBRA
      ═══════════════════════════════════════════════════════════════ */}
      <section id="luxury-villas" className="py-16 sm:py-20 bg-[#F8FAFC] border-b border-[#E2E8F0]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <FadeInUp>
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
              <span className="text-[#E07A2F] text-xs sm:text-sm font-semibold uppercase tracking-wider inline-flex items-center gap-1.5">
                <FaGem className="text-xs" />
                Signature Mountain Residences
              </span>
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#172033] mt-2 mb-4"
                style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}
              >
                Luxury Villas Mashobra
              </h2>
              <p className="text-[#64748B] text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
                Explore handpicked luxury mountain villas in Mashobra set amidst tranquil Deodar cedar canopies, featuring panoramic Himalayan vistas, natural stone architecture, and modern conveniences.
              </p>
            </div>
          </FadeInUp>

          {/* Responsive Grid: 3 cols desktop, 2 cols tablet, 2 cols readable mobile / 1 col narrow */}
          <StaggerContainer className="grid grid-cols-1 min-[380px]:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
            {luxuryVillas.map((property) => (
              <StaggerItem key={`luxury-${property.id}`}>
                <PropertyCard property={property} />
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Section Footer Link */}
          <div className="mt-10 sm:mt-12 text-center">
            <Link
              href="/luxury-villas-mashobra"
              className="inline-flex items-center gap-2 border border-[#1E3A5F] text-[#1E3A5F] hover:bg-[#1E3A5F] hover:text-white font-semibold text-sm px-6 py-3 rounded-xl transition-all shadow-xs group"
            >
              <span>Explore All Luxury Villas in Mashobra</span>
              <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          3. SECTION 2: 3 BHK VILLAS
      ═══════════════════════════════════════════════════════════════ */}
      <section id="3-bhk-villas" className="py-16 sm:py-20 bg-white border-b border-[#E2E8F0]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <FadeInUp>
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
              <span className="text-[#E07A2F] text-xs sm:text-sm font-semibold uppercase tracking-wider inline-flex items-center gap-1.5">
                <FaBed className="text-xs" />
                Balanced Living &amp; Family Comfort
              </span>
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#172033] mt-2 mb-4"
                style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}
              >
                3 BHK Villas
              </h2>
              <p className="text-[#64748B] text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
                Spacious 3 BHK mountain villas offering the ideal balance between generous living space, low-maintenance efficiency, sunlit balconies, and majestic Himalayan outlooks.
              </p>
            </div>
          </FadeInUp>

          {/* Responsive Grid */}
          <StaggerContainer className="grid grid-cols-1 min-[380px]:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
            {threeBhkVillas.map((property) => (
              <StaggerItem key={`3bhk-${property.id}`}>
                <PropertyCard property={property} />
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Section Footer Link */}
          <div className="mt-10 sm:mt-12 text-center">
            <Link
              href="/3-bhk-villas-mashobra"
              className="inline-flex items-center gap-2 border border-[#1E3A5F] text-[#1E3A5F] hover:bg-[#1E3A5F] hover:text-white font-semibold text-sm px-6 py-3 rounded-xl transition-all shadow-xs group"
            >
              <span>Explore Dedicated 3 BHK Villas Page</span>
              <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          4. SECTION 3: 4 BHK VILLAS
      ═══════════════════════════════════════════════════════════════ */}
      <section id="4-bhk-villas" className="py-16 sm:py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <FadeInUp>
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
              <span className="text-[#E07A2F] text-xs sm:text-sm font-semibold uppercase tracking-wider inline-flex items-center gap-1.5">
                <FaHome className="text-xs" />
                Grand Scale &amp; Elevated Living
              </span>
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#172033] mt-2 mb-4"
                style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}
              >
                4 BHK Villas
              </h2>
              <p className="text-[#64748B] text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
                Expansive 4 BHK chalets and hillside estates with multiple viewing decks, grand entertaining lounges, fireplace provisions, and supreme privacy for multi-generational families.
              </p>
            </div>
          </FadeInUp>

          {/* Responsive Grid */}
          <StaggerContainer className="grid grid-cols-1 min-[380px]:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
            {fourBhkVillas.map((property) => (
              <StaggerItem key={`4bhk-${property.id}`}>
                <PropertyCard property={property} />
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Section Footer Link */}
          <div className="mt-10 sm:mt-12 text-center">
            <Link
              href="/4-bhk-villas-mashobra"
              className="inline-flex items-center gap-2 border border-[#1E3A5F] text-[#1E3A5F] hover:bg-[#1E3A5F] hover:text-white font-semibold text-sm px-6 py-3 rounded-xl transition-all shadow-xs group"
            >
              <span>Explore Dedicated 4 BHK Villas Page</span>
              <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Section 118 Buyer Advisory Notice */}
          <FadeInUp delay={0.2}>
            <div className="mt-14 sm:mt-18 max-w-3xl mx-auto text-center bg-white border border-[#E2E8F0] rounded-2xl p-4 sm:p-5 shadow-xs text-xs sm:text-sm text-[#64748B] leading-relaxed">
              <strong className="text-[#172033]">Buyer Advisory:</strong> Real estate purchases in Himachal Pradesh are governed by Section 118 of the HP Tenancy and Land Reforms Act. We facilitate transactions in verified, HRERA-approved residential projects where non-Himachali and Himachali buyers can acquire built-up units smoothly.
            </div>
          </FadeInUp>
        </div>
      </section>

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
              Find Your Ideal Property in the Hills
            </h2>
            <p className="text-white/80 text-base sm:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Talk to our property consultant today. We help you discover, evaluate, and enquire about the right property in Mashobra and the greater Shimla district.
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
                source="properties-page-bottom"
                title="Property Callback &amp; Consultation"
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
