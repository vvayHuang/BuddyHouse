# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Official marketing website for "Buddy House 壹耗店" (a restaurant/bar), built with Vue 3 + Vite. It's a mostly static, content-driven site: brand intro, menu pages (food/pizza/drink), FAQ, and business info. All user-facing text/content is in Traditional Chinese.

## Commands

```bash
npm run dev          # start Vite dev server (auto-opens browser)
npm run build         # production build to dist/
npm run preview       # preview the production build locally
npm run test:unit     # run Vitest unit tests
npm run lint           # eslint . --fix
npm run format          # prettier --write src/
npm run deploy         # build + publish dist/ to GitHub Pages (gh-pages)
```

Run a single test file: `npx vitest run src/components/__tests__/<file>.spec.js`
Run tests in watch mode: `npx vitest`

Note: `src/components/__tests__/HelloWorld.spec.js` imports a `HelloWorld.vue` component that does not exist in this repo and currently fails to resolve — this is pre-existing scaffold leftover, not something introduced by other work.

## Architecture

- **Routing** (`src/router/index.js`): routes are lazy-loaded views under `src/views/`. Each route can set `meta.title` (appended to the document title in a global `beforeEach` guard) and `meta.hideHeaderFooter` (suppresses `HeaderNavbar`/`FooterSection` in `App.vue`, used for the 404 page). Unmatched paths redirect to `/error`.
- **Path alias**: `@` maps to `src/` (configured in both `vite.config.js` and `jsconfig.json`).
- **State**: Pinia is used minimally, for the color theme only (`src/store/theme.js`). The store handles light/dark/auto mode, persists the choice to `localStorage`, toggles the `dark` class on `<html>`, and listens for OS-level `prefers-color-scheme` changes when in `auto` mode. Dark mode styling is Tailwind's class-based strategy (`darkMode: 'class'`).
- **Content as data, not CMS**: menu items and FAQ content live as plain JS arrays/objects in `src/data/` (`food.js`, `pizza.js`, `drink.js`, `faq.js`). Views import and render these directly — update these files to change menu/FAQ content rather than editing view templates.
- **Component layout**:
  - `src/components/layout/` — page chrome (`HeaderNavbar`, `FooterSection`)
  - `src/components/common/` — shared primitives (buttons, logo)
  - `src/components/features/` — larger composed sections (e.g. `LandingSection`)
  - `src/components/icons/` — inline SVG icon components
  - other feature components (`MenuCategory`, `MenuDropdown`, `ListItem`, `DialogComponent`, `EffectMarquee`) sit directly under `src/components/`
- **Styling**: Tailwind CSS with a heavily customized design-token config in `tailwind.config.js` (custom `screens` breakpoints, a full type scale under `fontSize` like `display-lg`/`heading-m`/`body-s`/etc., custom `fontFamily`). Prefer these existing tokens over ad-hoc values when styling.
- **Analytics**: Google Analytics (`vue-gtag-next`) is only enabled in production builds (`import.meta.env.PROD` check in `src/main.js`); Microsoft Clarity is initialized unconditionally.
- **Deployment**: primary deployment target is Vercel (SPA rewrite in `vercel.json` routes all paths to `index.html`); `npm run deploy` is a secondary path publishing to GitHub Pages via `gh-pages`.

## Code style

- No semicolons, single quotes, 100-char print width (Prettier, see `.prettierrc.json`).
- ESLint: `js.configs.recommended` + `eslint-plugin-vue` `flat/essential`, with Prettier conflicts turned off via `skipFormatting`. Vue components use `<script setup>`.
- 2-space indentation, LF line endings, final newline required (`.editorconfig`).
