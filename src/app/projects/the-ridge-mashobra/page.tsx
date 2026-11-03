// src/app/projects/the-ridge-mashobra/page.tsx
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FaCheckCircle, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';
import EnquiryForm from '@/components/forms/EnquiryForm';
import ProjectGallery from '@/components/gallery/ProjectGallery';
import FAQAccordion from '@/components/ui/FAQAccordion';
import { properties } from '@/lib/data/properties';
import { websiteImages } from '@/lib/images';
import JsonLd, { breadcrumbSchema, faqSchema } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'The Ridge Mashobra – Luxury Villas in Mashobra, Shimla | Property Enquiry',
  description:
    'Enquire about The Ridge Mashobra project – luxury 3 BHK and 4 BHK villas in Mashobra, Shimla with Himalayan views. Independent property consultancy. Not the official developer website.',
  alternates: { canonical: 'https://mashobrashimla.com/projects/the-ridge-mashobra' },
};

const property = properties[0];

const faqs = [
  {
    question: 'Is this the official website for The Ridge Mashobra?',
    answer: 'No. This is an independent property consultancy website. We are not the official developer or any official representative of The Ridge Mashobra project. We facilitate property enquiries, site visits and buyer assistance.',
  },
  {
    question: 'What configurations are available at The Ridge Mashobra?',
    answer: 'The project is known to offer 3 BHK and 4 BHK luxury villa residences. Please contact our property consultant for current availability and exact configurations.',
  },
  {
    question: 'Where is The Ridge Mashobra located?',
    answer: 'The Ridge Mashobra is located in Mashobra village, approximately 13 km from Shimla city centre in Himachal Pradesh.',
  },
  {
    question: 'How can I schedule a site visit to The Ridge Mashobra?',
    answer: 'Submit an enquiry through our form and our property consultant will coordinate a site visit on your behalf.',
  },
  {
    question: 'What is the price of villas at The Ridge Mashobra?',
    answer: 'Pricing is available on request. Please contact our property consultant for current pricing information.',
  },
];

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP || '+91XXXXXXXXXX';
const waMsg = 'Hello, I am interested in The Ridge Mashobra project. Please share details.';

export default function TheRidgeMashobra() {
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, '')}?text=${encodeURIComponent(waMsg)}`;

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: 'Home', url: 'https://mashobrashimla.com' },
            { name: 'Projects', url: 'https://mashobrashimla.com/properties' },
            { name: 'The Ridge Mashobra', url: 'https://mashobrashimla.com/projects/the-ridge-mashobra' },
          ]),
          faqSchema(faqs),
        ]}
      />

      {/* Hero */}
      <section className="relative w-full min-h-[440px] sm:min-h-[500px] flex items-center justify-center overflow-hidden">
        <Image
          src={websiteImages.banners.projectPanorama.src}
          alt={websiteImages.banners.projectPanorama.alt}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#1E3A5F]/80 to-[#0f172a]/75" />
        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center">
          <span className="inline-block bg-[#E07A2F] text-white text-xs font-semibold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
            Mashobra · Shimla
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3" style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}>
            The Ridge Mashobra
          </h1>
          <p className="text-white/85 text-base sm:text-lg max-w-2xl mx-auto mb-6 font-light leading-relaxed">
            Luxury Villas in the Deodar Forests of Mashobra
          </p>
          <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3">
            <div className="bg-white/20 text-white text-xs px-3.5 py-1.5 rounded-full backdrop-blur-xs border border-white/20 font-medium">3 BHK</div>
            <div className="bg-white/20 text-white text-xs px-3.5 py-1.5 rounded-full backdrop-blur-xs border border-white/20 font-medium">4 BHK</div>
            <div className="bg-white/20 text-white text-xs px-3.5 py-1.5 rounded-full backdrop-blur-xs border border-white/20 font-medium">Mashobra, Shimla</div>
            <div className="bg-[#E07A2F] text-white text-xs px-3.5 py-1.5 rounded-full font-semibold shadow-xs">Price on Request</div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 lg:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main */}
          <div className="lg:col-span-2">
            {/* Overview */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-[#172033] mb-4" style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}>
                Project Overview
              </h2>
              <div className="prose prose-sm text-[#64748B] max-w-none leading-relaxed space-y-3">
                <p>The Ridge Mashobra is a residential development set amidst the Deodar cedar forests of Mashobra, Shimla, Himachal Pradesh. Located at an elevation offering Himalayan panoramas, the project offers premium 3 BHK and 4 BHK villa residences designed for families seeking quality mountain living.</p>
                <p>The architectural design blends contemporary construction with natural mountain materials — stone, wood and glass — creating residences that feel connected to the spectacular natural surroundings while offering modern amenities and comfortable living.</p>
                <p>Mashobra&apos;s location — 13 km from Shimla city — makes The Ridge an attractive proposition for families seeking a second home, premium personal residence or long-term property investment in Himachal Pradesh.</p>
              </div>
            </div>

            {/* Quick Facts */}
            <div className="mb-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { label: 'Location', value: 'Mashobra, Shimla' },
                { label: 'Configuration', value: '3 BHK, 4 BHK' },
                { label: 'Type', value: 'Luxury Villas' },
                { label: 'Price', value: 'On Request' },
              ].map(({ label, value }) => (
                <div key={label} className="bg-[#F1F5F9] rounded-xl p-4 text-center">
                  <div className="text-xs text-[#64748B] mb-1">{label}</div>
                  <div className="font-semibold text-[#172033] text-sm">{value}</div>
                </div>
              ))}
            </div>

            {/* Highlights */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-[#172033] mb-4" style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}>
                Key Highlights
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {property.highlights.map((h) => (
                  <div key={h} className="flex items-center gap-2 text-sm text-[#64748B]">
                    <FaCheckCircle className="text-[#E07A2F] text-xs flex-shrink-0" />
                    {h}
                  </div>
                ))}
              </div>
            </div>

            {/* Amenities */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-[#172033] mb-4" style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}>
                Amenities
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {property.amenities.map((a) => (
                  <div key={a} className="bg-[#F1F5F9] rounded-lg px-3 py-2 text-sm text-[#172033] text-center">
                    {a}
                  </div>
                ))}
              </div>
            </div>

            {/* Connectivity */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-[#172033] mb-4" style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}>
                Location &amp; Connectivity
              </h2>
              <div className="space-y-2">
                {property.connectivity.map((c) => (
                  <div key={c} className="flex items-center gap-2 text-sm text-[#64748B]">
                    <FaMapMarkerAlt className="text-[#1E3A5F] text-xs flex-shrink-0" />
                    {c}
                  </div>
                ))}
              </div>
            </div>

            {/* Gallery & Layouts Section */}
            <div className="mb-10">
              <ProjectGallery
                title="Estate Gallery & Architectural Layouts"
                subtitle="High-definition site imagery and floor plans for luxury villas and plots in Mashobra Hills."
              />
            </div>

            {/* FAQs */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-[#172033] mb-4" style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}>
                Frequently Asked Questions
              </h2>
              <FAQAccordion faqs={faqs} />
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:sticky lg:top-24 lg:self-start space-y-4">
            <div className="bg-white rounded-xl border border-[#E2E8F0] p-6 shadow-sm">
              <h3 className="font-bold text-[#172033] mb-4" style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}>
                Enquire About The Ridge Mashobra
              </h3>
              <EnquiryForm propertySlug="the-ridge-mashobra" source="project-page" compact />
              <div className="mt-4 pt-4 border-t border-[#E2E8F0]">
                <a href={waUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold py-2.5 rounded text-sm hover:bg-[#1fad55] transition-colors w-full shadow-sm">
                  <FaWhatsapp className="text-base" />
                  WhatsApp
                </a>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs text-amber-800 leading-relaxed">
              <strong>Disclaimer:</strong> mashobrashimla.com is an independent property consultancy website. We are not the official developer of The Ridge Mashobra. Details are indicative. Conduct independent due diligence before any property decision.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

