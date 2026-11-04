# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static marketing website for Rouelle Consulting, a custom business application development consultancy based in Lyon, France. The site targets SMEs (10-100 employees) in the Auvergne-Rhône-Alpes region, specializing in Transport/Logistics, Construction/BTP, Consulting Firms, and Real Estate sectors.

## Technology Stack

- **Astro** (static output, no server runtime) - see `astro.config.mjs`
- **Font**: Inter from Google Fonts
- No UI framework (React/Vue/etc.) is used — pages are plain `.astro` files

## File Structure

- `src/pages/*.astro` - One file per route (homepage, service pages, articles, mentions légales). Astro maps each file to a URL by filename.
- `src/layouts/BaseLayout.astro` - Shared `<head>` (meta/OG/Twitter/canonical/Umami), `<Header>`, `<Footer>`, and a `head` slot for page-specific JSON-LD. Every page wraps its content in this layout.
- `src/components/Header.astro`, `src/components/Footer.astro` - Shared nav and footer, extracted out of what used to be duplicated across every page.
- `src/styles/global.css` - Complete styling with CSS custom properties (variables); imported once in `BaseLayout.astro`.
- `public/` - Static assets served as-is: `assets/` (logos, favicon), `og-image.jpg`, `robots.txt`, `script.js` (mobile nav toggle).
- `astro.config.mjs` - `build.format: 'file'` keeps flat `page.html` URLs (not `page/index.html`) to preserve existing SEO/backlinks; `@astrojs/sitemap` generates `sitemap-index.xml`/`sitemap-0.xml` at build time with a `serialize()` hook that restores the `.html` extension and the per-page `priority`/`changefreq` values.

## Development Workflow

This is now an Astro project with a build step:

1. **Install**: `npm install`
2. **Local Development**: `npm run dev` (serves at `localhost:4321`) — note the dev server serves clean URLs without `.html`; only the production build (`npm run build`) honors `build.format: 'file'` and produces real `page.html` files in `dist/`.
3. **Preview the real build**: `npm run build && npm run preview` to check the exact `.html` URLs that will be deployed.
4. **Deployment**: GitHub Pages via `.github/workflows/deploy.yml`. This workflow still needs updating to run `npm run build` and publish `dist/` instead of the repo root — until then, do not rely on it to deploy the Astro output.

## Key Architecture Patterns

### CSS Organization
The stylesheet follows a clear section-based structure:
1. Reset & Base styles (lines 1-80)
2. Typography (lines 81-113)
3. Buttons (lines 114-183)
4. Navigation (lines 184-246)
5. Component-specific sections (Hero, Problems, Solution, Sectors, Method, FAQ, Footer)
6. Responsive overrides at the bottom (lines 918-1019)

All colors, fonts, spacing, and effects are defined as CSS custom properties in `:root` (lines 11-41) for easy theming.

### JavaScript Functionality
- **Mobile Navigation**: Hamburger menu toggle (lines 2-17 in script.js)
- **Smooth Scroll**: Anchor link navigation with offset for fixed nav (lines 19-33)
- **Scroll Animations**: Intersection Observer for fade-in effects (lines 36-56)
- **Sticky Nav Effects**: Shadow appears on scroll (lines 58-66)

### HTML Structure
- **SEO Optimized**: title/description/canonical/OG/Twitter meta are props passed to `BaseLayout` from each page; Schema.org JSON-LD is page-specific and passed via the layout's `head` slot (`<Fragment slot="head">`)
- **Section-based**: Each major content block is a semantic `<section>` with ID for anchor navigation
- **Accessibility**: Semantic HTML, proper heading hierarchy

## Design System

### Colors (from CSS variables)
- Primary: `#2563EB` (blue)
- Secondary: `#10B981` (green)
- Accent: `#F59E0B` (orange)
- Text hierarchy: primary, secondary, muted
- Backgrounds: primary (white), secondary (`#F8FAFC`), tertiary (`#F1F5F9`)

### Responsive Breakpoints
- Mobile: `max-width: 768px`
- Small Mobile: `max-width: 480px`

### Key UI Patterns
- **Cards**: Problem cards, sector cards, testimonial cards use consistent hover effects (translateY + shadow)
- **Buttons**: Primary (gradient), secondary (outlined), with consistent hover states
- **Badges/Tags**: Rounded pill shapes with subtle backgrounds

## Content Updates

Content now lives per-route in `src/pages/*.astro` instead of one monolithic `index.html`. Homepage sections (hero, process steps, articles grid, etc.) are in `src/pages/index.astro`; each service/article page is its own file with its own JSON-LD defined as a plain object in the file's frontmatter.

### SEO-Critical Elements
- `title`/`description`/`canonicalPath`/`ogType` props on `<BaseLayout>` in each page
- Schema.org JSON-LD: an object in the page's frontmatter, serialized via `set:html={JSON.stringify(...)}` in the `head` slot
- `astro.config.mjs`: sitemap `serialize()` hook (URL `.html` suffix + priority/changefreq) — update the `sitemapMeta` map there when adding or re-prioritizing a page

## Deployment Notes

- Build step required: `npm run build` (see Development Workflow above)
- Ensure all referenced assets exist (favicons, og-image.jpg) in `public/`
- Verify all external links (LinkedIn, email addresses)
- Test on mobile devices for responsive behavior
- Validate Schema.org markup using Google's Rich Results Test

## Browser Compatibility

Uses modern CSS features:
- CSS Grid and Flexbox
- CSS Custom Properties (variables)
- backdrop-filter (navigation blur effect)
- Intersection Observer API

Should work in all modern browsers (Chrome, Firefox, Safari, Edge). IE11 not supported.
