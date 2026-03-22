import PageHero from '@/components/PageHero';
import ImageGallery from '@/components/ImageGallery';


export const metadata = {
  title: 'Artificial Turf Maintenance & Grooming Services - Inland Empire',
  description: 'Professional artificial turf maintenance, grooming, and repair services. Keep your synthetic lawn looking pristine with Precision Turf Works. Pet area sanitizing, infill redistribution, and deep cleaning.',
  alternates: {
    canonical: 'https://precisionturfworks.com/services/maintenance',
  },
};

const practices = [
  {
    title: 'Debris Removal',
    description: 'Clear leaves, twigs, and other debris with a leaf blower, broom, or rake to prevent buildup and maintain a clean surface.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
  },
  {
    title: 'Brushing',
    description: 'Periodically brush the turf fibers with a stiff broom to keep them standing upright and maintain the natural appearance.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
  },
  {
    title: 'Rinsing & Cleaning',
    description: 'Rinse the surface with water to remove dust, pollen, or spills. For pet areas, wash regularly to prevent odors.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z" />
      </svg>
    ),
  },
  {
    title: 'Spot Treatment',
    description: 'Use mild soap and water to address stains; avoid harsh chemicals that can damage the turf.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
  },
  {
    title: 'Infill Care',
    description: 'If your installation uses infill, check periodically to redistribute it and maintain proper fiber support.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-5.1a7.065 7.065 0 010-10l.354-.354a.75.75 0 011.06 0l4.773 4.773a3 3 0 010 4.243L11.42 15.17zm0 0L15.17 11.42a3 3 0 014.243 0l4.773 4.773a.75.75 0 010 1.06l-.354.354a7.065 7.065 0 01-10 0l-5.1-5.1" />
      </svg>
    ),
  },
];

const professionalServices = [
  'Deep-clean and sanitize pet areas',
  'Re-fluff turf fibers and redistribute infill',
  'Inspect drainage and seams',
  'Ensure your turf stays in peak condition year-round',
];

const petTips = [
  'Pick up solid waste promptly.',
  'Rinse frequently to prevent odors and buildup.',
  'Use turf-safe cleaners for spot treatment if necessary.',
];

const galleryImages = [
  '/images/maintenance-equipment-on-turf-01.jpg',
  '/images/maintenance-tools-overhead-view-02.jpg',
  '/images/maintenance-debris-swept-03.jpg',
  '/images/maintenance-collected-debris-dustpan-04.jpg',
  '/images/maintenance-hilltop-yard-dog-05.jpg',
  '/images/maintenance-power-sweeper-fence-06.jpg',
  '/images/maintenance-sweeper-hedge-cleaning-07.jpg',
  '/images/maintenance-leaf-debris-before-08.jpg',
  '/images/maintenance-debris-paver-edge-09.jpg',
];

export default function MaintenancePage() {
  return (
    <>
      <PageHero
        title="Maintenance and Grooming Services"
        subtitle="Keep Your Lawn Looking Its Best"
        image="/images/maintenance-header.jpg"
        breadcrumbs={[
          { name: 'Home', url: 'https://precisionturfworks.com' },
          { name: 'Services', url: 'https://precisionturfworks.com/services' },
          { name: 'Maintenance & Repair', url: 'https://precisionturfworks.com/services/maintenance' },
        ]}
      />

      {/* Intro */}
      <section className="py-20 bg-ptw-cream">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-lg leading-relaxed text-ptw-bark/80 animate-fade-up">
            Artificial turf is designed to provide a beautiful, low-maintenance alternative to natural grass — with a little regular care ensuring it stays lush, safe, and long-lasting. Precision Turf Works offers guidance and services to help you maintain your synthetic lawn for years of enjoyment.
          </p>
        </div>
      </section>

      {/* Why Maintenance Matters */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl leading-[0.95] font-semibold text-ptw-green tracking-wider uppercase">
            Why Maintenance Matters
          </h2>
          <div className="section-divider mt-4 mb-10" />
          <p className="text-lg leading-relaxed text-ptw-bark/80 animate-fade-up">
            Regular upkeep keeps your turf looking fresh, prevents matting, and prolongs the life of your investment. Whether it&apos;s removing debris, keeping fibers upright, or caring for pet areas, the right maintenance keeps your yard safe, attractive, and comfortable.
          </p>
        </div>
      </section>

      {/* Key Maintenance Practices */}
      <section className="py-24 bg-ptw-cream">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl leading-[0.95] font-semibold text-ptw-green text-center tracking-wider uppercase">
            Key Maintenance Practices
          </h2>
          <div className="section-divider mt-4 mb-16" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {practices.map((practice, idx) => (
              <div
                key={practice.title}
                className={`card-lift bg-white rounded-lg p-8 border border-ptw-cream-dark animate-fade-up delay-${((idx % 5) + 1) * 100}`}
              >
                <div className="w-14 h-14 rounded-full bg-ptw-green/10 flex items-center justify-center text-ptw-gold mb-5">
                  {practice.icon}
                </div>
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-ptw-green tracking-wider uppercase mb-3">
                  {practice.title}
                </h3>
                <p className="text-ptw-bark/70 leading-relaxed">
                  {practice.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Services */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl leading-[0.95] font-semibold text-ptw-green text-center tracking-wider uppercase">
            Professional Services
          </h2>
          <div className="section-divider mt-4 mb-10" />
          <p className="text-center text-lg leading-relaxed text-ptw-bark/80 mb-10 animate-fade-up">
            For optimal performance and aesthetics, Precision Turf Works also offers professional maintenance and grooming services. Our team can:
          </p>

          <div className="max-w-xl mx-auto space-y-4">
            {professionalServices.map((service, idx) => (
              <div key={service} className={`flex items-center gap-4 bg-ptw-cream rounded-lg p-5 animate-fade-up delay-${((idx % 5) + 1) * 100}`}>
                <svg className="w-6 h-6 text-ptw-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-5.1a7.065 7.065 0 010-10l.354-.354a.75.75 0 011.06 0l4.773 4.773a3 3 0 010 4.243L11.42 15.17zm0 0L15.17 11.42a3 3 0 014.243 0l4.773 4.773a.75.75 0 010 1.06l-.354.354a7.065 7.065 0 01-10 0l-5.1-5.1" />
                </svg>
                <span className="text-ptw-bark/80">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pet Considerations */}
      <section className="py-24 bg-ptw-cream">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl leading-[0.95] font-semibold text-ptw-green text-center tracking-wider uppercase">
            Pet Considerations
          </h2>
          <div className="section-divider mt-4 mb-10" />

          <div className="max-w-xl mx-auto space-y-4">
            {petTips.map((tip, idx) => (
              <div key={tip} className={`flex items-start gap-4 animate-fade-up delay-${((idx % 5) + 1) * 100}`}>
                <div className="shrink-0 w-8 h-8 rounded-full bg-ptw-gold/20 flex items-center justify-center mt-0.5">
                  <svg className="w-4 h-4 text-ptw-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <span className="text-ptw-bark/80 text-lg leading-relaxed">{tip}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Result */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-lg leading-relaxed text-ptw-bark/80 animate-fade-up">
            With routine care and proper maintenance, your artificial turf will continue to provide a beautiful, safe, and low-maintenance outdoor space for family, pets, and entertaining.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 bg-ptw-cream">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl leading-[0.95] font-semibold text-ptw-green text-center tracking-wider uppercase">
            Our Work
          </h2>
          <div className="section-divider mt-4 mb-16" />
          <ImageGallery images={galleryImages} columns={3} />
        </div>
      </section>

    </>
  );
}
