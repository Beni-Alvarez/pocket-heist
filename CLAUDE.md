# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Pocket Heist ("Tiny missions. Big office mischief.") is a web app for playful office pranks. Users create small "heists" and assign them to colleagues. The dashboard groups heists into those assigned to you (active), those you've assigned to others, and expired ones. There is also a detail view per heist, plus login and signup. The splash page (`/`) is meant to redirect to `/heists` when logged in and to `/login` otherwise.

Current state: this is a starter project. The pages are mostly placeholder headings, and there is no auth, backend or data layer yet.

## Tech Stack

- Framework: Next.js 16 (App Router)
- UI: React 19, TypeScript 5 (strict)
- Styling: Tailwind CSS v4 (`@theme` in `app/globals.css`) and CSS Modules
- Icons: lucide-react
- Testing: Vitest 4, jsdom, React Testing Library, jest-dom
- Linting: ESLint 9 with `eslint-config-next`

## Commands

- `npm run dev` — start the Next.js dev server (http://localhost:3000)
- `npm run build` / `npm start` — production build / serve
- `npm run lint` — ESLint (flat config in `eslint.config.mjs`)
- `npm test` — Vitest in watch mode (jsdom, globals enabled, setup in `vitest.setup.ts`)
- Single test: `npx vitest run tests/components/Navbar.test.tsx` (add `-t "<name>"` to filter by test name)

## Architecture

Next.js App Router app (Next 16, React 19, TypeScript strict, Tailwind v4). It is a starter project for the Claude Code Masterclass.

- Route groups split the app into two layouts under `app/`:
  - `app/(public)/` — splash page, `login`, `signup`, `preview`. Layout wraps children in `<main className="public">`, which `globals.css` styles for public pages.
  - `app/(dashboard)/` — `heists`, `heists/create`, `heists/[id]`. Layout renders `<Navbar />` plus `<main>`.
- `app/layout.tsx` is the root layout; it imports `@/app/globals.css` and sets metadata.
- Shared components live in `components/<Name>/` with an `index.ts` barrel, the component file, and a CSS Module (e.g. `Navbar.module.css`). Import via `@/components/<Name>`.
- Path alias `@/*` maps to the repo root (tsconfig, also used by Vitest via `vite-tsconfig-paths`).
- Theme colors (`primary`, `secondary`, `dark`, `light`, `lighter`, `success`, `error`, `heading`, `body`) are defined in the Tailwind `@theme` block in `app/globals.css` and usable as Tailwind utilities.
- Tests live in `tests/` (mirroring `components/`) and use Testing Library with `@testing-library/jest-dom`.
