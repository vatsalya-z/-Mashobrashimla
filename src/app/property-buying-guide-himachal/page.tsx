import type { Metadata } from 'next';
import SEOLandingPage from '@/components/ui/SEOLandingPage';
import { properties } from '@/lib/data/properties';
import { websiteImages } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Property Buying Guide for Himachal Pradesh | Legal Rules & Section 118',
  description:
    'Comprehensive legal & buying guide for property in Himachal Pradesh. Understand Section 118, HRERA approvals, title verification, and process for out-of-state buyers.',
  alternates: { canonical: 'https://mashobrashimla.com/property-buying-guide-himachal' },
};

const faqs = [
  {
    question: 'Can non-Himachalis purchase apartments or villas in Himachal Pradesh?',
    answer:
      'Yes. While Section 118 restricts the purchase of agricultural land by non-agriculturists, buyers from any Indian state can legally purchase built-up residential units in HRERA-registered and government-sanctioned housing developments.',
  },
  {
    question: 'What is Section 118 of the HP Tenancy and Land Reforms Act?',
    answer:
      'Section 118 is a state enactment designed to safeguard agricultural land in Himachal Pradesh. However, it provides clear statutory exemptions for residential plots and apartments in government-approved municipal and town planning schemes.',
  },
  {
    question: 'How do I verify if a project has valid approvals?',
    answer:
      'Always verify that the project is registered with HRERA (Himachal Pradesh Real Estate Regulatory Authority), possesses clear land titles, and holds Town & Country Planning (TCP) and local body building sanctions.',
  },
];

export default function PropertyBuyingGuideHimachalPage() {
  return (
    <SEOLandingPage
      title="Property Buying Guide Himachal"
      subtitle="Complete Legal, Documentation & Due Diligence Advisory for Buyers"
      heroImage={websiteImages.blog.propertyBuyingGuide.src}
      heroAlt={websiteImages.blog.propertyBuyingGuide.alt}
      breadcrumbs={[
        { name: 'Home', url: 'https://mashobrashimla.com' },
        { name: 'Guides', url: 'https://mashobrashimla.com/blog' },
        { name: 'Property Buying Guide Himachal', url: 'https://mashobrashimla.com/property-buying-guide-himachal' },
      ]}
      canonicalUrl="https://mashobrashimla.com/property-buying-guide-himachal"
      h1="Property Buying Guide for Himachal Pradesh"
      intro="Navigating real estate acquisition in Himachal Pradesh requires accurate legal clarity. As premier property consultants specializing in Mashobra and Shimla, we have compiled this comprehensive guide to help prospective homeowners and investors understand the legal framework, regulatory approvals, and documentation steps."
      highlights={[
        'Clear breakdown of Section 118 provisions and statutory exemptions',
        'Checklist of essential documents: Title deeds, HRERA numbers, TCP sanctions',
        'Guidance for non-resident and out-of-state Indian buyers',
        'Understanding stamp duty, registration charges, and municipal fees',
        'End-to-end site visit, verification, and legal consultation support',
      ]}
      bodyContent={
        <div className="space-y-4 text-[#64748B] text-sm leading-relaxed">
          <h2 className="text-xl font-bold text-[#172033]" style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}>
            Key Due Diligence Checklist for Buyers
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>HRERA Registration:</strong> Check project details on the official HRERA Himachal portal.</li>
            <li><strong>Town &amp; Country Planning Sanction:</strong> Ensure the architectural layout is sanctioned.</li>
            <li><strong>Encumbrance Certificate:</strong> Confirm that the land is free of legal disputes or financial liens.</li>
            <li><strong>Water &amp; Power Clearances:</strong> Verify adequate utility infrastructure and approvals.</li>
          </ul>
          <p className="mt-4">
            Our team works alongside experienced legal counsel in Shimla to ensure that every property we recommend adheres strictly to statutory legal compliance.
          </p>
        </div>
      }
      properties={properties}
      faqs={faqs}
      ctaSource="property-buying-guide-himachal"
    />
  );
}

