// src/app/api/indexnow/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { submitToIndexNow } from '@/lib/seo/indexnow';
import { properties } from '@/lib/data/properties';
import { locations } from '@/lib/data/locations';
import { blogPosts } from '@/lib/data/blog';

export async function POST(req: NextRequest) {
  // Authorization check via bearer token
  const authHeader = req.headers.get('Authorization');
  const expectedSecret = process.env.INDEXNOW_SUBMIT_SECRET;

  if (expectedSecret && authHeader !== `Bearer ${expectedSecret}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await req.json().catch(() => ({}));
    let urlsToSubmit: string[] = Array.isArray(body.urls) ? body.urls : [];

    // If no explicit URLs passed, compile all canonical public URLs from site data
    if (urlsToSubmit.length === 0) {
      const siteUrl = 'https://mashobrashimla.com';
      const staticPaths = [
        '',
        '/the-ridge-mashobra',
        '/properties',
        '/locations',
        '/project/amenities',
        '/about-us',
        '/contact-us',
        '/enquire-now',
        '/blog',
        '/luxury-villas-mashobra',
        '/luxury-properties-shimla',
        '/property-in-mashobra',
        '/3-bhk-villas-mashobra',
        '/4-bhk-villas-mashobra',
        '/luxury-second-homes',
        '/holiday-homes-himachal',
        '/properties-kufri',
        '/properties-naldehra',
        '/property-investment-shimla',
        '/property-buying-guide-himachal',
        '/mashobra-vs-shimla',
      ];

      const propertyPaths = properties.map((p) => `/properties/${p.slug}`);
      const locationPaths = locations.map((l) => `/locations/${l.slug}`);
      const blogPaths = blogPosts.map((b) => `/blog/${b.slug}`);

      urlsToSubmit = [...staticPaths, ...propertyPaths, ...locationPaths, ...blogPaths].map(
        (p) => `${siteUrl}${p}`
      );
    }

    const result = await submitToIndexNow(urlsToSubmit);

    return NextResponse.json(result, { status: result.success ? 200 : 400 });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ success: false, message }, { status: 500 });
  }
}

