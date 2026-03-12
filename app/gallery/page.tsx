'use client';

import { useState } from 'react';
import Image from 'next/image';
import ImageGallery from '@/components/ImageGallery';


const categories = ['All', 'Residential', 'Commercial', 'Putting Green', 'Maintenance'] as const;
type Category = (typeof categories)[number];

const imagesByCategory: Record<Exclude<Category, 'All'>, string[]> = {
  Residential: [
    '/images/residential-front-yard-corner-lot-01.jpg',
    '/images/residential-front-yard-walkway-02.jpg',
    '/images/residential-front-yard-turf-closeup-03.jpg',
    '/images/residential-front-yard-curved-edging-04.jpg',
    '/images/residential-backyard-palm-trees-lights-05.jpg',
    '/images/residential-backyard-palm-tree-ring-06.jpg',
    '/images/residential-backyard-dog-on-turf-07.jpg',
    '/images/residential-backyard-palm-shadows-pool-08.jpg',
    '/images/residential-backyard-stepping-stones-swing-09.jpg',
    '/images/residential-front-yard-palms-street-view-10.jpg',
    '/images/residential-side-yard-shade-trees-11.jpg',
    '/images/residential-backyard-patio-dining-12.jpg',
  ],
  Commercial: [
    '/images/commercial-building-turf-lawn-01.jpg',
    '/images/commercial-courtyard-drainage-palms-02.jpg',
    '/images/commercial-glass-facade-turf-03.jpg',
    '/images/commercial-courtyard-wide-view-04.jpg',
    '/images/commercial-apartment-courtyard-pool-07.jpg',
    '/images/commercial-apartment-elevated-view-08.jpg',
    '/images/commercial-apartment-topiary-pools-09.jpg',
    '/images/commercial-apartment-side-yard-10.jpg',
    '/images/commercial-bocce-courts-park-11.jpg',
    '/images/commercial-bocce-courts-all-lanes-12.jpg',
    '/images/commercial-bocce-court-single-lane-13.jpg',
    '/images/commercial-bocce-courts-wide-angle-15.jpg',
  ],
  'Putting Green': [
    '/images/putting-green-four-flags-rock-border-01.jpg',
    '/images/putting-green-poolside-boulders-02.jpg',
    '/images/putting-green-kidney-shape-pool-03.jpg',
    '/images/putting-green-poolside-palms-04.jpg',
    '/images/putting-green-spa-cloudy-sky-05.jpg',
    '/images/putting-green-ranch-house-pool-06.jpg',
    '/images/putting-green-ranch-wide-view-07.jpg',
    '/images/putting-green-flag-closeup-patio-08.jpg',
    '/images/putting-green-pool-spa-ranch-09.jpg',
    '/images/putting-green-poolside-block-wall-10.jpg',
    '/images/putting-green-wood-fence-pool-11.jpg',
    '/images/putting-green-modern-guesthouse-12.jpg',
  ],
  Maintenance: [
    '/images/maintenance-equipment-on-turf-01.jpg',
    '/images/maintenance-tools-overhead-view-02.jpg',
    '/images/maintenance-debris-swept-03.jpg',
    '/images/maintenance-collected-debris-dustpan-04.jpg',
    '/images/maintenance-hilltop-yard-dog-05.jpg',
    '/images/maintenance-power-sweeper-fence-06.jpg',
    '/images/maintenance-sweeper-hedge-cleaning-07.jpg',
    '/images/maintenance-leaf-debris-before-08.jpg',
    '/images/maintenance-debris-paver-edge-09.jpg',
  ],
};

function getFilteredImages(category: Category): string[] {
  if (category === 'All') {
    return Object.values(imagesByCategory).flat();
  }
  return imagesByCategory[category];
}

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const filteredImages = getFilteredImages(activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[360px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/putting-green-poolside-boulders-02.jpg"
          alt="Artificial turf installation gallery"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl lg:text-7xl leading-[0.95] font-semibold text-white tracking-wider uppercase animate-fade-up">
            Gallery
          </h1>
          <div className="section-divider mt-6 animate-fade-up delay-300" />
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-ptw-deep/80 leading-relaxed">
            Welcome to our Gallery, where you can explore a wide range of projects showcasing the
            beauty, durability, and versatility of artificial turf. From elegant residential lawns
            and custom putting greens to large-scale commercial spaces and expert repairs, our
            gallery highlights how we transform ordinary areas into vibrant, low-maintenance
            landscapes built to last.
          </p>
        </div>
      </section>

      {/* Filter & Gallery */}
      <section className="py-12 px-4 bg-ptw-cream">
        <div className="max-w-7xl mx-auto">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-base font-bold tracking-wider uppercase font-[family-name:var(--font-heading)] transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-ptw-gold text-ptw-deep shadow-md'
                    : 'bg-white text-ptw-deep/70 hover:bg-ptw-gold/20 border border-ptw-deep/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Photo Count */}
          <p className="text-center text-ptw-deep/60 text-sm mb-8">
            Showing {filteredImages.length} photo{filteredImages.length !== 1 ? 's' : ''}
          </p>

          {/* Image Grid */}
          <ImageGallery images={filteredImages} columns={3} />
        </div>
      </section>

    </>
  );
}
