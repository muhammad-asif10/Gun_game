# 🎮 Gun Game — SHADOW STRIKE: City Defender

> A feature-rich, fully browser-based 3D tactical shooter with wave-based enemy defense, deep weapon progression, and multiple environments — built entirely with vanilla JavaScript and Three.js.

[![Play Online](https://img.shields.io/badge/Play%20Online-Live%20Demo-brightgreen?style=for-the-badge)](https://muhammad-asif10.github.io/Gun_game/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?style=for-the-badge&logo=javascript)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Three.js](https://img.shields.io/badge/Three.js-r128-black?style=for-the-badge)](https://threejs.org/)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)

---

## 📖 Table of Contents

- [Overview](#-overview)
- [Live Demo](#-live-demo)
- [Features](#-features)
- [Gameplay](#-gameplay)
  - [Controls](#controls)
  - [Camera Modes](#camera-modes)
  - [HUD Elements](#hud-elements)
- [Heroes](#-heroes)
- [Weapons](#-weapons)
- [Bombs & Explosives](#-bombs--explosives)
- [Environments](#-environments)
- [Missions & Progression](#-missions--progression)
- [Enemy Types](#-enemy-types)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Architecture](#-architecture)
- [Contributing](#-contributing)

---

## 🔍 Overview

**SHADOW STRIKE — City Defender** is a 3D third-person / first-person tactical shooter that runs entirely in the browser with no installation required. Players choose a hero, select an environment, and fight through 30 progressively challenging missions — each consisting of multiple enemy waves.

The game features:
- Fully procedural 3D city, desert, snow, and forest environments
- 8 upgradeable weapons and 4 throwable explosives
- 2 playable heroes with unique stat profiles
- 30 missions across Easy, Medium, and Hard difficulty tiers
- Persistent progression saved in browser `localStorage`
- Procedurally generated audio (no external audio files required)
- Responsive design with full mobile touch-control support

---

## 🌐 Live Demo

**[▶ Play Now — https://muhammad-asif10.github.io/Gun_game/](https://muhammad-asif10.github.io/Gun_game/)**

No installation, no sign-up. Just open in a modern browser and play.

---

## ✨ Features

| Feature | Details |
|---|---|
| **3D Graphics** | WebGL rendering via Three.js with dynamic lighting, shadows, and fog |
| **30 Missions** | Procedurally scaled across Easy / Medium / Hard difficulty tiers |
| **8 Weapons** | Pistol, SMG, Shotgun, Assault Rifle, Sniper, LMG, Desert Eagle, RPG-7 |
| **Weapon Upgrades** | Up to 5 upgrade levels per weapon, each boosting damage by 15% |
| **4 Explosives** | Frag Grenade, Molotov Cocktail, Flashbang, C4 Sticky Bomb |
| **2 Playable Heroes** | Unique speed, health, accuracy, and stealth stat profiles |
| **4 Environments** | City, Desert, Snow, Forest — each with unique lighting and atmosphere |
| **3 Camera Modes** | Third-person, First-person, Top-down |
| **Vehicles** | Drivable Jeeps and Sports Cars |
| **Climbing & Parachute** | Scale buildings and control parachute descents |
| **Combo & Streaks** | Kill combo multiplier and streak tracking for high scores |
| **Daily Check-in** | 7-day streak calendar with increasing coin rewards |
| **Achievements** | Milestone-based unlockables tracking kills, combos, and streaks |
| **Minimap** | Real-time canvas-based minimap showing player and enemy positions |
| **Mobile Support** | Virtual joystick and on-screen action buttons for touch devices |
| **Procedural Audio** | All sound effects and music generated via the Web Audio API |
| **No Build Step** | Pure vanilla JS — open `index.html` and play |

---

## 🕹️ Gameplay

### Controls

| Input | Action |
|---|---|
| `W` / `A` / `S` / `D` | Move forward / left / backward / right |
| `↑` `↓` `←` `→` | Alternative movement keys |
| **Mouse Move** | Aim and look around |
| **Left Click** | Shoot |
| `F` | Shoot (keyboard alternative) |
| `R` | Reload weapon |
| `G` | Throw bomb |
| `V` | Cycle camera mode (TPS → FPS → Top-Down) |
| **Right Click** | Toggle 2× scope / zoom |
| `ESC` | Pause game |

> **Mobile:** A virtual joystick appears on the left for movement, and dedicated action buttons appear on the right for shooting, bombs, reload, scope, and pause.

### Camera Modes

| Mode | Description |
|---|---|
| **Third-Person (TPS)** | Camera follows behind the player; character model fully visible |
| **First-Person (FPS)** | Camera at eye level; character model hidden |
| **Top-Down** | Isometric overhead view |

### HUD Elements

- **Health bar** — current HP with percentage indicator
- **Ammo counter** — rounds in magazine / total reserve
- **Bomb counter** — throwables remaining
- **Wave counter** — current wave out of total waves
- **Enemy counter** — enemies remaining in the wave
- **Score & Coins** — updated in real time
- **Minimap** — 160×160 canvas (bottom-right) with player and enemy markers
- **Kill feed** — recent kills with timestamps
- **Combo display** — current kill-combo multiplier
- **Reload indicator** — "RELOADING..." message during reload animation
- **FPS counter** — optional; toggle in Settings

---

## 🦸 Heroes

| Hero | Class | Speed | Health | Accuracy | Stealth |
|---|---|---|---|---|---|
| **Hussnain Ali** | Shadow Operative | 85 | 80 | 90 | 95 |
| **Asif** | Iron Fortress | 70 | 100 | 75 | 60 |

Each hero has a unique character model with custom colours, gear, and proportions rendered in Three.js.

---

## 🔫 Weapons

| # | Weapon | Damage | Fire Rate | Magazine | Cost |
|---|---|---|---|---|---|
| 1 | **Pistol** | 15 | 300 ms | 15 | Starter |
| 2 | **SMG Vector** | 10 | 80 ms | 30 | 500 coins |
| 3 | **Shotgun M870** | 8 × 6 pellets | 700 ms | 6 | 800 coins |
| 4 | **Assault Rifle** | 18 | 120 ms | 30 | 1,200 coins |
| 5 | **Sniper AWP** | 80 | 1,200 ms | 5 | 2,000 coins |
| 6 | **LMG Destroyer** | 14 | 90 ms | 100 | 3,000 coins |
| 7 | **Desert Eagle** | 40 | 450 ms | 7 | 1,500 coins |
| 8 | **RPG-7** | 100 (explosive) | 2,000 ms | 1 | 5,000 coins |

All weapons support **5 upgrade levels** (+15% damage per level), purchasable from the Armory.

---

## 💣 Bombs & Explosives

| Bomb | Damage | Blast Radius | Effect | Cost |
|---|---|---|---|---|
| **Frag Grenade** | 120 | 6 m | Standard explosion | 150 coins |
| **Molotov Cocktail** | 80 | 8 m | Area fire | 200 coins |
| **Flashbang** | 40 | 10 m | 3-second stun | 100 coins |
| **C4 Sticky Bomb** | 200 | 5 m | Massive blast | 350 coins |

---

## 🌍 Environments

| Theme | Description | Trees | Atmosphere |
|---|---|---|---|
| **City** | Urban night-time skyline with neon lamps | 40 | Dark, foggy, moody |
| **Desert** | Sandy terrain under bright daylight | 15 palm trees | Clear, sunny |
| **Snow** | Frozen landscape with overcast skies | 25 | Cold, grey, quiet |
| **Forest** | Dense, dark woodland | 80 | Green, shadowy |

Each environment is **procedurally generated** at runtime with unique building colours, lighting, fog density, sky gradients, and star effects.

---

## 📈 Missions & Progression

### Mission Structure

- **30 missions** split across three difficulty tiers:
  - **Easy** — Levels 1–10 (2–6 waves, 2–9 enemies per wave, rewards up to 250 coins)
  - **Medium** — Levels 11–20 (scaled HP +6%, Damage +4%, Speed +1.5% per level)
  - **Hard** — Levels 21–30 (maximum enemy stats, C4 bombs available)
- Levels unlock sequentially — complete one to unlock the next.

### Scaling Formula

```
HP multiplier    = 1 + (levelNum − 1) × 0.06
Damage multiplier = 1 + (levelNum − 1) × 0.04
Speed multiplier  = 1 + (levelNum − 1) × 0.015
```

### Star Ratings

| Stars | Condition |
|---|---|
| ⭐ | Level completed |
| ⭐⭐ | Completed with > 50% HP remaining |
| ⭐⭐⭐ | Completed with > 80% HP remaining |

### Daily Check-in

Log in daily for a 7-day streak of increasing coin rewards (75–300 coins per day).

### Achievements

| Achievement | Requirement |
|---|---|
| First Blood | Kill 10 enemies |
| Slayer | Kill 50 enemies |
| Combo Master | Achieve a 5-hit kill combo |
| Streak Legend | Achieve a 10+ kill streak |

---

## 👾 Enemy Types

| Type | HP | Speed | Damage | Size |
|---|---|---|---|---|
| **Soldier** | Base | Base | Base | Standard |
| **Heavy** | 1.5× | 0.7× | 1.3× | Larger |
| **Fast** | 0.7× | 1.5× | Base | Standard |

Enemy AI behaviour includes patrolling, chasing the player, and shooting. Each enemy has a unique name and a Minecraft-style voxel character model.

---

## 🛠️ Tech Stack

| Technology | Role |
|---|---|
| **HTML5** | Game canvas, UI screens, structure |
| **CSS3** | Styling, animations, responsive layout |
| **Vanilla JavaScript (ES6+)** | All game logic, engine, UI, state management |
| **[Three.js r128](https://threejs.org/)** | 3D rendering (WebGL) — loaded via CDN |
| **Web Audio API** | Procedural music and sound effects |
| **HTML5 Canvas** | HUD overlays and minimap |
| **localStorage** | Persistent save data (no server required) |

> **Zero build step.** No Node.js, no bundler, no package manager. Everything runs directly in the browser.

---

## 🚀 Getting Started

### Play Instantly (Recommended)

Open **[https://muhammad-asif10.github.io/Gun_game/](https://muhammad-asif10.github.io/Gun_game/)** in any modern browser.

### Run Locally

1. **Clone the repository**

   ```bash
   git clone https://github.com/muhammad-asif10/Gun_game.git
   cd Gun_game
   ```

2. **Open the game**

   Simply open `index.html` in your browser:

   ```bash
   # macOS
   open index.html

   # Linux
   xdg-open index.html

   # Windows
   start index.html
   ```

   Or serve it with any local HTTP server (required for some browsers due to CORS):

   ```bash
   # Using Python 3
   python -m http.server 8080
   # Then open http://localhost:8080
   ```

### Browser Requirements

- **WebGL** support (Three.js rendering)
- **Web Audio API** support (procedural audio)
- **HTML5 Canvas** support (minimap / HUD)
- **ES6+ JavaScript** support
- Works in: Chrome, Firefox, Safari, Edge (latest versions)

---

## 📁 Project Structure

```
Gun_game/
├── index.html          # Main HTML — game canvas, UI screens, CDN imports
├── game.js             # Core 3D engine & game logic (~4,700 lines)
├── ui.js               # UI controller & screen navigation
├── audio.js            # Procedural audio engine (Web Audio API)
├── styles.css          # CSS styling & animations
└── splash_screen1.png  # Loading screen background image
```

---

## 🏗️ Architecture

The game is structured around several key classes:

| Class | Responsibility |
|---|---|
| `Game` | Main game loop, input handling, rendering, physics |
| `GameState` | Persistent player data saved to `localStorage` |
| `CityMap3D` | Procedural environment generation for all themes |
| `CharacterBuilder` | Static methods for creating 3D character models |
| `Player3D` | Player character, movement, weapons, stats |
| `Enemy3D` | Enemy AI — patrol, chase, shoot behaviour |
| `Bullet3D` | Projectile with physics |
| `Bomb3D` | Throwable explosive |
| `Explosion3D` | Blast effect with particle system |
| `Vehicle3D` | Drivable jeep / sports car |
| `Parachute3D` | Parachute descent animation |
| `Pickup3D` | Collectible items (coins, ammo) |
| `AudioEngine` | Procedural sound generation & volume control |

**Game flow:**

```
Loading Screen → Main Menu → Hero Select → Theme Select
    → Level Select → In-Game (wave loop) → Level Complete / Game Over → Menu
```

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "Add your feature"`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 👤 Author

**Muhammad Asif**
- GitHub: [@muhammad-asif10](https://github.com/muhammad-asif10)

---

*Built with ❤️ using vanilla JavaScript and Three.js*
