import type { Metadata } from 'next';
import SEOLandingPage from '@/components/ui/SEOLandingPage';
import { properties } from '@/lib/data/properties';
import { websiteImages } from '@/lib/images';

export const metadata: Metadata = {
  title: '4 BHK Villas in Mashobra, Shimla | Grand Mountain Living',
  description:
    'Explore expansive 4 BHK luxury villas in Mashobra, Shimla. Grand living spaces, panoramic Himalayan views, private terraces, and premium finishes in Himachal Pradesh.',
  alternates: { canonical: 'https://mashobrashimla.com/4-bhk-villas-mashobra' },
};

const faqs = [
  {
    question: 'What makes 4 BHK villas in Mashobra distinct?',
    answer:
      '4 BHK villas provide expansive square footage, multiple private viewing terraces, dedicated staff quarters in select units, and sprawling social entertainment areas designed for multi-generational families.',
  },
  {
    question: 'Are 4 BHK villas in high demand in Mashobra?',
    answer:
      'Due to strict land zoning and limited building footprints in Himachal Pradesh, luxury 4 BHK villas are rare and command high demand among affluent families and connoisseur investors.',
  },
  {
    question: 'Can these villas accommodate family gatherings and events?',
    answer:
      'Yes, the spacious living areas, open verandas, and private garden or deck spaces are specifically designed to entertain guests against the backdrop of the Himalayan sunset.',
  },
];

export default function FourBhkVillasMashobraPage() {
  const fourBhkProps = properties.filter((p) => p.category.includes('4bhk'));

  return (
    <SEOLandingPage
      title="4 BHK Villas in Mashobra"
      subtitle="Grand Architectural Scale, Sprawling Terraces & Himalayan Panoramas"
      heroImage={websiteImages.villas[5].src}
      heroAlt={websiteImages.villas[5].alt}
      breadcrumbs={[
        { name: 'Home', url: 'https://mashobrashimla.com' },
        { name: 'Properties', url: 'https://mashobrashimla.com/properties' },
        { name: '4 BHK Villas in Mashobra', url: 'https://mashobrashimla.com/4-bhk-villas-mashobra' },
      ]}
      canonicalUrl="https://mashobrashimla.com/4-bhk-villas-mashobra"
      h1="4 BHK Luxury Villas in Mashobra, Shimla"
      intro="For those who demand grandeur, space, and privacy, our 4 BHK luxury villas in Mashobra, Shimla offer an elevated standard of living. Featuring sweeping double-height living rooms, multiple private view-decks, and superior natural stone and hardwood finishes, these homes represent the pinnacle of Himachal hillside living."
      highlights={[
        'Expansive 4-bedroom layouts with en-suite bathrooms and walk-in dressing areas',
        'Spectacular 180-degree unobstructed Himalayan mountain vistas',
        'Multiple private sun decks, terraces, and landscaped sit-out zones',
        'Large family lounge and entertainment zones with cozy fire-places',
        'Dedicated vehicle parking and full backup infrastructure',
      ]}
      bodyContent={
        <div className="space-y-4 text-[#64748B] text-sm leading-relaxed">
          <h2 className="text-xl font-bold text-[#172033]" style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}>
            Unrivalled Grandeur for Discerning Families
          </h2>
          <p>
            Whether hosting grand family reunions during festive seasons or retreating to peaceful solitude amidst nature, a 4 BHK villa delivers uncompromised versatility. Wake up to mountain mist curling through pine crowns and spend evenings under star-studded Himalayan skies.
          </p>
        </div>
      }
      properties={fourBhkProps}
      faqs={faqs}
      ctaSource="4-bhk-villas-mashobra"
    />
  );
}

