import Link from 'next/link';
import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';

import { CITIES } from '@/lib/cities';

export const metadata: Metadata = {
  title: 'Service Areas - Artificial Turf Installation Across the Inland Empire',
  description:
    'Precision Turf Works serves the Inland Empire, Coachella Valley, and surrounding communities. Artificial turf installation in Redlands, Highland, Riverside, Palm Springs, Temecula, and 15+ cities.',
  alternates: {
    canonical: 'https://precisionturfworks.com/service-areas',
  },
};

const sanBernardinoCounty = CITIES.filter((c) => c.county === 'San Bernardino County');
const riversideCounty = CITIES.filter((c) => c.county === 'Riverside County');

export default function ServiceAreasPage() {
  return (
    <>
      <PageHero
        title="Service Areas"
        subtitle="Proudly Serving the Inland Empire and Beyond"
        image="/images/commercial-header.jpg"
        breadcrumbs={[
          { name: 'Home', url: 'https://precisionturfworks.com' },
          { name: 'Service Areas', url: 'https://precisionturfworks.com/service-areas' },
        ]}
      />

      {/* Intro */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-semibold text-ptw-green tracking-wider uppercase leading-[0.95] mb-4 animate-fade-up">
            Where We Work
          </h2>
          <div className="section-divider mt-4 mb-8 animate-fade-up delay-100" />
          <p className="text-lg text-gray-700 leading-relaxed animate-fade-up delay-200">
            Precision Turf Works is proud to serve communities throughout the Inland Empire,
            Coachella Valley, and surrounding areas. From residential lawns and commercial
            landscapes to custom putting greens and turf maintenance, we bring the same
            commitment to quality and craftsmanship to every city we serve.
          </p>
        </div>
      </section>

      {/* San Bernardino County */}
      <section className="bg-ptw-cream py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-semibold text-ptw-green tracking-wider uppercase leading-[0.95] text-center mb-4 animate-fade-up">
            San Bernardino County
          </h2>
          <div className="section-divider mt-4 mb-12 animate-fade-up delay-100" />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
            {sanBernardinoCounty.map((city) => (
              <Link
                key={city.slug}
                href={`/service-areas/${city.slug}`}
                className="card-lift bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="font-[family-name:var(--font-heading)] text-xl font-semibold text-ptw-green tracking-wider uppercase">
                  {city.name}
                </span>
                <p className="text-sm text-gray-500 mt-2">View Details</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Riverside County */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-semibold text-ptw-green tracking-wider uppercase leading-[0.95] text-center mb-4 animate-fade-up">
            Riverside County
          </h2>
          <div className="section-divider mt-4 mb-12 animate-fade-up delay-100" />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
            {riversideCounty.map((city) => (
              <Link
                key={city.slug}
                href={`/service-areas/${city.slug}`}
                className="card-lift bg-ptw-cream rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="font-[family-name:var(--font-heading)] text-xl font-semibold text-ptw-green tracking-wider uppercase">
                  {city.name}
                </span>
                <p className="text-sm text-gray-500 mt-2">View Details</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Note */}
      <section className="bg-ptw-green py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-semibold text-white tracking-wider uppercase leading-[0.95] mb-4 animate-fade-up">
            Don&apos;t See Your City?
          </h2>
          <p className="text-lg text-white/80 leading-relaxed mb-8 animate-fade-up delay-100">
            We serve many additional communities throughout Southern California.
            Contact us to find out if we can bring premium artificial turf to your area.
          </p>
        </div>
      </section>
    </>
  );
}
