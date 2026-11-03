// src/app/locations/[slug]/page.tsx
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, CheckCircle, ArrowRight } from 'lucide-react';
import { locations, getLocationBySlug } from '@/lib/data/locations';
import { getPropertiesByLocation } from '@/lib/data/properties';
import PropertyCard from '@/components/ui/PropertyCard';
import EnquiryForm from '@/components/forms/EnquiryForm';
import Breadcrumb from '@/components/ui/Breadcrumb';
import JsonLd, { breadcrumbSchema, faqSchema } from '@/components/seo/JsonLd';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) return { title: 'Location Not Found' };

  return {
    title: `Properties in ${location.name}, Himachal Pradesh | The Ridge Mashobra`,
    description: `Discover luxury villas and residential properties in ${location.name}. ${location.tagline}. Premium mountain homes with Himalayan views.`,
    alternates: { canonical: `https://mashobrashimla.com/locations/${slug}` },
    openGraph: {
      images: [{ url: `https://mashobrashimla.com${location.image}` }],
    },
  };
}

export default async function LocationDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) notFound();

  const locationProperties = getPropertiesByLocation(location.name);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: 'Home', url: 'https://mashobrashimla.com' },
            { name: 'Locations', url: 'https://mashobrashimla.com/locations' },
            { name: location.name, url: `https://mashobrashimla.com/locations/${slug}` },
          ]),
          ...(location.faqs ? [faqSchema(location.faqs)] : []),
        ]}
      />

      {/* Hero */}
      <div className="relative h-72 sm:h-96 overflow-hidden">
        <Image
          src={location.image}
          alt={`${location.name}, Himachal Pradesh – premium residential location`}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#172033]/80 via-[#172033]/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
          <div className="max-w-7xl mx-auto">
            <nav className="flex items-center gap-1 text-sm text-white/60 mb-3">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href="/locations" className="hover:text-white transition-colors">Locations</Link>
              <span>/</span>
              <span className="text-white">{location.name}</span>
            </nav>
            <h1 className="text-3xl sm:text-4xl font-bold text-white" style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}>
              {location.name}
            </h1>
            <p className="text-[#E07A2F] font-medium mt-1">{location.tagline}</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 lg:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            {/* About */}
            <div className="mb-10">
              <h2 className="font-bold text-[#172033] text-2xl mb-4" style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}>
                About {location.name}
              </h2>
              <div className="text-[#64748B] leading-relaxed whitespace-pre-line">
                {location.description}
              </div>
            </div>

            {/* Lifestyle */}
            <div className="mb-10">
              <h2 className="font-bold text-[#172033] text-xl mb-4" style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}>
                Lifestyle in {location.name}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {location.lifestyle.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-[#64748B]">
                    <CheckCircle size={15} className="text-[#E07A2F] flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Landmarks */}
            <div className="mb-10">
              <h2 className="font-bold text-[#172033] text-xl mb-4" style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}>
                Nearby Landmarks
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {location.landmarks.map((landmark) => (
                  <div key={landmark} className="bg-[#F1F5F9] rounded-lg px-3 py-2 text-sm text-[#172033] flex items-center gap-1.5">
                    <MapPin size={12} className="text-[#1E3A5F]" />
                    {landmark}
                  </div>
                ))}
              </div>
            </div>

            {/* Connectivity */}
            <div className="mb-10">
              <h2 className="font-bold text-[#172033] text-xl mb-4" style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}>
                Connectivity
              </h2>
              <div className="space-y-2">
                {location.connectivity.map((c) => (
                  <div key={c} className="flex items-center gap-2 text-sm text-[#64748B]">
                    <span className="w-1.5 h-1.5 bg-[#E07A2F] rounded-full flex-shrink-0" />
                    {c}
                  </div>
                ))}
              </div>
            </div>

            {/* Properties */}
            {locationProperties.length > 0 && (
              <div className="mb-10">
                <h2 className="font-bold text-[#172033] text-xl mb-5" style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}>
                  Properties in {location.name}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {locationProperties.map((p) => (
                    <PropertyCard key={p.id} property={p} />
                  ))}
                </div>
                <div className="mt-5">
                  <Link href="/properties" className="flex items-center gap-1.5 text-[#1E3A5F] font-semibold text-sm hover:text-[#E07A2F] transition-colors">
                    View All Properties <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            )}

            {/* FAQs */}
            {location.faqs && location.faqs.length > 0 && (
              <div>
                <h2 className="font-bold text-[#172033] text-xl mb-4" style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}>
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {location.faqs.map((faq) => (
                    <div key={faq.question} className="bg-[#F1F5F9] rounded-xl p-5">
                      <h3 className="font-semibold text-[#172033] mb-2 text-sm">{faq.question}</h3>
                      <p className="text-sm text-[#64748B] leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="bg-white rounded-xl border border-[#E2E8F0] p-6 shadow-sm">
              <h3 className="font-bold text-[#172033] text-lg mb-4" style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}>
                Enquire About Properties in {location.name}
              </h3>
              <EnquiryForm
                source={`location-${location.slug}`}
                compact
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

