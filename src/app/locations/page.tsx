// src/app/locations/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { 
  FaArrowRight, 
  FaMapMarkerAlt, 
  FaMountain, 
  FaTree, 
  FaCheckCircle, 
  FaPhoneAlt, 
  FaShieldAlt, 
  FaHome 
} from 'react-icons/fa';
import { locations } from '@/lib/data/locations';
import EnquireModalButton from '@/components/ui/EnquireModalButton';
import FAQAccordion, { FAQItem } from '@/components/ui/FAQAccordion';
import JsonLd, { breadcrumbSchema, faqSchema } from '@/components/seo/JsonLd';
import { FadeInUp, StaggerContainer, StaggerItem, AnimatedCard } from '@/components/motion/MotionComponents';

export const metadata: Metadata = {
  title: 'Property Locations Near Shimla – Mashobra, Shimla, Kufri & Naldehra',
  description:
    'Explore premium residential property locations in the Shimla hills: Mashobra, Shimla City, Kufri, and Naldehra. Compare elevation, forest cover, lifestyle, and luxury villa options.',
  alternates: { canonical: 'https://mashobrashimla.com/locations' },
  openGraph: {
    title: 'Property Locations Near Shimla – Mashobra, Shimla, Kufri & Naldehra',
    description:
      'Compare top mountain residential enclaves in Himachal Pradesh. Find luxury villas, mountain chateaus, and second homes.',
    images: [{ url: 'https://mashobrashimla.com/images/og-home.jpg', width: 1200, height: 630 }],
  },
};

const locationsFaqs: FAQItem[] = [
  {
    question: 'Which location near Shimla is best for a permanent mountain home?',
    answer:
      'Mashobra is widely regarded as the most balanced location for permanent and semi-permanent mountain living. Situated just 13 km from Shimla city centre at 2,146 metres, it provides dense virgin Deodar forest tranquility with fast, reliable access to Shimla schools, hospitals, and markets.',
  },
  {
    question: 'How do property prices and density compare between Shimla and Mashobra?',
    answer:
      'Central Shimla is an established urban center with high built-up density and primarily apartment stock. Mashobra, on the other hand, features lower density, larger residential plots, and purpose-built luxury villa enclaves with superior forest cover and cleaner air.',
  },
  {
    question: 'Which location receives the heaviest snowfall in winter?',
    answer:
      'Kufri, situated at 2,622 metres, receives the heaviest and most frequent snowfall in the region, typically lasting from late December through February. Mashobra (2,146 m) and Shimla (2,206 m) experience moderate, picturesque snowfalls.',
  },
  {
    question: 'Can non-Himachalis legally buy residential properties in these locations?',
    answer:
      'Yes. Under the laws of Himachal Pradesh, non-Himachali buyers can legally purchase built-up residential apartments and approved villas within HRERA-registered and government-sanctioned developments.',
  },
];

export default function LocationsPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: 'Home', url: 'https://mashobrashimla.com' },
            { name: 'Locations', url: 'https://mashobrashimla.com/locations' },
          ]),
          faqSchema(locationsFaqs),
        ]}
      />

      {/* 1. HERO SECTION */}
      <section className="relative w-full min-h-[500px] sm:min-h-[660px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/hero/hero-himalayan-valley.webp"
          alt="Himalayan mountain valley locations in Shimla and Mashobra"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />

        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center">

          <span className="text-[#E07A2F] text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2">
            Regional Property Enclaves
          </span>

          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight"
            style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}
          >
            Premium Residential Locations in Shimla Hills
          </h1>

          <p className="text-white/85 text-base sm:text-lg max-w-2xl mx-auto mb-8 font-light leading-relaxed">
            Discover the most desirable mountain villages, alpine resorts, and historic sanctuaries across the greater Shimla district.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <EnquireModalButton
              source="locations-hub-hero"
              title="Enquire About Shimla Region Properties"
              subtitle="Connect with our mountain real estate specialists to compare locations based on your lifestyle requirements."
              className="inline-flex items-center gap-2 bg-[#E07A2F] text-white font-bold text-sm sm:text-base px-8 py-3.5 rounded-xl hover:bg-[#c96b22] hover:scale-102 transition-all shadow-lg cursor-pointer"
            >
              <span>Explore Property Options</span>
              <FaArrowRight className="text-xs" />
            </EnquireModalButton>
          </div>
        </div>
      </section>

      {/* 2. LOCATIONS GRID SECTION */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <FadeInUp>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-[#E07A2F] text-sm font-semibold uppercase tracking-wider">Target Enclaves</span>
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#172033] mt-2 mb-4"
                style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}
              >
                Featured Property Destinations
              </h2>
              <p className="text-[#64748B] text-base sm:text-lg leading-relaxed">
                Each mountain location offers distinct elevation, climate, and lifestyle advantages. Select a destination to explore verified details.
              </p>
            </div>
          </FadeInUp>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-2 gap-3 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
            {locations.map((loc) => (
              <StaggerItem key={loc.slug}>
                <AnimatedCard className="h-full">
                  <div className="group bg-[#F8FAFC] rounded-xl sm:rounded-2xl border border-[#E2E8F0] overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                    {/* Image with Badges */}
                    <div className="relative aspect-[4/3] sm:aspect-[16/10] overflow-hidden bg-slate-200">
                      <Image
                        src={loc.image}
                        alt={`Properties in ${loc.name}, Himachal Pradesh`}
                        fill
                        className="object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
                        sizes="(max-width: 768px) 50vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                      
                      {/* Top Badges */}
                      <div className="absolute top-2 left-2 sm:top-4 sm:left-4 flex flex-wrap gap-1 sm:gap-2">
                        <span className="bg-[#1E3A5F]/90 backdrop-blur-xs text-white text-[9px] sm:text-xs font-bold px-1.5 py-0.5 sm:px-3 sm:py-1 rounded-full">
                          📍 {loc.elevation}
                        </span>
                        <span className="bg-[#E07A2F]/90 backdrop-blur-xs text-white text-[9px] sm:text-xs font-bold px-1.5 py-0.5 sm:px-3 sm:py-1 rounded-full">
                          {loc.distanceFromShimla}
                        </span>
                      </div>

                      {/* Bottom Title on Image */}
                      <div className="absolute bottom-2 left-2 right-2 sm:bottom-4 sm:left-4 sm:right-4">
                        <h3 className="text-sm sm:text-2xl font-bold text-white group-hover:text-[#E07A2F] transition-colors" style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}>
                          {loc.name}
                        </h3>
                        <p className="text-white/80 text-[10px] sm:text-xs mt-0.5 line-clamp-1">{loc.tagline}</p>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-3 sm:p-6 flex flex-col flex-1 justify-between">
                      <div>
                        <p className="text-[#64748B] text-[11px] sm:text-sm leading-relaxed mb-2 sm:mb-5 line-clamp-2 sm:line-clamp-3">
                          {loc.description.split('\n\n')[0]}
                        </p>

                        {/* Key Highlights (visible on tablet & desktop) */}
                        <div className="hidden sm:block mb-6 space-y-2">
                          <span className="text-[11px] font-bold text-[#1E3A5F] uppercase tracking-wider block">
                            Key Highlights:
                          </span>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#64748B]">
                            {loc.landmarks.slice(0, 4).map((lm) => (
                              <div key={lm} className="flex items-center gap-1.5 line-clamp-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#E07A2F] flex-shrink-0" />
                                <span>{lm}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Card Action */}
                      <div className="pt-2.5 sm:pt-4 border-t border-[#E2E8F0] flex items-center justify-between">
                        <Link
                          href={`/locations/${loc.slug}`}
                          className="inline-flex items-center gap-1.5 sm:gap-2 bg-[#1E3A5F] group-hover:bg-[#E07A2F] text-white font-semibold text-[11px] sm:text-sm px-3 py-1.5 sm:px-5 sm:py-2.5 rounded-lg transition-colors shadow-xs w-full sm:w-auto justify-center"
                        >
                          <span>Explore {loc.name}</span>
                          <FaArrowRight className="text-[9px] sm:text-[10px]" />
                        </Link>
                        <span className="text-xs text-[#64748B] font-medium hidden lg:inline">
                          Full Guide &amp; Listings
                        </span>
                      </div>
                    </div>
                  </div>
                </AnimatedCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 3. COMPARISON & TRANSIT OVERVIEW SECTION */}
      <section className="py-16 lg:py-20 bg-[#F1F5F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <FadeInUp>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-[#E07A2F] text-sm font-semibold uppercase tracking-wider">Comparative Insights</span>
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#172033] mt-2 mb-4"
                style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}
              >
                Choosing the Right Mountain Location
              </h2>
              <p className="text-[#64748B] text-sm sm:text-base leading-relaxed">
                Compare primary parameters across Mashobra, Shimla, Kufri, and Naldehra to evaluate which environment fits your needs.
              </p>
            </div>
          </FadeInUp>

          <div className="max-w-5xl mx-auto overflow-x-auto bg-white rounded-2xl border border-[#E2E8F0] shadow-sm">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-[#1E3A5F] text-white border-b border-[#1E3A5F]">
                  <th className="p-4 font-bold">Location</th>
                  <th className="p-4 font-bold">Elevation</th>
                  <th className="p-4 font-bold">Distance from Shimla</th>
                  <th className="p-4 font-bold">Character &amp; Atmosphere</th>
                  <th className="p-4 font-bold">Primary Property Focus</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2E8F0]">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-bold text-[#1E3A5F]">
                    <Link href="/locations/mashobra" className="hover:text-[#E07A2F] underline decoration-dotted">
                      Mashobra
                    </Link>
                  </td>
                  <td className="p-4 text-[#64748B]">2,146 m (7,041 ft)</td>
                  <td className="p-4 text-[#64748B]">13 km East (30–40 min)</td>
                  <td className="p-4 text-[#64748B]">Tranquil cedar forest village, pristine air</td>
                  <td className="p-4 font-medium text-[#172033]">Luxury Villas &amp; Second Homes</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-bold text-[#1E3A5F]">
                    <Link href="/locations/shimla" className="hover:text-[#E07A2F] underline decoration-dotted">
                      Shimla
                    </Link>
                  </td>
                  <td className="p-4 text-[#64748B]">2,206 m (7,238 ft)</td>
                  <td className="p-4 text-[#64748B]">Capital Centre</td>
                  <td className="p-4 text-[#64748B]">Historic colonial city, bustling infrastructure</td>
                  <td className="p-4 font-medium text-[#172033]">Apartments &amp; City Residences</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-bold text-[#1E3A5F]">
                    <Link href="/locations/kufri" className="hover:text-[#E07A2F] underline decoration-dotted">
                      Kufri
                    </Link>
                  </td>
                  <td className="p-4 text-[#64748B]">2,622 m (8,602 ft)</td>
                  <td className="p-4 text-[#64748B]">16 km East (40 min)</td>
                  <td className="p-4 text-[#64748B]">High-altitude alpine resort, heavy snow</td>
                  <td className="p-4 font-medium text-[#172033]">Holiday Homes &amp; Mountain Chalets</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-bold text-[#1E3A5F]">
                    <Link href="/locations/naldehra" className="hover:text-[#E07A2F] underline decoration-dotted">
                      Naldehra
                    </Link>
                  </td>
                  <td className="p-4 text-[#64748B]">2,044 m (6,706 ft)</td>
                  <td className="p-4 text-[#64748B]">22 km North (50 min)</td>
                  <td className="p-4 text-[#64748B]">Historic 1905 golf course, open cedar glades</td>
                  <td className="p-4 font-medium text-[#172033]">Golf Chalets &amp; Secluded Country Villas</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4. FAQ SECTION */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeInUp>
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-[#E07A2F] text-sm font-semibold uppercase tracking-wider">FAQ</span>
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#172033] mt-2 mb-3"
                style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}
              >
                Frequently Asked Questions
              </h2>
              <p className="text-[#64748B] text-sm sm:text-base">
                Common questions about selecting the right mountain location near Shimla.
              </p>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.1}>
            <FAQAccordion faqs={locationsFaqs} />
          </FadeInUp>
        </div>
      </section>

      {/* 5. BOTTOM LEAD CTA */}
      <section className="py-16 lg:py-20 bg-[#1E3A5F] text-white overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <FadeInUp>
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4"
              style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}
            >
              Need Guidance on the Best Location for You?
            </h2>
            <p className="text-white/80 text-base sm:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Our regional property specialists can help you evaluate climate, road access, and legal parameters across Mashobra, Shimla, Kufri, and Naldehra.
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

            <div className="flex flex-wrap justify-center gap-4">
              <EnquireModalButton
                source="locations-page-bottom"
                title="Request Location Consultation"
                subtitle="Share your preferred configuration and budget to receive personalized property brochures."
                className="flex items-center gap-2 bg-[#E07A2F] text-white font-bold px-8 py-3.5 rounded-xl hover:bg-[#c96b22] hover:scale-102 transition-all cursor-pointer shadow-lg"
              >
                <span>Request Consultation</span>
                <FaArrowRight className="text-xs" />
              </EnquireModalButton>
              <a
                href="tel:+91"
                className="flex items-center gap-2 border border-white/30 text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-white/10 hover:border-white/50 transition-all backdrop-blur-xs"
              >
                <FaPhoneAlt className="text-xs" />
                <span>Call Our Specialists</span>
              </a>
            </div>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
