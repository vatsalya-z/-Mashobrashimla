// src/app/the-ridge-mashobra/page.tsx
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { 
  FaArrowRight, 
  FaMapMarkerAlt, 
  FaTree, 
  FaMountain, 
  FaHome, 
  FaShieldAlt, 
  FaCheckCircle, 
  FaPhoneAlt, 
  FaWhatsapp, 
  FaFileDownload,
  FaCrown,
  FaSwimmingPool,
  FaHeartbeat,
  FaConciergeBell,
  FaLeaf,
  FaFire,
  FaRoad
} from 'react-icons/fa';
import EnquiryForm from '@/components/forms/EnquiryForm';
import ProjectGallery from '@/components/gallery/ProjectGallery';
import FAQAccordion, { FAQItem } from '@/components/ui/FAQAccordion';
import EnquireModalButton from '@/components/ui/EnquireModalButton';
import JsonLd, { breadcrumbSchema, faqSchema } from '@/components/seo/JsonLd';
import { FadeInUp, StaggerContainer, StaggerItem, AnimatedCard } from '@/components/motion/MotionComponents';
import { websiteImages } from '@/lib/images';

export const metadata: Metadata = {
  title: 'The Ridge Mashobra, Shimla | Project Details & Enquiries',
  description:
    'Explore The Ridge Mashobra project in Shimla. Discover premium 3 BHK & 4 BHK luxury mountain villas, 25,000 sq.ft clubhouse, EVAVO longevity wellness, and request private site visits.',
  alternates: { canonical: 'https://mashobrashimla.com/the-ridge-mashobra' },
  openGraph: {
    title: 'The Ridge Mashobra, Shimla | Project Details & Enquiries',
    description:
      'Discover 3 BHK and 4 BHK luxury residences set at 2,100m elevation in Mashobra, Shimla with panoramic Himalayan views.',
    images: [{ url: 'https://mashobrashimla.com/images/banners/project-panorama.webp', width: 1200, height: 630 }],
  },
};

const projectHighlights = [
  {
    title: 'Deodar Forest Sanctuary',
    desc: 'Surrounded by ancient Deodar cedar reserves in Mashobra, providing pure mountain air (AQI < 30) and absolute acoustic serenity.',
  },
  {
    title: 'Panoramic Himalayan Vistas',
    desc: 'Expansive private balconies and cantilevered viewing decks framing panoramic snow-capped Himalayan peaks and misty valleys.',
  },
  {
    title: 'Alpine Vernacular Architecture',
    desc: 'Bespoke masonry utilizing hand-cut slate, dressed mountain stone, cedar wood cladding, and high-performance double-glazed glass.',
  },
  {
    title: '3 & 4 BHK Luxury Formats',
    desc: 'Thoughtfully planned multi-level chateau villas designed with en-suite master suites, warming fireplaces, and high-ceiling lounges.',
  },
  {
    title: 'Dedicated Infrastructure',
    desc: 'Planned gated enclave with internal paved access roads, covered private parking, reliable power backup, and dedicated water storage.',
  },
  {
    title: 'Convenient Shimla Transit',
    desc: 'Just 13 km from Shimla Mall Road via the streamlined Dhalli bypass, offering tranquil forest living within minutes of city conveniences.',
  },
];

const projectAmenities = [
  'Gated Community with 24/7 Security',
  'Private Panoramic Balconies',
  'Wood-burning Fireplace Provisions',
  'Dedicated Covered Car Parking',
  'Integrated Rainwater Harvesting',
  'Underground Power & Utilities',
  'Landscaped Alpine Flora Gardens',
  'High-Speed Optical Fiber Connectivity',
  'On-site Facility Management Concept',
];

const projectFaqs: FAQItem[] = [
  {
    question: 'Is this the official developer website for The Ridge Mashobra?',
    answer:
      'No. mashobrashimla.com is an independent real estate consultancy website. We facilitate buyer enquiries, coordinate on-ground site visits, and provide verified information for The Ridge Mashobra project. We are not the official developer.',
  },
  {
    question: 'What villa configurations are planned at The Ridge Mashobra?',
    answer:
      'The project features spacious 3 BHK and 4 BHK luxury mountain villa configurations designed with private balconies, fireplaces, and dedicated parking. Contact our property consultants for current availability and exact floor plans.',
  },
  {
    question: 'Can non-Himachalis legally buy a villa in The Ridge Mashobra?',
    answer:
      'Yes. While Section 118 of the HP Tenancy and Land Reforms Act regulates agricultural land purchases, buyers from any Indian state can legally acquire built-up residential apartments and approved villas in government-sanctioned, HRERA-registered developments.',
  },
  {
    question: 'What is the pricing for villas at The Ridge Mashobra?',
    answer:
      'Pricing is available upon request to maintain direct developer transparency. Share your requirements through our enquiry form to receive the latest price list, payment schedules, and unit availability.',
  },
  {
    question: 'Where is The Ridge Mashobra located exactly?',
    answer:
      'The Ridge Mashobra is located in the scenic residential village of Mashobra, Himachal Pradesh, approximately 13 kilometres east of Shimla city centre at an elevation of around 2,100 metres.',
  },
  {
    question: 'How do I schedule a private site visit to The Ridge Mashobra?',
    answer:
      'You can schedule a site visit by submitting our online enquiry form, requesting a callback, or connecting directly with our advisory team on WhatsApp. We coordinate personalized site visits and local area tours.',
  },
];

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP || '+919999995151';
const waMsg = 'Hello, I am interested in The Ridge Mashobra project. Please share brochure and pricing.';

export default function TheRidgeMashobraPage() {
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, '')}?text=${encodeURIComponent(waMsg)}`;

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: 'Home', url: 'https://mashobrashimla.com' },
            { name: 'Projects', url: 'https://mashobrashimla.com/properties' },
            { name: 'The Ridge Mashobra', url: 'https://mashobrashimla.com/the-ridge-mashobra' },
          ]),
          faqSchema(projectFaqs),
        ]}
      />

      {/* 2. HERO SECTION */}
      <section className="relative w-full min-h-[540px] sm:min-h-[660px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/properties/ridge-mashobra-hero.jpg"
          alt="The Ridge Mashobra, Shimla - Luxury Mountain Villas"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />

        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center">
          

          <span className="text-[#E07A2F] text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2">
            Signature Mountain Residential Enclave
          </span>

          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight"
            style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}
          >
            The Ridge Mashobra, Shimla
          </h1>

          <p className="text-white/85 text-base sm:text-lg max-w-2xl mx-auto mb-8 font-light leading-relaxed">
            Luxury 3 BHK &amp; 4 BHK Mountain Villas Set in the Pristine Deodar Canopies of Mashobra at 2,100 Metres Elevation.
          </p>

          {/* Key Facts Pill Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 w-full max-w-3xl mx-auto mb-8">
            <div className="bg-white/10 backdrop-blur-xs border border-white/15 rounded-xl p-3 text-center">
              <div className="text-[#E07A2F] text-base sm:text-lg font-bold">3 &amp; 4 BHK</div>
              <div className="text-[11px] sm:text-xs text-white/70 mt-0.5">Villa Formats</div>
            </div>
            <div className="bg-white/10 backdrop-blur-xs border border-white/15 rounded-xl p-3 text-center">
              <div className="text-white text-base sm:text-lg font-bold">2,100 m</div>
              <div className="text-[11px] sm:text-xs text-white/70 mt-0.5">Altitude</div>
            </div>
            <div className="bg-white/10 backdrop-blur-xs border border-white/15 rounded-xl p-3 text-center">
              <div className="text-[#E07A2F] text-base sm:text-lg font-bold">13 km</div>
              <div className="text-[11px] sm:text-xs text-white/70 mt-0.5">From Shimla Mall</div>
            </div>
            <div className="bg-white/10 backdrop-blur-xs border border-white/15 rounded-xl p-3 text-center">
              <div className="text-white text-base sm:text-lg font-bold">On Request</div>
              <div className="text-[11px] sm:text-xs text-white/70 mt-0.5">Pricing</div>
            </div>
          </div>


        </div>
      </section>

      {/* 3. PROJECT OVERVIEW */}
      <section id="project-overview" className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <FadeInUp>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-[#E07A2F] text-sm font-semibold uppercase tracking-wider">Concept &amp; Vision</span>
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#172033] mt-2 mb-4"
                style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}
              >
                Project Overview
              </h2>
              <p className="text-[#64748B] text-base sm:text-lg leading-relaxed">
                The Ridge Mashobra represents a distinctive mountain residential development conceived for discerning buyers seeking luxury living amidst natural tranquility.
              </p>
            </div>
          </FadeInUp>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center max-w-6xl mx-auto mb-12">
            <div className="space-y-4 text-sm sm:text-base text-[#64748B] leading-relaxed">
              <p>
                Situated amidst the lush Deodar cedar forests of Mashobra at an elevation of approximately 2,100 metres, The Ridge Mashobra blends contemporary structural engineering with regional mountain materials—slate, stone, timber, and expansive glass.
              </p>
              <p>
                Each villa is strategically planned to leverage the natural slope of the ridge, maximizing solar heat gain during winter and framing unobstructed panoramic vistas across the Himalayan valleys and distant snow-clad peaks.
              </p>
              <p>
                Designed for families seeking a peaceful retreat, an executive remote-working second home, or long-term wealth preservation, The Ridge Mashobra delivers the serenity of high-altitude forest solitude alongside dependable road access to Shimla’s urban conveniences just 13 km away.
              </p>

              <div className="pt-2 text-center sm:text-left flex justify-center sm:justify-start">
                <EnquireModalButton
                  source="the-ridge-mashobra-overview"
                  title="Request Master Layout Plan"
                  subtitle="Download the master layout plan and architectural renderings for The Ridge Mashobra."
                  className="inline-flex items-center gap-2 text-[#1E3A5F] hover:text-[#E07A2F] font-bold text-sm transition-colors cursor-pointer"
                >
                  <FaFileDownload className="text-xs" />
                  <span>Request Master Plan &amp; Brochure</span>
                </EnquireModalButton>
              </div>
            </div>

            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-[#E2E8F0]">
              <Image
                src={websiteImages.hero.mountainVilla.src}
                alt="Contemporary mountain villa at The Ridge Mashobra"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          4. THE HOUSE OF ABHINANDAN LODHA (HOABL SHIMLA) MASTER DEVELOPMENT
      ═══════════════════════════════════════════════════════════════ */}
      <section id="hoabl-master-development" className="py-16 lg:py-24 bg-gradient-to-b from-[#F8FAFC] via-white to-[#F1F5F9] border-y border-[#E2E8F0]/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <FadeInUp>
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="inline-flex items-center gap-1.5 text-[#E07A2F] text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2">
                <FaCrown className="text-xs" />
                The House of Abhinandan Lodha (HoABL)
              </span>
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#172033] mt-1 mb-4"
                style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}
              >
                Branded Mountain Living in Mashobra Hills
              </h2>
              <p className="text-[#64748B] text-sm sm:text-base leading-relaxed">
                India&apos;s pioneering branded land developer brings world-class master planning to Himachal Pradesh—combining 11.5+ acres of low-density forest living, an opulent 25,000 sq. ft. clubhouse, and revolutionary longevity amenities.
              </p>
            </div>
          </FadeInUp>

          {/* 4 Pillars of HoABL Development */}
          <StaggerContainer className="grid grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto mb-10 sm:mb-14">
            <StaggerItem>
              <AnimatedCard className="bg-white rounded-2xl border border-[#E2E8F0] p-4 sm:p-6 h-full flex flex-col justify-between shadow-xs hover:shadow-lg transition-all group">
                <div>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#E07A2F]/10 flex items-center justify-center text-[#E07A2F] mb-3 sm:mb-4 group-hover:scale-105 transition-transform">
                    <FaTree className="text-lg sm:text-xl" />
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-bold text-[#E07A2F] uppercase tracking-wider block mb-1">
                    Low-Density Master Enclave
                  </span>
                  <h3 className="font-bold text-[#172033] text-base sm:text-lg mb-1.5 sm:mb-2" style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}>
                    11.5+ Acre Forest Haven
                  </h3>
                  <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                    Spanning over 11.5 to 14 acres overlooking the serene Gharshi Valley at 8,600 ft elevation, limited to ~100 curated hillside chateaus for unparalleled privacy.
                  </p>
                </div>
              </AnimatedCard>
            </StaggerItem>

            <StaggerItem>
              <AnimatedCard className="bg-white rounded-2xl border border-[#E2E8F0] p-4 sm:p-6 h-full flex flex-col justify-between shadow-xs hover:shadow-lg transition-all group">
                <div>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#1E3A5F]/10 flex items-center justify-center text-[#1E3A5F] mb-3 sm:mb-4 group-hover:scale-105 transition-transform">
                    <FaSwimmingPool className="text-lg sm:text-xl" />
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-bold text-[#E07A2F] uppercase tracking-wider block mb-1">
                    High-Altitude Luxury
                  </span>
                  <h3 className="font-bold text-[#172033] text-base sm:text-lg mb-1.5 sm:mb-2" style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}>
                    25,000+ Sq. Ft. Clubhouse
                  </h3>
                  <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                    A grand architectural clubhouse featuring a temperature-controlled heated indoor pool, scenic mountain-facing viewing decks, and gourmet dining spaces.
                  </p>
                </div>
              </AnimatedCard>
            </StaggerItem>

            <StaggerItem>
              <AnimatedCard className="bg-white rounded-2xl border border-[#E2E8F0] p-4 sm:p-6 h-full flex flex-col justify-between shadow-xs hover:shadow-lg transition-all group">
                <div>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#E07A2F]/10 flex items-center justify-center text-[#E07A2F] mb-3 sm:mb-4 group-hover:scale-105 transition-transform">
                    <FaHeartbeat className="text-lg sm:text-xl" />
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-bold text-[#E07A2F] uppercase tracking-wider block mb-1">
                    Powered by EVAVO
                  </span>
                  <h3 className="font-bold text-[#172033] text-base sm:text-lg mb-1.5 sm:mb-2" style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}>
                    Longevity &amp; Bio-Hacking
                  </h3>
                  <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                    State-of-the-art restorative wellness technologies including cryotherapy, hyperbaric oxygen chambers (HBOT), and therapeutic saunas for cellular rejuvenation.
                  </p>
                </div>
              </AnimatedCard>
            </StaggerItem>

            <StaggerItem>
              <AnimatedCard className="bg-white rounded-2xl border border-[#E2E8F0] p-4 sm:p-6 h-full flex flex-col justify-between shadow-xs hover:shadow-lg transition-all group">
                <div>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#1E3A5F]/10 flex items-center justify-center text-[#1E3A5F] mb-3 sm:mb-4 group-hover:scale-105 transition-transform">
                    <FaConciergeBell className="text-lg sm:text-xl" />
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-bold text-[#E07A2F] uppercase tracking-wider block mb-1">
                    Everly Hotels &amp; Resorts
                  </span>
                  <h3 className="font-bold text-[#172033] text-base sm:text-lg mb-1.5 sm:mb-2" style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}>
                    5-Star Managed Hospitality
                  </h3>
                  <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                    Round-the-clock concierge, on-demand housekeeping, rental management program, and comprehensive estate maintenance for worry-free second home ownership.
                  </p>
                </div>
              </AnimatedCard>
            </StaggerItem>
          </StaggerContainer>

          {/* 23 Curated Alpine Zones & Advanced Recovery Science */}
          <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6 sm:p-10 mb-12 shadow-xs">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <span className="text-[#E07A2F] text-xs font-bold uppercase tracking-wider block mb-1">
                Curated Outdoor Landscape &amp; Bio-Hacking Ecosystem
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#172033]" style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}>
                23 Themed Alpine Zones &amp; Advanced Longevity Science
              </h3>
              <p className="text-xs sm:text-sm text-[#64748B] mt-2">
                Conceived as an integrated outdoor sanctuary across 11.5 acres of Himalayan ridgeline forest.
              </p>
            </div>

            <div className="grid grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-5">
              <div className="p-3.5 sm:p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                <div className="flex items-center gap-2 sm:gap-2.5 text-[#1E3A5F] font-bold text-xs sm:text-sm mb-1 sm:mb-1.5">
                  <FaLeaf className="text-[#E07A2F] text-sm sm:text-base flex-shrink-0" />
                  <span>Fruit Orchards &amp; Zen Groves</span>
                </div>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  Apple, cherry, and walnut orchards intertwined with meditative Japanese-style Zen gardens and cedar walking trails.
                </p>
              </div>

              <div className="p-3.5 sm:p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                <div className="flex items-center gap-2 sm:gap-2.5 text-[#1E3A5F] font-bold text-xs sm:text-sm mb-1 sm:mb-1.5">
                  <FaHeartbeat className="text-[#E07A2F] text-sm sm:text-base flex-shrink-0" />
                  <span>Bio-Restoration &amp; HBOT</span>
                </div>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  Full longevity suite by EVAVO featuring Cryotherapy chambers, Hyperbaric Oxygen Therapy (HBOT), and Red-Light therapy.
                </p>
              </div>

              <div className="p-3.5 sm:p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                <div className="flex items-center gap-2 sm:gap-2.5 text-[#1E3A5F] font-bold text-xs sm:text-sm mb-1 sm:mb-1.5">
                  <FaSwimmingPool className="text-[#E07A2F] text-sm sm:text-base flex-shrink-0" />
                  <span>Double-Height Heated Pool</span>
                </div>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  Year-round temperature-controlled indoor heated pool enclosed in high-performance glass with snow peak vistas.
                </p>
              </div>

              <div className="p-3.5 sm:p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                <div className="flex items-center gap-2 sm:gap-2.5 text-[#1E3A5F] font-bold text-xs sm:text-sm mb-1 sm:mb-1.5">
                  <FaFire className="text-[#E07A2F] text-sm sm:text-base flex-shrink-0" />
                  <span>Open-Air Fire Pits &amp; Barbecue</span>
                </div>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  Stargazing decks, evening campfire plazas, and barbecue lookouts designed for social gatherings under starry skies.
                </p>
              </div>

              <div className="p-3.5 sm:p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                <div className="flex items-center gap-2 sm:gap-2.5 text-[#1E3A5F] font-bold text-xs sm:text-sm mb-1 sm:mb-1.5">
                  <FaMountain className="text-[#E07A2F] text-sm sm:text-base flex-shrink-0" />
                  <span>Yoga &amp; Meditation Terraces</span>
                </div>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  Elevated timber pavilions capturing morning sunrise light (Surya Namaskar decks) over virgin Deodar canopies.
                </p>
              </div>

              <div className="p-3.5 sm:p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                <div className="flex items-center gap-2 sm:gap-2.5 text-[#1E3A5F] font-bold text-xs sm:text-sm mb-1 sm:mb-1.5">
                  <FaConciergeBell className="text-[#E07A2F] text-sm sm:text-base flex-shrink-0" />
                  <span>Dedicated Villa Managers</span>
                </div>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  Bespoke hospitality support by Everly Hotels with personal errand assistance, pre-arrival provisioning, and upkeep.
                </p>
              </div>
            </div>
          </div>

          {/* Dual Brand & Location Showcase Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-6xl mx-auto mb-10">
            <div className="relative rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-md group min-h-[250px] sm:min-h-[320px] flex items-end">
              <Image
                src="/images/hoabl/hoabl-shimla-brand-credibility-of-hoabl-why-01.webp"
                alt="The House of Abhinandan Lodha Brand Credibility in Shimla"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="relative z-10 p-5 sm:p-8 text-white">
                <span className="bg-[#E07A2F] text-white text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider inline-block mb-2">
                  Institutional Trust
                </span>
                <h4 className="text-base sm:text-xl font-bold mb-1.5 sm:mb-2" style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}>
                  Developer Credibility of HoABL
                </h4>
                <p className="text-white/80 text-xs sm:text-sm leading-relaxed">
                  Transforming land and luxury residences with 100% verified legal titles, HP-RERA compliance, and institutional governance across premier Indian destinations.
                </p>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-md group min-h-[250px] sm:min-h-[320px] flex items-end">
              <Image
                src="/images/hoabl/hoabl-shimla-location-strategic-advantage-why-02.webp"
                alt="Strategic Mountain Location Advantage of Mashobra Shimla"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="relative z-10 p-5 sm:p-8 text-white">
                <span className="bg-[#1E3A5F] text-white text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider inline-block mb-2">
                  Strategic Vantage
                </span>
                <h4 className="text-base sm:text-xl font-bold mb-1.5 sm:mb-2" style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}>
                  Gharshi Valley &amp; Himalayan Outlook
                </h4>
                <p className="text-white/80 text-xs sm:text-sm leading-relaxed">
                  Perched high above fog levels with pristine mountain AQI, south-facing sun exposure, and smooth connectivity via the new Dhalli bypass tunnel.
                </p>
              </div>
            </div>
          </div>

          {/* Action Callout */}
          <div className="text-center">
            <EnquireModalButton
              source="/the-ridge-mashobra-hoabl"
              title="Enquire About HoABL Mashobra Mountain Estate"
              subtitle="Connect directly with our property consultants to receive master layout brochures, unit availability, and pricing details."
              className="inline-flex items-center gap-2 bg-[#E07A2F] hover:bg-[#c96b22] text-white font-bold text-sm sm:text-base px-8 py-3.5 rounded-xl transition-all shadow-md cursor-pointer hover:scale-102"
            >
              <span>Request HoABL Project Details &amp; Brochure</span>
              <FaArrowRight className="text-xs" />
            </EnquireModalButton>
          </div>
        </div>
      </section>

      {/* 5. VERIFIED PROJECT HIGHLIGHTS */}
      <section className="py-16 lg:py-20 bg-[#F1F5F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <FadeInUp>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-[#E07A2F] text-sm font-semibold uppercase tracking-wider">Features</span>
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#172033] mt-2 mb-4"
                style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}
              >
                Key Project Highlights
              </h2>
              <p className="text-[#64748B] text-sm sm:text-base leading-relaxed">
                Verified attributes that distinguish The Ridge Mashobra as an exceptional mountain address.
              </p>
            </div>
          </FadeInUp>

          <StaggerContainer className="grid grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {projectHighlights.map((hl) => (
              <StaggerItem key={hl.title}>
                <AnimatedCard className="bg-white rounded-xl border border-[#E2E8F0] p-4 sm:p-6 h-full shadow-xs hover:shadow-md transition-shadow">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#E07A2F]/10 flex items-center justify-center text-[#E07A2F] mb-3 sm:mb-4">
                    <FaCheckCircle className="text-base sm:text-lg" />
                  </div>
                  <h3 className="font-bold text-[#172033] text-sm sm:text-base mb-1.5 sm:mb-2" style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}>
                    {hl.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                    {hl.desc}
                  </p>
                </AnimatedCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 5. LOCATION ADVANTAGES & CONNECTIVITY */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <FadeInUp>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-[#E07A2F] text-sm font-semibold uppercase tracking-wider">Strategic Setting</span>
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#172033] mt-2 mb-4"
                style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}
              >
                Location Advantages
              </h2>
              <p className="text-[#64748B] text-sm sm:text-base leading-relaxed">
                Mashobra provides an idyllic natural buffer while keeping Shimla’s essential institutions easily accessible.
              </p>
            </div>
          </FadeInUp>

          <div className="grid grid-cols-1 min-[400px]:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 max-w-5xl mx-auto mb-10">
            <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-3.5 sm:p-5">
              <span className="text-[10px] sm:text-xs font-bold text-[#E07A2F] uppercase block mb-1">State Capital</span>
              <h3 className="font-bold text-[#172033] text-sm sm:text-base mb-1">Shimla Mall Road &amp; Ridge</h3>
              <p className="text-xs text-[#64748B] mb-1.5 sm:mb-2">13 km · Approx. 30–40 min drive</p>
              <p className="text-xs text-[#64748B]">Fast road transit via the newly streamlined Dhalli bypass tunnel.</p>
            </div>

            <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-3.5 sm:p-5">
              <span className="text-[10px] sm:text-xs font-bold text-[#E07A2F] uppercase block mb-1">Historic Luxury</span>
              <h3 className="font-bold text-[#172033] text-sm sm:text-base mb-1">Wildflower Hall Resort</h3>
              <p className="text-xs text-[#64748B] mb-1.5 sm:mb-2">3 km · Approx. 8 min drive</p>
              <p className="text-xs text-[#64748B]">Prestigious Oberoi resort in close proximity, reflecting the area’s exclusive heritage.</p>
            </div>

            <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-3.5 sm:p-5">
              <span className="text-[10px] sm:text-xs font-bold text-[#E07A2F] uppercase block mb-1">Nature &amp; Parks</span>
              <h3 className="font-bold text-[#172033] text-sm sm:text-base mb-1">Craignano Nature Park</h3>
              <p className="text-xs text-[#64748B] mb-1.5 sm:mb-2">2.5 km · Approx. 7 min drive</p>
              <p className="text-xs text-[#64748B]">Historic Italian-style estate with sprawling lawns and walking trails.</p>
            </div>

            <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-3.5 sm:p-5">
              <span className="text-[10px] sm:text-xs font-bold text-[#E07A2F] uppercase block mb-1">Winter Sports</span>
              <h3 className="font-bold text-[#172033] text-sm sm:text-base mb-1">Kufri Alpine Enclave</h3>
              <p className="text-xs text-[#64748B] mb-1.5 sm:mb-2">14 km · Approx. 30 min drive</p>
              <p className="text-xs text-[#64748B]">Easy access to high-altitude ski slopes and winter snow activities.</p>
            </div>

            <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-3.5 sm:p-5">
              <span className="text-[10px] sm:text-xs font-bold text-[#E07A2F] uppercase block mb-1">Sporting Heritage</span>
              <h3 className="font-bold text-[#172033] text-sm sm:text-base mb-1">Naldehra 9-Hole Golf Course</h3>
              <p className="text-xs text-[#64748B] mb-1.5 sm:mb-2">22 km · Approx. 45 min drive</p>
              <p className="text-xs text-[#64748B]">India’s historic 1905 cedar-surrounded golf course within easy weekend driving distance.</p>
            </div>

            <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-3.5 sm:p-5">
              <span className="text-[10px] sm:text-xs font-bold text-[#E07A2F] uppercase block mb-1">Airport &amp; Tri-City</span>
              <h3 className="font-bold text-[#172033] text-sm sm:text-base mb-1">Chandigarh &amp; Airport</h3>
              <p className="text-xs text-[#64748B] mb-1.5 sm:mb-2">125 km · Under 3.5 hrs drive</p>
              <p className="text-xs text-[#64748B]">Streamlined highway journey via the 4-lane Himalayan Expressway and Solan bypass.</p>
            </div>

            <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-3.5 sm:p-5">
              <span className="text-[10px] sm:text-xs font-bold text-[#E07A2F] uppercase block mb-1">National Capital Transit</span>
              <h3 className="font-bold text-[#172033] text-sm sm:text-base mb-1">Delhi NCR Region</h3>
              <p className="text-xs text-[#64748B] mb-1.5 sm:mb-2">Approx. 7.5 hrs drive</p>
              <p className="text-xs text-[#64748B]">Seamless connectivity via NH-44 and Eastern Peripheral corridors to the Himalayan foothills.</p>
            </div>

            <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-3.5 sm:p-5">
              <span className="text-[10px] sm:text-xs font-bold text-[#E07A2F] uppercase block mb-1">Protected Wilderness</span>
              <h3 className="font-bold text-[#172033] text-sm sm:text-base mb-1">Mashobra Reserve Forest</h3>
              <p className="text-xs text-[#64748B] mb-1.5 sm:mb-2">Approx. 5 min walk / drive</p>
              <p className="text-xs text-[#64748B]">Direct proximity to one of Asia&apos;s oldest protected Deodar cedar nature catchments.</p>
            </div>
          </div>

          <div className="text-center flex justify-center">
            <Link
              href="/locations/mashobra"
              className="inline-flex items-center gap-2 bg-[#1E3A5F] text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-xl hover:bg-[#152a45] transition-all"
            >
              <span>Read Complete Mashobra Location Guide</span>
              <FaArrowRight className="text-xs" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. VERIFIED AMENITIES */}
      <section className="py-16 lg:py-20 bg-[#F1F5F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <FadeInUp>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-[#E07A2F] text-sm font-semibold uppercase tracking-wider">Lifestyle Infrastructure</span>
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#172033] mt-2 mb-4"
                style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}
              >
                Amenities &amp; Facilities
              </h2>
              <p className="text-[#64748B] text-sm sm:text-base leading-relaxed">
                Thoughtfully planned community features engineered for seamless mountain living.
              </p>
            </div>
          </FadeInUp>

          <div className="grid grid-cols-1 min-[360px]:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-4 max-w-4xl mx-auto mb-8">
            {projectAmenities.map((amenity) => (
              <div key={amenity} className="bg-white rounded-xl border border-[#E2E8F0] p-3 sm:p-4 flex items-center gap-2.5 sm:gap-3 shadow-xs">
                <FaCheckCircle className="text-[#E07A2F] flex-shrink-0 text-sm sm:text-base" />
                <span className="text-[11px] sm:text-sm font-semibold text-[#172033]">{amenity}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CONFIGURATIONS & FLOOR PLANS CTA */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <FadeInUp>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-[#E07A2F] text-sm font-semibold uppercase tracking-wider">Configurations</span>
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#172033] mt-2 mb-4"
                style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}
              >
                Villa Configurations &amp; Layouts
              </h2>
              <p className="text-[#64748B] text-sm sm:text-base leading-relaxed">
                Spacious residential layouts crafted with private balconies, fireplaces, and dedicated parking.
              </p>
            </div>
          </FadeInUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 max-w-4xl mx-auto mb-10">
            {/* 3 BHK Card */}
            <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-5 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-[#1E3A5F] text-white text-[11px] sm:text-xs font-bold px-2.5 sm:px-3 py-1 rounded-full">
                    3 BHK Chateau Villa
                  </span>
                  <span className="text-[11px] sm:text-xs font-bold text-[#E07A2F]">
                    Approx. 2,700 – 2,900 sq. ft.
                  </span>
                </div>
                <h3 className="text-lg sm:text-2xl font-bold text-[#172033] mb-2" style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}>
                  3 Bedroom Mountain Villa
                </h3>
                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed mb-4">
                  Generously proportioned duplex layout with an expansive open-plan living room, private master bedroom suite with view terrace, wood-burning fireplace provisions, and two guest bedrooms.
                </p>
                <div className="space-y-2 sm:space-y-2.5 text-xs text-[#172033] mb-5 sm:mb-6 bg-white p-3.5 sm:p-4 rounded-xl border border-[#E2E8F0]">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E07A2F] flex-shrink-0" />
                    <span><strong>Area:</strong> Approx. 2,700 to 2,900 sq. ft.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E07A2F] flex-shrink-0" />
                    <span><strong>Configuration:</strong> 3 Bedrooms + 3 Bathrooms + Powder Room</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E07A2F] flex-shrink-0" />
                    <span><strong>Balconies:</strong> Wide cantilevered viewing decks framing Gharshi Valley</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E07A2F] flex-shrink-0" />
                    <span><strong>Craftsmanship:</strong> Mountain stone masonry, double-glazed glass, covered parking</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E07A2F] flex-shrink-0" />
                    <span><strong>Indicative Pricing:</strong> Starting ₹9.27 Cr* onwards (Full schedule on request)</span>
                  </div>
                </div>
              </div>
              <EnquireModalButton
                source="/the-ridge-mashobra-3bhk"
                title="Enquire: 3 BHK Villa at The Ridge Mashobra"
                subtitle="Request 3 BHK floor plans, architectural elevations, and current pricing starting ₹9.27 Cr*."
                className="w-full bg-[#1E3A5F] hover:bg-[#152a45] text-white font-bold text-xs sm:text-sm py-3 rounded-xl transition-colors text-center cursor-pointer shadow-xs"
              >
                Request 3 BHK Floor Plan &amp; Price
              </EnquireModalButton>
            </div>

            {/* 4 BHK Card */}
            <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-5 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-[#E07A2F] text-white text-[11px] sm:text-xs font-bold px-2.5 sm:px-3 py-1 rounded-full">
                    4 BHK Luxury Estate
                  </span>
                  <span className="text-[11px] sm:text-xs font-bold text-[#1E3A5F]">
                    Approx. 3,500 – 3,700 sq. ft.
                  </span>
                </div>
                <h3 className="text-lg sm:text-2xl font-bold text-[#172033] mb-2" style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}>
                  4 Bedroom Grand Chalet
                </h3>
                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed mb-4">
                  Multi-level luxury mountain estate featuring grand high-ceiling living salon, private elevator provision in select units, private landscaped garden, multi-car covered garage, and domestic staff quarters.
                </p>
                <div className="space-y-2 sm:space-y-2.5 text-xs text-[#172033] mb-5 sm:mb-6 bg-white p-3.5 sm:p-4 rounded-xl border border-[#E2E8F0]">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E07A2F] flex-shrink-0" />
                    <span><strong>Area:</strong> Approx. 3,500 to 3,700 sq. ft.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E07A2F] flex-shrink-0" />
                    <span><strong>Configuration:</strong> 4 En-suite Bedrooms + Powder Room + Staff Room</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E07A2F] flex-shrink-0" />
                    <span><strong>Balconies:</strong> Multi-tier sun decks with 180° Himalayan panorama</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E07A2F] flex-shrink-0" />
                    <span><strong>Special Amenities:</strong> Private elevator provision, private lawn, covered garage</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E07A2F] flex-shrink-0" />
                    <span><strong>Pricing:</strong> Available on request (Flexible construction-linked milestones)</span>
                  </div>
                </div>
              </div>
              <EnquireModalButton
                source="/the-ridge-mashobra-4bhk"
                title="Enquire: 4 BHK Villa at The Ridge Mashobra"
                subtitle="Request 4 BHK floor plans, architectural elevations, and current pricing."
                className="w-full bg-[#E07A2F] hover:bg-[#c96b22] text-white font-bold text-xs sm:text-sm py-3 rounded-xl transition-colors text-center cursor-pointer shadow-xs"
              >
                Request 4 BHK Floor Plan &amp; Price
              </EnquireModalButton>
            </div>
          </div>
        </div>
      </section>

     

      {/* 9. INLINE ENQUIRY FORM & WHATSAPP */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp>
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-[#E07A2F] text-sm font-semibold uppercase tracking-wider">Direct Consultation</span>
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#172033] mt-2 mb-3"
                style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}
              >
                Enquire About The Ridge Mashobra
              </h2>
              <p className="text-[#64748B] text-sm sm:text-base">
                Share your details below to receive official project documentation, current availability, and site visit coordination.
              </p>
            </div>
          </FadeInUp>

          <div className="bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] p-6 sm:p-8 shadow-sm mb-6">
            <EnquiryForm
              propertySlug="the-ridge-mashobra"
              source="/the-ridge-mashobra"
            />

            <div className="mt-6 pt-6 border-t border-[#E2E8F0] flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-[#64748B]">Prefer instant messaging? Connect with our team on WhatsApp:</span>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white font-bold text-xs sm:text-sm px-6 py-2.5 rounded-lg hover:bg-[#1fad55] transition-colors shadow-xs"
              >
                <FaWhatsapp className="text-base" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 10. PROJECT FAQS */}
      <section className="py-16 lg:py-20 bg-[#F1F5F9]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp>
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-[#E07A2F] text-sm font-semibold uppercase tracking-wider">Project FAQ</span>
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#172033] mt-2 mb-3"
                style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}
              >
                Frequently Asked Questions
              </h2>
              <p className="text-[#64748B] text-sm sm:text-base">
                Important answers regarding property ownership, site visits, and project details at The Ridge Mashobra.
              </p>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.1}>
            <FAQAccordion faqs={projectFaqs} />
          </FadeInUp>
        </div>
      </section>

      {/* 11. FINAL BOTTOM LEAD CTA */}
      <section className="py-16 lg:py-20 bg-[#1E3A5F] text-white overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <FadeInUp>
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4"
              style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}
            >
              Interested in The Ridge Mashobra?
            </h2>
            <p className="text-white/80 text-base sm:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Experience the breathtaking Himalayan panoramas and virgin Deodar forests in person. Connect with our property consultants to receive verified brochures, floor plans, and arrange an on-ground tour.
            </p>

            {/* Quick Guarantees Responsive Grid */}
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

            <div className="flex flex-wrap justify-center items-center gap-4">
              <EnquireModalButton
                source="/the-ridge-mashobra-final-cta"
                title="Enquire About The Ridge Mashobra"
                subtitle="Our property consultant will coordinate your travel itinerary and on-ground tour of Mashobra."
                className="flex items-center gap-2 bg-[#E07A2F] text-white font-bold px-8 py-3.5 rounded-xl hover:bg-[#c96b22] hover:scale-102 transition-all cursor-pointer shadow-lg"
              >
                <span>Enquire Now</span>
                <FaArrowRight className="text-xs" />
              </EnquireModalButton>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#25D366] text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-[#1fad55] transition-all shadow-md"
              >
                <FaWhatsapp className="text-base" />
                <span>Chat on WhatsApp</span>
              </a>
              <Link
                href="/contact-us"
                className="flex items-center gap-2 border border-white/30 text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-white/10 hover:border-white/50 transition-all backdrop-blur-xs"
              >
                <FaPhoneAlt className="text-xs" />
                <span>Contact Our Office</span>
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}

