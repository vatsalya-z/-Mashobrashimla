// src/app/contact-us/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaClock } from 'react-icons/fa';
import EnquiryForm from '@/components/forms/EnquiryForm';
import JsonLd, { breadcrumbSchema } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Contact Us – Property Enquiries for Mashobra, Shimla',
  description:
    'Contact our property consultant for enquiries about luxury villas and residential properties in Mashobra, Shimla. Call, WhatsApp or email us.',
  alternates: { canonical: 'https://mashobrashimla.com/contact-us' },
};

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP || '+91XXXXXXXXXX';
const WHATSAPP_MSG = 'Hello, I am interested in properties in Mashobra, Shimla. Please share details.';

export default function ContactUsPage() {
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, '')}?text=${encodeURIComponent(WHATSAPP_MSG)}`;

  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: 'Home', url: 'https://mashobrashimla.com' },
        { name: 'Contact Us', url: 'https://mashobrashimla.com/contact-us' },
      ])} />

      <div className="bg-[#1E3A5F] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-4">
            <nav className="flex items-center gap-1 text-sm text-white/60">
              <Link href="/" className="hover:text-white">Home</Link>
              <span>/</span>
              <span className="text-white">Contact Us</span>
            </nav>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white" style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}>
            Contact Us
          </h1>
          <p className="text-white/70 mt-2">
            Get in touch with our property consultant for genuine, helpful guidance.
          </p>
        </div>
      </div>

      <section className="py-12 lg:py-16 bg-[#F1F5F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl border border-[#E2E8F0] p-6 sm:p-8">
                <h2 className="font-bold text-[#172033] text-xl mb-6" style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}>
                  Send Us an Enquiry
                </h2>
                <EnquiryForm source="contact-us" />
              </div>
            </div>

            {/* Info */}
            <div className="space-y-5">
              <div className="bg-white rounded-xl border border-[#E2E8F0] p-6">
                <h3 className="font-bold text-[#172033] mb-5" style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}>
                  Contact Information
                </h3>
                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <FaPhoneAlt className="text-[#E07A2F] text-xs flex-shrink-0 mt-1" />
                    <div>
                      <div className="text-xs text-[#64748B] mb-0.5">Phone / WhatsApp</div>
                      <a href="tel:+91XXXXXXXXXX" className="text-[#172033] font-medium hover:text-[#1E3A5F] transition-colors">
                        +91-XXXXXXXXXX
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaEnvelope className="text-[#E07A2F] text-xs flex-shrink-0 mt-1" />
                    <div>
                      <div className="text-xs text-[#64748B] mb-0.5">Email</div>
                      <a href="mailto:info@mashobrashimla.com" className="text-[#172033] font-medium hover:text-[#1E3A5F] transition-colors">
                        info@mashobrashimla.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaMapMarkerAlt className="text-[#E07A2F] text-xs flex-shrink-0 mt-1" />
                    <div>
                      <div className="text-xs text-[#64748B] mb-0.5">Area of Operation</div>
                      <span className="text-[#172033] font-medium">Mashobra, Shimla, Himachal Pradesh</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaClock className="text-[#E07A2F] text-xs flex-shrink-0 mt-1" />
                    <div>
                      <div className="text-xs text-[#64748B] mb-0.5">Business Hours</div>
                      <span className="text-[#172033] font-medium">Monday – Saturday: 9:00 AM – 7:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold py-3.5 rounded-xl w-full hover:bg-[#1fad55] transition-colors shadow-md"
              >
                <FaWhatsapp className="text-lg" />
                Chat on WhatsApp
              </a>

              {/* Google Maps Placeholder */}
              <div className="bg-white rounded-xl border border-[#E2E8F0] overflow-hidden">
                <div className="bg-[#F1F5F9] h-48 flex items-center justify-center text-[#64748B] text-sm">
                  <div className="text-center">
                    <FaMapMarkerAlt className="mx-auto mb-2 text-[#1E3A5F] text-2xl" />
                    <p>Mashobra, Shimla</p>
                    <p className="text-xs">Himachal Pradesh</p>
                  </div>
                </div>
                <div className="p-3 text-xs text-[#64748B]">
                  Google Maps embed will be configured with your verified business address.
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs text-amber-800 leading-relaxed">
                <strong>Note:</strong> We are an independent property consultancy. We do not make booking payments. Do not transfer any payment without verifying directly with the developer.
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

