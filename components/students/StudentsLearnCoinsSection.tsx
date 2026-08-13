'use client';

import React from 'react';

export const StudentsLearnCoinsSection = () => {
  return (
    <section className="py-20 md:py-24 px-6 md:px-12 bg-bg-primary w-full max-w-7xl mx-auto">
      <div className="bg-accent-lime brutal-card p-8 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8" style={{ boxShadow: '8px 8px 0px #14100F' }}>
        <div className="max-w-xl">
          <span className="font-jetbrains text-xs font-bold text-ink bg-white px-3 py-1 rounded-full brutal-border inline-block mb-4">
            // learn & earn rewards
          </span>
          <h2 className="font-bricolage text-3xl md:text-5xl font-extrabold text-ink mb-4">
            Get paid to learn financial skills.
          </h2>
          <p className="font-jakarta text-ink-muted text-sm md:text-base leading-relaxed">
            Complete 3-minute bite-sized lessons on budgeting, taxes, and investments to earn Buddy Coins redeemable for Amazon vouchers and fee discounts.
          </p>
        </div>
        <button className="px-8 py-4 bg-ink text-bg-primary font-bricolage font-bold text-base brutal-pill brutal-shadow-purple transition-transform hover:scale-105 cursor-pointer whitespace-nowrap">
          Start Learning Free ↗
        </button>
      </div>
    </section>
  );
};
