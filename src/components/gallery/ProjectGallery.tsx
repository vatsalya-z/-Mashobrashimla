'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaChevronLeft, FaChevronRight, FaExpand, FaStar, FaArrowRight } from 'react-icons/fa';
import { websiteImages } from '@/lib/images';

interface GalleryItem {
  src: string;
  alt: string;
  title: string;
  category: string;
  width?: number;
  height?: number;
}

interface ProjectGalleryProps {
  title?: string;
  subtitle?: string;
  showLayouts?: boolean;
}

export default function ProjectGallery({
  title = 'High-Definition Project Gallery',
  subtitle = 'Browse verified real estate imagery, estate land parcels, and mountain lifestyle visuals from Mashobra Hills, Shimla.',
  showLayouts = true,
}: ProjectGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Combine gallery items and layout items if requested
  const allItems: GalleryItem[] = [
    ...websiteImages.hoablGallery,
    ...(showLayouts
      ? ((websiteImages as Record<string, unknown>).layouts as GalleryItem[] || []).map((l) => ({
          src: l.src,
          alt: l.alt,
          title: l.title,
          category: 'Layout Plans',
          width: l.width,
          height: l.height,
        }))
      : []),
  ];
  const filteredItems = allItems;

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  useEffect(() => {
    if (typeof document === 'undefined') return;
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [lightboxIndex]);

  const nextImage = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  }, [lightboxIndex, filteredItems.length]);

  const prevImage = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  }, [lightboxIndex, filteredItems.length]);

  // Keyboard accessibility
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, closeLightbox, nextImage, prevImage]);

  return (
    <section className="py-16 lg:py-24 bg-white" id="gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 bg-[#E07A2F]/10 text-[#E07A2F] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
            <FaStar className="text-[10px]" />
            Verified Project Photography
          </div>
          <h2
            className="text-2xl sm:text-4xl font-extrabold text-[#172033] tracking-tight mb-3"
            style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}
          >
            {title}
          </h2>
          <p className="text-[#64748B] text-sm sm:text-base leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Category Tabs */}
        

        {/* Gallery Grid - Responsive 2-column grid on mobile, 4-column on desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.src}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.4) }}
              whileHover={{ y: -4 }}
              onClick={() => openLightbox(index)}
              className="group relative aspect-[3/2] bg-[#F1F5F9] rounded-xl overflow-hidden border border-[#E2E8F0] shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                priority={index < 4}
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-75 group-hover:opacity-90 transition-opacity" />

              {/* Category Badge */}
              <div className="absolute top-2 left-2 sm:top-3 sm:left-3">
                <span className="inline-block bg-[#1E3A5F]/90 backdrop-blur-sm text-white text-[9px] sm:text-[11px] font-medium px-2 py-0.5 rounded-full border border-white/10">
                  {item.category}
                </span>
              </div>

              {/* Expand Icon */}
              <div className="absolute top-2 right-2 sm:top-3 sm:right-3 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white/20 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <FaExpand className="text-[10px] sm:text-xs" />
              </div>

              {/* Bottom Title */}
              <div className="absolute bottom-0 inset-x-0 p-2.5 sm:p-4 text-white">
                <h4 className="font-bold text-xs sm:text-base leading-snug drop-shadow-sm line-clamp-1">
                  {item.title}
                </h4>
                <p className="text-white/70 text-[10px] sm:text-xs mt-0.5 line-clamp-1">
                  Mashobra Hills, Shimla
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-8 text-center text-xs text-[#64748B]">
          Authentic architectural photography and master layout plans from the 150-acre Mashobra Hills mountain estate.
        </div>

        {/* Centered View All Button Below Section */}
        <div className="mt-8 text-center flex justify-center">
          <Link
            href="/projects/the-ridge-mashobra"
            className="inline-flex items-center gap-2 bg-[#1E3A5F] text-white font-bold text-sm sm:text-base px-8 py-3.5 rounded-xl hover:bg-[#162d4a] transition-all shadow-md hover:shadow-lg group"
          >
            <span>View All Project Details &amp; Visuals</span>
            <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Animated Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/95 flex flex-col justify-between p-4 sm:p-6"
            onClick={(e) => {
              if (e.target === e.currentTarget) closeLightbox();
            }}
          >
            {/* Lightbox Topbar */}
            <div className="flex items-center justify-between text-white border-b border-white/10 pb-4">
              <div>
                <div className="text-xs uppercase tracking-wider text-[#E07A2F] font-semibold">
                  {filteredItems[lightboxIndex]?.category} · {lightboxIndex + 1} of {filteredItems.length}
                </div>
                <h3 className="text-base sm:text-lg font-bold">
                  {filteredItems[lightboxIndex]?.title}
                </h3>
              </div>
              <button
                onClick={closeLightbox}
                className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                aria-label="Close lightbox"
              >
                <FaTimes className="text-lg" />
              </button>
            </div>

            {/* Lightbox Central Image */}
            <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
              <motion.div
                key={filteredItems[lightboxIndex]?.src}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="relative w-full h-full max-w-5xl max-h-[75vh]"
              >
                <Image
                  src={filteredItems[lightboxIndex].src}
                  alt={filteredItems[lightboxIndex].alt}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
              </motion.div>

              {/* Prev Button */}
              {filteredItems.length > 1 && (
                <button
                  onClick={prevImage}
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-all duration-200 border border-white/20 shadow-lg cursor-pointer hover:scale-110 active:scale-95"
                  aria-label="Previous image"
                >
                  <FaChevronLeft className="text-lg" />
                </button>
              )}

              {/* Next Button */}
              {filteredItems.length > 1 && (
                <button
                  onClick={nextImage}
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-all duration-200 border border-white/20 shadow-lg cursor-pointer hover:scale-110 active:scale-95"
                  aria-label="Next image"
                >
                  <FaChevronRight className="text-lg" />
                </button>
              )}
            </div>

            {/* Lightbox Caption */}
            <div className="text-center text-white/80 text-xs sm:text-sm border-t border-white/10 pt-3">
              {filteredItems[lightboxIndex]?.alt}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

