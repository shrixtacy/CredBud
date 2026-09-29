/**
 * @fileoverview Site-wide SEO constants for CreditBuddy.
 *
 * This module is the **single source of truth** for every piece of
 * organisation-level metadata that appears across the site:
 *   - Base URL / canonical origin
 *   - Brand identity (name, legal entity, tagline)
 *   - Company registration details (CIN, GSTIN, address)
 *   - Social media profile URLs
 *   - Brand colour tokens used in `theme-color` / OG meta
 *   - Default Open Graph image path
 *
 * Import from `@/lib/seo` (barrel) or directly from this file.
 */

// ---------------------------------------------------------------------------
// Site Origin
// ---------------------------------------------------------------------------

/**
 * Canonical base URL for the production site.
 * Used to construct absolute canonical URLs, sitemap entries, and OG URLs.
 */
export const SITE_URL = 'https://creditbuddy.org.in' as const;

// ---------------------------------------------------------------------------
// Brand Identity
// ---------------------------------------------------------------------------

/** Public-facing brand name used in `<title>` tags and structured data. */
export const SITE_NAME = 'CreditBuddy' as const;

/** Legal entity name as registered with the MCA. */
export const LEGAL_ENTITY_NAME = 'CreditBuddy Partners Private Limited' as const;

/** One-liner tagline appended to page titles and used in meta descriptions. */
export const SITE_TAGLINE = "India's Student-First Financial Ecosystem" as const;

/**
 * Full default description used when a page does not provide its own.
 * Targets primary SEO keywords:
 *   student credit, campus gigs, financial literacy, CIBIL score,
 *   college students, India, micro-loans, campus ambassador
 */
export const SITE_DESCRIPTION =
  "CreditBuddy is India's pioneering student-first financial ecosystem. Get instant micro-credit, earn through campus gigs, build your CIBIL score early, and master financial literacy — all designed exclusively for Indian college students.";

// ---------------------------------------------------------------------------
// Company Registration Details
// ---------------------------------------------------------------------------

/** Corporate Identification Number (CIN). */
export const COMPANY_CIN = 'U62090OD2026PTC053104' as const;

/** Goods and Services Tax Identification Number (GSTIN). */
export const COMPANY_GSTIN = '21AANCC6754D1ZS' as const;

/** Physical registered office address. */
export const COMPANY_ADDRESS = {
  streetAddress:
    'PLOT NO. 1380/6628 Near Gram Devi Mandir, Matru Vihar, Shanti Nagar, Budharaja',
  addressLocality: 'Sambalpur',
  addressRegion: 'Odisha',
  postalCode: '768004',
  addressCountry: 'IN',
} as const;

/** Primary contact e-mail addresses. */
export const CONTACT_EMAILS = [
  'info@creditbuddy.org.in',
  'creditbuddyofficial@gmail.com',
] as const;

// ---------------------------------------------------------------------------
// Social Media
// ---------------------------------------------------------------------------

/**
 * Social profile URLs referenced in JSON-LD `sameAs` and footer links.
 * Update these when official brand handles are finalised.
 */
export const SOCIAL_LINKS = {
  instagram: 'https://instagram.com/creditbuddy',
  twitter: 'https://twitter.com/creditbuddy',
  linkedin: 'https://linkedin.com/company/creditbuddy',
} as const;

// ---------------------------------------------------------------------------
// Brand Colours (used in theme-color, OG, manifest)
// ---------------------------------------------------------------------------

/** Primary background colour (warm off-white). */
export const COLOR_BG_PRIMARY = '#FBF7EF' as const;

/** Accent lime green used for CTAs and highlights. */
export const COLOR_ACCENT_LIME = '#C8FF3D' as const;

/** Accent purple used for interactive elements. */
export const COLOR_ACCENT_PURPLE = '#7B5CFF' as const;

/** Dark ink colour used for text and borders. */
export const COLOR_INK = '#14100F' as const;

// ---------------------------------------------------------------------------
// Default OG Image
// ---------------------------------------------------------------------------

/**
 * Absolute path (relative to `public/`) for the default Open Graph share
 * image. Should be 1200 × 630 px for optimal rendering on all platforms.
 */
export const DEFAULT_OG_IMAGE = '/images/og-default.png' as const;

// ---------------------------------------------------------------------------
// Locale
// ---------------------------------------------------------------------------

/** Default locale for `og:locale` and `<html lang>`. */
export const DEFAULT_LOCALE = 'en_IN' as const;

/** Language tag used in `<html lang>`. */
export const HTML_LANG = 'en' as const;
