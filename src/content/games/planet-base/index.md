---
title: "Planet Base"
description: "A fast-paced 2D cosmic strategy game built in Unity that takes the classic line-drawing mechanic and thrusts it into the vacuum of space."
downloadUrl: []
featured: false
date: "09/23/2026"
---

# Planet Base: Designing a High-Stakes Interplanetary Traffic Controller

When designing arcade games, some of the most satisfying player experiences stem from a deceptive simplicity: easy-to-grasp rules that quickly spiral into frantic, high-wire balancing acts. 

**Planet Base** is a fast-paced 2D cosmic strategy game built in Unity that takes the classic line-drawing mechanic (popularized by titles like *Flight Control*) and thrusts it into the vacuum of space. As the cosmic flight director, your job is to route incoming and departing spaceships to their matching colored planets—all while dodging mid-space collisions, managing dwindling fuel reserves, and rescuing stranded astronauts adrift in the void.

Here is a look under the hood at what makes *Planet Base* tick, its core gameplay loop, and the risk-reward mechanics that keep players chasing the next high score.

---

### The Core Loop: Orbit, Route, and Land

At any moment, multiple planetary bases populate the screen. Spaceships dock at departure bases, awaiting their launch orders with color-coded destination planets in sight.

1. **Direct Trajectory Control**: Players draw flight paths directly on-screen from the departure planet to the target landing zone. Once released, the ship throttles up and follows the custom flight corridor.
2. **The Launch Countdown**: Ships can’t idle safely on planetary pads forever. Each ship has a countdown timer. While drawing a trajectory slows the clock down to give the player tactical breathing room, letting the timer hit zero forces an emergency auto-launch in a straight line—often cutting directly across busy traffic lanes with no steering assist.
3. **Orbital Collisions**: The primary threat is space itself. If two flight paths cross at the wrong second, ships collide, ending the run immediately. Precision spacing and route pacing are essential.

---

### The Twist: Risk-Reward Fuel Economy

In many path-drawing games, drawing long, looping paths around obstacles is the safest exploit. *Planet Base* flips that dynamic on its head with an integrated **fuel consumption and scoring mechanic**:

* **Every Inch Costs Fuel**: Ships burn fuel as they fly. If a trajectory is too long or convoluted, the ship runs dry mid-flight and crashes.
* **The "Fumes Only" Multiplier**: The less fuel remaining in the tank upon touching down, the higher the score earned. 

This creates an addictive push-and-pull dynamic: do you play it safe with an efficient route for guaranteed points, or do you intentionally draw a winding, daring trajectory to let the tank drop into the red for a massive landing bonus?

---

### In-Flight Chaos: Power-Ups and Space Rescues

To keep flight patterns dynamic, spontaneous events interrupt routine transit:

* **Drifting Astronauts**: Stranded crew members occasionally drift across the screen. Skimming their coordinates to scoop them up before they drift off into deep space yields big score bonuses and mission points.
* **Power-Ups**: 
  * **Shields**: Temporarily immunizes a ship from hull-crushing collisions.
  * **Turbo Boost**: Speeds up travel time (great for quick clears, lethal if mistimed).
  * **Reserve Tanks**: Restores fuel to rescue a ship on the brink of empty.
  * **Bolts**: Rare scrap currency collected during runs to fund permanent ship upgrades.

---

### Game Modes & Challenge Modifiers

To cater to both quick-burst mobile play and hardcore session grinders, the game features two distinct modes:

* **Arcade Mode**: An endless survival gauntlet. Difficulty scales in waves—as your landing count climbs, spawn intervals tighten and launch timers accelerate, transforming calm orbital transit into controlled mayhem.
* **Missions Mode**: Unlocked after hitting a score milestone in Arcade, presenting objective-based challenges with unique rule modifiers:
  * *Landing Targets*: Land specific fleets under tight constraints.
  * *Astronaut Rescue*: Mandatory rescue quotas before clearance to land.
  * *Blind / Hidden Flight*: The trajectory disappears immediately after you draw it. Players must rely purely on spatial awareness and memory to visualize where multiple invisible paths intersect.

---

### Meta-Progression: The Garage

Collected Bolts and earned points can be invested in the **Garage**, allowing players to unlock new spaceship hulls and fine-tune four core parameters:

* **Timer Boost**: Buys precious extra seconds before auto-launch triggers.
* **Speed Boost**: Adjusts propulsion to better sync flight cadences.
* **Fuel Capacity**: Allows longer detour routes for intricate maneuvers.
* **Size Reduction (Shrink)**: Decreases the vessel’s collision hitbox, letting agile pilots squeeze through tight gaps between planets.

---

### Design Takeaway

The central design goal of *Planet Base* was delivering an intuitive, tactile mechanic with zero barrier to entry, while injecting systemic tension through fuel economics and simultaneous countdowns. By coupling a clean, vibrant aesthetic with high-stakes path planning, every run becomes a test of composure under pressure—where a split-second route adjustment can mean the difference between a new personal best and a catastrophic cosmic pileup.
