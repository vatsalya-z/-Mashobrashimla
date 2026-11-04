// src/app/project/amenities/page.tsx
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { 
  FaCheckCircle, 
  FaWhatsapp, 
  FaPhoneAlt, 
  FaShieldAlt, 
  FaDumbbell, 
  FaTree, 
  FaSpa, 
  FaCar, 
  FaBolt, 
  FaChild, 
  FaFire,
  FaHome
} from 'react-icons/fa';
import { 
  Activity, 
  Waves, 
  Compass, 
  Hotel, 
  Sparkles,
  ChevronRight,
  ShieldCheck,
  Check,
  Dumbbell
} from 'lucide-react';
import FAQAccordion from '@/components/ui/FAQAccordion';
import JsonLd, { breadcrumbSchema, faqSchema } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Project Amenities & World-Class Facilities – The Ridge Mashobra, Shimla',
  description:
    'Discover world-class luxury amenities at The Ridge Mashobra, Shimla: 25,000 sq.ft clubhouse, heated swimming pool, tennis court, indoor badminton arena, wellness spa, pine jogging trails, and 24/7 security.',
  alternates: { canonical: 'https://mashobrashimla.com/project/amenities' },
  openGraph: {
    title: 'Project Amenities & World-Class Facilities – The Ridge Mashobra, Shimla',
    description:
      'Explore all luxury amenities at The Ridge Mashobra: heated pool, grand clubhouse, all-weather tennis, badminton, luxury spa, and deodar forest trails in Shimla.',
    images: [{ url: 'https://mashobrashimla.com/images/hero/hero-mashobra-main.webp', width: 1200, height: 630 }],
  },
};

const amenitiesData = [
  {
    id: 'clubhouse',
    title: 'Grand Signature Clubhouse (25,000 Sq. Ft.)',
    category: 'Club & Hospitality',
    image: '/images/hoabl/hoabl-shimla-commercial-plots-for-sale-7.webp',
    alt: 'Boutique luxury clubhouse at The Ridge Mashobra Shimla',
    desc: 'An opulent 25,000 sq. ft. multi-level mountain clubhouse designed for leisure and social gatherings. Featuring an exclusive residents\' lounge, private dining, cards room, business alcoves, and panoramic forest vistas.',
    features: ['Panoramic Residents\' Lounge', 'Fine Dining & Banquet Space', 'Private Library & Cards Room', 'Concierge Service Desk'],
    icon: Hotel,
  },
  {
    id: 'swimming-pool',
    title: 'Heated All-Weather Swimming Pool & Deck',
    category: 'Leisure & Wellness',
    image: '/images/properties/luxury-homes/luxury-mountain-estate-01.webp',
    alt: 'Heated all-weather swimming pool and sun deck in Mashobra',
    desc: 'Climate-controlled heated pool encased in architectural glass with timber sun decks, allowing invigorating year-round swims amidst freezing Himalayan winters with clear valley panoramas.',
    features: ['Temperature Controlled Water', 'Enclosed Glass Windbreak', 'Teakwood Sunbathing Deck', 'Dedicated Toddlers\' Splash Zone'],
    icon: Waves,
  },
  {
    id: 'tennis-court',
    title: 'International Standard Tennis Court',
    category: 'Sports & Active Living',
    image: '/images/hoabl/hoabl-shimla-open-land-for-sale-8.webp',
    alt: 'Outdoor tennis court in the mountains of Mashobra Shimla',
    desc: 'All-weather hard tennis court built to international regulation standards. Set against towering pine hills with professional LED floodlights for evening and twilight gameplay.',
    features: ['All-Weather Cushion Surface', 'High-Lumen LED Floodlights', 'Spectator Seating Pavilion', 'Forest-Facing Play Area'],
    icon: Activity,
  },
  {
    id: 'badminton-court',
    title: 'Indoor Badminton Arena',
    category: 'Sports & Active Living',
    image: '/images/properties/luxury-homes/luxury-mountain-estate-03.webp',
    alt: 'Indoor badminton arena with wooden sports flooring',
    desc: 'High-ceiling indoor court engineered with shock-absorbent hardwood sports flooring, non-glare illumination, and climate-tempered interiors for round-the-year championship-level matches.',
    features: ['Shock-Absorbent Wooden Floor', 'Anti-Glare Tournament Lighting', 'Spectator Viewing Gallery', 'Weatherproof Indoor Environment'],
    icon: Dumbbell,
  },
  {
    id: 'fitness-center',
    title: 'Modern Gymnasium & Health Club',
    category: 'Health & Fitness',
    image: '/images/interiors/living-room-mountain-view.webp',
    alt: 'Modern fitness centre and health gym facing mountain slopes',
    desc: 'High-tech fitness studio outfitted with premium cardio runners, elliptical cross-trainers, multi-station resistance weight systems, stretching zones, and wall-to-wall mountain view glass.',
    features: ['Commercial-Grade Cardio Gear', 'Free Weights & Resistance Racks', 'Dedicated Yoga & Stretch Corner', 'Certified Trainer On Call'],
    icon: FaDumbbell,
  },
  {
    id: 'spa-wellness',
    title: 'Spa & Ayurvedic Wellness Sanctuary',
    category: 'Relaxation & Spa',
    image: '/images/interiors/luxury-bathroom.webp',
    alt: 'Luxury wellness spa and hydrotherapy sanctuary in Mashobra',
    desc: 'An authentic rejuvenation sanctuary offering bespoke therapeutic massages, pine-scented steam chambers, Scandinavian cedarwood sauna, and restorative relaxation alcoves.',
    features: ['Swedish & Ayurvedic Massage Rooms', 'Finnish Cedarwood Sauna', 'Herbal Steam Chambers', 'Hydrotherapy Soaking Tubs'],
    icon: FaSpa,
  },
  {
    id: 'jogging-trails',
    title: 'Scenic Forest Jogging & Nature Trails',
    category: 'Outdoor & Nature',
    image: '/images/blog/mashobra-location-guide.webp',
    alt: 'Paved jogging and walking nature trails through deodar cedar forest',
    desc: 'Over 2.5 kilometers of curated, gently winding nature tracks through pristine deodar and pine forest canopies. Ideal for morning brisk walks, trail runs, and mindful forest bathing.',
    features: ['2.5 km Paved Jogging Track', 'Solar-Powered Night Bollards', 'Quiet Timber Rest Stops', 'Native Himalayan Flora Border'],
    icon: FaTree,
  },
  {
    id: 'yoga-decks',
    title: 'Cantilevered Yoga & Meditation Decks',
    category: 'Mindfulness & Zen',
    image: '/images/lifestyle/peaceful-home.webp',
    alt: 'Outdoor yoga and meditation deck with Himalayan sunrise view',
    desc: 'Spectacular elevated timber platforms cantilevered over sloping green valleys, oriented to catch the first golden rays of Himalayan sunrise for peaceful meditation and pranayama.',
    features: ['Cantilevered Valley Overlook', 'Sunrise Facing Orientation', 'Silent Zen Meditation Pods', 'Timber Finish Decking'],
    icon: Compass,
  },
  {
    id: 'sunset-firepit',
    title: 'Sunset Terrace & Firepit Social Lounge',
    category: 'Lifestyle & Social',
    image: '/images/lifestyle/outdoor-seating.webp',
    alt: 'Outdoor terrace patio with stone firepit and evening lounge seating',
    desc: 'Stunning outdoor flagstone terrace equipped with natural wood-burning firepits, ambient lighting, and circular lounges designed for gathering around warmth as the sun dips below mountain peaks.',
    features: ['Open-Flame Stone Firepits', 'Cushioned Deep Seating', 'Stargazing Telescope Deck', 'Barbecue & Grilling Corner'],
    icon: FaFire,
  },
  {
    id: 'security-gated',
    title: 'Multi-Tier 24/7 Gated Security & RFID Access',
    category: 'Safety & Protection',
    image: '/images/villas/villa-exterior-06.webp',
    alt: 'Gated entrance with multi-tiered security and perimeter surveillance',
    desc: 'Round-the-clock peace of mind with disciplined security personnel, computerized RFID boom barriers, full perimeter smart CCTV surveillance, and digital visitor pre-clearance.',
    features: ['24/7 Manned Entry Gatehouses', 'Boom Barriers with RFID Readers', 'Perimeter Smart CCTV Monitoring', 'Digital Resident Pass App'],
    icon: FaShieldAlt,
  },
  {
    id: 'kids-gardens',
    title: 'Landscaped Alpine Gardens & Kids Play Park',
    category: 'Family & Recreation',
    image: '/images/lifestyle/garden-villa.webp',
    alt: 'Landscaped alpine gardens and children adventure playground',
    desc: 'Terraced botanical gardens with native Himalayan wildflowers, shaded stone walkways, and an ecologically designed adventure play park with soft safety turf for children.',
    features: ['Certified Child-Safe Play Gear', 'Soft Impact Play Turf', 'Terraced Flower Promenades', 'Family Picnic Lawns'],
    icon: FaChild,
  },
  {
    id: 'parking-ev',
    title: 'Covered Private Parking & Fast EV Charging',
    category: 'Modern Infrastructure',
    image: '/images/villas/villa-exterior-02.webp',
    alt: 'Covered parking bays and EV charging facilities',
    desc: 'Spacious dedicated covered car parking for each villa residence, accompanied by high-speed AC electric vehicle charging stations and driver waiting lounges.',
    features: ['Reserved Covered Car Spaces', 'Fast AC EV Chargers Installed', 'Wide Turning & Maneuvering Driveways', 'Chauffeur Rest Amenities'],
    icon: FaCar,
  },
  {
    id: 'power-water',
    title: '100% Power Backup & Spring Water Network',
    category: 'Essential Utilities',
    image: '/images/hoabl/house-of-abhinandan-lodha-shimla-banner-2.webp',
    alt: 'Uninterrupted power backup and pure water storage systems',
    desc: 'Fully dependable mountain infrastructure featuring 100% silent DG power backup for villas and common facilities, along with natural mineral spring water reservoirs and rainwater harvesting.',
    features: ['100% Silent DG Backup Power', 'Underground Utility Cabling', 'Multi-Stage Filtered Spring Water', 'Rainwater Harvesting Network'],
    icon: FaBolt,
  },
];

const faqs = [
  {
    question: 'What world-class amenities are offered at The Ridge Mashobra?',
    answer:
      'The Ridge Mashobra boasts a comprehensive collection of luxury mountain amenities including a 25,000 sq. ft. signature clubhouse, heated indoor/outdoor swimming pool, all-weather tennis court, indoor badminton arena, modern fitness club, rejuvenating spa with sauna and steam, 2.5 km forest jogging track, cantilevered yoga decks, outdoor firepit lounges, kids play park, 24/7 multi-tiered security, covered parking with EV chargers, and 100% power and water backup.',
  },
  {
    question: 'Is the swimming pool temperature-controlled during winter snows?',
    answer:
      'Yes. The swimming pool is an all-weather, climate-controlled heated pool enclosed in windbreak glass architectural pavilions. Residents can comfortably swim throughout the year, even during Mashobra winter months and snowfall.',
  },
  {
    question: 'Who manages and maintains the clubhouse and sports facilities?',
    answer:
      'All common project amenities, clubhouse services, sports grounds, landscaping, and security systems are managed by a professional facility management team. A standard common area maintenance (CAM) fee structure ensures pristine year-round upkeep and attentive service.',
  },
  {
    question: 'What are the operational timings for the sports and gym facilities?',
    answer:
      'The gymnasium and essential fitness amenities remain open from 6:00 AM to 10:00 PM daily. Outdoor sports facilities like the tennis court feature floodlights for evening play. The security gates and emergency maintenance services operate 24 hours a day, 7 days a week.',
  },
  {
    question: 'Can guests and non-resident family members access the amenities?',
    answer:
      'Yes, resident villa owners can invite and entertain guests at the clubhouse, dining areas, and sports courts subject to the community association’s guest guidelines and simple pre-booking via the resident concierge.',
  },
  {
    question: 'Are there EV (Electric Vehicle) charging points available on site?',
    answer:
      'Yes, The Ridge Mashobra is an eco-conscious development equipped with high-speed AC electric vehicle charging stations across the parking pavilions, alongside provisions for private dedicated EV wall boxes for each villa residence.',
  },
  {
    question: 'Is there 100% power backup and continuous water supply?',
    answer:
      'Yes. The development is equipped with high-capacity silent diesel generators providing 100% automatic power backup for both private residences and community amenities. Continuous water supply is maintained via natural mountain mineral spring reservoirs and modern rainwater harvesting systems.',
  },
  {
    question: 'How can I schedule a private visit to inspect the site and amenities?',
    answer:
      'You can connect directly with our property consultant on WhatsApp or phone. We will coordinate a tailored private site visit and comprehensive walkthrough of the estate and amenity locations.',
  },
  {
    question: 'Are pets allowed across the walking trails and open spaces?',
    answer:
      'Yes, The Ridge Mashobra is a pet-friendly mountain community. Dedicated pet-walking areas along the nature trails allow your pets to safely enjoy the pristine outdoor environment on leash.',
  },
  {
    question: 'What security systems protect the project and residents?',
    answer:
      'The estate features multi-tiered security comprising 24/7 trained security guards, computerized boom barriers with RFID vehicle recognition, high-definition perimeter CCTV surveillance, and a digital visitor log system.',
  },
];

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP || '+919999995151';
const PHONE_NUMBER = process.env.NEXT_PUBLIC_PHONE || '+91-9999995151';
const waMsg = 'Hello, I want to explore project amenities and schedule a site visit for The Ridge Mashobra, Shimla.';

export default function ProjectAmenitiesPage() {
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, '')}?text=${encodeURIComponent(waMsg)}`;
  const telUrl = `tel:${PHONE_NUMBER.replace(/\s+/g, '')}`;

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: 'Home', url: 'https://mashobrashimla.com' },
            { name: 'Project', url: 'https://mashobrashimla.com/the-ridge-mashobra' },
            { name: 'Amenities', url: 'https://mashobrashimla.com/project/amenities' },
          ]),
          faqSchema(faqs),
        ]}
      />

      {/* ══════════════════════════════════════════════════════════════════
          HERO BANNER (NO GRADIENT - CRISP NEW HERO IMAGE)
      ══════════════════════════════════════════════════════════════════ */}
      <section className="relative w-full min-h-[520px] sm:min-h-[580px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/hero/hero-mashobra-main.webp"
          alt="Luxury project amenities at The Ridge Mashobra, Shimla"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />

        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center flex flex-col items-center">
          <div className=" border border-white/20 rounded-3xl p-6 sm:p-10 shadow-2xl w-full">
            {/* Breadcrumb pills */}
            <div className="inline-flex items-center gap-2 bg-white/15 border border-white/25 text-white text-xs px-3.5 py-1.5 rounded-full mb-4">
              <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
                <FaHome className="text-[11px]" /> Home
              </Link>
              <ChevronRight className="w-3 h-3 text-white/60" />
              <Link href="/the-ridge-mashobra" className="hover:text-white transition-colors">
                The Ridge Mashobra
              </Link>
              <ChevronRight className="w-3 h-3 text-white/60" />
              <span className="text-[#E07A2F] font-semibold">Amenities</span>
            </div>

            <div>
              <span className="inline-block bg-[#E07A2F] text-white text-xs font-bold px-4 py-1.5 rounded-full mb-3 uppercase tracking-widest shadow-md">
                World-Class Mountain Living
              </span>
            </div>

            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 tracking-tight leading-tight"
              style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}
            >
              Project Amenities &amp; World-Class Facilities
            </h1>

            <p className="text-white/90 text-sm sm:text-base max-w-2xl mx-auto mb-6 font-light leading-relaxed">
              Thoughtfully planned sports, wellness, and leisure infrastructure amidst the deodar forests of Mashobra, Shimla. Curated for discerning families seeking an unmatched luxury hill sanctuary.
            </p>

            {/* Quick amenity pill tags */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-2.5">
              {[
                '25,000 Sq.Ft. Clubhouse',
                'Heated Swimming Pool',
                'All-Weather Tennis Court',
                'Indoor Badminton Arena',
                'Ayurvedic Wellness Spa',
                'Forest Jogging Trails',
                '24/7 Gated Security',
              ].map((tag) => (
                <span
                  key={tag}
                  className="bg-white/20 text-white text-xs px-3.5 py-1.5 rounded-full border border-white/25 font-medium shadow-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          STATS BAR
      ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
            <div className="p-3 sm:p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#1E3A5F]">25,000+</div>
              <div className="text-xs sm:text-sm text-[#64748B] font-medium mt-1">Sq. Ft. Clubhouse</div>
            </div>
            <div className="p-3 sm:p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#E07A2F]">15+</div>
              <div className="text-xs sm:text-sm text-[#64748B] font-medium mt-1">Premium Amenities</div>
            </div>
            <div className="p-3 sm:p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#1E3A5F]">70%+</div>
              <div className="text-xs sm:text-sm text-[#64748B] font-medium mt-1">Green &amp; Forest Cover</div>
            </div>
            <div className="p-3 sm:p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#E07A2F]">24/7</div>
              <div className="text-xs sm:text-sm text-[#64748B] font-medium mt-1">Security &amp; Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          MAIN CONTENT (FULL WIDTH - NO ENQUIRY FORM)
      ══════════════════════════════════════════════════════════════════ */}
      <div className="bg-[#F8FAFC] py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Section Introduction Header */}
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-1.5 bg-[#E07A2F]/10 text-[#E07A2F] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
              <Sparkles size={13} />
              Lifestyle Infrastructure
            </div>
            <h2
              className="text-2xl sm:text-4xl font-extrabold text-[#172033] tracking-tight mb-4"
              style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}
            >
              Unrivaled Amenities at The Ridge Mashobra
            </h2>
            <p className="text-[#64748B] text-sm sm:text-base leading-relaxed">
              Every amenity at The Ridge Mashobra is envisioned to blend the peace of pristine nature with luxury hospitality standards. From climate-controlled athletic courts to soothing spa pavilions, residents enjoy an elevated lifestyle engineered for wellness, privacy, and community living.
            </p>
          </div>

          {/* ────────────────────────────────────────────────────────────
              AMENITIES CARDS: FULL WIDTH 3-COLUMN RESPONSIVE GRID
          ──────────────────────────────────────────────────────────── */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {amenitiesData.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.id}
                    className="bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
                  >
                    {/* Amenity Image */}
                    <div className="relative w-full h-56 sm:h-60 bg-slate-100 overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.alt}
                        fill
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                      
                      {/* Category Badge */}
                      <div className="absolute top-3.5 left-3.5">
                        <span className="bg-[#1E3A5F]/90 backdrop-blur-md text-white text-[10px] sm:text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                          {item.category}
                        </span>
                      </div>

                      {/* Icon Accent */}
                      <div className="absolute bottom-3.5 right-3.5 w-10 h-10 rounded-xl bg-white/95 text-[#1E3A5F] flex items-center justify-center shadow-md">
                        <IconComponent className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <h3
                          className="text-lg font-bold text-[#172033] mb-2 group-hover:text-[#1E3A5F] transition-colors leading-snug"
                          style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}
                        >
                          {item.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed mb-4">
                          {item.desc}
                        </p>
                      </div>

                      {/* Key Specs / Chips */}
                      <div className="pt-4 border-t border-[#F1F5F9] space-y-2">
                        {item.features.map((feat) => (
                          <div key={feat} className="flex items-center gap-2 text-xs text-[#475569]">
                            <FaCheckCircle className="text-[#E07A2F] text-xs flex-shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ────────────────────────────────────────────────────────────
              SUSTAINABLE INFRASTRUCTURE SECTION
          ──────────────────────────────────────────────────────────── */}
          <div className="bg-gradient-to-br from-[#1E3A5F] to-[#0f172a] rounded-3xl p-8 sm:p-12 text-white shadow-xl">
            <div className="max-w-4xl mx-auto text-center mb-8">
              <div className="inline-flex items-center gap-1.5 bg-[#E07A2F] text-white text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider mb-4">
                <ShieldCheck size={14} />
                Mountain Engineering
              </div>
              <h3
                className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-3 tracking-tight"
                style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}
              >
                Sustainable Mountain Infrastructure
              </h3>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                Engineered specifically for the high-altitude Himalayan geography, The Ridge Mashobra features resilient underground utilities, eco-friendly rainwater harvesting, solar exterior pathways, and dedicated maintenance teams to ensure frictionless living in all four seasons.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs sm:text-sm max-w-5xl mx-auto">
              {[
                'Silent automatic DG power backup for full load',
                'Filtered mountain spring water storage tanks',
                'Solar illuminated forest walking tracks',
                'Integrated rainwater harvesting & recharge pits',
                'Underground electrical & fiber-optic networks',
                'Dedicated on-site facility & estate management',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 bg-white/10 rounded-2xl px-4 py-3.5 backdrop-blur-xs border border-white/15">
                  <Check className="w-4 h-4 text-[#E07A2F] flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ────────────────────────────────────────────────────────────
              FREQUENTLY ASKED QUESTIONS
          ──────────────────────────────────────────────────────────── */}
          <div id="faqs" className="bg-white rounded-3xl p-6 sm:p-12 border border-[#E2E8F0] shadow-sm max-w-5xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-[#E07A2F] text-xs font-bold uppercase tracking-wider">
                Frequently Asked Questions
              </span>
              <h2
                className="text-2xl sm:text-3xl font-bold text-[#172033] mt-2 mb-2"
                style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}
              >
                Amenities &amp; Facilities FAQ
              </h2>
              <p className="text-xs sm:text-sm text-[#64748B]">
                Clear answers on amenity access, winter heating, maintenance fees, and site visit scheduling.
              </p>
            </div>

            <FAQAccordion faqs={faqs} />
          </div>

          {/* ────────────────────────────────────────────────────────────
              QUICK CONSULTANT & SITE TOUR ASSISTANCE BAR
          ──────────────────────────────────────────────────────────── */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E2E8F0] shadow-sm max-w-4xl mx-auto text-center">
            <h3
              className="text-xl sm:text-2xl font-bold text-[#172033] mb-2"
              style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}
            >
              Interested in Experiencing These Amenities?
            </h3>
            <p className="text-xs sm:text-sm text-[#64748B] max-w-xl mx-auto mb-6 leading-relaxed">
              Plan a private site visit and clubhouse walkthrough with our local Mashobra property consultant.
            </p>

            <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white font-semibold px-6 py-3.5 rounded-xl text-sm hover:bg-[#1fad55] transition-colors shadow-sm"
              >
                <FaWhatsapp className="text-lg" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href={telUrl}
                className="inline-flex items-center gap-2 bg-[#1E3A5F] text-white font-semibold px-6 py-3.5 rounded-xl text-sm hover:bg-[#162d4a] transition-colors shadow-sm"
              >
                <FaPhoneAlt className="text-sm" />
                <span>Call Consultant: {PHONE_NUMBER}</span>
              </a>

              <Link
                href="/the-ridge-mashobra"
                className="inline-flex items-center gap-1.5 bg-[#F1F5F9] text-[#172033] font-semibold px-6 py-3.5 rounded-xl text-sm hover:bg-[#E2E8F0] transition-colors"
              >
                <span>View Full Project Details</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          

        </div>
      </div>
    </>
  );
}
