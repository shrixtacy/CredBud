'use client';

import React from 'react';

const CRITERIA = [
  'Currently enrolled college student in India',
  'Passionate about helping peers manage money',
  'Active on campus & student groups',
  'Minimum 5 hours/week commitment',
];

export const AmbassadorEligibilityCheck = () => {
  return (
    <section className="py-20 md:py-24 px-6 md:px-12 bg-bg-primary w-full max-w-7xl mx-auto">
      <div className="bg-accent-gold brutal-card p-8 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8" style={{ boxShadow: '8px 8px 0px #14100F' }}>
        <div className="max-w-xl">
          <span className="font-jetbrains text-xs font-bold text-ink bg-white px-3 py-1 rounded-full brutal-border inline-block mb-4">
            // eligibility
          </span>
          <h2 className="font-bricolage text-3xl md:text-5xl font-extrabold text-ink mb-6">
            Are you eligible?
          </h2>
          <ul className="space-y-3 font-jakarta text-ink text-sm md:text-base font-medium">
            {CRITERIA.map((c, i) => (
              <li key={i} className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-white brutal-border flex items-center justify-center font-bold text-xs">✓</span>
                {c}
              </li>
            ))}
          </ul>
        </div>
        <button className="px-8 py-4 bg-ink text-bg-primary font-bricolage font-bold text-base brutal-pill brutal-shadow-purple transition-transform hover:scale-105 cursor-pointer whitespace-nowrap">
          Apply as Ambassador ↗
        </button>
      </div>
    </section>
  );
};
