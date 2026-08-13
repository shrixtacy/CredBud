'use client';

import React from 'react';

const VALUES = [
  { title: 'Student First, Always', desc: 'No predatory terms, no hidden fees, no fine print traps.', color: 'bg-accent-gold' },
  { title: 'Zero Judgement', desc: 'Financial mistakes happen. We focus on education and recovery.', color: 'bg-accent-cyan' },
  { title: 'Full Transparency', desc: 'Every fee and term is shown before you confirm.', color: 'bg-accent-lime' },
  { title: 'Speed & Simplicity', desc: 'Approvals in seconds via your smartphone.', color: 'bg-accent-coral' },
];

export const AboutValuesGrid = () => {
  return (
    <section className="py-20 md:py-24 px-6 md:px-12 bg-bg-secondary border-t-[1.6px] border-ink w-full">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <span className="font-jetbrains text-ink-muted text-xs block mb-2">// core values</span>
          <h2 className="font-bricolage text-4xl md:text-6xl font-extrabold tracking-tight text-ink">
            What drives our team every day.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALUES.map((v, i) => (
            <div key={i} className={`${v.color} brutal-card p-6 flex flex-col justify-between min-h-[220px]`}>
              <span className="font-jetbrains text-xs font-bold text-ink">0{i + 1}</span>
              <div>
                <h3 className="font-bricolage font-extrabold text-xl text-ink mb-2">{v.title}</h3>
                <p className="font-jakarta text-xs text-ink/80 leading-relaxed">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
