import type { Metadata } from 'next';
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

export const metadata: Metadata = {
  title: 'How It Works | CreditBuddy - Student-First Financial Ecosystem',
  description: 'Learn how CreditBuddy helps Indian students borrow instant cash, earn via campus gigs, learn real money skills, and build credit early.',
};

export default function HowItWorksPage() {
  return (
    <SmoothScroll>
      <GrainOverlay />

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
