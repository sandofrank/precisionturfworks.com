# Precision Turf Works

Public marketing website for **Precision Turf Works**, a family-owned artificial-turf installer serving Highland, Redlands, San Bernardino, Riverside, and the Inland Empire (CA). Services covered include residential and commercial turf, putting greens, and turf maintenance/repair.

Built with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS 4. Companion to the internal `precisionturfworksresource` hub.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Project structure

- `app/` — App Router pages and metadata routes
  - Top-level pages: home, `about`, `contact`, `faq`, `financing`, `gallery`, `portfolio`, `products`, `get-a-quote`, `privacy`, `terms`
  - `services/` — `residential`, `commercial`, `putting-greens`, `maintenance`
  - `service-areas/` — index plus a dynamic `[city]` route generated from `lib/cities.ts`
  - `robots.ts`, `sitemap.ts` — generated SEO routes
  - `layout.tsx`, `globals.css` — root layout and global styles
- `components/` — shared UI (Navigation, Footer, forms, image gallery, CTAs, structured data, etc.)
- `lib/` — typed content and configuration:
  - `constants.ts` — company info, contact details, license, and navigation links
  - `cities.ts` — service-area data and slug helpers
  - `products.ts` — turf product catalog and suppliers (AGL, PG, SGW)
  - `testimonials.ts` — customer reviews
- `public/images/` — site imagery

## Conventions

- Company contact info, license, and navigation live in `lib/constants.ts` — edit there, not inline in pages.
- Service areas, products, and testimonials are data-driven from `lib/`. Adding a city to `CITIES` automatically generates its page and sitemap entry.
- Pages export Next.js `metadata`; JSON-LD structured data is rendered via `components/StructuredData.tsx`. Keep `sitemap.ts` updated when adding routes.
- Contact and quote forms submit via the user's email client (`mailto:`); there is no backend API. Financing uses an embedded Hearth widget.
- Styling uses the `--color-ptw-*` brand tokens and Teko/Outfit fonts defined in `app/globals.css`.

## Deployment

Deployed as a standard Next.js application. Run `npm run build` to produce the production build.
