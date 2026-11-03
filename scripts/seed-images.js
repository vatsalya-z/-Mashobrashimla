const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');
const srcFile = path.join(rootDir, 'public', 'images', 'hero', 'mashobra-hero.jpg');

const targetFiles = [
  'public/images/properties/villa-3bhk-mashobra.jpg',
  'public/images/properties/villa-4bhk-mashobra.jpg',
  'public/images/locations/mashobra-hero.jpg',
  'public/images/locations/mashobra-forest.jpg',
  'public/images/locations/mashobra-views.jpg',
  'public/images/locations/mashobra-landscape.jpg',
  'public/images/locations/shimla-hero.jpg',
  'public/images/locations/shimla-mallroad.jpg',
  'public/images/locations/shimla-architecture.jpg',
  'public/images/locations/shimla-landscape.jpg',
  'public/images/locations/kufri-hero.jpg',
  'public/images/locations/kufri-landscape.jpg',
  'public/images/locations/kufri-snow.jpg',
  'public/images/locations/naldehra-hero.jpg',
  'public/images/locations/naldehra-golf.jpg',
  'public/images/locations/naldehra-forest.jpg',
  'public/images/gallery/property-exterior-1.jpg',
  'public/images/gallery/property-living-1.jpg',
  'public/images/gallery/property-bedroom-1.jpg',
  'public/images/gallery/property-balcony-1.jpg',
  'public/images/gallery/property-view-1.jpg',
  'public/images/gallery/mashobra-landscape-1.jpg',
  'public/images/gallery/shimla-views-1.jpg',
  'public/images/gallery/deodar-forest-1.jpg',
  'public/images/about/mountain-lifestyle.jpg',
  'public/images/about/about-mashobra-property.jpg',
  'public/images/blog/mashobra-investment-guide.jpg',
  'public/images/blog/himachal-property-guide.jpg',
  'public/images/blog/mashobra-vs-shimla.jpg',
  'public/images/blog/luxury-villas-mashobra.jpg',
];

for (const target of targetFiles) {
  const fullTarget = path.join(rootDir, target);
  fs.mkdirSync(path.dirname(fullTarget), { recursive: true });
  if (!fs.existsSync(fullTarget)) {
    fs.copyFileSync(srcFile, fullTarget);
    console.log('Seeded:', target);
  }
}
console.log('All image slots populated.');
