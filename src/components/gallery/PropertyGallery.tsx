'use client';

import { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaChevronLeft, FaChevronRight, FaExpand, FaCamera, FaImages } from 'react-icons/fa';

export interface PropertyGalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

interface PropertyGalleryProps {
  images: PropertyGalleryImage[];
  propertyTitle: string;
}

export default function PropertyGallery({ images, propertyTitle }: PropertyGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const nextImage = useCallback(
    (e?: React.MouseEvent) => {
      e?.stopPropagation();
      if (lightboxIndex === null) return;
      setLightboxIndex((prev) => (prev! + 1) % images.length);
    },
    [lightboxIndex, images.length]
  );

  const prevImage = useCallback(
    (e?: React.MouseEvent) => {
      e?.stopPropagation();
      if (lightboxIndex === null) return;
      setLightboxIndex((prev) => (prev! - 1 + images.length) % images.length);
    },
    [lightboxIndex, images.length]
  );

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

  if (!images || images.length === 0) return null;

  const mainImage = images[0];
  const sideImages = images.slice(1, 5);

  return (
    <div className="mb-10 sm:mb-14">
      {/* Mosaic Gallery Layout */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2.5 sm:gap-3.5 rounded-2xl overflow-hidden border border-[#E2E8F0] bg-slate-100 p-2 sm:p-2.5 shadow-sm">
        {/* Main Large Image */}
        <div
          onClick={() => openLightbox(0)}
          className="md:col-span-2 relative aspect-[16/11] md:aspect-auto md:h-full min-h-[280px] sm:min-h-[380px] rounded-xl overflow-hidden cursor-pointer group bg-slate-200"
        >
          <Image
            src={mainImage.src}
            alt={mainImage.alt}
            fill
            priority
            className="object-cover group-hover:scale-104 transition-transform duration-700 ease-out"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

          {/* Badge */}
          <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
            <span className="inline-flex items-center gap-1.5 bg-[#1E3A5F]/90 backdrop-blur-md text-white text-[11px] sm:text-xs font-semibold px-3 py-1.5 rounded-full border border-white/15 shadow-xs">
              <FaCamera className="text-[#E07A2F] text-[10px]" />
              <span>Verified Photography</span>
            </span>
          </div>

          {/* Bottom Caption & Expand Button */}
          <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex items-end justify-between text-white">
            <div>
              <p className="text-xs sm:text-sm font-semibold text-white/95 drop-shadow-xs line-clamp-1">
                {mainImage.caption || propertyTitle}
              </p>
              <p className="text-[10px] sm:text-xs text-white/75 mt-0.5">Click to view full screen</p>
            </div>
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-[#E07A2F] transition-colors shadow-xs">
              <FaExpand className="text-xs" />
            </div>
          </div>
        </div>

        {/* 4 Supporting Thumbnails */}
        <div className="md:col-span-2 grid grid-cols-2 gap-2.5 sm:gap-3.5">
          {sideImages.map((img, idx) => {
            const actualIndex = idx + 1;
            const isLast = idx === 3 && images.length > 5;
            const remainingCount = images.length - 5;

            return (
              <div
                key={actualIndex}
                onClick={() => openLightbox(actualIndex)}
                className="relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer group bg-slate-200"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-106 transition-transform duration-500 ease-out"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 group-hover:opacity-75 transition-opacity" />

                {/* Last image overlay count */}
                {isLast && remainingCount > 0 ? (
                  <div className="absolute inset-0 bg-black/65 backdrop-blur-2xs flex flex-col items-center justify-center text-white text-center p-2 group-hover:bg-black/75 transition-colors">
                    <FaImages className="text-xl sm:text-2xl text-[#E07A2F] mb-1.5" />
                    <span className="text-sm sm:text-base font-bold">+{remainingCount} More</span>
                    <span className="text-[10px] sm:text-xs text-white/80">View All {images.length} Photos</span>
                  </div>
                ) : (
                  <div className="absolute bottom-2 left-2 right-2 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-[11px] font-medium line-clamp-1 drop-shadow-xs">
                      {img.caption || `View ${actualIndex + 1}`}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* View All Photos Button */}
      <div className="flex justify-end mt-2.5">
        <button
          onClick={() => openLightbox(0)}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#1E3A5F] hover:text-[#E07A2F] transition-colors py-1 px-2 cursor-pointer"
        >
          <FaImages className="text-xs text-[#E07A2F]" />
          <span>Browse all {images.length} verified villa photographs</span>
        </button>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
          >
            {/* Top Toolbar */}
            <div className="absolute top-4 left-4 right-4 z-50 flex items-center justify-between text-white">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15 text-xs font-semibold">
                <span>{propertyTitle}</span>
                <span className="text-white/40">|</span>
                <span className="text-[#E07A2F]">
                  {lightboxIndex + 1} / {images.length}
                </span>
              </div>

              <button
                onClick={closeLightbox}
                className="p-2.5 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all cursor-pointer border border-white/15"
                aria-label="Close lightbox"
              >
                <FaTimes className="text-lg" />
              </button>
            </div>

            {/* Previous Button */}
            <button
              onClick={prevImage}
              className="absolute left-2 sm:left-6 z-50 p-3 sm:p-3.5 rounded-full bg-white/10 hover:bg-[#E07A2F] text-white transition-all cursor-pointer backdrop-blur-md border border-white/15"
              aria-label="Previous image"
            >
              <FaChevronLeft className="text-lg sm:text-xl" />
            </button>

            {/* Next Button */}
            <button
              onClick={nextImage}
              className="absolute right-2 sm:right-6 z-50 p-3 sm:p-3.5 rounded-full bg-white/10 hover:bg-[#E07A2F] text-white transition-all cursor-pointer backdrop-blur-md border border-white/15"
              aria-label="Next image"
            >
              <FaChevronRight className="text-lg sm:text-xl" />
            </button>

            {/* Lightbox Image Container */}
            <motion.div
              key={lightboxIndex}
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl max-h-[80vh] w-full h-[65vh] sm:h-[75vh] flex flex-col items-center justify-center"
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <Image
                  src={images[lightboxIndex].src}
                  alt={images[lightboxIndex].alt}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
              </div>

              {/* Caption */}
              <div className="mt-3.5 text-center text-white max-w-2xl px-4">
                <p className="text-sm sm:text-base font-semibold drop-shadow-xs">
                  {images[lightboxIndex].caption || propertyTitle}
                </p>
                <p className="text-xs text-white/60 mt-0.5">
                  {images[lightboxIndex].alt}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

