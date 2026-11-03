// src/app/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { 
  FaArrowRight, 
  FaMountain, 
  FaTree, 
  FaMapMarkerAlt, 
  FaHome, 
  FaStar, 
  FaPhoneAlt 
} from 'react-icons/fa';
import PropertyCard from '@/components/ui/PropertyCard';
import HomeHero from '@/components/home/HomeHero';
import ProjectGallery from '@/components/gallery/ProjectGallery';
import RidgeProjectSections from '@/components/home/RidgeProjectSections';
import EnquireModalButton from '@/components/ui/EnquireModalButton';
import { 
  FadeInUp, 
  StaggerContainer, 
  StaggerItem, 
  AnimatedCard 
} from '@/components/motion/MotionComponents';
import { properties } from '@/lib/data/properties';
import { blogPosts } from '@/lib/data/blog';
import { websiteImages } from '@/lib/images';
import JsonLd, { faqSchema } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Luxury Villas & Properties in Mashobra, Shimla | The Ridge Mashobra',
  description:
    'Discover luxury villas and premium residential properties in Mashobra, Shimla. Explore 3 BHK and 4 BHK mountain homes with Himalayan views. Enquire now for The Ridge Mashobra.',
  alternates: { canonical: 'https://mashobrashimla.com' },
  openGraph: {
    title: 'The Ridge Mashobra – Luxury Villas in Mashobra, Shimla',
    description:
      'Premium residential properties and luxury villas in Mashobra, Shimla, Himachal Pradesh. Mountain lifestyle with Himalayan views.',
    images: [{ url: 'https://mashobrashimla.com/images/og-home.jpg', width: 1200, height: 630 }],
  },
};

const whyMashobra = [
  {
    icon: FaMountain,
    title: 'Himalayan Views',
    desc: 'Wake up to panoramic views of the Himalayan ranges from your private balcony every morning.',
  },
  {
    icon: FaTree,
    title: 'Deodar Forests',
    desc: 'Surrounded by ancient Deodar cedar forests that provide natural serenity and clean mountain air.',
  },
  {
    icon: FaMapMarkerAlt,
    title: 'Well Connected',
    desc: 'Just 13 km from Shimla city centre – peaceful mountain living with urban conveniences close by.',
  },
  {
    icon: FaHome,
    title: 'Premium Residences',
    desc: 'Thoughtfully designed 3 BHK and 4 BHK villas crafted for families and premium property buyers.',
  },
];

const categories = [
  { label: 'Luxury Villas', href: '/luxury-villas-mashobra', icon: '🏡' },
  { label: '3 BHK Villas', href: '/3-bhk-villas-mashobra', icon: '🛏️' },
  { label: '4 BHK Villas', href: '/4-bhk-villas-mashobra', icon: '🛏️' },
  { label: 'Second Homes', href: '/luxury-second-homes', icon: '🏔️' },
  { label: 'Holiday Homes', href: '/holiday-homes-himachal', icon: '🌲' },
  { label: 'Premium Mountain Homes', href: '/properties', icon: '⛰️' },
];

const locationCards = [
  { name: 'Mashobra', desc: 'The most desirable residential village near Shimla', href: '/locations/mashobra', img: websiteImages.locations.mashobraForest.src },
  { name: 'Shimla', desc: 'Queen of Hill Stations with excellent urban infrastructure', href: '/locations/shimla', img: websiteImages.locations.shimlaMorning.src },
  { name: 'Kufri', desc: 'Premier mountain retreat with spectacular alpine scenery', href: '/locations/kufri', img: websiteImages.locations.pineForest.src },
  { name: 'Naldehra', desc: "India's oldest golf course amid pristine Deodar forests", href: '/locations/naldehra', img: websiteImages.locations.mountainRoad.src },
];

const faqs = [
  {
    question: 'What types of properties are available in Mashobra?',
    answer: 'Mashobra offers luxury villas, 3 BHK and 4 BHK residential properties, second homes and premium mountain homes with Himalayan views.',
  },
  {
    question: 'How far is Mashobra from Shimla?',
    answer: 'Mashobra is approximately 13 km from Shimla city centre, about 30–40 minutes by road.',
  },
  {
    question: 'Is this the official website for The Ridge Mashobra project?',
    answer: 'No. This is an independent real estate consultancy website. We facilitate property enquiries, site visits and buyer assistance for The Ridge Mashobra project but are not the official developer.',
  },
  {
    question: 'How do I enquire about a property?',
    answer: 'You can submit an online enquiry through our form, call us directly or reach us on WhatsApp. Our property consultant will respond within 24 hours.',
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(faqs)} />

      {/* FULL WIDTH HERO WITH POPUP ENQUIRY MODAL */}
      <HomeHero />

      {/* 1. ABOUT LOCATION */}
      <section className="py-16 lg:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <FadeInUp>
            <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
              <span className="text-[#E07A2F] text-sm font-semibold uppercase tracking-wider">About Mashobra</span>
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#172033] mt-2 mb-4"
                style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}
              >
                A Mountain Village Like No Other
              </h2>
              <p className="text-[#64748B] leading-relaxed text-base sm:text-lg mb-4">
                Mashobra is a scenic village nestled approximately 13 km from Shimla at an elevation of around 2,100 metres in the Himalayan foothills. Renowned for its dense Deodar cedar forests, clean mountain air and panoramic valley views, Mashobra offers a residential lifestyle that is both genuinely peaceful and practically connected.
              </p>
              <p className="text-[#64748B] leading-relaxed text-sm sm:text-base">
                Unlike the busy commercial zones of Shimla, Mashobra retains its natural character — a quality that increasingly appeals to families seeking premium second homes, nature-connected lifestyles and long-term property investment in a genuinely beautiful location.
              </p>
            </div>
          </FadeInUp>

          {/* Key Location Highlights Grid for Mobile & Desktop */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto mb-8">
            <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-3 sm:p-4 text-center shadow-xs">
              <div className="text-xl sm:text-2xl font-bold text-[#E07A2F]" style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}>2,100 m</div>
              <div className="text-xs text-[#64748B] mt-1 font-medium">Mountain Elevation</div>
            </div>
            <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-3 sm:p-4 text-center shadow-xs">
              <div className="text-xl sm:text-2xl font-bold text-[#1E3A5F]" style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}>13 km</div>
              <div className="text-xs text-[#64748B] mt-1 font-medium">From Shimla Mall</div>
            </div>
            <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-3 sm:p-4 text-center shadow-xs">
              <div className="text-xl sm:text-2xl font-bold text-[#E07A2F]" style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}>100%</div>
              <div className="text-xs text-[#64748B] mt-1 font-medium">Cedar &amp; Pine Cover</div>
            </div>
            <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-3 sm:p-4 text-center shadow-xs">
              <div className="text-xl sm:text-2xl font-bold text-[#1E3A5F]" style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}>360°</div>
              <div className="text-xs text-[#64748B] mt-1 font-medium">Himalayan Panoramas</div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mb-10">
            <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={websiteImages.locations.mashobraForest.src}
                alt={websiteImages.locations.mashobraForest.alt}
                fill
                className="object-cover hover:scale-103 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 1000px"
              />
            </div>
          </div>

          {/* Centered View All Button Below Section */}
          <div className="text-center flex justify-center">
            <Link
              href="/locations/mashobra"
              className="inline-flex items-center gap-2 bg-[#1E3A5F] text-white font-bold text-sm sm:text-base px-8 py-3.5 rounded-xl hover:bg-[#162d4a] transition-all shadow-md hover:shadow-lg group"
            >
              <span>View All About Mashobra</span>
              <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. FEATURED PROPERTIES */}
      <section className="py-16 lg:py-20 bg-[#F1F5F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <FadeInUp>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-[#E07A2F] text-sm font-semibold uppercase tracking-wider">Featured Properties</span>
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#172033] mt-2 mb-3"
                style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}
              >
                Properties in Mashobra &amp; Shimla
              </h2>
              <p className="text-[#64748B] text-sm sm:text-base">
                Explore handpicked luxury mountain villas, 3 &amp; 4 BHK chateaus, and premium residential properties.
              </p>
            </div>
          </FadeInUp>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.slice(0, 3).map((property) => (
              <StaggerItem key={property.id}>
                <PropertyCard property={property} />
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Centered View All Button Below Section */}
          <div className="mt-12 text-center flex justify-center">
            <Link
              href="/properties"
              className="inline-flex items-center gap-2 bg-[#1E3A5F] text-white font-bold text-sm sm:text-base px-8 py-3.5 rounded-xl hover:bg-[#162d4a] transition-all shadow-md hover:shadow-lg group"
            >
              <span>View All Properties</span>
              <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. RIDGE PROJECT SECTIONS: AMENITIES, PRICE LIST & UNIT DETAILS, WALKTHROUGH */}
      <RidgeProjectSections />

      {/* 4. WHY MASHOBRA */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <FadeInUp>
            <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
              <span className="text-[#E07A2F] text-sm font-semibold uppercase tracking-wider">Why Choose Mashobra</span>
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#172033] mt-2 mb-3"
                style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}
              >
                The Ideal Mountain Lifestyle Destination
              </h2>
              <p className="text-[#64748B] text-sm sm:text-base">
                Discover the unique advantages of living in Mashobra, surrounded by ancient deodars and pristine Himalayan vistas.
              </p>
            </div>
          </FadeInUp>
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {whyMashobra.map(({ icon: Icon, title, desc }) => (
              <StaggerItem key={title}>
                <AnimatedCard className="bg-[#F1F5F9] rounded-xl p-3.5 sm:p-6 h-full shadow-sm hover:shadow-md transition-shadow text-center flex flex-col items-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#1E3A5F]/10 rounded-lg flex items-center justify-center mb-3 sm:mb-4 text-[#1E3A5F]">
                    <Icon className="text-lg sm:text-xl" />
                  </div>
                  <h3 className="font-semibold text-[#172033] text-sm sm:text-base mb-1.5 sm:mb-2" style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}>
                    {title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">{desc}</p>
                </AnimatedCard>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Centered View All Button Below Section */}
          <div className="mt-10 sm:mt-12 text-center flex justify-center">
            <Link
              href="/locations/mashobra"
              className="inline-flex items-center gap-2 bg-[#1E3A5F] text-white font-bold text-sm sm:text-base px-8 py-3.5 rounded-xl hover:bg-[#162d4a] transition-all shadow-md hover:shadow-lg group"
            >
              <span>View All Mashobra Highlights</span>
              <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. PROPERTY CATEGORIES */}
      <section className="py-16 bg-[#1E3A5F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <FadeInUp>
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-[#E07A2F] text-sm font-semibold uppercase tracking-wider">Browse by Category</span>
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mt-2 mb-3"
                style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}
              >
                Property Categories
              </h2>
              <p className="text-white/75 text-sm sm:text-base">
                Select from our curated collections designed for luxury living, second homes, and investment.
              </p>
            </div>
          </FadeInUp>
          <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-4">
            {categories.map((cat) => (
              <StaggerItem key={cat.href}>
                <AnimatedCard className="h-full">
                  <Link
                    href={cat.href}
                    className="block h-full bg-white/10 hover:bg-[#E07A2F] rounded-xl p-3 sm:p-4 text-center transition-colors group"
                  >
                    <div className="text-xl sm:text-2xl mb-1.5 sm:mb-2 group-hover:scale-110 transition-transform duration-200">{cat.icon}</div>
                    <div className="text-white text-xs sm:text-sm font-medium leading-tight">{cat.label}</div>
                  </Link>
                </AnimatedCard>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Centered View All Button Below Section */}
          <div className="mt-10 text-center flex justify-center">
            <Link
              href="/properties"
              className="inline-flex items-center gap-2 bg-[#E07A2F] text-white font-bold text-sm sm:text-base px-8 py-3.5 rounded-xl hover:bg-[#c96b22] transition-all shadow-md hover:shadow-lg group"
            >
              <span>View All Categories</span>
              <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. LOCATIONS */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <FadeInUp>
            <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
              <span className="text-[#E07A2F] text-sm font-semibold uppercase tracking-wider">Explore Locations</span>
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#172033] mt-2 mb-3"
                style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}
              >
                Premium Locations in the Shimla Region
              </h2>
              <p className="text-[#64748B] text-sm sm:text-base">
                Discover sought-after residential destinations, serene mountain hilltops, and peaceful retreats.
              </p>
            </div>
          </FadeInUp>
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
            {locationCards.map((loc) => (
              <StaggerItem key={loc.name}>
                <AnimatedCard className="h-full">
                  <Link href={loc.href} className="group relative aspect-[3/4] rounded-xl overflow-hidden block">
                    <Image
                      src={loc.img}
                      alt={`Properties in ${loc.name}, Himachal Pradesh`}
                      fill
                      className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#172033]/90 via-black/25 to-transparent group-hover:from-[#172033]/95 transition-colors" />
                    <div className="absolute bottom-0 left-0 right-0 p-2.5 sm:p-4 text-center">
                      <h3 className="text-white font-bold text-sm sm:text-lg group-hover:text-[#E07A2F] transition-colors" style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}>
                        {loc.name}
                      </h3>
                      <p className="text-white/70 text-[11px] sm:text-xs mt-0.5 line-clamp-2">{loc.desc}</p>
                    </div>
                  </Link>
                </AnimatedCard>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Centered View All Button Below Section */}
          <div className="mt-10 sm:mt-12 text-center flex justify-center">
            <Link
              href="/locations"
              className="inline-flex items-center gap-2 bg-[#1E3A5F] text-white font-bold text-sm sm:text-base px-8 py-3.5 rounded-xl hover:bg-[#162d4a] transition-all shadow-md hover:shadow-lg group"
            >
              <span>View All Locations</span>
              <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

     

      {/* 8. GALLERY */}
      <ProjectGallery
        title="High-Definition Project Gallery & Layouts"
        subtitle="Explore high-definition drone visuals, estate plots, and master layout plans from the scenic mountain enclave in Mashobra, Shimla."
      />

      {/* 9. BLOG / ARTICLES */}
      <section className="py-16 lg:py-20 bg-[#F1F5F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <FadeInUp>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-[#E07A2F] text-sm font-semibold uppercase tracking-wider">Latest Articles</span>
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#172033] mt-2 mb-3"
                style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}
              >
                Property Insights &amp; Guides
              </h2>
              <p className="text-[#64748B] text-sm sm:text-base">
                Read expert advice, legal due diligence tips, and lifestyle guides for buying mountain real estate in Shimla.
              </p>
            </div>
          </FadeInUp>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.slice(0, 3).map((post) => (
              <StaggerItem key={post.id}>
                <AnimatedCard className="h-full">
                  <Link href={`/blog/${post.slug}`} className="group bg-white rounded-xl border border-[#E2E8F0] overflow-hidden hover:shadow-xl transition-all duration-300 block h-full flex flex-col">
                    <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                        sizes="(max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-5 flex flex-col flex-1 justify-between">
                      <div>
                        <span className="text-xs text-[#E07A2F] font-medium">{post.category}</span>
                        <h3 className="font-semibold text-[#172033] text-sm mt-1 mb-2 line-clamp-2 group-hover:text-[#1E3A5F] transition-colors">
                          {post.title}
                        </h3>
                      </div>
                    </div>
                  </Link>
                </AnimatedCard>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Centered View All Button Below Section */}
          <div className="mt-12 text-center flex justify-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 bg-[#1E3A5F] text-white font-bold text-sm sm:text-base px-8 py-3.5 rounded-xl hover:bg-[#162d4a] transition-all shadow-md hover:shadow-lg group"
            >
              <span>View All Articles</span>
              <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 10. FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <FadeInUp>
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-[#E07A2F] text-sm font-semibold uppercase tracking-wider">Frequently Asked Questions</span>
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#172033] mt-2 mb-3"
                style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}
              >
                Frequently Asked Questions
              </h2>
              <p className="text-[#64748B] text-sm sm:text-base">
                Find answers to common questions about properties, legal verification, and purchasing in Mashobra.
              </p>
            </div>
          </FadeInUp>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4">
            {faqs.map((faq) => (
              <StaggerItem key={faq.question} className="h-full">
                <div className="bg-[#F1F5F9] rounded-xl p-4 sm:p-5 hover:bg-[#EDF2F7] transition-colors h-full flex flex-col justify-start">
                  <h3 className="font-semibold text-[#172033] text-sm sm:text-base mb-2 flex items-start gap-2">
                    <FaStar className="text-[#E07A2F] text-xs flex-shrink-0 mt-1" />
                    <span>{faq.question}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed pl-5">{faq.answer}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Centered View All Button Below Section */}
          <div className="mt-10 text-center flex justify-center">
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 bg-[#1E3A5F] text-white font-bold text-sm sm:text-base px-8 py-3.5 rounded-xl hover:bg-[#162d4a] transition-all shadow-md hover:shadow-lg group"
            >
              <span>View All FAQs &amp; Inquiries</span>
              <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 11. LEAD CAPTURE */}
      <section className="py-16 lg:py-20 bg-[#1E3A5F] overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <FadeInUp>
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4"
              style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}
            >
              Find the Right Property in Mashobra
            </h2>
            <p className="text-white/70 text-base mb-6 max-w-xl mx-auto">
              Talk to our property consultant today. We help you discover, evaluate and enquire about the right property in Mashobra and Shimla.
            </p>

            {/* Quick Guarantees Responsive Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl mx-auto mb-8 text-white/90 text-xs sm:text-sm">
              <div className="bg-white/10 rounded-xl p-3 flex items-center justify-center gap-2 border border-white/10">
                <span className="text-[#E07A2F] font-bold">✓</span>
                <span>Verified Land Titles</span>
              </div>
              <div className="bg-white/10 rounded-xl p-3 flex items-center justify-center gap-2 border border-white/10">
                <span className="text-[#E07A2F] font-bold">✓</span>
                <span>Personalized Site Visits</span>
              </div>
              <div className="bg-white/10 rounded-xl p-3 flex items-center justify-center gap-2 border border-white/10">
                <span className="text-[#E07A2F] font-bold">✓</span>
                <span>Direct Price Transparency</span>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <EnquireModalButton
                source="homepage-bottom-cta"
                title="Request a Property Callback"
                className="flex items-center gap-2 bg-[#E07A2F] text-white font-semibold px-8 py-3.5 rounded hover:bg-[#c96b22] hover:scale-102 active:scale-98 transition-all cursor-pointer shadow-lg"
              >
                Request a Callback
              </EnquireModalButton>
              <a
                href="tel:+91"
                className="flex items-center gap-2 border border-white/30 text-white font-semibold px-8 py-3.5 rounded hover:bg-white/10 hover:border-white/50 transition-all"
              >
                <FaPhoneAlt className="text-sm" />
                Call Us Now
              </a>
            </div>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
