'use client';

import { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaChevronLeft, FaChevronRight, FaExpand } from 'react-icons/fa';

export interface LocationGalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

interface LocationGalleryProps {
  images: LocationGalleryImage[];
  locationName: string;
}

export default function LocationGallery({ images, locationName }: LocationGalleryProps) {
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
      setLightboxIndex((prev) => ((prev! + 1) % images.length));
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

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
        {images.map((img, idx) => (
          <div
            key={idx}
            onClick={() => openLightbox(idx)}
            className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 cursor-pointer border border-[#E2E8F0] shadow-xs hover:shadow-md transition-all duration-300"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover group-hover:scale-106 transition-transform duration-500 ease-out"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 25vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
              <div className="flex items-center justify-between w-full text-white">
                <span className="text-xs font-medium line-clamp-1">{img.caption || `${locationName} View ${idx + 1}`}</span>
                <FaExpand className="text-xs flex-shrink-0 ml-1 text-[#E07A2F]" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 sm:p-6"
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-50 text-white/80 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all cursor-pointer"
              aria-label="Close lightbox"
            >
              <FaTimes className="text-xl" />
            </button>

            {/* Prev Button */}
            <button
              onClick={prevImage}
              className="absolute left-3 sm:left-6 z-50 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all cursor-pointer"
              aria-label="Previous image"
            >
              <FaChevronLeft className="text-xl" />
            </button>

            {/* Next Button */}
            <button
              onClick={nextImage}
              className="absolute right-3 sm:right-6 z-50 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all cursor-pointer"
              aria-label="Next image"
            >
              <FaChevronRight className="text-xl" />
            </button>

            {/* Main Lightbox Image */}
            <motion.div
              key={lightboxIndex}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl max-h-[85vh] w-full h-[70vh] flex flex-col items-center justify-center"
            >
              <div className="relative w-full h-full rounded-xl overflow-hidden">
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
              <div className="mt-3 text-center text-white/90">
                <p className="text-sm font-medium">
                  {images[lightboxIndex].caption || `${locationName} Panorama`}
                </p>
                <p className="text-xs text-white/60 mt-0.5">
                  Image {lightboxIndex + 1} of {images.length} · {images[lightboxIndex].alt}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

