import PageHero from '@/components/PageHero';
import ImageGallery from '@/components/ImageGallery';


export const metadata = {
  title: 'Commercial Artificial Turf Installation - Businesses & Properties',
  description: 'Commercial-grade artificial turf installation for businesses, HOAs, apartment complexes, schools, and public spaces in the Inland Empire. Durable, low-maintenance landscapes that impress. Licensed & Bonded.',
  alternates: {
    canonical: 'https://precisionturfworks.com/services/commercial',
  },
};

const benefits = [
  {
    title: 'Low Maintenance',
    description: 'No mowing, watering, or fertilizing — saving time and reducing upkeep costs.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Durable & Long-Lasting',
    description: 'Designed to withstand heavy foot traffic, vehicles, and the elements without fading or wearing down.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: 'Safe & Functional',
    description: 'Ideal for playgrounds, pet areas, walkways, outdoor seating, or sports and recreational facilities.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286z" />
      </svg>
    ),
  },
  {
    title: 'Cost-Effective',
    description: 'Reduces ongoing landscaping expenses while providing a consistently polished, professional look.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Sustainable Solution',
    description: 'Conserves water and reduces the use of chemicals, aligning with environmentally conscious practices.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
];

const steps = [
  {
    title: 'Consultation & Planning',
    description: 'We evaluate your property, discuss your business needs, and develop a customized turf solution.',
  },
  {
    title: 'Professional Installation',
    description: 'Proper grading, drainage, and precise turf placement ensure a seamless, durable surface.',
  },
  {
    title: 'Finishing Touches',
    description: 'Infill, brushing, and final adjustments create a safe, visually appealing space ready for use.',
  },
  {
    title: 'Ongoing Support',
    description: 'Guidance on cleaning and maintenance to keep your commercial turf looking its best for years.',
  },
];

const applications = [
  'Commercial office and corporate campuses',
  'Hotels, resorts, and casinos',
  'Retail centers and shopping plazas',
  'Sports fields, gyms, and recreational facilities',
  'Playgrounds, daycare centers, and pet areas',
];

const galleryImages = [
  '/images/commercial-building-turf-lawn-01.jpg',
  '/images/commercial-courtyard-drainage-palms-02.jpg',
  '/images/commercial-glass-facade-turf-03.jpg',
  '/images/commercial-courtyard-wide-view-04.jpg',
  '/images/commercial-turf-concrete-steps-05.jpg',
  '/images/commercial-turf-closeup-ground-level-06.jpg',
  '/images/commercial-apartment-courtyard-pool-07.jpg',
  '/images/commercial-apartment-elevated-view-08.jpg',
  '/images/commercial-apartment-topiary-pools-09.jpg',
  '/images/commercial-apartment-side-yard-10.jpg',
  '/images/commercial-apartment-iron-fence-trees-11.jpg',
  '/images/commercial-bocce-courts-park-11.jpg',
  '/images/commercial-bocce-courts-all-lanes-12.jpg',
  '/images/commercial-bocce-court-single-lane-13.jpg',
  '/images/commercial-bocce-turf-closeup-14.jpg',
  '/images/commercial-bocce-courts-wide-angle-15.jpg',
];

export default function CommercialPage() {
  return (
    <>
      <PageHero
        title="Commercial Artificial Turf"
        subtitle="Smart, Durable, and Attractive Solutions for Your Business"
        image="/images/commercial-header.jpg"
        breadcrumbs={[
          { name: 'Home', url: 'https://precisionturfworks.com' },
          { name: 'Services', url: 'https://precisionturfworks.com/services' },
          { name: 'Commercial', url: 'https://precisionturfworks.com/services/commercial' },
        ]}
      />

      {/* Intro */}
      <section className="py-20 bg-ptw-cream">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-lg leading-relaxed text-ptw-bark/80 animate-fade-up">
            Artificial turf isn&apos;t just for homes — it&apos;s a cost-effective, low-maintenance solution for commercial properties of all kinds. At Precision Turf Works, we provide premium synthetic grass installations that enhance curb appeal, create functional spaces, and reduce maintenance costs for businesses.
          </p>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl leading-[0.95] font-semibold text-ptw-green text-center tracking-wider uppercase">
            Why Choose Commercial Turf
          </h2>
          <div className="section-divider mt-4 mb-16" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <div
                key={benefit.title}
                className={`card-lift bg-ptw-cream rounded-lg p-8 border border-ptw-cream-dark animate-fade-up delay-${(idx + 1) * 100}`}
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

      {/* Installation Process */}
      <section className="py-24 bg-ptw-cream">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl leading-[0.95] font-semibold text-ptw-green text-center tracking-wider uppercase">
            Installation Process
          </h2>
          <div className="section-divider mt-4 mb-16" />

          <div className="space-y-12">
            {steps.map((step, idx) => (
              <div key={step.title} className={`flex gap-6 items-start animate-fade-up delay-${(idx + 1) * 100}`}>
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
              <div key={app} className={`flex items-center gap-3 animate-fade-up delay-${(idx + 1) * 100}`}>
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
            A commercial property that looks immaculate year-round, functions efficiently, and impresses clients, customers, and employees — all while reducing maintenance costs.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl leading-[0.95] font-semibold text-ptw-green text-center tracking-wider uppercase">
            Our Commercial Projects
          </h2>
          <div className="section-divider mt-4 mb-16" />
          <ImageGallery images={galleryImages} columns={4} />
        </div>
      </section>

    </>
  );
}
