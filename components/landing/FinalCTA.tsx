'use client';

import React from 'react';
import { KeywordHighlight } from './shared/KeywordHighlight';

export const FinalCTA = () => {
  return (
    <section className="h-[90vh] md:h-[92vh] w-[95%] md:w-[96%] mx-auto my-4 bg-bg-primary flex flex-col items-center justify-center p-6 md:p-12 text-center sticky top-[5vh] md:top-[4vh] -z-10 brutal-border shadow-md overflow-hidden rounded-[2rem] md:rounded-[3.5rem]">
      <div className="max-w-4xl mx-auto w-full">
        <span className="font-jetbrains text-ink font-normal tracking-widest uppercase text-xs brutal-pill bg-accent-lime px-4 py-1.5 inline-block mb-6">
          // start today
        </span>
        <h2 className="font-bricolage text-6xl md:text-[6rem] font-extrabold tracking-tight leading-[1.05] mb-8 text-ink">
          Ready to take <KeywordHighlight text="control" />?
        </h2>
        <p className="font-jakarta text-xl text-ink-muted mb-12 max-w-2xl mx-auto">
          Join thousands of students already building their financial future with CreditBuddy.
        </p>
        <button suppressHydrationWarning className="px-10 py-5 bg-ink text-bg-primary rounded-full font-bricolage font-bold text-lg brutal-pill brutal-shadow-purple transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer">
          Download the App →
        </button>
      </div>
    </section>
  );
};
