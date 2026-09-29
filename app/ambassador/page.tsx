/**
 * @fileoverview Campus Ambassador page for CreditBuddy.
 *
 * This page targets students interested in becoming campus leaders.
 * It covers:
 *   1. Ambassador hero / value proposition (AmbassadorHero)
 *   2. Role breakdown grid (AmbassadorRoleGrid)
 *   3. Perks quote (AmbassadorPerksQuote)
 *   4. Eligibility check (AmbassadorEligibilityCheck)
 *   5. FAQ accordion (AmbassadorFAQAccordion)
 *
 * SEO priority: 0.8 — recruitment / lead-gen page.
 *
 * @see {@link file:///d:/Vibe%20projects/CredBud/app/sitemap.ts} — Sitemap entry
 */

import { SmoothScroll } from '@/components/landing/shared/SmoothScroll';
import { GrainOverlay } from '@/components/landing/shared/GrainOverlay';
import { AmbassadorHero } from '@/components/ambassador/AmbassadorHero';
import { AmbassadorRoleGrid } from '@/components/ambassador/AmbassadorRoleGrid';
import { AmbassadorPerksQuote } from '@/components/ambassador/AmbassadorPerksQuote';
import { AmbassadorEligibilityCheck } from '@/components/ambassador/AmbassadorEligibilityCheck';
import { AmbassadorFAQAccordion } from '@/components/ambassador/AmbassadorFAQAccordion';
import { FinalCTA } from '@/components/landing/FinalCTA';
import { FooterShutter } from '@/components/landing/Footer/FooterShutter';
import {
  buildMetadata,
  generateWebPage,
  generateAmbassadorService,
  generateFAQPage,
} from '@/lib/seo';

// ─── SEO Metadata ────────────────────────────────────────────────────────────

export const metadata = buildMetadata({
  title: 'Campus Ambassador Program — Lead, Earn & Build Your Resume',
  description:
    'Join the CreditBuddy Campus Ambassador Program. Be the student leader who brings fair ' +
    'credit and financial literacy to your college campus. Earn rewards, gain leadership ' +
    'experience, build your resume, and make a real impact on student financial wellness.',
  path: '/ambassador',
  keywords: [
    'campus ambassador program CreditBuddy',
    'campus ambassador India',
    'college ambassador program',
    'student ambassador earn money',
    'student brand ambassador India',
    'campus leader program',
    'campus representative program',
    'student leadership opportunity India',
    'earn as campus ambassador',
    'campus ambassador benefits',
    'campus ambassador eligibility',
    'student ambassador resume builder',
    'college campus marketing program',
    'student ambassador recruitment India',
    'financial literacy ambassador',
    'campus influencer program India',
    'student ambassador perks rewards',
    'how to become campus ambassador',
    'campus ambassador application India',
    'student leadership earn rewards college',
    'brand ambassador for college students',
    'campus outreach program India',
    'student volunteer financial education',
    'ambassador program for undergraduates',
    'campus ambassador role description',
  ],
});

// ─── Structured Data ─────────────────────────────────────────────────────────

const webPageJsonLd = JSON.stringify(
  generateWebPage({
    title: 'Campus Ambassador Program — CreditBuddy',
    description:
      'Join the CreditBuddy Campus Ambassador Program. Lead, earn, and build your resume.',
    path: '/ambassador',
    breadcrumbs: [
      { name: 'Home', href: '/' },
      { name: 'Ambassadors', href: '/ambassador' },
    ],
  }),
);

const serviceJsonLd = JSON.stringify(generateAmbassadorService());

const ambassadorFaqJsonLd = JSON.stringify(
  generateFAQPage([
    {
      question: 'Who can become a CreditBuddy Campus Ambassador?',
      answer:
        'Any currently enrolled undergraduate or postgraduate student at a recognised Indian university or college can apply. You should be passionate about financial literacy and have good communication skills.',
    },
    {
      question: 'How much can I earn as a Campus Ambassador?',
      answer:
        'Campus Ambassadors earn through a combination of fixed stipends, performance-based bonuses, referral rewards, and exclusive perks. Top ambassadors can earn ₹5,000 to ₹15,000+ per month.',
    },
    {
      question: 'What are my responsibilities as an Ambassador?',
      answer:
        'Ambassadors help spread financial literacy on campus, organise workshops, onboard fellow students to the platform, and provide feedback to improve the CreditBuddy experience.',
    },
    {
      question: 'How do I apply for the Ambassador program?',
      answer:
        'Fill out the application form on the Ambassador page, complete the eligibility check, and our campus team will review your application. Selected candidates receive onboarding within 48 hours.',
    },
    {
      question: 'Does being an Ambassador look good on my resume?',
      answer:
        'Absolutely. Campus Ambassador experience demonstrates leadership, communication, marketing, and financial literacy skills. We also provide an official certificate and recommendation letter for top performers.',
    },
  ]),
);

// ─── Page Component ──────────────────────────────────────────────────────────

/**
 * Ambassador page component.
 *
 * Recruitment-focused page for the Campus Ambassador Program with
 * role details, eligibility checker, and FAQ.
 */
export default function AmbassadorPage() {
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
        dangerouslySetInnerHTML={{ __html: serviceJsonLd }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: ambassadorFaqJsonLd }}
      />

      <main className="relative w-full block bg-[#FAF7F2]">
        <AmbassadorHero />
        <AmbassadorRoleGrid />
        <AmbassadorPerksQuote />
        <AmbassadorEligibilityCheck />
        <AmbassadorFAQAccordion />

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
