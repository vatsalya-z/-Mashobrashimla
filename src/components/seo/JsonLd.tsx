// src/components/seo/JsonLd.tsx

interface JsonLdProps {
  data: Record<string, unknown> | Record<string, unknown>[];
}

const SITE_URL = 'https://mashobrashimla.com';

export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: 'The Ridge Mashobra, Shimla',
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo.png`,
    image: `${SITE_URL}/images/og-default.jpg`,
    telephone: '+91-9999995151',
    email: 'info@mashobrashimla.com',
    description:
      'Independent real estate consultancy facilitating property enquiries for luxury villas and premium residential properties in Mashobra, Shimla, Himachal Pradesh.',
    areaServed: [
      { '@type': 'City', name: 'Shimla' },
      { '@type': 'Place', name: 'Mashobra' },
      { '@type': 'Place', name: 'Kufri' },
      { '@type': 'Place', name: 'Naldehra' },
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Mashobra',
      addressRegion: 'Himachal Pradesh',
      postalCode: '171007',
      addressCountry: 'IN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-9999995151',
      contactType: 'Sales & Customer Advisory',
      availableLanguage: ['English', 'Hindi'],
    },
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'The Ridge Mashobra, Shimla',
    url: SITE_URL,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_URL}/properties?search={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => {
      const itemUrl = item.url.startsWith('http')
        ? item.url
        : `${SITE_URL}${item.url.startsWith('/') ? '' : '/'}${item.url}`;
      return {
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: itemUrl,
      };
    }),
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function articleSchema({
  title,
  description,
  image,
  publishedAt,
  author,
  url,
}: {
  title: string;
  description: string;
  image: string;
  publishedAt: string;
  author: string;
  url: string;
}) {
  const imageUrl = image.startsWith('http') ? image : `${SITE_URL}${image.startsWith('/') ? '' : '/'}${image}`;
  const canonicalUrl = url.startsWith('http') ? url : `${SITE_URL}${url.startsWith('/') ? '' : '/'}${url}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    image: imageUrl,
    datePublished: publishedAt,
    dateModified: publishedAt,
    author: {
      '@type': 'Person',
      name: author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'The Ridge Mashobra, Shimla',
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/images/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': canonicalUrl,
    },
    url: canonicalUrl,
  };
}

export function singlePropertySchema(property: {
  title: string;
  description: string;
  image: string;
  location: string;
  configuration: string;
  price?: string;
  status: string;
  slug: string;
}) {
  const imageUrl = property.image.startsWith('http')
    ? property.image
    : `${SITE_URL}${property.image.startsWith('/') ? '' : '/'}${property.image}`;
  const propertyUrl = `${SITE_URL}/properties/${property.slug}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'SingleFamilyResidence',
    name: property.title,
    description: property.description,
    image: imageUrl,
    url: propertyUrl,
    address: {
      '@type': 'PostalAddress',
      addressLocality: property.location,
      addressRegion: 'Himachal Pradesh',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '31.1278',
      longitude: '77.2340',
    },
    numberOfRooms: property.configuration.includes('4') ? 4 : 3,
    offers: {
      '@type': 'Offer',
      price: property.price || 'Price on Request',
      priceCurrency: 'INR',
      availability: property.status === 'sold-out' ? 'https://schema.org/SoldOut' : 'https://schema.org/InStock',
      url: propertyUrl,
    },
  };
}
