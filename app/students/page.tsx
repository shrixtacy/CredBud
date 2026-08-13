import type { Metadata } from 'next';
import { SmoothScroll } from '@/components/landing/shared/SmoothScroll';
import { GrainOverlay } from '@/components/landing/shared/GrainOverlay';
import { StudentsHero } from '@/components/students/StudentsHero';
import { StudentsBorrowSection } from '@/components/students/StudentsBorrowSection';
import { StudentsNeverList } from '@/components/students/StudentsNeverList';
import { StudentsEarnSection } from '@/components/students/StudentsEarnSection';
import { StudentsLearnCoinsSection } from '@/components/students/StudentsLearnCoinsSection';
import { StudentsTrustMetrics } from '@/components/students/StudentsTrustMetrics';
import { FinalCTA } from '@/components/landing/FinalCTA';
import { FooterShutter } from '@/components/landing/Footer/FooterShutter';

export const metadata: Metadata = {
  title: 'Students | CreditBuddy - Built from Scratch for Indian Students',
  description: 'Student credit, campus micro-gigs, and 5-minute financial literacy modules for Indian college students.',
};

export default function StudentsPage() {
  return (
    <SmoothScroll>
      <GrainOverlay />

      <main className="relative w-full block bg-[#FAF7F2]">
        <StudentsHero />
        <StudentsBorrowSection />
        <StudentsNeverList />
        <StudentsEarnSection />
        <StudentsLearnCoinsSection />
        <StudentsTrustMetrics />

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
