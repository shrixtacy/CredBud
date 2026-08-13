'use client';

import React from 'react';

export const StudentsHero = () => {
  return (
    <section className="relative pt-32 pb-20 px-6 md:px-12 bg-bg-primary text-ink border-b-[1.6px] border-ink">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        
        <span className="font-jetbrains text-xs font-normal brutal-pill bg-accent-lime px-4 py-1.5 mb-6 inline-block">
          // built for Indian college students
        </span>
        
        <h1 className="font-bricolage text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[0.95] mb-6 max-w-4xl">
          By students. For students. <span className="accent-underline">Always first.</span>
        </h1>
        
        <p className="font-jakarta text-ink-muted text-lg md:text-xl max-w-2xl leading-relaxed mb-8">
          No bank visits, no parental guarantees, no hidden fees. CreditBuddy is designed from the ground up for college life in India.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <button className="px-8 py-4 bg-ink text-bg-primary font-bricolage font-bold text-base brutal-pill brutal-shadow-purple hover:scale-105 transition-transform cursor-pointer">
            Get Started Free ↗
          </button>
        </div>

      </div>
    </section>
  );
};
