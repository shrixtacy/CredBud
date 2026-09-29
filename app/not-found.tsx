/**
 * @fileoverview Custom 404 Not Found page for CreditBuddy.
 *
 * Rendered by Next.js whenever a user navigates to a route that does not
 * match any defined page.  The design matches the site's neo-brutalist
 * visual language with the existing colour palette and typography.
 *
 * This is a **Server Component** — no `'use client'` directive needed.
 */

import Link from 'next/link';
import type { Metadata } from 'next';

/** SEO metadata for the 404 page — noindex to prevent crawl waste. */
export const metadata: Metadata = {
  title: '404 — Page Not Found | CreditBuddy',
  description:
    'The page you are looking for does not exist. Navigate back to CreditBuddy.',
  robots: { index: false, follow: true },
};

/**
 * NotFound component.
 *
 * Displays a branded 404 message with a clear CTA to return home.
 * Uses the same font classes and colour tokens as the rest of the site.
 */
export default function NotFound() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center bg-[#FBF7EF] px-6 text-center">
      {/* Decorative accent number */}
      <span className="font-jetbrains text-[10rem] sm:text-[14rem] md:text-[18rem] font-extrabold leading-none tracking-tighter text-[#14100F]/5 select-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        404
      </span>

      <div className="relative z-10 flex flex-col items-center gap-6 max-w-xl">
        {/* Tag */}
        <span className="font-jetbrains text-xs font-normal border-[1.6px] border-[#14100F] rounded-full bg-[#7B5CFF] text-white px-4 py-1.5 inline-block">
          // page_not_found
        </span>

        {/* Headline */}
        <h1 className="font-bricolage text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#14100F] leading-[0.95]">
          Lost in the{' '}
          <span className="relative inline-block">
            campus
            <span className="absolute bottom-0.5 left-0 right-0 h-[0.25em] bg-[#7B5CFF] rounded-sm -z-10 -rotate-1" />
          </span>
          ?
        </h1>

        {/* Subtext */}
        <p className="font-jakarta text-[#6B6259] text-base sm:text-lg leading-relaxed max-w-md">
          The page you&apos;re looking for doesn&apos;t exist, was moved, or is
          taking a study break. Let&apos;s get you back on track.
        </p>

        {/* CTA */}
        <Link
          href="/"
          className="inline-flex items-center justify-center bg-[#C8FF3D] border-[1.8px] border-[#14100F] shadow-[3.5px_3.5px_0px_0px_#14100F] hover:shadow-[5px_5px_0px_0px_#14100F] hover:-translate-x-[1px] hover:-translate-y-[1px] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_0px_#14100F] transition-all duration-200 rounded-full px-8 py-3 font-jetbrains font-extrabold text-sm tracking-wider text-[#14100F] uppercase select-none"
        >
          ← Back to Home
        </Link>

        {/* Quick links */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-4 font-jakarta text-sm text-[#6B6259]">
          <Link href="/how-it-works" className="hover:text-[#7B5CFF] transition-colors underline underline-offset-4">
            How It Works
          </Link>
          <span className="text-[#14100F]/20">•</span>
          <Link href="/students" className="hover:text-[#7B5CFF] transition-colors underline underline-offset-4">
            Students
          </Link>
          <span className="text-[#14100F]/20">•</span>
          <Link href="/contact" className="hover:text-[#7B5CFF] transition-colors underline underline-offset-4">
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  );
}
