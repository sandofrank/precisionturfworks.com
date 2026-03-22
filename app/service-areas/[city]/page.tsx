import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { CITIES, getCityBySlug, getAllCitySlugs } from '@/lib/cities';
import { FAQSchema, BreadcrumbSchema } from '@/components/StructuredData';


export function generateStaticParams() {
  return getAllCitySlugs().map((city) => ({ city }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city: slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) return {};
  return {
    title: `Artificial Turf Installation in ${city.name}, CA`,
    description: `${city.intro.slice(0, 120).trimEnd()}... Serving ${city.name} and ${city.nearbyAreas}. Residential & commercial turf, putting greens. Licensed & Bonded.`,
    alternates: {
      canonical: `https://precisionturfworks.com/service-areas/${slug}`,
    },
  };
}

const services = [
  {
    title: 'Residential Turf',
    href: '/services/residential',
    description: 'Lush, green lawns for your home that stay beautiful year-round without watering or mowing.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955a1.126 1.126 0 011.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
  },
  {
    title: 'Commercial Turf',
    href: '/services/commercial',
    description: 'Durable, professional-grade turf for offices, retail spaces, and public areas.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
  },
  {
    title: 'Putting Greens',
    href: '/services/putting-greens',
    description: 'Custom-designed golf greens for your backyard or commercial property.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5" />
      </svg>
    ),
  },
  {
    title: 'Maintenance & Repair',
    href: '/services/maintenance',
    description: 'Professional grooming and repair services to keep your turf looking its best.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z" />
      </svg>
    ),
  },
];

const benefits = [
  'No watering, mowing, or fertilizing',
  'Safe for children and pets',
  'Lasts 15-20 years with minimal upkeep',
  'Saves thousands on water bills',
  'Eco-friendly — no chemicals or gas mowers',
  'Increases property value and curb appeal',
];

function getCityFAQs(cityName: string) {
  return [
    {
      question: `How much does artificial turf installation cost in ${cityName}?`,
      answer: `The cost of artificial turf installation in ${cityName} varies based on the size of the area, turf product selected, and site preparation needed. Most residential projects range from $8–$15 per square foot installed. Contact us for a free, no-obligation quote tailored to your specific project.`,
    },
    {
      question: `How long does artificial turf last in ${cityName}'s climate?`,
      answer: `Premium artificial turf installed by Precision Turf Works typically lasts 15–20 years in ${cityName}'s climate. The Inland Empire's warm, dry weather is actually ideal for synthetic turf — no freeze-thaw cycles or excessive moisture to worry about.`,
    },
    {
      question: `Is artificial turf safe for pets and children in ${cityName}?`,
      answer: `Absolutely. All of our turf products are non-toxic, lead-free, and designed with safety in mind. Pet turf options feature enhanced drainage for easy cleanup, and our playground turf meets ASTM safety standards for fall protection.`,
    },
    {
      question: `Do you offer free estimates in ${cityName}?`,
      answer: `Yes! We provide free on-site estimates throughout ${cityName} and the surrounding Inland Empire area. Our team will assess your space, discuss your goals, and provide a detailed quote — no pressure, no obligation.`,
    },
    {
      question: `Does artificial turf help with water conservation in ${cityName}?`,
      answer: `Yes — switching to artificial turf can save the average ${cityName} homeowner 30,000–50,000 gallons of water per year. Many local water districts also offer rebates for replacing natural grass with synthetic turf, which can offset a portion of your installation cost.`,
    },
  ];
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city: slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) notFound();

  const otherCities = CITIES.filter((c) => c.slug !== slug).slice(0, 8);
  const faqs = getCityFAQs(city.name);

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://precisionturfworks.com' },
          { name: 'Service Areas', url: 'https://precisionturfworks.com/service-areas' },
          { name: city.name, url: `https://precisionturfworks.com/service-areas/${slug}` },
        ]}
      />
      <FAQSchema faqs={faqs} />
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[360px] flex items-center justify-center overflow-hidden">
        <Image
          src={city.heroImage}
          alt={`Artificial turf installation in ${city.name}`}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <p className="font-[family-name:var(--font-heading)] text-lg sm:text-xl text-ptw-gold tracking-[0.2em] uppercase mb-4 animate-fade-up">
            Serving {city.name}, CA
          </p>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl lg:text-7xl font-semibold text-white tracking-wider uppercase animate-fade-up delay-100 leading-[0.95]">
            Artificial Turf Installation in {city.name}
          </h1>
          <div className="section-divider mt-6 animate-fade-up delay-300" />
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="animate-fade-up">
              <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-semibold text-ptw-green tracking-wider uppercase leading-[0.95] mb-4">
                Premium Turf for {city.name} Homes &amp; Businesses
              </h2>
              <div className="section-divider !mx-0 mb-8" />
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {city.intro}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                {city.whyTurf}
              </p>
            </div>
            <div className="animate-fade-up delay-200">
              <div className="relative">
                <div className="absolute -top-4 -right-4 w-full h-full border-2 border-ptw-gold rounded-xl" />
                <div className="relative rounded-xl overflow-hidden shadow-xl">
                  <Image
                    src={city.contentImage}
                    alt={`Turf installation project near ${city.name}`}
                    width={600}
                    height={450}
                    className="object-cover w-full"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Focus */}
      <section className="bg-ptw-cream py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-semibold text-ptw-green tracking-wider uppercase leading-[0.95] mb-4 animate-fade-up">
            Your Local {city.name} Turf Experts
          </h2>
          <div className="section-divider mt-4 mb-8 animate-fade-up delay-100" />
          <p className="text-lg text-gray-700 leading-relaxed animate-fade-up delay-200">
            {city.localFocus}
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-semibold text-ptw-green tracking-wider uppercase leading-[0.95] text-center mb-4 animate-fade-up">
            Why {city.name} Homeowners Choose Artificial Turf
          </h2>
          <div className="section-divider mt-4 mb-16 animate-fade-up delay-100" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => (
              <div
                key={benefit}
                className={`flex items-center gap-4 bg-ptw-cream rounded-xl p-6 shadow-sm animate-fade-up delay-${((i % 5) + 1) * 100}`}
              >
                <div className="shrink-0 w-10 h-10 rounded-full bg-ptw-green flex items-center justify-center">
                  <svg className="w-5 h-5 text-ptw-gold" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <span className="text-ptw-deep font-semibold">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
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
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-wider uppercase leading-[0.95] text-center mb-4 animate-fade-up">
            Our Services in {city.name}
          </h2>
          <div className="section-divider mt-4 mb-16 animate-fade-up delay-100" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service, i) => (
              <Link
                key={service.title}
                href={service.href}
                className={`group card-lift bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:bg-white/20 transition-colors animate-fade-up delay-${((i % 5) + 1) * 100}`}
              >
                <div className="text-ptw-gold mb-4">
                  {service.icon}
                </div>
                <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-white tracking-wider uppercase mb-3">
                  {service.title}
                </h3>
                <p className="text-white/80 leading-relaxed mb-4">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-ptw-gold group-hover:gap-2 transition-all">
                  Learn More
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-semibold text-ptw-green tracking-wider uppercase leading-[0.95] text-center mb-4 animate-fade-up">
            Frequently Asked Questions
          </h2>
          <div className="section-divider mt-4 mb-12 animate-fade-up delay-100" />
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`bg-ptw-cream rounded-xl p-6 sm:p-8 animate-fade-up delay-${((i % 5) + 1) * 100}`}
              >
                <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-ptw-deep tracking-wide uppercase mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <Image
          src={city.heroImage}
          alt={`Get a quote for turf installation in ${city.name}`}
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-wider uppercase leading-[0.95] mb-4 animate-fade-up">
            Ready to Transform Your {city.name} Property?
          </h2>
          <div className="section-divider mt-4 mb-8 animate-fade-up delay-100" />
          <p className="text-lg text-white/90 leading-relaxed mb-8 animate-fade-up delay-200">
            Get a free, no-obligation estimate for your artificial turf project. Our team serves {city.name} and {city.nearbyAreas}.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up delay-300">
            <Link href="/get-a-quote" className="btn-primary">
              Get a Free Quote
            </Link>
            <Link href="/gallery" className="btn-outline">
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* Nearby Service Areas */}
      <section className="bg-ptw-cream py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-semibold text-ptw-green tracking-wider uppercase leading-[0.95] text-center mb-4 animate-fade-up">
            Other Service Areas
          </h2>
          <div className="section-divider mt-4 mb-12 animate-fade-up delay-100" />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {otherCities.map((c) => (
              <Link
                key={c.slug}
                href={`/service-areas/${c.slug}`}
                className="card-lift bg-white rounded-xl p-5 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="font-[family-name:var(--font-heading)] text-lg font-semibold text-ptw-green tracking-wider uppercase">
                  {c.name}
                </span>
                <p className="text-sm text-gray-500 mt-1">{c.county}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/service-areas" className="btn-outline-dark">
              View All Service Areas
            </Link>
          </div>
        </div>
      </section>

    </>
  );
}
