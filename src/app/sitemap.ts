import { MetadataRoute } from 'next';
import { properties } from '@/lib/data/properties';
import { locations } from '@/lib/data/locations';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://mashobrashimla.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '',
    '/about-us',
    '/properties',
    '/locations',
    '/blog',
    '/contact-us',
    '/enquire-now',
    '/luxury-villas-mashobra',
    '/luxury-properties-shimla',
    '/property-in-mashobra',
    '/3-bhk-villas-mashobra',
    '/4-bhk-villas-mashobra',
    '/luxury-second-homes',
    '/holiday-homes-himachal',
    '/property-investment-shimla',
    '/properties-kufri',
    '/properties-naldehra',
    '/projects/the-ridge-mashobra',
    '/property-buying-guide-himachal',
    '/mashobra-vs-shimla',
    '/privacy-policy',
    '/terms-and-conditions',
    '/disclaimer',
  ].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: (route === '' ? 'daily' : 'weekly') as 'daily' | 'weekly',
    priority: route === '' ? 1.0 : route.startsWith('/properties') || route.startsWith('/luxury') ? 0.9 : 0.7,
  }));

  const propertyRoutes = properties.map((p) => ({
    url: `${SITE_URL}/properties/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }));

  const locationRoutes = locations.map((l) => ({
    url: `${SITE_URL}/locations/${l.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...propertyRoutes, ...locationRoutes];
}

