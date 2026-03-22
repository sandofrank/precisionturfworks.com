import PageHero from '@/components/PageHero';
import ImageGallery from '@/components/ImageGallery';


export const metadata = {
  title: 'Custom Putting Green Installation - Backyard Golf Greens',
  description: 'Custom backyard putting green installation with professional-grade turf. Practice your short game at home with realistic ball roll and speed. Designed and installed by Precision Turf Works in the Inland Empire.',
  alternates: {
    canonical: 'https://precisionturfworks.com/services/putting-greens',
  },
};

const benefits = [
  {
    title: 'Consistent Play',
    description: 'Enjoy a smooth, even surface with predictable ball roll every time.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5" />
      </svg>
    ),
  },
  {
    title: 'Low Maintenance',
    description: 'No mowing, watering, or fertilizing — spend more time playing and less time maintaining.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Durable & Weather-Resistant',
    description: 'Built to withstand heavy use, all weather conditions, and UV exposure without fading or wearing down.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
      </svg>
    ),
  },
  {
    title: 'Custom Design',
    description: 'Greens can be tailored for size, shape, slope, and difficulty to match your property and skill level.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
  },
  {
    title: 'Eco-Friendly',
    description: 'Conserves water and reduces chemical use compared to traditional grass greens.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
  },
];

const steps = [
  {
    title: 'Site Evaluation & Design',
    description: 'We assess your space and work with you to design a green that fits your vision and needs.',
  },
  {
    title: 'Precision Preparation',
    description: 'Proper grading and drainage ensure a level, stable surface for optimal play.',
  },
  {
    title: 'Expert Turf Installation',
    description: 'We install premium synthetic turf with attention to detail for realistic look and performance.',
  },
  {
    title: 'Finishing Touches',
    description: 'Includes infill, brushing, and shaping to create a true putting experience.',
  },
  {
    title: 'Ongoing Care',
    description: 'Guidance for maintaining your green so it stays perfect year-round.',
  },
];

const applications = [
  'Private residential backyards',
  'Commercial properties and resorts',
  'Golf training facilities',
  'Community parks and recreation areas',
];

const galleryImages = [
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
];

export default function PuttingGreensPage() {
  return (
    <>
      <PageHero
        title="Golf Greens"
        subtitle="Precision, Performance, and Playability"
        image="/images/golf-header.jpg"
        breadcrumbs={[
          { name: 'Home', url: 'https://precisionturfworks.com' },
          { name: 'Services', url: 'https://precisionturfworks.com/services' },
          { name: 'Putting Greens', url: 'https://precisionturfworks.com/services/putting-greens' },
        ]}
      />

      {/* Intro */}
      <section className="py-20 bg-ptw-cream">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-lg leading-relaxed text-ptw-bark/80 animate-fade-up">
            Bring the experience of a championship-quality golf green to your home or commercial property with Precision Turf Works. Our synthetic golf greens are designed for a true-to-life putting experience while offering the low maintenance and durability of artificial turf.
          </p>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl leading-[0.95] font-semibold text-ptw-green text-center tracking-wider uppercase">
            Why Choose Our Golf Greens
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

      {/* Process */}
      <section className="py-24 bg-ptw-cream">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl leading-[0.95] font-semibold text-ptw-green text-center tracking-wider uppercase">
            Our Process
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

      {/* Applications */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl leading-[0.95] font-semibold text-ptw-green text-center tracking-wider uppercase">
            Applications
          </h2>
          <div className="section-divider mt-4 mb-16" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {applications.map((app, idx) => (
              <div key={app} className={`flex items-center gap-3 animate-fade-up delay-${((idx % 5) + 1) * 100}`}>
                <svg className="w-5 h-5 text-ptw-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span className="text-ptw-bark/80">{app}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Result */}
      <section className="py-20 bg-ptw-cream">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-lg leading-relaxed text-ptw-bark/80 animate-fade-up">
            A premium, playable golf green that provides the perfect combination of aesthetics, performance, and convenience — without the time and expense of natural grass maintenance.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl leading-[0.95] font-semibold text-ptw-green text-center tracking-wider uppercase">
            Our Golf Green Projects
          </h2>
          <div className="section-divider mt-4 mb-16" />
          <ImageGallery images={galleryImages} columns={3} />
        </div>
      </section>

    </>
  );
}
