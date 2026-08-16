'use client';

import React from 'react';
import { SplitText } from '@/components/landing/shared/SplitText';

export const HowItWorksHero = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-24 px-6 md:px-12 bg-bg-primary text-ink border-b-[1.6px] border-ink overflow-hidden flex flex-col justify-center">
      {/* Background Campus Scene Image (100% Full Visibility) */}
      <div className="absolute inset-0 w-full h-full z-0 select-none pointer-events-none">
        <img
          src="/how-it-works-campus-bg-v2.png"
          alt="Campus life background"
          className="w-full h-full object-cover object-center opacity-100"
        />
      </div>

      <div className="max-w-7xl mx-auto relative flex flex-col items-center text-center z-10 -mt-12 md:-mt-20">
        
        <span className="font-jetbrains text-xs font-normal brutal-pill bg-accent-lime px-4 py-1.5 mb-6 inline-block">
          // how it works
        </span>
        
        <h1 className="font-bricolage text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[0.98] mb-6 max-w-3xl md:max-w-4xl">
          <SplitText
            text="Everything you need to own your money in college."
            splitType="words"
            variant="rise"
            delay={50}
            duration={0.6}
            tag="span"
          />
        </h1>
        
        <p className="font-jakarta text-ink-muted text-lg md:text-xl max-w-2xl leading-relaxed mb-8 font-semibold">
          <SplitText
            text="No hidden fees, no salary slip needed. Just a student-first ecosystem designed to help you borrow, earn, learn, and build real credit."
            splitType="words"
            variant="blur"
            delay={35}
            duration={0.5}
            tag="span"
          />
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <button suppressHydrationWarning className="px-8 py-4 bg-ink text-bg-primary font-bricolage font-bold text-base brutal-pill brutal-shadow-purple hover:scale-105 transition-transform cursor-pointer">
            Explore Ecosystem ↓
          </button>
        </div>

      </div>
    </section>
  );
};
