import Link from 'next/link';
import Image from 'next/image';

interface CTAButton {
  label: string;
  href: string;
  primary?: boolean;
}

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  bgImage?: string;
  buttons?: CTAButton[];
}

const defaultButtons: CTAButton[] = [
  { label: 'Get a Quote', href: '/get-a-quote', primary: true },
];

export default function CTASection({
  title = "Let's Get Your Project Started",
  subtitle = 'Get the ball rolling on your new landscaping. Request a Quote today.',
  bgImage = '/images/footer2.jpg',
  buttons = defaultButtons,
}: CTASectionProps) {
  return (
    <section className="relative py-24 overflow-hidden">
      <Image
        src={bgImage}
        alt=""
        fill
        loading="lazy"
        className="object-cover"
        sizes="100vw"
      />
      <div className="hero-overlay absolute inset-0" />
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-wider uppercase leading-[0.95]">
          {title}
        </h2>
        <p className="mt-4 text-lg text-white/80">{subtitle}</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          {buttons.map((btn) => (
            <Link
              key={btn.href}
              href={btn.href}
              className={btn.primary ? 'btn-primary' : 'btn-outline'}
            >
              {btn.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
