import Link from 'next/link';

export default function FloatingCTA() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-2.5">
      <Link
        href="/get-a-quote"
        className="group flex items-center gap-2.5 bg-gradient-to-r from-ptw-gold to-amber-500 hover:from-amber-500 hover:to-ptw-gold text-ptw-deep font-bold text-sm tracking-wider uppercase px-5 py-3 rounded-full shadow-lg shadow-amber-900/30 transition-all duration-200 hover:shadow-xl hover:shadow-amber-900/40 hover:-translate-y-0.5 whitespace-nowrap"
      >
        <svg className="w-5 h-5 flex-shrink-0 transition-transform duration-200 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        Get a Quote
      </Link>
      <Link
        href="/financing"
        className="group flex items-center gap-2.5 bg-gradient-to-r from-emerald-600 to-green-500 hover:from-green-500 hover:to-emerald-600 text-white font-semibold text-xs tracking-wider uppercase px-5 py-2.5 rounded-full shadow-lg shadow-green-900/30 transition-all duration-200 hover:shadow-xl hover:shadow-green-900/40 hover:-translate-y-0.5 whitespace-nowrap"
      >
        <svg className="w-4 h-4 flex-shrink-0 transition-transform duration-200 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        Financing Available
      </Link>
    </div>
  );
}
