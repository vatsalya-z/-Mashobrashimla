// src/app/properties/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/ui/Breadcrumb';
import PropertyCard from '@/components/ui/PropertyCard';
import { properties } from '@/lib/data/properties';
import JsonLd, { breadcrumbSchema } from '@/components/seo/JsonLd';
import { FaSlidersH } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Properties in Mashobra, Shimla – Luxury Villas & Homes',
  description:
    'Browse luxury villas, 3 BHK and 4 BHK residential properties in Mashobra, Shimla and Kufri. Premium mountain homes with Himalayan views in Himachal Pradesh.',
  alternates: { canonical: 'https://mashobrashimla.com/properties' },
};

export default function PropertiesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: 'https://mashobrashimla.com' },
          { name: 'Properties', url: 'https://mashobrashimla.com/properties' },
        ])}
      />

      {/* Header */}
      <div className="bg-[#1E3A5F] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-4">
            <nav className="flex items-center gap-1 text-sm text-white/60">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">Properties</span>
            </nav>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white" style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}>
            Properties in Mashobra &amp; Shimla
          </h1>
          <p className="text-white/70 mt-2 max-w-2xl">
            Explore premium luxury villas, 3 BHK and 4 BHK mountain homes in Mashobra, Shimla, Kufri and Naldehra.
          </p>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="bg-white border-b border-[#E2E8F0] py-4 sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 overflow-x-auto pb-1">
            <span className="flex items-center gap-1.5 text-sm text-[#64748B] font-medium flex-shrink-0">
              <FaSlidersH className="text-xs" />
              Filter:
            </span>
            {[
              { label: 'All', href: '/properties' },
              { label: 'Luxury Villas', href: '/luxury-villas-mashobra' },
              { label: '3 BHK', href: '/3-bhk-villas-mashobra' },
              { label: '4 BHK', href: '/4-bhk-villas-mashobra' },
              { label: 'Mashobra', href: '/locations/mashobra' },
              { label: 'Shimla', href: '/locations/shimla' },
              { label: 'Second Homes', href: '/luxury-second-homes' },
            ].map((f) => (
              <Link
                key={f.href}
                href={f.href}
                className="flex-shrink-0 px-4 py-1.5 border border-[#E2E8F0] rounded-full text-sm text-[#172033] hover:bg-[#1E3A5F] hover:text-white hover:border-[#1E3A5F] transition-colors"
              >
                {f.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Listings */}
      <section className="py-12 bg-[#F1F5F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-sm text-[#64748B] mb-6">{properties.length} properties found</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>

          {/* Landing page links */}
          <div className="mt-12 p-6 bg-white rounded-xl border border-[#E2E8F0]">
            <h2 className="font-semibold text-[#172033] mb-4" style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}>
              Browse by Category
            </h2>
            <div className="flex flex-wrap gap-3">
              {[
                { label: 'Luxury Villas Mashobra', href: '/luxury-villas-mashobra' },
                { label: '3 BHK Villas Mashobra', href: '/3-bhk-villas-mashobra' },
                { label: '4 BHK Villas Mashobra', href: '/4-bhk-villas-mashobra' },
                { label: 'Luxury Second Homes', href: '/luxury-second-homes' },
                { label: 'Holiday Homes Himachal', href: '/holiday-homes-himachal' },
                { label: 'Properties in Kufri', href: '/properties-kufri' },
                { label: 'Properties in Naldehra', href: '/properties-naldehra' },
                { label: 'The Ridge Mashobra', href: '/projects/the-ridge-mashobra' },
              ].map((cat) => (
                <Link
                  key={cat.href}
                  href={cat.href}
                  className="px-4 py-2 bg-[#F1F5F9] rounded-lg text-sm text-[#1E3A5F] font-medium hover:bg-[#1E3A5F] hover:text-white transition-colors"
                >
                  {cat.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

