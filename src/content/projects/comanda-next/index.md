---
title: "Comanda Next"
description: "A fast, local-first POS & Kitchen Display System I built for Enigmi Secret Bar with zero cloud dependencies, sub-50ms speed, and 100% offline resilience."
category: "case-studies"
downloadUrl: []
media:
  src: "./comanda-next-preview.webp"
  alt: "Comanda Next POS & Kitchen Display System preview"
featured: false
date: "09/23/2026"
---

Until recently, service at **Enigmi Secret Bar** in Vasto ran the old-school way: classic pen-and-paper pads. 

Paper is dependable, but during a chaotic Saturday night in a dim speakeasy, the cracks started showing fast: hard-to-read handwriting, waitstaff constantly sprinting between tables and the bar just to drop slips, and stressful mental math trying to split bills *alla romana*.

Traditional cloud POS systems were out of the question: if the Wi-Fi hiccups or the internet drops during peak service, everything halts. So I decided to build **Comanda Next**: a high-performance, **local-first POS and Kitchen Display System (KDS)** tailored specifically for the venue.

---

### What I Built

Everything runs entirely on the bar's local network, executing every action in **under 50ms** with zero internet dependency:

- **Waitstaff Mobile App (`/sala/`)**: An installable PWA replacing paper pads. Waiters select tables, tap products, add custom prep notes (*"extra dry"*, *"no ice"*), and fire tickets straight from the floor.
- **Dual Touch KDS (Kitchen & Bar)**: Dedicated touchscreens for prep stations (`/kds-cucina/` and `/kds-bar/`) with audio chimes and color-coded urgency timers.
- **Cassa & Split-Bill Tool (`/cassa/`)**: Rapid table checkout featuring a one-tap equal-split calculator to settle group tabs in seconds.
- **Smart Stock Deduction (`/magazzino/`)**: A built-in Bill of Materials engine that automatically deducts recipe quantities (flour, mozzarella, spirits, mixers) on every order.
- **PIN Access Hub (`/`)**: Instant operator switching with a numeric PIN pad, displaying only the tools allowed for each role.
- **Silent Cloud Backup**: An async SQLite queue that pushes sales records to Supabase in the background whenever an internet connection is available, without ever slowing down local operations.

---

### Tech Stack Under the Hood

To keep things lightning fast on low-power tablets and local touchscreens:
- **Fastify v5 & WebSockets**: For sub-50ms real-time event broadcasting across stations.
- **SQLite with WAL mode (`better-sqlite3`)**: Runs in-process with zero network roundtrips and ACID reliability.
- **React 19, Vite & Tailwind CSS**: High-contrast, dark-mode touch interfaces designed for dimly lit bar environments.
- **Standalone Portable Runtime**: Bundled into a zero-install executable that launches in a single click on standard cash-register hardware.

---

### How It Turned Out

Switching from slips to Comanda Next was a game-changer for the team: no more running tickets back and forth, zero drink mix-ups, and bulletproof peace of mind even if the Wi-Fi drops completely.

It proved to me that modern web tech doesn't have to rely on fragile cloud connections to be powerful. What do you think of this local-first approach?
