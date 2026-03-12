import PageHero from '@/components/PageHero';

import ContactForm from '@/components/ContactForm';
import { COMPANY } from '@/lib/constants';

export const metadata = {
  title: 'Contact Us - Get in Touch',
  description: 'Contact Precision Turf Works for artificial turf installation in the Inland Empire. Call, email, or visit us in Highland, CA. Free consultations and estimates available.',
  alternates: {
    canonical: 'https://precisionturfworks.com/contact',
  },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact"
        subtitle="Get in Touch"
        image="/images/contact-header.jpg"
        breadcrumbs={[
          { name: 'Home', url: 'https://precisionturfworks.com' },
          { name: 'Contact', url: 'https://precisionturfworks.com/contact' },
        ]}
      />

      {/* Intro */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-semibold text-ptw-green leading-[0.95] tracking-wider uppercase mb-4">
              We&apos;re Here to Help
            </h2>
            <div className="section-divider mt-4 mb-8" />
            <p className="text-lg text-gray-700 leading-relaxed">
              Have questions or ready to start your turf project? We&apos;re
              here to help. Reach out today to learn more about our products,
              request a quote, or schedule a consultation. Our team is committed
              to providing quick, friendly, and professional service — let&apos;s
              bring your vision to life.
            </p>
          </div>

          {/* Three Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-20">
            {/* Phone */}
            <div className="bg-ptw-cream rounded-xl p-8 text-center animate-fade-up">
              <div className="w-14 h-14 bg-ptw-green rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-ptw-gold">
                  <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-ptw-green tracking-wider uppercase mb-2">
                Call Us
              </h3>
              <a
                href={COMPANY.phoneHref}
                className="text-gray-700 hover:text-ptw-green transition-colors font-medium"
              >
                {COMPANY.phone}
              </a>
            </div>

            {/* Email */}
            <div className="bg-ptw-cream rounded-xl p-8 text-center animate-fade-up delay-100">
              <div className="w-14 h-14 bg-ptw-green rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-ptw-gold">
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
              </div>
              <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-ptw-green tracking-wider uppercase mb-2">
                Email Us
              </h3>
              <a
                href={`mailto:${COMPANY.email}`}
                className="text-gray-700 hover:text-ptw-green transition-colors font-medium"
              >
                {COMPANY.email}
              </a>
            </div>

            {/* Location */}
            <div className="bg-ptw-cream rounded-xl p-8 text-center animate-fade-up delay-200">
              <div className="w-14 h-14 bg-ptw-green rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-ptw-gold">
                  <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-ptw-green tracking-wider uppercase mb-2">
                Visit Us
              </h3>
              <p className="text-gray-700 font-medium">{COMPANY.fullAddress}</p>
            </div>
          </div>

          {/* Form + Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div className="animate-fade-up">
              <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-semibold text-ptw-green leading-[0.95] tracking-wider uppercase mb-4">
                Send Us a Message
              </h2>
              <div className="section-divider !mx-0 mb-8" />
              <ContactForm />
            </div>

            {/* Google Maps */}
            <div className="animate-fade-up delay-200">
              <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-semibold text-ptw-green leading-[0.95] tracking-wider uppercase mb-4">
                Our Location
              </h2>
              <div className="section-divider !mx-0 mb-8" />
              <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200">
                <iframe
                  title="Precision Turf Works Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8133.571545226443!2d-117.28629512370823!3d34.06771101691241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcac91be0d962b%3A0x13e65ce5f9bef7dd!2s202%20E%20Airport%20Dr%2C%20San%20Bernardino%2C%20CA%2092408!5e1!3m2!1sen!2sus!4v1767211338137!5m2!1sen!2sus"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                />
              </div>
              <p className="text-sm text-gray-500 mt-3 text-center">
                {COMPANY.fullAddress}
              </p>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
