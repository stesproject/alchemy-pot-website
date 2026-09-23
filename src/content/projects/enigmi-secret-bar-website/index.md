---
title: "Enigmi Secret Bar Website"
description: "How I migrated a 1920s-inspired speakeasy website from a bloated WordPress setup to a lightning-fast, interactive static web experience."
downloadUrl: []
featured: false
date: "09/23/2026"
---

# Case Study: Rebuilding Enigmi Secret Bar with Astro.js v7

### *How I migrated a 1920s-inspired speakeasy website from a bloated WordPress setup to a lightning-fast, interactive static web experience.*

---

### The Mystery Behind the Door: Enigmi Secret Bar

Tucked away in the historic center of Vasto (Abruzzo, Italy), **Enigmi Secret Bar** is not your ordinary cocktail lounge—it is the city’s only authentic 1920s-style speakeasy. 

Founded by **Stefano Samuele** and **Miriam Macchia**—passionate bartenders trained with world flair champions and alumni of the prestigious *Bruno Vanzan Academy*—Enigmi is designed as an immersive journey. Guests don’t simply walk in: they first have to locate a secret entrance. Inside, they are welcomed by velvet textures, dim lighting, artisanal mixology, and actual physical and musical riddles (including a playable piano and guitar) hidden throughout the venue.

A venue with such a distinctive, enigmatic concept needed a digital presence to match—one that felt mysterious, fast, and interactive.

---

### The Challenge: Escaping WordPress Bloat

The original website ran on a traditional WordPress setup utilizing the **Divi theme**, external review widgets, and the **H5P plugin** to power an interactive cocktail quiz. 

While it served its initial purpose, the site suffered from typical CMS overhead:
* **Heavy bundle sizes & sluggish load times** due to Divi’s generated markup and multiple third-party scripts.
* **Fragile maintenance**, requiring regular plugin updates and vulnerability patching.
* **Clunky quiz mechanics**, where visitors had to wait on heavy embedded iframes just to answer simple cocktail trivia.

The goal was clear: rebuild the platform from scratch as a **lean, secure, and blazing-fast static website** while preserving its dark, elegant aesthetic and interactive puzzle experience.

---

### The Tech Stack & Architecture

I chose **[Astro.js v7](https://astro.build/)** as the core engine. Astro’s static-first, zero-JavaScript-by-default architecture made it the perfect fit for a content-driven showcase that needs top-tier SEO and immediate interactivity.

Here is how the new architecture took shape:

#### 1. Custom Interactive Riddle Engine
Rather than relying on heavy third-party quiz builders, I implemented a native, lightweight interactive quiz component (`RiddleQuiz.astro`).
- Prospects are guided through a multi-step cocktail trivia journey (`/riddle-1` to `/riddle-3`).
- Validation runs via minimal vanilla JavaScript, giving instant visual feedback and dynamically revealing the next step without page reloads.
- Conquering the quiz unlocks the final clue page (`/fine-riddle`), hinting at how to find the secret door in the physical bar.
- To prevent search engine spoilers, riddle and clue routes are excluded from the sitemap via Astro’s `@astrojs/sitemap` integration.

#### 2. Speakeasy Design System & Asset Optimization
To capture the 1920s Prohibition vibe:
- **Palette**: Deep blacks (`#000000`, `#080808`) accented with antique champagne gold (`#E7E2BC`, `#E09900`) and rich rust tones.
- **Typography**: Editorial elegance with *Italiana* (headers & logos), *Marcellus* (body & navigation), and *Playfair Display* (calls to action).
- **Self-Hosted Assets**: A full-screen video background (`.webm`) with poster fallbacks, local responsive imagery, and a custom lightbox gallery—completely free of third-party tracking scripts.

#### 3. Lightweight Bilingual Internationalization (i18n)
Because Vasto attracts international visitors during the summer season, I implemented a lightweight, strongly-typed i18n routing system (supporting Italian and English). Pages leverage shared templates (`/templates/`) to keep the codebase DRY and maintainable, complete with localized URLs and dynamic Open Graph & `hreflang` meta tags.

#### 4. Edge Deployment
The final build generates pure static HTML/CSS/JS deployed to **Cloudflare** via Wrangler, ensuring sub-second response times worldwide with zero server maintenance overhead.

---

### Key Takeaways

Rebuilding Enigmi with Astro proved that you don't need heavy dynamic backends to create engaging web experiences. By swapping a heavyweight CMS for modern static architecture, the site achieved:

* ⚡ **Near-instant page loads** and pristine Core Web Vitals.
* 🍸 **Zero plugin bloat**, replacing heavy iframes with lightweight native components.
* 🔐 **Perfect alignment with the brand**, turning the website into the first stage of the speakeasy's real-world mystery.
