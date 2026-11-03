// src/types/index.ts

export interface Property {
  id: string;
  slug: string;
  title: string;
  location: string;
  area: string;
  configuration: string;
  price?: string;
  priceNote?: string;
  status: 'available' | 'limited' | 'sold-out';
  type: 'villa' | 'apartment' | 'plot' | 'second-home';
  category: string[];
  image: string;
  gallery?: string[];
  description: string;
  highlights: string[];
  amenities: string[];
  connectivity: string[];
  floorPlans?: FloorPlan[];
  faqs?: FAQ[];
  coordinates?: { lat: number; lng: number };
  projectName?: string;
  developerNote?: string;
}

export interface FloorPlan {
  name: string;
  area: string;
  image?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  publishedAt: string;
  readTime: string;
  category: string;
  tags: string[];
  seoTitle?: string;
  seoDescription?: string;
  faqs?: FAQ[];
}

export interface EnquiryData {
  fullName: string;
  mobile: string;
  email: string;
  preferredLocation: string;
  configuration: string;
  budget: string;
  purpose: string;
  preferredContactTime: string;
  message?: string;
  consent: boolean;
  source?: string;
  propertySlug?: string;
  referrer?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  submittedAt?: string;
}

export interface LocationConnectivityItem {
  destination: string;
  distance: string;
  travelTime: string;
  route?: string;
}

export interface LocationAttraction {
  name: string;
  description: string;
  distance?: string;
  image?: string;
}

export interface LocationPropertyType {
  title: string;
  description: string;
  badge: string;
}

export interface Location {
  slug: string;
  name: string;
  h1: string;
  tagline: string;
  primaryKeyword: string;
  secondaryKeywords?: string[];
  elevation: string;
  distanceFromShimla: string;
  description: string;
  overviewNarrative?: {
    geo: string;
    nature: string;
    lifestyle: string;
    residential: string;
  };
  aboutNarrative?: {
    environment: string;
    climate: string;
    landscape: string;
    lifestyleOpportunities: string;
  };
  whyExploreReasons?: Array<{
    title: string;
    description: string;
  }>;
  propertyTypesList?: LocationPropertyType[];
  connectivityItems?: LocationConnectivityItem[];
  attractionsList?: LocationAttraction[];
  landmarks: string[];
  connectivity: string[];
  lifestyle: string[];
  image: string;
  gallery?: string[];
  faqs?: FAQ[];
  relatedBlogSlugs?: string[];
}

export interface Testimonial {
  name: string;
  location: string;
  comment: string;
  rating: number;
  date: string;
}

