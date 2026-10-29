---
title: "Enigmi Secret Bar Website"
description: "A moody, lightning-fast static website and interactive riddle quiz I built for a 1920s speakeasy in Vasto using Astro."
category: "case-studies"
downloadUrl:
  - label: "Website"
    url: "https://enigmisecretbar.com/"
media:
  src: "./enigmi-preview.webp"
  alt: "Enigmi Secret Bar website preview"
featured: false
date: "09/23/2026"
---

If you ever happen to visit Vasto (Abruzzo, Italy), you definitely need to find **Enigmi Secret Bar**. It's the town's only authentic 1920s-style speakeasy: you have to track down a secret door in the historic center, and once inside, you're greeted with vintage velvet, signature cocktails, and actual hidden mechanical and musical puzzles.

A venue with such a mysterious concept needed a digital home that felt just as immersive.

---

### The Problem With the Old Site

The bar originally ran on a bulky WordPress setup with the Divi theme and third-party quiz plugins. 

While it worked at first, it had the usual CMS headaches:
- Sluggish load times and heavy page weights.
- Constant plugin updates and fragile security patches.
- A clunky quiz embedded in an iframe that felt slow and disconnected from the rest of the site.

I wanted to replace that with a lean, modern, and blazing-fast experience that immediately immerses visitors into the speakeasy vibe.

---

### What I Built With Astro

I chose **[Astro](https://astro.build/)** for its zero-JavaScript-by-default architecture and static performance. Here are some of the fun parts I put together:

- **Native Riddle Quiz**: Instead of a bloated third-party plugin, I coded a lightweight interactive quiz (`/riddle-1` to `/riddle-3`). Solving cocktail clues reveals hints on how to locate the hidden entrance in real life.
- **Speakeasy Visual Identity**: Deep charcoal tones, antique gold accents, self-hosted editorial typography (*Italiana* and *Marcellus*), and a lightweight video header, all free from third-party tracking scripts.
- **Bilingual i18n**: Full Italian and English support with clean localized routing and dynamic metadata to welcome travelers during the summer season.
- **Edge Performance**: Deployed directly to Cloudflare for instantaneous sub-second page loads anywhere in the world.

