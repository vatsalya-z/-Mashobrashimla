// src/lib/seo/metadata.ts
import { Metadata } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://mashobrashimla.com';
const SITE_NAME = 'The Ridge Mashobra, Shimla';
const DEFAULT_OG_IMAGE = `${SITE_URL}/images/og-default.jpg`;

interface MetaOptions {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
  noIndex?: boolean;
}

export function generateMetadata({
  title,
  description,
  keywords = [],
  canonical,
  ogImage = DEFAULT_OG_IMAGE,
  noIndex = false,
}: MetaOptions): Metadata {
  const canonicalUrl = canonical ? `${SITE_URL}${canonical}` : SITE_URL;

  return {
    title: `${title} | ${SITE_NAME}`,
    description,
    keywords: keywords.join(', '),
    authors: [{ name: SITE_NAME }],
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url: canonicalUrl,
      siteName: SITE_NAME,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_IN',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${SITE_NAME}`,
      description,
      images: [ogImage],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, googleBot: { index: true, follow: true } },
  };
}

export { SITE_URL, SITE_NAME };

