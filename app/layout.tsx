import type { Metadata, Viewport } from 'next';
import { Teko, Outfit } from 'next/font/google';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import FloatingCTA from '@/components/FloatingCTA';
import { LocalBusinessSchema } from '@/components/StructuredData';
import './globals.css';

const teko = Teko({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#0d1f0d',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://precisionturfworks.com'),
  title: {
    default: 'Precision Turf Works | Artificial Turf Installation - Inland Empire, CA',
    template: '%s | Precision Turf Works',
  },
  description: 'Family-owned artificial turf installer serving Highland, Redlands, San Bernardino, Riverside, and the Inland Empire. Premium residential & commercial turf installation, putting greens, pet turf, and maintenance. Licensed & Bonded C61/D12-1145025. Free estimates.',
  keywords: ['artificial turf installation', 'synthetic grass', 'turf installer near me', 'Inland Empire turf', 'Highland CA artificial turf', 'Redlands turf installation', 'San Bernardino synthetic grass', 'putting green installation', 'commercial turf', 'residential artificial turf', 'pet friendly turf', 'turf maintenance', 'Riverside County turf'],
  openGraph: {
    title: 'Precision Turf Works | Artificial Turf Experts - Inland Empire',
    description: 'Premium artificial turf installation for homes and businesses. Residential lawns, commercial landscapes, putting greens, and pet areas. Serving the Inland Empire with quality, integrity, and service.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Precision Turf Works',
    url: 'https://precisionturfworks.com',
    images: [
      {
        url: '/images/home-header-turf.jpg',
        width: 1200,
        height: 630,
        alt: 'Precision Turf Works - Artificial Turf Installation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Precision Turf Works | Artificial Turf Experts',
    description: 'Premium artificial turf installation for the Inland Empire. Residential, commercial, putting greens & more.',
    images: ['/images/home-header-turf.jpg'],
  },
  alternates: {
    canonical: 'https://precisionturfworks.com',
  },
  verification: {},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${teko.variable} ${outfit.variable}`}>
      <body className="turf-texture">
        <LocalBusinessSchema />
        <Navigation />
        <main>{children}</main>
        <Footer />
        <FloatingCTA />
        <CookieConsent />
      </body>
    </html>
  );
}
