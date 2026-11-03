// src/app/properties/[slug]/page.tsx
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { FaMapMarkerAlt, FaHome, FaCheckCircle, FaWhatsapp, FaExclamationTriangle, FaArrowRight } from 'react-icons/fa';
import { properties, getPropertyBySlug } from '@/lib/data/properties';
import EnquiryForm from '@/components/forms/EnquiryForm';
import FAQAccordion from '@/components/ui/FAQAccordion';
import Breadcrumb from '@/components/ui/Breadcrumb';
import JsonLd, { breadcrumbSchema, faqSchema } from '@/components/seo/JsonLd';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return properties.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);
  if (!property) return { title: 'Property Not Found' };

  return {
    title: `${property.title} – ${property.location} | The Ridge Mashobra`,
    description: `${property.configuration} ${property.type === 'villa' ? 'luxury villa' : 'property'} in ${property.location}. ${property.highlights[0]}. Enquire for details.`,
    alternates: { canonical: `https://mashobrashimla.com/properties/${slug}` },
    openGraph: {
      images: [{ url: `https://mashobrashimla.com${property.image}` }],
    },
  };
}

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP || '+91XXXXXXXXXX';

export default async function PropertyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);
  if (!property) notFound();

  const waMsg = `Hello, I am interested in ${property.title} in ${property.location}. Please share details.`;
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, '')}?text=${encodeURIComponent(waMsg)}`;

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: 'Home', url: 'https://mashobrashimla.com' },
            { name: 'Properties', url: 'https://mashobrashimla.com/properties' },
            { name: property.title, url: `https://mashobrashimla.com/properties/${slug}` },
          ]),
          ...(property.faqs ? [faqSchema(property.faqs)] : []),
        ]}
      />

      {/* Sticky CTA */}
      <div className="hidden lg:block fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-[#E2E8F0] shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <div>
            <div className="font-semibold text-[#172033]">{property.title}</div>
            <div className="text-sm text-[#64748B]">{property.location} · {property.configuration}</div>
          </div>
          <div className="flex gap-3">
            <a href={waUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border border-[#25D366] text-[#25D366] font-semibold px-4 py-2 rounded text-sm hover:bg-[#25D366] hover:text-white transition-colors">
              <FaWhatsapp className="text-base" />WhatsApp
            </a>
            <a href="#enquiry-form" className="flex items-center gap-2 bg-[#E07A2F] text-white font-semibold px-6 py-2 rounded text-sm hover:bg-[#c96b22] transition-colors">
              Enquire Now
            </a>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-[#F1F5F9] py-4 border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Breadcrumb items={[
            { label: 'Properties', href: '/properties' },
            { label: property.title },
          ]} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 lg:py-12 pb-24 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Hero Image */}
            <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-6">
              <Image
                src={property.image}
                alt={`${property.title} – ${property.location}`}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 66vw"
              />
            </div>

            {/* Gallery */}
            {property.gallery && property.gallery.length > 0 && (
              <div className="grid grid-cols-4 gap-2 mb-8">
                {property.gallery.slice(0, 4).map((img, i) => (
                  <div key={i} className="relative aspect-square rounded-lg overflow-hidden">
                    <Image src={img} alt={`${property.title} gallery ${i + 1}`} fill className="object-cover" sizes="25vw" />
                  </div>
                ))}
              </div>
            )}

            {/* Overview */}
            <div className="mb-8">
              <h1 className="text-2xl sm:text-3xl font-bold text-[#172033] mb-3" style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}>
                {property.title}
              </h1>
              <div className="flex flex-wrap gap-4 text-sm text-[#64748B] mb-5">
                <span className="flex items-center gap-1.5"><FaMapMarkerAlt className="text-xs text-[#E07A2F]" />{property.location}</span>
                <span className="flex items-center gap-1.5"><FaHome className="text-xs text-[#1E3A5F]" />{property.configuration}</span>
                {property.price && <span className="text-[#1E3A5F] font-semibold">{property.price}</span>}
              </div>
              <div className="prose prose-sm max-w-none text-[#64748B] leading-relaxed whitespace-pre-line">
                {property.description}
              </div>
            </div>

            {/* Developer Note */}
            {property.developerNote && (
              <div className="mb-6 flex items-start gap-2 bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800">
                <FaExclamationTriangle className="text-base text-amber-700 flex-shrink-0 mt-0.5" />
                <span>{property.developerNote}</span>
              </div>
            )}

            {/* Highlights */}
            <div className="mb-8">
              <h2 className="font-bold text-[#172033] text-lg mb-4" style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}>
                Property Highlights
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
              <h2 className="font-bold text-[#172033] text-lg mb-4" style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}>
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
              <h2 className="font-bold text-[#172033] text-lg mb-4" style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}>
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

            {/* FAQs */}
            {property.faqs && property.faqs.length > 0 && (
              <div className="mb-8">
                <h2 className="font-bold text-[#172033] text-lg mb-4" style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}>
                  Frequently Asked Questions
                </h2>
                <FAQAccordion faqs={property.faqs} />
              </div>
            )}
          </div>

          {/* Sidebar - Enquiry Form */}
          <div id="enquiry-form" className="lg:sticky lg:top-24 lg:self-start">
            <div className="bg-white rounded-xl border border-[#E2E8F0] p-6 shadow-sm">
              <h2 className="font-bold text-[#172033] text-lg mb-1" style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}>
                Enquire About This Property
              </h2>
              <p className="text-xs text-[#64748B] mb-5">
                Our property consultant will respond within 24 hours.
              </p>
              <EnquiryForm propertySlug={property.slug} source="property-detail" compact />

              <div className="mt-4 pt-4 border-t border-[#E2E8F0]">
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold py-2.5 rounded text-sm hover:bg-[#1fad55] transition-colors w-full shadow-sm"
                >
                  <FaWhatsapp className="text-base" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Related */}
        <div className="mt-12">
          <h2 className="font-bold text-[#172033] text-xl mb-6" style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}>
            Explore More Properties
          </h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/properties" className="flex items-center gap-1.5 bg-[#1E3A5F] text-white font-semibold px-5 py-2.5 rounded text-sm hover:bg-[#16304f] transition-colors">
              All Properties <FaArrowRight className="text-xs" />
            </Link>
            <Link href="/luxury-villas-mashobra" className="px-5 py-2.5 border border-[#E2E8F0] rounded text-sm text-[#172033] hover:bg-[#F1F5F9] transition-colors">
              Luxury Villas Mashobra
            </Link>
            <Link href="/3-bhk-villas-mashobra" className="px-5 py-2.5 border border-[#E2E8F0] rounded text-sm text-[#172033] hover:bg-[#F1F5F9] transition-colors">
              3 BHK Villas
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

