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
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Status badge */}
        <span
          className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-semibold backdrop-blur-sm shadow-sm ${statusColors[property.status]}`}
        >
          {statusLabels[property.status]}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1 justify-between">
        <div>
          <h3 className="font-semibold text-[#172033] text-base mb-1 line-clamp-2 group-hover:text-[#1E3A5F] transition-colors">
            {property.title}
          </h3>

          <div className="flex items-center gap-1.5 text-[#64748B] text-sm mb-2">
            <FaMapMarkerAlt className="text-xs text-[#E07A2F] flex-shrink-0" />
            <span>{property.location}</span>
          </div>

          <div className="flex items-center gap-1.5 text-[#64748B] text-sm mb-3">
            <FaHome className="text-xs text-[#1E3A5F] flex-shrink-0" />
            <span>{property.configuration}</span>
          </div>

          {/* Highlights */}
          <div className="mb-4 space-y-1">
            {property.highlights.slice(0, 2).map((h) => (
              <div key={h} className="flex items-center gap-1.5 text-xs text-[#64748B]">
                <span className="w-1.5 h-1.5 bg-[#E07A2F] rounded-full flex-shrink-0" />
                <span>{h}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          {/* Price */}
          {property.price && (
            <div className="mb-4 pt-2 border-t border-[#F1F5F9]">
              <span className="text-[#1E3A5F] font-bold text-sm">{property.price}</span>
              {property.priceNote && (
                <p className="text-xs text-[#64748B] mt-0.5">{property.priceNote}</p>
              )}
            </div>
          )}

          {/* Actions */}
          <div className="flex gap-2 pt-1">
            <Link
              href={`/properties/${property.slug}`}
              className="flex-1 flex items-center justify-center gap-1.5 border border-[#1E3A5F] text-[#1E3A5F] text-sm font-medium py-2 rounded hover:bg-[#1E3A5F] hover:text-white transition-all duration-200 group/btn"
            >
              <span>View Details</span>
              <FaArrowRight className="text-xs group-hover/btn:translate-x-1 transition-transform duration-200" />
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
              className="bg-[#E07A2F] text-white text-sm font-medium px-4 py-2 rounded hover:bg-[#c96b22] active:scale-95 transition-all duration-200 cursor-pointer shadow-sm"
            >
              Enquire
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

