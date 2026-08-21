'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

export const FooterWordmark = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center mt-auto pb-6 md:pb-12 overflow-hidden">
      <div className="flex items-baseline justify-center w-full relative">
        <span className="font-bricolage font-extrabold text-[2rem] sm:text-[3rem] md:text-[6rem] text-bg-primary/20 mr-1 sm:mr-2 -translate-y-4 sm:-translate-y-8 md:-translate-y-16">
          Credit
        </span>
        <span className="font-bricolage font-extrabold text-[4.2rem] sm:text-[6rem] md:text-[15rem] lg:text-[20rem] text-bg-primary leading-none tracking-tighter uppercase">
          Buddy
        </span>
      </div>
    </div>
  );
};

export const FooterShutter = () => {
  const footerRef = useRef<HTMLDivElement>(null);
  const wordmarkRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Subtle parallax on the wordmark
      gsap.to(wordmarkRef.current, {
        y: -50,
        ease: 'none',
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        }
      });
    }, footerRef);
    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="min-h-screen h-auto md:h-screen w-full bg-ink text-bg-primary flex flex-col justify-between relative z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.3)] overflow-hidden rounded-t-[2rem] md:rounded-t-[3.5rem] py-6 md:py-0">

      {/* Top Nav */}
      <div className="flex flex-col md:flex-row justify-between p-8 md:p-12 w-full max-w-7xl mx-auto z-10 gap-8">
        
        {/* Left Side: Full Company Name & Legal Address Info */}
        <div className="flex flex-col space-y-2 max-w-xs md:max-w-sm">
          <div className="font-jetbrains text-xs uppercase tracking-widest text-bg-primary/90 font-bold">
            © 2026 CreditBuddy Partners Pvt Ltd
          </div>
          <div className="font-jetbrains text-[10px] text-bg-primary/60 leading-relaxed space-y-1">
            <p className="font-semibold text-bg-primary/80">CREDITBUDDY PARTNERS PRIVATE LIMITED</p>
            <p>CIN: U62090OD2026PTC053104 | GSTIN: 21AANCC6754D1ZS</p>
            <p>📍 PLOT NO. 1380/6628 Near Gram Devi Mandir, Matru Vihar, Shanti Nagar, Budharaja, Sambalpur, Odisha, 768004</p>
            <div className="flex flex-col gap-0.5 pt-1 text-accent-lime font-medium">
              <a href="mailto:info@creditbuddy.org.in" className="hover:underline">✉️ info@creditbuddy.org.in</a>
              <a href="mailto:creditbuddyofficial@gmail.com" className="hover:underline">📧 creditbuddyofficial@gmail.com</a>
            </div>
          </div>
        </div>

        {/* Right Side: Grouped Navigation Columns (Terms & Conditions, Platform, Company, Social) */}
        <div className="flex flex-wrap gap-8 md:gap-12">
          <div className="flex flex-col space-y-4">
            <span className="font-jetbrains text-xs text-accent-lime uppercase tracking-widest">// Terms &amp; Conditions</span>
            <a href="/terms" className="font-jakarta text-bg-primary/80 hover:text-accent-lime transition-colors">Terms of Service</a>
            <a href="/privacy" className="font-jakarta text-bg-primary/80 hover:text-accent-lime transition-colors">Privacy Policy</a>
            <a href="/refund-policy" className="font-jakarta text-bg-primary/80 hover:text-accent-lime transition-colors">Refund Policy</a>
          </div>
          <div className="flex flex-col space-y-4">
            <span className="font-jetbrains text-xs text-accent-lime uppercase tracking-widest">// Platform</span>
            <a href="/how-it-works" className="font-jakarta text-bg-primary/80 hover:text-accent-lime transition-colors">How It Works</a>
            <a href="/students" className="font-jakarta text-bg-primary/80 hover:text-accent-lime transition-colors">Students</a>
            <a href="/ambassador" className="font-jakarta text-bg-primary/80 hover:text-accent-lime transition-colors">Ambassadors</a>
          </div>
          <div className="flex flex-col space-y-4">
            <span className="font-jetbrains text-xs text-accent-lime uppercase tracking-widest">// Company</span>
            <a href="/about" className="font-jakarta text-bg-primary/80 hover:text-accent-lime transition-colors">About</a>
            <a href="/contact" className="font-jakarta text-bg-primary/80 hover:text-accent-lime transition-colors">Contact</a>
          </div>
          <div className="flex flex-col space-y-4">
            <span className="font-jetbrains text-xs text-accent-lime uppercase tracking-widest">// Social</span>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="font-jakarta text-bg-primary/80 hover:text-accent-lime transition-colors">Instagram</a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="font-jakarta text-bg-primary/80 hover:text-accent-lime transition-colors">Twitter</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="font-jakarta text-bg-primary/80 hover:text-accent-lime transition-colors">LinkedIn</a>
          </div>
        </div>

      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Wordmark */}
      <div ref={wordmarkRef} className="relative z-10">
        <FooterWordmark />
      </div>

      {/* Footer Elements Grass & Coins bottom border */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none select-none z-20">
        <img
          src="/footer-elements.png"
          alt=""
          aria-hidden="true"
          className="w-full h-auto object-contain object-bottom"
          style={{ transform: 'translateY(10px)' }}
        />
      </div>

    </footer>
  );
};
