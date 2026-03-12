import Image from 'next/image';
import { BreadcrumbSchema } from '@/components/StructuredData';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  image: string;
  breadcrumbs?: { name: string; url: string }[];
}

export default function PageHero({ title, subtitle, image, breadcrumbs }: PageHeroProps) {
  return (
    <>
      {breadcrumbs && <BreadcrumbSchema items={breadcrumbs} />}
      <section className="relative h-[50vh] min-h-[360px] flex items-center justify-center overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl lg:text-7xl font-semibold text-white tracking-wider uppercase animate-fade-up leading-[0.95]">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 text-lg sm:text-xl text-white/80 animate-fade-up delay-200">
              {subtitle}
            </p>
          )}
          <div className="section-divider mt-6 animate-fade-up delay-300" />
        </div>
      </section>
    </>
  );
}
