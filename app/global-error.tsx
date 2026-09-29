/**
 * @fileoverview Root-level error boundary for CreditBuddy.
 *
 * This catches errors that occur in the **root layout** itself —
 * errors that `app/error.tsx` cannot handle because they happen
 * above it in the component tree.
 *
 * Unlike `error.tsx`, this component must render its own `<html>`
 * and `<body>` tags because the root layout may have failed.
 *
 * @see https://nextjs.org/docs/app/building-your-application/routing/error-handling#handling-errors-in-root-layouts
 */

'use client';

import { useEffect } from 'react';

/**
 * Props injected by Next.js into the global error boundary.
 */
interface GlobalErrorProps {
  /** The error that was thrown. */
  error: Error & { digest?: string };
  /** Callback to re-render the entire application. */
  reset: () => void;
}

/**
 * GlobalError boundary — last resort error handler.
 *
 * Renders a minimal, self-contained error page with inline styles
 * (no external CSS dependencies, since the root layout may have broken).
 */
export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    console.error('[CreditBuddy Global Error]', error);
  }, [error]);

  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          padding: 0,
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif",
          backgroundColor: '#FBF7EF',
          color: '#14100F',
        }}
      >
        <div
          style={{
            textAlign: 'center',
            maxWidth: '480px',
            padding: '2rem',
          }}
        >
          <p
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.7rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#FF5A3C',
              marginBottom: '1.5rem',
              fontWeight: 700,
            }}
          >
            // critical_error
          </p>

          <h1
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontSize: 'clamp(2rem, 6vw, 3.5rem)',
              fontWeight: 800,
              lineHeight: 0.95,
              letterSpacing: '-0.02em',
              marginBottom: '1rem',
            }}
          >
            Something broke.
          </h1>

          <p
            style={{
              color: '#6B6259',
              fontSize: '1rem',
              lineHeight: 1.6,
              marginBottom: '2rem',
            }}
          >
            A critical error occurred. Please try reloading the page. If the
            problem persists, contact us at{' '}
            <a
              href="mailto:info@creditbuddy.org.in"
              style={{ color: '#7B5CFF' }}
            >
              info@creditbuddy.org.in
            </a>
          </p>

          {error.digest && (
            <p
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.7rem',
                color: '#14100F66',
                marginBottom: '1.5rem',
                background: '#14100F0A',
                padding: '0.5rem 1rem',
                borderRadius: '12px',
                border: '1px solid #14100F1A',
              }}
            >
              Ref: {error.digest}
            </p>
          )}

          <button
            onClick={reset}
            style={{
              appearance: 'none',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#C8FF3D',
              border: '1.8px solid #14100F',
              boxShadow: '3.5px 3.5px 0px 0px #14100F',
              borderRadius: '9999px',
              padding: '0.75rem 2rem',
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 800,
              fontSize: '0.8rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase' as const,
              color: '#14100F',
            }}
          >
            ↻ Reload Page
          </button>
        </div>
      </body>
    </html>
  );
}
