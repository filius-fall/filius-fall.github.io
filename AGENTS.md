# AGENTS.md - Filius-fall.github.io

Personal blog built with Astro, deployed to GitHub Pages.

## Quick Start

```bash
npm install
npm run dev        # Start dev server at http://localhost:4321/filius-fall.github.io/
npm run build      # Build for production (outputs to dist/)
npm run preview    # Preview production build
```

## Project Structure

```
src/
├── components/      # Reusable Astro components (Header, Footer)
├── content/         # Content collections
│   ├── posts/       # Blog posts (Markdown files)
│   └── config.ts    # Content collection configuration
├── layouts/         # Page layouts (Layout.astro with global styles)
├── pages/           # Page routes
│   ├── index.astro  # Homepage with animations
│   ├── about.astro
│   ├── blog/
│   │   ├── index.astro    # Blog listing
│   │   └── [slug].astro   # Dynamic blog post pages
│   ├── resume.astro
│   └── contact.astro
└── styles/          # Global CSS (Tailwind + custom styles)
```

## Tech Stack

- **Astro 6.x** - Static site generator (SSG mode)
- **Tailwind CSS 4.x** - Styling via Vite plugin
- **TypeScript** - Strict mode enabled
- **@chenglou/pretext** - Text layout library

## Key Configuration

- **Base path**: `/filius-fall.github.io/` (GitHub Pages subdomain)
- **Output mode**: `static` (SSG, no server-side rendering)
- **Node version**: >=22.12.0

## Blog Posts

Blog posts are Markdown files in `src/content/posts/` with frontmatter:

```yaml
---
title: "Post Title"
pubDate: 2025-08-16
categories: ["Category1", "Category2"]
description: "Short description"
draft: false
---
```

Posts are automatically collected via the `blog` collection defined in `src/content.config.ts`.

## Deployment

Deploys automatically to GitHub Pages on push to `master` via GitHub Actions workflow (`.github/workflows/deploy.yml`).

Build output goes to `dist/` directory.
