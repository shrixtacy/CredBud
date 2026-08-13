'use client';

import React from 'react';

const DIFFERENCES = [
  { feature: 'Approval Criteria', banks: 'Salary slip & CIBIL score', credbud: 'College ID & Aadhaar KYC' },
  { feature: 'Interest Rate', banks: '36% - 48% APR traps', credbud: '0% for first 30 days' },
  { feature: 'Hidden Charges', banks: 'Processing & late fee penalties', credbud: 'Zero hidden fees, transparent upfront' },
  { feature: 'Earnings & Gigs', banks: 'None', credbud: 'In-app campus micro-gigs & rewards' },
];

export const AboutWhyDifferent = () => {
  return (
    <section className="py-20 md:py-24 px-6 md:px-12 bg-bg-primary w-full max-w-7xl mx-auto">
      <div className="mb-12">
        <span className="font-jetbrains text-ink-muted text-xs block mb-2">// comparison</span>
        <h2 className="font-bricolage text-4xl md:text-6xl font-extrabold tracking-tight text-ink">
          How we compare to traditional banks.
        </h2>
      </div>

      <div className="bg-white brutal-card overflow-hidden" style={{ boxShadow: '8px 8px 0px #14100F' }}>
        <div className="grid grid-cols-3 bg-ink text-bg-primary p-4 font-jetbrains text-xs font-bold uppercase border-b-[1.6px] border-ink">
          <div>Feature</div>
          <div>Traditional Banks</div>
          <div className="text-accent-lime">CreditBuddy</div>
        </div>

        {DIFFERENCES.map((d, i) => (
          <div key={i} className="grid grid-cols-3 p-4 border-b border-ink/10 last:border-0 font-jakarta text-xs md:text-sm items-center">
            <div className="font-bricolage font-bold text-ink">{d.feature}</div>
            <div className="text-ink-muted">{d.banks}</div>
            <div className="font-bold text-accent-purple bg-accent-purple/10 px-2 py-1 rounded w-fit brutal-border">{d.credbud}</div>
          </div>
        ))}
      </div>
    </section>
  );
};
