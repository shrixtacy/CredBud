'use client';

import React from 'react';

const NEVER_ITEMS = [
  { title: 'No Salary Slips', desc: 'We know you are in college. We do not ask for pay stubs.' },
  { title: 'No Hidden Fees', desc: 'Every rupee is disclosed upfront before you confirm.' },
  { title: 'No Spam Calls', desc: 'We communicate through the app. No relentless agent calls.' },
  { title: 'No Parental Guarantee', desc: 'You are an adult building your own financial independence.' },
];

export const StudentsNeverList = () => {
  return (
    <section className="py-20 bg-ink text-bg-primary w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <span className="font-jetbrains text-accent-lime text-xs block mb-2">// strict policy</span>
          <h2 className="font-bricolage text-4xl md:text-6xl font-extrabold tracking-tight">
            What CreditBuddy will <span className="text-accent-coral">NEVER</span> do.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {NEVER_ITEMS.map((item, i) => (
            <div key={i} className="bg-bg-primary text-ink brutal-card p-6 flex flex-col justify-between" style={{ boxShadow: '4px 4px 0px #C8FF3D' }}>
              <span className="font-jetbrains text-2xl font-bold text-accent-coral">✕</span>
              <div className="mt-6">
                <h3 className="font-bricolage font-extrabold text-xl mb-2">{item.title}</h3>
                <p className="font-jakarta text-xs text-ink-muted leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
