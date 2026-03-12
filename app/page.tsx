import Image from 'next/image';
import Link from 'next/link';


const whyChooseUs = [
  {
    title: 'Family-Owned & Operated',
    description: 'We treat every customer like a neighbor and every lawn like our own.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955a1.126 1.126 0 011.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
  },
  {
    title: 'Over 10 Years of Experience',
    description: 'Skilled in both residential and commercial construction.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Quality You Can See',
    description: 'We use premium turf products designed to look great and stand the test of time.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'Integrity & Service',
    description: 'We keep our promises and deliver on time.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3.15M10.05 4.575a1.575 1.575 0 113.15 0v3.15M10.05 4.575v3.15M3.75 12h16.5M3.75 12a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25h16.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25M3.75 12l2.846-7.614A2.25 2.25 0 018.694 3h6.612a2.25 2.25 0 012.098 1.386L20.25 12" />
      </svg>
    ),
  },
  {
    title: 'Customized Solutions',
    description: 'Every yard and project is unique, and we tailor our installations to fit your vision and needs.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875S10.5 3.09 10.5 4.125c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.959.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z" />
      </svg>
    ),
  },
  {
    title: 'Trusted by the Community',
    description: 'Proudly serving Highland, Redlands, San Bernardino, Yucaipa, Loma Linda, and the greater Inland Empire with reliable results.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
];

const services = [
  {
    title: 'Commercial Artificial Turf',
    image: '/images/commercial-icon2.jpg',
    link: '/services/commercial',
    description: 'Professional, durable turf for offices, retail, and public spaces.',
  },
  {
    title: 'Residential Artificial Turf',
    image: '/images/residential-icon2.jpg',
    link: '/services/residential',
    description: 'Create a low-maintenance lawn that looks beautiful year-round.',
  },
  {
    title: 'Pet-Friendly Artificial Turf',
    image: '/images/pet-icon.jpg',
    link: '/services/residential',
    description: 'Safe, odor-resistant turf for dogs and other pets.',
  },
  {
    title: 'Golf Greens Artificial Turf',
    image: '/images/putting-golf.jpg',
    link: '/services/putting-greens',
    description: 'Custom-designed greens for your backyard or business.',
  },
  {
    title: 'Playground Artificial Turf',
    image: '/images/playground-turf.jpg',
    link: '/services/residential',
    description: 'Soft, safe, and durable play areas for kids.',
  },
  {
    title: 'Maintenance and Grooming',
    image: '/images/maintenance-icon2.jpg',
    link: '/services/maintenance',
    description: 'Refresh your lawn with expert service.',
  },
];

import { testimonials } from '@/lib/testimonials';
import StarRating from '@/components/StarRating';

export default function Home() {
  return (
    <>
      {/* ========== HERO ========== */}
      <section className="relative min-h-screen flex items-center justify-center">
        <Image
          src="/images/home-header-turf.jpg"
          alt="Beautiful artificial turf installation by Precision Turf Works"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-semibold text-white tracking-wider uppercase leading-[0.95] animate-fade-up">
            Artificial Turf Experts Serving the Inland Empire
          </h1>
          <p className="font-[family-name:var(--font-heading)] text-xl sm:text-2xl md:text-3xl text-ptw-gold-light tracking-[0.2em] uppercase mt-6 animate-fade-up delay-200">
            Precision in Every Blade.
          </p>
        </div>
      </section>

      {/* ========== WELCOME ========== */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-semibold text-ptw-green tracking-wider uppercase leading-[0.95] animate-fade-up">
            Welcome to Precision Turf Works
          </h2>
          <div className="section-divider mt-6 mb-8 animate-fade-up delay-100" />
          <p className="text-lg leading-relaxed text-gray-700 animate-fade-up delay-200">
            Precision Turf Works is your trusted, family-owned artificial turf installer serving Highland, Redlands, San Bernardino, Yucaipa, Loma Linda, and surrounding Inland Empire communities. With over 10 years of residential and commercial construction experience, we deliver premium synthetic grass solutions for lawns, playgrounds, putting greens, and pet areas. We focus on quality, integrity, and service — doing what we say we will, every time.
          </p>
        </div>
      </section>

      {/* ========== WHY CHOOSE US ========== */}
      <section className="bg-ptw-cream py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-semibold text-ptw-green tracking-wider uppercase leading-[0.95] animate-fade-up">
              Why Choose Us
            </h2>
            <div className="section-divider mt-6 animate-fade-up delay-100" />
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {whyChooseUs.map((item, i) => (
              <div
                key={item.title}
                className={`card-lift bg-white rounded-xl p-6 sm:p-8 text-center shadow-sm animate-fade-up delay-${(i + 1) * 100}`}
              >
                <div className="text-ptw-gold mb-4 flex justify-center">
                  {item.icon}
                </div>
                <h3 className="font-[family-name:var(--font-heading)] text-lg sm:text-xl font-semibold text-ptw-gold tracking-wide uppercase mb-3">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SERVICES ========== */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <Image
          src="/images/bg-services.jpg"
          alt="Artificial turf services background"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-wider uppercase leading-[0.95] animate-fade-up">
              Our Services
            </h2>
            <div className="section-divider mt-6 animate-fade-up delay-100" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, i) => (
              <Link
                key={service.title}
                href={service.link}
                className={`group card-lift bg-white rounded-xl overflow-hidden shadow-lg animate-fade-up delay-${(i + 1) * 100}`}
              >
                <div className="img-zoom aspect-[4/3] relative">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-[family-name:var(--font-heading)] text-lg sm:text-xl font-semibold text-ptw-green tracking-wide uppercase mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-ptw-gold group-hover:gap-2 transition-all">
                    Learn More
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ========== WORK PREVIEW ========== */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-semibold text-ptw-green tracking-wider uppercase leading-[0.95] animate-fade-up">
              Our Work
            </h2>
            <div className="section-divider mt-6 mb-8 animate-fade-up delay-100" />
            <p className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed animate-fade-up delay-200">
              See the difference our premium artificial turf makes. From stunning residential backyards to professional commercial spaces, our projects highlight the beauty, durability, and craftsmanship we bring to every installation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-12">
            <Link href="/gallery" className="group relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg animate-fade-up delay-300">
              <Image
                src="/images/putting-golf3.jpg"
                alt="Putting green installation by Precision Turf Works"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-ptw-deep/40 group-hover:bg-ptw-deep/60 transition-colors duration-300 flex items-center justify-center">
                <span className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl font-semibold text-white tracking-wider uppercase">
                  View Gallery
                </span>
              </div>
            </Link>
            <Link href="/portfolio" className="group relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg animate-fade-up delay-400">
              <Image
                src="/images/showcase-luxury-turf-courtyard.jpg"
                alt="Residential turf installation by Precision Turf Works"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-ptw-deep/40 group-hover:bg-ptw-deep/60 transition-colors duration-300 flex items-center justify-center">
                <span className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl font-semibold text-white tracking-wider uppercase">
                  Before &amp; Afters
                </span>
              </div>
            </Link>
          </div>
          <div className="flex justify-center mt-12 animate-fade-up delay-500">
            <Link href="/gallery" className="btn-primary">
              View Our Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* ========== TESTIMONIALS ========== */}
      <section className="bg-ptw-green py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-wider uppercase leading-[0.95] animate-fade-up">
              What Our Clients Say
            </h2>
            <div className="section-divider mt-6 animate-fade-up delay-100" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
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

      {/* ========== FINANCING BANNER ========== */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="relative bg-gradient-to-br from-ptw-green to-ptw-sage rounded-2xl overflow-hidden p-8 sm:p-12 lg:p-16">
            <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
              <svg viewBox="0 0 200 200" className="w-full h-full" fill="currentColor">
                <text x="50%" y="50%" textAnchor="middle" dominantBaseline="central" fontSize="120" className="text-ptw-gold">$</text>
              </svg>
            </div>
            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-1 text-center lg:text-left">
                <span className="inline-block px-4 py-1.5 bg-ptw-gold/20 text-ptw-gold text-sm font-bold tracking-widest uppercase rounded-full mb-4 font-[family-name:var(--font-heading)]">
                  Financing Available
                </span>
                <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-wider uppercase leading-[0.95] mb-4">
                  Affordable Monthly Payments
                </h2>
                <p className="text-white/80 text-lg leading-relaxed max-w-xl">
                  Get your dream turf project started today with convenient financing options. Loans up to $250,000 with no prepayment penalties. See your options in minutes — without affecting your credit score.
                </p>
              </div>
              <div className="flex-shrink-0">
                <Link href="/financing" className="btn-primary text-base px-8 py-4">
                  View Financing Options
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
