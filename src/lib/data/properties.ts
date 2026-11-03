// src/lib/data/properties.ts
import { Property } from '@/types';
import { websiteImages } from '@/lib/images';

export const properties: Property[] = [
  {
    id: 'tr-mashobra-01',
    slug: 'the-ridge-mashobra-premium-villa',
    title: 'The Ridge Mashobra – Premium Villa',
    location: 'Mashobra, Shimla',
    area: 'Mashobra',
    configuration: '3 BHK / 4 BHK',
    price: 'Price on Request',
    priceNote: 'Contact our property consultant for current pricing.',
    status: 'available',
    type: 'villa',
    category: ['luxury-villa', '3bhk', '4bhk', 'second-home'],
    image: '/images/hoabl/hoabl-shimla-elite-plots-1.webp',
    gallery: [
      '/images/hoabl/hoabl-shimla-elite-plots-1.webp',
      '/images/hoabl/hoabl-shimla-signature-plots-3.webp',
      '/images/hoabl/hoabl-shimla-residential-plots-5.webp',
      '/images/hoabl/hoabl-shimla-layout-plan-layout-plan-1.webp',
      '/images/hoabl/hoabl-shimla-ground-layout-plan-layout-plan-2.webp',
      websiteImages.villas[0].src,
      websiteImages.interiors.livingRoom.src,
      websiteImages.interiors.bedroom.src,
      websiteImages.interiors.dining.src,
      websiteImages.interiors.kitchen.src,
      websiteImages.interiors.balcony.src,
    ],
    description: `The Ridge Mashobra is a thoughtfully planned residential development set amidst the serene Deodar forests of Mashobra, Shimla. Located at an elevation offering panoramic Himalayan views, this premium development offers well-designed 3 BHK and 4 BHK residences crafted for families seeking a mountain lifestyle.

The project blends contemporary architecture with the natural surroundings of the Himalayan foothills. Each residence is designed to maximise natural light and valley views. Large windows, open balconies and natural material finishes create a home that feels genuinely connected to its spectacular environment.

This is an independent sales enquiry website for The Ridge Mashobra project. We are an authorised property consultant facilitating enquiries, site visits and buyer assistance for this development.`,
    highlights: [
      'Panoramic Himalayan valley views',
      'Located amidst Deodar forest cover',
      'Contemporary mountain architecture',
      'Large windows and private balconies',
      '3 BHK and 4 BHK configurations',
      'Natural stone and wood finishes',
      'Well-planned residential community',
      'Close proximity to Shimla city',
    ],
    amenities: [
      'Clubhouse',
      'Landscaped gardens',
      "Children's play area",
      'Walking and jogging trails',
      'Parking facilities',
      'Power backup',
      'Water supply',
      '24/7 security',
    ],
    connectivity: [
      'Shimla city centre – approx. 13 km',
      'Shimla Railway Station – approx. 18 km',
      'Jubbarhatti Airport – approx. 25 km',
      'Kufri – approx. 14 km',
      'Naldehra Golf Course – approx. 24 km',
      'Wildflower Hall resort – nearby',
    ],
    faqs: [
      {
        question: 'Where exactly is The Ridge Mashobra located?',
        answer: 'The Ridge Mashobra is located in Mashobra village, approximately 13 km from Shimla city centre in Himachal Pradesh.',
      },
      {
        question: 'What configurations are available?',
        answer: 'The project offers 3 BHK and 4 BHK villa residences. Please contact our property consultant for current availability.',
      },
      {
        question: 'Is this the official developer website?',
        answer: 'No. This is an independent real estate consultancy website facilitating property enquiries for The Ridge Mashobra project. We are not the official developer or their representative.',
      },
      {
        question: 'How do I schedule a site visit?',
        answer: 'You can submit an enquiry through our online form, call us directly or reach us via WhatsApp. We will coordinate the site visit on your behalf.',
      },
    ],
    projectName: 'The Ridge Mashobra',
    developerNote: 'This website is operated by an independent property consultancy. We facilitate enquiries and buyer assistance for The Ridge Mashobra project. Conceptual renders and photographs are representative.',
  },
  {
    id: 'mashobra-villa-02',
    slug: '3-bhk-luxury-villa-mashobra',
    title: '3 BHK Luxury Villa – Mashobra',
    location: 'Mashobra, Shimla',
    area: 'Mashobra',
    configuration: '3 BHK',
    price: 'Price on Request',
    status: 'available',
    type: 'villa',
    category: ['luxury-villa', '3bhk', 'second-home'],
    image: websiteImages.villas[1].src,
    gallery: [
      websiteImages.villas[1].src,
      websiteImages.interiors.livingRoom.src,
      websiteImages.interiors.bedroom.src,
      websiteImages.interiors.balcony.src,
    ],
    description: 'Spacious 3 BHK luxury villa in Mashobra offering mountain views, premium finishes and a peaceful residential lifestyle. Ideal for families and premium second home buyers.',
    highlights: [
      'Spacious 3 BHK layout',
      'Mountain-facing orientation',
      'Premium interior finishes',
      'Private balcony with valley views',
      'Landscaped surroundings',
      'Gated community',
    ],
    amenities: ['Parking', 'Power backup', '24/7 security', 'Landscaped gardens'],
    connectivity: [
      'Shimla city – approx. 13 km',
      'NH-5 Shimla-Kufri Highway – accessible',
      'Kufri – approx. 14 km',
    ],
    faqs: [
      {
        question: 'What is the carpet area of the 3 BHK unit?',
        answer: 'Please contact our property consultant for detailed floor plan and carpet area specifications.',
      },
    ],
  },
  {
    id: 'mashobra-villa-03',
    slug: '4-bhk-premium-villa-mashobra',
    title: '4 BHK Premium Villa – Mashobra',
    location: 'Mashobra, Shimla',
    area: 'Mashobra',
    configuration: '4 BHK',
    price: 'Price on Request',
    status: 'limited',
    type: 'villa',
    category: ['luxury-villa', '4bhk', 'second-home', 'premium'],
    image: websiteImages.villas[5].src,
    gallery: [
      websiteImages.villas[5].src,
      websiteImages.interiors.dining.src,
      websiteImages.interiors.kitchen.src,
      websiteImages.interiors.livingRoom.src,
    ],
    description: 'Premium 4 BHK luxury villa in Mashobra with expansive Himalayan views, spacious living areas and high-quality finishes. Designed for large families and premium mountain living.',
    highlights: [
      'Expansive 4 BHK layout',
      'Panoramic Himalayan views',
      'Premium luxury finishes',
      'Multiple private balconies',
      'Spacious living and dining areas',
      'Premium mountain location',
    ],
    amenities: ['Clubhouse access', 'Parking', 'Power backup', '24/7 security', 'Landscaped gardens', 'Walking trails'],
    connectivity: [
      'Shimla city – approx. 13 km',
      'Kufri – approx. 14 km',
      'Airport – approx. 25 km',
    ],
    faqs: [
      {
        question: 'Is limited availability a concern for 4 BHK units?',
        answer: 'Yes, 4 BHK units are limited. We recommend enquiring early to check current availability.',
      },
    ],
  },
];

export function getPropertyBySlug(slug: string): Property | undefined {
  return properties.find((p) => p.slug === slug);
}

export function getPropertiesByCategory(category: string): Property[] {
  return properties.filter((p) => p.category.includes(category));
}

export function getPropertiesByLocation(area: string): Property[] {
  return properties.filter((p) => p.area.toLowerCase() === area.toLowerCase());
}
