import { COMPANY } from '@/lib/constants';
import { CITIES } from '@/lib/cities';

const SITE_URL = 'https://precisionturfworks.com';

const localBusinessData = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${SITE_URL}/#organization`,
  name: COMPANY.name,
  legalName: COMPANY.legalName,
  alternateName: COMPANY.dba,
  description:
    'Family-owned artificial turf installer serving Highland, Redlands, San Bernardino, and the Inland Empire. Premium residential and commercial turf installation, putting greens, and maintenance. Licensed & Bonded C61/D12-1145025.',
  url: SITE_URL,
  telephone: COMPANY.phone,
  email: COMPANY.email,
  image: `${SITE_URL}/images/PTW.logo_.horizontal.png`,
  logo: `${SITE_URL}/images/PTW.logo_.horizontal.png`,
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: `${COMPANY.address.street}, ${COMPANY.address.suite}`,
    addressLocality: COMPANY.address.city,
    addressRegion: COMPANY.address.state,
    postalCode: COMPANY.address.zip,
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 34.1083,
    longitude: -117.2898,
  },
  areaServed: CITIES.map((city) => ({
    '@type': 'City',
    name: city.name,
    containedInPlace: {
      '@type': 'AdministrativeArea',
      name: city.county,
    },
  })),
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Artificial Turf Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Residential Turf Installation',
          url: `${SITE_URL}/services/residential`,
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Commercial Turf Installation',
          url: `${SITE_URL}/services/commercial`,
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Putting Green Installation',
          url: `${SITE_URL}/services/putting-greens`,
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Maintenance & Repair',
          url: `${SITE_URL}/services/maintenance`,
        },
      },
    ],
  },
  sameAs: [
    COMPANY.social.facebook,
    COMPANY.social.instagram,
  ],
};

export function LocalBusinessSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessData) }}
    />
  );
}

export function FAQSchema({
  faqs,
}: {
  faqs: { question: string; answer: string }[];
}) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function ServiceSchema({
  name,
  description,
}: {
  name: string;
  description: string;
}) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'LocalBusiness',
      '@id': `${SITE_URL}/#organization`,
      name: COMPANY.name,
    },
    areaServed: CITIES.map((city) => ({
      '@type': 'City',
      name: city.name,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function BreadcrumbSchema({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
