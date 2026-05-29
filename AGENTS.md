# Memory

## Project Overview

Personal portfolio website at [henriquenas.dev](https://henriquenas.dev) — a Classic Mac OS 9 desktop simulator built with:

- **Next.js 16** (App Router) + **React 19** + **TypeScript 5**
- **Tailwind CSS v4** with CSS-first `@theme` configuration
- **react-rnd** for draggable/resizable modal windows

The desktop features shortcuts that open draggable window modals (GitHub profile, projects, calculator, Pong game) and external links (LinkedIn, YouTube, Figma, resume PDF). A TopBar mimics the classic Mac OS menu bar with dropdown menus.

## Available Commands

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start Next.js dev server on port 3000 |
| `pnpm build` | Production build |
| `pnpm start` | Start production server |
| `pnpm lint` | Run ESLint |
| `pnpm lint:fix` | Run ESLint with auto-fix |
| `pnpm format` | Format with Prettier + tailwindcss plugin |
| `pnpm format:check` | Check formatting without writing |

## Code Style Guidelines

- Use descriptive variable names
- Follow existing patterns in the codebase
- Extract complex conditions into meaningful boolean variables
- Path alias `@/` maps to `src/` (configured in tsconfig.json)
- Prettier: semicolons, single quotes, trailing commas, 80 char width, 2-space tabs
- ESLint: Next.js config + tailwindcss plugin with recommended rules

## Architecture

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout — Mystery font, Mac OS 9 background, metadata
│   ├── page.tsx            # Desktop home — client component, renders TopBar + Shortcuts + modals
│   ├── api/route.ts        # GET /api → { name: "Henrique Nascimento" }
│   └── wed/page.tsx        # /wed — placeholder for Wed framework info
├── components/
│   ├── TopBar.tsx          # Classic Mac OS 9 menu bar (Utilities, About, View dropdowns)
│   ├── Shortcut.tsx        # Desktop shortcut icon — single-click (mobile) / double-click (desktop) to open
│   ├── CalculatorModal.tsx # Draggable calculator — all results = 42 (easter egg)
│   ├── GitHubModal.tsx     # Draggable GitHub profile viewer — hardcoded profile + top repos
│   ├── ProjectsModal.tsx   # Draggable projects folder — currently empty content area
│   └── PongModal.tsx       # Draggable two-player Pong — keyboard controls, first to 7 wins
├── hooks/
│   └── useIsMobile.ts      # SSR-safe mobile detection (breakpoint: 768px) via useSyncExternalStore
├── styles/
│   ├── global.css          # Tailwind v4 CSS config — @theme with custom cursors, fadeIn animation
│   └── fonts/
│       ├── Mystery.woff2   # Custom pixel-style font
│       └── mystery.ts      # Next.js localFont config for Mystery font
└── assets/
    ├── background.png      # Mac OS 9 desktop wallpaper
    ├── cursors/            # Custom .cur cursor files (arrow, grab, pointer, text, resize, etc.)
    ├── icons/              # Mac OS 9 system icons (Apple logo, Finder, Calculator, etc.)
    ├── shortcuts/          # Desktop shortcut icons (GitHub, LinkedIn, Figma, etc.)
    └── top_bar/            # TopBar SVG decorations (left.svg, right.svg)
```

### Patterns

- **Modals**: All window modals use `react-rnd` for drag and resize with Classic Mac OS 9 chrome (title bar with close/maximize buttons, striped background, beveled borders)
- **Window chrome**: Each modal reuses private `_Square`, `_Close`, `_Maximize`, `_Stripe` components for the title bar
- **Mobile vs Desktop**: `useIsMobile()` hook drives conditional rendering — TopBar and modals hidden on mobile, shortcuts respond to single tap instead of double-click
- **State**: Modal visibility managed via `useState` booleans in `page.tsx`, passed down as props

### Dependencies

| Dependency | Purpose |
|-----------|---------|
| `react-rnd` (^10.5.2) | Draggable, resizable window modals |
| `next` (16.1.6) | Framework |
| `react` / `react-dom` (19.2.4) | UI library |
| `tailwindcss` (^4.1.18) | Utility-first CSS via `@import 'tailwindcss'` in global.css |
| `@tailwindcss/postcss` (^4.1.18) | PostCSS integration for Tailwind v4 |

## Common Workflows

- **Adding a new window modal**: Create component in `src/components/`, follow the Rnd + Classic Mac OS chrome pattern, add state + shortcut in `page.tsx`
- **Adding to TopBar**: Add items to `utilitiesMenuItems`/`aboutMenuItems`/`viewMenuItems` arrays in `TopBar.tsx`
- **Styling**: All styles in `global.css` via Tailwind v4 `@theme` or utility classes. Custom cursors defined in `@theme` block
- **Adding pages**: Create folder in `src/app/` with `page.tsx` — uses App Router conventions
