import PageHero from '@/components/PageHero';

export const metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for Precision Turf Works. Learn how we collect, use, and protect your personal information.',
  alternates: {
    canonical: 'https://precisionturfworks.com/privacy',
  },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        image="/images/grass-bg-plain.jpg"
        breadcrumbs={[
          { name: 'Home', url: 'https://precisionturfworks.com' },
          { name: 'Privacy Policy', url: 'https://precisionturfworks.com/privacy' },
        ]}
      />

      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 sm:p-12 animate-fade-up">
            <p className="text-sm text-gray-500 mb-10">
              Last Updated: January 14, 2026
            </p>

            <div className="space-y-8">
              {/* 1 */}
              <div>
                <h2 className="font-[family-name:var(--font-heading)] text-lg sm:text-xl font-bold text-ptw-green tracking-wider uppercase mb-3">
                  1. Introduction
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Precision Turf Works, Inc. dba Artificial Turf Works
                  (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;)
                  respects your privacy. This Privacy Policy explains how we
                  collect, use, and protect your personal information when you
                  interact with our services, website, and text messaging
                  programs.
                </p>
              </div>

              {/* 2 */}
              <div>
                <h2 className="font-[family-name:var(--font-heading)] text-lg sm:text-xl font-bold text-ptw-green tracking-wider uppercase mb-3">
                  2. Information We Collect
                </h2>
                <p className="text-gray-700 leading-relaxed mb-3">
                  We may collect the following types of information:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed pl-2">
                  <li>
                    <strong>Contact Information:</strong> Name, phone number,
                    email address, mailing address
                  </li>
                  <li>
                    <strong>Communications Data:</strong> Text messages, call
                    logs, opt-in/opt-out status
                  </li>
                  <li>
                    <strong>Usage and Device Information:</strong> IP address,
                    browser type, pages visited
                  </li>
                  <li>
                    <strong>Appointment and Service Data:</strong> Service
                    requests, project details, scheduling information
                  </li>
                </ul>
              </div>

              {/* 3 */}
              <div>
                <h2 className="font-[family-name:var(--font-heading)] text-lg sm:text-xl font-bold text-ptw-green tracking-wider uppercase mb-3">
                  3. How We Use Your Information
                </h2>
                <p className="text-gray-700 leading-relaxed mb-3">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed pl-2">
                  <li>Send service updates and appointment reminders via SMS</li>
                  <li>Respond to inquiries and provide quotes</li>
                  <li>Process and manage customer accounts</li>
                  <li>Improve our services and customer experience</li>
                  <li>Send promotional messages (with your consent)</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>

              {/* 4 */}
              <div>
                <h2 className="font-[family-name:var(--font-heading)] text-lg sm:text-xl font-bold text-ptw-green tracking-wider uppercase mb-3">
                  4. Cookies and Tracking
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Our website may use cookies and similar tracking technologies
                  to improve user experience, analyze traffic, and support
                  marketing efforts. You can manage cookie preferences through
                  your browser settings.
                </p>
              </div>

              {/* 5 */}
              <div>
                <h2 className="font-[family-name:var(--font-heading)] text-lg sm:text-xl font-bold text-ptw-green tracking-wider uppercase mb-3">
                  5. How We Share Your Information
                </h2>
                <p className="text-gray-700 leading-relaxed mb-3">
                  We may share your information in the following circumstances:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed pl-2">
                  <li>
                    <strong>Service Providers:</strong> CRM tools, scheduling
                    platforms, and payment processors that help us operate our
                    business
                  </li>
                  <li>
                    <strong>Legal Requirements:</strong> If required by law or
                    legal process
                  </li>
                  <li>
                    <strong>Business Transfers:</strong> In the event of a
                    merger, acquisition, or sale of assets
                  </li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4 bg-ptw-cream rounded-lg p-4 text-sm">
                  No mobile information will be shared with third
                  parties/affiliates for marketing/promotional purposes. All
                  other categories exclude text messaging originator opt-in data
                  and consent; this information will not be shared with any third
                  parties.
                </p>
              </div>

              {/* 6 */}
              <div>
                <h2 className="font-[family-name:var(--font-heading)] text-lg sm:text-xl font-bold text-ptw-green tracking-wider uppercase mb-3">
                  6. Your Choices
                </h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed pl-2">
                  <li>
                    <strong>SMS:</strong> Text STOP to opt out of text messages
                    at any time
                  </li>
                  <li>
                    <strong>Email:</strong> Use the unsubscribe link included in
                    marketing emails
                  </li>
                  <li>
                    <strong>Access/Correction:</strong> Contact
                    info@precisionturfworks.com to request access to or
                    correction of your personal information
                  </li>
                </ul>
              </div>

              {/* 7 */}
              <div>
                <h2 className="font-[family-name:var(--font-heading)] text-lg sm:text-xl font-bold text-ptw-green tracking-wider uppercase mb-3">
                  7. Data Security
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  We implement reasonable safeguards to protect your personal
                  information from unauthorized access, use, or disclosure.
                  However, no data transmission or storage system is 100% secure.
                </p>
              </div>

              {/* 8 */}
              <div>
                <h2 className="font-[family-name:var(--font-heading)] text-lg sm:text-xl font-bold text-ptw-green tracking-wider uppercase mb-3">
                  8. Children&apos;s Privacy
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Our services are not intended for individuals under 13. We do
                  not knowingly collect personal information from children.
                </p>
              </div>

              {/* 9 */}
              <div>
                <h2 className="font-[family-name:var(--font-heading)] text-lg sm:text-xl font-bold text-ptw-green tracking-wider uppercase mb-3">
                  9. Updates to This Policy
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  We may update this Privacy Policy from time to time. Changes
                  will be posted on our website, and the &ldquo;Last
                  Updated&rdquo; date will be revised accordingly.
                </p>
              </div>

              {/* 10 */}
              <div>
                <h2 className="font-[family-name:var(--font-heading)] text-lg sm:text-xl font-bold text-ptw-green tracking-wider uppercase mb-3">
                  10. Contact Us
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Precision Turf Works, Inc., 202 East Airport Drive, Suite 155,
                  San Bernardino, CA 92408. Phone: 949-439-0177, Email:
                  info@precisionturfworks.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
