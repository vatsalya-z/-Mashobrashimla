// src/components/seo/JsonLd.tsx

interface JsonLdProps {
  data: Record<string, unknown> | Record<string, unknown>[];
}

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
    url: 'https://mashobrashimla.com',
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
      addressCountry: 'IN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      availableLanguage: ['English', 'Hindi'],
    },
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'The Ridge Mashobra, Shimla',
    url: 'https://mashobrashimla.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://mashobrashimla.com/properties?search={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
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
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    image,
    datePublished: publishedAt,
    author: { '@type': 'Person', name: author },
    publisher: {
      '@type': 'Organization',
      name: 'The Ridge Mashobra, Shimla',
      url: 'https://mashobrashimla.com',
    },
    url,
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
  return {
    '@context': 'https://schema.org',
    '@type': 'SingleFamilyResidence',
    name: property.title,
    description: property.description,
    image: property.image.startsWith('http') ? property.image : `https://mashobrashimla.com${property.image}`,
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
      url: `https://mashobrashimla.com/properties/${property.slug}`,
    },
  };
}

