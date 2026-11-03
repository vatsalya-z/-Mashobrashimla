'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { FaMapMarkerAlt, FaHome, FaArrowRight } from 'react-icons/fa';
import { Property } from '@/types';
import { useEnquiryModal } from '@/context/EnquiryModalContext';

interface PropertyCardProps {
  property: Property;
}

const statusColors = {
  available: 'bg-green-100 text-green-700',
  limited: 'bg-amber-100 text-amber-700',
  'sold-out': 'bg-red-100 text-red-700',
};

const statusLabels = {
  available: 'Available',
  limited: 'Limited Units',
  'sold-out': 'Sold Out',
};

export default function PropertyCard({ property }: PropertyCardProps) {
  const { openEnquiryModal } = useEnquiryModal();
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      whileHover={shouldReduceMotion ? undefined : { y: -6, transition: { duration: 0.25, ease: 'easeOut' } }}
      className="bg-white rounded-xl border border-[#E2E8F0] hover:border-[#1E3A5F]/30 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
        <Image
          src={property.image}
          alt={`${property.title} – ${property.location}`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          sizes="(max-width: 640px) 50vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Status badge */}
        <span
          className={`absolute top-2 left-2 sm:top-3 sm:left-3 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-[9px] sm:text-xs font-semibold backdrop-blur-sm shadow-xs ${statusColors[property.status]}`}
        >
          {statusLabels[property.status]}
        </span>
        {/* Type badge */}
        <span className="absolute top-2 right-2 sm:top-3 sm:right-3 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-[9px] sm:text-xs font-semibold bg-[#1E3A5F]/85 text-white backdrop-blur-sm shadow-xs capitalize">
          {property.type}
        </span>
      </div>

      {/* Content */}
      <div className="p-2.5 sm:p-5 flex flex-col flex-1 justify-between">
        <div>
          <h3 className="font-bold text-[#172033] text-xs sm:text-base mb-1 line-clamp-2 group-hover:text-[#1E3A5F] transition-colors leading-tight sm:leading-snug" style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}>
            {property.title}
          </h3>

          <div className="flex items-center gap-1 sm:gap-1.5 text-[#64748B] text-[10px] sm:text-sm mb-1">
            <FaMapMarkerAlt className="text-[9px] sm:text-xs text-[#E07A2F] flex-shrink-0" />
            <span className="line-clamp-1">{property.location}</span>
          </div>

          <div className="flex items-center gap-1 sm:gap-1.5 text-[#64748B] text-[10px] sm:text-sm mb-2">
            <FaHome className="text-[9px] sm:text-xs text-[#1E3A5F] flex-shrink-0" />
            <span>{property.configuration}</span>
          </div>

          {/* Highlights (visible on larger screens) */}
          <div className="hidden sm:block mb-3 space-y-1">
            {property.highlights.slice(0, 2).map((h) => (
              <div key={h} className="flex items-center gap-1.5 text-xs text-[#64748B] line-clamp-1">
                <span className="w-1.5 h-1.5 bg-[#E07A2F] rounded-full flex-shrink-0" />
                <span>{h}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          {/* Price */}
          {property.price && (
            <div className="mb-2 sm:mb-3 pt-2 border-t border-[#F1F5F9] flex items-baseline justify-between">
              <span className="text-[#1E3A5F] font-bold text-xs sm:text-sm">{property.price}</span>
              {property.status === 'limited' && (
                <span className="text-[9px] sm:text-[10px] text-[#E07A2F] font-semibold">Limited</span>
              )}
            </div>
          )}

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-1.5 sm:gap-2 pt-1">
            <Link
              href={`/properties/${property.slug}`}
              className="flex-1 flex items-center justify-center gap-1 border border-[#1E3A5F] text-[#1E3A5F] text-[10px] sm:text-sm font-semibold py-1.5 sm:py-2 rounded-lg hover:bg-[#1E3A5F] hover:text-white transition-all duration-200 group/btn"
            >
              <span>View Details</span>
              <FaArrowRight className="text-[8px] sm:text-xs group-hover/btn:translate-x-1 transition-transform duration-200" />
            </Link>
            <button
              type="button"
              onClick={() =>
                openEnquiryModal({
                  propertySlug: property.slug,
                  title: `Enquire About ${property.title}`,
                  subtitle: `Request pricing, current availability, and floor plan details for ${property.title} in ${property.location}.`,
                  source: `property-card-${property.slug}`,
                })
              }
              className="bg-[#E07A2F] text-white text-[10px] sm:text-sm font-semibold px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-lg hover:bg-[#c96b22] active:scale-95 transition-all duration-200 cursor-pointer shadow-xs text-center"
            >
              Enquire Now
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

