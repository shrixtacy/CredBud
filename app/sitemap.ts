/**
 * @fileoverview Dynamic XML sitemap for CreditBuddy.
 *
 * Next.js 15 automatically serves this at `/sitemap.xml` when a
 * `sitemap.ts` file exists in the `app/` directory.
 *
 * The sitemap prioritises pages based on their role:
 *   - Home / main product pages → priority 1.0 – 0.9
 *   - Secondary pages (Blog, About, Contact) → priority 0.7 – 0.8
 *   - Legal / policy pages → priority 0.3
 *
 * Change frequencies are set based on expected content update cadence.
 *
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap
 */

import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo';

/**
 * Structured route definition for sitemap generation.
 */
interface SitemapEntry {
  /** Relative URL path. */
  path: string;
  /** How frequently the page is likely to change. */
  changeFrequency:
    | 'always'
    | 'hourly'
    | 'daily'
    | 'weekly'
    | 'monthly'
    | 'yearly'
    | 'never';
  /** Priority relative to other pages (0.0 – 1.0). */
  priority: number;
  /** ISO 8601 last modification date. */
  lastModified: string;
}

/**
 * All routes that should appear in the sitemap.
 *
 * Ordered by priority (descending).  The first 7 entries map directly
 * to the main navbar items; the last 3 are footer-linked legal pages.
 */
const ROUTES: SitemapEntry[] = [
  // ── Primary Navbar Routes ───────────────────────────────────────
  {
    path: '/',
    changeFrequency: 'weekly',
    priority: 1.0,
    lastModified: '2026-09-28',
  },
  {
    path: '/how-it-works',
    changeFrequency: 'monthly',
    priority: 0.9,
    lastModified: '2026-09-28',
  },
  {
    path: '/students',
    changeFrequency: 'monthly',
    priority: 0.9,
    lastModified: '2026-09-28',
  },
  {
    path: '/ambassador',
    changeFrequency: 'monthly',
    priority: 0.8,
    lastModified: '2026-09-28',
  },
  {
    path: '/blog',
    changeFrequency: 'weekly',
    priority: 0.7,
    lastModified: '2026-09-28',
  },
  {
    path: '/about',
    changeFrequency: 'monthly',
    priority: 0.8,
    lastModified: '2026-09-28',
  },
  {
    path: '/contact',
    changeFrequency: 'yearly',
    priority: 0.7,
    lastModified: '2026-09-28',
  },

  // ── Legal / Policy Pages ────────────────────────────────────────
  {
    path: '/terms',
    changeFrequency: 'yearly',
    priority: 0.3,
    lastModified: '2026-08-01',
  },
  {
    path: '/privacy',
    changeFrequency: 'yearly',
    priority: 0.3,
    lastModified: '2026-08-01',
  },
  {
    path: '/refund-policy',
    changeFrequency: 'yearly',
    priority: 0.3,
    lastModified: '2026-08-01',
  },
];

/**
 * Generate the sitemap entries consumed by Next.js at build / request time.
 *
 * @returns Array of sitemap entries with absolute URLs.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((route) => ({
    url: `${SITE_URL}${route.path === '/' ? '' : route.path}`,
    lastModified: new Date(route.lastModified),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
