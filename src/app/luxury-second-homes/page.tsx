import type { Metadata } from 'next';
import SEOLandingPage from '@/components/ui/SEOLandingPage';
import { properties } from '@/lib/data/properties';
import { websiteImages } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Luxury Second Homes in Himachal Pradesh | Mashobra & Shimla Retreats',
  description:
    'Own an exclusive luxury second home in Himachal Pradesh. Serene mountain retreats in Mashobra, Shimla and Naldehra. Escape urban stress in pristine Himalayan surroundings.',
  alternates: { canonical: 'https://mashobrashimla.com/luxury-second-homes' },
};

const faqs = [
  {
    question: 'Why is Mashobra considered the best location for a luxury second home?',
    answer:
      'Mashobra combines immediate accessibility to Shimla with an undisturbed natural sanctuary, pristine air quality, dense forest trails, and cool year-round temperatures, making it the top choice for second home owners.',
  },
  {
    question: 'What is the upkeep and property management situation for second homes?',
    answer:
      'Modern gated villa enclaves in Mashobra offer facility management, 24/7 on-site security, gardening, and housekeeping coordination, ensuring your home remains pristine even when you are away.',
  },
];

export default function LuxurySecondHomesPage() {
  const secondHomeProps = properties.filter((p) => p.category.includes('second-home'));

  return (
    <SEOLandingPage
      title="Luxury Second Homes in Himachal"
      subtitle="Your Private Himalayan Sanctuary for Rejuvenation and Wellness"
      heroImage={websiteImages.lifestyle.familyHome.src}
      heroAlt={websiteImages.lifestyle.familyHome.alt}
      breadcrumbs={[
        { name: 'Home', url: 'https://mashobrashimla.com' },
        { name: 'Properties', url: 'https://mashobrashimla.com/properties' },
        { name: 'Luxury Second Homes', url: 'https://mashobrashimla.com/luxury-second-homes' },
      ]}
      canonicalUrl="https://mashobrashimla.com/luxury-second-homes"
      h1="Luxury Second Homes in Himachal Pradesh"
      intro="Escaping urban pollution and fast-paced city life has never been more vital. Luxury second homes in Mashobra and Shimla offer an uncompromised alpine sanctuary where your family can breathe pure mountain air, unwind amidst ancient deodars, and work remotely with high-speed connectivity."
      highlights={[
        'Pristine environment with near-zero pollution and crisp Himalayan breezes',
        'Effortless connectivity from Chandigarh (approx. 4 hrs) and Delhi NCR (approx. 7–8 hrs)',
        'Comprehensive estate management ensuring hassle-free ownership while away',
        'Strong lifestyle dividends combined with sustained long-term capital preservation',
        'Vibrant community of like-minded professionals and entrepreneurs',
      ]}
      bodyContent={
        <div className="space-y-4 text-[#64748B] text-sm leading-relaxed">
          <h2 className="text-xl font-bold text-[#172033]" style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}>
            A Sanctuary for Mind, Body, and Family
          </h2>
          <p>
            A mountain second home is more than an asset; it is a wellness sanctuary. From invigorating morning treks through Craignano trails to cozy evenings beside an open hearth, your Himachal home becomes the backdrop for cherished family memories.
          </p>
        </div>
      }
      properties={secondHomeProps}
      faqs={faqs}
      ctaSource="luxury-second-homes"
    />
  );
}

