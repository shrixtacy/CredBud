/**
 * @fileoverview Home page for CreditBuddy.
 *
 * This is the main landing page — the highest-priority route in the
 * sitemap (priority 1.0).  It assembles all landing-section components
 * in a carefully orchestrated scroll sequence:
 *
 *   1. IntroSequence  → Animated brand reveal
 *   2. Hero           → Main value proposition + CTA
 *   3. HeroMarquee    → Scrolling keyword strip
 *   4. WhyWeExist     → Origin story / mission statement
 *   5. StickyStack    → Feature cards (Borrow, Earn, Learn, Build Credit)
 *   6. HorizontalJourney → Horizontal scroll showcase
 *   7. SignatureMarquee   → Brand signature strip
 *   8. ShowcaseBorrow/Earn/Learn → Deep-dive feature sections
 *   9. TrustSection    → Trust signals, metrics, logos
 *  10. StudentStories  → Testimonial cards
 *  11. FinalCTA        → Sticky call-to-action
 *  12. FooterShutter   → Shutter-reveal footer
 *
 * The page inherits global metadata from the root layout.  The homepage
 * metadata is set in the root `layout.tsx` via `buildMetadata({ path: '/' })`.
 *
 * @see {@link file:///d:/Vibe%20projects/CredBud/app/layout.tsx} — Root metadata
 */

import { SmoothScroll } from '@/components/landing/shared/SmoothScroll';
import { GrainOverlay } from '@/components/landing/shared/GrainOverlay';
import { IntroSequence } from '@/components/landing/IntroSequence';
import { Hero } from '@/components/landing/Hero';
import { HeroMarquee } from '@/components/landing/HeroMarquee';
import { WhyWeExist } from '@/components/landing/WhyWeExist';
import { StickyStack } from '@/components/landing/StickyStack/StickyStack';
import { HorizontalJourney } from '@/components/landing/HorizontalJourney/HorizontalJourney';
import { SignatureMarquee } from '@/components/landing/SignatureMarquee';
import { ShowcaseBorrow } from '@/components/landing/Showcase/ShowcaseBorrow';
import { ShowcaseEarn } from '@/components/landing/Showcase/ShowcaseEarn';
import { ShowcaseLearn } from '@/components/landing/Showcase/ShowcaseLearn';
import { TrustSection } from '@/components/landing/TrustSection';
import { StudentStories } from '@/components/landing/StudentStories';
import { FinalCTA } from '@/components/landing/FinalCTA';
import { FooterShutter } from '@/components/landing/Footer/FooterShutter';
import { generateWebPage, generateBreadcrumbList } from '@/lib/seo';

/**
 * Home page JSON-LD structured data.
 *
 * Provides a WebPage schema with breadcrumb (Home only) to establish
 * the page's identity in search engine knowledge graphs.
 */
const homePageJsonLd = JSON.stringify(
  generateWebPage({
    title: "CreditBuddy — India's Student-First Financial Ecosystem",
    description:
      "India's pioneering student-first financial ecosystem. Instant micro-credit, " +
      'campus gigs, financial literacy, and CIBIL score building for college students.',
    path: '/',
    breadcrumbs: [{ name: 'Home', href: '/' }],
  }),
);

/**
 * Home page component.
 *
 * Renders all landing sections inside a smooth-scroll wrapper with
 * a grain overlay for visual texture.
 */
export default function Home() {
  return (
    <SmoothScroll>
      <GrainOverlay />

      {/* Page-level structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: homePageJsonLd }}
      />

      <main className="relative w-full block">
        <IntroSequence />
        <Hero />
        <HeroMarquee />
        <WhyWeExist />
        <StickyStack />
        <HorizontalJourney />
        <SignatureMarquee />
        <ShowcaseBorrow />
        <ShowcaseEarn />
        <ShowcaseLearn />
        <TrustSection />
        <StudentStories />

        {/* Shutter setup for FinalCTA and Footer */}
        <div className="relative w-full h-[200vh]">
          {/* Final CTA acts as a sticky background while scrolling through the first 100vh of this container */}
          <div className="sticky top-0 h-screen w-full">
            <FinalCTA />
          </div>
          {/* Footer comes up from the bottom over the Final CTA */}
          <div className="absolute bottom-0 w-full z-20">
            <FooterShutter />
          </div>
        </div>
      </main>

    </SmoothScroll>
  );
}
