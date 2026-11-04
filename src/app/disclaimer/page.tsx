import type { Metadata } from 'next';
import Breadcrumb from '@/components/ui/Breadcrumb';
import JsonLd, { breadcrumbSchema } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Disclaimer | The Ridge Mashobra, Shimla',
  description: 'Legal disclaimer regarding developer relationship, project representations, and real estate consultancy on mashobrashimla.com.',
  alternates: { canonical: 'https://mashobrashimla.com/disclaimer' },
};

export default function DisclaimerPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: 'https://mashobrashimla.com' },
          { name: 'Disclaimer', url: 'https://mashobrashimla.com/disclaimer' },
        ])}
      />

      {/* HERO BANNER */}
      <section className="relative w-full bg-[#1E3A5F] py-14 sm:py-16">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 text-center sm:text-left">
          <div className="mb-4 flex justify-center sm:justify-start">
            <Breadcrumb items={[{ label: 'Disclaimer' }]} />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white" style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}>
            Disclaimer
          </h1>
          <p className="text-white/70 mt-2 text-sm">Transparency &amp; Legal Disclosures</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <div className="bg-white rounded-xl border border-[#E2E8F0] p-6 sm:p-10 space-y-6 text-sm text-[#64748B] leading-relaxed">
          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 text-amber-900 rounded-r">
            <h2 className="font-bold text-base mb-1">Independent Real Estate Advisory Notice</h2>
            <p>
              <strong>mashobrashimla.com</strong> is an independent property marketing, consultancy, and lead-generation portal. This website is <strong>NOT</strong> the official website of the project developer, nor is it officially sponsored by the builders of The Ridge Mashobra or HOABL.
            </p>
          </div>

          <section>
            <h2 className="text-lg font-bold text-[#172033] mb-2" style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}>
              1. Project Names and Trademarks
            </h2>
            <p>
              All project names, trade names, logos, and marks referred to on this website belong to their respective developers and trademark owners. They are referenced strictly for nominative identification and informational property search purposes.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#172033] mb-2" style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}>
              2. Visual Representations and Renderings
            </h2>
            <p>
              Photographs, architectural renderings, views, and floor plans displayed on this website are indicative and artist impressions meant to convey conceptual design and regional aesthetics. They do not constitute a legal offer or binding contractual specification.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#172033] mb-2" style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}>
              3. Independent Verification Required
            </h2>
            <p>
              Prospective purchasers are strongly advised to independently verify all details, including land title, state clearances, HRERA registration numbers, building sanctions, and maintenance costs directly with the developer and their legal advisors prior to making any financial commitment.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#172033] mb-2" style={{ fontFamily: 'var(--font-manrope, sans-serif)' }}>
              4. No Financial Transactions
            </h2>
            <p>
              We do not accept booking deposits or processing fees through this website. Any monetary transactions must occur directly through the authorized escrow accounts of the respective project developer.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}

