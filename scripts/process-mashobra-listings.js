const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const brainDir = 'C:/Users/LENOVO/.gemini/antigravity/brain/092cb3ee-78d1-477e-90c5-a1ef250afdaa';
const rootDir = path.join(__dirname, '..');

const mappings = [
  {
    src: 'mashobra_ridge_signature_villa_1793780387793.jpg',
    targets: [
      'public/images/properties/villas/luxury-villa-exterior-01.webp',
      'public/images/properties/mashobra/the-ridge-signature-villa.webp',
    ],
  },
  {
    src: 'cedar_crest_luxury_chalet_1793780410573.jpg',
    targets: [
      'public/images/properties/villas/luxury-villa-exterior-02.webp',
      'public/images/properties/mashobra/cedar-crest-luxury-chalet.webp',
    ],
  },
  {
    src: 'highland_slope_tiered_residence_1793780421722.jpg',
    targets: [
      'public/images/properties/villas/luxury-villa-exterior-03.webp',
      'public/images/properties/mashobra/highland-slope-tiered-residence.webp',
    ],
  },
  {
    src: 'contemporary_family_mountain_villa_1793780443857.jpg',
    targets: [
      'public/images/properties/villas/luxury-villa-exterior-04.webp',
      'public/images/properties/mashobra/contemporary-family-mountain-villa.webp',
    ],
  },
  {
    src: 'alpine_cedar_heritage_cottage_1793780454847.jpg',
    targets: [
      'public/images/properties/cottages/mountain-cottage-exterior-01.webp',
      'public/images/properties/mashobra/alpine-cedar-heritage-cottage.webp',
    ],
  },
  {
    src: 'pine_crest_alpine_a_frame_lodge_1793780476937.jpg',
    targets: [
      'public/images/properties/cottages/mountain-cottage-exterior-02.webp',
      'public/images/properties/mashobra/pine-crest-alpine-a-frame-lodge.webp',
    ],
  },
  {
    src: 'grand_mountain_manor_1793780487467.jpg',
    targets: [
      'public/images/properties/villas/luxury-villa-exterior-05.webp',
      'public/images/properties/mashobra/grand-mountain-manor-4bhk.webp',
    ],
  },
  {
    src: 'grand_summit_ridge_chateau_1793780511169.jpg',
    targets: [
      'public/images/properties/luxury-homes/luxury-mountain-estate-01.webp',
      'public/images/properties/mashobra/grand-summit-ridge-chateau.webp',
    ],
  },
  {
    src: 'stonegate_cantilever_alpine_chateau_1793780529006.jpg',
    targets: [
      'public/images/properties/luxury-homes/luxury-mountain-estate-02.webp',
      'public/images/properties/mashobra/stonegate-cantilever-alpine-chateau.webp',
    ],
  },
];

async function main() {
  console.log('Processing Mashobra listing images...');
  for (const item of mappings) {
    const srcPath = path.join(brainDir, item.src);
    if (!fs.existsSync(srcPath)) {
      console.error(`Source file missing: ${srcPath}`);
      continue;
    }

    for (const relTarget of item.targets) {
      const targetPath = path.join(rootDir, relTarget);
      fs.mkdirSync(path.dirname(targetPath), { recursive: true });
      await sharp(srcPath)
        .webp({ quality: 90, effort: 4 })
        .toFile(targetPath);
      const stat = fs.statSync(targetPath);
      console.log(`✓ Created: ${relTarget} (${(stat.size / 1024).toFixed(1)} KB)`);
    }
  }
  console.log('Done processing all 9 unique Mashobra listing images.');
}

main().catch((err) => {
  console.error('Error processing images:', err);
  process.exit(1);
});

