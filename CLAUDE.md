# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A personal blog and portfolio site built with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS 4.

## Commands

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Architecture

- **Framework**: Next.js 16 with App Router
- **Styling**: Tailwind CSS 4 with CSS-first configuration (no tailwind.config.js)
- **Fonts**: Geist Sans and Geist Mono via next/font/google

### Directory Structure

- `app/` - Next.js App Router pages and layouts
  - `layout.tsx` - Root layout with font configuration
  - `page.tsx` - Homepage
  - `globals.css` - Global styles and Tailwind theme configuration

### Path Aliases

`@/*` maps to project root (e.g., `import { X } from "@/app/utils"`)

### Tailwind CSS 4 Notes

Tailwind 4 uses CSS-based configuration via `@theme` directive in `globals.css`. Custom theme values like colors and fonts are defined there, not in a separate config file.
