import type { Metadata } from 'next';
import SEOLandingPage from '@/components/ui/SEOLandingPage';
import { properties } from '@/lib/data/properties';
import { websiteImages } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Holiday Homes in Himachal Pradesh | Mashobra, Shimla & Kufri',
  description:
    'Find holiday homes for sale in Himachal Pradesh. Charming mountain villas and residences in Mashobra, Shimla, Kufri and Naldehra. Your family getaway awaits.',
  alternates: { canonical: 'https://mashobrashimla.com/holiday-homes-himachal' },
};

const faqs = [
  {
    question: 'Can I rent out my holiday home when not in use?',
    answer:
      'Yes, many owners in the Shimla-Mashobra region utilize home-stay or boutique vacation rental models under Himachal Pradesh tourism guidelines to generate attractive seasonal yields.',
  },
  {
    question: 'Which season is best for enjoying a holiday home in Mashobra?',
    answer:
      'Mashobra offers distinct charms throughout the year: vibrant rhododendron blooms in spring, cool comfortable weather during summer, crystal-clear Himalayan views in autumn, and occasional snowfalls in winter.',
  },
];

export default function HolidayHomesHimachalPage() {
  return (
    <SEOLandingPage
      title="Holiday Homes in Himachal Pradesh"
      subtitle="Scenic Mountain Retreats in Mashobra, Shimla & Beyond"
      heroImage={websiteImages.hero.himalayanValley.src}
      heroAlt={websiteImages.hero.himalayanValley.alt}
      breadcrumbs={[
        { name: 'Home', url: 'https://mashobrashimla.com' },
        { name: 'Properties', url: 'https://mashobrashimla.com/properties' },
        { name: 'Holiday Homes Himachal', url: 'https://mashobrashimla.com/holiday-homes-himachal' },
      ]}
      canonicalUrl="https://mashobrashimla.com/holiday-homes-himachal"
      h1="Holiday Homes in Himachal Pradesh"
      intro="Invest in unforgettable family vacations with a dedicated holiday home in Himachal Pradesh. Set amidst rolling pine-clad ridges and dramatic mountain valleys, our curated properties in Mashobra, Shimla, and Kufri offer the quintessential hill-station experience with all modern residential comforts."
      highlights={[
        'Prime vacation hubs: Mashobra, Shimla, Kufri, and Naldehra',
        'Close to world-class resorts, heritage golf courses, and apple orchards',
        'Year-round scenic appeal from crisp summers to snowy winter landscapes',
        'High rental yield potential via approved vacation stay programs',
        'Comprehensive consultancy covering site selection to acquisition support',
      ]}
      bodyContent={
        <div className="space-y-4 text-[#64748B] text-sm leading-relaxed">
          <h2 className="text-xl font-bold text-[#172033]" style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}>
            Turn Every Weekend into an Alpine Holiday
          </h2>
          <p>
            Rather than booking crowded hotels, enjoy the intimacy and pride of arriving at your own mountain home. Whether gathering around a warm table for family dinners or savoring fresh local apples on the terrace, our holiday home portfolio is curated to inspire.
          </p>
        </div>
      }
      properties={properties}
      faqs={faqs}
      ctaSource="holiday-homes-himachal"
    />
  );
}

