'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FAQSchema, BreadcrumbSchema } from '@/components/StructuredData';

const faqs = [
  {
    question: 'What exactly is artificial turf?',
    answer: 'Think of it as a perfect lawn, every single day — no mud, no weeds, no mowing. Artificial turf is made from premium, UV-stable fibers that look and feel just like real grass, but without the constant upkeep or unpredictable results.',
  },
  {
    question: 'Why choose artificial turf over real grass?',
    answer: 'Natural grass can be beautiful... but it\'s also needy. It demands endless watering, regular mowing, fertilizer, and still turns brown in heat or patchy in shade. With artificial turf, you get: Year-round beauty in any climate. Zero watering, mowing, or chemicals needed. Consistent color and texture — no bare spots. It\'s like having a show-home lawn, without the show-home maintenance.',
  },
  {
    question: 'Is it safe for my pets?',
    answer: 'Absolutely! Pets love synthetic grass — and so will you. No more muddy paws or torn-up patches. Quick-drain technology means urine disappears fast. Easy clean-up with just a quick rinse. 100% lead-free, non-toxic, and gentle on paws. It\'s basically a pet playground that stays perfect year-round.',
  },
  {
    question: 'How much will I save?',
    answer: 'Over the years, turf can pay for itself — and then keep saving you money. You\'ll cut: Water bills (thousands of gallons saved annually). Lawn care service fees. Fertilizer, weed killer, and seed costs. Most homeowners see a return on investment in just 3-5 years, and the savings keep rolling in for a decade or more.',
  },
  {
    question: 'Is it safe and compliant?',
    answer: 'Yes — our turf meets the highest safety standards: Lead-free and free from harmful metals. Fire-retardant for peace of mind. Slip-resistant, perfect for kids\' play areas. We don\'t just promise safety — we certify it.',
  },
  {
    question: 'Does it get hot in the summer?',
    answer: 'Older turf could get warm, but modern turf has heat-resistant fibers and cooling infill that keep the surface up to 30% cooler than traditional products. That means it stays comfortable for feet and paws, even on sunny days.',
  },
  {
    question: 'How long will it last?',
    answer: 'When installed properly, your turf will look lush and vibrant for 15-20 years. No fading. No thinning. No weekend battles with the lawnmower.',
  },
  {
    question: 'Will it handle heavy rain and bad weather?',
    answer: 'Yes — in fact, turf often performs better than real grass: Built-in drainage prevents puddles. Stands up to UV, frost, and heavy traffic. No muddy mess after storms.',
  },
  {
    question: 'Do I still have to maintain it?',
    answer: 'Just a little — but nothing like a real lawn. Brush it occasionally to keep the fibers standing tall. Rinse it when needed. Blow away leaves or debris. Think of it as "light touch" maintenance, not lawn care.',
  },
  {
    question: 'Is it eco-friendly?',
    answer: 'Yes — artificial turf is a green choice in more ways than one: Saves thousands of gallons of water each year. Eliminates toxic pesticides and fertilizers. Reduces emissions from gas mowers. Many products use recycled materials.',
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <>
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://precisionturfworks.com' },
          { name: 'FAQ', url: 'https://precisionturfworks.com/faq' },
        ]}
      />
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[360px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/faq-hero-curved-turf-mountains.jpg"
          alt="Frequently Asked Questions"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl lg:text-7xl leading-[0.95] font-semibold text-white tracking-wider uppercase animate-fade-up">
            Frequently Asked Questions
          </h1>
          <div className="section-divider mt-6 animate-fade-up delay-300" />
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-ptw-deep/80 leading-relaxed">
            Have questions about artificial turf? You&apos;re not alone! Our FAQs cover the most common questions about installation, maintenance, durability, and more — helping you get the answers you need to make the best decision for your space.
          </p>
        </div>
      </section>

      {/* FAQ Accordion + Side Image */}
      <section className="py-16 sm:py-24 px-4 bg-ptw-cream">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Accordion */}
          <div className="lg:col-span-2 space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-ptw-green rounded-xl overflow-hidden shadow-md animate-fade-up"
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center gap-4 px-6 py-5 text-left cursor-pointer"
                >
                  <span className="font-[family-name:var(--font-heading)] text-ptw-gold text-lg font-semibold shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="flex-1 text-white font-semibold text-base sm:text-lg">
                    {faq.question}
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    className={`w-5 h-5 text-ptw-gold shrink-0 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>
                <div className={`accordion-content ${openIndex === i ? 'open' : ''}`}>
                  <div className="accordion-inner">
                    <div className="px-6 pb-5 pt-0 pl-16">
                      <p className="text-white/85 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Side Image */}
          <div className="hidden lg:block">
            <div className="sticky top-24">
              <div className="rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/images/Turf-vs-Real-Grass.jpg"
                  alt="Artificial turf vs real grass comparison"
                  width={500}
                  height={700}
                  className="object-cover w-full"
                  sizes="33vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
