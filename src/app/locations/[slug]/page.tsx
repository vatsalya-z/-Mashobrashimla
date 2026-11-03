// src/app/locations/[slug]/page.tsx
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { 
  FaArrowRight, 
  FaMapMarkerAlt, 
  FaClock, 
  FaCompass, 
  FaMountain, 
  FaTree, 
  FaHome, 
  FaPhoneAlt, 
  FaShieldAlt, 
  FaCheckCircle 
} from 'react-icons/fa';
import { locations, getLocationBySlug } from '@/lib/data/locations';
import { getPropertiesByLocation } from '@/lib/data/properties';
import { getBlogBySlug, blogPosts } from '@/lib/data/blog';
import PropertyCard from '@/components/ui/PropertyCard';
import FAQAccordion from '@/components/ui/FAQAccordion';
import EnquireModalButton from '@/components/ui/EnquireModalButton';
import LocationGallery from '@/components/gallery/LocationGallery';
import JsonLd, { breadcrumbSchema, faqSchema } from '@/components/seo/JsonLd';
import { FadeInUp, StaggerContainer, StaggerItem, AnimatedCard } from '@/components/motion/MotionComponents';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) return { title: 'Location Not Found' };

  const locationSeo: Record<string, { title: string; description: string }> = {
    mashobra: {
      title: 'Properties in Mashobra | Real Estate & Mountain Living',
      description: 'Discover premium real estate, luxury mountain villas, and residential property opportunities in Mashobra, Shimla amidst virgin Deodar cedar forests.',
    },
    shimla: {
      title: 'Properties in Shimla | Explore Residential Property Opportunities',
      description: 'Explore residential property opportunities and luxury mountain homes in Shimla, Himachal Pradesh. Verified listings, area connectivity, and property advisory.',
    },
    kufri: {
      title: 'Properties in Kufri | Explore Property Opportunities',
      description: 'Discover alpine residential properties and mountain homes in Kufri, Shimla at 2,622m elevation. Winter snowfall living and Himalayan views.',
    },
    naldehra: {
      title: 'Properties in Naldehra | Explore Mountain Properties',
      description: 'Explore serene golf-side retreats, luxury villas, and mountain properties in Naldehra, Shimla surrounded by ancient Deodar cedar reserves.',
    },
  };

  const currentSeo = locationSeo[slug] || {
    title: `${location.h1} | The Ridge Mashobra`,
    description: `Discover luxury villas and residential properties in ${location.name}, Himachal Pradesh. ${location.tagline}.`,
  };

  return {
    title: currentSeo.title,
    description: currentSeo.description,
    alternates: { canonical: `https://mashobrashimla.com/locations/${slug}` },
    openGraph: {
      title: currentSeo.title,
      description: currentSeo.description,
      images: [{ url: `https://mashobrashimla.com${location.image}`, width: 1200, height: 630 }],
    },
  };
}

export default async function LocationDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) notFound();

  // Related properties
  const locationProperties = getPropertiesByLocation(location.name);

  // Related blogs
  const relatedBlogs = (location.relatedBlogSlugs || [])
    .map((s) => getBlogBySlug(s))
    .filter((b): b is NonNullable<typeof b> => Boolean(b));

  const fallbackBlogs = relatedBlogs.length >= 3 ? relatedBlogs : [
    ...relatedBlogs,
    ...blogPosts.filter((b) => !relatedBlogs.some((rb) => rb.slug === b.slug)).slice(0, 3 - relatedBlogs.length),
  ];

  // Gallery images with captions
  const galleryItems = (location.gallery && location.gallery.length > 0 ? location.gallery : [location.image]).map((img, i) => ({
    src: img,
    alt: `${location.name} mountain landscape view ${i + 1}`,
    caption: `${location.name} Scenic Panorama ${i + 1}`,
  }));

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: 'Home', url: 'https://mashobrashimla.com' },
            { name: 'Locations', url: 'https://mashobrashimla.com/locations' },
            { name: location.name, url: `https://mashobrashimla.com/locations/${slug}` },
          ]),
          ...(location.faqs && location.faqs.length > 0 ? [faqSchema(location.faqs)] : []),
        ]}
      />

      {/* 1. HERO SECTION */}
      <section className="relative w-full min-h-[520px] sm:min-h-[580px] lg:min-h-[660px] flex items-center justify-center overflow-hidden">
        <Image
          src={location.image}
          alt={`${location.name}, Himachal Pradesh – mountain residential location`}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />

        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center">

          <span className="text-[#E07A2F] text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2">
            Location Guide &amp; Real Estate
          </span>

          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight max-w-4xl"
            style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}
          >
            {location.h1}
          </h1>

          <p className="text-white/85 text-base sm:text-lg max-w-2xl mx-auto mb-8 font-light leading-relaxed">
            {location.tagline}
          </p>

          {/* Location Quick Stats Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 w-full max-w-3xl mx-auto mb-8">
            <div className="bg-white/10 backdrop-blur-xs border border-white/15 rounded-xl p-3 text-center">
              <div className="text-[#E07A2F] text-lg sm:text-xl font-bold">{location.elevation}</div>
              <div className="text-[11px] sm:text-xs text-white/70 mt-0.5">Elevation</div>
            </div>
            <div className="bg-white/10 backdrop-blur-xs border border-white/15 rounded-xl p-3 text-center">
              <div className="text-white text-lg sm:text-xl font-bold">{location.distanceFromShimla}</div>
              <div className="text-[11px] sm:text-xs text-white/70 mt-0.5">Shimla Proximity</div>
            </div>
            <div className="bg-white/10 backdrop-blur-xs border border-white/15 rounded-xl p-3 text-center">
              <div className="text-[#E07A2F] text-lg sm:text-xl font-bold">&lt; 30 AQI</div>
              <div className="text-[11px] sm:text-xs text-white/70 mt-0.5">Pristine Air Quality</div>
            </div>
            <div className="bg-white/10 backdrop-blur-xs border border-white/15 rounded-xl p-3 text-center">
              <div className="text-white text-lg sm:text-xl font-bold">12 Months</div>
              <div className="text-[11px] sm:text-xs text-white/70 mt-0.5">Road Accessibility</div>
            </div>
          </div>

          {/* Hero CTAs */}
          <div className="flex flex-wrap justify-center items-center gap-4">
            <EnquireModalButton
              source={`location-hero-${location.slug}`}
              title={`Enquire About Properties in ${location.name}`}
              subtitle={`Connect with our property consultants to explore villas, apartments, and estates in ${location.name}.`}
              className="inline-flex items-center gap-2 bg-[#E07A2F] text-white font-bold text-sm sm:text-base px-8 py-3.5 rounded-xl hover:bg-[#c96b22] hover:scale-102 transition-all shadow-lg cursor-pointer"
            >
              <span>Enquire Now</span>
              <FaArrowRight className="text-xs" />
            </EnquireModalButton>
            <a
              href="#property-types"
              className="inline-flex items-center gap-2 bg-white/15 text-white font-semibold text-sm sm:text-base px-7 py-3.5 rounded-xl hover:bg-white/25 transition-all backdrop-blur-xs border border-white/20"
            >
              <span>Explore Property Types</span>
            </a>
          </div>
        </div>
      </section>

      {/* Contextual Link to The Ridge Mashobra (Displayed on Mashobra page) */}
      {location.slug === 'mashobra' && (
        <section className="bg-gradient-to-r from-[#1E3A5F] to-[#152a45] text-white py-6 border-y border-[#E2E8F0]/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-center md:text-left">
              <div className="w-10 h-10 rounded-full bg-[#E07A2F]/20 flex items-center justify-center flex-shrink-0 text-[#E07A2F]">
                <FaHome className="text-lg" />
              </div>
              <div>
                <span className="text-[#E07A2F] text-xs font-bold uppercase tracking-wider">Featured Mountain Project</span>
                <h3 className="text-lg sm:text-xl font-bold" style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}>
                  The Ridge Mashobra – Exclusive 3 &amp; 4 BHK Luxury Mountain Villas
                </h3>
                <p className="text-white/70 text-xs sm:text-sm">
                  Looking specifically for The Ridge Mashobra project? View dedicated site details, architecture, amenities and master layouts.
                </p>
              </div>
            </div>
            <Link
              href="/the-ridge-mashobra"
              className="inline-flex items-center gap-2 bg-[#E07A2F] hover:bg-[#c96b22] text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-lg transition-all shadow-md flex-shrink-0"
            >
              <span>Explore The Ridge Mashobra</span>
              <FaArrowRight className="text-xs" />
            </Link>
          </div>
        </section>
      )}

      {/* 2. LOCATION OVERVIEW */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <FadeInUp>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-[#E07A2F] text-sm font-semibold uppercase tracking-wider">Overview</span>
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#172033] mt-2 mb-4"
                style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}
              >
                Discover {location.name}
              </h2>
              <p className="text-[#64748B] text-base sm:text-lg leading-relaxed">
                {location.description.split('\n\n')[0]}
              </p>
            </div>
          </FadeInUp>

          {location.overviewNarrative && (
            <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-5">
              <StaggerItem>
                <AnimatedCard className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-3 sm:p-6 h-full text-center flex flex-col items-center">
                  <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl bg-[#1E3A5F]/10 flex items-center justify-center text-[#1E3A5F] mb-2 sm:mb-4">
                    <FaCompass className="text-sm sm:text-xl" />
                  </div>
                  <h3 className="font-bold text-[#172033] text-xs sm:text-base mb-1 sm:mb-2" style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}>
                    Geographical Setting
                  </h3>
                  <p className="text-[11px] sm:text-sm text-[#64748B] leading-relaxed">
                    {location.overviewNarrative.geo}
                  </p>
                </AnimatedCard>
              </StaggerItem>

              <StaggerItem>
                <AnimatedCard className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-3 sm:p-6 h-full text-center flex flex-col items-center">
                  <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl bg-[#1E3A5F]/10 flex items-center justify-center text-[#1E3A5F] mb-2 sm:mb-4">
                    <FaTree className="text-sm sm:text-xl" />
                  </div>
                  <h3 className="font-bold text-[#172033] text-xs sm:text-base mb-1 sm:mb-2" style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}>
                    Natural Surroundings
                  </h3>
                  <p className="text-[11px] sm:text-sm text-[#64748B] leading-relaxed">
                    {location.overviewNarrative.nature}
                  </p>
                </AnimatedCard>
              </StaggerItem>

              <StaggerItem>
                <AnimatedCard className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-3 sm:p-6 h-full text-center flex flex-col items-center">
                  <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl bg-[#1E3A5F]/10 flex items-center justify-center text-[#1E3A5F] mb-2 sm:mb-4">
                    <FaMountain className="text-sm sm:text-xl" />
                  </div>
                  <h3 className="font-bold text-[#172033] text-xs sm:text-base mb-1 sm:mb-2" style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}>
                    Mountain Lifestyle
                  </h3>
                  <p className="text-[11px] sm:text-sm text-[#64748B] leading-relaxed">
                    {location.overviewNarrative.lifestyle}
                  </p>
                </AnimatedCard>
              </StaggerItem>

              <StaggerItem>
                <AnimatedCard className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-3 sm:p-6 h-full text-center flex flex-col items-center">
                  <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl bg-[#1E3A5F]/10 flex items-center justify-center text-[#1E3A5F] mb-2 sm:mb-4">
                    <FaHome className="text-sm sm:text-xl" />
                  </div>
                  <h3 className="font-bold text-[#172033] text-xs sm:text-base mb-1 sm:mb-2" style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}>
                    Residential Environment
                  </h3>
                  <p className="text-[11px] sm:text-sm text-[#64748B] leading-relaxed">
                    {location.overviewNarrative.residential}
                  </p>
                </AnimatedCard>
              </StaggerItem>
            </StaggerContainer>
          )}
        </div>
      </section>

      {/* 3. ABOUT THE LOCATION */}
      <section className="py-16 lg:py-20 bg-[#F1F5F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <FadeInUp>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-[#E07A2F] text-sm font-semibold uppercase tracking-wider">Local Environment &amp; Heritage</span>
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#172033] mt-2 mb-4"
                style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}
              >
                About {location.name}
              </h2>
              <p className="text-[#64748B] text-sm sm:text-base leading-relaxed">
                Explore the unique topography, climate, and residential character that distinguish {location.name} from other mountain destinations.
              </p>
            </div>
          </FadeInUp>

          {location.aboutNarrative && (
            <div className="grid grid-cols-2 md:grid-cols-2 gap-2.5 sm:gap-6 max-w-5xl mx-auto mb-8 sm:mb-10">
              <div className="bg-white rounded-xl border border-[#E2E8F0] p-3.5 sm:p-6 shadow-xs">
                <span className="text-[10px] sm:text-xs font-bold text-[#E07A2F] uppercase tracking-wider">Topography &amp; Vegetation</span>
                <h3 className="text-xs sm:text-lg font-bold text-[#172033] mt-1 mb-1.5 sm:mb-2" style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}>
                  Natural Environment
                </h3>
                <p className="text-[11px] sm:text-sm text-[#64748B] leading-relaxed">
                  {location.aboutNarrative.environment}
                </p>
              </div>

              <div className="bg-white rounded-xl border border-[#E2E8F0] p-3.5 sm:p-6 shadow-xs">
                <span className="text-[10px] sm:text-xs font-bold text-[#E07A2F] uppercase tracking-wider">Seasonal Characteristics</span>
                <h3 className="text-xs sm:text-lg font-bold text-[#172033] mt-1 mb-1.5 sm:mb-2" style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}>
                  Climate &amp; Weather
                </h3>
                <p className="text-[11px] sm:text-sm text-[#64748B] leading-relaxed">
                  {location.aboutNarrative.climate}
                </p>
              </div>

              <div className="bg-white rounded-xl border border-[#E2E8F0] p-3.5 sm:p-6 shadow-xs">
                <span className="text-[10px] sm:text-xs font-bold text-[#E07A2F] uppercase tracking-wider">Vistas &amp; Ridges</span>
                <h3 className="text-xs sm:text-lg font-bold text-[#172033] mt-1 mb-1.5 sm:mb-2" style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}>
                  Mountain Landscape
                </h3>
                <p className="text-[11px] sm:text-sm text-[#64748B] leading-relaxed">
                  {location.aboutNarrative.landscape}
                </p>
              </div>

              <div className="bg-white rounded-xl border border-[#E2E8F0] p-3.5 sm:p-6 shadow-xs">
                <span className="text-[10px] sm:text-xs font-bold text-[#E07A2F] uppercase tracking-wider">Wellness &amp; Leisure</span>
                <h3 className="text-xs sm:text-lg font-bold text-[#172033] mt-1 mb-1.5 sm:mb-2" style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}>
                  Lifestyle Opportunities
                </h3>
                <p className="text-[11px] sm:text-sm text-[#64748B] leading-relaxed">
                  {location.aboutNarrative.lifestyleOpportunities}
                </p>
              </div>
            </div>
          )}

          {/* Feature Image */}
          <div className="max-w-5xl mx-auto">
            <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden shadow-lg border border-[#E2E8F0]">
              <Image
                src={(location.gallery && location.gallery[1]) ? location.gallery[1] : location.image}
                alt={`${location.name} landscape panorama`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 1200px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. CONNECTIVITY AND NEARBY PLACES */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <FadeInUp>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-[#E07A2F] text-sm font-semibold uppercase tracking-wider">Connectivity &amp; Transit</span>
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#172033] mt-2 mb-4"
                style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}
              >
                Connectivity &amp; Nearby Destinations
              </h2>
              <p className="text-[#64748B] text-sm sm:text-base leading-relaxed">
                Verified road distances, transit times, and transport links connecting {location.name} to major regional centers.
              </p>
            </div>
          </FadeInUp>

          {location.connectivityItems && (
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-6 max-w-5xl mx-auto mb-8 sm:mb-10">
              {location.connectivityItems.map((item) => (
                <div key={item.destination} className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-3 sm:p-5 hover:border-[#1E3A5F]/30 transition-colors">
                  <div className="flex items-start justify-between mb-1.5 sm:mb-2">
                    <div className="flex items-center gap-1.5 sm:gap-2 text-[#1E3A5F] font-bold text-xs sm:text-base">
                      <FaMapMarkerAlt className="text-[#E07A2F] text-xs flex-shrink-0" />
                      <span className="line-clamp-1">{item.destination}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-4 text-[10px] sm:text-xs font-semibold text-[#172033] mb-1.5 sm:mb-2">
                    <span className="bg-[#E07A2F]/10 text-[#E07A2F] px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded">
                      {item.distance}
                    </span>
                    <span className="flex items-center gap-1 text-[#64748B]">
                      <FaClock className="text-[10px] sm:text-xs" /> {item.travelTime}
                    </span>
                  </div>
                  {item.route && (
                    <div className="text-[10px] sm:text-xs text-[#64748B] mt-1 pt-1.5 sm:pt-2 border-t border-[#E2E8F0]/60 line-clamp-2">
                      {item.route}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Landmarks Chips */}
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#64748B] mb-3">Key Landmarks in this Belt</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {location.landmarks.map((landmark) => (
                <span
                  key={landmark}
                  className="bg-[#F1F5F9] text-[#172033] text-xs font-medium px-3.5 py-1.5 rounded-full border border-[#E2E8F0]"
                >
                  📍 {landmark}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. WHY EXPLORE PROPERTIES HERE? */}
      <section className="py-16 lg:py-20 bg-[#F1F5F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <FadeInUp>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-[#E07A2F] text-sm font-semibold uppercase tracking-wider">Lifestyle Advantages</span>
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#172033] mt-2 mb-4"
                style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}
              >
                Why Explore Properties in {location.name}?
              </h2>
              <p className="text-[#64748B] text-sm sm:text-base leading-relaxed">
                Objective insights on residential environment, accessibility, and lifestyle benefits for property buyers.
              </p>
            </div>
          </FadeInUp>

          {location.whyExploreReasons && (
            <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-5 max-w-6xl mx-auto mb-8">
              {location.whyExploreReasons.map((reason, idx) => (
                <StaggerItem key={idx}>
                  <AnimatedCard className="bg-white border border-[#E2E8F0] rounded-xl p-3 sm:p-6 h-full text-center flex flex-col items-center shadow-xs">
                    <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl bg-[#E07A2F]/10 flex items-center justify-center text-[#E07A2F] mb-2 sm:mb-4">
                      <FaCheckCircle className="text-sm sm:text-xl" />
                    </div>
                    <h3 className="font-bold text-[#172033] text-xs sm:text-base mb-1 sm:mb-2" style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}>
                      {reason.title}
                    </h3>
                    <p className="text-[11px] sm:text-sm text-[#64748B] leading-relaxed">
                      {reason.description}
                    </p>
                  </AnimatedCard>
                </StaggerItem>
              ))}
            </StaggerContainer>
          )}

          {/* Informational Disclaimer Box */}
          <div className="max-w-3xl mx-auto text-center bg-white/70 border border-[#CBD5E1] rounded-xl p-4 text-xs text-[#64748B] leading-relaxed">
            <strong>Buyer Advisory:</strong> Real estate in mountain locations involves specific topography, local regulations (such as Section 118 of the HP Tenancy and Land Reforms Act), and seasonal considerations. We encourage all buyers to conduct independent verification of titles and approvals before entering into any transaction.
          </div>
        </div>
      </section>

      {/* 6. PROPERTY TYPES */}
      <section id="property-types" className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <FadeInUp>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-[#E07A2F] text-sm font-semibold uppercase tracking-wider">Property Categories</span>
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#172033] mt-2 mb-4"
                style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}
              >
                Property Types in {location.name}
              </h2>
              <p className="text-[#64748B] text-sm sm:text-base leading-relaxed">
                Explore the primary residential property categories available across the {location.name} corridor.
              </p>
            </div>
          </FadeInUp>

          {location.propertyTypesList && (
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-6 max-w-6xl mx-auto mb-8 sm:mb-12">
              {location.propertyTypesList.map((pt) => (
                <div key={pt.title} className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-3 sm:p-6 hover:shadow-md transition-shadow flex flex-col justify-between">
                  <div>
                    <div className="inline-block bg-[#1E3A5F] text-white text-[9px] sm:text-[11px] font-semibold px-2 py-0.5 sm:px-2.5 sm:py-1 rounded mb-2 sm:mb-3">
                      {pt.badge}
                    </div>
                    <h3 className="font-bold text-[#172033] text-xs sm:text-lg mb-1 sm:mb-2 line-clamp-1 sm:line-clamp-none" style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}>
                      {pt.title}
                    </h3>
                    <p className="text-[11px] sm:text-sm text-[#64748B] leading-relaxed line-clamp-3 sm:line-clamp-none">
                      {pt.description}
                    </p>
                  </div>
                  <div className="mt-3 sm:mt-5 pt-2.5 sm:pt-4 border-t border-[#E2E8F0]">
                    <EnquireModalButton
                      source={`prop-type-${location.slug}-${pt.title.toLowerCase().replace(/\s+/g, '-')}`}
                      title={`Enquire: ${pt.title} in ${location.name}`}
                      subtitle={`Request availability, layout options, and verified details for ${pt.title.toLowerCase()} in ${location.name}.`}
                      className="text-[10px] sm:text-xs font-bold text-[#1E3A5F] hover:text-[#E07A2F] inline-flex items-center gap-1 sm:gap-1.5 transition-colors cursor-pointer"
                    >
                      <span className="truncate">Enquire {pt.title}</span>
                      <FaArrowRight className="text-[8px] sm:text-[10px] flex-shrink-0" />
                    </EnquireModalButton>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Actual Verified Property Listings for Location (e.g. Mashobra) */}
          {locationProperties.length > 0 && (
            <div className="mt-8 pt-8 border-t border-[#E2E8F0]">
              <div className="text-center max-w-2xl mx-auto mb-8">
                <span className="text-[#E07A2F] text-xs font-semibold uppercase tracking-wider">Current Listings</span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#172033] mt-1" style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}>
                  Featured Properties in {location.name}
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {locationProperties.map((prop) => (
                  <PropertyCard key={prop.id} property={prop} />
                ))}
              </div>
            </div>
          )}

          {/* Contextual Internal Links based on Location */}
          {location.slug === 'mashobra' && (
            <div className="mt-10 p-6 sm:p-8 bg-gradient-to-r from-[#1E3A5F] to-[#152a45] rounded-2xl text-white flex flex-col sm:flex-row items-center justify-between gap-5 shadow-lg max-w-6xl mx-auto">
              <div>
                <span className="bg-[#E07A2F] text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider inline-block mb-2">
                  Featured Master Enclave
                </span>
                <h4 className="text-xl sm:text-2xl font-bold mb-1.5" style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}>
                  The Ridge Mashobra
                </h4>
                <p className="text-white/80 text-xs sm:text-sm max-w-xl leading-relaxed">
                  Discover 11.5+ acres of luxury hillside chateaus, 25,000 sq. ft. high-altitude clubhouse, and EVAVO longevity wellness in the heart of Mashobra.
                </p>
              </div>
              <Link
                href="/the-ridge-mashobra"
                className="inline-flex items-center gap-2 bg-[#E07A2F] text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-xl hover:bg-[#c96b22] hover:scale-102 transition-all whitespace-nowrap shadow-md"
              >
                <span>Explore The Ridge Mashobra</span>
                <FaArrowRight className="text-xs" />
              </Link>
            </div>
          )}

          {location.slug === 'shimla' && (
            <div className="mt-10 p-6 bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl text-center max-w-4xl mx-auto">
              <h4 className="text-lg font-bold text-[#172033] mb-2" style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}>
                Looking for Verified Properties in Shimla Hills?
              </h4>
              <p className="text-xs sm:text-sm text-[#64748B] mb-4 max-w-xl mx-auto">
                Explore our full portfolio of 3 BHK &amp; 4 BHK mountain villas, second homes, and estates across the greater Shimla district.
              </p>
              <Link
                href="/properties"
                className="inline-flex items-center gap-2 bg-[#1E3A5F] text-white text-xs sm:text-sm font-bold px-6 py-2.5 rounded-xl hover:bg-[#152a45] transition-colors shadow-xs"
              >
                <span>Browse All Available Properties</span>
                <FaArrowRight className="text-xs" />
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* 7. LOCATION GALLERY */}
      <section className="py-16 lg:py-20 bg-[#F1F5F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <FadeInUp>
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="text-[#E07A2F] text-sm font-semibold uppercase tracking-wider">Visual Showcase</span>
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#172033] mt-2 mb-4"
                style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}
              >
                {location.name} Gallery
              </h2>
              <p className="text-[#64748B] text-sm sm:text-base leading-relaxed">
                Click any image to expand and view high-definition landscape photographs of {location.name}.
              </p>
            </div>
          </FadeInUp>

          <div className="max-w-6xl mx-auto">
            <LocationGallery images={galleryItems} locationName={location.name} />
          </div>
        </div>
      </section>

      {/* 8. THINGS TO EXPLORE NEARBY */}
      {location.attractionsList && location.attractionsList.length > 0 && (
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <FadeInUp>
              <div className="text-center max-w-3xl mx-auto mb-12">
                <span className="text-[#E07A2F] text-sm font-semibold uppercase tracking-wider">Attractions</span>
                <h2
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#172033] mt-2 mb-4"
                  style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}
                >
                  Things to Explore in &amp; Around {location.name}
                </h2>
                <p className="text-[#64748B] text-sm sm:text-base leading-relaxed">
                  Verified historic landmarks, natural parks, and cultural attractions located within convenient reach.
                </p>
              </div>
            </FadeInUp>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6 max-w-6xl mx-auto">
              {location.attractionsList.map((attraction) => (
                <div key={attraction.name} className="group bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl overflow-hidden hover:shadow-md transition-shadow flex flex-col">
                  {attraction.image && (
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={attraction.image}
                        alt={attraction.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 50vw, 25vw"
                      />
                    </div>
                  )}
                  <div className="p-2.5 sm:p-4 flex flex-col flex-1 justify-between">
                    <div>
                      {attraction.distance && (
                        <span className="text-[10px] sm:text-[11px] font-semibold text-[#E07A2F] block mb-1">
                          📍 {attraction.distance}
                        </span>
                      )}
                      <h3 className="font-bold text-[#172033] text-xs sm:text-base mb-1 sm:mb-1.5 line-clamp-1" style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}>
                        {attraction.name}
                      </h3>
                      <p className="text-[11px] sm:text-xs text-[#64748B] leading-relaxed line-clamp-2 sm:line-clamp-none">
                        {attraction.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 9. FREQUENTLY ASKED QUESTIONS */}
      {location.faqs && location.faqs.length > 0 && (
        <section className="py-16 lg:py-20 bg-[#F1F5F9]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <FadeInUp>
              <div className="text-center max-w-2xl mx-auto mb-10">
                <span className="text-[#E07A2F] text-sm font-semibold uppercase tracking-wider">Search FAQ</span>
                <h2
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#172033] mt-2 mb-3"
                  style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}
                >
                  Frequently Asked Questions
                </h2>
                <p className="text-[#64748B] text-sm sm:text-base">
                  Common questions regarding real estate discovery, legal approvals, and mountain living in {location.name}.
                </p>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.1}>
              <FAQAccordion faqs={location.faqs} />
            </FadeInUp>
          </div>
        </section>
      )}

      {/* 10. RELATED BLOGS */}
      {fallbackBlogs.length > 0 && (
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <FadeInUp>
              <div className="text-center max-w-2xl mx-auto mb-12">
                <span className="text-[#E07A2F] text-sm font-semibold uppercase tracking-wider">Insights &amp; Guides</span>
                <h2
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#172033] mt-2 mb-3"
                  style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}
                >
                  Related Guides for {location.name}
                </h2>
                <p className="text-[#64748B] text-sm sm:text-base">
                  Expert advice and lifestyle articles regarding real estate in {location.name} and the greater Shimla district.
                </p>
              </div>
            </FadeInUp>

            <StaggerContainer className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-6 max-w-6xl mx-auto">
              {fallbackBlogs.slice(0, 3).map((post) => (
                <StaggerItem key={post.id}>
                  <AnimatedCard className="h-full">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="group bg-white rounded-xl border border-[#E2E8F0] overflow-hidden hover:shadow-xl transition-all duration-300 block h-full flex flex-col"
                    >
                      <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      </div>
                      <div className="p-2.5 sm:p-5 flex flex-col flex-1 justify-between">
                        <div>
                          <div className="flex items-center justify-between text-[10px] sm:text-xs mb-1 sm:mb-2">
                            <span className="text-[#E07A2F] font-semibold truncate">{post.category}</span>
                            <span className="text-[#64748B] hidden sm:inline">{post.readTime}</span>
                          </div>
                          <h3 className="font-semibold text-[#172033] text-xs sm:text-base mt-0.5 sm:mt-1 mb-1 sm:mb-2 line-clamp-2 group-hover:text-[#1E3A5F] transition-colors leading-snug" style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}>
                            {post.title}
                          </h3>
                          <p className="text-[11px] sm:text-xs text-[#64748B] line-clamp-2 leading-relaxed">
                            {post.excerpt}
                          </p>
                        </div>
                        <div className="mt-2.5 sm:mt-4 pt-2 sm:pt-3 border-t border-[#E2E8F0] flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-xs font-semibold text-[#1E3A5F] group-hover:text-[#E07A2F] transition-colors">
                          <span>Read Full Article</span>
                          <FaArrowRight className="text-[8px] sm:text-[10px]" />
                        </div>
                      </div>
                    </Link>
                  </AnimatedCard>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      )}

      {/* 11. ENQUIRY CTA */}
      <section className="py-16 lg:py-20 bg-[#1E3A5F] text-white overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <FadeInUp>
            <span className="text-[#E07A2F] text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2 inline-block">
              Connect With Local Specialists
            </span>
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4"
              style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}
            >
              Looking for Property in {location.name}?
            </h2>
            <p className="text-white/80 text-base sm:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Connect with our team to explore property options and get information based on your requirements.
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
                source={`location-bottom-cta-${location.slug}`}
                title={`Enquire About Properties in ${location.name}`}
                subtitle="Share your preferred configuration and budget to receive verified property brochures and availability."
                className="flex items-center gap-2 bg-[#E07A2F] text-white font-bold px-8 py-3.5 rounded-xl hover:bg-[#c96b22] hover:scale-102 transition-all cursor-pointer shadow-lg"
              >
                <span>Enquire Now</span>
                <FaArrowRight className="text-xs" />
              </EnquireModalButton>
              <a
                href="tel:+91"
                className="flex items-center gap-2 border border-white/30 text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-white/10 hover:border-white/50 transition-all backdrop-blur-xs"
              >
                <FaPhoneAlt className="text-xs" />
                <span>Request a Callback</span>
              </a>
            </div>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
