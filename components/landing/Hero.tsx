'use client';

import React, { useRef, useEffect } from 'react';
import { KeywordHighlight } from './shared/KeywordHighlight';
import gsap from 'gsap';

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.hero-reveal',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 75%',
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-screen flex items-center pt-16 pb-0 px-6 md:px-12 w-full bg-bg-primary overflow-hidden"
    >
      {/* Image pinned to the bottom of the section */}
      <img
        src="/hero-elements-2.png"
        alt=""
        aria-hidden="true"
        className="absolute bottom-0 left-0 w-full pointer-events-none select-none"
        style={{ objectFit: 'contain', objectPosition: 'bottom center', transform: 'translateY(80px)' }}
      />


      {/* Text content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full -translate-y-10 md:-translate-y-20">
        <div className="max-w-xl flex flex-col items-start justify-center">

          <div className="hero-reveal inline-flex items-center space-x-2 border border-ink/10 rounded-full px-3 py-1 mb-5">
            <span className="block w-2 h-2 rounded-full bg-accent-blue" />
            <span className="font-satoshi text-xs font-medium text-ink/70 uppercase tracking-widest">
              Now accepting students
            </span>
          </div>

          <h1
            className="hero-reveal font-chillax text-ink mb-5"
            style={{
              fontSize: 'clamp(2.4rem, 5.5vw, 80px)',
              lineHeight: 0.9,
              letterSpacing: '-0.04em',
              fontWeight: 700,
            }}
          >
            India&apos;s <KeywordHighlight text="student-first" />{' '}
            financial ecosystem.
          </h1>

          {/* Mobile version of the white box */}
          <div className="hero-reveal md:hidden bg-white/80 backdrop-blur-md p-5 rounded-2xl border border-white/50 shadow-md mb-6 w-full">
            <p className="font-satoshi text-xs text-ink/80 leading-relaxed">
              Build credit, get instant cash for campus needs, and unlock
              rewards—all tailored for college life. Not just a loan, a lifelong
              financial partner.
            </p>
          </div>

          <div className="hero-reveal flex flex-col sm:flex-row items-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 bg-accent-blue text-white rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-accent-green transition-colors duration-300">
              Get Started Now
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-transparent text-ink rounded-full border border-ink/20 font-bold uppercase tracking-widest text-[10px] hover:bg-bg-secondary transition-colors duration-300">
              See How It Works
            </button>
          </div>

        </div>
      </div>

      {/* Desktop version of the white box (absolute bottom right) */}
      <div className="hero-reveal hidden md:flex absolute bottom-12 right-12 lg:right-24 z-20 max-w-sm bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-white shadow-[0_20px_50px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300 flex-col gap-2">
        <span className="text-[10px] font-bold uppercase tracking-widest text-accent-blue/80 font-satoshi">
          Our Promise
        </span>
        <p className="font-satoshi text-sm text-ink/80 leading-relaxed">
          Build credit, get instant cash for campus needs, and unlock
          rewards—all tailored for college life. Not just a loan, a lifelong
          financial partner.
        </p>
      </div>
    </section>
  );
};
