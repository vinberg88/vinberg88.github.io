# AI coding agent guide for vinberg88.github.io

This repo is a Next.js 15, TypeScript WSL guide site exported statically for GitHub Pages. The app router is used; content is composed from React components (no MDX). Legacy HTML files in the repo root are kept for history and should not be modified.

## Architecture in one glance
- Next.js App Router under `src/app/*` with top-level layout in `src/app/layout.tsx` and global styles in `src/app/globals.css`.
- Route pages live at `src/app/[route]/page.tsx` (e.g., `installation`, `configuration`, `development`, `resources`, `tools`, `troubleshooting`, `best-practices`, `contact`). Pages are thin and composed from `src/components/*`.
- Navigation is defined in `src/components/Navigation.tsx` with active state via `usePathname()`.
- Styling is Tailwind-based with a small design system: terminal-themed classes and WSL colors.
- A Nodemailer API route powers the contact form: `src/app/api/contact/route.ts` used by `src/components/ContactForm.tsx`.
- Legacy static site files remain at the project root (`index.html`, `installation.html`, etc.) — do not edit; the Next.js app is the source of truth.

## Build, run, and deploy
- Key scripts (package.json):
  - `npm run dev` — start Next.js dev server on port 3000
  - `npm run build` — static export to `./out` (Next `output: 'export'`, `trailingSlash: true`)
  - `npm run lint` — run ESLint
- Static export details (`next.config.js`): `output: 'export'`, `images: { unoptimized: true }`, `trailingSlash: true`. Output is in `out/` for GitHub Pages.
- CI/CD: GitHub Actions deploys `out/` to Pages (see `.github/workflows/deploy.yml` if present). No basePath; site is served from repo root.

## Patterns and conventions
- Pages: keep minimal; compose from components like `Hero`, `Features`, `QuickStart`, `TechStack`, `Community`, `Footer`.
- Terminal look and feel: use classes from `globals.css` — `.terminal-window`, `.terminal-header`, `.terminal-content`.
- Design tokens (Tailwind): WSL colors `wsl-blue #0078d4`, `wsl-green #107c10`, `ubuntu-orange #e95420`, plus `terminal-bg #0c0c0c`, `terminal-text #cccccc`. Typography plugin is enabled.
- Navigation additions: update the array in `Navigation.tsx`; active link style is `.nav-link.active`.
- Forms and email: `ContactForm.tsx` posts to the API route; in dev it uses Ethereal mail. In production, set `SMTP_HOST`, `SMTP_USER`, `SMTP_PASS` env vars.

## Integration specifics
- API route: `src/app/api/contact/route.ts` (Next.js app router). Ensure body parsing and error handling match Nodemailer expectations; keep the response structure stable for `ContactForm.tsx`.
- Images: use Next Image with `unoptimized: true` in static export or plain `<img>` when simpler. Avoid remote loader changes.
- Dark/theme: `ThemeProvider.tsx` + `ThemeToggle.tsx` manage theme state; respect existing classes and avoid breaking tailwind purging.

## Don’ts and edge cases
- Do not edit legacy root HTML files (`index.html`, `installation.html`, etc.); they are snapshots.
- Keep routes under `src/app/*` and avoid adding MDX or server-side only features incompatible with static export.
- When adding new routes, ensure link inclusion in `Navigation.tsx` and verify `trailingSlash` behavior for static export.

## Example: adding a new guide page
1) Create `src/app/daily-usage/page.tsx` and compose from components.
2) Add nav entry in `Navigation.tsx`.
3) Run `npm run build` and confirm page exported under `out/daily-usage/`.

Questions or gaps? If any workflow or config feels ambiguous (SMTP, CI deploy file, image handling), flag it here and propose a concrete update.
