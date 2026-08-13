'use client';

import React from 'react';

export const AmbassadorHero = () => {
  return (
    <section className="relative pt-32 pb-20 px-6 md:px-12 bg-bg-primary text-ink border-b-[1.6px] border-ink">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        
        <span className="font-jetbrains text-xs font-normal brutal-pill bg-accent-gold px-4 py-1.5 mb-6 inline-block">
          // lead on your campus
        </span>
        
        <h1 className="font-bricolage text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[0.95] mb-6 max-w-4xl">
          Become a <span className="accent-underline">Campus Ambassador</span>.
        </h1>
        
        <p className="font-jakarta text-ink-muted text-lg md:text-xl max-w-2xl leading-relaxed mb-8">
          Lead financial empowerment at your college. Earn up to ₹15,000/month, build leadership credentials, and unlock exclusive perks.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <button className="px-8 py-4 bg-ink text-bg-primary font-bricolage font-bold text-base brutal-pill brutal-shadow-purple hover:scale-105 transition-transform cursor-pointer">
            Apply Now ↗
          </button>
        </div>

      </div>
    </section>
  );
};
