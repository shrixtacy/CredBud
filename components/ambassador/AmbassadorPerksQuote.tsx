'use client';

import React from 'react';

export const AmbassadorPerksQuote = () => {
  return (
    <section className="py-20 bg-ink text-bg-primary w-full">
      <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
        <span className="font-jetbrains text-accent-lime text-xs block mb-4">// ambassador quote</span>
        <blockquote className="font-bricolage text-3xl md:text-5xl font-extrabold leading-tight mb-8">
          &quot;Being a CreditBuddy Ambassador paid for my laptop and gave me real leadership experience before graduation.&quot;
        </blockquote>
        <p className="font-jetbrains text-accent-lime text-sm">
          — Dev Malhotra, IIT Delhi (Top Ambassador 2025)
        </p>
      </div>
    </section>
  );
};
