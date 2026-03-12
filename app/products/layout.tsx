import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Products We Install',
  description:
    'Browse our complete selection of premium artificial turf products from Artificial Grass Liquidators, Purchase Green, and Synthetic Grass Warehouse. Authorized dealer serving the Inland Empire.',
  alternates: {
    canonical: 'https://precisionturfworks.com/products',
  },
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
