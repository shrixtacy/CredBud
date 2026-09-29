/**
 * @fileoverview About page for CreditBuddy.
 *
 * Company story, mission, values, team, advisors, and differentiators.
 *
 * Sections:
 *   1. AboutHero — Mission headline
 *   2. AboutStoryMission — Founding story & mission statement
 *   3. AboutValuesGrid — Core values cards
 *   4. AboutTeamSection — Leadership team bios
 *   5. AboutAdvisorsSection — Advisory board
 *   6. AboutWhyDifferent — Differentiation points
 *
 * SEO priority: 0.8 — brand authority page.
 *
 * @see {@link file:///d:/Vibe%20projects/CredBud/app/sitemap.ts} — Sitemap entry
 */

import { SmoothScroll } from '@/components/landing/shared/SmoothScroll';
import { GrainOverlay } from '@/components/landing/shared/GrainOverlay';
import { AboutHero } from '@/components/about/AboutHero';
import { AboutStoryMission } from '@/components/about/AboutStoryMission';
import { AboutValuesGrid } from '@/components/about/AboutValuesGrid';
import { AboutTeamSection } from '@/components/about/AboutTeamSection';
import { AboutAdvisorsSection } from '@/components/about/AboutAdvisorsSection';
import { AboutWhyDifferent } from '@/components/about/AboutWhyDifferent';
import { FinalCTA } from '@/components/landing/FinalCTA';
import { FooterShutter } from '@/components/landing/Footer/FooterShutter';
import { buildMetadata, generateWebPage, generateAboutPage } from '@/lib/seo';

// ─── SEO Metadata ────────────────────────────────────────────────────────────

export const metadata = buildMetadata({
  title: 'About Us — Built by Students, for Students',
  description:
    "Learn why CreditBuddy exists, our founding story, mission to democratise student finance, " +
    'core values of transparency and inclusion, our leadership team, advisory board, and ' +
    'what makes us fundamentally different from traditional lenders.',
  path: '/about',
  keywords: [
    'about CreditBuddy',
    'CreditBuddy founding story',
    'CreditBuddy mission',
    'CreditBuddy team',
    'CreditBuddy leadership',
    'CreditBuddy advisors',
    'student fintech company India',
    'CreditBuddy Partners Private Limited',
    'who founded CreditBuddy',
    'CreditBuddy values',
    'student-first financial company',
    'fintech startup India 2026',
    'Sambalpur fintech startup',
    'Odisha startup CreditBuddy',
    'built by students for students',
    'student financial inclusion India',
    'why CreditBuddy is different',
    'CreditBuddy company info',
    'CreditBuddy CIN GSTIN',
    'student lending startup India',
  ],
});

// ─── Structured Data ─────────────────────────────────────────────────────────

const webPageJsonLd = JSON.stringify(
  generateWebPage({
    title: 'About Us — CreditBuddy',
    description:
      "Learn about CreditBuddy's mission, team, values, and what makes us different.",
    path: '/about',
    breadcrumbs: [
      { name: 'Home', href: '/' },
      { name: 'About', href: '/about' },
    ],
  }),
);

const aboutPageJsonLd = JSON.stringify(generateAboutPage());

// ─── Page Component ──────────────────────────────────────────────────────────

/**
 * About page component.
 *
 * Brand authority page covering company story, mission, values,
 * team members, advisors, and competitive differentiators.
 */
export default function AboutPage() {
  return (
    <SmoothScroll>
      <GrainOverlay />

      {/* Page-level structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: webPageJsonLd }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: aboutPageJsonLd }}
      />

      <main className="relative w-full block bg-[#FBF7EF]">
        <AboutHero />
        <AboutStoryMission />
        <AboutValuesGrid />
        <AboutTeamSection />
        <AboutAdvisorsSection />
        <AboutWhyDifferent />

        {/* Shutter setup for FinalCTA and Footer */}
        <div className="relative w-full h-[200vh]">
          <div className="sticky top-0 h-screen w-full">
            <FinalCTA />
          </div>
          <div className="absolute bottom-0 w-full z-20">
            <FooterShutter />
          </div>
        </div>
      </main>
    </SmoothScroll>
  );
}
