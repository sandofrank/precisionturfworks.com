import Image from 'next/image';
import PageHero from '@/components/PageHero';

import HearthCalculator from '@/components/HearthCalculator';

export const metadata = {
  title: 'Turf Installation Financing - Affordable Payment Plans',
  description: 'Affordable financing options for artificial turf installation. Loans up to $250,000 with low monthly payments, quick funding, and no prepayment penalties. Make your dream lawn a reality today.',
  alternates: {
    canonical: 'https://precisionturfworks.com/financing',
  },
};

const features = [
  'Loan amounts up to $250,000',
  'Affordable monthly payment options',
  'Funding within 1-3 days',
  'No prepayment penalties',
  'No home equity required',
];

export default function FinancingPage() {
  return (
    <>
      <PageHero
        title="Financing Options"
        image="/images/residential-header.jpg"
        breadcrumbs={[
          { name: 'Home', url: 'https://precisionturfworks.com' },
          { name: 'Financing', url: 'https://precisionturfworks.com/financing' },
        ]}
      />

      {/* Content */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text + Features */}
            <div className="animate-fade-up">
              <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-ptw-green leading-[0.95] tracking-wider uppercase mb-4">
                Find convenient monthly payment options for your project.
              </h2>
              <div className="section-divider !mx-0 mb-8" />
              <h3 className="text-xl font-semibold text-ptw-deep mb-6">
                See your personalized monthly payment options within minutes and without affecting your credit score.
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Hearth makes it easy for you to find monthly payment options for your project, with:
              </p>

              {/* Feature Cards */}
              <div className="space-y-4">
                {features.map((feature, i) => (
                  <div
                    key={i}
                    className={`flex items-center gap-4 bg-ptw-cream rounded-lg p-4 shadow-sm animate-fade-up delay-${(i + 1) * 100}`}
                  >
                    <div className="shrink-0 w-10 h-10 rounded-full bg-ptw-green flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 text-ptw-gold">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <span className="text-ptw-deep font-semibold text-base sm:text-lg">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Side Image */}
            <div className="animate-fade-up delay-200">
              <div className="rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/images/financing-family7.jpg"
                  alt="Family enjoying their turf yard"
                  width={600}
                  height={700}
                  className="object-cover w-full"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>

          {/* Payment Calculator */}
          <div className="mt-20 animate-fade-up">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-semibold text-ptw-green text-center tracking-wider uppercase leading-[0.95]">
              Payment Calculator
            </h2>
            <div className="section-divider mt-4 mb-10" />
            <p className="text-center text-lg text-gray-700 leading-relaxed mb-10 max-w-2xl mx-auto">
              Estimate your monthly payments below. Check your options in minutes without affecting your credit score.
            </p>
            <div className="max-w-3xl mx-auto">
              <HearthCalculator />
            </div>
          </div>

          {/* Financing Badge */}
          <div className="mt-16 animate-fade-up delay-300">
            <div className="max-w-3xl mx-auto bg-ptw-green rounded-2xl overflow-hidden shadow-xl">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-8 sm:p-10">
                <div className="flex items-center gap-5">
                  <div className="shrink-0 w-14 h-14 rounded-full bg-ptw-gold/20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-ptw-gold">
                      <path d="M12 7.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
                      <path fillRule="evenodd" d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 14.625v-9.75zM8.25 9.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM18.75 9a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V9.75a.75.75 0 00-.75-.75h-.008zM4.5 9.75A.75.75 0 015.25 9h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75V9.75z" clipRule="evenodd" />
                      <path d="M2.25 18a.75.75 0 000 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 00-.75-.75H2.25z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl font-semibold text-white tracking-wider uppercase leading-tight">
                      Financing Available
                    </p>
                    <p className="text-white/70 text-sm sm:text-base mt-1">
                      Low monthly payments &bull; Quick approval &bull; No credit impact to check
                    </p>
                  </div>
                </div>
                <a
                  href="/get-a-quote"
                  className="btn-primary shrink-0"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
