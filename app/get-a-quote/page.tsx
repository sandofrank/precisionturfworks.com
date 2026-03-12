import PageHero from '@/components/PageHero';

import QuoteForm from '@/components/QuoteForm';
import { COMPANY } from '@/lib/constants';

export const metadata = {
  title: 'Get a Free Quote - Artificial Turf Installation Estimate',
  description: 'Request a free, no-obligation quote for artificial turf installation. Residential lawns, commercial landscapes, putting greens, and more. Serving the entire Inland Empire.',
  alternates: {
    canonical: 'https://precisionturfworks.com/get-a-quote',
  },
};

export default function GetAQuotePage() {
  return (
    <>
      <PageHero
        title="Get a Quote"
        image="/images/contact-header.jpg"
        breadcrumbs={[
          { name: 'Home', url: 'https://precisionturfworks.com' },
          { name: 'Get a Quote', url: 'https://precisionturfworks.com/get-a-quote' },
        ]}
      />

      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left — Intro + Contact Card */}
            <div className="animate-fade-up">
              <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-semibold text-ptw-green leading-[0.95] tracking-wider uppercase mb-4">
                Request Your Free Estimate
              </h2>
              <div className="section-divider !mx-0 mb-8" />
              <p className="text-lg text-gray-700 leading-relaxed mb-10">
                Ready to transform your space with premium artificial turf?
                Request a free, no-obligation quote today. Simply share a few
                details about your project, and our team will provide a
                customized estimate tailored to your needs. Let&apos;s make your
                vision a reality — beautiful, durable turf is just a click away.
              </p>

              {/* Contact Info Card */}
              <div className="bg-ptw-green rounded-xl p-8 text-white space-y-5">
                <h3 className="font-[family-name:var(--font-heading)] text-2xl font-semibold tracking-wider uppercase">
                  Contact Information
                </h3>

                {/* Address */}
                <div className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-ptw-gold shrink-0 mt-0.5">
                    <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                  </svg>
                  <span className="text-white/90">{COMPANY.fullAddress}</span>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-ptw-gold shrink-0">
                    <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                  </svg>
                  <a href={COMPANY.phoneHref} className="text-white/90 hover:text-ptw-gold transition-colors">
                    {COMPANY.phone}
                  </a>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-ptw-gold shrink-0">
                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                  </svg>
                  <a href={`mailto:${COMPANY.email}`} className="text-white/90 hover:text-ptw-gold transition-colors">
                    {COMPANY.email}
                  </a>
                </div>

                {/* License */}
                <div className="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-ptw-gold shrink-0">
                    <path fillRule="evenodd" d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516 11.209 11.209 0 01-7.877-3.08z" clipRule="evenodd" />
                  </svg>
                  <span className="text-white/90">License: {COMPANY.license}</span>
                </div>
              </div>
            </div>

            {/* Right — Quote Form */}
            <div className="animate-fade-up delay-200">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
