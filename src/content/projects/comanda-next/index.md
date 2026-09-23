---
title: "Comanda Next"
description: "How a tailor-made, local-first stack modernized service at Enigmi Secret Bar in Vasto (CH)."
downloadUrl: []
featured: false
date: "09/23/2026"
---

# Building Comanda Next: From Pen and Paper to a Sub-50ms Local-First POS & Kitchen Display System

*How a tailor-made, local-first stack modernized service at Enigmi Secret Bar in Vasto (CH).*

---

### The Paper and Pen Dilemma

Until recently, service at **Enigmi Secret Bar** in Vasto (CH) ran on a classic staple of Italian hospitality: **pen and paper pads**.

Paper is simple and never crashes, but in a bustling cocktail bar and food venue, its limitations quickly stack up:
- Illegible handwriting under dim bar lighting.
- Waitstaff running back and forth between tables, the bar station, and the kitchen just to deliver slips.
- Zero visibility into prep times or drink queues.
- Manual inventory checks and stressful mental math when a group asks to split the bill *"alla romana"*.

When thinking about digitizing the venue, conventional cloud-based POS platforms were a non-starter. Relying on an internet connection means that a single Wi-Fi hiccup or ISP outage on a packed Saturday night halts service entirely. 

The bar needed something as fast and reliable as pen and paper, but with the coordination power of modern software. That is why I built **Comanda Next**: a high-performance, **local-first POS and Kitchen Display System (KDS)** running on the venue’s internal network.

---

### What is Comanda Next?

Comanda Next is an all-in-one order management ecosystem that operates 100% offline. Every critical operation—punching orders, alerting prep stations, updating stock, or settling tabs—executes locally in **under 50 milliseconds**.

The system is architected as an integrated monorepo serving touch-optimized web applications:

1. **Waitstaff Mobile PWA (`/sala/`)**: A fast, installable mobile app replacing paper order slips. Waiters select tables, tap categorized items, add custom prep notes (*e.g., "extra dry", "no ice"*), and fire orders instantly from the table.
2. **Dual KDS Displays (Pizza & Bar)**: Dedicated touchscreens for prep stations (`/kds-pizza/` and `/kds-bar/`). Kitchen and bar staff see incoming tickets in real time, accompanied by gentle audio chimes and dynamic color-coded urgency timers.
3. **Cassa & Bill Management (`/cassa/`)**: Rapid table checkout supporting non-fiscal *preconto* slips and a built-in *"alla romana"* equal-split calculator to settle group tabs in seconds.
4. **Automated Inventory & BOM Engine (`/magazzino/`)**: A Bill of Materials engine that automatically scales and deducts recipe quantities (flour, mozzarella, spirits, mixers) in an atomic database transaction on every order, warning staff before key ingredients run dry.
5. **Role-Based PIN Access Hub (`/`)**: Fast operator switching with a numeric PIN keypad, filtering the interface to display only the tools relevant to each staff member's role.
6. **Background Cloud Sync**: An asynchronous SQLite queue that pushes sales metrics and backups to the cloud (Supabase) in the background whenever internet is available, without ever blocking floor operations.

---

### The Tech Stack: Built for Pure Speed & Autonomy

To guarantee instantaneous feedback across low-power tablets and local touchscreens without external server overhead:

- **Backend**: **Node.js** running **Fastify v5** for high-throughput HTTP endpoints, and `@fastify/websocket` for sub-50ms real-time broadcasting between tables and stations.
- **Database**: **SQLite via `better-sqlite3` in WAL mode (`journal_mode = WAL`)**. Running directly in-process eliminates network roundtrips, ensures ACID consistency, and allows concurrent reads while writes are processing.
- **Frontend**: **React 19**, **Vite**, and **Tailwind CSS v4** built with high-contrast, dark-mode styling optimized for dimly lit bar environments.
- **Offline Resilience**: Progressive Web App (PWA) caching via Workbox so floor staff can continue building orders even if they step into a temporary Wi-Fi dead zone.
- **Zero-Install Deployment**: Packaged into a standalone portable runtime containing bundled Node.js and pre-compiled native SQLite binaries, launching via a single click on standard cash-register hardware.

---

### The Real-World Result at Enigmi Secret Bar

Moving from physical slips to Comanda Next transformed service at Enigmi Secret Bar:

- **No More Running Slips**: Waiters stay on the floor taking care of guests; orders pop up at the bar and kitchen the moment they are tapped in.
- **Zero Legibility Issues**: Standardized tickets and quick-modifier tags eliminate drink mix-ups.
- **Rock-Solid Reliability**: Even when the venue's internet connection drops, the local network keeps service running without a stutter.
- **Effortless Checkout**: The days of recalculating split checks on scrap paper are gone.

---

### Key Takeaway

Building Comanda Next proved that going digital doesn’t have to mean sacrificing the immediacy and bulletproof reliability of physical tools. By adopting a **local-first architecture**, we gained all the advantages of modern digital coordination without introducing single points of failure.
