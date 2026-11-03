import type { Metadata } from 'next';
import SEOLandingPage from '@/components/ui/SEOLandingPage';
import { properties } from '@/lib/data/properties';
import { websiteImages } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Properties in Kufri, Himachal Pradesh | Mountain Homes & Cottages',
  description:
    'Find residential properties in Kufri, near Shimla. Alpine mountain homes, cottages, and holiday villas amidst snowfall vistas and alpine meadows in Himachal Pradesh.',
  alternates: { canonical: 'https://mashobrashimla.com/properties-kufri' },
};

const faqs = [
  {
    question: 'What is the altitude and climate of Kufri?',
    answer:
      'Kufri sits at an altitude of approximately 2,622 meters (8,600 feet). It experiences crisp alpine summers and reliable winter snowfall between December and February.',
  },
  {
    question: 'How far is Kufri from Mashobra and Shimla?',
    answer:
      'Kufri is roughly 14 km from Mashobra and 16 km from Shimla, making it an easy drive while offering a much higher, alpine mountain environment.',
  },
];

export default function PropertiesKufriPage() {
  return (
    <SEOLandingPage
      title="Properties in Kufri"
      subtitle="Alpine Living, Winter Snowfalls & Panoramic Himalayan Horizons"
      heroImage={websiteImages.locations.pineForest.src}
      heroAlt={websiteImages.locations.pineForest.alt}
      breadcrumbs={[
        { name: 'Home', url: 'https://mashobrashimla.com' },
        { name: 'Locations', url: 'https://mashobrashimla.com/locations' },
        { name: 'Properties in Kufri', url: 'https://mashobrashimla.com/properties-kufri' },
      ]}
      canonicalUrl="https://mashobrashimla.com/properties-kufri"
      h1="Properties in Kufri, Himachal Pradesh"
      intro="Known for its dramatic alpine scenery and famous winter snowfalls, Kufri offers an exhilarating mountain setting just 16 km from Shimla. For property buyers who cherish higher elevations, cool summers, and sweeping views of snow-draped Himalayan peaks, Kufri provides a distinct residential appeal."
      highlights={[
        'High elevation at ~2,622 meters offering pristine alpine climate',
        'Direct access to nature trails, Himalayan Nature Park, and open meadows',
        'Close connectivity to Mashobra (14 km) and Shimla (16 km)',
        'Ideal retreat for winter sport enthusiasts and nature photographers',
        'Boutique vacation home and cottage opportunities',
      ]}
      bodyContent={
        <div className="space-y-4 text-[#64748B] text-sm leading-relaxed">
          <h2 className="text-xl font-bold text-[#172033]" style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}>
            Experience Alpine Living at Its Peak
          </h2>
          <p>
            Kufri&apos;s dramatic topography and cedar forests make every sunrise memorable. Properties in this zone cater to buyers seeking a genuine high-altitude escape with breathtaking vistas across the snow-capped Himalayan ranges.
          </p>
        </div>
      }
      properties={properties}
      faqs={faqs}
      ctaSource="properties-kufri"
    />
  );
}

