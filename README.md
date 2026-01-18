# National Park-e-dex

**Tagline:** Collect parks, not things.

[![Target Launch](https://img.shields.io/badge/Target%20Launch-January%2018%2C%202026-1D5D36)]()
[![Status](https://img.shields.io/badge/Status-MVP%20Prototype-C09635)]()

## Overview

National Park-e-dex turns visiting national parks into a Pokemon-style collection game. When you physically enter a park, GPS triggers an authentic digital stamp in your passport—no purchases, no cheating, just proof you were there. Gamification drives repeat visits through achievements and completion mechanics, addressing the Park Service's challenge of getting people back outdoors.

## The Problem

300+ million people visit national parks annually, but engagement is passive. Existing apps don't incentivize repeat visits or create meaningful progression systems that respect the authenticity of outdoor experiences.

## The Solution

A mobile-first web app that:

- **Geofences park boundaries** to automatically award stamps when you physically visit
- **Gamifies exploration** with park-specific achievements (2-3 per park)
- **Prevents cheating** through location-based verification—you can't buy or trade stamps
- **Builds collections** that prove real-world adventures

## MVP Features (Tier 1)

### Core Functionality

#### Park-e-dex Page (`/stamps`)
- Grid view of all national park stamps
- **Visited parks:** full-color stamp
- **Unvisited parks:** grayed-out stamp
- Achievement stars/hearts display on stamps (2-3 per park)

#### Geolocation Verification
- **Plan:** Background location tracking detects park boundary crossing, auto-awards stamp

#### Individual Park Page (`/parks/[id]`)
- Park photo, name, founding date
- Historical information
- Achievement tracker specific to that park
- Visual "visa" showing park stamp + achievement stamps

#### Navigation
- Home (placeholder)
- Stamp collection page
- Map view (placeholder)
- Profile (placeholder)

#### Data Persistence
- **Preferred:** User authentication with cloud storage
- **Fallback:** Local storage for demo/MVP

### MVP Wireframe Routes

| Route | Description |
|-------|-------------|
| `/landing` | Landing page |
| `/list` | Parks nearby |
| `/map` | Map view |
| `/stamps` | Main collection page |
| `/parks/[id]` | Individual park details |
| `/profile` | User profile |

## Future Roadmap

### Tier 2 Features
- Social sharing capabilities
- Friend connections within app
- Digital journal (notes + photos per stamp)
- "Shiny" stamps for repeat visits (gamified rarity)

### Tier 3 Features
- Advanced social features
- Seasonal/special event stamps
- Cross-park achievement chains
- Community challenges

## Design System

### Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Soft Linen | `#F5F1E8` | Background |
| Hunter Green | `#1D5D36` | Primary CTA, Links |
| Golden Bronze | `#C09635` | Secondary CTA |
| Gunmetal | `#3D3D3D` | Body Text |
| Bright Bronze | `#E8A547` | Accent/Badges |
| Terracotta Red | `#C44536` | Error States |

### Typography (Google Fonts)

- **Display/Headers:** Bebas Neue, Merriweather Bold
- **Body/UI:** Crimson Text

### Design Philosophy

Vintage national park aesthetic meets modern gamification—rustic heritage styling with mobile-first usability.

## Tech Stack

- **Framework:** Next.js 16.1.3 (React 19.2.3)
- **Styling:** Tailwind CSS 4
- **Language:** JavaScript/TypeScript
- **Deployment:** TBD
- **Geolocation:** Browser Geolocation API

## Target Audience

Outdoor enthusiasts, national park visitors, collection-driven users who value authentic experiences over purchasable content.

## Key Differentiators

- ✅ **No in-app purchases**
- ✅ **Location verification prevents cheating**
- ✅ **Authentic proof of park visits**
- ✅ **Free core experience** drives engagement without paywalls

## Monetization Strategy (Future)

- Premium features (advanced journals, special stamp designs)
- Partnership opportunities with National Park Service
- **Core collection mechanic remains free forever**

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/national-park-e-dex.git

# Navigate to project directory
cd national-park-e-dex

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

### Build for Production

```bash
npm run build
npm start
```

## Development

### Branch Structure

- `main` - Production-ready code
- `chans-branch` - Active development branch

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## How It Works

1. **User visits a national park** physically
2. **App detects location** via GPS/geolocation
3. **Boundary verification** confirms user is inside park boundaries
4. **Stamp is awarded** automatically and permanently
5. **Push notification** confirms the new stamp
6. **Achievements unlock** based on park-specific activities
7. **Collection grows** as user visits more parks

## Contributing

This is currently a prototype in active development. Contribution guidelines will be added as the project matures.

## License

TBD

## Contact

For questions or feedback about this project, please open an issue in this repository.

---

**Status:** MVP Prototype in Development
**Target Launch:** January 18, 2026

*Collect parks, not things.* 🏕️
