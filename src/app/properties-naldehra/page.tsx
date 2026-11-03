import type { Metadata } from 'next';
import SEOLandingPage from '@/components/ui/SEOLandingPage';
import { properties } from '@/lib/data/properties';
import { websiteImages } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Properties in Naldehra, Shimla | Golf Course Retreats & Mountain Villas',
  description:
    'Discover properties in Naldehra near Shimla. Exclusive mountain villas and tranquil retreats set around India\'s historic 9-hole golf course and cedar forests.',
  alternates: { canonical: 'https://mashobrashimla.com/properties-naldehra' },
};

const faqs = [
  {
    question: 'What makes Naldehra unique for property buyers?',
    answer:
      'Naldehra is famed for its historic 9-hole golf course framed by cedar trees at 2,044 meters elevation, offering an exceptionally quiet, aristocratic mountain ambiance away from tourist hustle.',
  },
  {
    question: 'How far is Naldehra from Shimla and Mashobra?',
    answer:
      'Naldehra is approximately 24 km from Shimla and about 24 km from Mashobra, accessible via well-paved mountain roads through pine and deodar forests.',
  },
];

export default function PropertiesNaldehraPage() {
  return (
    <SEOLandingPage
      title="Properties in Naldehra"
      subtitle="Serene Golf-Side Retreats Surrounded by Ancient Cedars"
      heroImage={websiteImages.locations.mountainRoad.src}
      heroAlt={websiteImages.locations.mountainRoad.alt}
      breadcrumbs={[
        { name: 'Home', url: 'https://mashobrashimla.com' },
        { name: 'Locations', url: 'https://mashobrashimla.com/locations' },
        { name: 'Properties in Naldehra', url: 'https://mashobrashimla.com/properties-naldehra' },
      ]}
      canonicalUrl="https://mashobrashimla.com/properties-naldehra"
      h1="Properties in Naldehra, Himachal Pradesh"
      intro="For buyers seeking peaceful seclusion and timeless mountain charm, Naldehra is one of Himachal Pradesh's best-kept treasures. Renowned for its storied 9-hole golf course designed during Lord Curzon's era, Naldehra is enveloped by sprawling cedar groves, gentle alpine meadows, and an aura of quiet dignity."
      highlights={[
        'Home to one of India’s most historic and scenic golf courses',
        'Remarkably low crowd density and pristine natural environment',
        'Mild, pleasant summer climate and stunning mountain vistas',
        'Close access to Sutlej river viewpoints and Tattapani hot springs',
        'Boutique estate and luxury villa options for discerning connoisseurs',
      ]}
      bodyContent={
        <div className="space-y-4 text-[#64748B] text-sm leading-relaxed">
          <h2 className="text-xl font-bold text-[#172033]" style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}>
            The Essence of Solitude and Distinction
          </h2>
          <p>
            Whether teeing off under the shade of centurial deodars or simply watching the golden sunset bathe the valley, owning a home in Naldehra provides an unmatched sense of calm. Let our advisory assist you in discovering verified property opportunities in this exclusive enclave.
          </p>
        </div>
      }
      properties={properties}
      faqs={faqs}
      ctaSource="properties-naldehra"
    />
  );
}

