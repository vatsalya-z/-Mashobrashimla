import type { Metadata } from 'next';
import Breadcrumb from '@/components/ui/Breadcrumb';
import JsonLd, { breadcrumbSchema } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Terms & Conditions | The Ridge Mashobra, Shimla',
  description: 'Terms and Conditions governing the use of mashobrashimla.com property advisory and lead generation portal.',
  alternates: { canonical: 'https://mashobrashimla.com/terms-and-conditions' },
};

export default function TermsAndConditionsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: 'https://mashobrashimla.com' },
          { name: 'Terms & Conditions', url: 'https://mashobrashimla.com/terms-and-conditions' },
        ])}
      />

      {/* HERO BANNER */}
      <section className="relative w-full bg-[#1E3A5F] py-14 sm:py-16">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-4">
            <Breadcrumb items={[{ label: 'Terms & Conditions' }]} />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white" style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}>
            Terms &amp; Conditions
          </h1>
          <p className="text-white/70 mt-2 text-sm">Last updated: November 2026</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <div className="bg-white rounded-xl border border-[#E2E8F0] p-6 sm:p-10 space-y-6 text-sm text-[#64748B] leading-relaxed">
          <section>
            <h2 className="text-lg font-bold text-[#172033] mb-2" style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}>
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing and using <strong>mashobrashimla.com</strong>, you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use this website.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#172033] mb-2" style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}>
              2. Nature of the Website
            </h2>
            <p>
              mashobrashimla.com is an independent real estate consultancy and lead-generation portal. We provide informational content, property overviews, and facilitate consultation between prospective buyers and property developments. We do not act as the official property developer.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#172033] mb-2" style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}>
              3. Accuracy of Information
            </h2>
            <p>
              While we endeavor to keep all project information, pricing, floor plans, and amenities updated and accurate, property specifications are subject to modifications by developers. All prospective buyers must perform their own due diligence before entering into any formal agreement.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#172033] mb-2" style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}>
              4. Limitation of Liability
            </h2>
            <p>
              Under no circumstances shall mashobrashimla.com or its operators be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use this website or reliance on any information presented herein.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}

