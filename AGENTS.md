# AGENTS.md

Personal portfolio site. Next.js 14 App Router, TypeScript, Tailwind. One page, no API, no data layer, no tests.

## Commands

```bash
npm run dev      # dev server on http://localhost:3000
npm run build    # production build (also generates next-env.d.ts)
npm run lint     # next lint, config in .eslintrc.json (next/core-web-vitals + next/typescript)
npx tsc --noEmit # typecheck - there is NO "typecheck" npm script
```

- `node_modules` is not committed and `next-env.d.ts` is gitignored (`.gitignore:36`). Run `next dev` or `next build` once before `tsc`, otherwise type results are incomplete.
- No test runner, no Prettier config, no CI workflow. Verification = lint + typecheck + looking at `localhost:3000`. Don't add a formatter or reformat the repo; indentation and quotes are already inconsistent.

## Architecture

- Single route: `app/page.tsx` is the section registry. It owns the fixed nav, the hero, the footer, and imports one component per section.
- `app/layout.tsx` (server) wraps everything in `app/providers.tsx` (client), which mounts the `next-themes` `ThemeProvider`. `app/page.tsx` and everything it renders are client components.
- `components/<Name>.tsx` is one self-contained section: it renders its own `<section>`, its own heading, and its own inline SVG icon. Follow that shape for new sections.
- **Content is hardcoded inside the component** - project data in `components/Accordion.js:9`, hobbies in `components/Carousel.tsx:9`, the timeline in `components/Experiencia.tsx`, social links in `components/ContactMe.tsx`. There is no content directory, JSON, or CMS. Edit the component.
- `@/*` maps to the repo root (`tsconfig.json:20`), so `@/components/ThemeSwitch` works.

## Section ids

Nav anchors in `app/page.tsx:25-28` must match `<section id=...>`: `inicio`, `sobre-mi`, `mis-proyectos`, `experiencia`, `mis-hobbies`, `mis-stacks`, `contactame`. Rename one and you must rename the other. Note `#inicio` is on `<header>`, not `<main>`.

## Styling & theming

- Use the custom Tailwind palette defined in `tailwind.config.ts:26-36` (`brightMode`, `darkMode`, `darkText`, `darkerText`, `brightText`, `brightTitle`, `brightButton`) instead of raw hex values.
- Dark mode is class-based (`darkMode: 'class'` + `next-themes` with `attribute='class'`, `defaultTheme='system'`). There is no automatic inversion: every element that should change in dark mode needs an explicit `dark:` variant, otherwise it stays light in dark mode.
- `font-rubik` is misleading - `tailwind.config.ts:24` maps that family to `'Geologica Variable'`, and `app/layout.tsx:33` puts `font-rubik` on `<body>`. The body font is Geologica, not Rubik.
- Custom utilities live in `app/globals.css`: `.text-outline` (hero), `.icon-wrapper` (social icons), `.animate-loop-scroll` and `.paused` (logo marquee).
- The stack marquees (`components/MisStacks.tsx`, `components/MisStacksPlus.tsx`) are a seamless scroll built from duplicated markup plus `animate-loop-scroll` / `group-hover:paused`. The second copy is `aria-hidden`; keep both copies in sync when adding a logo.

## Images

- Local assets live in `public/images/` and are referenced as `/images/<file>`, always through `next/image` with explicit `width`/`height`.
- Remote hosts must be whitelisted in `next.config.mjs` `images.domains` (legacy key, not `remotePatterns`): currently `placehold.co`, `i.pinimg.com`, `cdn.builder.io`, `assets.cdn.builder.io`. A new remote image without an entry there fails the build.

## Conventions

- User-facing copy and commit messages are in Spanish (es-CO). Identifiers, class names, and file names are English. `app/layout.tsx:31` says `lang="en"` even though the content is Spanish - it is wrong, don't treat it as the source of truth.
- New components go in `.tsx`. `components/Accordion.js` is the only `.js` component (allowed by `allowJs: true` in `tsconfig.json`); don't add more.

## Known gotchas

- `bootstrap`, `@types/bootstrap`, `flowbite-react`, and `next-theme` are installed but never imported. The theming package actually in use is `next-themes` (without the `s`). Don't reach for the unused ones.
- `flowbite` itself: the Tailwind plugin is enabled in `tailwind.config.ts:40` and `import('flowbite')` runs in `app/page.tsx:15`, but `Accordion` and `Carousel` hand-roll their open/closed state. The `@import 'flowbite'` in `app/globals.css:4` sits after the `@tailwind` directives, an invalid position for a CSS `@import`, so don't rely on it for styling.
- `app/page.tsx:54` - `<main>` has `bg-brightMode` with no `dark:` variant, so the page body stays light in dark mode. Pre-existing; verify visually before "fixing" colors.
- `public/images` has multi-MB GIFs committed (`tenorpk.gif` ~6.8MB, `tenor.gif` ~3.5MB). Keep the repo light: prefer SVG, don't commit more large binaries.
- `app/fonts/` holds ~30 Geologica TTFs but only `Geologica-Regular.ttf` is wired through `localFont`; `app/fonts/GeistVF.woff` is unused. The rest of the weights come from the `@fontsource-variable/*` CSS imports in `app/layout.tsx:3-4`.
- `app/globals.css:14-19` has a leftover `prefers-color-scheme` block setting `--background`/`--foreground` that duplicates what `next-themes` does. Leave it alone unless asked.

## Deploy

Vercel, deploying from `main` (remote: `github.com/dastan8q/miportfolio`). No `vercel.json` or CI config in the repo - deployment settings live in the Vercel dashboard.
