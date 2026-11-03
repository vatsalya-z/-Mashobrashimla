import type { Metadata } from 'next';
import SEOLandingPage from '@/components/ui/SEOLandingPage';
import { properties } from '@/lib/data/properties';
import { websiteImages } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Luxury Properties in Shimla | Premium Real Estate & Homes for Sale',
  description:
    'Explore luxury properties in Shimla and surrounding locations like Mashobra and Kufri. Premium mountain villas, residences, and luxury second homes in Himachal Pradesh.',
  alternates: { canonical: 'https://mashobrashimla.com/luxury-properties-shimla' },
};

const faqs = [
  {
    question: 'What constitutes a luxury property in the Shimla region?',
    answer:
      'Luxury properties in Shimla feature expansive floor areas, unobstructed Himalayan vistas, private sunlit decks, high-spec thermal insulation, bespoke timber-and-stone architecture, and modern community amenities.',
  },
  {
    question: 'Which areas around Shimla are most popular for luxury real estate?',
    answer:
      'Mashobra, Naldehra, Kufri, and the peaceful outskirts along the NH-5 corridor are the premier micro-markets for luxury villas and expansive hill homes.',
  },
  {
    question: 'How is the capital appreciation for luxury homes in Shimla?',
    answer:
      'Due to strict regional development regulations and geographical scarcity, prime real estate in Mashobra and Shimla enjoys robust long-term capital preservation and steady appreciation.',
  },
];

export default function LuxuryPropertiesShimlaPage() {
  return (
    <SEOLandingPage
      title="Luxury Properties in Shimla"
      subtitle="Exclusive Mountain Estates, Villas & Premium Residences"
      heroImage={websiteImages.locations.shimlaMorning.src}
      heroAlt={websiteImages.locations.shimlaMorning.alt}
      breadcrumbs={[
        { name: 'Home', url: 'https://mashobrashimla.com' },
        { name: 'Properties', url: 'https://mashobrashimla.com/properties' },
        { name: 'Luxury Properties in Shimla', url: 'https://mashobrashimla.com/luxury-properties-shimla' },
      ]}
      canonicalUrl="https://mashobrashimla.com/luxury-properties-shimla"
      h1="Luxury Properties in Shimla & Surrounds"
      intro="Shimla, the Queen of Hill Stations, remains northern India's premier mountain real estate address. From iconic hillside retreats to contemporary luxury villas in suburban enclaves like Mashobra, luxury properties in the Shimla region offer a rare combination of British colonial heritage, modern conveniences, and pristine Himalayan beauty."
      highlights={[
        'Prime micro-markets including Mashobra, Naldehra, and Kufri',
        'Spectacular panoramic Himalayan valley and snow-clad peak vistas',
        'Comprehensive infrastructure with premier schools and medical centers nearby',
        'High privacy and serene environment away from urban congestion',
        'Verified titles and statutory regulatory compliance guidance',
      ]}
      bodyContent={
        <div className="space-y-4 text-[#64748B] text-sm leading-relaxed">
          <h2 className="text-xl font-bold text-[#172033]" style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}>
            The Allure of Owning Property in the Shimla Region
          </h2>
          <p>
            Owning a luxury home in Shimla is an enduring symbol of refined taste. As urban hubs face pollution and lifestyle stress, Himachal Pradesh has become the premier choice for affluent families seeking clean air, tranquil surroundings, and an inspiring work-from-anywhere environment.
          </p>
          <p>
            Our consultancy assists prospective owners in identifying authentic, high-value real estate opportunities with complete transparency and due diligence support.
          </p>
        </div>
      }
      properties={properties}
      faqs={faqs}
      ctaSource="luxury-properties-shimla"
    />
  );
}

