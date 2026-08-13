'use client';

import React from 'react';

const ADVISORS = [
  { name: 'Vikram Shah', role: 'Ex-VP, HDFC Bank', exp: 'Fintech Advisor' },
  { name: 'Dr. Meera Nair', role: 'Professor of Finance, XLRI', exp: 'Financial Literacy Lead' },
];

export const AboutAdvisorsSection = () => {
  return (
    <section className="py-16 px-6 md:px-12 bg-bg-secondary border-t-[1.6px] border-ink w-full">
      <div className="max-w-7xl mx-auto">
        <span className="font-jetbrains text-ink-muted text-xs block mb-4">// advisors & mentors</span>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ADVISORS.map((a, i) => (
            <div key={i} className="bg-white brutal-card p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-accent-gold brutal-border flex items-center justify-center font-bricolage font-extrabold text-ink">
                {a.name[0]}
              </div>
              <div>
                <h3 className="font-bricolage font-extrabold text-lg text-ink">{a.name}</h3>
                <p className="font-jakarta text-xs text-ink-muted">{a.role} • {a.exp}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
