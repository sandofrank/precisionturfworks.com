'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { COMPANY, NAV_LINKS } from '@/lib/constants';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-ptw-deep/98 shadow-lg shadow-black/20 backdrop-blur-sm'
            : 'bg-ptw-deep/90'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/images/PTW.logo_.horizontal.png"
                alt={COMPANY.name}
                width={220}
                height={40}
                className="h-10 w-auto brightness-0 invert"
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) =>
                link.children ? (
                  <div
                    key={link.label}
                    className="relative group"
                    onMouseEnter={() => setOpenDropdown(link.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button className="px-4 py-2 text-base font-medium text-white/80 hover:text-ptw-gold transition-colors font-[family-name:var(--font-heading)] tracking-wider uppercase">
                      {link.label}
                      <svg className="inline-block ml-1 w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div
                      className={`absolute top-full left-0 mt-0 w-56 bg-ptw-deep border border-ptw-green/30 shadow-xl transition-all duration-200 ${
                        openDropdown === link.label ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
                      }`}
                    >
                      <div className="py-2">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-5 py-3 text-sm text-white/70 hover:text-ptw-gold hover:bg-ptw-green/20 transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="px-4 py-2 text-base font-medium text-white/80 hover:text-ptw-gold transition-colors font-[family-name:var(--font-heading)] tracking-wider uppercase"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-white p-2"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        <div className="gold-stripe" />
      </nav>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="fixed inset-0 bg-black/60" onClick={() => setIsOpen(false)} />
          <div className="fixed top-0 right-0 w-80 h-full bg-ptw-deep shadow-2xl overflow-y-auto animate-slide-left">
            <div className="pt-24 px-6 pb-8">
              {NAV_LINKS.map((link) =>
                link.children ? (
                  <div key={link.label} className="mb-2">
                    <p className="px-3 py-3 text-xs font-bold text-ptw-gold tracking-widest uppercase font-[family-name:var(--font-heading)]">
                      {link.label}
                    </p>
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setIsOpen(false)}
                        className="block px-6 py-2.5 text-white/70 hover:text-ptw-gold transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-3 text-white/80 hover:text-ptw-gold transition-colors font-medium"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
