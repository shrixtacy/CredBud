'use client';

import React from 'react';

const METRICS = [
  { value: '62,000+', label: 'Active Students' },
  { value: '400+', label: 'College Campuses' },
  { value: '₹12 Cr+', label: 'Disbursed Safely' },
  { value: '4.9 ★', label: 'App Store Rating' },
];

export const StudentsTrustMetrics = () => {
  return (
    <section className="py-16 px-6 md:px-12 bg-bg-primary border-t-[1.6px] border-ink w-full">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
        {METRICS.map((m, i) => (
          <div key={i} className="bg-white brutal-card p-6 text-center">
            <h3 className="font-bricolage font-extrabold text-3xl md:text-5xl text-ink mb-1">{m.value}</h3>
            <p className="font-jetbrains text-xs text-ink-muted uppercase">{m.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
