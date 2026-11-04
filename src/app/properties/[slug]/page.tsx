// src/app/properties/[slug]/page.tsx
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { 
  FaMapMarkerAlt, 
  FaHome, 
  FaCheckCircle, 
  FaWhatsapp, 
  FaPhoneAlt, 
  FaArrowRight, 
  FaShieldAlt, 
  FaTree, 
  FaCompass, 
  FaSnowflake, 
  FaSun, 
  FaBed, 
  FaBath, 
  FaCar, 
  FaRulerCombined, 
  FaMountain, 
  FaFire, 
  FaCheck, 
  FaWifi, 
  FaWater,
  FaFilePdf,
  FaRegCalendarAlt,
  FaAward,
  FaInfoCircle
} from 'react-icons/fa';
import { properties, getPropertyBySlug } from '@/lib/data/properties';
import EnquiryForm from '@/components/forms/EnquiryForm';
import FAQAccordion from '@/components/ui/FAQAccordion';
import EnquireModalButton from '@/components/ui/EnquireModalButton';
import PropertyGallery, { PropertyGalleryImage } from '@/components/gallery/PropertyGallery';
import JsonLd, { breadcrumbSchema, faqSchema, singlePropertySchema } from '@/components/seo/JsonLd';
import { FadeInUp, StaggerContainer, StaggerItem, AnimatedCard } from '@/components/motion/MotionComponents';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return properties.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);
  if (!property) return { title: 'Property Not Found' };

  const canonicalUrl = `https://mashobrashimla.com/properties/${slug}`;
  const metaDescription = `${property.configuration} in ${property.location}. ${property.highlights?.slice(0, 2).join(' ') || property.description.slice(0, 150)} Factual floor plans, pricing, and on-site visits.`;

  const pageTitle = property.title.includes('Mashobra') 
    ? `${property.title} | The Ridge Mashobra, Shimla`
    : `${property.title} | Mashobra, Shimla`;

  return {
    title: pageTitle,
    description: metaDescription,
    alternates: { 
      canonical: canonicalUrl,
    },
    openGraph: {
      title: pageTitle,
      description: metaDescription,
      url: canonicalUrl,
      siteName: 'The Ridge Mashobra, Shimla',
      images: [
        {
          url: property.image.startsWith('http') ? property.image : `https://mashobrashimla.com${property.image}`,
          width: 1200,
          height: 630,
          alt: `${property.title} – ${property.location}`,
        },
      ],
      locale: 'en_IN',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: metaDescription,
      images: [property.image.startsWith('http') ? property.image : `https://mashobrashimla.com${property.image}`],
    },
  };
}

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP || '+919999995151';

export default async function PropertyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);
  if (!property) notFound();

  const canonicalUrl = `https://mashobrashimla.com/properties/${slug}`;
  const waMsg = `Hello, I am interested in ${property.title} located in ${property.location}. Please share the detailed brochure, verified floor plans, and pricing schedule.`;
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, '')}?text=${encodeURIComponent(waMsg)}`;

  // Convert property gallery images to gallery format
  const galleryItems: PropertyGalleryImage[] = (
    property.gallery && property.gallery.length > 0
      ? property.gallery
      : [property.image]
  ).map((img, i) => {
    let caption = `${property.title} – Exterior Elevation`;
    if (img.includes('living-room')) caption = 'Double-Height Living Lounge with Stone Hearth';
    else if (img.includes('bedroom')) caption = 'Master Bedroom Suite with Panoramic Balcony';
    else if (img.includes('dining')) caption = 'Formal Dining Room Framing Deodar Forest';
    else if (img.includes('kitchen')) caption = 'Modern Modular Kitchen with Quartz Island';
    else if (img.includes('bathroom')) caption = 'Spa-Style En-Suite Bathroom';
    else if (img.includes('balcony')) caption = 'Private Cedar Viewing Deck overlooking Himalayas';
    else if (i > 0) caption = `${property.title} – Perspective ${i + 1}`;

    return {
      src: img,
      alt: `${property.title} – View ${i + 1} in ${property.location}`,
      caption,
    };
  });

  // Related properties for bottom suggestions
  const relatedProperties = properties
    .filter((p) => p.slug !== property.slug)
    .slice(0, 3);

  return (
    <>
      {/* ─── SEO & CANONICAL TAGS ──────────────────────────────── */}
      <head>
        <link rel="canonical" href={canonicalUrl} />
      </head>

      <JsonLd
        data={[
          breadcrumbSchema([
            { name: 'Home', url: 'https://mashobrashimla.com' },
            { name: 'Properties', url: 'https://mashobrashimla.com/properties' },
            { name: property.title, url: canonicalUrl },
          ]),
          singlePropertySchema(property),
          ...(property.faqs && property.faqs.length > 0 ? [faqSchema(property.faqs)] : []),
        ]}
      />

      {/* ─── 1. HERO SECTION ───────────────────────────────────── */}
      <section className="relative w-full min-h-[520px] sm:min-h-[580px] lg:min-h-[640px] flex items-center justify-center overflow-hidden">
        <Image
          src={property.image}
          alt={`${property.title} – ${property.location}`}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />

        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center">
          

          {/* Top Verification Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-3">
            <span className="bg-[#E07A2F] text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-xs">
              Verified Mountain Residence
            </span>
            <span className="bg-white/15 backdrop-blur-md text-white text-[11px] sm:text-xs font-medium px-3 py-1 rounded-full border border-white/20">
              Section 118 Compliant
            </span>
          </div>

          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight max-w-4xl"
            style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}
          >
            {property.title}
          </h1>

          <p className="text-white/85 text-base sm:text-lg max-w-2xl mx-auto mb-6 font-light leading-relaxed">
            {property.configuration} amidst ancient Deodar cedar canopies in Mashobra, Shimla with sweeping panoramic Himalayan vistas.
          </p>

          {/* Pills Row */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm text-white/90 mb-8">
            <span className="flex items-center gap-1.5 bg-white/15 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20">
              <FaMapMarkerAlt className="text-xs text-[#E07A2F]" />
              <span>{property.location}</span>
            </span>
            <span className="flex items-center gap-1.5 bg-white/15 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20">
              <FaHome className="text-xs text-[#E07A2F]" />
              <span>{property.configuration}</span>
            </span>
            <span className="flex items-center gap-1.5 bg-white/15 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20">
              <FaMountain className="text-xs text-[#E07A2F]" />
              <span>2,146 m Elevation</span>
            </span>
            <span className="bg-[#E07A2F] text-white font-bold px-4 py-1.5 rounded-full shadow-md">
              {property.price || 'Price on Request'}
            </span>
          </div>

          {/* Hero CTAs */}
          
        </div>
      </section>

      {/* ─── 2. KEY STATS OVERVIEW BAR ─────────────────────────── */}
      <section className="bg-[#F8FAFC] border-b border-[#E2E8F0] py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 min-[480px]:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            <div className="bg-white p-3.5 sm:p-4 rounded-xl border border-[#E2E8F0] shadow-xs text-center">
              <FaBed className="text-[#E07A2F] text-lg mx-auto mb-1.5" />
              <div className="text-sm sm:text-base font-bold text-[#172033]">4 En-suite</div>
              <div className="text-[11px] text-[#64748B]">Bedrooms</div>
            </div>
            <div className="bg-white p-3.5 sm:p-4 rounded-xl border border-[#E2E8F0] shadow-xs text-center">
              <FaRulerCombined className="text-[#1E3A5F] text-lg mx-auto mb-1.5" />
              <div className="text-sm sm:text-base font-bold text-[#172033]">4,200 sq.ft.</div>
              <div className="text-[11px] text-[#64748B]">Super Built-up Area</div>
            </div>
            <div className="bg-white p-3.5 sm:p-4 rounded-xl border border-[#E2E8F0] shadow-xs text-center">
              <FaSun className="text-[#E07A2F] text-lg mx-auto mb-1.5" />
              <div className="text-sm sm:text-base font-bold text-[#172033]">South-East</div>
              <div className="text-[11px] text-[#64748B]">Sun-Facing Orientation</div>
            </div>
            <div className="bg-white p-3.5 sm:p-4 rounded-xl border border-[#E2E8F0] shadow-xs text-center">
              <FaTree className="text-[#1E3A5F] text-lg mx-auto mb-1.5" />
              <div className="text-sm sm:text-base font-bold text-[#172033]">Deodar Reserve</div>
              <div className="text-[11px] text-[#64748B]">Forest Setting</div>
            </div>
            <div className="bg-white p-3.5 sm:p-4 rounded-xl border border-[#E2E8F0] shadow-xs text-center">
              <FaCar className="text-[#E07A2F] text-lg mx-auto mb-1.5" />
              <div className="text-sm sm:text-base font-bold text-[#172033]">2 Covered</div>
              <div className="text-[11px] text-[#64748B]">Private Parking Bays</div>
            </div>
            <div className="bg-white p-3.5 sm:p-4 rounded-xl border border-[#E2E8F0] shadow-xs text-center">
              <FaShieldAlt className="text-[#1E3A5F] text-lg mx-auto mb-1.5" />
              <div className="text-sm sm:text-base font-bold text-[#172033]">Gated Enclave</div>
              <div className="text-[11px] text-[#64748B]">24/7 Security &amp; DG</div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. MAIN CONTENT & STICKY SIDEBAR ──────────────────── */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Interactive Photo Gallery with Lightbox */}
          <PropertyGallery images={galleryItems} propertyTitle={property.title} />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">
            {/* ─── LEFT COLUMN: VILLA DETAILS ─── */}
            <div className="lg:col-span-2 space-y-12">
              {/* Architectural Story & Narrative */}
              <div>
                <span className="text-[#E07A2F] text-xs sm:text-sm font-semibold uppercase tracking-wider block mb-2">
                  Architectural Narrative
                </span>
                <h2
                  className="text-2xl sm:text-3xl font-bold text-[#172033] mb-5 leading-snug"
                  style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}
                >
                  Designed in Harmony with the Himalayan Contours
                </h2>

                <div className="prose prose-slate max-w-none text-[#475569] text-sm sm:text-base leading-relaxed space-y-4">
                  {property.description.split('\n\n').map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>

                
              </div>

              {/* Multi-Level Layout Concept */}
              <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-6 sm:p-8">
                <span className="text-[#E07A2F] text-xs sm:text-sm font-semibold uppercase tracking-wider block mb-1">
                  Space Planning
                </span>
                <h3
                  className="text-xl sm:text-2xl font-bold text-[#172033] mb-6"
                  style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}
                >
                  Multi-Level Villa Layout Concept
                </h3>

                <div className="space-y-4">
                  <div className="bg-white p-4 sm:p-5 rounded-xl border border-[#E2E8F0] shadow-xs">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-[#172033] text-sm sm:text-base">Level 1 · Ground Floor &amp; Gardens</span>
                      <span className="text-xs bg-[#1E3A5F]/10 text-[#1E3A5F] font-semibold px-2.5 py-0.5 rounded-full">Entertaining &amp; Guest Suite</span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                      Grand entrance portico, double-height living lounge with hand-cut stone fireplace, 8-seater dining room overlooking forest canopy, German modular kitchen with breakfast counter, powder room, guest master bedroom with garden patio, and domestic staff quarters.
                    </p>
                  </div>

                  <div className="bg-white p-4 sm:p-5 rounded-xl border border-[#E2E8F0] shadow-xs">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-[#172033] text-sm sm:text-base">Level 2 · First Floor Suites</span>
                      <span className="text-xs bg-[#1E3A5F]/10 text-[#1E3A5F] font-semibold px-2.5 py-0.5 rounded-full">Primary Living Quarters</span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                      Palatial Master Bedroom Suite with wrap-around cedar viewing deck, walk-in dressing wardrobe, spa bathroom with freestanding tub framing pine canopies, and secondary bedroom suite with en-suite bath and private sunrise balcony.
                    </p>
                  </div>

                  <div className="bg-white p-4 sm:p-5 rounded-xl border border-[#E2E8F0] shadow-xs">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-[#172033] text-sm sm:text-base">Level 3 · Attic Penthouse &amp; Observation Deck</span>
                      <span className="text-xs bg-[#E07A2F]/10 text-[#E07A2F] font-semibold px-2.5 py-0.5 rounded-full">Panoramic Vista Level</span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                      En-suite Bedroom 4 / Family Entertainment Den with vaulted cedar ceiling, skylight stargazing fixtures, private south-facing observation terrace, and home executive study lounge.
                    </p>
                  </div>
                </div>
              </div>

              {/* Premium Highlights Grid */}
              <div>
                <span className="text-[#E07A2F] text-xs sm:text-sm font-semibold uppercase tracking-wider block mb-1">
                  Signature Specifications
                </span>
                <h3
                  className="text-xl sm:text-2xl font-bold text-[#172033] mb-6"
                  style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}
                >
                  Key Villa Highlights
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {property.highlights.map((h, i) => (
                    <div
                      key={i}
                      className="bg-white border border-[#E2E8F0] hover:border-[#1E3A5F]/30 p-4 rounded-xl shadow-xs transition-all flex items-start gap-3"
                    >
                      <div className="w-6 h-6 rounded-full bg-[#E07A2F]/15 flex items-center justify-center flex-shrink-0 text-[#E07A2F] mt-0.5">
                        <FaCheck className="text-[11px]" />
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-[#1E3A5F] leading-snug">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Architectural Specifications Table */}
              <div className="border border-[#E2E8F0] rounded-2xl overflow-hidden shadow-xs">
                <div className="bg-[#1E3A5F] text-white p-4 sm:p-5">
                  <h4 className="font-bold text-base sm:text-lg">Detailed Construction &amp; Material Specifications</h4>
                  <p className="text-xs text-white/75 mt-0.5">Engineered specifically for Himalayan alpine climate durability</p>
                </div>
                <div className="divide-y divide-[#E2E8F0] text-xs sm:text-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-3 p-3.5 sm:p-4 bg-[#F8FAFC]">
                    <span className="font-bold text-[#172033]">Structural System</span>
                    <span className="sm:col-span-2 text-[#475569]">Earthquake-resistant RCC framed superstructure with exterior hand-chiseled mountain slate stone cladding.</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 p-3.5 sm:p-4 bg-white">
                    <span className="font-bold text-[#172033]">Woodwork &amp; Decks</span>
                    <span className="sm:col-span-2 text-[#475569]">Kiln-seasoned Himalayan Deodar cedar paneling, Burmese teak doors, and weather-treated cedar exterior decking.</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 p-3.5 sm:p-4 bg-[#F8FAFC]">
                    <span className="font-bold text-[#172033]">Thermal Glazing</span>
                    <span className="sm:col-span-2 text-[#475569]">Double-glazed thermally insulated argon-filled toughened glass with European thermal break aluminum profiles.</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 p-3.5 sm:p-4 bg-white">
                    <span className="font-bold text-[#172033]">Flooring Finishes</span>
                    <span className="sm:col-span-2 text-[#475569]">Imported Italian marble in formal living &amp; dining areas; engineered solid hardwood oak in all bedroom suites.</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 p-3.5 sm:p-4 bg-[#F8FAFC]">
                    <span className="font-bold text-[#172033]">Heating &amp; Hearth</span>
                    <span className="sm:col-span-2 text-[#475569]">Functional natural stone wood-burning fireplace in main lounge, with dual-circuit provisions for radiant underfloor heating.</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 p-3.5 sm:p-4 bg-white">
                    <span className="font-bold text-[#172033]">Power &amp; Utilities</span>
                    <span className="sm:col-span-2 text-[#475569]">100% silent DG power backup, dedicated 24/7 filtered water supply with rainwater harvesting and multi-stage filtration.</span>
                  </div>
                </div>
              </div>

              {/* Luxury Amenities Grid */}
              <div>
                <span className="text-[#E07A2F] text-xs sm:text-sm font-semibold uppercase tracking-wider block mb-1">
                  Community &amp; Villa Features
                </span>
                <h3
                  className="text-xl sm:text-2xl font-bold text-[#172033] mb-6"
                  style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}
                >
                  Amenities &amp; Conveniences
                </h3>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {property.amenities.map((a, i) => (
                    <div
                      key={i}
                      className="bg-[#F8FAFC] border border-[#E2E8F0] p-3.5 rounded-xl text-center hover:bg-white hover:shadow-sm transition-all"
                    >
                      <FaCheckCircle className="text-[#E07A2F] text-sm mx-auto mb-1.5" />
                      <span className="text-xs font-semibold text-[#172033]">{a}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Location & Travel Connectivity */}
              <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-6 sm:p-8">
                <span className="text-[#E07A2F] text-xs sm:text-sm font-semibold uppercase tracking-wider block mb-1">
                  Strategic Location
                </span>
                <h3
                  className="text-xl sm:text-2xl font-bold text-[#172033] mb-5"
                  style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}
                >
                  Transit Times &amp; Key Destinations
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {property.connectivity.map((c, i) => (
                    <div key={i} className="flex items-center gap-2.5 bg-white p-3 rounded-xl border border-[#E2E8F0] shadow-xs text-xs sm:text-sm text-[#475569]">
                      <FaMapMarkerAlt className="text-[#E07A2F] text-xs flex-shrink-0" />
                      <span>{c}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Himachal Pradesh Section 118 Legal Advisory */}
              <div className="bg-gradient-to-br from-[#1E3A5F] to-[#0f1d30] text-white rounded-2xl p-6 sm:p-8 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#E07A2F]/20 flex items-center justify-center text-[#E07A2F] flex-shrink-0">
                    <FaShieldAlt className="text-lg" />
                  </div>
                  <div>
                    <span className="text-[#E07A2F] text-xs font-bold uppercase tracking-wider">Buyer Advisory</span>
                    <h4 className="text-lg sm:text-xl font-bold">Himachal Pradesh Section 118 Compliance</h4>
                  </div>
                </div>

                <p className="text-white/85 text-xs sm:text-sm leading-relaxed mb-4">
                  Under the HP Tenancy and Land Reforms Act, Section 118 regulates agricultural land purchases in Himachal Pradesh. Non-Himachali Indian citizens and Himachalis alike can legally purchase built-up residential apartments and approved villas in government-sanctioned, HRERA-approved residential projects without hassle.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs text-white/90">
                  <div className="bg-white/10 p-2.5 rounded-lg border border-white/10">
                    ✓ Verified Clear Titles
                  </div>
                  <div className="bg-white/10 p-2.5 rounded-lg border border-white/10">
                    ✓ 100% Legal Ownership
                  </div>
                  <div className="bg-white/10 p-2.5 rounded-lg border border-white/10">
                    ✓ Complete Documentation Support
                  </div>
                </div>
              </div>

              {/* Frequently Asked Questions */}
              {property.faqs && property.faqs.length > 0 && (
                <div className="pt-4" id="faqs">
                  <div className="mb-6">
                    <span className="text-[#E07A2F] text-xs sm:text-sm font-semibold uppercase tracking-wider block mb-1">
                      Clear Factual Answers
                    </span>
                    <h3
                      className="text-xl sm:text-2xl font-bold text-[#172033]"
                      style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}
                    >
                      Frequently Asked Questions About {property.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#64748B] mt-1">
                      Everything you need to know about ownership, specifications, winter weather, and site visits.
                    </p>
                  </div>

                  <FAQAccordion faqs={property.faqs} />
                </div>
              )}
            </div>

            {/* ─── RIGHT COLUMN: STICKY ENQUIRY SIDEBAR ─── */}
            <div className="lg:col-span-1">
              <div id="enquiry-form" className="lg:sticky lg:top-24 space-y-6">
                {/* Main Card */}
                <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6 shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#1E3A5F] via-[#E07A2F] to-[#1E3A5F]" />

                  <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#E07A2F] uppercase tracking-wider mb-2">
                    <FaAward className="text-xs" />
                    Direct Consultant Desk
                  </span>

                  <h3
                    className="text-lg sm:text-xl font-bold text-[#172033] mb-1.5"
                    style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}
                  >
                    Enquire for Pricing &amp; Brochure
                  </h3>
                  <p className="text-xs text-[#64748B] mb-6 leading-relaxed">
                    Connect directly with our luxury mountain property specialists for verified floor plans, payment schedules, and private on-ground site visits.
                  </p>

                  <EnquiryForm propertySlug={property.slug} source={`property-sidebar-${property.slug}`} compact />

                  {/* WhatsApp Fast Action */}
                  <div className="mt-5 pt-5 border-t border-[#E2E8F0] space-y-2.5">
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold py-3 px-4 rounded-xl hover:bg-[#1fad55] active:scale-98 transition-all text-xs sm:text-sm shadow-md w-full"
                    >
                      <FaWhatsapp className="text-base" />
                      <span>Chat Directly on WhatsApp</span>
                    </a>

                    <a
                      href="tel:+91"
                      className="flex items-center justify-center gap-2 border border-[#1E3A5F] text-[#1E3A5F] hover:bg-[#1E3A5F] hover:text-white font-semibold py-2.5 px-4 rounded-xl transition-all text-xs sm:text-sm w-full"
                    >
                      <FaPhoneAlt className="text-xs" />
                      <span>Call Property Advisory Desk</span>
                    </a>
                  </div>

                  {/* Trust Factors */}
                  <div className="mt-6 pt-5 border-t border-[#F1F5F9] space-y-2 text-[11px] text-[#64748B]">
                    <div className="flex items-center gap-2">
                      <FaCheckCircle className="text-[#E07A2F] text-xs flex-shrink-0" />
                      <span>100% Title Verification Diligence</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaCheckCircle className="text-[#E07A2F] text-xs flex-shrink-0" />
                      <span>Direct Developer Pricing Transparency</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaCheckCircle className="text-[#E07A2F] text-xs flex-shrink-0" />
                      <span>Confidential &amp; Dedicated Buyer Advisory</span>
                    </div>
                  </div>
                </div>

                {/* Quick Location Badge Card */}
                <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-5 text-center">
                  <FaMountain className="text-2xl text-[#1E3A5F] mx-auto mb-2" />
                  <h4 className="font-bold text-sm text-[#172033] mb-1">Located in Mashobra, Shimla</h4>
                  <p className="text-xs text-[#64748B] mb-3">
                    Elevation 2,146 metres · Virgin Deodar Canopy · Clean Air (AQI &lt; 30)
                  </p>
                  <Link
                    href="/locations/mashobra"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#E07A2F] hover:underline"
                  >
                    <span>Explore Mashobra Area Guide</span>
                    <FaArrowRight className="text-[10px]" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* ─── 4. EXPLORE MORE PROPERTIES ────────────────────────── */}
          <div className="mt-20 pt-12 border-t border-[#E2E8F0]">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
              <div>
                <span className="text-[#E07A2F] text-xs sm:text-sm font-semibold uppercase tracking-wider block mb-1">
                  More Mountain Enclaves
                </span>
                <h3
                  className="text-2xl sm:text-3xl font-bold text-[#172033]"
                  style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}
                >
                  Explore Other Verified Residences
                </h3>
              </div>
              <Link
                href="/properties"
                className="mt-4 md:mt-0 inline-flex items-center gap-2 text-sm font-semibold text-[#1E3A5F] hover:text-[#E07A2F] transition-colors"
              >
                <span>View All Properties in Mashobra</span>
                <FaArrowRight className="text-xs" />
              </Link>
            </div>

            <div className="grid grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProperties.map((rel) => (
                <div
                  key={rel.id}
                  className="bg-white rounded-xl border border-[#E2E8F0] overflow-hidden hover:shadow-lg transition-all group flex flex-col justify-between"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                    <Image
                      src={rel.image}
                      alt={rel.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute top-2 left-2 bg-[#1E3A5F]/90 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full backdrop-blur-xs">
                      {rel.configuration}
                    </div>
                  </div>
                  <div className="p-4 flex flex-col flex-1 justify-between">
                    <div>
                      <h4 className="font-bold text-sm sm:text-base text-[#172033] group-hover:text-[#E07A2F] transition-colors line-clamp-1 mb-1">
                        {rel.title}
                      </h4>
                      <p className="text-xs text-[#64748B] flex items-center gap-1 mb-3">
                        <FaMapMarkerAlt className="text-[#E07A2F] text-[10px]" />
                        <span>{rel.location}</span>
                      </p>
                    </div>
                    <div className="pt-3 border-t border-[#F1F5F9] flex items-center justify-between">
                      <span className="text-xs font-bold text-[#1E3A5F]">{rel.price || 'Price on Request'}</span>
                      <Link
                        href={`/properties/${rel.slug}`}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-[#E07A2F] hover:translate-x-0.5 transition-transform"
                      >
                        <span>View Details</span>
                        <FaArrowRight className="text-[9px]" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
