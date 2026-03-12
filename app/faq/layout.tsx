import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ - Artificial Turf Questions Answered',
  description: 'Get answers to common questions about artificial turf installation, cost, maintenance, pet safety, durability, and more. Expert answers from Precision Turf Works.',
  alternates: {
    canonical: 'https://precisionturfworks.com/faq',
  },
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
