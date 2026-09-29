/**
 * @fileoverview "How It Works" page for CreditBuddy.
 *
 * This page explains the core product mechanics:
 *   1. Instant micro-credit borrowing
 *   2. Interactive loan calculator
 *   3. Campus gig marketplace
 *   4. Financial literacy modules
 *   5. Student testimonials
 *   6. FAQ section
 *
 * SEO priority: 0.9 (second-highest after Home).
 * Targets keywords: student credit, how it works, campus gigs,
 * loan calculator, micro loans, financial literacy.
 *
 * @see {@link file:///d:/Vibe%20projects/CredBud/app/sitemap.ts} — Sitemap entry
 */

import { SmoothScroll } from '@/components/landing/shared/SmoothScroll';
import { GrainOverlay } from '@/components/landing/shared/GrainOverlay';
import { HowItWorksHero } from '@/components/how-it-works/HowItWorksHero';
import { InteractiveLoanCalculator } from '@/components/how-it-works/InteractiveLoanCalculator';
import { CampusGigsBento } from '@/components/how-it-works/CampusGigsBento';
import { LearnAndBuildCredit } from '@/components/how-it-works/LearnAndBuildCredit';
import { CyanTestimonials } from '@/components/how-it-works/CyanTestimonials';
import { HowItWorksFAQEditorial } from '@/components/how-it-works/HowItWorksFAQEditorial';
import { FinalCTA } from '@/components/landing/FinalCTA';
import { FooterShutter } from '@/components/landing/Footer/FooterShutter';
import {
  buildMetadata,
  generateWebPage,
  generateHowTo,
  generateFAQPage,
} from '@/lib/seo';

// ─── SEO Metadata ────────────────────────────────────────────────────────────

export const metadata = buildMetadata({
  title: 'How It Works — Student Credit, Campus Gigs & Financial Literacy',
  description:
    'Discover how CreditBuddy helps Indian college students borrow instant micro-credit, ' +
    'earn through campus gigs, learn real money skills, build their CIBIL score early, ' +
    'and repay loans flexibly. Step-by-step guide to the student-first financial ecosystem.',
  path: '/how-it-works',
  keywords: [
    'how CreditBuddy works',
    'student credit how it works',
    'student loan process India',
    'campus gig marketplace',
    'micro loan application process',
    'student loan calculator India',
    'instant student credit application',
    'earn and repay student loan',
    'campus micro gig economy',
    'financial literacy course students',
    'CIBIL score building steps',
    'student credit onboarding',
    'how to borrow money as student',
    'student lending process India',
    'campus reward system',
    'financial wellness students India',
    'student loan interest calculator',
    'micro credit application India',
    'step by step student loan guide',
    'how to build credit score as student',
  ],
});

// ─── Structured Data ─────────────────────────────────────────────────────────

/**
 * WebPage JSON-LD with breadcrumbs for the How It Works page.
 */
const webPageJsonLd = JSON.stringify(
  generateWebPage({
    title: 'How It Works — CreditBuddy',
    description:
      'Step-by-step guide to borrowing, earning, learning, and building credit with CreditBuddy.',
    path: '/how-it-works',
    breadcrumbs: [
      { name: 'Home', href: '/' },
      { name: 'How It Works', href: '/how-it-works' },
    ],
  }),
);

/**
 * HowTo JSON-LD for step-by-step rich results in Google Search.
 */
const howToJsonLd = JSON.stringify(
  generateHowTo(
    'How to Get Started with CreditBuddy',
    'A step-by-step guide to borrowing instant micro-credit, earning through campus gigs, and building your CIBIL score with CreditBuddy.',
    [
      {
        name: 'Sign Up & Verify Your Student ID',
        text: 'Download the CreditBuddy app, create your account, and verify your student identity with your college ID card and basic KYC documents. Verification takes less than 2 minutes.',
      },
      {
        name: 'Get Your Credit Limit',
        text: 'Once verified, receive your personalised credit limit instantly. No CIBIL history needed — CreditBuddy uses alternative data to assess your creditworthiness.',
      },
      {
        name: 'Borrow What You Need',
        text: 'Request a micro-loan within your credit limit. Funds are disbursed directly to your bank account within minutes. Transparent interest rates with zero hidden charges.',
      },
      {
        name: 'Earn Through Campus Gigs',
        text: 'Browse the campus gig marketplace for micro-jobs like brand promotions, surveys, content creation, and event assistance. Earnings can offset your loan repayments.',
      },
      {
        name: 'Learn & Build Your Credit Score',
        text: 'Complete 5-minute financial literacy modules to earn reward coins. Every on-time repayment builds your CIBIL score, giving you a credit history before you graduate.',
      },
      {
        name: 'Repay Flexibly',
        text: 'Choose from multiple repayment options — UPI, net banking, or gig earnings. Set up auto-pay or pay early with zero prepayment penalties.',
      },
    ],
  ),
);

/**
 * FAQ JSON-LD for FAQ rich snippets.
 * These must match the visible FAQ accordion content.
 */
const faqJsonLd = JSON.stringify(
  generateFAQPage([
    {
      question: 'What is CreditBuddy and how does it work?',
      answer:
        'CreditBuddy is India\'s student-first financial ecosystem that combines instant micro-credit, campus gig earnings, and financial literacy into one platform. Students can borrow small amounts, repay through earnings or UPI, and build their CIBIL score while still in college.',
    },
    {
      question: 'Do I need a CIBIL score to get a loan?',
      answer:
        'No. CreditBuddy uses alternative data points like your student verification, academic standing, and platform engagement to assess creditworthiness. This is specifically designed for first-time borrowers with no credit history.',
    },
    {
      question: 'How do campus gigs help me repay?',
      answer:
        'The CreditBuddy gig marketplace lists micro-jobs on your campus — brand promotions, surveys, tutoring, content creation, and more. Earnings from these gigs can be applied directly to your loan balance, making repayment easier.',
    },
    {
      question: 'Is CreditBuddy RBI regulated?',
      answer:
        'CreditBuddy acts as a technology facilitator. All credit lines and loans are disbursed through regulated NBFC partners in full compliance with Reserve Bank of India (RBI) guidelines.',
    },
    {
      question: 'What are the interest rates and fees?',
      answer:
        'Interest rates and processing fees are transparently disclosed before you borrow. There are zero hidden charges, no prepayment penalties, and no late-fee traps. Exact rates vary based on your credit assessment.',
    },
    {
      question: 'How does financial literacy on CreditBuddy work?',
      answer:
        'CreditBuddy offers bite-sized, 5-minute financial literacy modules covering topics like budgeting, credit scores, investing basics, and tax filing. Completing modules earns you reward coins that can be redeemed for benefits.',
    },
  ]),
);

// ─── Page Component ──────────────────────────────────────────────────────────

/**
 * How It Works page component.
 *
 * Renders the product explanation sections with interactive elements
 * (loan calculator, testimonials, FAQ accordion).
 */
export default function HowItWorksPage() {
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
        dangerouslySetInnerHTML={{ __html: howToJsonLd }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: faqJsonLd }}
      />

      <main className="relative w-full block bg-[#FBF7EF]">
        <HowItWorksHero />
        <InteractiveLoanCalculator />
        <CampusGigsBento />
        <LearnAndBuildCredit />
        <CyanTestimonials />
        <HowItWorksFAQEditorial />

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
