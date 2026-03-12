import PageHero from '@/components/PageHero';

export const metadata = {
  title: 'Terms and Conditions',
  description: 'Terms and conditions for Precision Turf Works services, financing programs, and website usage.',
  alternates: {
    canonical: 'https://precisionturfworks.com/terms',
  },
};

const sections = [
  {
    title: 'Program Description',
    content:
      'Precision Turf Works, Inc. offers text messaging communication to keep customers informed about services, appointments, and promotions. By opting in, you agree to receive text messages from us.',
  },
  {
    title: 'Consent to Receive Messages',
    content:
      'By providing your phone number and opting in, you consent to receive text messages from Precision Turf Works. Message and data rates may apply. Your consent is not a condition of purchase.',
  },
  {
    title: 'Opt Out',
    content:
      'You can stop receiving text messages at any time by texting STOP to 949-439-0177. After opting out, you will receive a confirmation message, and no further texts will be sent unless you opt back in.',
  },
  {
    title: 'Opt In Again',
    content:
      'If you\u2019ve opted out and wish to receive messages again, text START to 949-439-0177.',
  },
  {
    title: 'Help and Support',
    content:
      'If you need assistance, text HELP to 949-439-0177, or contact us directly at info@precisionturfworks.com or 949-439-0177.',
  },
  {
    title: 'Message Frequency',
    content:
      'You may receive up to 1\u20134 messages per month from Precision Turf Works. Message frequency may vary depending on your interactions with us.',
  },
  {
    title: 'Carrier Disclaimer',
    content:
      'Precision Turf Works is not responsible for any delays or failures in message delivery caused by your carrier, network issues, or technical problems.',
  },
  {
    title: 'Privacy',
    content:
      'We respect your privacy. Please refer to our Privacy Policy for details on how we handle your personal information.',
  },
  {
    title: 'Changes to Terms',
    content:
      'We reserve the right to update these Terms and Conditions at any time. Changes will take effect immediately upon posting.',
  },
  {
    title: 'Contact Us',
    content:
      'Precision Turf Works, Inc., 202 East Airport Drive, Suite 155, San Bernardino, CA 92408. Phone: 949-439-0177, Email: info@precisionturfworks.com',
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHero
        title="Terms and Conditions"
        image="/images/grass-bg-plain.jpg"
        breadcrumbs={[
          { name: 'Home', url: 'https://precisionturfworks.com' },
          { name: 'Terms and Conditions', url: 'https://precisionturfworks.com/terms' },
        ]}
      />

      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 sm:p-12 animate-fade-up">
            <p className="text-sm text-gray-500 mb-10">
              Last Updated: January 14, 2026
            </p>

            <div className="space-y-8">
              {sections.map((section, i) => (
                <div key={i}>
                  <h2 className="font-[family-name:var(--font-heading)] text-lg sm:text-xl font-semibold text-ptw-green tracking-wider uppercase mb-3">
                    {i + 1}. {section.title}
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
