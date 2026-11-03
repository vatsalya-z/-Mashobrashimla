// src/app/about-us/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowRight, 
  Mountain, 
  Trees, 
  MapPin, 
  Home, 
  CheckCircle2, 
  Search, 
  FileText, 
  CalendarCheck, 
  Navigation, 
  Users, 
  SunMedium, 
  Building2, 
  MessageSquareCheck, 
  ShieldCheck, 
  Headphones, 
  SlidersHorizontal,
  Compass,
  HeartHandshake
} from 'lucide-react';

import AboutHero from '@/components/about/AboutHero';
import AboutFAQAccordion, { FAQItem } from '@/components/about/AboutFAQAccordion';
import EnquireModalButton from '@/components/ui/EnquireModalButton';
import { 
  FadeInUp, 
  StaggerContainer, 
  StaggerItem, 
  AnimatedCard 
} from '@/components/motion/MotionComponents';
import { websiteImages } from '@/lib/images';
import JsonLd, { 
  breadcrumbSchema, 
  organizationSchema, 
  faqSchema 
} from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'About The Ridge Mashobra, Shimla | Explore Properties',
  description:
    'Learn about The Ridge Mashobra, Shimla. Explore property opportunities, location insights and residential property assistance in Mashobra and nearby locations.',
  alternates: { 
    canonical: 'https://mashobrashimla.com/about-us' 
  },
  openGraph: {
    title: 'About The Ridge Mashobra, Shimla | Explore Properties',
    description:
      'Explore residential property opportunities, location insights and property assistance in Mashobra and Shimla, Himachal Pradesh.',
    url: 'https://mashobrashimla.com/about-us',
    siteName: 'The Ridge Mashobra, Shimla',
    images: [
      {
        url: 'https://mashobrashimla.com/images/about/about-mashobra-property.jpg',
        width: 1376,
        height: 768,
        alt: 'About The Ridge Mashobra, Shimla – Residential Property Discovery',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About The Ridge Mashobra, Shimla | Explore Properties',
    description:
      'Learn about residential property opportunities and location insights in Mashobra and Shimla, Himachal Pradesh.',
    images: ['https://mashobrashimla.com/images/about/about-mashobra-property.jpg'],
  },
};

// ═══════════════════════════════════════════════════════════════
// DATA DEFINITIONS (MATCHING SPECIFICATION STRICTLY)
// ═══════════════════════════════════════════════════════════════

// 3. Our Approach
const approachSteps = [
  {
    step: '01',
    icon: SlidersHorizontal,
    title: 'Understand Your Requirements',
    desc: 'We understand your preferred location, property configuration, budget and lifestyle requirements before helping you explore relevant options.',
  },
  {
    step: '02',
    icon: Compass,
    title: 'Explore Property Opportunities',
    desc: 'Discover property options in Mashobra, Shimla and nearby destinations with relevant details and location information.',
  },
  {
    step: '03',
    icon: HeartHandshake,
    title: 'Get Personalised Assistance',
    desc: 'Connect with our team to request property information, discuss your requirements and arrange a property visit where available.',
  },
];

// 4. Why Explore Mashobra Features
const mashobraFeatures = [
  {
    icon: Mountain,
    title: 'Natural Mountain Surroundings',
    desc: 'Breathtaking panoramic Himalayan ridge lines and tranquil mountain valleys that define everyday living in Himachal Pradesh.',
  },
  {
    icon: Trees,
    title: 'Deodar Forest Landscapes',
    desc: 'Ancient Deodar cedar and pine groves providing clean Himalayan air, natural serenity, and sheltered mountain tranquility.',
  },
  {
    icon: Navigation,
    title: 'Access to Shimla',
    desc: 'Just 13 km from Shimla city centre, offering a peaceful mountain residence with convenient urban connectivity close by.',
  },
  {
    icon: ShieldCheck,
    title: 'Peaceful Residential Environment',
    desc: 'An uncluttered, serene mountain setting ideal for family residences, private retreats, and long-term peaceful living.',
  },
];

// 5. Our Services
const ourServices = [
  {
    icon: Search,
    title: 'Property Discovery',
    desc: 'Explore residential property options according to your preferences.',
  },
  {
    icon: FileText,
    title: 'Property Information',
    desc: 'Request property details, available configurations and relevant information.',
  },
  {
    icon: MapPin,
    title: 'Location Assistance',
    desc: 'Understand the surroundings, connectivity and nearby destinations.',
  },
  {
    icon: CalendarCheck,
    title: 'Site Visit Assistance',
    desc: 'Submit a request to arrange a property visit, subject to availability and confirmation.',
  },
];

// 6. Who We Help
const whoWeHelp = [
  {
    icon: Users,
    tag: 'Family Residences',
    title: 'Families',
    desc: 'Explore residential spaces that align with your family’s lifestyle, comfort and preferences.',
  },
  {
    icon: SunMedium,
    tag: 'Mountain Retreats',
    title: 'Second-Home Buyers',
    desc: 'Discover mountain-home opportunities for those looking to enjoy the peaceful surroundings of Himachal Pradesh.',
  },
  {
    icon: Building2,
    tag: 'Strategic Properties',
    title: 'Property Buyers and Investors',
    desc: 'Explore property information and evaluate available opportunities according to your individual requirements.',
  },
];

// 7. Our Locations
const locationCards = [
  {
    name: 'Mashobra',
    desc: 'The most desirable residential village near Shimla, enveloped in dense Deodar cedar canopies and tranquil walking trails.',
    href: '/locations/mashobra',
    img: websiteImages.locations.mashobraForest.src,
    alt: 'Residential villas and properties in Mashobra, Shimla',
  },
  {
    name: 'Shimla',
    desc: 'The historic Queen of Hill Stations featuring timeless colonial heritage, established civic infrastructure, and urban connectivity.',
    href: '/locations/shimla',
    img: websiteImages.locations.shimlaMorning.src,
    alt: 'Properties and residences in Shimla city, Himachal Pradesh',
  },
  {
    name: 'Kufri',
    desc: 'A celebrated high-altitude destination renowned for alpine scenery, panoramic Himalayan vistas, and peaceful mountain settings.',
    href: '/locations/kufri',
    img: websiteImages.locations.kufri.src,
    alt: 'Mountain homes and estates in Kufri, Himachal Pradesh',
  },
  {
    name: 'Naldehra',
    desc: 'Renowned for its historic 9-hole golf course nestled amidst ancient cedar glades and tranquil hillside residential environments.',
    href: '/locations/naldehra',
    img: websiteImages.locations.naldehra.src,
    alt: 'Residential properties in Naldehra near Shimla',
  },
];

// 8. Why Choose Us Points
const whyChooseUsPoints = [
  {
    icon: CheckCircle2,
    title: 'Clear Property Information',
    desc: 'Factual specifications, transparent configurations, and clear location details to help you make informed decisions.',
  },
  {
    icon: MapPin,
    title: 'Location-Focused Guidance',
    desc: 'Practical regional insights covering elevation, road connectivity, local climate, and neighbourhood characteristics.',
  },
  {
    icon: MessageSquareCheck,
    title: 'Enquiry-Based Assistance',
    desc: 'Direct, responsive communication tailored to your specific criteria without high-pressure marketing tactics.',
  },
  {
    icon: Headphones,
    title: 'Support Throughout Your Property Search',
    desc: 'Attentive coordination from your initial exploration through to scheduling on-ground site visits when available.',
  },
];

// 9. FAQ Questions and Answers
const faqs: FAQItem[] = [
  {
    question: 'What is The Ridge Mashobra?',
    answer:
      'The Ridge Mashobra is a property-focused website that helps visitors explore property opportunities and request information about residential properties in Mashobra and Shimla.',
  },
  {
    question: 'What locations do you cover?',
    answer:
      'We focus on Mashobra, Shimla, Kufri and Naldehra in Himachal Pradesh.',
  },
  {
    question: 'Can I enquire about available properties?',
    answer:
      'Yes. You can submit an enquiry through our website to request property information and assistance.',
  },
  {
    question: 'Can I arrange a property visit?',
    answer:
      'You can submit a site visit request through our enquiry form. Visits are subject to property availability and confirmation.',
  },
  {
    question: 'Can I get property pricing and floor plans?',
    answer:
      'You can contact our team to request the latest available property information, pricing and floor plans, where provided.',
  },
  {
    question: 'How can I contact your team?',
    answer:
      'You can use the Contact Us page, enquiry form or WhatsApp option available on the website.',
  },
];

export default function AboutUsPage() {
  return (
    <>
      {/* ═══════════════════════════════════════════════════════════════
          STRUCTURED DATA (JSON-LD)
      ═══════════════════════════════════════════════════════════════ */}
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: 'https://mashobrashimla.com' },
          { name: 'About Us', url: 'https://mashobrashimla.com/about-us' },
        ])}
      />
      <JsonLd data={organizationSchema()} />
      <JsonLd data={faqSchema(faqs)} />

      {/* ═══════════════════════════════════════════════════════════════
          1. HERO SECTION (ONLY ONE LARGE HERO IMAGE - MATCHING HOMEPAGE)
      ═══════════════════════════════════════════════════════════════ */}
      <AboutHero imageSrc="/images/about/about-mashobra-property.jpg" />

      {/* ═══════════════════════════════════════════════════════════════
          2. INTRODUCTION SECTION (MATCHING HOMEPAGE PATTERN)
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-16 lg:py-20 bg-white overflow-hidden border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <FadeInUp>
            <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
              <span className="text-[#E07A2F] text-sm font-semibold uppercase tracking-wider">
                Who We Are
              </span>
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#172033] mt-2 mb-4"
                style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}
              >
                About The Ridge Mashobra
              </h2>
              <p className="text-[#64748B] text-base sm:text-lg leading-relaxed">
                The Ridge Mashobra, Shimla, is a property-focused online platform created to help individuals and families explore residential property opportunities in the beautiful surroundings of Mashobra and Shimla.
              </p>
            </div>
          </FadeInUp>

          {/* Key Platform Highlights Grid for Mobile & Desktop */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 max-w-4xl mx-auto mb-10 sm:mb-12">
            <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-3 sm:p-4 text-center shadow-xs">
              <div className="text-lg sm:text-2xl font-bold text-[#E07A2F]" style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}>100%</div>
              <div className="text-[11px] sm:text-xs text-[#64748B] mt-1 font-medium">Transparent Info</div>
            </div>
            <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-3 sm:p-4 text-center shadow-xs">
              <div className="text-lg sm:text-2xl font-bold text-[#1E3A5F]" style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}>4+</div>
              <div className="text-[11px] sm:text-xs text-[#64748B] mt-1 font-medium">Regional Enclaves</div>
            </div>
            <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-3 sm:p-4 text-center shadow-xs">
              <div className="text-lg sm:text-2xl font-bold text-[#E07A2F]" style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}>Verified</div>
              <div className="text-[11px] sm:text-xs text-[#64748B] mt-1 font-medium">Site Visits</div>
            </div>
            <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-3 sm:p-4 text-center shadow-xs">
              <div className="text-lg sm:text-2xl font-bold text-[#1E3A5F]" style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}>Direct</div>
              <div className="text-[11px] sm:text-xs text-[#64748B] mt-1 font-medium">Buyer Guidance</div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7">
              <FadeInUp delay={0.1}>
                <div className="space-y-4 text-[#64748B] text-base sm:text-lg leading-relaxed">
                  <p>
                    Our aim is to make property discovery simpler by bringing together relevant property information, location insights and enquiry assistance in one place.
                  </p>
                  <p>
                    Whether you are exploring a family residence, a holiday home or a premium mountain property, our platform helps you understand available options and take the next step with confidence.
                  </p>
                </div>

                {/* Transparency Disclosure Card */}
                <div className="mt-8 p-4 sm:p-5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#E07A2F]/10 text-[#E07A2F] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <ShieldCheck size={18} />
                  </div>
                  <div className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    <strong className="text-[#172033] font-semibold block mb-0.5">Independent Property Discovery Platform:</strong>
                    This website serves as an independent real estate resource facilitating property enquiries, transparent specifications, and site visit coordination for residential properties in Mashobra, Shimla, and surrounding destinations.
                  </div>
                </div>

                {/* Quick Action Link - Responsive Mobile Grid */}
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg">
                  <Link
                    href="/properties"
                    className="inline-flex items-center justify-center gap-2 bg-[#1E3A5F] text-white font-semibold text-sm sm:text-base px-6 py-3.5 rounded-xl hover:bg-[#162d4a] transition-all shadow-sm hover:shadow-md group w-full"
                  >
                    <span>Explore Properties</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center justify-center gap-2 border border-[#1E3A5F]/20 text-[#1E3A5F] font-semibold text-sm sm:text-base px-6 py-3.5 rounded-xl hover:bg-[#1E3A5F]/5 transition-all w-full"
                  >
                    <span>Contact Our Team</span>
                  </Link>
                </div>
              </FadeInUp>
            </div>

            {/* Right Image Column */}
            <div className="lg:col-span-5">
              <FadeInUp delay={0.2}>
                <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden shadow-xl border border-[#E2E8F0] group">
                  <Image
                    src="/images/about/mountain-lifestyle.jpg"
                    alt="Mountain villa living and scenic landscapes in Mashobra, Shimla"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 1024px) 100vw, 42vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#172033]/70 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Floating Highlight Pill */}
                  <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 bg-white/95 backdrop-blur-md rounded-xl p-3.5 border border-white/40 shadow-lg">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-[#E07A2F]/10 text-[#E07A2F] flex items-center justify-center flex-shrink-0">
                          <Mountain size={18} />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-[#172033]">Mashobra Hills Enclave</div>
                          <div className="text-[11px] text-[#64748B]">2,100 m Altitude · Pine &amp; Cedar Trails</div>
                        </div>
                      </div>
                      <span className="text-[10px] font-bold text-[#1E3A5F] bg-[#F1F5F9] px-2.5 py-1 rounded-full uppercase tracking-wider">
                        Shimla
                      </span>
                    </div>
                  </div>
                </div>
              </FadeInUp>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          3. OUR APPROACH SECTION (THREE PROFESSIONAL CARDS)
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-16 lg:py-20 bg-[#F1F5F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <FadeInUp>
            <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
              <span className="text-[#E07A2F] text-sm font-semibold uppercase tracking-wider">
                Our Approach
              </span>
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#172033] mt-2 mb-3"
                style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}
              >
                Property Discovery Made Simpler
              </h2>
              <p className="text-[#64748B] text-sm sm:text-base leading-relaxed">
                A structured, transparent property discovery methodology designed around your unique requirements.
              </p>
            </div>
          </FadeInUp>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {approachSteps.map((step) => {
              const IconComp = step.icon;
              return (
                <StaggerItem key={step.title} className="h-full">
                  <AnimatedCard className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-8 border border-[#E2E8F0] shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-between group">
                    <div>
                      <div className="flex items-center justify-between mb-4 sm:mb-5">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-[#1E3A5F]/10 text-[#1E3A5F] group-hover:bg-[#1E3A5F] group-hover:text-white flex items-center justify-center transition-colors duration-300">
                          <IconComp className="w-5 h-5 sm:w-6 sm:h-6" />
                        </div>
                        <span className="text-[10px] sm:text-xs font-bold text-[#94A3B8] tracking-widest uppercase bg-[#F8FAFC] border border-[#E2E8F0] px-2.5 py-1 rounded-full group-hover:text-[#E07A2F] group-hover:border-[#E07A2F]/30 transition-colors">
                          Step {step.step}
                        </span>
                      </div>
                      <h3
                        className="text-base sm:text-xl font-bold text-[#172033] mb-2 sm:mb-3 group-hover:text-[#1E3A5F] transition-colors"
                        style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}
                      >
                        {step.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                        {step.desc}
                      </p>
                    </div>

                    <div className="pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-[#F1F5F9] flex items-center text-[11px] sm:text-xs font-semibold text-[#1E3A5F] group-hover:text-[#E07A2F] transition-colors">
                      <span>Seamless &amp; Transparent</span>
                    </div>
                  </AnimatedCard>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          4. WHY EXPLORE MASHOBRA? (FOUR FEATURE CARDS)
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <FadeInUp>
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
              <span className="text-[#E07A2F] text-sm font-semibold uppercase tracking-wider">
                Destination Highlights
              </span>
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#172033] mt-2 mb-4"
                style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}
              >
                Experience the Charm of Mashobra
              </h2>
              <div className="space-y-3 text-[#64748B] text-base leading-relaxed">
                <p>
                  Nestled amidst the beautiful landscapes of Himachal Pradesh, Mashobra offers a distinctive mountain setting with lush greenery, scenic surroundings and convenient access to Shimla.
                </p>
                <p>
                  Its peaceful environment and natural beauty make it an interesting destination for people exploring a mountain residence or a second-home opportunity.
                </p>
              </div>
            </div>
          </FadeInUp>

          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {mashobraFeatures.map((feature) => {
              const IconComp = feature.icon;
              return (
                <StaggerItem key={feature.title} className="h-full">
                  <AnimatedCard className="bg-[#F8FAFC] rounded-xl sm:rounded-2xl p-3.5 sm:p-6 border border-[#E2E8F0] shadow-sm hover:shadow-lg hover:border-[#1E3A5F]/30 hover:bg-white transition-all duration-300 h-full flex flex-col items-center text-center group">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-[#E07A2F]/10 text-[#E07A2F] group-hover:bg-[#E07A2F] group-hover:text-white flex items-center justify-center mb-3 sm:mb-4 transition-colors duration-300">
                      <IconComp className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <h3
                      className="font-bold text-[#172033] text-xs sm:text-base mb-1.5 sm:mb-2 group-hover:text-[#1E3A5F] transition-colors leading-snug"
                      style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}
                    >
                      {feature.title}
                    </h3>
                    <p className="text-[11px] sm:text-sm text-[#64748B] leading-snug sm:leading-relaxed">
                      {feature.desc}
                    </p>
                  </AnimatedCard>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          <div className="mt-12 text-center flex justify-center">
            <Link
              href="/locations/mashobra"
              className="inline-flex items-center gap-2 bg-[#1E3A5F] text-white font-semibold text-sm sm:text-base px-8 py-3.5 rounded-xl hover:bg-[#162d4a] transition-all shadow-sm hover:shadow-md group"
            >
              <span>Explore More About Mashobra</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          5. OUR SERVICES SECTION (FOUR SERVICE CARDS WITH LUCIDE ICONS)
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-16 lg:py-20 bg-[#F1F5F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <FadeInUp>
            <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
              <span className="text-[#E07A2F] text-sm font-semibold uppercase tracking-wider">
                Our Services
              </span>
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#172033] mt-2 mb-3"
                style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}
              >
                How We Help You Explore Properties
              </h2>
              <p className="text-[#64748B] text-sm sm:text-base leading-relaxed">
                Dedicated support services designed to simplify your mountain property discovery and due evaluation.
              </p>
            </div>
          </FadeInUp>

          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {ourServices.map((service, index) => {
              const IconComp = service.icon;
              return (
                <StaggerItem key={service.title} className="h-full">
                  <AnimatedCard className="bg-white rounded-xl sm:rounded-2xl p-3.5 sm:p-7 border border-[#E2E8F0] shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-between group">
                    <div>
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-[#1E3A5F]/10 text-[#1E3A5F] group-hover:bg-[#E07A2F] group-hover:text-white flex items-center justify-center transition-colors duration-300 mb-3 sm:mb-5">
                        <IconComp className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <span className="text-[9px] sm:text-[11px] font-bold text-[#94A3B8] tracking-wider uppercase block mb-1">
                        Service 0{index + 1}
                      </span>
                      <h3
                        className="text-xs sm:text-lg font-bold text-[#172033] mb-1.5 sm:mb-2.5 group-hover:text-[#1E3A5F] transition-colors leading-snug"
                        style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}
                      >
                        {service.title}
                      </h3>
                      <p className="text-[11px] sm:text-sm text-[#64748B] leading-snug sm:leading-relaxed">
                        {service.desc}
                      </p>
                    </div>

                    <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-[#F1F5F9] flex items-center justify-between text-[11px] sm:text-xs text-[#1E3A5F] font-semibold group-hover:text-[#E07A2F] transition-colors">
                      <span>Inquire Details</span>
                      <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </AnimatedCard>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          6. WHO WE HELP SECTION (THREE ASPIRATION CARDS)
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <FadeInUp>
            <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
              <span className="text-[#E07A2F] text-sm font-semibold uppercase tracking-wider">
                Tailored Guidance
              </span>
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#172033] mt-2 mb-3"
                style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}
              >
                Property Options for Different Aspirations
              </h2>
              <p className="text-[#64748B] text-sm sm:text-base leading-relaxed">
                Whether you seek a generational family retreat or a peaceful holiday sanctuary, we align with your vision.
              </p>
            </div>
          </FadeInUp>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5 sm:gap-6 lg:gap-8">
            {whoWeHelp.map((group) => {
              const IconComp = group.icon;
              return (
                <StaggerItem key={group.title} className="h-full">
                  <AnimatedCard className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl sm:rounded-2xl p-4 sm:p-8 hover:bg-white hover:border-[#1E3A5F]/30 hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-between group">
                    <div>
                      <div className="flex items-center justify-between mb-4 sm:mb-5">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-[#E07A2F]/10 text-[#E07A2F] group-hover:bg-[#E07A2F] group-hover:text-white flex items-center justify-center transition-colors duration-300">
                          <IconComp className="w-5 h-5 sm:w-6 sm:h-6" />
                        </div>
                        <span className="text-[10px] sm:text-[11px] font-semibold text-[#64748B] bg-white border border-[#E2E8F0] px-2.5 py-1 rounded-full">
                          {group.tag}
                        </span>
                      </div>
                      <h3
                        className="text-base sm:text-xl font-bold text-[#172033] mb-2 sm:mb-3 group-hover:text-[#1E3A5F] transition-colors"
                        style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}
                      >
                        {group.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                        {group.desc}
                      </p>
                    </div>

                    <div className="pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-[#E2E8F0]/70 flex items-center text-[11px] sm:text-xs font-semibold text-[#1E3A5F] group-hover:text-[#E07A2F] transition-colors">
                      <span>Explore Options</span>
                      <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </AnimatedCard>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          7. OUR LOCATIONS SECTION (EXACT HOMEPAGE HOVER & ANIMATIONS)
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-16 lg:py-20 bg-[#F1F5F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <FadeInUp>
            <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
              <span className="text-[#E07A2F] text-sm font-semibold uppercase tracking-wider">
                Regional Enclaves
              </span>
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#172033] mt-2 mb-3"
                style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}
              >
                Explore Beautiful Locations Around Shimla
              </h2>
              <p className="text-[#64748B] text-sm sm:text-base leading-relaxed">
                Discover sought-after residential destinations, serene mountain hilltops, and pristine pine reserves.
              </p>
            </div>
          </FadeInUp>

          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {locationCards.map((loc) => (
              <StaggerItem key={loc.name} className="h-full">
                <AnimatedCard className="h-full">
                  <Link
                    href={loc.href}
                    className="group relative aspect-[3/4] rounded-xl sm:rounded-2xl overflow-hidden block shadow-sm hover:shadow-xl transition-all"
                  >
                    <Image
                      src={loc.img}
                      alt={loc.alt}
                      fill
                      className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#172033]/95 via-black/25 to-transparent group-hover:from-[#172033]/95 transition-colors" />
                    
                    <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-6 text-left flex flex-col justify-end">
                      <h3
                        className="text-white font-bold text-sm sm:text-xl group-hover:text-[#E07A2F] transition-colors leading-tight mb-0.5 sm:mb-1"
                        style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}
                      >
                        {loc.name}
                      </h3>
                      <p className="text-white/80 text-[10px] sm:text-[13px] leading-tight sm:leading-snug line-clamp-1 sm:line-clamp-2 mb-2 sm:mb-3.5">
                        {loc.desc}
                      </p>
                      <div className="inline-flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-xs font-semibold text-[#E07A2F] group-hover:text-white transition-colors">
                        <span>Explore Location</span>
                        <ArrowRight className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </AnimatedCard>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <div className="mt-10 sm:mt-12 text-center flex justify-center">
            <Link
              href="/locations"
              className="inline-flex items-center gap-2 bg-[#1E3A5F] text-white font-bold text-sm sm:text-base px-8 py-3.5 rounded-xl hover:bg-[#162d4a] transition-all shadow-sm hover:shadow-md group"
            >
              <span>View All Locations</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          8. WHY CHOOSE US SECTION (FOUR VALUE PILLARS - FACTUAL & CLEAR)
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <FadeInUp>
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
              <span className="text-[#E07A2F] text-sm font-semibold uppercase tracking-wider">
                Why Choose Us
              </span>
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#172033] mt-2 mb-4"
                style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}
              >
                Your Property Search, Made More Convenient
              </h2>
              <p className="text-[#64748B] text-base sm:text-lg leading-relaxed">
                We focus on providing a straightforward property discovery experience, helping visitors understand relevant options and connect with our team for further information.
              </p>
            </div>
          </FadeInUp>

          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {whyChooseUsPoints.map((point) => {
              const IconComp = point.icon;
              return (
                <StaggerItem key={point.title} className="h-full">
                  <AnimatedCard className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl sm:rounded-2xl p-3.5 sm:p-6 hover:bg-white hover:border-[#1E3A5F]/30 hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-between group">
                    <div>
                      <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-[#1E3A5F]/10 text-[#1E3A5F] group-hover:bg-[#1E3A5F] group-hover:text-white flex items-center justify-center mb-3 sm:mb-4 transition-colors duration-300">
                        <IconComp className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <h3
                        className="font-bold text-[#172033] text-xs sm:text-base mb-1.5 sm:mb-2 group-hover:text-[#1E3A5F] transition-colors leading-snug"
                        style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}
                      >
                        {point.title}
                      </h3>
                      <p className="text-[11px] sm:text-sm text-[#64748B] leading-snug sm:leading-relaxed">
                        {point.desc}
                      </p>
                    </div>

                    <div className="pt-3 sm:pt-4 mt-3 sm:mt-5 border-t border-[#E2E8F0]/60 flex items-center text-[10px] sm:text-xs font-semibold text-[#E07A2F]">
                      <span>Factual &amp; Verified</span>
                    </div>
                  </AnimatedCard>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          9. FAQ SECTION (SMOOTH INTERACTIVE ACCORDION & FAQ SCHEMA)
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-16 lg:py-20 bg-[#F1F5F9]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <FadeInUp>
            <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
              <span className="text-[#E07A2F] text-sm font-semibold uppercase tracking-wider">
                Frequently Asked Questions
              </span>
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#172033] mt-2 mb-3"
                style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}
              >
                Frequently Asked Questions
              </h2>
              <p className="text-[#64748B] text-sm sm:text-base leading-relaxed">
                Find clear answers regarding property discovery, locations covered, site visits, and contacting our team.
              </p>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.15}>
            <AboutFAQAccordion faqs={faqs} />
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
          10. FINAL CTA SECTION (MATCHING HOMEPAGE DESIGN SYSTEM)
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-16 lg:py-20 bg-[#1E3A5F] overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center text-white">
          <FadeInUp>
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4"
              style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}
            >
              Let&apos;s Find the Right Property for You
            </h2>
            <p className="text-white/80 text-base sm:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Have a property requirement in Mashobra or Shimla? Connect with our team to explore available options and get the information you need.
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
                source="about-bottom-cta"
                title="Request Property Information & Callback"
                subtitle="Connect with our Mashobra property specialist for current residential opportunities and location insights."
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
