import PageHero from '@/components/PageHero';
import ImageGallery from '@/components/ImageGallery';


export const metadata = {
  title: 'Residential Artificial Turf Installation - Inland Empire Homes',
  description: 'Transform your yard with premium residential artificial turf installation. Low maintenance, pet-friendly, water-saving synthetic grass for Inland Empire homes. Free estimates from Precision Turf Works.',
  alternates: {
    canonical: 'https://precisionturfworks.com/services/residential',
  },
};

const benefits = [
  {
    title: 'Low Maintenance',
    description: 'Say goodbye to mowing, watering, and fertilizing. Our turf stays green and vibrant with minimal effort.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Durable & Long-Lasting',
    description: 'Premium materials withstand heavy foot traffic, pets, and the elements without fading or wearing down.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: 'Pet & Family Friendly',
    description: 'Safe, soft surfaces for children to play on and easy-to-clean areas for pets.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
      </svg>
    ),
  },
  {
    title: 'Water-Saving Solution',
    description: 'Reduce water usage and support environmentally conscious landscaping.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
  {
    title: 'Customizable Design',
    description: 'From front lawns to backyard retreats, playgrounds, putting greens, and poolside areas, our turf is tailored to your home and lifestyle.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
  },
];

const steps = [
  {
    title: 'Consultation & Planning',
    description: 'We assess your property, discuss your vision, and create a tailored plan.',
  },
  {
    title: 'Professional Installation',
    description: 'Our team ensures proper grading, drainage, and seamless turf placement for a polished, natural look.',
  },
  {
    title: 'Finishing Touches',
    description: 'We add infill, brush the turf, and ensure a smooth, soft surface that\u2019s ready for use.',
  },
  {
    title: 'Ongoing Support',
    description: 'We provide care tips and maintenance guidance to keep your turf looking its best for years to come.',
  },
];

const galleryImages = [
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
  '/images/residential-backyard-vinyl-fence-trees-13.jpg',
  '/images/residential-backyard-fence-line-14.jpg',
  '/images/residential-backyard-aerial-layout-15.jpg',
  '/images/residential-backyard-roses-hillside-16.jpg',
  '/images/residential-front-yard-river-rock-border-17.jpg',
  '/images/residential-backyard-flagstone-bamboo-18.jpg',
  '/images/residential-backyard-patio-fire-pit-19.jpg',
  '/images/residential-hilltop-patio-valley-view-20.jpg',
  '/images/residential-hilltop-pool-mountain-view-21.jpg',
  '/images/residential-modern-pool-wood-deck-22.jpg',
  '/images/residential-backyard-stepping-stones-pool-23.jpg',
  '/images/residential-pool-lounge-mountain-view-24.jpg',
  '/images/residential-pool-area-hillside-25.jpg',
];

export default function ResidentialPage() {
  return (
    <>
      <PageHero
        title="Residential Artificial Turf"
        subtitle="Beauty, Comfort, and Low Maintenance for Your Home"
        image="/images/residential-header.jpg"
        breadcrumbs={[
          { name: 'Home', url: 'https://precisionturfworks.com' },
          { name: 'Services', url: 'https://precisionturfworks.com/services' },
          { name: 'Residential', url: 'https://precisionturfworks.com/services/residential' },
        ]}
      />

      {/* Intro */}
      <section className="py-20 bg-ptw-cream">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-lg leading-relaxed text-ptw-bark/80 animate-fade-up">
            Artificial turf has come a long way — and today&apos;s residential installations offer the perfect combination of aesthetics, durability, and ease of care. At Precision Turf Works, we help homeowners transform their yards into lush, green spaces that can be enjoyed year-round.
          </p>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl leading-[0.95] font-semibold text-ptw-green text-center tracking-wider uppercase">
            Why Choose Residential Turf
          </h2>
          <div className="section-divider mt-4 mb-16" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <div
                key={benefit.title}
                className={`card-lift bg-ptw-cream rounded-lg p-8 border border-ptw-cream-dark animate-fade-up delay-${((idx % 5) + 1) * 100}`}
              >
                <div className="w-14 h-14 rounded-full bg-ptw-green/10 flex items-center justify-center text-ptw-gold mb-5">
                  {benefit.icon}
                </div>
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-ptw-green tracking-wider uppercase mb-3">
                  {benefit.title}
                </h3>
                <p className="text-ptw-bark/70 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-24 bg-ptw-cream">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl leading-[0.95] font-semibold text-ptw-green text-center tracking-wider uppercase">
            What to Expect
          </h2>
          <div className="section-divider mt-4 mb-16" />

          <div className="space-y-12">
            {steps.map((step, idx) => (
              <div key={step.title} className={`flex gap-6 items-start animate-fade-up delay-${((idx % 5) + 1) * 100}`}>
                <div className="shrink-0 w-12 h-12 rounded-full bg-ptw-gold flex items-center justify-center">
                  <span className="font-[family-name:var(--font-heading)] text-lg font-semibold text-ptw-deep">
                    {idx + 1}
                  </span>
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-ptw-green tracking-wider uppercase mb-2">
                    {step.title}
                  </h3>
                  <p className="text-ptw-bark/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Result */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-lg leading-relaxed text-ptw-bark/80 animate-fade-up">
            A backyard you can enjoy without the hassle of traditional lawn care — perfect for family time, pets, entertaining guests, or simply relaxing in a beautiful, green oasis.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 bg-ptw-cream">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl leading-[0.95] font-semibold text-ptw-green text-center tracking-wider uppercase">
            Our Residential Projects
          </h2>
          <div className="section-divider mt-4 mb-16" />
          <ImageGallery images={galleryImages} columns={4} />
        </div>
      </section>

    </>
  );
}
