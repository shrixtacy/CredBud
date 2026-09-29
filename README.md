<div align="center">
  <img src="/public/images/creditbuddy-logo.png" alt="CreditBuddy Logo" width="120" />
  <h1>CreditBuddy</h1>
  <p><strong>India's Student-First Financial Ecosystem</strong></p>
  <p>Instant micro-credit · Campus gigs · Financial literacy · CIBIL score building</p>
  <br />
  <p>
    <a href="https://creditbuddy.org.in">Website</a> ·
    <a href="https://creditbuddy.org.in/about">About</a> ·
    <a href="https://creditbuddy.org.in/contact">Contact</a> ·
    <a href="https://creditbuddy.org.in/blog">Blog</a>
  </p>
</div>

---

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Routes & Sitemap](#routes--sitemap)
- [SEO Architecture](#seo-architecture)
- [Error Handling](#error-handling)
- [Security Headers](#security-headers)
- [Company Information](#company-information)

---

## Overview

CreditBuddy is a **student-first financial ecosystem** built for Indian college students. The platform combines:

- **Instant Micro-Credit** — Small, short-term loans with transparent terms
- **Campus Gig Marketplace** — Micro-jobs (brand promotions, surveys, tutoring) to earn and offset repayments
- **Financial Literacy** — Bite-sized, 5-minute learning modules with reward coins
- **CIBIL Score Building** — Build credit history early, before graduation

This repository contains the **marketing website** — a cinematic, neo-brutalist, editorial-design web experience built with Next.js 15.

---

## Tech Stack

| Category       | Technology                                           |
| -------------- | ---------------------------------------------------- |
| **Framework**  | [Next.js 15](https://nextjs.org/) (App Router)      |
| **Language**   | [TypeScript 5.9](https://www.typescriptlang.org/)    |
| **Styling**    | [Tailwind CSS 4](https://tailwindcss.com/)           |
| **Animation**  | [GSAP 3](https://greensock.com/gsap/) · [Motion 12](https://motion.dev/) |
| **Smooth Scroll** | [Lenis](https://lenis.studiofreight.com/)         |
| **Fonts**      | Bricolage Grotesque · Plus Jakarta Sans · JetBrains Mono |
| **Icons**      | [Lucide React](https://lucide.dev/)                  |
| **AI**         | [Google GenAI SDK](https://ai.google.dev/)           |

---

## Project Structure

```
CredBud/
├── app/                          # Next.js App Router pages
│   ├── layout.tsx                # Root layout (global metadata, fonts, JSON-LD)
│   ├── page.tsx                  # Home page (landing sections)
│   ├── sitemap.ts                # Dynamic XML sitemap
│   ├── robots.ts                 # robots.txt configuration
│   ├── not-found.tsx             # Custom 404 page
│   ├── error.tsx                 # Client-side error boundary
│   ├── global-error.tsx          # Root-level error boundary
│   ├── globals.css               # Global styles & design tokens
│   ├── about/page.tsx            # About Us page
│   ├── ambassador/page.tsx       # Campus Ambassador Program
│   ├── blog/page.tsx             # Student Financial Journal
│   ├── contact/page.tsx          # Contact form & company details
│   ├── how-it-works/page.tsx     # Product explainer + loan calculator
│   ├── students/page.tsx         # Core student audience page
│   ├── privacy/page.tsx          # Privacy Policy
│   ├── terms/page.tsx            # Terms & Conditions
│   └── refund-policy/page.tsx    # Refund Policy
│
├── components/                   # React components
│   ├── landing/                  # Home page sections
│   │   ├── Navbar.tsx            # Global navigation bar
│   │   ├── Hero.tsx              # Hero section with video
│   │   ├── Footer/               # Footer components
│   │   ├── Showcase/             # Feature showcase sections
│   │   ├── StickyStack/          # Sticky scroll feature cards
│   │   ├── HorizontalJourney/   # Horizontal scroll section
│   │   └── shared/              # Shared utilities (SmoothScroll, GrainOverlay)
│   ├── about/                    # About page sections
│   ├── ambassador/               # Ambassador page sections
│   ├── contact/                  # Contact page sections
│   ├── how-it-works/             # How It Works page sections
│   ├── students/                 # Students page sections
│   └── ui/                       # Generic UI primitives
│
├── lib/                          # Shared utilities & modules
│   ├── utils.ts                  # Tailwind class merger (cn())
│   └── seo/                      # SEO infrastructure
│       ├── index.ts              # Barrel export
│       ├── constants.ts          # Site-wide SEO constants
│       ├── metadata.ts           # Metadata factory (buildMetadata)
│       └── structured-data.ts    # JSON-LD generators
│
├── public/                       # Static assets
│   ├── images/                   # Logos, screenshots, stickers
│   ├── manifest.json             # PWA web app manifest
│   └── *.png / *.mp4             # Hero backgrounds, videos
│
├── next.config.ts                # Next.js configuration (headers, images, security)
├── tsconfig.json                 # TypeScript configuration
├── package.json                  # Dependencies & scripts
└── postcss.config.mjs            # PostCSS + Tailwind CSS config
```

---

## Getting Started

### Prerequisites

- **Node.js** ≥ 18.x
- **npm** ≥ 9.x

### Installation

```bash
# Clone the repository
git clone https://github.com/shrixtacy/CredBud.git
cd CredBud

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local
# Edit .env.local and set your GEMINI_API_KEY
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

---

## Available Scripts

| Script         | Description                                      |
| -------------- | ------------------------------------------------ |
| `npm run dev`  | Start development server with hot module reload  |
| `npm run build`| Create optimised production build                |
| `npm start`    | Start production server                          |
| `npm run lint` | Run ESLint across the codebase                   |
| `npm run clean`| Clear the `.next` build cache                    |

---

## Routes & Sitemap

The site generates a dynamic sitemap at `/sitemap.xml` with the following routes:

| Route            | Page                  | Priority | Change Frequency |
| ---------------- | --------------------- | -------- | ---------------- |
| `/`              | Home                  | 1.0      | Weekly           |
| `/how-it-works`  | How It Works          | 0.9      | Monthly          |
| `/students`      | Students              | 0.9      | Monthly          |
| `/ambassador`    | Campus Ambassadors    | 0.8      | Monthly          |
| `/blog`          | Student Financial Blog| 0.7      | Weekly           |
| `/about`         | About Us              | 0.8      | Monthly          |
| `/contact`       | Contact Us            | 0.7      | Yearly           |
| `/terms`         | Terms & Conditions    | 0.3      | Yearly           |
| `/privacy`       | Privacy Policy        | 0.3      | Yearly           |
| `/refund-policy` | Refund Policy         | 0.3      | Yearly           |

---

## SEO Architecture

### Metadata

Every page uses the `buildMetadata()` factory from `lib/seo/metadata.ts` which generates:

- **Title** with consistent template (`Page | CreditBuddy`)
- **Meta description** optimised for search snippets
- **Canonical URL** to prevent duplicate content
- **Open Graph** tags (title, description, image, type, locale)
- **Twitter Card** metadata (summary_large_image)
- **Robots directives** (index/follow with max-preview settings)
- **Keywords** (80+ targeted keywords across all pages)
- **Icons** (favicon, apple-touch-icon)
- **Manifest** reference for PWA

### Structured Data (JSON-LD)

Every page injects Schema.org structured data:

| Schema Type         | Where Used                    | Purpose                       |
| ------------------- | ----------------------------- | ----------------------------- |
| `Organization`      | Root Layout (global)          | Knowledge Panel               |
| `WebSite`           | Root Layout (global)          | Sitelinks Searchbox           |
| `FinancialProduct`  | Root Layout (global)          | Product rich results          |
| `WebPage`           | Every page                    | Page identity + breadcrumbs   |
| `BreadcrumbList`    | Every page (via WebPage)      | Breadcrumb trail in SERPs     |
| `HowTo`             | How It Works                  | Step-by-step rich results     |
| `FAQPage`           | How It Works, Ambassadors     | FAQ rich snippets             |
| `BlogPosting`       | Blog (per article)            | Article rich results          |
| `Service`           | Ambassadors                   | Service listing               |
| `AboutPage`         | About                         | About page identity           |
| `ContactPage`       | Contact                       | Contact page identity         |

### robots.txt

Generated dynamically at `/robots.txt`:
- Allows all crawlers on public pages
- Blocks `/_next/` and `/api/` paths
- References `/sitemap.xml`

---

## Error Handling

| File                 | Type                     | Purpose                                        |
| -------------------- | ------------------------ | ---------------------------------------------- |
| `app/not-found.tsx`  | Server Component         | Custom 404 page (noindex)                      |
| `app/error.tsx`      | Client Error Boundary    | Runtime error recovery with "Try Again" button |
| `app/global-error.tsx`| Root Error Boundary     | Last-resort catch-all (self-contained HTML)    |

All error pages match the neo-brutalist design language with branded messaging.

---

## Security Headers

Applied to all responses via `next.config.ts`:

| Header                       | Value                                      |
| ---------------------------- | ------------------------------------------ |
| `X-Frame-Options`            | `DENY`                                     |
| `X-Content-Type-Options`     | `nosniff`                                  |
| `Strict-Transport-Security`  | `max-age=31536000; includeSubDomains; preload` |
| `Referrer-Policy`            | `strict-origin-when-cross-origin`          |
| `Permissions-Policy`         | `camera=(), microphone=(), geolocation=()` |
| `X-XSS-Protection`           | `1; mode=block`                            |
| `X-DNS-Prefetch-Control`     | `on`                                       |

Static assets (images, fonts, videos) have aggressive caching headers (`max-age=31536000, immutable`).

---

## Company Information

| Field              | Value                                                                      |
| ------------------ | -------------------------------------------------------------------------- |
| **Legal Name**     | CreditBuddy Partners Private Limited                                       |
| **CIN**            | U62090OD2026PTC053104                                                      |
| **GSTIN**          | 21AANCC6754D1ZS                                                            |
| **Registered Office** | PLOT NO. 1380/6628, Matru Vihar, Shanti Nagar, Budharaja, Sambalpur, Odisha 768004 |
| **Email**          | info@creditbuddy.org.in · creditbuddyofficial@gmail.com                    |
| **Website**        | [creditbuddy.org.in](https://creditbuddy.org.in)                           |

---

<div align="center">
  <sub>Built with ❤️ for Indian college students · © 2026 CreditBuddy Partners Pvt Ltd</sub>
</div>
