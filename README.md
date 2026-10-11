# ThinkLoom — Experimental 3D Designer Portfolio

> **"I DESIGN WHAT MAKES YOU LOOK TWICE."**  
> An experimental, immersive 3D designer portfolio website for **Anith**, backed by the creative technology brand **ThinkLoom**. Built with Next.js 15, React 19, TypeScript, Tailwind CSS, Three.js, React Three Fiber, @react-three/drei, and Framer Motion.

---

## 1. Creative Direction & Aesthetic Identity

- **Palette:** Deep obsidian black (`#08080A`), charcoal surfaces (`#121316`), electric lime / acid green accents (`#CCFF00`), and warm-white editorial typography (`#F5F5F0`).
- **3D Centerpiece:** Real-time glossy chrome liquid-metal Torus Knot with electric-lime gyroscopic rings, floating satellite nodes, and cinematic studio lighting.
- **Custom Cursor:** Smooth spring-driven pointer with context-sensitive labels (`EXPLORE`, `CASE STUDY`, `ORBIT`, `PLAY`), disabled on touch devices with reduced-motion support.
- **Kinetic Typography:** Oversized editorial typography with word-by-word reveals and glowing accents.
- **Real Artwork Showcase:** Asymmetric editorial layout with perspective tilt featuring authentic production assets from Messiah Sports, Ramyas Jeweller, Swanzaa, Lensora, Blue Waves FC, and Kuttyverse.
- **Interactive 3D Playground:** Real-time material and geometry laboratory where visitors can switch topology, surface shading (Liquid Chrome, Acid Hologram, Matte Obsidian, Cyber Wireframe), and lighting moods.

---

## 2. Technology Stack

- **Framework:** [Next.js 15](https://nextjs.org/) App Router (SSG pre-rendered static routes)
- **3D Graphics:** [Three.js](https://threejs.org/) + [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber/) + [@react-three/drei](https://github.com/pmndrs/drei)
- **Animation:** [Framer Motion](https://www.framer.com/motion/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) with customized obsidian/lime tokens
- **Typography:** Google Fonts (`Plus Jakarta Sans`, `Outfit`, `JetBrains Mono`)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Image Optimization:** Next.js Image with WebP/AVIF formats

---

## 3. Project Structure

```
src/
├── app/
│   ├── layout.tsx              # RootLayout (Navbar, Footer, CustomCursor, Fonts)
│   ├── page.tsx                # Homepage (Hero, Storytelling, Gallery, Services, Playground, About, Contact)
│   ├── globals.css             # Obsidian theme, lime glow, glassmorphism, custom scrollbar
│   ├── not-found.tsx           # 404 Void Horizon page
│   ├── work/
│   │   ├── page.tsx            # Full portfolio archive
│   │   └── [slug]/page.tsx     # Dedicated dynamic case study page
│   ├── services/page.tsx       # Services & Playground route
│   ├── about/page.tsx          # About Anith & ThinkLoom route
│   ├── contact/page.tsx        # Direct contact & inquiry route
│   ├── sitemap.ts              # XML sitemap generator
│   └── robots.ts               # Robots.txt route
├── components/
│   ├── hero/
│   │   └── Hero.tsx            # Full-screen editorial Hero section
│   ├── three/
│   │   ├── HeroScene.tsx       # R3F Liquid-metal Torus Knot & studio lighting
│   │   └── PlaygroundScene.tsx # Interactive 3D geometry & shading sandbox
│   ├── portfolio/
│   │   ├── PortfolioGallery.tsx# Asymmetric gallery with 6 category filters
│   │   ├── ProjectCard.tsx     # 3D perspective tilt project cards
│   │   └── ProjectModal.tsx    # High-resolution case study modal
│   ├── sections/
│   │   ├── StorytellingSection.tsx # 3 narrative chapters & philosophy
│   │   ├── ServicesSection.tsx     # Interactive services accordion
│   │   ├── PlaygroundSection.tsx   # 3D laboratory wrapper
│   │   ├── AboutSection.tsx        # Anith bio, tools matrix, 4-step process
│   │   └── ContactSection.tsx      # WhatsApp flow & project inquiry form
│   ├── layout/
│   │   ├── Navbar.tsx          # Floating frosted pill navbar
│   │   └── Footer.tsx          # ThinkLoom signature footer
│   └── ui/
│       └── CustomCursor.tsx    # Desktop custom cursor with spring physics
├── data/
│   ├── siteConfig.ts           # Anith / ThinkLoom brand copy, contact links
│   ├── projects.ts             # Central typed project database with real assets
│   └── services.ts             # 6 core services and production process
└── types/
    └── index.ts                # TypeScript interfaces and category types
```

---

## 4. Local Development

To run the project locally:

```bash
# 1. Install dependencies
npm install

# 2. Start the Next.js development server
npm run dev

# 3. Open in your browser
# http://localhost:3000
```

To run a production build test:

```bash
# Build the static pages and production bundle
npm run build

# Start the optimized server
npm run start
```

---

## 5. Contact & Studio Coordinates

- **Designer:** Anith
- **Brand:** ThinkLoom
- **Email:** `hello@thinkloom.design`
- **WhatsApp / Phone:** `+91 98421 43307`
- **Location:** Tamil Nadu, India • Worldwide Commissions
