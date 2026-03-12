import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Project Gallery - Artificial Turf Installation Photos',
  description: 'Browse our gallery of completed artificial turf installations. Residential lawns, commercial properties, putting greens, and maintenance projects across the Inland Empire.',
  alternates: {
    canonical: 'https://precisionturfworks.com/gallery',
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
