import type { Metadata } from 'next';
import { Manrope, Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { WhatsAppFloat, MobileStickyBar } from '@/components/layout/FloatingCTA';
import { EnquiryModalProvider } from '@/context/EnquiryModalContext';
import JsonLd, { organizationSchema, websiteSchema } from '@/components/seo/JsonLd';

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-manrope',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://mashobrashimla.com'),
  title: {
    default: 'The Ridge Mashobra, Shimla – Luxury Villas & Premium Properties',
    template: '%s | The Ridge Mashobra, Shimla',
  },
  description:
    'Explore premium luxury villas and residential properties in Mashobra, Shimla, Himachal Pradesh. 3 BHK and 4 BHK mountain homes with Himalayan views. Enquire now.',
  keywords: [
    'luxury villas Mashobra',
    'property in Mashobra Shimla',
    'villas for sale Mashobra',
    'luxury property Shimla',
    '3 BHK villas Mashobra',
    '4 BHK villas Mashobra',
    'The Ridge Mashobra',
    'premium mountain homes Himachal Pradesh',
    'second homes Shimla',
    'holiday homes Himachal Pradesh',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'The Ridge Mashobra, Shimla',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable}`}>
      <body className="font-[var(--font-inter,sans-serif)] bg-white text-[#172033] antialiased">
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        <EnquiryModalProvider>
          <Header />
          <main className="pb-20 lg:pb-0">{children}</main>
          <Footer />
          <WhatsAppFloat />
          <MobileStickyBar />
        </EnquiryModalProvider>
      </body>
    </html>
  );
}
