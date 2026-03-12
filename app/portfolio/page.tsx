import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import ImageGallery from '@/components/ImageGallery';


export const metadata: Metadata = {
  title: 'Before & After Turf Transformations - Project Portfolio',
  description: 'See real before and after photos of artificial turf installations by Precision Turf Works. Residential backyards, commercial properties, and putting greens across the Inland Empire.',
  alternates: {
    canonical: 'https://precisionturfworks.com/portfolio',
  },
};

const projects = [
  {
    number: 1,
    location: 'Highland, CA',
    title: 'Backyard Transformation',
    description:
      'For this brand-new home in Highland, the backyard started as nothing but dirt. Our team transformed it into a lush, low-maintenance outdoor space with premium artificial turf. The result is a clean, functional, and luxurious yard where the family \u2014 and their dog \u2014 can relax, play, and enjoy year-round.',
    images: [
      '/images/portfolio-highland-backyard-before-01.jpg',
      '/images/portfolio-highland-backyard-before-02.jpg',
      '/images/portfolio-highland-backyard-after-turf-03.jpg',
      '/images/portfolio-highland-backyard-after-patio-04.jpg',
      '/images/portfolio-highland-backyard-after-firepit-05.jpg',
      '/images/portfolio-highland-backyard-after-walkway-06.jpg',
      '/images/portfolio-highland-backyard-after-wide-07.jpg',
      '/images/portfolio-highland-backyard-after-mountain-08.jpg',
    ],
  },
  {
    number: 2,
    location: 'Highland, CA',
    title: 'Poolside Paradise',
    description:
      'We transformed this backyard into the ultimate poolside retreat! After the installation of a brand-new swimming pool, we completed the surrounding space with lush, durable artificial turf \u2014 creating a safe, low-maintenance area perfect for family fun and for dogs to run and play. What was once bare dirt is now a vibrant, usable backyard that complements the pool and provides year-round enjoyment for both humans and pets.',
    images: [
      '/images/portfolio-highland-poolside-before-01.jpg',
      '/images/portfolio-highland-poolside-before-02.jpg',
      '/images/portfolio-highland-poolside-after-stepping-03.jpg',
      '/images/portfolio-highland-poolside-after-overview-04.jpg',
      '/images/portfolio-highland-poolside-after-spa-lounge-05.jpg',
      '/images/portfolio-highland-poolside-after-firepit-06.jpg',
      '/images/portfolio-highland-poolside-after-wide-07.jpg',
      '/images/portfolio-highland-poolside-after-panoramic-08.jpg',
      '/images/portfolio-highland-poolside-after-city-view-09.jpg',
      '/images/portfolio-highland-poolside-after-patio-10.jpg',
    ],
  },
  {
    number: 3,
    location: 'Rialto, CA',
    title: 'Backyard Transformation',
    description:
      'We turned this neglected backyard into a beautiful, functional outdoor space! The area was previously overrun with weeds, dirt, and dry, dead grass. Our team installed premium artificial turf, creating a lush, low-maintenance yard that\u2019s perfect for family gatherings, pets, and everyday enjoyment. What was once unusable is now a vibrant, inviting space the homeowners can enjoy year-round.',
    images: [
      '/images/portfolio-rialto-backyard-after-trees-01.jpg',
      '/images/portfolio-rialto-backyard-after-patio-02.jpg',
      '/images/portfolio-rialto-backyard-before-dirt-03.jpg',
      '/images/portfolio-rialto-backyard-before-bare-04.jpg',
      '/images/portfolio-rialto-backyard-after-fence-05.jpg',
      '/images/portfolio-rialto-backyard-after-tree-cutout-06.jpg',
      '/images/portfolio-rialto-backyard-after-fenceline-07.jpg',
    ],
  },
  {
    number: 4,
    location: null,
    title: null,
    description: null,
    images: [
      '/images/portfolio-quick-parkway-strip-tree-01.jpg',
      '/images/portfolio-quick-parkway-strip-driveway-02.jpg',
      '/images/portfolio-quick-front-yard-curved-03.jpg',
      '/images/portfolio-quick-front-yard-closeup-04.jpg',
      '/images/portfolio-quick-front-yard-ground-level-05.jpg',
      '/images/portfolio-quick-front-yard-street-view-06.jpg',
      '/images/portfolio-quick-parkway-neighborhood-07.jpg',
      '/images/portfolio-quick-front-entry-cactus-08.jpg',
      '/images/portfolio-quick-parkway-narrow-strip-09.jpg',
      '/images/portfolio-quick-parkway-tree-sidewalk-10.jpg',
      '/images/portfolio-quick-driveway-palm-strip-11.jpg',
      '/images/portfolio-quick-parkway-vehicles-12.jpg',
      '/images/portfolio-quick-driveway-garage-cactus-13.jpg',
    ],
  },
];

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        title="Before & Afters"
        subtitle="See the Transformation"
        image="/images/portfolio-hero-rialto-overview.jpg"
        breadcrumbs={[
          { name: 'Home', url: 'https://precisionturfworks.com' },
          { name: 'Portfolio', url: 'https://precisionturfworks.com/portfolio' },
        ]}
      />

      {/* Projects */}
      <div>
        {projects.map((project, idx) => (
          <section
            key={project.number}
            className={idx % 2 === 0 ? 'bg-white' : 'bg-ptw-cream'}
          >
            <div className="max-w-6xl mx-auto px-4 py-20">
              {/* Project Number Badge */}
              <div className="flex flex-col items-center mb-10">
                <div className="w-20 h-20 rounded-full border-4 border-ptw-gold flex items-center justify-center mb-4">
                  <span className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-ptw-gold">
                    {project.number}
                  </span>
                </div>

                {project.location && (
                  <span className="text-sm uppercase tracking-widest text-ptw-deep/50 font-semibold">
                    {project.location}
                  </span>
                )}

                {project.title && (
                  <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl leading-[0.95] font-semibold text-ptw-deep tracking-wider uppercase mt-2 text-center">
                    {project.title}
                  </h2>
                )}
              </div>

              {project.description && (
                <p className="text-lg text-ptw-deep/80 leading-relaxed text-center max-w-3xl mx-auto mb-12">
                  {project.description}
                </p>
              )}

              <ImageGallery images={project.images} columns={4} />
            </div>

            {/* Gold Divider (except after last project) */}
            {idx < projects.length - 1 && (
              <div className="flex justify-center pb-2">
                <div className="w-24 h-1 bg-ptw-gold rounded-full" />
              </div>
            )}
          </section>
        ))}
      </div>

    </>
  );
}
