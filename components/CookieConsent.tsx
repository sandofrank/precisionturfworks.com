'use client';

import { useSyncExternalStore } from 'react';
import Link from 'next/link';

function getConsentSnapshot() {
  return localStorage.getItem('cookie-consent');
}

function getServerSnapshot() {
  return 'accepted'; // SSR: assume accepted to avoid flash
}

function subscribe(callback: () => void) {
  window.addEventListener('storage', callback);
  return () => window.removeEventListener('storage', callback);
}

export default function CookieConsent() {
  const consent = useSyncExternalStore(subscribe, getConsentSnapshot, getServerSnapshot);

  function accept() {
    localStorage.setItem('cookie-consent', 'accepted');
    window.dispatchEvent(new Event('storage'));
  }

  if (consent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6">
      <div className="max-w-4xl mx-auto bg-ptw-deep border border-white/10 rounded-xl shadow-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="text-white/80 text-sm leading-relaxed flex-1">
          We use cookies to improve your experience on our site. By continuing to browse, you agree to our{' '}
          <Link href="/privacy" className="text-ptw-gold hover:text-ptw-gold-light underline">
            Privacy Policy
          </Link>.
        </p>
        <button
          onClick={accept}
          className="btn-primary text-sm py-2.5 px-6 shrink-0"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
