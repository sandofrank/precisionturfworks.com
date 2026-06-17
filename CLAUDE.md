# CLAUDE.md

Public marketing website for **Precision Turf Works**, a family-owned artificial-turf installer serving Highland, Redlands, San Bernardino, Riverside, and the wider Inland Empire (CA). Paired with the separate `precisionturfworksresource` internal hub.

## Tech stack

- **Next.js 16** (App Router) — `next@^16.2.9`
- **React 19** — `react@19.2.3` / `react-dom@19.2.3`
- **TypeScript 5.9** — strict mode, `@/*` path alias to repo root
- **Tailwind CSS 4** — via `@tailwindcss/postcss`; theme defined inline in `app/globals.css` (`@theme` block with `--color-ptw-*` brand tokens)
- **Fonts:** Teko (headings) and Outfit (body) via `next/font/google`
- **ESLint 9** — flat config (`eslint.config.mjs`) extending `core-web-vitals` + `typescript`

No test framework, database, or backend is present. Forms submit via `mailto:` links (no server-side API). Financing uses a third-party Hearth widget.

## Common commands

```bash
npm run dev      # start dev server (http://localhost:3000)
npm run build    # production build
npm run start    # serve the production build
npm run lint     # eslint
```

## Project structure

- `app/` — App Router pages, layout, and metadata routes
  - `layout.tsx` — root layout; wires Navigation, Footer, FloatingCTA, CookieConsent, LocalBusinessSchema; sets site-wide SEO metadata
  - `page.tsx` — home page
  - `about/`, `contact/`, `faq/`, `financing/`, `gallery/`, `portfolio/`, `products/`, `get-a-quote/`, `privacy/`, `terms/`
  - `services/` — `residential/`, `commercial/`, `putting-greens/`, `maintenance/`
  - `service-areas/` — index page plus dynamic `[city]/page.tsx` (statically generated from `lib/cities.ts` via `generateStaticParams`)
  - `robots.ts`, `sitemap.ts` — metadata routes (sitemap enumerates static pages + every city slug)
  - `globals.css`, `icon.svg`, `apple-icon.png`
- `components/` — shared UI: `Navigation`, `Footer`, `PageHero`, `CTASection`, `FloatingCTA`, `CookieConsent`, `ContactForm`, `QuoteForm`, `ImageGallery`, `StarRating`, `HearthCalculator`, `StructuredData`
- `lib/` — typed data and constants:
  - `constants.ts` — `COMPANY` (name, phone, email, address, license `C61/D12-1145025`, socials) and `NAV_LINKS`
  - `cities.ts` — `CITIES[]` (service-area copy) plus `getCityBySlug` / `getAllCitySlugs` helpers
  - `products.ts` — `Product`/`Supplier` types, `SUPPLIERS` (AGL, PG, SGW), and the product catalog
  - `testimonials.ts` — customer reviews
- `public/images/` — site imagery
- `Archive/` — old/unused files (git-ignored, eslint-ignored)
- `next.config.ts` — AVIF/WebP image formats, `poweredByHeader: false`

## Conventions

- **Single source of truth for business facts:** company info, phone, email, address, and license live in `lib/constants.ts` (`COMPANY`). Navigation lives in `NAV_LINKS`. Edit data there, not inline in pages.
- **Content as typed data:** service-area pages, products, and testimonials are driven by the arrays in `lib/`. Add a city by appending to `CITIES` (it auto-generates a static route and a sitemap entry).
- **SEO is first-class:** pages export Next `metadata`/`generateMetadata`; structured data (LocalBusiness, FAQ, Service, Breadcrumb) is rendered via `components/StructuredData.tsx`. Keep `sitemap.ts` in sync when adding routes.
- **Forms are mailto-based:** `ContactForm` and `QuoteForm` open the user's mail client to `COMPANY.email` — there is no API endpoint to wire up.
- **Brand styling:** use the `--color-ptw-*` tokens and the `--font-heading` / `--font-body` variables defined in `globals.css`.
- **`*.md` files are git-ignored** (see `.gitignore`); `README.md` is the one tracked exception. This `CLAUDE.md` is intentionally local-only — it will not be committed.
