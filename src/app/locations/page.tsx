// src/app/locations/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { locations } from '@/lib/data/locations';
import JsonLd, { breadcrumbSchema } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Property Locations – Mashobra, Shimla, Kufri, Naldehra',
  description:
    'Explore property locations near Shimla – Mashobra, Kufri and Naldehra. Premium residential areas in Himachal Pradesh with mountain views and peaceful surroundings.',
  alternates: { canonical: 'https://mashobrashimla.com/locations' },
};

export default function LocationsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: 'Home', url: 'https://mashobrashimla.com' },
        { name: 'Locations', url: 'https://mashobrashimla.com/locations' },
      ])} />

      <div className="bg-[#1E3A5F] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-4">
            <nav className="flex items-center gap-1 text-sm text-white/60">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">Locations</span>
            </nav>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white" style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}>
            Premium Locations in Himachal Pradesh
          </h1>
          <p className="text-white/70 mt-2 max-w-2xl">
            Explore the most desirable residential locations in the Shimla region — Mashobra, Kufri, Naldehra and Shimla city.
          </p>
        </div>
      </div>

      <section className="py-12 lg:py-16 bg-[#F1F5F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {locations.map((loc) => (
              <Link key={loc.slug} href={`/locations/${loc.slug}`} className="group bg-white rounded-xl border border-[#E2E8F0] overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={loc.image}
                    alt={`Properties in ${loc.name}, Himachal Pradesh`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6">
                  <h2 className="font-bold text-[#172033] text-xl mb-1 group-hover:text-[#1E3A5F] transition-colors" style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}>
                    {loc.name}
                  </h2>
                  <p className="text-[#E07A2F] text-sm font-medium mb-3">{loc.tagline}</p>
                  <p className="text-[#64748B] text-sm leading-relaxed line-clamp-3 mb-4">
                    {loc.description.split('\n')[0]}
                  </p>
                  <div className="flex items-center gap-1.5 text-[#1E3A5F] font-semibold text-sm">
                    Explore {loc.name} <ArrowRight size={15} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

