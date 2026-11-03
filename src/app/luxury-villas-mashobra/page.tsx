import type { Metadata } from 'next';
import SEOLandingPage from '@/components/ui/SEOLandingPage';
import { properties } from '@/lib/data/properties';
import { websiteImages } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Luxury Villas in Mashobra, Shimla | Premium Mountain Villas for Sale',
  description:
    'Explore luxury villas in Mashobra, Shimla. Thoughtfully planned 3 BHK & 4 BHK mountain homes surrounded by Deodar forests with panoramic Himalayan views. Schedule a visit.',
  alternates: { canonical: 'https://mashobrashimla.com/luxury-villas-mashobra' },
};

const faqs = [
  {
    question: 'Why choose a luxury villa in Mashobra over Shimla city?',
    answer:
      'Mashobra offers a tranquil, low-density residential environment set within dense pine and deodar forests, away from tourist congestion while remaining just 13 km (30–40 mins) from Shimla city centre.',
  },
  {
    question: 'What configurations are offered in Mashobra luxury villas?',
    answer:
      'Most luxury developments in Mashobra, such as The Ridge Mashobra, offer 3 BHK and 4 BHK configurations with private balconies, panoramic valley views, and modern amenities.',
  },
  {
    question: 'Can non-residents of Himachal Pradesh buy luxury villas in Mashobra?',
    answer:
      'Yes, non-residents can purchase apartments and villas in HRERA-approved residential projects and designated developments governed under Section 118 of the HP Tenancy and Land Reforms Act.',
  },
  {
    question: 'How do I book a site visit to view luxury villas in Mashobra?',
    answer:
      'You can submit an enquiry form on our website or call our property consultancy team. We coordinate scheduled private site visits and comprehensive project walkthroughs.',
  },
];

export default function LuxuryVillasMashobraPage() {
  const villaProps = properties.filter((p) => p.category.includes('luxury-villa'));

  return (
    <SEOLandingPage
      title="Luxury Villas in Mashobra"
      subtitle="Exclusive Mountain Residencies Amidst Deodar Cedars & Himalayan Vistas"
      heroImage={websiteImages.hero.mountainVilla.src}
      heroAlt={websiteImages.hero.mountainVilla.alt}
      breadcrumbs={[
        { name: 'Home', url: 'https://mashobrashimla.com' },
        { name: 'Properties', url: 'https://mashobrashimla.com/properties' },
        { name: 'Luxury Villas in Mashobra', url: 'https://mashobrashimla.com/luxury-villas-mashobra' },
      ]}
      canonicalUrl="https://mashobrashimla.com/luxury-villas-mashobra"
      h1="Luxury Villas in Mashobra, Shimla"
      intro="Mashobra stands as one of the most prestigious hill retreats in Himachal Pradesh. For discerning buyers seeking an exquisite mountain sanctuary, luxury villas in Mashobra combine contemporary architectural comfort with uninterrupted Himalayan views, clean alpine air, and undisturbed tranquility. Discover premium 3 BHK and 4 BHK villas designed for fine living and lasting appreciation."
      highlights={[
        'Unrivaled views of Himalayan peaks and verdant valleys',
        'Surrounded by pristine Deodar and pine woodlands',
        'Just 13 km from Shimla Mall Road and key conveniences',
        'Spacious multi-level layouts with sprawling balconies',
        'High build quality with stone and timber accents',
        'Gated communities offering 24/7 security and power backup',
      ]}
      bodyContent={
        <div className="space-y-4 text-[#64748B] text-sm leading-relaxed">
          <h2 className="text-xl font-bold text-[#172033]" style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}>
            Elevated Living in the Himalayan Foothills
          </h2>
          <p>
            Perched at an elevation of over 2,100 meters, Mashobra has historically been the chosen retreat of dignitaries and connoisseurs of mountain lifestyle. When you invest in a luxury villa here, you invest in an uncompromised quality of life: peaceful morning walks through cedar-scented trails, sun-drenched afternoons, and cosy alpine evenings.
          </p>
          <p>
            Whether you are seeking a vacation home for family getaways, a peaceful retirement haven, or a prestigious second home, our portfolio highlights verified options tailored to the exacting standards of luxury homeowners.
          </p>
        </div>
      }
      properties={villaProps}
      faqs={faqs}
      ctaSource="luxury-villas-mashobra"
    />
  );
}

