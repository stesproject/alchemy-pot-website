---
title: "Pizzeria 5 Archi Website"
description: "How I built an ultra-light, editorial web experience for Pizzeria 5 Archi using Astro, TypeScript, and modern web standards."
downloadUrl:
  - label: "Website"
    url: "https://pizzeria5archi.it"
featured: false
date: "09/23/2026"
---

# Case Study: Crafting a Blazing-Fast Web Presence for Pizzeria 5 Archi

When designing a website for a local restaurant, the goal is simple: **get hungry customers to the information they need—fast—while capturing the soul and warmth of the dining room.**

Here is the story behind the new website for **[Pizzeria 5 Archi](https://pizzeria5archi.it)**, and how I built an ultra-light, editorial web experience using **Astro**, **TypeScript**, and modern web standards.

---

### A Slice of Vasto: About Pizzeria 5 Archi

Tucked away in the historic coastal town of **Vasto (Abruzzo, Italy)**, **Pizzeria 5 Archi** is an authentic, craft pizzeria built on a few straightforward principles: patience, respect for ingredients, and genuine conviviality. 

Unlike industrial pizza places, everything here revolves around the craft:
- **48-hour dough fermentation** for airy, easily digestible crusts.
- A roaring **wood-fired oven** cooking pizzas in 90 seconds.
- Exceptional **local Abruzzese ingredients**, from artisanal *ventricina vastese* and *caciocavallo* to local extra-virgin olive oil and San Marzano tomatoes.

Their physical experience is warm, rustic, and welcoming. The challenge was translating that tactile craftsmanship onto the web without the sluggishness and clutter common to restaurant sites.

---

### The Goal & The Problem with Modern Restaurant Sites

Too many restaurant websites fall into the same traps:
1. Massive, uncompressed food photos causing 5-second load times on mobile.
2. Clunky PDF menus that are impossible to read on a phone.
3. Heavy JavaScript frameworks shipping megabytes of client runtime just to render static text and opening hours.

For **Pizzeria 5 Archi**, the site needed to be **mobile-first, instant to load, accessible, and optimized for local search**—making it effortless for guests to browse the menu and call directly for a table or takeaway (*asporto*).

---

### How I Built It: Architecture & Tech Stack

To ensure unmatched performance and zero maintenance overhead, I chose a static-first architecture:

#### 1. Zero-JS by Default with Astro 7
I built the site using **[Astro](https://astro.build)**. Because 99% of a restaurant's content is informational, Astro's Islands architecture is the perfect fit:
- **Zero client-side JavaScript** framework runtime shipped to the browser.
- Pure static HTML and CSS generated at build time.
- Smooth scroll and subtle reveal animations powered by a lightweight native `IntersectionObserver` that respects `prefers-reduced-motion`.

#### 2. Editorial Typography & Warm Visual Identity
Instead of a generic template look, the design uses a bespoke warm palette:
- **Color tokens**: Cream backgrounds (`#fcf9f5`), deep charcoal text, and ember-orange accents (`#b8521e`) reminiscent of wood embers and oven flames.
- **Self-Hosted Typography**: Loaded via `@fontsource` using *Cormorant Garamond* for editorial display headings and *Source Sans 3* for crisp readability. Self-hosting the fonts in `.woff2` format eliminates external Google Fonts roundtrips, preserves user privacy (GDPR compliant), and avoids layout shifts.

#### 3. Image Optimization with Sharp (`astro:assets`)
High-resolution photos of food and ovens are crucial for appetite appeal, but they shouldn't cost megabytes of bandwidth:
- All assets are processed through Astro's image pipeline using **Sharp**.
- Automatically converted to modern **WebP** formats with responsive sizes and explicit aspect ratios, completely eliminating Cumulative Layout Shift (CLS).

#### 4. Local SEO & Rich Structured Data
For a local business, search visibility is everything. The site includes:
- Embedded **Schema.org `Restaurant` JSON-LD**, declaring cuisine types, opening hours, geolocation, and price ranges directly to Google.
- Automatic XML sitemap generation (`@astrojs/sitemap`) and dynamic `robots.txt`.
- Open Graph and Twitter Card tags with dedicated social sharing previews (`/og.png`).

#### 5. Streamlined User Flow
No unnecessary multi-step booking forms that customers abandon. The UI features:
- Prominent **click-to-call** buttons for instant table reservations and takeaway orders.
- Clear opening hours and allergen notices (compliant with EU Reg. 1169/2011).
- Accessible keyboard navigation and semantic HTML landmarks.

---

### The Result

The result is a digital presence that feels as artisanal and refined as the pizza itself:
- **100/100 Lighthouse scores** across Performance, Accessibility, Best Practices, and SEO.
- Sub-second page loads even on spotty 4G mobile connections.
- An intuitive, elegant experience that helps Pizzeria 5 Archi welcome guests both online and at the table.
