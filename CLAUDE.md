# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A modern 3D portfolio website built with **React**, **Vite**, **React Three Fiber**, and **Framer Motion**. The site features an interactive 3D avatar, space-themed design, smooth animations, and is fully responsive. It's deployed on Vercel at https://3d-portfolio-one-azure.vercel.app/.

## Development Commands

```bash
npm run dev      # Start Vite dev server (http://localhost:5173)
npm run build    # Create production build (outputs to dist/)
npm run lint     # Run ESLint on all JS/JSX files
npm run preview  # Preview production build locally
```

## Architecture & Structure

### Directory Layout
- **`src/components/`** - Main React components for page sections (Navbar, Hero, About, Experience, Tech, Works, Contact, Feedbacks)
- **`src/components/canvas/`** - 3D components using React Three Fiber (Stars, Earth, Computers, Ball, Character, Gaming_chair, etc.)
- **`src/hoc/`** - Higher-order components. `SectionWrapper` wraps sections with animations, padding, and ID anchors
- **`src/utils/`** - Utility functions, primarily animation variants (motion.js)
- **`src/constants/`** - Static data: navigation links, services, technologies, experience, testimonials, projects
- **`src/assets/`** - Images and icons imported via index.js
- **`src/styles.js`** - Tailwind class collections for typography and spacing

### Key Design Patterns

**SectionWrapper HOC** (`src/hoc/SectionWrapper.jsx`)
- Wraps components to add section styling, padding, and Framer Motion stagger animation
- Usage: `const WrappedComponent = SectionWrapper(Component, "sectionId")`
- Automatically creates a hash-span for navigation anchor

**Motion Utilities** (`src/utils/motion.js`)
- Provides reusable Framer Motion variants:
  - `textVariant(delay)` - Text entrance from top with spring animation
  - `fadeIn(direction, type, delay, duration)` - Fade with optional directional slide (left, right, up, down)
  - `zoomIn(delay, duration)` - Scale from 0 to 1 with fade
  - `slideIn(direction, type, delay, duration)` - Full slide in from edge
  - `staggerContainer(staggerChildren, delayChildren)` - Container for staggered child animations

**Styles Export** (`src/styles.js`)
- Centralized Tailwind class definitions for consistent typography and spacing across sections
- Separate classes for hero text (heroHeadText, heroSubText) and section text (sectionHeadText, sectionSubText)

### Tech Stack Details

- **React 18.3** with JSX
- **Vite 6** - Fast build tool and dev server
- **React Three Fiber 8** - React renderer for Three.js 3D graphics
- **Framer Motion 12** - Animation library for smooth transitions and interactions
- **Tailwind CSS 3.4** - Utility-first CSS with custom color palette (primary: #050816, secondary: #aaa6c3, tertiary: #151030)
- **React Router 7** - Client-side routing
- **Three.js 172** - 3D graphics library (via React Three Fiber)
- **@react-three/drei** - Useful helpers for React Three Fiber
- **EmailJS** - Contact form email service
- **React Tilt** - Tilt effect component
- **React Vertical Timeline** - Timeline component for experience section
- **Maath** - Math utilities for 3D

### Styling Approach

- **Tailwind CSS** with custom configuration in `tailwind.config.js`
- Custom color palette and responsive breakpoints (including xs: 450px)
- `hero-pattern` background image for hero section
- `card` box-shadow for card elements
- All components use Tailwind classes, avoid inline styles except for dynamic values

### 3D Canvas Components

Components in `src/components/canvas/` render 3D content using React Three Fiber:
- They should import necessary Three.js utilities and Drei helpers
- Use Canvas component from React Three Fiber as the root
- Position and animate 3D objects for responsive display
- Canvas components are typically lazy-loaded or conditionally rendered to optimize performance

## Code Style & Conventions

- **Components** are functional React components with hooks (no class components)
- **File naming** uses PascalCase for components (e.g., Hero.jsx)
- **Imports** are organized at the top, with dependencies first, then local imports
- **Animations** use centralized motion utilities from `src/utils/motion.js`
- **Section IDs** for navigation are defined in `src/constants/index.js` (navLinks)
- **Constants** (not component state) go in `src/constants/index.js`
- **ESLint** enforces React best practices, hooks rules, and requires React as imported (disabled in config)

## Deployment

The site is deployed on **Vercel**. The production URL is https://3d-portfolio-one-azure.vercel.app/. CNAME file exists for custom domain setup.

## Important Notes

- The project uses Vite's fast HMR (Hot Module Replacement) for instant feedback during development
- 3D components may impact performance; monitor canvas rendering, especially on mobile
- Contact form functionality via EmailJS requires proper environment variable setup (.env file)
- The Tailwind JIT mode is enabled for optimal CSS generation
