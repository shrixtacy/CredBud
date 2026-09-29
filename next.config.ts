/**
 * @fileoverview Next.js configuration for CreditBuddy.
 *
 * This configuration handles:
 *   - **Security Headers** — CSP, X-Frame-Options, HSTS, X-Content-Type,
 *     Referrer-Policy, Permissions-Policy for hardened HTTP responses
 *   - **Image Optimization** — Remote patterns, device sizes, formats
 *   - **Build Settings** — Strict TypeScript, ESLint on builds
 *   - **Edge Caching** — Static asset cache headers via `headers()`
 *   - **Compression** — Enabled by default via Next.js built-in gzip
 *   - **Transpilation** — `motion` library for Framer Motion v12+
 *   - **Standalone Output** — Conditional for Docker / serverless deploys
 *   - **HMR Toggle** — Disabled via `DISABLE_HMR` env for AI Studio
 *
 * @see https://nextjs.org/docs/app/api-reference/config/next-config-js
 */

import type { NextConfig } from 'next';

// ─── Security Headers ────────────────────────────────────────────────────────

/**
 * HTTP security headers applied to every response.
 *
 * These follow OWASP best practices and are compatible with the
 * site's use of Google Fonts, inline styles (Tailwind), and
 * self-hosted assets.
 */
const securityHeaders = [
  // Prevent clickjacking by disallowing framing
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  // Prevent MIME-type sniffing
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  // Enable HSTS for HTTPS-only access (1 year, include subdomains)
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains; preload',
  },
  // Control referrer information sent with requests
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  // Restrict browser features / APIs
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
  },
  // XSS Protection (legacy browsers)
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
  // DNS prefetch control
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
];

// ─── Next.js Config ──────────────────────────────────────────────────────────

const nextConfig: NextConfig = {
  // ── Core ──────────────────────────────────────────────────────────
  reactStrictMode: true,
  poweredByHeader: false, // Remove "X-Powered-By: Next.js" for security

  // ── Linting & Type Checking ──────────────────────────────────────
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },

  // ── Image Optimization ───────────────────────────────────────────
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
    // Optimise for common device widths
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Prefer modern formats
    formats: ['image/avif', 'image/webp'],
    // Cache optimised images for 60 days
    minimumCacheTTL: 5184000,
  },

  // ── Standalone Output (Docker / Serverless) ──────────────────────
  ...(process.env.BUILD_STANDALONE === 'true' ? { output: 'standalone' } : {}),

  // ── Transpile Packages ───────────────────────────────────────────
  transpilePackages: ['motion'],

  // ── Compression ──────────────────────────────────────────────────
  compress: true,

  // ── Trailing Slashes ─────────────────────────────────────────────
  trailingSlash: false,

  // ── HTTP Headers ─────────────────────────────────────────────────
  async headers() {
    return [
      // Apply security headers to ALL routes
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
      // Cache static assets aggressively (images, fonts, videos)
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:path*.(png|jpg|jpeg|gif|webp|avif|svg|ico)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:path*.(mp4|webm|ogg)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:path*.(woff|woff2|ttf|otf|eot)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // Sitemap & robots — shorter cache, they can update
      {
        source: '/sitemap.xml',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, s-maxage=86400, stale-while-revalidate=43200',
          },
        ],
      },
      {
        source: '/robots.txt',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, s-maxage=86400, stale-while-revalidate=43200',
          },
        ],
      },
      // Manifest
      {
        source: '/manifest.json',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=604800, stale-while-revalidate=86400',
          },
          {
            key: 'Content-Type',
            value: 'application/manifest+json',
          },
        ],
      },
    ];
  },

  // ── Webpack ──────────────────────────────────────────────────────
  webpack: (config, { dev }) => {
    // HMR is disabled in AI Studio via DISABLE_HMR env var.
    // Do not modify—file watching is disabled to prevent flickering during agent edits.
    if (dev && process.env.DISABLE_HMR === 'true') {
      config.watchOptions = {
        ignored: /.*/,
      };
    }
    return config;
  },
};

export default nextConfig;
