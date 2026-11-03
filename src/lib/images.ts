// src/lib/images.ts
// Centralized, production-grade image configuration for The Ridge Mashobra, Shimla

export interface ImageMetadataItem {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
}

export const websiteImages = {
  // A. HOMEPAGE HERO COLLECTION
  hero: {
    main: {
      src: '/images/hero/hero-mashobra-main.webp',
      alt: 'Contemporary luxury mountain villa in Mashobra, Shimla surrounded by tall Deodar forests with panoramic Himalayan valley views',
      width: 1920,
      height: 1080,
    },
    mountainVilla: {
      src: '/images/hero/hero-mountain-villa.webp',
      alt: 'Multi-level modern luxury villa built into a mountain slope in Mashobra with natural stone walls and wooden balconies',
      width: 1920,
      height: 1080,
    },
    morningResidence: {
      src: '/images/hero/hero-morning-residence.webp',
      alt: 'Serene mountain residence in Mashobra in soft morning mist and golden sunrise light',
      width: 1920,
      height: 1080,
    },
    himalayanValley: {
      src: '/images/hero/hero-himalayan-valley.webp',
      alt: 'Expansive luxury mountain villa overlooking panoramic Himalayan valley and distant blue mountain ridges',
      width: 1920,
      height: 1080,
    },
    mobile: [
      {
        src: '/images/hero/hero-mobile-01.jpg',
        alt: 'Ultra-luxury modern mountain chalet villa in Mashobra, Shimla with Deodar cedar forest and Himalayan peaks at golden sunrise',
        width: 1080,
        height: 1920,
      },
      {
        src: '/images/hero/hero-mobile-02.jpg',
        alt: 'Contemporary luxury mountain residence at dusk in Mashobra, Shimla with warm glowing interiors and panoramic misty valleys',
        width: 1080,
        height: 1920,
      },
      {
        src: '/images/hero/hero-mobile-03.jpg',
        alt: 'Grand mountain chateau villa nestled among towering Deodar pine forests in Mashobra, Shimla',
        width: 1080,
        height: 1920,
      },
    ],
  },

  // B. EXTERIOR VILLA COLLECTION
  villas: [
    {
      src: '/images/villas/villa-exterior-01.webp',
      alt: 'Contemporary Himalayan villa in Mashobra featuring natural slate stone masonry and cedar accents',
      title: 'The Ridge Residence 01',
      config: '3 BHK Luxury Villa',
    },
    {
      src: '/images/villas/villa-exterior-02.webp',
      alt: 'Modern wooden mountain villa with expansive wrap-around balconies and forest views',
      title: 'Cedar Crest Villa',
      config: '4 BHK Luxury Villa',
    },
    {
      src: '/images/villas/villa-exterior-03.webp',
      alt: 'Multi-level luxury villa on a sloping mountain plot with cascading landscaped stone terraces',
      title: 'Highland Slope Villa',
      config: '3 & 4 BHK Mountain Residence',
    },
    {
      src: '/images/villas/villa-exterior-04.webp',
      alt: 'Minimalist luxury glass-fronted mountain villa in Mashobra with floor-to-ceiling valley windows',
      title: 'Valley Vista Villa',
      config: '4 BHK Hillside Villa',
    },
    {
      src: '/images/villas/villa-exterior-05.webp',
      alt: 'Modern mountain residence surrounded by towering pine trees with cantilevered viewing decks',
      title: 'Pine Ridge Haven',
      config: '3 BHK Mountain Home',
    },
    {
      src: '/images/villas/villa-exterior-06.webp',
      alt: 'Premium stone-and-wood residential mountain architecture with pitched dark slate roof',
      title: 'Stonegate Alpine Villa',
      config: '4 BHK Heritage-Style Villa',
    },
    {
      src: '/images/villas/villa-exterior-07.webp',
      alt: 'Elegant villa with landscaped outdoor patio seating, wooden pergola, and valley views',
      title: 'The Orchard Retreat',
      config: '3 BHK Vacation Villa',
    },
    {
      src: '/images/villas/villa-exterior-08.webp',
      alt: 'Modern hillside residence with panoramic black-framed windows and vertical timber siding',
      title: 'Grand Pinnacle Villa',
      config: '4 BHK Luxury Estate',
    },
  ],

  // C. INTERIOR COLLECTION
  interiors: {
    livingRoom: {
      src: '/images/interiors/living-room-mountain-view.webp',
      alt: 'Modern luxury living room in Mashobra villa with natural stone fireplace and panoramic mountain windows',
      title: 'Panoramic Living Lounge',
    },
    bedroom: {
      src: '/images/interiors/luxury-bedroom.webp',
      alt: 'Premium master bedroom with natural timber ceiling beams, plush bedding, and private valley balcony',
      title: 'Master Bedroom Suite',
    },
    dining: {
      src: '/images/interiors/dining-room-view.webp',
      alt: 'Elegant dining room in mountain villa featuring solid walnut dining table and expansive forest view',
      title: 'Formal Dining Area',
    },
    kitchen: {
      src: '/images/interiors/modern-kitchen.webp',
      alt: 'Open-concept modular kitchen with quartz waterfall island and wood cabinetry',
      title: 'Modern Modular Kitchen',
    },
    balcony: {
      src: '/images/interiors/villa-balcony.webp',
      alt: 'Spacious cedar wood viewing deck balcony with outdoor lounge chairs overlooking pine forest',
      title: 'Private Mountain Balcony',
    },
    bathroom: {
      src: '/images/interiors/luxury-bathroom.webp',
      alt: 'Spa-style en-suite bathroom with natural slate stone tiles and freestanding tub overlooking trees',
      title: 'En-suite Luxury Bathroom',
    },
  },

  // D. LOCATION COLLECTION
  locations: {
    mashobraForest: {
      src: '/images/locations/mashobra-deodar-forest.webp',
      alt: 'Dense Deodar cedar forest canopy in Mashobra with natural sunlight filtering through trees',
      title: 'Mashobra Deodar Reserve',
    },
    himalayanValley: {
      src: '/images/locations/himalayan-valley.webp',
      alt: 'Layered mountain ridges and panoramic Himalayan valley landscape in Himachal Pradesh',
      title: 'Panoramic Himalayan Vista',
    },
    mountainResidential: {
      src: '/images/locations/mountain-residential-view.webp',
      alt: 'Scenic mountain residential neighborhood nestled gracefully into green slopes of Mashobra',
      title: 'Mashobra Ridge Enclave',
    },
    shimlaMorning: {
      src: '/images/locations/shimla-morning.webp',
      alt: 'Misty sunrise over the historic pine-covered ridges of Shimla hills',
      title: 'Shimla Morning Panorama',
    },
    pineForest: {
      src: '/images/locations/pine-forest-hills.webp',
      alt: 'Pristine emerald pine and oak forest hills under clear mountain skies',
      title: 'Alpine Forest Trail',
    },
    mountainRoad: {
      src: '/images/locations/mountain-road.webp',
      alt: 'Scenic winding mountain road lined with ancient deodars in Mashobra',
      title: 'Mashobra Forest Road',
    },
    kufri: {
      src: '/images/locations/kufri-hero.jpg',
      alt: 'Alpine scenery and mountain ridges of Kufri near Shimla',
      title: 'Kufri Alpine Heights',
    },
    naldehra: {
      src: '/images/locations/naldehra-hero.jpg',
      alt: 'Historic cedar groves and rolling meadows of Naldehra',
      title: 'Naldehra Cedar Meadows',
    },
  },

  // E. LIFESTYLE COLLECTION
  lifestyle: {
    familyHome: {
      src: '/images/lifestyle/family-mountain-home.webp',
      alt: 'Family enjoying morning tea on a spacious mountain villa balcony overlooking Himalayan peaks',
      title: 'Serene Family Living',
    },
    outdoorSeating: {
      src: '/images/lifestyle/outdoor-seating.webp',
      alt: 'Outdoor terrace patio with modern firepit and lounge seating framing Himalayan sunset',
      title: 'Sunset Terrace Lounge',
    },
    peacefulHome: {
      src: '/images/lifestyle/peaceful-home.webp',
      alt: 'Sun-drenched mountain home reading nook with panoramic windows and comfortable seating',
      title: 'Peaceful Mountain Living',
    },
    gardenVilla: {
      src: '/images/lifestyle/garden-villa.webp',
      alt: 'Landscaped mountain garden with flagstone pathways and alpine blooms on villa grounds',
      title: 'Landscaped Grounds',
    },
  },

  // F. BLOG THUMBNAILS
  blog: {
    luxuryVillas: {
      src: '/images/blog/luxury-villas-mashobra.webp',
      alt: 'Modern architectural perspective of luxury villas in Mashobra, Shimla',
    },
    secondHomeGuide: {
      src: '/images/blog/second-home-guide.webp',
      alt: 'Tranquil mountain retreat embodying second home lifestyle in Himachal Pradesh',
    },
    mashobraVsShimla: {
      src: '/images/blog/mashobra-vs-shimla.webp',
      alt: 'Comparative vista of peaceful forested Mashobra and historic Shimla hill town',
    },
    propertyBuyingGuide: {
      src: '/images/blog/property-buying-guide.webp',
      alt: 'Architectural documentation and project blueprints with mountain home backdrop',
    },
    mountainArchitecture: {
      src: '/images/blog/mountain-architecture.webp',
      alt: 'Detail of modern sustainable Himalayan architectural textures in stone, glass, and wood',
    },
    locationGuide: {
      src: '/images/blog/mashobra-location-guide.webp',
      alt: 'Scenic walking trail through deodar forests overlooking Himalayan mountain vistas',
    },
  },

  // G. REAL PROJECT GALLERY & ARCHITECTURAL ASSETS (Mashobra Hills Estate)
  hoablGallery: [
    {
      src: '/images/hoabl/hoabl-shimla-elite-plots-1.webp',
      alt: 'Elite Luxury Mountain Plots and Villa Enclaves in Mashobra Hills, Shimla',
      title: 'Elite Mountain Enclave',
      category: 'Villa Enclave',
      width: 900,
      height: 600,
    },
    {
      src: '/images/hoabl/hoabl-shimla-investment-land-2.webp',
      alt: 'High-Elevation Forest Facing Residential Plots in Mashobra',
      title: 'Himalayan Ridge View Lands',
      category: 'Residential Plots',
      width: 900,
      height: 600,
    },
    {
      src: '/images/hoabl/hoabl-shimla-signature-plots-3.webp',
      alt: 'Signature Luxury Villa Parcels Overlooking Cedar Forest Canopy',
      title: 'Signature Cedar Terraces',
      category: 'Luxury Plots',
      width: 900,
      height: 600,
    },
    {
      src: '/images/hoabl/hoabl-shimla-plots-for-sale-4.webp',
      alt: 'Prime Hilltop Residential Development with Panoramic Valley Views',
      title: 'Highland Hilltop Parcels',
      category: 'Prime Estates',
      width: 900,
      height: 600,
    },
    {
      src: '/images/hoabl/hoabl-shimla-residential-plots-5.webp',
      alt: 'Peaceful Mountain Residential Setting Amidst Pine Slopes',
      title: 'Serene Pine Enclave',
      category: 'Residential Villas',
      width: 900,
      height: 600,
    },
    {
      src: '/images/hoabl/hoabl-shimla-residential-land-for-sale-6.webp',
      alt: 'Expansive Mountain Valley Panorama and Gated Community Grounds',
      title: 'Valley-Facing Estates',
      category: 'Gated Estate',
      width: 900,
      height: 600,
    },
    {
      src: '/images/hoabl/hoabl-shimla-commercial-plots-for-sale-7.webp',
      alt: 'Boutique Hospitality & Commercial Villa Plots with Club Access',
      title: 'Boutique Clubhouse & Enclave',
      category: 'Club & Hospitality',
      width: 900,
      height: 600,
    },
    {
      src: '/images/hoabl/hoabl-shimla-open-land-for-sale-8.webp',
      alt: 'Open Land Parcels and Mountain Meadow Terraces in Mashobra',
      title: 'Alpine Meadow Terraces',
      category: 'Open Mountain Land',
      width: 900,
      height: 600,
    },
  ],

  // H. PROJECT LAYOUT PLANS (2400x1600 Ultra-Sharp Architectural Blueprints)
  layouts: [
  ],

  // I. PANORAMIC BANNERS & FULL VIEWS
  banners: {
    projectPanorama: {
      src: '/images/hoabl/house-of-abhinandan-lodha-shimla-banner-1.webp',
      alt: 'Expansive Panoramic Mountain Vista of Mashobra Hills Estate',
      width: 1920,
      height: 700,
    },
    estateOverview: {
      src: '/images/hoabl/house-of-abhinandan-lodha-shimla-banner-2.webp',
      alt: 'Luxury Gated Mountain Residential Estate in Mashobra',
      width: 1920,
      height: 700,
    },
    valleyOverview: {
      src: '/images/hoabl/hoabl-shimla-open-land-for-sale-full-img-01.webp',
      alt: 'Mountain Slope and Valley Terraces in Mashobra',
      width: 1145,
      height: 502,
    },
  },
};

