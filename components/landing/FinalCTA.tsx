'use client';

import React from 'react';
import { KeywordHighlight } from './shared/KeywordHighlight';

export const FinalCTA = () => {
  return (
    <section className="h-screen w-full bg-bg-primary flex flex-col items-center justify-center p-6 md:p-12 text-center sticky top-0 -z-10">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="font-chillax text-6xl md:text-[6rem] font-medium tracking-tight leading-[1.05] mb-8">
          Ready to take <KeywordHighlight text="control" />?
        </h2>
        <p className="font-satoshi text-xl text-ink/70 mb-12 max-w-2xl mx-auto">
          Join thousands of students already building their financial future with CreditBuddy.
        </p>
        <button className="px-10 py-5 bg-accent-blue text-white rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-accent-indigo transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-xl hover:shadow-2xl">
          Download the App
        </button>
      </div>
    </section>
  );
};
