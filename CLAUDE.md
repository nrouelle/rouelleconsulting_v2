# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static marketing website for Rouelle Consulting, a custom business application development consultancy based in Lyon, France. The site targets SMEs (10-100 employees) in the Auvergne-Rhône-Alpes region, specializing in Transport/Logistics, Construction/BTP, Consulting Firms, and Real Estate sectors.

## Technology Stack

- **Pure HTML/CSS/JavaScript** - No build tools or frameworks
- **Font**: Inter from Google Fonts
- **PWA Support**: manifest.json for progressive web app capabilities

## File Structure

- `index.html` - Single-page marketing site with all content
- `style.css` - Complete styling with CSS custom properties (variables)
- `script.js` - Client-side interactions (mobile nav, smooth scroll, animations)
- `manifest.json` - PWA configuration

## Development Workflow

Since this is a static site with no build process:

1. **Local Development**: Open `index.html` directly in a browser, or use a simple HTTP server
2. **Testing**: Refresh browser to see changes
3. **Deployment**: Upload files directly to web hosting

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
- **SEO Optimized**: Comprehensive meta tags (lines 8-43), Schema.org structured data (lines 54-151)
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

### Frequently Updated Sections
- **Hero Stats** (lines 207-220): Update metrics as needed
- **Sector Cards** (lines 358-417): Add/modify industry-specific offerings
- **FAQ Section** (lines 550-607): Schema.org markup for rich snippets
- **Contact CTAs**: Calendly link (line 626), email (lines 633, 700), phone (line 661)

### SEO-Critical Elements
- Title tag (line 9)
- Meta description (lines 10-11)
- Schema.org JSON-LD (lines 54-151)
- Canonical URL (line 15)
- Open Graph tags (lines 17-25)

## Deployment Notes

- No build step required
- Ensure all referenced assets exist (favicons, og-image.jpg, icons for PWA)
- Verify all external links (Calendly, LinkedIn, email addresses)
- Test on mobile devices for responsive behavior
- Validate Schema.org markup using Google's Rich Results Test

## Browser Compatibility

Uses modern CSS features:
- CSS Grid and Flexbox
- CSS Custom Properties (variables)
- backdrop-filter (navigation blur effect)
- Intersection Observer API

Should work in all modern browsers (Chrome, Firefox, Safari, Edge). IE11 not supported.
