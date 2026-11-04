'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Dumbbell, 
  ShieldCheck, 
  Waves, 
  Trees, 
  HeartHandshake, 
  Activity, 
  Compass, 
  Hotel, 
  Eye, 
  Check, 
  Sparkle
} from 'lucide-react';
import { 
  FaPhoneAlt, 
  FaFileAlt, 
  FaPlay, 
  FaCalendarCheck, 
  FaArrowRight
} from 'react-icons/fa';
import EnquiryModal from '@/components/forms/EnquiryModal';

const PHONE_NUMBER = process.env.NEXT_PUBLIC_PHONE || '+91-9999995151';

// --- DATA ---

const amenitiesList = [
  {
    icon: Activity,
    name: 'Tennis Court',
    desc: 'All-weather international standard tennis court surrounded by pine-clad hills.',
    tag: 'Sports',
  },
  {
    icon: Dumbbell,
    name: 'Badminton Court',
    desc: 'Dedicated indoor badminton arena with premium shock-absorbent wooden flooring.',
    tag: 'Sports',
  },
  {
    icon: ShieldCheck,
    name: '24/7 Gated Security',
    desc: 'Multi-tiered gated surveillance, RFID access, and round-the-clock trained security.',
    tag: 'Safety',
  },
  {
    icon: Waves,
    name: 'Swimming Pool',
    desc: 'Heated all-weather pool and sun deck offering unobstructed Himalayan valley panoramas.',
    tag: 'Leisure',
  },
  {
    icon: Trees,
    name: 'Joggers Park & Trails',
    desc: 'Paved, scenic jogging paths through pristine cedar and deodar forest slopes.',
    tag: 'Wellness',
  },
  {
    icon: Dumbbell,
    name: 'State-of-the-Art Gymnasium',
    desc: 'Fully equipped fitness club with cardio machines, free weights, and mountain view windows.',
    tag: 'Fitness',
  },
  {
    icon: HeartHandshake,
    name: 'Spa & Wellness Sanctuary',
    desc: 'Ayurvedic massage pavilions, sauna, steam rooms, and restorative relaxation alcoves.',
    tag: 'Wellness',
  },
  {
    icon: Compass,
    name: 'Yoga & Meditation Pods',
    desc: 'Tranquil outdoor cantilevered timber decks positioned for morning mountain meditation.',
    tag: 'Mindfulness',
  },
  {
    icon: Hotel,
    name: 'Grand Signature Clubhouse',
    desc: 'Private lounge, fine dining room, games parlor, and resident community hall.',
    tag: 'Lifestyle',
  },
];

const priceListUnits = [
  {
    config: '3 BHK Chateau Villa',
    area: '3,008 Sq.Ft.',
    price: '₹ 9.27 Cr',
    priceSuffix: 'Onwards*',
    plan: 'Construction Linked Plan (CLP)',
    highlights: ['Multi-level Layout', 'Panoramic Forest Balcony', 'Dedicated Parking', 'Private Garden Terrace'],
    recommended: false,
  },
  {
    config: '4 BHK Chateau Villa',
    area: '3,667 Sq.Ft.',
    price: '₹ 11.52 Cr',
    priceSuffix: 'Onwards*',
    plan: 'Construction Linked Plan (CLP)',
    highlights: ['Expansive Duplex', 'Master Suite Deck', 'Servant Quarters', 'Private Elevator Provision'],
    recommended: true,
  },
];

export default function RidgeProjectSections() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSource, setModalSource] = useState('price-list');
  const [modalTitle, setModalTitle] = useState('Request Price List & Cost Sheet');

  const openModal = (source: string, title: string) => {
    setModalSource(source);
    setModalTitle(title);
    setModalOpen(true);
  };

  return (
    <>
      {/* ══════════════════════════════════════════════════════════════════
          1. THE RIDGE MASHOBRA, SHIMLA AMENITIES
      ══════════════════════════════════════════════════════════════════ */}
      <section id="amenities" className="py-16 lg:py-24 bg-[#F8FAFC] border-y border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="text-center max-w-3xl mx-auto mb-14"
          >
            <div className="inline-flex items-center gap-1.5 bg-[#E07A2F]/15 border border-[#E07A2F]/30 text-[#E07A2F] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
              <Sparkles size={13} />
              World-Class Mountain Living
            </div>
            <h2
              className="text-2xl sm:text-4xl font-extrabold text-[#172033] tracking-tight mb-4"
              style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}
            >
              The Ridge Mashobra, Shimla Amenities
            </h2>
            <p className="text-[#64748B] text-sm sm:text-base leading-relaxed">
              Thoughtfully curated sports, wellness, and leisure infrastructure designed for discerning families seeking an unmatched luxury mountain lifestyle.
            </p>
          </motion.div>

          {/* Amenities Grid - Responsive 2-column grid on mobile, 3-column on desktop */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
            {amenitiesList.map((amenity, i) => {
              const IconComp = amenity.icon;
              return (
                <motion.div
                  key={amenity.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.45, delay: i * 0.05, ease: 'easeOut' }}
                  whileHover={{ y: -6, transition: { duration: 0.25 } }}
                  className="bg-white rounded-xl sm:rounded-2xl p-3.5 sm:p-6 border border-[#E2E8F0] shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start justify-between mb-3 sm:mb-4">
                      <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-[#1E3A5F]/10 text-[#1E3A5F] group-hover:bg-[#1E3A5F] group-hover:text-white flex items-center justify-center transition-colors duration-300">
                        <IconComp className="w-4 h-4 sm:w-6 sm:h-6" />
                      </div>
                      <span className="text-[9px] sm:text-[11px] font-semibold tracking-wider text-[#64748B] bg-[#F1F5F9] px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full">
                        {amenity.tag}
                      </span>
                    </div>
                    <h3
                      className="text-xs sm:text-lg font-bold text-[#172033] mb-1 sm:mb-2 group-hover:text-[#1E3A5F] transition-colors leading-snug"
                      style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}
                    >
                      {amenity.name}
                    </h3>
                    <p className="text-[11px] sm:text-sm text-[#64748B] leading-relaxed line-clamp-3 sm:line-clamp-none">
                      {amenity.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          

          {/* Centered View All Button Below Section */}
          <div className="mt-10 text-center flex justify-center">
            <Link
              href="/project/amenities"
              className="inline-flex items-center gap-2 bg-[#1E3A5F] text-white font-bold text-sm sm:text-base px-8 py-3.5 rounded-xl hover:bg-[#162d4a] transition-all shadow-md hover:shadow-lg group"
            >
              <span>View All Project Amenities</span>
              <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          2. THE RIDGE MASHOBRA, SHIMLA PRICE LIST & UNIT DETAILS
      ══════════════════════════════════════════════════════════════════ */}
      <section id="price-list" className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <div className="inline-flex items-center gap-1.5 bg-[#1E3A5F]/10 text-[#1E3A5F] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
              <Sparkle size={13} />
              Current Availability &amp; Pricing
            </div>
            <h2
              className="text-2xl sm:text-4xl font-extrabold text-[#172033] tracking-tight mb-4"
              style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}
            >
              The Ridge Mashobra, Shimla Price List &amp; Unit Details
            </h2>
            <p className="text-[#64748B] text-sm sm:text-base leading-relaxed">
              The Ridge Mashobra, Shimla offers ultra-luxury 3 &amp; 4 BHK chateau residences with expansive layouts, premium specifications, and flexible construction-linked payment schedules.
            </p>
          </motion.div>

          {/* Pricing Table Outer (Desktop) & Cards Grid (Mobile) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-8"
          >
            {/* Desktop Table View */}
            <div className="hidden md:block bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[700px]">
                  <thead>
                    <tr className="bg-[#1E3A5F] text-white text-xs uppercase tracking-wider">
                      <th className="py-4 px-6 font-semibold">Configurations</th>
                      <th className="py-4 px-6 font-semibold">Super Area</th>
                      <th className="py-4 px-6 font-semibold">Starting Price</th>
                      <th className="py-4 px-6 font-semibold">Payment Plan</th>
                      <th className="py-4 px-6 font-semibold text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E2E8F0] text-sm text-[#172033]">
                    {priceListUnits.map((unit) => (
                      <tr
                        key={unit.config}
                        className="hover:bg-white transition-colors"
                      >
                        <td className="py-5 px-6 font-bold text-base text-[#1E3A5F]">
                          <div className="flex items-center gap-2">
                            {unit.config}
                            {unit.recommended && (
                              <span className="bg-[#E07A2F] text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
                                Most Popular
                              </span>
                            )}
                          </div>
                          <div className="text-xs font-normal text-[#64748B] mt-1 flex flex-wrap gap-2">
                            {unit.highlights.map((h) => (
                              <span key={h} className="inline-flex items-center gap-1">
                                <Check size={12} className="text-[#E07A2F]" />
                                {h}
                              </span>
                            ))}
                          </div>
                        </td>
                        <td className="py-5 px-6">
                          <span className="inline-block bg-white border border-[#E2E8F0] px-3 py-1 rounded-lg font-semibold text-[#172033]">
                            {unit.area}
                          </span>
                        </td>
                        <td className="py-5 px-6">
                          <div className="font-extrabold text-lg text-[#172033]">
                            {unit.price}
                          </div>
                          <div className="text-xs text-[#E07A2F] font-medium">
                            {unit.priceSuffix}
                          </div>
                        </td>
                        <td className="py-5 px-6">
                          <span className="inline-block bg-[#1E3A5F]/10 text-[#1E3A5F] font-semibold text-xs px-3 py-1.5 rounded-full">
                            {unit.plan}
                          </span>
                        </td>
                        <td className="py-5 px-6 text-center">
                          <motion.button
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.96 }}
                            type="button"
                            onClick={() => openModal(`price-table-${unit.config}`, `Request Cost Sheet for ${unit.config}`)}
                            className="inline-flex items-center gap-1.5 bg-[#E07A2F] text-white font-bold text-xs sm:text-sm px-4 py-2.5 rounded-xl hover:bg-[#c96b22] transition-colors shadow cursor-pointer whitespace-nowrap"
                          >
                            <FaFileAlt className="text-xs" />
                            Get Cost Sheet
                          </motion.button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Mobile Responsive Grid for Units */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
              {priceListUnits.map((unit) => (
                <div
                  key={unit.config}
                  className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-4 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <h3 className="font-bold text-base text-[#1E3A5F]">{unit.config}</h3>
                      {unit.recommended && (
                        <span className="bg-[#E07A2F] text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
                          Most Popular
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-white border border-[#E2E8F0] text-xs font-semibold px-2.5 py-1 rounded-md text-[#172033]">
                        {unit.area}
                      </span>
                      <span className="bg-[#1E3A5F]/10 text-[#1E3A5F] text-xs font-medium px-2.5 py-1 rounded-md">
                        {unit.plan}
                      </span>
                    </div>
                    <div className="mb-3">
                      <div className="text-xs text-[#64748B]">Starting Price</div>
                      <div className="text-xl font-extrabold text-[#172033] flex items-baseline gap-1">
                        <span>{unit.price}</span>
                        <span className="text-xs text-[#E07A2F] font-medium">{unit.priceSuffix}</span>
                      </div>
                    </div>
                    <div className="space-y-1 mb-4">
                      {unit.highlights.map((h) => (
                        <div key={h} className="text-xs text-[#64748B] flex items-center gap-1.5">
                          <Check size={12} className="text-[#E07A2F] flex-shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <motion.button
                    whileTap={{ scale: 0.97 }}
                    type="button"
                    onClick={() => openModal(`price-table-${unit.config}`, `Request Cost Sheet for ${unit.config}`)}
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#E07A2F] text-white font-bold text-xs px-4 py-3 rounded-xl hover:bg-[#c96b22] transition-colors shadow cursor-pointer"
                  >
                    <FaFileAlt className="text-xs" />
                    <span>Get Verified Cost Sheet</span>
                  </motion.button>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Pricing Disclaimer & Guidance Banner */}
          

          {/* Centered View All Button Below Section */}
          <div className="mt-10 text-center flex justify-center">
            <Link
              href="/properties"
              className="inline-flex items-center gap-2 bg-[#1E3A5F] text-white font-bold text-sm sm:text-base px-8 py-3.5 rounded-xl hover:bg-[#162d4a] transition-all shadow-md hover:shadow-lg group"
            >
              <span>View All Available Villas &amp; Units</span>
              <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          3. THE RIDGE MASHOBRA, SHIMLA WALKTHROUGH
      ══════════════════════════════════════════════════════════════════ */}
      <section id="walkthrough" className="py-16 lg:py-24 bg-[#172033] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="text-center max-w-3xl mx-auto mb-10"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-[#E07A2F] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
              <Eye size={13} />
              Full Project Tour | HD Quality
            </div>
            <h2
              className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-3"
              style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}
            >
              The Ridge Mashobra, Shimla Walkthrough
            </h2>
            <p className="text-white/70 text-sm sm:text-base leading-relaxed">
              Click to watch the cinematic walkthrough showcasing the 150-acre master layout, mountain villa designs, pristine cedar surroundings, and live site progress at Mashobra Hills.
            </p>
          </motion.div>

          {/* Video Player Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative aspect-video w-full rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-black"
          >
            {!isVideoPlaying ? (
              <div
                onClick={() => setIsVideoPlaying(true)}
                className="relative w-full h-full cursor-pointer group"
              >
                {/* High Res Thumbnail */}
                <Image
                  src="/images/hoabl/walkthrough-thumbnail.webp"
                  alt="The Ridge Mashobra, Shimla Walkthrough Tour"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  priority
                />
                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />

                {/* Big Animated Play Button */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#E07A2F] text-white flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-[#c96b22] transition-all duration-300">
                    <FaPlay className="text-2xl text-white ml-1" />
                  </div>
                  <span className="mt-4 text-xs sm:text-sm font-semibold tracking-wider uppercase text-white bg-black/60 px-4 py-1.5 rounded-full backdrop-blur-sm border border-white/20">
                    Click To Watch Full Project Tour
                  </span>
                </div>
              </div>
            ) : (
              <iframe
                src="https://www.youtube.com/embed/qLzmK_6XsdY?autoplay=1&rel=0&modestbranding=1"
                title="The Ridge Mashobra, Shimla Walkthrough Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full border-0"
              />
            )}
          </motion.div>

          {/* Walkthrough CTA Bar */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white/5 border border-white/10 rounded-xl p-4 sm:p-6 backdrop-blur-sm">
            <div className="text-center sm:text-left">
              <div className="text-sm font-bold text-white">
                Experience The Ground Reality in Person
              </div>
              <div className="text-xs text-white/60 mt-0.5">
                We coordinate private on-ground site visits with pick-up assistance in Mashobra.
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3">
              <button
                type="button"
                onClick={() => openModal('walkthrough-site-visit', 'Schedule Private Site Visit in Mashobra')}
                className="inline-flex items-center gap-2 bg-[#E07A2F] text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl hover:bg-[#c96b22] transition-all shadow-lg cursor-pointer"
              >
                <FaCalendarCheck className="text-sm" />
                Schedule Site Visit
              </button>
              <a
                href={`tel:${PHONE_NUMBER.replace(/\s+/g, '')}`}
                className="inline-flex items-center gap-2 border border-white/30 text-white font-medium text-xs sm:text-sm px-5 py-3 rounded-xl hover:bg-white/10 transition-colors"
              >
                <FaPhoneAlt className="text-xs" />
                Call Advisor
              </a>
            </div>
          </div>

          
        </div>
      </section>

      {/* Enquiry Modal Triggered by any CTA */}
      <EnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={modalTitle}
        subtitle="Submit your details to receive verified cost sheets, stage payment plans, and private site visit assistance."
        source={modalSource}
      />
    </>
  );
}
