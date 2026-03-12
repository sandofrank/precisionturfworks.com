'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import PageHero from '@/components/PageHero';
import { PRODUCTS, SUPPLIERS, CATEGORIES, type Supplier, type ProductCategory } from '@/lib/products';

const supplierFilters: { key: Supplier | 'all'; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'AGL', label: 'AGL' },
  { key: 'PG', label: 'PG' },
  { key: 'SGW', label: 'SGW' },
];

const categoryFilters: { key: ProductCategory | 'all'; label: string }[] = [
  { key: 'all', label: 'All' },
  ...Object.entries(CATEGORIES).map(([key, label]) => ({
    key: key as ProductCategory,
    label,
  })),
];

const supplierBarColor: Record<Supplier, string> = {
  AGL: 'bg-amber-500',
  PG: 'bg-emerald-600',
  SGW: 'bg-blue-600',
};

const supplierBadgeColor: Record<Supplier, string> = {
  AGL: 'bg-amber-100 text-amber-800',
  PG: 'bg-emerald-100 text-emerald-800',
  SGW: 'bg-blue-100 text-blue-800',
};

const specLabels: Record<string, string> = {
  pileHeight: 'Pile Height',
  faceWeight: 'Face Weight',
  totalWeight: 'Total Weight',
  warranty: 'Warranty',
  rollWidth: 'Roll Width',
  backing: 'Backing',
  fiber: 'Fiber',
  bladeType: 'Blade Type',
  drainage: 'Drainage',
};

const highlightSpecs = ['pileHeight', 'faceWeight', 'warranty'] as const;

export default function ProductsPage() {
  const [activeSupplier, setActiveSupplier] = useState<Supplier | 'all'>('all');
  const [activeCategory, setActiveCategory] = useState<ProductCategory | 'all'>('all');
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    return PRODUCTS.filter((p) => {
      if (activeSupplier !== 'all' && p.supplier !== activeSupplier) return false;
      if (activeCategory !== 'all' && p.category !== activeCategory) return false;
      if (search.trim()) {
        const q = search.toLowerCase();
        return (
          p.name.toLowerCase().includes(q) ||
          p.supplierName.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          (p.collection && p.collection.toLowerCase().includes(q))
        );
      }
      return true;
    });
  }, [activeSupplier, activeCategory, search]);

  return (
    <>
      {/* Hero */}
      <PageHero
        title="Products We Install"
        subtitle="Browse our complete selection of premium artificial turf from our trusted suppliers"
        image="/images/residential-header-turf.jpg"
      />

      {/* Filter Bar */}
      <div className="sticky top-[72px] z-30 bg-white/95 backdrop-blur-sm border-b border-ptw-cream-dark shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 space-y-4">
          {/* Supplier Filter */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-ptw-deep/50 mr-3">
              Supplier
            </span>
            <div className="inline-flex flex-wrap gap-2">
              {supplierFilters.map((f) => (
                <button
                  key={f.key}
                  onClick={() => setActiveSupplier(f.key)}
                  className={`px-4 py-1.5 rounded-full text-sm font-bold tracking-wider uppercase font-[family-name:var(--font-heading)] transition-all duration-300 ${
                    activeSupplier === f.key
                      ? 'bg-ptw-gold text-ptw-deep shadow-md'
                      : 'bg-white text-ptw-deep/70 hover:bg-ptw-gold/20 border border-ptw-green/20'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          {/* Category Filter */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-ptw-deep/50 mr-3">
              Category
            </span>
            <div className="inline-flex flex-wrap gap-2">
              {categoryFilters.map((f) => (
                <button
                  key={f.key}
                  onClick={() => setActiveCategory(f.key)}
                  className={`px-4 py-1.5 rounded-full text-sm font-bold tracking-wider uppercase font-[family-name:var(--font-heading)] transition-all duration-300 ${
                    activeCategory === f.key
                      ? 'bg-ptw-gold text-ptw-deep shadow-md'
                      : 'bg-white text-ptw-deep/70 hover:bg-ptw-gold/20 border border-ptw-green/20'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          {/* Search + Count */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <div className="relative w-full sm:w-80">
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-ptw-deep/40"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="form-input pl-10 !py-2 text-sm rounded-lg"
              />
            </div>
            <p className="text-sm text-ptw-deep/60">
              Showing{' '}
              <span className="font-semibold text-ptw-deep">
                {filtered.length}
              </span>{' '}
              of{' '}
              <span className="font-semibold text-ptw-deep">
                {PRODUCTS.length}
              </span>{' '}
              products
            </p>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <section className="py-12 px-4 bg-ptw-cream">
        <div className="max-w-7xl mx-auto">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-lg text-ptw-deep/60">
                No products match your filters.
              </p>
              <button
                onClick={() => {
                  setActiveSupplier('all');
                  setActiveCategory('all');
                  setSearch('');
                }}
                className="mt-4 text-ptw-gold hover:text-ptw-gold-light font-semibold underline underline-offset-4"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((product) => (
                <div
                  key={product.slug}
                  className="card-lift bg-white rounded-lg overflow-hidden shadow-sm border border-ptw-cream-dark"
                >
                  <div className="p-5">
                    {/* Header row: thumbnail + name/badge */}
                    <div className="flex items-start gap-4 mb-3">
                      {product.image ? (
                        <div className="relative w-[150px] h-[150px] shrink-0 rounded-lg overflow-hidden bg-white">
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-contain"
                            sizes="150px"
                          />
                        </div>
                      ) : (
                        <div className="w-[150px] h-[150px] shrink-0 rounded-lg bg-ptw-cream flex items-center justify-center">
                          <svg className="w-8 h-8 text-ptw-green/20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5a1.5 1.5 0 001.5-1.5V5.25a1.5 1.5 0 00-1.5-1.5H3.75a1.5 1.5 0 00-1.5 1.5v14.25a1.5 1.5 0 001.5 1.5z" />
                          </svg>
                        </div>
                      )}
                      <div className="min-w-0">
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-ptw-deep tracking-wide uppercase leading-tight">
                            {product.name}
                          </h3>
                          <span
                            className={`shrink-0 text-xs font-semibold px-2 py-0.5 rounded-full ${supplierBadgeColor[product.supplier]}`}
                          >
                            {product.supplier}
                          </span>
                        </div>
                        <span className="inline-block text-xs font-medium text-ptw-deep/50 bg-ptw-cream px-2 py-0.5 rounded">
                          {CATEGORIES[product.category]}
                        </span>
                        {product.collection && (
                          <p className="text-xs text-ptw-sage font-medium mt-1">
                            {product.collection}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-ptw-deep/70 leading-relaxed line-clamp-3 mb-4">
                      {product.description}
                    </p>

                    {/* Specs Mini Grid */}
                    {(() => {
                      const visibleSpecs = highlightSpecs.filter(
                        (key) => product.specs[key]
                      );
                      if (visibleSpecs.length === 0) return null;
                      return (
                        <div className="grid grid-cols-3 gap-2 mb-4">
                          {visibleSpecs.map((key) => (
                            <div
                              key={key}
                              className="bg-ptw-cream/70 rounded px-2 py-1.5 text-center"
                            >
                              <p className="text-[10px] uppercase tracking-wider text-ptw-deep/40 font-semibold">
                                {specLabels[key]}
                              </p>
                              <p className="text-sm font-semibold text-ptw-deep mt-0.5">
                                {product.specs[key]}
                              </p>
                            </div>
                          ))}
                        </div>
                      );
                    })()}

                    {/* Features */}
                    {product.features && product.features.length > 0 && (
                      <div className="flex flex-wrap gap-1.5">
                        {product.features.map((feature) => (
                          <span
                            key={feature}
                            className="text-[11px] font-medium bg-ptw-sage/10 text-ptw-sage px-2 py-0.5 rounded-full"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Supplier Info Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-semibold text-ptw-deep tracking-wider uppercase text-center mb-4">
            Our Trusted Suppliers
          </h2>
          <p className="text-center text-ptw-deep/60 max-w-2xl mx-auto mb-10">
            As an authorized dealer for all three suppliers, we have access to
            the full product catalog at competitive pricing. We help you choose
            the right turf for your project.
          </p>
          <div className="section-divider mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(Object.entries(SUPPLIERS) as [Supplier, (typeof SUPPLIERS)[Supplier]][]).map(
              ([key, supplier]) => (
                <div
                  key={key}
                  className="card-lift bg-ptw-cream rounded-lg overflow-hidden border border-ptw-cream-dark"
                >
                  <div className={`h-1.5 ${supplierBarColor[key]}`} />
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span
                        className={`text-xs font-bold px-2.5 py-1 rounded-full ${supplierBadgeColor[key]}`}
                      >
                        {key}
                      </span>
                      <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-ptw-deep tracking-wide uppercase">
                        {supplier.name}
                      </h3>
                    </div>
                    <p className="text-sm text-ptw-deep/70 leading-relaxed">
                      {supplier.description}
                    </p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

    </>
  );
}
