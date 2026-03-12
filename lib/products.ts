export type Supplier = 'AGL' | 'PG' | 'SGW';
export type ProductCategory = 'lawn' | 'putting-green' | 'pet' | 'playground' | 'specialty';

export interface Product {
  slug: string;
  name: string;
  supplier: Supplier;
  supplierName: string;
  category: ProductCategory;
  collection?: string;
  description: string;
  specs: {
    pileHeight?: string;
    faceWeight?: string;
    totalWeight?: string;
    warranty?: string;
    rollWidth?: string;
    backing?: string;
    fiber?: string;
    bladeType?: string;
    drainage?: string;
  };
  features?: string[];
  image?: string;
}

export const SUPPLIERS: Record<Supplier, { name: string; description: string }> = {
  AGL: {
    name: 'AGL Grass',
    description:
      'Premium artificial turf with innovative PFAS-free and no-infill options. Known for their luxurious Saratoga, Royal, and Majestic product lines with triple-layer reinforced backing and superior drainage.',
  },
  PG: {
    name: 'PG',
    description:
      'The largest artificial grass retailer in the United States with over 60 locations nationwide. PG offers a wide range of turf products with DuraCore backing, Cool Yarn technology, and lifetime warranties on select products.',
  },
  SGW: {
    name: 'SGW',
    description:
      'Premium Everlast and TigerTurf brand products, offering one of the deepest product catalogs in the industry. Known for innovative blade technologies, IPEMA-certified playground turf, and TigerCool cooling technology.',
  },
};

export const CATEGORIES: Record<ProductCategory, string> = {
  lawn: 'Landscape & Lawn',
  'putting-green': 'Putting Greens',
  pet: 'Pet-Friendly',
  playground: 'Playground',
  specialty: 'Sports & Specialty',
};

export const PRODUCTS: Product[] = [
  // ──────────────────────────────────────────────
  // PURCHASE GREEN (PG)
  // ──────────────────────────────────────────────

  // PG — Lawn & Landscape
  {
    slug: 'bluegrass-light',
    name: 'Bluegrass Light',
    supplier: 'PG',
    supplierName: 'PG',
    category: 'lawn',
    description:
      'Value turf for front yards, commercial landscapes, and patio glue-downs. DuraCore backing with field/olive green C-shaped blades.',
    specs: {
      pileHeight: '1.5"',
      faceWeight: '48 oz',
      backing: 'DuraCore',
      bladeType: 'C-shaped',
      rollWidth: '15 ft',
    },
    features: ['DuraCore Backing'],
    image: '/images/products/bluegrass-light.jpg',
  },
  {
    slug: 'navigation-trek-50',
    name: 'Navigation Trek 50',
    supplier: 'PG',
    supplierName: 'PG',
    category: 'lawn',
    description:
      'C-shaped fiber with emerald/olive/field/lime green and yellow-green thatch. Versatile for lawns, pet areas, and putting green fringes.',
    specs: {
      faceWeight: '50 oz',
      bladeType: 'C-shaped',
      backing: 'DuraCore',
      rollWidth: '15 ft',
    },
    features: ['DuraCore Backing'],
    image: '/images/products/navigation-trek-50.jpg',
  },
  {
    slug: 'baja-lite',
    name: 'Baja Lite',
    supplier: 'PG',
    supplierName: 'PG',
    category: 'lawn',
    description:
      'Wave-shaped blade in field olive green with green-tan thatch. Medium density for landscapes with low traffic areas.',
    specs: {
      pileHeight: '1.5"',
      bladeType: 'Wave',
      rollWidth: '15 ft',
    },
    image: '/images/products/baja-lite.jpg',
  },
  {
    slug: 'baja-pro',
    name: 'Baja Pro',
    supplier: 'PG',
    supplierName: 'PG',
    category: 'lawn',
    description:
      'Upgraded Baja with heavier face weight and wave-shaped blades. Field olive green on DuraCore backing for moderate traffic residential use.',
    specs: {
      bladeType: 'Wave',
      backing: 'DuraCore',
      rollWidth: '15 ft',
    },
    features: ['DuraCore Backing'],
    image: '/images/products/baja-pro.jpg',
  },
  {
    slug: 'neo-terra-olive',
    name: 'Neo Terra Olive',
    supplier: 'PG',
    supplierName: 'PG',
    category: 'lawn',
    description:
      'Premium S, M, and diamond-shaped fibers in an olive-and-beige blend. Freshly mowed look for residential lawns and pet areas.',
    specs: {
      bladeType: 'S/M/Diamond',
      backing: 'DuraCore',
      rollWidth: '15 ft',
    },
    features: ['DuraCore Backing', 'Multi-Blade Shape'],
    image: '/images/products/neo-terra-olive.jpg',
  },
  {
    slug: 'neo-terra-50',
    name: 'Neo Terra 50',
    supplier: 'PG',
    supplierName: 'PG',
    category: 'lawn',
    description:
      '4-color blend with S, M, and diamond blade shapes. Cost-competitive with a realistic freshly mowed look.',
    specs: {
      faceWeight: '50 oz',
      bladeType: 'S/M/Diamond',
      backing: 'DuraCore',
      rollWidth: '15 ft',
    },
    features: ['DuraCore Backing', 'Multi-Blade Shape'],
    image: '/images/products/neo-terra-50.jpg',
  },
  {
    slug: 'neo-terra-80',
    name: 'Neo Terra 80',
    supplier: 'PG',
    supplierName: 'PG',
    category: 'lawn',
    description:
      'Premium 4-color fusion blend with S, M, and diamond fibers. Exceptionally natural appearance for residential lawns.',
    specs: {
      pileHeight: '1.9"',
      faceWeight: '80 oz',
      bladeType: 'S/M/Diamond',
      backing: 'DuraCore',
      rollWidth: '15 ft',
    },
    features: ['DuraCore Backing', 'Multi-Blade Shape'],
    image: '/images/products/neo-terra-80.jpg',
  },
  {
    slug: 'arizona-pro-olive',
    name: 'Arizona Pro Olive',
    supplier: 'PG',
    supplierName: 'PG',
    category: 'lawn',
    description:
      'Cool Yarn technology in olive tones on DuraCore backing. For backyards, front yards, playgrounds, and between pavers.',
    specs: {
      pileHeight: '1.7"',
      backing: 'DuraCore',
      rollWidth: '15 ft',
    },
    features: ['Cool Yarn', 'DuraCore Backing'],
    image: '/images/products/arizona-pro-olive.jpg',
  },
  {
    slug: 'arizona-pro-spring',
    name: 'Arizona Pro Spring',
    supplier: 'PG',
    supplierName: 'PG',
    category: 'lawn',
    description:
      'Mini-W blade shape in spring green bi-color with mixed green-yellow thatch. DuraCore backing for yards and playgrounds.',
    specs: {
      pileHeight: '1.7"',
      bladeType: 'Mini-W',
      backing: 'DuraCore',
      rollWidth: '15 ft',
    },
    features: ['DuraCore Backing'],
    image: '/images/products/arizona-pro-spring.jpg',
  },
  {
    slug: 'patriot-lite',
    name: 'Patriot Lite',
    supplier: 'PG',
    supplierName: 'PG',
    category: 'lawn',
    description:
      'Budget-friendly lawn turf with Cool Yarn technology. Light-duty residential applications with a natural appearance.',
    specs: {
      rollWidth: '15 ft',
    },
    features: ['Cool Yarn'],
    image: '/images/products/patriot-lite.jpg',
  },
  {
    slug: 'luxury-olive',
    name: 'Luxury Olive',
    supplier: 'PG',
    supplierName: 'PG',
    category: 'lawn',
    description:
      'ArmorLoc technology with Silverback backing. Pet-friendly olive tones for lawn and landscape applications.',
    specs: {
      backing: 'Silverback',
      rollWidth: '15 ft',
    },
    features: ['Made in USA', 'ArmorLoc', 'Pet-Friendly', 'Lifetime Warranty'],
    image: '/images/products/luxury-olive.jpg',
  },
  {
    slug: 'luxury-spring',
    name: 'Luxury Spring',
    supplier: 'PG',
    supplierName: 'PG',
    category: 'lawn',
    description:
      'Cool Yarn technology in spring green tones. Pet-friendly for lawn and landscape applications.',
    specs: {
      backing: 'Silverback',
      rollWidth: '15 ft',
    },
    features: ['Made in USA', 'Cool Yarn', 'Pet-Friendly', 'Lifetime Warranty'],
    image: '/images/products/luxury-spring.jpg',
  },
  {
    slug: 'ultra-play-olive-65',
    name: 'Ultra Play Olive 65',
    supplier: 'PG',
    supplierName: 'PG',
    category: 'lawn',
    description:
      'C-shaped olive green bicolor fiber with higher density that resists matting and requires less infill.',
    specs: {
      faceWeight: '65 oz',
      bladeType: 'C-shaped',
      backing: 'DuraCore',
      rollWidth: '15 ft',
    },
    features: ['DuraCore Backing', 'Low Infill'],
    image: '/images/products/ultra-play-olive-65.jpg',
  },
  {
    slug: 'arizona-platinum-olive',
    name: 'Arizona Platinum Olive',
    supplier: 'PG',
    supplierName: 'PG',
    category: 'lawn',
    description:
      'Cool Yarn for 10-20% cooler surface temperatures. Slim bi-colored olive blades on DuraCore backing for premium residential use.',
    specs: {
      pileHeight: '2"',
      backing: 'DuraCore',
      rollWidth: '15 ft',
    },
    features: ['Cool Yarn', 'DuraCore Backing'],
    image: '/images/products/arizona-platinum-olive.jpg',
  },
  {
    slug: 'arizona-platinum-spring',
    name: 'Arizona Platinum Spring',
    supplier: 'PG',
    supplierName: 'PG',
    category: 'lawn',
    description:
      'Cool Yarn for 10-20% cooler surface temperatures. Bright green bi-colored blades for lush residential landscapes.',
    specs: {
      pileHeight: '2"',
      backing: 'DuraCore',
      rollWidth: '15 ft',
    },
    features: ['Cool Yarn', 'DuraCore Backing'],
    image: '/images/products/arizona-platinum-spring.jpg',
  },
  {
    slug: 'st-augustine',
    name: 'St. Augustine',
    supplier: 'PG',
    supplierName: 'PG',
    category: 'lawn',
    description:
      'Mini-Wave blade in field/apple green with green-tan thatch. Fully permeable for low to moderate traffic with pets.',
    specs: {
      pileHeight: '1.7"',
      bladeType: 'Mini-Wave',
      rollWidth: '15 ft',
    },
    features: ['Fully Permeable', 'Pet-Friendly'],
    image: '/images/products/st-augustine.jpg',
  },
  {
    slug: 'ultra-play-olive',
    name: 'Ultra Play Olive',
    supplier: 'PG',
    supplierName: 'PG',
    category: 'lawn',
    description:
      'C-shaped olive green bicolor fiber. Fade-resistant with enhanced density for superior matting resistance.',
    specs: {
      bladeType: 'C-shaped',
      backing: 'DuraCore',
      rollWidth: '15 ft',
    },
    features: ['DuraCore Backing', 'Fade-Resistant'],
    image: '/images/products/ultra-play-olive.jpg',
  },
  {
    slug: 'ultra-play-spring',
    name: 'Ultra Play Spring',
    supplier: 'PG',
    supplierName: 'PG',
    category: 'lawn',
    description:
      'C-shaped spring green bicolor fiber. Same premium specs as Ultra Play Olive in a vibrant spring-green variant.',
    specs: {
      bladeType: 'C-shaped',
      backing: 'DuraCore',
      rollWidth: '15 ft',
    },
    features: ['DuraCore Backing', 'Fade-Resistant'],
    image: '/images/products/ultra-play-spring.jpg',
  },
  {
    slug: 'bluegrass-supreme',
    name: 'Bluegrass Supreme',
    supplier: 'PG',
    supplierName: 'PG',
    category: 'lawn',
    description:
      'One of the tallest, lushest options with comfortable feel. C-shaped low-sheen blades in field/olive green for low to high traffic areas.',
    specs: {
      pileHeight: '2.4"',
      bladeType: 'C-shaped',
      backing: 'DuraCore',
      rollWidth: '15 ft',
    },
    features: ['PFAS-Free', 'DuraCore Backing', 'Lifetime Warranty'],
    image: '/images/products/bluegrass-supreme.jpg',
  },
  {
    slug: 'fescue-supreme',
    name: 'Fescue Supreme',
    supplier: 'PG',
    supplierName: 'PG',
    category: 'lawn',
    description:
      'Double diamond-shaped delustered olive bi-color blades. One of the tallest, most durable options in the PG lineup.',
    specs: {
      pileHeight: '2.4"',
      faceWeight: '108 oz',
      bladeType: 'Double Diamond',
      backing: 'DuraCore',
      rollWidth: '15 ft',
    },
    features: ['DuraCore Backing'],
    image: '/images/products/fescue-supreme.jpg',
  },
  {
    slug: 'neo-terra-patriot',
    name: 'Neo Terra Patriot',
    supplier: 'PG',
    supplierName: 'PG',
    category: 'lawn',
    description:
      'Premium turf with Cool Yarn technology on DuraCore backing. Highest-tier standard turf in the PG lineup.',
    specs: {
      backing: 'DuraCore',
      rollWidth: '15 ft',
    },
    features: ['Cool Yarn', 'DuraCore Backing'],
    image: '/images/products/neo-terra-patriot.jpg',
  },

  // PG — Pet-Friendly
  {
    slug: 'pet-pro-usa',
    name: 'Pet Pro',
    supplier: 'PG',
    supplierName: 'PG',
    category: 'pet',
    description:
      'Pet-friendly with Cool Yarn and ArmorLoc technology. Designed for lawns, playgrounds, and pet areas with superior durability.',
    specs: {
      rollWidth: '15 ft',
    },
    features: ['Made in USA', 'Cool Yarn', 'ArmorLoc', 'Pet-Friendly'],
    image: '/images/products/pet-pro-usa.jpg',
  },

  // PG — Playground
  {
    slug: 'playscape-premiere',
    name: 'Playscape Premiere',
    supplier: 'PG',
    supplierName: 'PG',
    category: 'playground',
    description:
      'Playground-grade with antimicrobial additives and anti-static carbon fiber. Fully permeable with recyclable acrylic backing.',
    specs: {
      backing: 'Recyclable Acrylic',
      rollWidth: '15 ft',
    },
    features: ['Antimicrobial', 'Anti-Static', 'Fully Permeable', 'Recyclable'],
    image: '/images/products/playscape-premiere.jpg',
  },

  // PG — Putting Greens
  {
    slug: 'true-pro-putting-green',
    name: 'True Pro Putting Green',
    supplier: 'PG',
    supplierName: 'PG',
    category: 'putting-green',
    description:
      'Emerald bi-color texturized fibers on DuraCore backing. Consistent ball roll for backyard practice greens.',
    specs: {
      pileHeight: '0.6"',
      faceWeight: '42 oz',
      backing: 'DuraCore',
      rollWidth: '15 ft',
    },
    features: ['DuraCore Backing'],
    image: '/images/products/true-pro-putting-green.jpg',
  },
  {
    slug: 'eagle-putt-pro-nylon',
    name: 'Eagle Putt Pro Nylon',
    supplier: 'PG',
    supplierName: 'PG',
    category: 'putting-green',
    description:
      'Nylon fiber with Stimp 11-12 speed rating and no infill required. Verde/lime green on rubber backing for professional-quality backyard golf.',
    specs: {
      pileHeight: '3/8" gauge',
      faceWeight: '36 oz',
      fiber: 'Nylon',
      backing: 'Rubber',
      rollWidth: '15 ft',
    },
    features: ['Made in USA', 'No Infill Required', 'Nylon Fiber'],
    image: '/images/products/eagle-putt-pro-nylon.jpg',
  },

  // ──────────────────────────────────────────────
  // SYNTHETIC GRASS WAREHOUSE (SGW)
  // ──────────────────────────────────────────────

  // SGW — Lawn & Landscape
  {
    slug: 'sequoia-ultra-light',
    name: 'Sequoia Ultra Light',
    supplier: 'SGW',
    supplierName: 'SGW',
    category: 'lawn',
    collection: 'Sequoia Series',
    description:
      'Budget-friendly landscape turf with field/olive green blades and green/brown thatch. Great value for large coverage areas.',
    specs: {
      pileHeight: '1.25"',
      faceWeight: '~35 oz',
      rollWidth: '15 ft',
    },
    image: '/images/products/sequoia-ultra-light.jpg',
  },
  {
    slug: 'sequoia-light',
    name: 'Sequoia Light',
    supplier: 'SGW',
    supplierName: 'SGW',
    category: 'lawn',
    collection: 'Sequoia Series',
    description:
      'Residential landscape turf with field/olive green blades for light to moderate traffic. Excellent entry-level option.',
    specs: {
      pileHeight: '1.5"',
      faceWeight: '~45 oz',
      rollWidth: '15 ft',
    },
    image: '/images/products/sequoia-light.jpg',
  },
  {
    slug: 'emerald-light',
    name: 'Emerald Light',
    supplier: 'SGW',
    supplierName: 'SGW',
    category: 'lawn',
    collection: 'Emerald Series',
    description:
      'Natural-look residential turf, certified lead-free. Field and light olive green blend for everyday residential use.',
    specs: {
      pileHeight: '1.5"',
      faceWeight: '~52 oz',
      rollWidth: '15 ft',
    },
    features: ['Lead-Free'],
    image: '/images/products/emerald-light.jpg',
  },
  {
    slug: 'cascade-fescue-light',
    name: 'Cascade Fescue Light',
    supplier: 'SGW',
    supplierName: 'SGW',
    category: 'lawn',
    collection: 'Cascade Series',
    description:
      'Durable fescue look for high-traffic residential or commercial areas. Backed by a 15-year warranty.',
    specs: {
      pileHeight: '1.625"',
      faceWeight: '~55 oz',
      warranty: '15 years',
      rollWidth: '15 ft',
    },
    image: '/images/products/cascade-fescue-light.jpg',
  },
  {
    slug: 'cascade-spring-light',
    name: 'Cascade Spring Light',
    supplier: 'SGW',
    supplierName: 'SGW',
    category: 'lawn',
    collection: 'Cascade Series',
    description:
      'Field and apple green blade blend for residential projects. Vibrant color with reliable long-term performance.',
    specs: {
      pileHeight: '1.625"',
      faceWeight: '~55 oz',
      rollWidth: '15 ft',
    },
    image: '/images/products/cascade-spring-light.jpg',
  },
  {
    slug: 'venice-fescue-light',
    name: 'Venice Fescue Light',
    supplier: 'SGW',
    supplierName: 'SGW',
    category: 'lawn',
    collection: 'Venice Series',
    description:
      'Field/olive green blend for light-to-moderate traffic. Low-maintenance residential turf with a natural fescue appearance.',
    specs: {
      pileHeight: '1.5"',
      faceWeight: '~55 oz',
      rollWidth: '15 ft',
    },
    image: '/images/products/venice-fescue-light.jpg',
  },
  {
    slug: 'emerald',
    name: 'Emerald',
    supplier: 'SGW',
    supplierName: 'SGW',
    category: 'lawn',
    collection: 'Emerald Series',
    description:
      'Lush field/olive green with green/tan thatch. Versatile for landscape and pet applications with a naturally vibrant look.',
    specs: {
      pileHeight: '1.75"',
      faceWeight: '~68 oz',
      rollWidth: '15 ft',
    },
    features: ['Pet-Friendly'],
    image: '/images/products/emerald.jpg',
  },
  {
    slug: 'multipurpose',
    name: 'Multipurpose',
    supplier: 'SGW',
    supplierName: 'SGW',
    category: 'lawn',
    description:
      'Versatile commercial/residential turf for moderate to heavy foot traffic. Shorter pile for high-durability applications.',
    specs: {
      pileHeight: '1.375"',
      faceWeight: '~72 oz',
      rollWidth: '15 ft',
    },
    image: '/images/products/multipurpose.jpg',
  },
  {
    slug: 'catalina',
    name: 'Catalina',
    supplier: 'SGW',
    supplierName: 'SGW',
    category: 'lawn',
    collection: 'Catalina Series',
    description:
      'High-performance landscape turf for moderate to heavy traffic. Year-round vibrant appearance with excellent resilience.',
    specs: {
      pileHeight: '1.5"',
      faceWeight: '~60 oz',
      rollWidth: '15 ft',
    },
    image: '/images/products/catalina.jpg',
  },
  {
    slug: 'cascade-fescue',
    name: 'Cascade Fescue',
    supplier: 'SGW',
    supplierName: 'SGW',
    category: 'lawn',
    collection: 'Cascade Series',
    description:
      'Mid-range fescue-tone landscape turf for residential and commercial use. Backed by a 15-year warranty.',
    specs: {
      pileHeight: '1.75"',
      faceWeight: '~70 oz',
      warranty: '15 years',
      rollWidth: '15 ft',
    },
    image: '/images/products/cascade-fescue.jpg',
  },
  {
    slug: 'cascade-spring',
    name: 'Cascade Spring',
    supplier: 'SGW',
    supplierName: 'SGW',
    category: 'lawn',
    collection: 'Cascade Series',
    description:
      'Lush field/apple green landscape turf with a 15-year warranty. Versatile for residential and commercial applications.',
    specs: {
      pileHeight: '1.75"',
      faceWeight: '~70 oz',
      warranty: '15 years',
      rollWidth: '15 ft',
    },
    image: '/images/products/cascade-spring.jpg',
  },
  {
    slug: 'everglade-fescue-light',
    name: 'Everglade Fescue Light',
    supplier: 'SGW',
    supplierName: 'SGW',
    category: 'lawn',
    collection: 'Everglade Series',
    description:
      'Dual field/olive green with green/tan thatch. Proprietary omega fiber with perforated backing for superior drainage.',
    specs: {
      pileHeight: '1.5"',
      faceWeight: '~50 oz',
      fiber: 'Omega',
      rollWidth: '15 ft',
    },
    features: ['Perforated Backing'],
    image: '/images/products/everglade-fescue-light.jpg',
  },
  {
    slug: 'everglade-spring-light',
    name: 'Everglade Spring Light',
    supplier: 'SGW',
    supplierName: 'SGW',
    category: 'lawn',
    collection: 'Everglade Series',
    description:
      'Field/lime green blend with perforated backing for drainage. Bright, natural-looking spring color tone.',
    specs: {
      pileHeight: '1.5"',
      faceWeight: '~50 oz',
      rollWidth: '15 ft',
    },
    features: ['Perforated Backing'],
    image: '/images/products/everglade-spring-light.jpg',
  },
  {
    slug: 'riviera-pro',
    name: 'Riviera Pro',
    supplier: 'SGW',
    supplierName: 'SGW',
    category: 'lawn',
    collection: 'Riviera Series',
    description:
      '"M" blade shape with field/lime green blades and tan/green thatch. Triple-reinforced tuft bind for long-lasting performance.',
    specs: {
      pileHeight: '1.75"',
      faceWeight: '~70 oz',
      bladeType: 'M-shaped',
      rollWidth: '15 ft',
    },
    features: ['Triple-Reinforced Tuft Bind'],
    image: '/images/products/riviera-pro.jpg',
  },
  {
    slug: 'sierra-light',
    name: 'Sierra Light',
    supplier: 'SGW',
    supplierName: 'SGW',
    category: 'lawn',
    collection: 'Sierra Series',
    description:
      'Pet-friendly with field/apple green tones and permeable backing. Ideal for pet owners who want a natural-looking lawn.',
    specs: {
      pileHeight: '1.5"',
      faceWeight: '~50 oz',
      rollWidth: '15 ft',
    },
    features: ['Pet-Friendly', 'Permeable Backing'],
    image: '/images/products/sierra-light.jpg',
  },
  {
    slug: 'majestic-68',
    name: 'Majestic 68',
    supplier: 'SGW',
    supplierName: 'SGW',
    category: 'lawn',
    collection: 'Majestic Series',
    description:
      'Two state-of-the-art blade shapes for high-traffic yards. Premium landscape turf with exceptional durability.',
    specs: {
      pileHeight: '1.625"',
      faceWeight: '~68 oz',
      rollWidth: '15 ft',
    },
    features: ['Multi-Blade Shape'],
    image: '/images/products/majestic-68.jpg',
  },
  {
    slug: 'natures-best',
    name: "Nature's Best",
    supplier: 'SGW',
    supplierName: 'SGW',
    category: 'lawn',
    collection: "Nature's Best Series",
    description:
      'Ultra-realistic blade color blend for landscape, pet, and playground applications. Natural appearance meets premium durability.',
    specs: {
      pileHeight: '1.75"',
      faceWeight: '~67 oz',
      rollWidth: '15 ft',
    },
    features: ['Pet-Friendly'],
    image: '/images/products/natures-best.jpg',
  },
  {
    slug: 'venice-fescue-pro',
    name: 'Venice Fescue Pro',
    supplier: 'SGW',
    supplierName: 'SGW',
    category: 'lawn',
    collection: 'Venice Series',
    description:
      'Durable field/olive green blend, non-toxic and lead-free. For moderate traffic areas with a premium fescue look.',
    specs: {
      pileHeight: '1.75"',
      faceWeight: '~80 oz',
      rollWidth: '15 ft',
    },
    features: ['Lead-Free', 'Non-Toxic'],
    image: '/images/products/venice-fescue-pro.jpg',
  },
  {
    slug: 'cascade-spring-pro',
    name: 'Cascade Spring Pro',
    supplier: 'SGW',
    supplierName: 'SGW',
    category: 'lawn',
    collection: 'Cascade Series',
    description:
      'Heavy-duty field/apple green landscape turf with premium spring-green tones. Backed by a 15-year warranty.',
    specs: {
      pileHeight: '1.875"',
      faceWeight: '~90 oz',
      warranty: '15 years',
      rollWidth: '15 ft',
    },
    image: '/images/products/cascade-spring-pro.jpg',
  },
  {
    slug: 'tacoma',
    name: 'Tacoma',
    supplier: 'SGW',
    supplierName: 'SGW',
    category: 'lawn',
    collection: 'Tacoma Series',
    description:
      'Plush field/mid-olive green. Cost-effective premium alternative to natural grass with lasting color retention.',
    specs: {
      pileHeight: '1.75"',
      faceWeight: '~90 oz',
      rollWidth: '15 ft',
    },
    image: '/images/products/tacoma.jpg',
  },
  {
    slug: 'catalina-pro',
    name: 'Catalina Pro',
    supplier: 'SGW',
    supplierName: 'SGW',
    category: 'lawn',
    collection: 'Catalina Series',
    description:
      'Heavy-duty for high-traffic areas with lasting durability and realism. Taller pile for a luxurious look and feel.',
    specs: {
      pileHeight: '2"',
      faceWeight: '~84 oz',
      rollWidth: '15 ft',
    },
    image: '/images/products/catalina-pro.jpg',
  },
  {
    slug: 'malibu-fescue-pro',
    name: 'Malibu Fescue Pro',
    supplier: 'SGW',
    supplierName: 'SGW',
    category: 'lawn',
    collection: 'Malibu Series',
    description:
      'PU-coated backing with UV inhibitors. Field green/olive green with green/tan thatch for a rich fescue appearance.',
    specs: {
      pileHeight: '1.875"',
      faceWeight: '~90 oz',
      backing: 'PU-coated',
      rollWidth: '15 ft',
    },
    features: ['UV Inhibitors'],
    image: '/images/products/malibu-fescue-pro.jpg',
  },
  {
    slug: 'everglade-fescue',
    name: 'Everglade Fescue',
    supplier: 'SGW',
    supplierName: 'SGW',
    category: 'lawn',
    collection: 'Everglade Series',
    description:
      'Field/olive green for residential lawns and commercial properties. Versatile mid-range option with reliable performance.',
    specs: {
      pileHeight: '1.625"',
      faceWeight: '~60 oz',
      rollWidth: '15 ft',
    },
    image: '/images/products/everglade-fescue.jpg',
  },
  {
    slug: 'everglade-spring',
    name: 'Everglade Spring',
    supplier: 'SGW',
    supplierName: 'SGW',
    category: 'lawn',
    collection: 'Everglade Series',
    description:
      'Drought-friendly field/lime green with perforated backing for drainage. Spring color variant of the popular Everglade line.',
    specs: {
      pileHeight: '1.625"',
      faceWeight: '~60 oz',
      rollWidth: '15 ft',
    },
    features: ['Perforated Backing'],
    image: '/images/products/everglade-spring.jpg',
  },
  {
    slug: 'sierra',
    name: 'Sierra',
    supplier: 'SGW',
    supplierName: 'SGW',
    category: 'lawn',
    collection: 'Sierra Series',
    description:
      'Pet-friendly residential turf with permeable backing. Natural-looking field/apple green tones for everyday living.',
    specs: {
      pileHeight: '1.625"',
      faceWeight: '~60 oz',
      rollWidth: '15 ft',
    },
    features: ['Pet-Friendly', 'Permeable Backing'],
    image: '/images/products/sierra.jpg',
  },
  {
    slug: 'lush-light',
    name: 'Lush Light',
    supplier: 'SGW',
    supplierName: 'SGW',
    category: 'lawn',
    collection: 'Lush Series',
    description:
      'Versatile mid-range turf for residential and commercial applications. Balanced performance at a competitive price point.',
    specs: {
      pileHeight: '1.5"',
      faceWeight: '~70 oz',
      rollWidth: '15 ft',
    },
    image: '/images/products/lush-light.jpg',
  },
  {
    slug: 'everglade-fescue-pro',
    name: 'Everglade Fescue Pro',
    supplier: 'SGW',
    supplierName: 'SGW',
    category: 'lawn',
    collection: 'Everglade Series',
    description:
      'Premium field/olive green for playgrounds and high-traffic areas. Upgraded Everglade with heavier face weight.',
    specs: {
      pileHeight: '1.75"',
      faceWeight: '~75 oz',
      rollWidth: '15 ft',
    },
    image: '/images/products/everglade-fescue-pro.jpg',
  },
  {
    slug: 'everglade-spring-pro',
    name: 'Everglade Spring Pro',
    supplier: 'SGW',
    supplierName: 'SGW',
    category: 'lawn',
    collection: 'Everglade Series',
    description:
      'High-traffic landscape turf with a unique blade color blend. Premium spring variant of the Everglade series.',
    specs: {
      pileHeight: '1.75"',
      faceWeight: '~75 oz',
      rollWidth: '15 ft',
    },
    image: '/images/products/everglade-spring-pro.jpg',
  },
  {
    slug: 'platinum-light',
    name: 'Platinum Light',
    supplier: 'SGW',
    supplierName: 'SGW',
    category: 'lawn',
    collection: 'Platinum Series',
    description:
      'Two state-of-the-art blade types for landscape, commercial, and pet use. Entry point to the premium Platinum series.',
    specs: {
      pileHeight: '1.5"',
      faceWeight: '~70 oz',
      rollWidth: '15 ft',
    },
    features: ['Multi-Blade Shape', 'Pet-Friendly'],
    image: '/images/products/platinum-light.jpg',
  },
  {
    slug: 'sierra-pro',
    name: 'Sierra Pro',
    supplier: 'SGW',
    supplierName: 'SGW',
    category: 'lawn',
    collection: 'Sierra Series',
    description:
      'Premium field/apple green with permeable backing. Lush colorway with a luxuriously soft feel.',
    specs: {
      pileHeight: '1.75"',
      faceWeight: '~75 oz',
      rollWidth: '15 ft',
    },
    features: ['Permeable Backing'],
    image: '/images/products/sierra-pro.jpg',
  },
  {
    slug: 'clover',
    name: 'Clover',
    supplier: 'SGW',
    supplierName: 'SGW',
    category: 'lawn',
    description:
      'Versatile landscape turf with permeable backing, great for pet owners. Rich clover-green color tone.',
    specs: {
      pileHeight: '1.625"',
      faceWeight: '~72 oz',
      rollWidth: '15 ft',
    },
    features: ['Pet-Friendly', 'Permeable Backing'],
    image: '/images/products/clover.jpg',
  },
  {
    slug: 'diamond-pro-fescue',
    name: 'Diamond Pro Fescue',
    supplier: 'SGW',
    supplierName: 'SGW',
    category: 'lawn',
    collection: 'Diamond Series',
    description:
      'Premium field/mid-olive green for residential and commercial projects. Part of the flagship Diamond series.',
    specs: {
      pileHeight: '1.875"',
      faceWeight: '~75 oz',
      rollWidth: '15 ft',
    },
    image: '/images/products/diamond-pro-fescue.jpg',
  },
  {
    slug: 'diamond-pro-spring',
    name: 'Diamond Pro Spring',
    supplier: 'SGW',
    supplierName: 'SGW',
    category: 'lawn',
    collection: 'Diamond Series',
    description:
      'Open "W" blade with field/clover green and tan/green thatch. Quadruple-reinforced backing for maximum durability.',
    specs: {
      pileHeight: '1.875"',
      faceWeight: '~75 oz',
      bladeType: 'Open W',
      rollWidth: '15 ft',
    },
    features: ['Quadruple-Reinforced Backing'],
    image: '/images/products/diamond-pro-spring.jpg',
  },
  {
    slug: 'marquee-pro-natural',
    name: 'Marquee Pro Natural',
    supplier: 'SGW',
    supplierName: 'SGW',
    category: 'lawn',
    collection: 'Marquee Series',
    description:
      'Diamond delustered PE fiber with TigerCool technology. Quadruple-reinforced tuft bind for the ultimate premium lawn.',
    specs: {
      pileHeight: '1.875"',
      faceWeight: '~75 oz',
      fiber: 'Diamond Delustered PE',
      rollWidth: '15 ft',
    },
    features: ['TigerCool', 'Quadruple-Reinforced'],
    image: '/images/products/marquee-pro-natural.jpg',
  },
  {
    slug: 'diamond-supreme-fescue',
    name: 'Diamond Supreme Fescue',
    supplier: 'SGW',
    supplierName: 'SGW',
    category: 'lawn',
    collection: 'Diamond Series',
    description:
      'Open "W" blade with memory foam action. Strongest yarn in the industry with a luxuriously tall pile.',
    specs: {
      pileHeight: '2.5"',
      faceWeight: '~85 oz',
      bladeType: 'Open W',
      rollWidth: '15 ft',
    },
    features: ['Memory Foam Action'],
    image: '/images/products/diamond-supreme-fescue.jpg',
  },
  {
    slug: 'lush',
    name: 'Lush',
    supplier: 'SGW',
    supplierName: 'SGW',
    category: 'lawn',
    collection: 'Lush Series',
    description:
      'Premium dense landscape turf with field green tones. Plush feel for residential and commercial applications.',
    specs: {
      pileHeight: '2"',
      faceWeight: '~85 oz',
      rollWidth: '15 ft',
    },
    image: '/images/products/lush.jpg',
  },
  {
    slug: 'platinum',
    name: 'Platinum',
    supplier: 'SGW',
    supplierName: 'SGW',
    category: 'lawn',
    collection: 'Platinum Series',
    description:
      'Two state-of-the-art blade types for premium residential and commercial properties. Flagship of the Platinum series.',
    specs: {
      pileHeight: '1.875"',
      faceWeight: '~85 oz',
      rollWidth: '15 ft',
    },
    features: ['Multi-Blade Shape'],
    image: '/images/products/platinum.jpg',
  },

  // SGW — Pet-Friendly
  {
    slug: 'everlast-pet',
    name: 'Everlast Pet',
    supplier: 'SGW',
    supplierName: 'SGW',
    category: 'pet',
    description:
      'Pet-focused short pile for easy cleaning. Field/olive green tones with antimicrobial properties.',
    specs: {
      pileHeight: '1"',
      faceWeight: '~60 oz',
      rollWidth: '15 ft',
    },
    features: ['Pet-Friendly', 'Easy-Clean'],
    image: '/images/products/everlast-pet.jpg',
  },
  {
    slug: 'lush-pet',
    name: 'Lush Pet',
    supplier: 'SGW',
    supplierName: 'SGW',
    category: 'pet',
    collection: 'Lush Series',
    description:
      'Dense pet-focused short pile for easy maintenance. Designed for residential and commercial pet areas.',
    specs: {
      pileHeight: '1-1/16"',
      faceWeight: '~73 oz',
      rollWidth: '15 ft',
    },
    features: ['Pet-Friendly', 'High-Density'],
    image: '/images/products/lush-pet.jpg',
  },
  {
    slug: 'pet-turf',
    name: 'Pet Turf',
    supplier: 'SGW',
    supplierName: 'SGW',
    category: 'pet',
    description:
      'Proprietary backing for increased drainage. Clover green tones with a 15-year warranty.',
    specs: {
      pileHeight: '1"',
      faceWeight: '~60 oz',
      warranty: '15 years',
      rollWidth: '15 ft',
    },
    features: ['Pet-Friendly', 'Enhanced Drainage'],
    image: '/images/products/pet-turf.jpg',
  },

  // SGW — Playground
  {
    slug: 'playground-fescue',
    name: 'Playground Fescue',
    supplier: 'SGW',
    supplierName: 'SGW',
    category: 'playground',
    collection: 'Playground Series',
    description:
      'IPEMA-certified with 3D curvy "W" fiber. PU-coated backing for safe playgrounds and schoolyards.',
    specs: {
      pileHeight: '1.375"',
      faceWeight: '~55 oz',
      bladeType: '3D Curvy W',
      backing: 'PU-coated',
      rollWidth: '15 ft',
    },
    features: ['IPEMA-Certified', 'PU-Coated Backing'],
    image: '/images/products/playground-fescue.jpg',
  },
  {
    slug: 'playground-spring',
    name: 'Playground Spring',
    supplier: 'SGW',
    supplierName: 'SGW',
    category: 'playground',
    collection: 'Playground Series',
    description:
      'IPEMA-certified with 3D curvy "W" fiber. Field/clover green for vibrant playground installations.',
    specs: {
      pileHeight: '1.375"',
      faceWeight: '~55 oz',
      bladeType: '3D Curvy W',
      backing: 'PU-coated',
      rollWidth: '15 ft',
    },
    features: ['IPEMA-Certified', 'PU-Coated Backing'],
    image: '/images/products/playground-spring.jpg',
  },
  {
    slug: 'versaplay',
    name: 'VersaPlay',
    supplier: 'SGW',
    supplierName: 'SGW',
    category: 'playground',
    description:
      'UV-stabilized multicolor green with natural tan thatch. For playgrounds, landscapes, and high-traffic areas.',
    specs: {
      pileHeight: '1.5"',
      faceWeight: '~100 oz',
      rollWidth: '15 ft',
    },
    features: ['UV-Stabilized', 'High-Traffic'],
    image: '/images/products/versaplay.jpg',
  },

  // SGW — Putting Greens
  {
    slug: 'poly-putt-2-tone-dark',
    name: 'Poly Putt 2-Tone Dark',
    supplier: 'SGW',
    supplierName: 'SGW',
    category: 'putting-green',
    description:
      'Field/lime green two-tone for residential and commercial putting greens. Excellent value for practice surfaces.',
    specs: {
      pileHeight: '0.5"',
      faceWeight: '~50 oz',
      rollWidth: '15 ft',
    },
    image: '/images/products/poly-putt-2-tone-dark.jpg',
  },
  {
    slug: 'true-putt',
    name: 'True Putt',
    supplier: 'SGW',
    supplierName: 'SGW',
    category: 'putting-green',
    description:
      'PGA-level green speeds for backyard or golf course putting surfaces. Professional-grade performance.',
    specs: {
      pileHeight: '1"',
      faceWeight: '~35 oz',
      rollWidth: '15 ft',
    },
    image: '/images/products/true-putt.jpg',
  },
  {
    slug: 'tiger-putt-natural-rubber',
    name: 'Tiger Putt',
    supplier: 'SGW',
    supplierName: 'SGW',
    category: 'putting-green',
    description:
      'Natural rubber backing for stability. Consistent speed with resistance to fraying and shrinkage over time.',
    specs: {
      pileHeight: '0.5"',
      faceWeight: '~45 oz',
      backing: 'Natural Rubber',
      rollWidth: '15 ft',
    },
    features: ['Natural Rubber Backing'],
    image: '/images/products/tiger-putt-natural-rubber.jpg',
  },
  {
    slug: 'bunker-turf',
    name: 'Bunker Turf',
    supplier: 'SGW',
    supplierName: 'SGW',
    category: 'putting-green',
    description:
      'Specialty bunker/sand trap turf. Short dense pile designed for golf course sand trap surrounds.',
    specs: {
      rollWidth: '15 ft',
    },
    features: ['Specialty'],
  },
  {
    slug: 'nylon-putt-2-tone',
    name: 'Nylon Putt 2 Tone',
    supplier: 'SGW',
    supplierName: 'SGW',
    category: 'putting-green',
    description:
      'Nylon fiber for ultimate ball control. Perfect for putting greens, man caves, and offices.',
    specs: {
      pileHeight: '0.5"',
      faceWeight: '~36 oz',
      fiber: 'Nylon',
      rollWidth: '15 ft',
    },
    features: ['Nylon Fiber'],
    image: '/images/products/nylon-putt-2-tone.jpg',
  },

  // SGW — Specialty
  {
    slug: 'allplay-xp',
    name: 'Allplay XP',
    supplier: 'SGW',
    supplierName: 'SGW',
    category: 'specialty',
    description:
      'Built-in 5mm padding for cushion and shock absorption. Designed for indoor sports applications.',
    specs: {
      pileHeight: '0.75"',
      faceWeight: '~48 oz',
      rollWidth: '15 ft',
    },
    features: ['Built-in 5mm Padding', 'Indoor Sports'],
    image: '/images/products/allplay-xp.jpg',
  },
  {
    slug: 'nylon-premier-lawn',
    name: 'Nylon Premier Lawn',
    supplier: 'SGW',
    supplierName: 'SGW',
    category: 'specialty',
    description:
      'Heavy-duty nylon for high-traffic landscape, play areas, roof decks, and putting green fringe. Superior durability for demanding environments.',
    specs: {
      pileHeight: '1.5"',
      faceWeight: '~55 oz',
      fiber: 'Nylon',
      rollWidth: '15 ft',
    },
    features: ['Nylon Fiber', 'High-Traffic'],
    image: '/images/products/nylon-premier-lawn.jpg',
  },

  // ──────────────────────────────────────────────
  // AGL (Artificial Grass Liquidators)
  // ──────────────────────────────────────────────

  // AGL — Lawn & Landscape
  {
    slug: 'saratoga-40',
    name: 'Saratoga 40',
    supplier: 'AGL',
    supplierName: 'AGL',
    category: 'lawn',
    collection: 'Saratoga Series',
    description:
      'Field/olive green PE blades with field green/jute thatch. Soft-touch delustered fibers with triple-layer reinforced backing.',
    specs: {
      pileHeight: '1-3/8"',
      faceWeight: '40 oz',
      fiber: 'PE Monofilament',
      drainage: '30 in/hr',
      rollWidth: '15 ft',
    },
    features: ['Triple-Layer Backing', 'Soft-Touch'],
    image: '/images/products/saratoga-40.jpg',
  },
  {
    slug: 'royal-56',
    name: 'Royal 56',
    supplier: 'AGL',
    supplierName: 'AGL',
    category: 'lawn',
    collection: 'Royal Series',
    description:
      'No-infill dark olive green with taupe thatch. Omni-directional resilient blades for a natural look from any angle.',
    specs: {
      pileHeight: '1-3/4"',
      faceWeight: '56 oz',
      rollWidth: '15 ft',
    },
    features: ['PFAS-Free', 'No Infill Required'],
    image: '/images/products/royal-56.jpg',
  },
  {
    slug: 'central-park-60',
    name: 'Central Park 60',
    supplier: 'AGL',
    supplierName: 'AGL',
    category: 'lawn',
    collection: 'Central Park Series',
    description:
      'Dark green/olive green PE monofilament with beige/green thatch. Triple-layer reinforced backing for lasting performance.',
    specs: {
      pileHeight: '1-5/8"',
      faceWeight: '60 oz',
      fiber: 'PE Monofilament',
      rollWidth: '15 ft',
    },
    features: ['Triple-Layer Backing'],
    image: '/images/products/central-park-60.jpg',
  },
  {
    slug: 'saratoga-60',
    name: 'Saratoga 60',
    supplier: 'AGL',
    supplierName: 'AGL',
    category: 'lawn',
    collection: 'Saratoga Series',
    description:
      'Field/olive green PE with soft-touch delustered fibers. Triple-layer reinforced backing with excellent 30 in/hr drainage rate.',
    specs: {
      pileHeight: '1-3/4"',
      faceWeight: '60 oz',
      fiber: 'PE Monofilament',
      drainage: '30 in/hr',
      rollWidth: '15 ft',
    },
    features: ['Triple-Layer Backing', 'Soft-Touch'],
    image: '/images/products/saratoga-60.jpg',
  },
  {
    slug: 'royal-66',
    name: 'Royal 66',
    supplier: 'AGL',
    supplierName: 'AGL',
    category: 'lawn',
    collection: 'Royal Series',
    description:
      'Premium no-infill dark olive green with taupe thatch. Omni-directional blades for the most natural appearance possible.',
    specs: {
      pileHeight: '1-3/4"',
      faceWeight: '66 oz',
      rollWidth: '15 ft',
    },
    features: ['PFAS-Free', 'No Infill Required'],
    image: '/images/products/royal-66.jpg',
  },
  {
    slug: 'majestic-70',
    name: 'Majestic 70',
    supplier: 'AGL',
    supplierName: 'AGL',
    category: 'lawn',
    collection: 'Majestic Series',
    description:
      'C-shaped PE fibers with a silky-soft feel. Field/olive green with dark green/lime/beige thatch. The most luxurious turf in the AGL lineup.',
    specs: {
      pileHeight: '2-1/2"',
      faceWeight: '70 oz',
      fiber: 'C-shaped PE',
      bladeType: 'C-shaped',
      rollWidth: '15 ft',
    },
    features: ['Silky-Soft Feel'],
    image: '/images/products/majestic-70.jpg',
  },
  {
    slug: 'saratoga-80',
    name: 'Saratoga 80',
    supplier: 'AGL',
    supplierName: 'AGL',
    category: 'lawn',
    collection: 'Saratoga Series',
    description:
      'Densest Saratoga variant with field/olive green PE and soft-touch delustered fibers. Triple-layer reinforced backing for maximum durability.',
    specs: {
      pileHeight: '2"',
      faceWeight: '80 oz',
      fiber: 'PE Monofilament',
      rollWidth: '15 ft',
    },
    features: ['Triple-Layer Backing', 'Soft-Touch'],
    image: '/images/products/saratoga-80.jpg',
  },

  // AGL — Pet-Friendly
  {
    slug: 'k-9',
    name: 'K-9',
    supplier: 'AGL',
    supplierName: 'AGL',
    category: 'pet',
    description:
      'Pet-friendly with no infill required. Perforated backing for rapid drainage and easy cleanup after pets.',
    specs: {
      pileHeight: '1-3/4"',
      faceWeight: '60 oz',
      rollWidth: '15 ft',
    },
    features: ['Pet-Friendly', 'No Infill Required', 'Rapid Drainage'],
  },

  // AGL — Putting Green
  {
    slug: 'multi-nylon-putt',
    name: 'Multi Nylon Putt',
    supplier: 'AGL',
    supplierName: 'AGL',
    category: 'putting-green',
    description:
      'Nylon putting surface with true consistent ball roll for indoor or outdoor greens. Professional-grade quality.',
    specs: {
      pileHeight: '3/4"',
      faceWeight: '42 oz',
      fiber: 'Nylon',
      rollWidth: '15 ft',
    },
    features: ['Nylon Fiber'],
  },

  // AGL — Specialty (Fringe)
  {
    slug: 'kent-fringe-grass',
    name: 'Kent Fringe Grass',
    supplier: 'AGL',
    supplierName: 'AGL',
    category: 'specialty',
    description:
      'Golf fringe/chipping turf in field/olive green. Designed to complement putting green surfaces for a complete golf experience.',
    specs: {
      pileHeight: '1-3/16"',
      faceWeight: '44 oz',
      rollWidth: '15 ft',
    },
    features: ['Golf Fringe'],
    image: '/images/products/kent-fringe-grass.jpg',
  },
];
