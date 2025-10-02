# WSL Guide - AI Coding Assistant Instructions

This is a Next.js 15 WSL (Windows Subsystem for Linux) educational website with static export for GitHub Pages deployment.

## Architecture Overview

- **Framework**: Next.js 15 with App Router, TypeScript, static export configuration
- **Content Strategy**: Component-based pages (no MDX content files), each route is a dedicated guide section
- **Styling**: Tailwind CSS with custom WSL-themed colors and terminal aesthetics
- **Email System**: Nodemailer-based contact form with environment-specific configuration

## Key Patterns & Conventions

### Component Structure
```
src/app/[route]/page.tsx    # Route pages (installation, configuration, etc.)
src/components/             # Shared UI components
src/app/layout.tsx          # Root layout with Navigation + Footer
```

### Custom Design System
- **Colors**: Use `wsl-blue` (#0078d4), `wsl-green` (#107c10), `ubuntu-orange` (#e95420)
- **Terminal styling**: `.terminal-window`, `.terminal-header`, `.terminal-content` classes
- **Component classes**: `.feature-card`, `.btn-primary`, `.nav-link.active`

### Navigation & Routing
- Navigation items defined in `src/components/Navigation.tsx` navigation array
- Active state managed via `usePathname()` hook
- All routes follow pattern: `/installation`, `/configuration`, `/development`, etc.

## Development Workflows

### Local Development
```bash
npm run dev          # Development server on :3000
npm run build        # Static export to ./out directory
npm run lint         # ESLint checking
```

### Static Export Configuration
- `next.config.js`: Configured for static export with `output: 'export'`
- Images use `unoptimized: true` for static hosting compatibility
- MDX support configured but currently unused

### Email System Integration
- Contact form at `/contact` route with `ContactForm.tsx` component
- API endpoint: `src/app/api/contact/route.ts`
- Development: Uses Ethereal Email (fake SMTP)
- Production: Requires SMTP environment variables (SMTP_HOST, SMTP_USER, SMTP_PASS)

## Content Guidelines

### Page Structure Pattern
Each guide page should follow the homepage component composition pattern:
- Import relevant components from `src/components/`
- Compose page using component hierarchy
- Maintain consistent styling with custom Tailwind classes

### Terminal/Code Examples
Use terminal window styling for WSL command demonstrations:
```tsx
<div className="terminal-window">
  <div className="terminal-header">
    <div className="terminal-dot bg-red-500"></div>
    <div className="terminal-dot bg-yellow-500"></div>
    <div className="terminal-dot bg-green-500"></div>
  </div>
  <div className="terminal-content">
    // WSL commands here
  </div>
</div>
```

## File Organization Rules

- **Pages**: Keep route pages minimal, compose from components
- **Components**: Single responsibility, WSL-focused functionality
- **Styling**: Use custom Tailwind classes defined in `globals.css`
- **Types**: TypeScript interfaces for contact form, email system
- **Documentation**: Technical docs in `/docs/` directory

## Deployment & Build

- **Target**: GitHub Pages static hosting
- **Build artifact**: `./out` directory
- **CI/CD**: GitHub Actions workflow (`.github/workflows/deploy.yml`)
- **Permissions**: Requires `pages: write` permission for deployment
