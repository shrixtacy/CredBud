'use client';

import React from 'react';

export const AboutHero = () => {
  return (
    <section className="relative pt-32 pb-20 px-6 md:px-12 bg-bg-primary text-ink border-b-[1.6px] border-ink">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        
        <span className="font-jetbrains text-xs font-normal brutal-pill bg-accent-lime px-4 py-1.5 mb-6 inline-block">
          // our mission
        </span>
        
        <h1 className="font-bricolage text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[0.95] mb-6 max-w-4xl">
          Fixing money for <span className="accent-underline">India&apos;s youth</span>.
        </h1>
        
        <p className="font-jakarta text-ink-muted text-lg md:text-xl max-w-2xl leading-relaxed">
          Traditional financial institutions ignore students. We built CreditBuddy so no college student ever has to stress over fees, books, or building credit early.
        </p>

      </div>
    </section>
  );
};
