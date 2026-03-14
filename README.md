# Rapkology

Rapkology is a content-driven rap culture platform built with Next.js App Router.
It includes a homepage, a blog listing page, and dynamic blog detail pages with SEO metadata generation.

## Live Demo

You can check out the live demo of this project here:
[Live Demo](https://rapkology-sigma.vercel.app/)

## Tech Stack

- Next.js 15 (App Router + Turbopack)
- React 19
- TypeScript
- Tailwind CSS 4
- TanStack Query
- Radix UI + custom UI components
- Swiper

## Features

- Multi-section homepage (`Hero`, `Live Stream`, `Trends`, `Favorites`, `Explore`)
- Blog listing page with reusable explore/feed components
- Dynamic blog detail route: `/blog/[slug]`
- Server-side SEO metadata generation per post
- API route for paginated posts: `/api/blogs?page=1&limit=6`
- Remote image support for Spotify and Cloudinary domains
- SVG imports as React components via `@svgr/webpack`

## Data Source

Post data is currently fetched from an external dummy endpoint in:

- `src/lib/fetch-posts.ts`

If you want to migrate to a real CMS or backend, this file is the main integration point.

## Getting Started

### Prerequisites

- Node.js 20+
- npm 10+

### Installation

Clone the repository:

```bash
git clone https://github.com/zulalnb/rapkology.git
cd rapkology
```

Install dependencies:

```bash
npm install
```

Run in Development:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app in the browser.

### Production Build

```bash
npm run build
npm run start
```

### Lint

```bash
npm run lint
```

## Project Structure

```text
src/
  app/
    api/blogs/route.ts        # Blog API route (pagination)
    blog/
      [slug]/page.tsx         # Blog detail page
      page.tsx                # Blog listing page
    page.tsx                  # Homepage
    layout.tsx                # Global layout + metadata
  components/                 # UI and domain components
  lib/
    fetch-posts.ts            # Post fetching + filtering logic
  data/                       # Static content/config data
  assets/                     # SVG and static assets imported in code
```

## Notes

- The default app language is Turkish (`<html lang="tr">`) and metadata/content reflects that.
- The current post source is mock/dummy content for development purposes.
