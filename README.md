# portfolio-workspace

> **Description Summary:**  
> A production-ready personal portfolio web application for **Abdur Rahman** (`AbdurRhaman-Dev-AI`), built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**. Designed with an Apple-inspired minimalist **Liquid Crystal** aesthetic—featuring translucent frosted surfaces, chromatic aurora gradients, smooth spring physics, an interactive 4-slide showcase carousel, and a filterable project bento grid with case-study modals.

---

## Building a Liquid Crystal Portfolio: Design, Architecture & Engineering Blog

Creating a personal portfolio is an opportunity to treat the medium itself as a demonstration of craft. Rather than assembling a static resume page, **portfolio-workspace** was architected as an interactive showcase of full-stack web engineering, Python systems automation, and 3D spatial tooling—wrapped in a tactile, transparent **Liquid Crystal** visual system.

---

### 1. Visual Identity: The Liquid Crystal & Chromatic Gradient System

The design language draws inspiration from Apple's minimalist hardware-and-software aesthetic, pairing generous whitespace and crisp typography with translucent depth:

- **Adaptive Light & Dark Surfaces:**  
  Light mode uses `#F8F9FD` and `#FFFFFF` surfaces with `#1D1D1F` primary typography and `#0071E3` accents. Dark mode transitions smoothly to `#070709` / `#121215` elevated surfaces with `#F5F5F7` typography and `#2997FF` accents.
- **Crystal Glass Primitives (`src/app/globals.css`):**  
  Custom `.crystal-glass` and `.crystal-glass-card` utility classes combine `backdrop-filter: blur(24px–28px) saturate(190%)`, translucent backgrounds, inner specular rim highlights (`inset 0 1px 2px rgba(255,255,255,0.45)`), and top-edge `.crystal-glare` gradients.
- **Ambient Chromatic Orbs:**  
  Slow-oscillating radial gradient blurs (`animate-liquid-orb-1` and `animate-liquid-orb-2`) float behind key sections to give translucent glass panels real depth and color refraction.
- **GPU-Accelerated Motion:**  
  Animations rely on `transform`, `opacity`, and Framer Motion's cubic-bezier easing (`[0.16, 1, 0.3, 1]`) and spring physics (`stiffness: 260–380`, `damping: 28–32`) for responsive 60fps transitions on desktop and touch devices.

---

### 2. Core Features & Section Walkthrough

#### Sticky Frosted Navigation (`src/components/Navbar.tsx`)
- A `54px` frosted-glass header (`liquid-glass-nav`) pinned with a `2.5px` chromatic gradient scroll progress bar driven by `useScroll` and `useSpring`.
- Scroll-spy active section tracking with a shared-layout `layoutId="nav-pill"` indicator, responsive mobile drawer, Light/Dark theme toggle, and direct GitHub CTA.

#### Animated Hero & Live Stack Inspector (`src/components/Hero.tsx`)
- Introduces **Abdur Rahman** (*Computer Science & Technology Diploma Engineer*) with staggered entrance typography and dual pill CTAs.
- Features a floating right-side Liquid Crystal card with an interactive **Stack Inspector** (`Python`, `3D Mesh`, `Next.js`) and a 3-metric summary strip (`2+ Yrs Python Dev`, `3D Mesh AI & trimesh`, `Next.js Firebase Cloud`).

#### "A Closer Look" — Interactive Liquid Crystal Slider (`src/components/HighlightSlider.tsx`)
An Apple-style horizontal carousel supporting touch/mouse drag gestures, circular glass navigation arrows, auto-play with pause-on-hover, and an animated `layoutId="crystal-slider-tab"` pill bar. Each of the 4 slides hosts an interactive micro-preview:
1. **Daily Flow — Liquid Glass Journaling:** Clickable November 2026 calendar matrix with entry indicators, dynamic UTC timestamps, and Firebase per-user isolation highlights.
2. **AI-Assisted 3D Asset Studio:** Interactive 3D viewport preview with live mode switching (`Shaded`, `Wireframe`, `Sliced`) and `.GLB` / `.FBX` / `.OBJ` export badges.
3. **Python Automation & Agentic AI:** Translucent dark terminal card with an interactive step-runner simulating multi-model LLM orchestration (Claude & Gemini).
4. **3D Modeling & Mesh Pipelines:** `trimesh` topology and manifold inspector displaying non-manifold edge checks, triangle counts, and 3D-print wall-thickness metrics.

#### Filterable Projects Bento & Case-Study Modal (`src/components/ProjectsSection.tsx`, `src/components/ProjectModal.tsx`)
- Animated category filter bar (`All Projects`, `Full-Stack Web`, `3D & AI Tooling`, `Python Systems`) using Framer Motion `AnimatePresence` and `layout` transitions.
- Showcases **Daily Flow**, **AI-Assisted 3D Asset Studio**, **Python Automation & Systems Suite**, and **3D Character & Figure Asset Pipeline**.
- Clicking **Case Study Details** opens a frosted-glass modal presenting the project overview, key capabilities, multi-layer technical architecture, and tech stack.

#### Expertise, Roadmap & Contact (`src/components/Expertise.tsx`, `src/components/Roadmap.tsx`, `src/components/Footer.tsx`)
- **Core Expertise:** 3-column Bento grid covering Software & AI Engineering, 3D Modeling & Graphics, and CS & Engineering Core.
- **Academic & Career Roadmap:** Scroll-animated vertical timeline from *Diploma in Computer Science & Technology* (Completed) and *Shipping Full-Stack & AI 3D Tools* (2026) through *Software Engineering Role* (2027 Goal) and *BSc in Computer Science* (2028 Goal).
- **Footer & Quick Message Drawer:** One-click email clipboard copy, GitHub link, and an accessible modal message form.

---

### 3. Theme Synchronization & Accessibility Details

- **Zero-FOUC Theme Switching (`src/app/layout.tsx`, `src/context/ThemeContext.tsx`):**  
  An inline `<head>` script reads `localStorage.getItem('color-scheme')` (falling back to `prefers-color-scheme`) before first paint, updating both `html.dark` and `<meta name="color-scheme">` so native browser UI and Tailwind `dark:` variants stay synchronized across tabs.
- **Modal Scroll Containment & Dismissal:**  
  Dialogs implement `role="dialog"`, `aria-modal="true"`, `Escape` key closing, light-dismiss backdrop clicks, and CSS `overscroll-behavior: contain` on modal surfaces and backdrops.

---

### 4. Tech Stack

| Layer | Technologies |
| :--- | :--- |
| **Framework** | Next.js `16.4.6` (App Router, Turbopack), React `19.3.0` |
| **Language** | TypeScript `^5` |
| **Styling** | Tailwind CSS `4.3.3` (`@custom-variant dark`), CSS Custom Properties |
| **Animation** | Framer Motion `^14.14.0` |
| **Icons** | Lucide React `^1.77.0` + Custom `GithubIcon` SVG |

---

### 5. Project Structure

```text
src/
├── app/
│   ├── globals.css          # Liquid crystal glass utilities, aurora animations & theme tokens
│   ├── layout.tsx           # Root layout, Geist fonts, FOUC-prevention script & ThemeProvider
│   └── page.tsx             # Main portfolio composition
├── components/
│   ├── icons/
│   │   └── GithubIcon.tsx   # Crisp GitHub SVG icon
│   ├── Expertise.tsx        # 3-column technical capabilities Bento grid
│   ├── Footer.tsx           # Closing CTA, clipboard email copy & quick message modal
│   ├── Hero.tsx             # Animated hero & interactive Stack Inspector card
│   ├── HighlightSlider.tsx  # 4-slide interactive Liquid Crystal showcase carousel
│   ├── Navbar.tsx           # 54px frosted sticky header & scroll progress indicator
│   ├── ProjectModal.tsx     # Accessible case-study detail modal
│   ├── ProjectsSection.tsx  # Filterable Bento project grid
│   └── Roadmap.tsx          # Scroll-animated academic & career timeline
├── context/
│   └── ThemeContext.tsx     # Cross-tab synced Light/Dark theme provider
├── data/
│   └── portfolioData.ts     # Structured portfolio, project, expertise & roadmap data
└── types/
    └── portfolio.ts         # TypeScript interfaces
```

---

### 6. Getting Started Locally

```bash
# 1. Clone the repository
git clone https://github.com/AbdurRhaman-Dev-AI/portfolio-workspace.git
cd portfolio-workspace

# 2. Install dependencies
npm install

# 3. Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to explore the portfolio.

#### Useful Scripts
- `npm run dev` — Start the Next.js Turbopack development server.
- `npm run build` — Build the optimized production bundle.
- `npm run start` — Serve the production build.
- `npm run lint` — Run ESLint checks.

---

### Author

**Abdur Rahman** (`AbdurRhaman-Dev-AI`)  
GitHub: [https://github.com/AbdurRhaman-Dev-AI](https://github.com/AbdurRhaman-Dev-AI)
