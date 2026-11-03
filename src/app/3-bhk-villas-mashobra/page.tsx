import type { Metadata } from 'next';
import SEOLandingPage from '@/components/ui/SEOLandingPage';
import { properties } from '@/lib/data/properties';
import { websiteImages } from '@/lib/images';

export const metadata: Metadata = {
  title: '3 BHK Villas in Mashobra, Shimla | Mountain View Homes for Sale',
  description:
    'Discover 3 BHK luxury villas in Mashobra, Shimla. Ideal for families and second home buyers seeking spacious mountain homes with private balconies and scenic views.',
  alternates: { canonical: 'https://mashobrashimla.com/3-bhk-villas-mashobra' },
};

const faqs = [
  {
    question: 'Who are 3 BHK villas in Mashobra ideal for?',
    answer:
      '3 BHK villas are ideally suited for small-to-medium families, working professionals wanting dedicated home offices, and second home buyers looking for balanced space without overwhelming maintenance.',
  },
  {
    question: 'What is the typical layout of a 3 BHK villa in Mashobra?',
    answer:
      'Typically, layouts feature a ground floor with an expansive living and dining area, modern kitchen, and guest bedroom, while the upper level hosts the master bedroom and third bedroom, each opening onto panoramic balconies.',
  },
  {
    question: 'Are parking and power backup included with 3 BHK villas?',
    answer:
      'Yes, all premier developments in our portfolio include dedicated covered or open vehicle parking and generator power backup for uninterrupted living.',
  },
];

export default function ThreeBhkVillasMashobraPage() {
  const threeBhkProps = properties.filter((p) => p.category.includes('3bhk'));

  return (
    <SEOLandingPage
      title="3 BHK Villas in Mashobra"
      subtitle="Balanced Living, Spacious Balconies & Magnificent Mountain Vistas"
      heroImage={websiteImages.villas[1].src}
      heroAlt={websiteImages.villas[1].alt}
      breadcrumbs={[
        { name: 'Home', url: 'https://mashobrashimla.com' },
        { name: 'Properties', url: 'https://mashobrashimla.com/properties' },
        { name: '3 BHK Villas in Mashobra', url: 'https://mashobrashimla.com/3-bhk-villas-mashobra' },
      ]}
      canonicalUrl="https://mashobrashimla.com/3-bhk-villas-mashobra"
      h1="3 BHK Villas in Mashobra, Shimla"
      intro="Our 3 BHK luxury villas in Mashobra provide the perfect balance of generous living space, low-maintenance efficiency, and majestic Himalayan outlooks. Crafted for both year-round family residence and relaxed weekend getaways, these homes offer contemporary comforts against a backdrop of towering deodars and crisp alpine breezes."
      highlights={[
        'Thoughtfully designed tri-bedroom layouts with en-suite bathrooms',
        'Expansive living lounges featuring large valley-facing glass windows',
        'Private balconies overlooking pine forest slopes and mountain peaks',
        'Modern kitchens and provisions for radiant thermal heating or fireplaces',
        'Dedicated parking and gated community security',
      ]}
      bodyContent={
        <div className="space-y-4 text-[#64748B] text-sm leading-relaxed">
          <h2 className="text-xl font-bold text-[#172033]" style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}>
            The Ideal Configuration for Family Getaways
          </h2>
          <p>
            A 3 BHK villa allows families to host visiting friends and relatives comfortably while providing dedicated space for quiet remote work. With sunlight streaming into high-ceiling living spaces and sweeping terrace views, life in a Mashobra 3 BHK villa is an everyday rejuvenation.
          </p>
        </div>
      }
      properties={threeBhkProps}
      faqs={faqs}
      ctaSource="3-bhk-villas-mashobra"
    />
  );
}

