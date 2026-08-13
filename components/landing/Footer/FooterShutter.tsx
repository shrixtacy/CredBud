'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

export const FooterWordmark = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center mt-auto pb-12 overflow-hidden">
      <div className="flex items-baseline justify-center w-full relative">
        <span className="font-bricolage font-extrabold text-[3rem] md:text-[6rem] text-bg-primary/20 mr-2 -translate-y-8 md:-translate-y-16">
          Credit
        </span>
        <span className="font-bricolage font-extrabold text-[6rem] md:text-[15rem] lg:text-[20rem] text-bg-primary leading-none tracking-tighter uppercase">
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
    <footer ref={footerRef} className="h-screen w-full bg-ink text-bg-primary flex flex-col relative z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.3)] overflow-hidden rounded-t-[2rem] md:rounded-t-[3.5rem]">

      {/* Top Nav */}
      <div className="flex flex-col md:flex-row justify-between p-12 w-full max-w-7xl mx-auto z-10">
        <div className="font-jetbrains text-xs uppercase tracking-widest text-bg-primary/50 mb-8 md:mb-0">
          © 2026 CreditBuddy
        </div>
        <div className="flex space-x-12">
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
