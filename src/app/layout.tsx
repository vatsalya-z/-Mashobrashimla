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
    default: 'The Ridge Mashobra, Shimla | Premium Property Opportunities',
    template: '%s | The Ridge Mashobra, Shimla',
  },
  description:
    'Explore property opportunities in Mashobra, Shimla, Kufri and Naldehra. Discover mountain properties and get in touch for property enquiries.',
  keywords: [
    'The Ridge Mashobra',
    'Properties in Mashobra',
    'Real estate in Mashobra',
    'Properties in Shimla',
    'Luxury properties in Shimla',
    'luxury villas Mashobra',
    'property in Mashobra Shimla',
    'villas for sale Mashobra',
    '3 BHK villas Mashobra',
    '4 BHK villas Mashobra',
    'The Ridge Mashobra project',
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
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
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
