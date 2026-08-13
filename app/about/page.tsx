import type { Metadata } from 'next';
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

export const metadata: Metadata = {
  title: 'About Us | CreditBuddy - Built by Students, for Students',
  description: 'Learn why CreditBuddy exists, our mission, core values, leadership team, and advisory board.',
};

export default function AboutPage() {
  return (
    <SmoothScroll>
      <GrainOverlay />

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
