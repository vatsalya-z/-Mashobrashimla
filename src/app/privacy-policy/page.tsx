import type { Metadata } from 'next';
import Breadcrumb from '@/components/ui/Breadcrumb';
import JsonLd, { breadcrumbSchema } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Privacy Policy | The Ridge Mashobra, Shimla',
  description: 'Privacy Policy for mashobrashimla.com. Learn how we handle and protect your personal information and property enquiry details.',
  alternates: { canonical: 'https://mashobrashimla.com/privacy-policy' },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: 'https://mashobrashimla.com' },
          { name: 'Privacy Policy', url: 'https://mashobrashimla.com/privacy-policy' },
        ])}
      />

      {/* HERO BANNER */}
      <section className="relative w-full bg-[#1E3A5F] py-14 sm:py-16">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 text-center sm:text-left">
          <div className="mb-4 flex justify-center sm:justify-start">
            <Breadcrumb items={[{ label: 'Privacy Policy' }]} />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white" style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}>
            Privacy Policy
          </h1>
          <p className="text-white/70 mt-2 text-sm">Last updated: November 2026</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <div className="bg-white rounded-xl border border-[#E2E8F0] p-6 sm:p-10 space-y-6 text-sm text-[#64748B] leading-relaxed">
          <section>
            <h2 className="text-lg font-bold text-[#172033] mb-2" style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}>
              1. Information We Collect
            </h2>
            <p>
              When you submit a property enquiry, request a callback, or schedule a site visit through <strong>mashobrashimla.com</strong>, we collect personal information including your full name, email address, mobile number, preferred property configuration, budget, and any message you provide.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#172033] mb-2" style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}>
              2. How We Use Your Information
            </h2>
            <p>We use the submitted information exclusively for the following purposes:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Responding to your property enquiry and providing verified project information.</li>
              <li>Scheduling and coordinating site visits at your requested date and time.</li>
              <li>Sending requested brochures, floor plans, and pricing updates.</li>
              <li>Improving our website usability, customer service, and property recommendations.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#172033] mb-2" style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}>
              3. Information Sharing and Disclosure
            </h2>
            <p>
              We respect your privacy. We do not sell, trade, or rent your personal identification information to third parties. We may share essential contact details with verified development sales representatives or authorized site managers solely to facilitate your requested site inspection.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#172033] mb-2" style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}>
              4. Data Security
            </h2>
            <p>
              We adopt industry-standard data collection, storage, and security practices to protect against unauthorized access, alteration, disclosure, or destruction of your personal data.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#172033] mb-2" style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}>
              5. Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy or your personal data handling, please contact us at{' '}
              <a href="mailto:info@mashobrashimla.com" className="text-[#1E3A5F] underline font-medium">
                info@mashobrashimla.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </>
  );
}

