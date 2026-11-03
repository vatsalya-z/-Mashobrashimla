import type { Metadata } from 'next';
import SEOLandingPage from '@/components/ui/SEOLandingPage';
import { properties } from '@/lib/data/properties';
import { websiteImages } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Property in Mashobra, Shimla | Buy Villas & Residential Homes',
  description:
    'Find residential property in Mashobra, Shimla. Compare luxury villas, 3 BHK & 4 BHK homes, and holiday retreats amidst Himalayan cedar forests. Verified property listings.',
  alternates: { canonical: 'https://mashobrashimla.com/property-in-mashobra' },
};

const faqs = [
  {
    question: 'What types of residential properties are available in Mashobra?',
    answer:
      'Mashobra features newly constructed luxury villas, gated community residences, and boutique holiday homes ranging from 2 BHK to 4 BHK configurations.',
  },
  {
    question: 'What is the connectivity like from Mashobra to Shimla?',
    answer:
      'Mashobra is connected by a well-maintained scenic road (approx. 13 km), taking approximately 30 to 40 minutes to reach central Shimla, making daily commuting or visiting the city seamless.',
  },
  {
    question: 'How do water and power infrastructure operate in Mashobra?',
    answer:
      'Modern developments in Mashobra incorporate dedicated water storage, rainwater harvesting systems, and DG power backup to guarantee uninterrupted comfort throughout the year.',
  },
];

export default function PropertyInMashobraPage() {
  const mashobraProps = properties.filter((p) => p.location.toLowerCase().includes('mashobra'));

  return (
    <SEOLandingPage
      title="Property in Mashobra"
      subtitle="Your Gateway to Tranquil Living in Himachal's Pine Belt"
      heroImage={websiteImages.locations.mashobraForest.src}
      heroAlt={websiteImages.locations.mashobraForest.alt}
      breadcrumbs={[
        { name: 'Home', url: 'https://mashobrashimla.com' },
        { name: 'Properties', url: 'https://mashobrashimla.com/properties' },
        { name: 'Property in Mashobra', url: 'https://mashobrashimla.com/property-in-mashobra' },
      ]}
      canonicalUrl="https://mashobrashimla.com/property-in-mashobra"
      h1="Property in Mashobra, Shimla"
      intro="For buyers wishing to relocate or invest in Himachal Pradesh, residential property in Mashobra represents the gold standard of mountain real estate. Offering pristine deodar forests, crisp mountain air, and close proximity to Shimla, Mashobra allows you to enjoy an unspoiled natural sanctuary without compromising on accessibility."
      highlights={[
        'Prime location in the renowned Shimla-Mashobra-Naldehra belt',
        'Close to historic landmarks like Wildflower Hall and Craignano Nature Park',
        'Abundant natural sunlight with south and southwest-facing slopes',
        'Ideal climate offering cool summers and picturesque winter snowfalls',
        'Tailored advisory for seamless legal due diligence and site visits',
      ]}
      bodyContent={
        <div className="space-y-4 text-[#64748B] text-sm leading-relaxed">
          <h2 className="text-xl font-bold text-[#172033]" style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}>
            Why Buyers are Moving from City Congestion to Mashobra
          </h2>
          <p>
            Unlike denser urban locations, Mashobra has preserved its forested ridge topography. Homeowners enjoy uninterrupted forest walks, bird watching, and unobstructed panoramic vistas of the Shivalik and Pir Panjal ranges.
          </p>
          <p>
            Browse our curated selections and get in touch with our local property consultants to find a residence that fits your family&apos;s lifestyle and budget aspirations.
          </p>
        </div>
      }
      properties={mashobraProps}
      faqs={faqs}
      ctaSource="property-in-mashobra"
    />
  );
}

