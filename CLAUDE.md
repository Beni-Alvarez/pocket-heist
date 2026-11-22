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

## Route Organisation

Route groups (folders in parentheses don't appear in the URL) split `app/` into two sections, each with its own layout:

- `app/(public)/` — pages for logged-out users. The layout wraps children in `<main className="public">`, which `globals.css` styles.
  - `/` — splash page; meant only to redirect (logged in → `/heists`, otherwise → `/login`)
  - `/login`, `/signup` — auth pages
  - `/preview` — scratch page for previewing newly built UI components
- `app/(dashboard)/` — the main app. The layout renders `<Navbar />` plus `<main>`.
  - `/heists` — heist lists (active, assigned by you, expired)
  - `/heists/create` — create a new heist
  - `/heists/[id]` — heist details

## Architecture

Next.js App Router app (Next 16, React 19, TypeScript strict, Tailwind v4). It is a starter project for the Claude Code Masterclass.

- `app/layout.tsx` is the root layout; it imports `@/app/globals.css` and sets metadata.
- Shared components live in `components/<Name>/` with an `index.ts` barrel, the component file, and a CSS Module (e.g. `Navbar.module.css`). Import via `@/components/<Name>`.
- Path alias `@/*` maps to the repo root (tsconfig, also used by Vitest via `vite-tsconfig-paths`).
- Theme colors (`primary`, `secondary`, `dark`, `light`, `lighter`, `success`, `error`, `heading`, `body`) are defined in the Tailwind `@theme` block in `app/globals.css` and usable as Tailwind utilities.
- Tests live in `tests/` (mirroring `components/`) and use Testing Library with `@testing-library/jest-dom`.

## MANUALLY ADDED PREFERENCES
- do not use semicolons for javascript or typescript code.
- do not apply tailwind classes directly in component templates unless essential or just 1 at most. if an element needs more than a single tailwind class, combine them into a custom class using the '@apply" directive.
- use minimal project dependencies wehre possible.
use the newer 'git switch -c' command to switch to new branches, not 'git checkout'.
