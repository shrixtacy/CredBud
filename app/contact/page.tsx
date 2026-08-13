import type { Metadata } from 'next';
import { SmoothScroll } from '@/components/landing/shared/SmoothScroll';
import { GrainOverlay } from '@/components/landing/shared/GrainOverlay';
import { ContactHeroForm } from '@/components/contact/ContactHeroForm';
import { ContactCompanyDetails } from '@/components/contact/ContactCompanyDetails';
import { FinalCTA } from '@/components/landing/FinalCTA';
import { FooterShutter } from '@/components/landing/Footer/FooterShutter';

export const metadata: Metadata = {
  title: 'Contact Us | CreditBuddy - Get in Touch',
  description: 'Reach out to the CreditBuddy team for student support, campus partnerships, or investor inquiries.',
};

export default function ContactPage() {
  return (
    <SmoothScroll>
      <GrainOverlay />

      <main className="relative w-full block bg-[#FAF7F2]">
        <ContactHeroForm />
        <ContactCompanyDetails />

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
