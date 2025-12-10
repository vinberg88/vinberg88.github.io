# AI coding agent guide for vinberg88.github.io

## Architecture snapshot
- Next.js 15 App Router (TypeScript + Tailwind); `next.config.js` enforces `output: 'export'`, `trailingSlash: true`, and `images.unoptimized`. `npm run build` writes static HTML to `out/` for GitHub Pages—never edit the legacy `*.html` files in the repo root.
- `src/app/layout.tsx` wraps every route with `ThemeProvider`, `Navigation`, and `Footer`, plus an inline `<script>` that reads `localStorage` (`wsl-guide-theme`) before hydration. Keep that snippet intact to prevent theme flicker.
- `src/app/page.tsx` re-exports `NodePage`; change the hero copy in both files if you ever diverge.

## Page patterns
- Each route lives in `src/app/<segment>/page.tsx` and assembles content from arrays declared in the same file (see `managers` and `tooling` in `/node`). Extend sections by appending to those arrays instead of duplicating JSX.
- Update the single navigation source at `src/components/Navigation.tsx` when adding pages; links should carry the trailing slash (`/tools/`) so static export emits matching folders.
- Use `<Link>` from `next/link` for internal paths and give external resources `target="_blank"` + `rel="noopener noreferrer"`, mirroring existing pages.

## Styling & theming
- Tailwind lives in `tailwind.config.js` with WSL brand colors and `darkMode: 'class'`. Global utility classes (`.card`, `.terminal-window`, `.btn-primary`, `.nav-link`) reside in `src/app/globals.css`; reuse them for consistent styling.
- Client components that read theme state must stay inside `ThemeProvider`. `ThemeToggle` cycles Light ➜ Dark ➜ System and persists to `localStorage`; don’t remove the `use client` directives on these components.

## Contact and email tooling
- `src/components/ContactForm.tsx` posts JSON to `/api/contact`; the handler in `src/app/api/contact/route.ts` sends an admin mail plus an auto-reply via Nodemailer. Preserve the response contract `{ message, messageId }` / `{ error }` because the UI keyes off it.
- Production email requires `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`, `SMTP_PASS`, `FROM_EMAIL`, and `TO_EMAIL`. In development the handler provisions an Ethereal test account automatically.
- `scripts/mail.js` offers a CLI (`node scripts/mail.js test` / `send-contact ...`) that shares the transporter and reads `.env.local`; use it to debug SMTP configuration without going through the UI.

## Build & quality checkpoints
- Local dev: `npm run dev` (Next.js on port 3000).
- Static export: `npm run build`, then deploy the generated `out/` folder; rerun after structural changes to verify every route exports.
- Linting: `npm run lint`. There are no automated tests, so rely on lint + manual verification.

## Guardrails
- Remote imagery depends on `images.unoptimized`; host new assets under `public/` or external URLs.
- Avoid runtime-only Next.js features (server `fetch`, streaming, dynamic routes) or the export step will fail.
- Commit new scripts/config under `scripts/` or `docs/` and leave the historic HTML snapshots untouched.
