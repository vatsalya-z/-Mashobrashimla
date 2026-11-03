// src/lib/data/locations.ts
import { Location } from '@/types';
import { websiteImages } from '@/lib/images';

export const locations: Location[] = [
  {
    slug: 'mashobra',
    name: 'Mashobra',
    tagline: "Shimla's Most Desirable Mountain Village",
    description: `Mashobra is a scenic village located approximately 13 km east of Shimla along the NH-5 highway. Situated at an elevation of around 2,100 metres above sea level, Mashobra is renowned for its dense Deodar and oak forests, panoramic Himalayan views and a peaceful residential character that sets it apart from the more commercial areas of Shimla.

The village has historically been a preferred retreat for those seeking tranquillity close to Shimla's urban conveniences. The famous Wildflower Hall, a heritage luxury resort, is situated near Mashobra, reflecting its long-standing appeal as a premium destination.

For residential property buyers, Mashobra offers an exceptional combination of natural beauty, reasonable connectivity to Shimla and a genuine mountain lifestyle.`,
    landmarks: [
      'Wildflower Hall Resort',
      'Craignano Village',
      'Mahunag Temple',
      'Deodar Forest Reserve',
      'Apple orchards',
      'Himalayan viewpoints',
    ],
    connectivity: [
      'Shimla city centre – approx. 13 km (30–40 min drive)',
      'Shimla Railway Station – approx. 18 km',
      'Jubbarhatti Airport – approx. 25 km',
      'Kufri – approx. 14 km',
      'Chail – approx. 32 km',
      'Naldehra – approx. 24 km',
    ],
    lifestyle: [
      'Dense Deodar cedar forest surroundings',
      'Panoramic Himalayan and valley views',
      'Peaceful, low-density residential environment',
      'Clean mountain air',
      'Apple orchards and natural greenery',
      'Walking and trekking trails',
      'Close proximity to Shimla amenities',
    ],
    image: websiteImages.locations.mashobraForest.src,
    gallery: [
      websiteImages.locations.mashobraForest.src,
      websiteImages.locations.himalayanValley.src,
      websiteImages.locations.mountainResidential.src,
    ],
    faqs: [
      {
        question: 'How far is Mashobra from Shimla?',
        answer: 'Mashobra is approximately 13 km from Shimla city centre, about 30–40 minutes by road.',
      },
      {
        question: 'What is the best time to visit Mashobra?',
        answer: 'Mashobra is beautiful year-round. Spring (March–May) and autumn (September–November) offer the most pleasant weather. Winter brings snowfall.',
      },
      {
        question: 'Is road access to Mashobra good in winter?',
        answer: 'The main road to Mashobra is generally accessible year-round. Snowfall can occasionally affect access, and a 4WD vehicle is recommended for winter.',
      },
    ],
  },
  {
    slug: 'shimla',
    name: 'Shimla',
    tagline: 'The Queen of Hill Stations',
    description: `Shimla, the capital of Himachal Pradesh, is one of India's most iconic hill stations. Situated at an elevation of approximately 2,206 metres above sea level, Shimla offers a unique blend of colonial heritage, urban convenience and natural mountain beauty.

The city is characterised by its colonial-era architecture, the famous Mall Road, the Ridge and well-established infrastructure including schools, hospitals and transport connectivity. For property buyers, Shimla represents a premium address with strong lifestyle credentials and long-term property value.

Properties in Shimla range from heritage bungalows and apartments in the city core to spacious villas and residential developments on the outskirts and in satellite areas like Mashobra, Kufri and Naldehra.`,
    landmarks: [
      'The Mall Road',
      'The Ridge',
      'Jakhu Temple',
      'Shimla Railway Station',
      'Kali Bari Temple',
      'State Museum',
      'Annandale',
      'Retreat Building (Presidential)',
    ],
    connectivity: [
      'Jubbarhatti Airport – approx. 22 km',
      'Shimla Railway Station (Toy Train) – city centre',
      'Chandigarh – approx. 113 km (4–5 hours)',
      'Delhi – approx. 350 km (7–8 hours)',
      'Mashobra – approx. 13 km',
      'Kufri – approx. 16 km',
    ],
    lifestyle: [
      'Historic hill station character',
      'The Mall Road for shopping and dining',
      'Strong educational infrastructure',
      'Medical facilities and hospitals',
      'Colonial architecture and heritage',
      'Cool climate throughout summer',
      'Scenic mountain views',
    ],
    image: websiteImages.locations.shimlaMorning.src,
    gallery: [
      websiteImages.locations.shimlaMorning.src,
      websiteImages.locations.pineForest.src,
      websiteImages.locations.himalayanValley.src,
    ],
    faqs: [
      {
        question: 'What property types are available in Shimla?',
        answer: 'Shimla offers apartments, heritage bungalows, residential villas and plots. Available property varies by location within the Shimla municipal area.',
      },
      {
        question: 'How is Shimla connected to Delhi and Chandigarh?',
        answer: 'Shimla is connected by road to Delhi (approx. 350 km) and Chandigarh (approx. 113 km). The nearest airport is Jubbarhatti Airport, approximately 22 km from Shimla.',
      },
    ],
  },
  {
    slug: 'kufri',
    name: 'Kufri',
    tagline: 'A Premier Mountain Retreat Near Shimla',
    description: `Kufri is a scenic hill station located approximately 16 km from Shimla at an elevation of around 2,622 metres above sea level. Known for its heavy snowfall in winter and dramatic mountain scenery year-round, Kufri is a popular tourist destination and an emerging residential address.

Kufri's elevation gives it spectacular views and a distinctive alpine character. The area is known for its meadows, dense forests and proximity to popular tourist attractions including the Himalayan Nature Park.

For property buyers, Kufri offers a more elevated, cooler alternative to Shimla and Mashobra, with a distinctive character and strong tourist appeal that can benefit holiday home buyers.`,
    landmarks: [
      'Himalayan Nature Park',
      'Kufri Fun World',
      'Chini Bungalow',
      'Mahasu Peak',
      'Fagu',
      'Himalayan meadows',
    ],
    connectivity: [
      'Shimla city – approx. 16 km',
      'Mashobra – approx. 14 km',
      'Chail – approx. 22 km',
      'Jubbarhatti Airport – approx. 35 km',
    ],
    lifestyle: [
      'Heavy snowfall in winter – ski and snow activities',
      'Alpine meadows and forests',
      'Horse riding and nature walks',
      'Himalayan Nature Park visits',
      'Cooler summer temperatures',
      'Strong tourist footfall',
    ],
    image: websiteImages.locations.pineForest.src,
    gallery: [
      websiteImages.locations.pineForest.src,
      websiteImages.locations.himalayanValley.src,
    ],
    faqs: [
      {
        question: 'What is the altitude of Kufri?',
        answer: 'Kufri is located at approximately 2,622 metres (8,600 feet) above sea level.',
      },
      {
        question: 'Does Kufri get heavy snowfall?',
        answer: 'Yes. Kufri typically receives significant snowfall from December to February, making it a popular winter destination.',
      },
    ],
  },
  {
    slug: 'naldehra',
    name: 'Naldehra',
    tagline: "India's Oldest Golf Course and Serene Natural Beauty",
    description: `Naldehra is a tranquil hill resort located approximately 24 km from Shimla at an elevation of around 2,044 metres above sea level. Naldehra is famous for hosting one of India's oldest golf courses — a nine-hole course established during the British era that offers stunning views of the Himalayan ranges.

Beyond the golf course, Naldehra is characterised by dense oak and Deodar forests, alpine meadows and an exceptionally peaceful environment. The area sees far less tourist traffic than Shimla or Kufri, making it a genuinely serene destination.

For property buyers seeking extreme privacy, natural beauty and a retreat-like setting within reach of Shimla, Naldehra represents an unusual and appealing option.`,
    landmarks: [
      'Naldehra Golf Course (one of India\'s oldest)',
      'Shiv Temple',
      'Pine and Deodar forests',
      'Himalayan viewpoints',
      'Alpine meadows (Bugyal)',
    ],
    connectivity: [
      'Shimla city – approx. 24 km',
      'Mashobra – approx. 24 km (via Shimla)',
      'Jubbarhatti Airport – approx. 40 km',
      'Tattapani (hot springs) – approx. 30 km',
    ],
    lifestyle: [
      "One of India's oldest golf courses",
      'Dense Deodar and oak forest cover',
      'Exceptionally peaceful and low-crowd environment',
      'Alpine meadows and hiking',
      'Horse riding',
      'Ideal for genuine retreat lifestyle',
    ],
    image: websiteImages.locations.mountainRoad.src,
    gallery: [
      websiteImages.locations.mountainRoad.src,
      websiteImages.locations.mashobraForest.src,
    ],
    faqs: [
      {
        question: 'What is Naldehra famous for?',
        answer: "Naldehra is famous for its historic Naldehra Golf Course, one of India's oldest, and its beautiful Deodar forests and mountain scenery.",
      },
      {
        question: 'How far is Naldehra from Shimla?',
        answer: 'Naldehra is approximately 24 km from Shimla city, about 45–60 minutes by road.',
      },
    ],
  },
];

export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}
