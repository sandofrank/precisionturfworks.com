'use client';

import { useEffect, useRef, useState } from 'react';

export default function HearthCalculator() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Remove any existing script to avoid duplicates
    const existing = document.getElementById('hearth-script');
    if (existing) existing.remove();

    // Create iframe first (Hearth script looks for it by ID)
    const iframe = document.createElement('iframe');
    iframe.id = 'hearth-widget_calculator_v1';
    iframe.title = 'Financing Calculator';
    iframe.style.width = '100%';
    iframe.style.minHeight = '400px';
    iframe.style.border = 'none';
    container.appendChild(iframe);

    // Then inject the script
    const script = document.createElement('script');
    script.src = 'https://widget.gethearth.com/script.js';
    script.id = 'hearth-script';
    script.setAttribute('data-orgid', '57384');
    script.setAttribute('data-partner', 'precision-turf-works');
    script.async = true;
    container.appendChild(script);

    // Check if widget loaded content after a delay
    const timer = setTimeout(() => {
      try {
        const iframeEl = document.getElementById('hearth-widget_calculator_v1') as HTMLIFrameElement | null;
        if (iframeEl && iframeEl.src && iframeEl.src !== 'about:blank' && iframeEl.src !== '') {
          setLoaded(true);
        }
      } catch {
        // cross-origin access blocked = widget loaded successfully
        setLoaded(true);
      }
    }, 3000);

    return () => {
      clearTimeout(timer);
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
      const s = document.getElementById('hearth-script');
      if (s) s.remove();
    };
  }, []);

  return (
    <div className="relative w-full">
      <div ref={containerRef} className="w-full" />
      {!loaded && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-ptw-cream rounded-xl border border-ptw-gold/20 p-10 text-center">
          <div className="w-16 h-16 rounded-full bg-ptw-green/10 flex items-center justify-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-ptw-green">
              <path d="M12 7.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
              <path fillRule="evenodd" d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 14.625v-9.75zM8.25 9.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM18.75 9a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V9.75a.75.75 0 00-.75-.75h-.008zM4.5 9.75A.75.75 0 015.25 9h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75V9.75z" clipRule="evenodd" />
              <path d="M2.25 18a.75.75 0 000 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 00-.75-.75H2.25z" />
            </svg>
          </div>
          <p className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-ptw-green tracking-wider uppercase mb-2">
            Payment Calculator
          </p>
          <p className="text-gray-600 mb-6 max-w-md">
            Check your personalized financing options in minutes — no impact to your credit score.
          </p>
          <a
            href="https://www.gethearth.com/financing/57384?utm_campaign=57384&utm_content=calculator&utm_medium=contractor-website&utm_source=precision-turf-works"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Check Your Payment Options
          </a>
        </div>
      )}
    </div>
  );
}
