import { SmoothScroll } from '@/components/landing/shared/SmoothScroll';
import { GrainOverlay } from '@/components/landing/shared/GrainOverlay';
import { IntroSequence } from '@/components/landing/IntroSequence';
import { Hero } from '@/components/landing/Hero';
import { AtAGlanceStrip } from '@/components/landing/AtAGlanceStrip';
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

export default function Home() {
  return (
    <SmoothScroll>
      <GrainOverlay />
      
      <main className="relative w-full block">
        <IntroSequence />
        <Hero />
        <AtAGlanceStrip />
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
