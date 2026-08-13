import type { Metadata } from 'next';
import { SmoothScroll } from '@/components/landing/shared/SmoothScroll';
import { GrainOverlay } from '@/components/landing/shared/GrainOverlay';
import { AmbassadorHero } from '@/components/ambassador/AmbassadorHero';
import { AmbassadorRoleGrid } from '@/components/ambassador/AmbassadorRoleGrid';
import { AmbassadorPerksQuote } from '@/components/ambassador/AmbassadorPerksQuote';
import { AmbassadorEligibilityCheck } from '@/components/ambassador/AmbassadorEligibilityCheck';
import { AmbassadorFAQAccordion } from '@/components/ambassador/AmbassadorFAQAccordion';
import { FinalCTA } from '@/components/landing/FinalCTA';
import { FooterShutter } from '@/components/landing/Footer/FooterShutter';

export const metadata: Metadata = {
  title: 'Campus Ambassador Program | CreditBuddy',
  description: 'Be the student leader who brings fair credit and financial literacy to your college campus.',
};

export default function AmbassadorPage() {
  return (
    <SmoothScroll>
      <GrainOverlay />

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
