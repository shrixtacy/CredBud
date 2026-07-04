'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

export const FooterWordmark = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center mt-auto pb-12 overflow-hidden">
      <div className="flex items-baseline justify-center w-full relative">
        <span className="font-satoshi font-light text-[3rem] md:text-[6rem] text-ink/20 mr-2 -translate-y-8 md:-translate-y-16 editorial-italic">
          Credit
        </span>
        <span className="font-chillax font-black text-[6rem] md:text-[15rem] lg:text-[20rem] text-ink leading-none tracking-tighter mix-blend-multiply uppercase">
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
    <footer ref={footerRef} className="h-screen w-full bg-bg-secondary flex flex-col relative z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.1)] overflow-hidden">
      
      {/* Top Nav */}
      <div className="flex flex-col md:flex-row justify-between p-12 w-full max-w-7xl mx-auto z-10">
        <div className="font-satoshi text-sm uppercase tracking-widest text-ink/50 mb-8 md:mb-0">
          © 2026 CreditBuddy
        </div>
        <div className="flex space-x-12">
          <div className="flex flex-col space-y-4">
            <span className="font-satoshi text-xs text-ink/40 uppercase tracking-widest">Platform</span>
            <a href="#" className="font-satoshi text-ink hover:text-accent-blue transition-colors">Borrow</a>
            <a href="#" className="font-satoshi text-ink hover:text-accent-blue transition-colors">Earn</a>
            <a href="#" className="font-satoshi text-ink hover:text-accent-blue transition-colors">Learn</a>
          </div>
          <div className="flex flex-col space-y-4">
            <span className="font-satoshi text-xs text-ink/40 uppercase tracking-widest">Company</span>
            <a href="#" className="font-satoshi text-ink hover:text-accent-blue transition-colors">About</a>
            <a href="#" className="font-satoshi text-ink hover:text-accent-blue transition-colors">Careers</a>
            <a href="#" className="font-satoshi text-ink hover:text-accent-blue transition-colors">Contact</a>
          </div>
          <div className="flex flex-col space-y-4">
            <span className="font-satoshi text-xs text-ink/40 uppercase tracking-widest">Social</span>
            <a href="#" className="font-satoshi text-ink hover:text-accent-blue transition-colors">Instagram</a>
            <a href="#" className="font-satoshi text-ink hover:text-accent-blue transition-colors">Twitter</a>
            <a href="#" className="font-satoshi text-ink hover:text-accent-blue transition-colors">LinkedIn</a>
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
