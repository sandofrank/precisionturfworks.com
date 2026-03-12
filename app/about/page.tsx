import Image from 'next/image';
import PageHero from '@/components/PageHero';

import StarRating from '@/components/StarRating';
import { testimonials } from '@/lib/testimonials';

export const metadata = {
  title: 'About Us - Family-Owned Turf Installers',
  description: 'Meet the family behind Precision Turf Works. Licensed & Bonded (C61/D12-1145025) artificial turf installers serving the Inland Empire with quality, integrity, and personalized service.',
  alternates: {
    canonical: 'https://precisionturfworks.com/about',
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Precision Turf Works"
        image="/images/about-header-scaled.jpg"
        breadcrumbs={[
          { name: 'Home', url: 'https://precisionturfworks.com' },
          { name: 'About', url: 'https://precisionturfworks.com/about' },
        ]}
      />

      {/* About Content */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text */}
            <div className="animate-fade-up">
              <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-semibold text-ptw-green leading-[0.95] tracking-wider uppercase mb-4">
                Who We Are
              </h2>
              <div className="section-divider !mx-0 mb-8" />
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                At Precision Turf Works, we bring over a decade of residential and commercial construction expertise to every artificial and synthetic turf project we take on. As a family-owned and operated business, we believe in treating every customer like a neighbor and every property like our own.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our company was founded on a simple but powerful principle: do what we say we will do, every time. That commitment shapes every step of our process — from the first consultation to the final installation. We take pride in delivering exceptional craftsmanship, using premium materials, and providing service you can count on.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                With a strong focus on quality, integrity, and customer satisfaction, we&apos;ve built a reputation for transforming outdoor spaces into beautiful, functional, and low-maintenance landscapes. Whether you&apos;re looking to create a lush backyard, a safe play area, or a professional-grade commercial lawn, Precision Turf Works is here to make it happen — the right way, every time.
              </p>
            </div>

            {/* Photo */}
            <div className="animate-fade-up delay-200">
              <div className="relative">
                {/* Gold border accent */}
                <div className="absolute -top-4 -right-4 w-full h-full border-2 border-ptw-gold rounded-xl" />
                <div className="relative rounded-xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/chris-aboutus1.jpg"
                    alt="Chris from Precision Turf Works"
                    width={600}
                    height={700}
                    className="object-cover w-full"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-ptw-green py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-[0.95] tracking-wider uppercase animate-fade-up">
              What Our Clients Say
            </h2>
            <div className="section-divider mt-6 animate-fade-up delay-100" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {testimonials.map((testimonial, i) => (
              <div
                key={i}
                className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-white/10 animate-fade-up delay-${((i % 6) + 1) * 100}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-ptw-gold mb-4 opacity-80">
                  <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311C9.591 11.69 11 13.19 11 15c0 1.933-1.567 3.5-3.5 3.5-1.14 0-2.22-.508-2.917-1.179zM15.583 17.321C14.553 16.227 14 15 14 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311C20.591 11.69 22 13.19 22 15c0 1.933-1.567 3.5-3.5 3.5-1.14 0-2.22-.508-2.917-1.179z" />
                </svg>
                <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                  {testimonial.text}
                </p>
                <StarRating />
                <p className="text-white/60 text-sm mt-2 font-medium">
                  &mdash; {testimonial.name}{testimonial.location ? `, ${testimonial.location}` : ''}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
