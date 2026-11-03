// src/app/enquire-now/page.tsx
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import EnquiryForm from '@/components/forms/EnquiryForm';
import Breadcrumb from '@/components/ui/Breadcrumb';
import JsonLd from '@/components/seo/JsonLd';
import { breadcrumbSchema } from '@/components/seo/JsonLd';
import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaClock } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Enquire Now – Property Enquiry Form | The Ridge Mashobra',
  description:
    'Submit your property enquiry for luxury villas and residential properties in Mashobra, Shimla. Request a callback, brochure or site visit from our property consultant.',
  alternates: { canonical: 'https://mashobrashimla.com/enquire-now' },
};

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP || '+91XXXXXXXXXX';
const WHATSAPP_MSG = 'Hello, I am interested in properties in Mashobra, Shimla. Please share details.';

export default function EnquireNowPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: 'https://mashobrashimla.com' },
          { name: 'Enquire Now', url: 'https://mashobrashimla.com/enquire-now' },
        ])}
      />

      {/* 1. FULL WIDTH HERO SECTION */}
      <section className="relative w-full min-h-[380px] sm:min-h-[440px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/hero/hero-mountain-villa.webp"
          alt="Luxury mountain villa enquiry in Mashobra, Shimla"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#1E3A5F]/85 to-[#0f172a]/75" />

        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 py-16 text-center flex flex-col items-center">
          <nav aria-label="Breadcrumb" className="inline-flex items-center gap-2 text-xs sm:text-sm text-white/70 mb-4 bg-white/10 px-4 py-1.5 rounded-full backdrop-blur-xs border border-white/10">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-white/40">/</span>
            <span className="text-[#E07A2F] font-semibold">Enquire Now</span>
          </nav>

          <span className="text-[#E07A2F] text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2">
            Direct Developer &amp; Advisory Channel
          </span>

          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3"
            style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}
          >
            Property Enquiry &amp; Consultation
          </h1>

          <p className="text-white/85 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Connect directly with our mountain real estate specialists to receive verified brochures, pricing schedules, and private on-ground site visit coordination.
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-[#F1F5F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl border border-[#E2E8F0] p-6 sm:p-8">
                <h1
                  className="text-2xl sm:text-3xl font-bold text-[#172033] mb-2"
                  style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}
                >
                  Property Enquiry Form
                </h1>
                <p className="text-[#64748B] text-sm mb-8">
                  Fill in your details below and our property consultant will contact you within 24 hours.
                </p>
                <EnquiryForm source="enquire-now" />
              </div>
            </div>

            {/* Contact Sidebar */}
            <div className="space-y-5">
              <div className="bg-[#1E3A5F] text-white rounded-xl p-6">
                <h2 className="font-bold text-lg mb-4" style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}>
                  Get in Touch
                </h2>
                <div className="space-y-4 text-sm">
                  <div className="flex items-center gap-3">
                    <FaPhoneAlt className="text-[#E07A2F] text-xs flex-shrink-0" />
                    <div>
                      <div className="text-white/60 text-xs mb-0.5">Phone / WhatsApp</div>
                      <a href="tel:+91XXXXXXXXXX" className="text-white hover:text-[#E07A2F] transition-colors">
                        +91-XXXXXXXXXX
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaEnvelope className="text-[#E07A2F] text-xs flex-shrink-0" />
                    <div>
                      <div className="text-white/60 text-xs mb-0.5">Email</div>
                      <a href="mailto:info@mashobrashimla.com" className="text-white hover:text-[#E07A2F] transition-colors">
                        info@mashobrashimla.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaClock className="text-[#E07A2F] text-xs flex-shrink-0" />
                    <div>
                      <div className="text-white/60 text-xs mb-0.5">Business Hours</div>
                      <span>Mon–Sat, 9:00 AM – 7:00 PM</span>
                    </div>
                  </div>
                </div>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, '')}?text=${encodeURIComponent(WHATSAPP_MSG)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold py-3 rounded hover:bg-[#1fad55] transition-colors w-full text-sm shadow-md"
                >
                  <FaWhatsapp className="text-base" />
                  Chat on WhatsApp
                </a>
              </div>

              <div className="bg-white rounded-xl border border-[#E2E8F0] p-6">
                <h3 className="font-semibold text-[#172033] mb-3">Why Enquire With Us?</h3>
                <ul className="space-y-2 text-sm text-[#64748B]">
                  {[
                    'Genuine property information',
                    'Site visit coordination',
                    'Buyer support and guidance',
                    'Documentation assistance',
                    'No-pressure consultancy',
                    'Responds within 24 hours',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#E07A2F] rounded-full flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs text-amber-800 leading-relaxed">
                <strong>Disclaimer:</strong> This is an independent property consultancy website. We are not the official developer of The Ridge Mashobra project. Always verify project details and conduct due diligence before any property transaction.
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

