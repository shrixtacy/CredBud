/**
 * @fileoverview Client-side error boundary for CreditBuddy.
 *
 * Next.js renders this component when a runtime error occurs inside a
 * route segment.  It provides:
 *   - A branded error message matching the site's visual language
 *   - A "Try Again" button that calls `reset()` to re-render the segment
 *   - A fallback "Go Home" link in case the error persists
 *
 * This must be a Client Component (`'use client'`) because it uses
 * the `useEffect` hook and the `reset` callback.
 *
 * @see https://nextjs.org/docs/app/building-your-application/routing/error-handling
 */

'use client';

import { useEffect } from 'react';
import Link from 'next/link';

/**
 * Props injected by Next.js into the error boundary.
 */
interface ErrorPageProps {
  /** The error that was thrown. */
  error: Error & { digest?: string };
  /** Callback to re-render the route segment and attempt recovery. */
  reset: () => void;
}

/**
 * Error boundary component.
 *
 * Logs the error to the console (and optionally to an external
 * monitoring service in production) and renders a user-friendly
 * recovery UI.
 */
export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    // Log to console for development debugging.
    // In production, replace with Sentry / LogRocket / your APM of choice.
    console.error('[CreditBuddy Error Boundary]', error);
  }, [error]);

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center bg-[#FBF7EF] px-6 text-center">
      {/* Decorative glyph */}
      <span className="font-jetbrains text-[10rem] sm:text-[14rem] md:text-[18rem] font-extrabold leading-none tracking-tighter text-[#14100F]/5 select-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        !!
      </span>

      <div className="relative z-10 flex flex-col items-center gap-6 max-w-xl">
        {/* Tag */}
        <span className="font-jetbrains text-xs font-normal border-[1.6px] border-[#14100F] rounded-full bg-[#FF5A3C] text-white px-4 py-1.5 inline-block">
          // runtime_error
        </span>

        {/* Headline */}
        <h1 className="font-bricolage text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#14100F] leading-[0.95]">
          Something went{' '}
          <span className="relative inline-block">
            wrong
            <span className="absolute bottom-0.5 left-0 right-0 h-[0.25em] bg-[#FF5A3C] rounded-sm -z-10 -rotate-1" />
          </span>
        </h1>

        {/* Subtext */}
        <p className="font-jakarta text-[#6B6259] text-base sm:text-lg leading-relaxed max-w-md">
          An unexpected error occurred. Don&apos;t worry — your data is safe.
          Try refreshing, or head back to the homepage.
        </p>

        {/* Error digest (dev only) */}
        {error.digest && (
          <p className="font-jetbrains text-xs text-[#14100F]/40 bg-[#14100F]/5 rounded-xl px-4 py-2 border border-[#14100F]/10">
            Error ID: {error.digest}
          </p>
        )}

        {/* Actions */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center bg-[#C8FF3D] border-[1.8px] border-[#14100F] shadow-[3.5px_3.5px_0px_0px_#14100F] hover:shadow-[5px_5px_0px_0px_#14100F] hover:-translate-x-[1px] hover:-translate-y-[1px] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_0px_#14100F] transition-all duration-200 rounded-full px-8 py-3 font-jetbrains font-extrabold text-sm tracking-wider text-[#14100F] uppercase select-none cursor-pointer"
          >
            ↻ Try Again
          </button>

          <Link
            href="/"
            className="inline-flex items-center justify-center bg-white border-[1.8px] border-[#14100F] shadow-[3.5px_3.5px_0px_0px_#14100F] hover:shadow-[5px_5px_0px_0px_#14100F] hover:-translate-x-[1px] hover:-translate-y-[1px] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_0px_#14100F] transition-all duration-200 rounded-full px-8 py-3 font-jetbrains font-extrabold text-sm tracking-wider text-[#14100F] uppercase select-none"
          >
            ← Go Home
          </Link>
        </div>
      </div>
    </main>
  );
}
