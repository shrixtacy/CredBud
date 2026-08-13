'use client';

import React from 'react';

const ROLES = [
  { title: 'Spread Awareness', desc: 'Host workshops & spread the word about student financial literacy.', color: 'bg-accent-lime' },
  { title: 'Onboard Peers', desc: 'Help batchmates activate their zero-fee student credit line.', color: 'bg-accent-gold' },
  { title: 'Feedback Loop', desc: 'Work directly with our product team to shape new features.', color: 'bg-accent-cyan' },
  { title: 'Earn & Level Up', desc: 'Get monthly stipends, performance bonuses, and certificates.', color: 'bg-accent-coral' },
];

export const AmbassadorRoleGrid = () => {
  return (
    <section className="py-20 md:py-24 px-6 md:px-12 bg-bg-primary w-full max-w-7xl mx-auto">
      <div className="mb-12 text-center max-w-2xl mx-auto">
        <span className="font-jetbrains text-ink-muted text-xs block mb-2">// your role</span>
        <h2 className="font-bricolage text-4xl md:text-6xl font-extrabold tracking-tight text-ink">
          What you will do as an Ambassador.
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {ROLES.map((role, i) => (
          <div key={i} className={`${role.color} brutal-card p-6 flex flex-col justify-between min-h-[240px]`}>
            <span className="font-jetbrains text-xs font-bold text-ink">0{i + 1}</span>
            <div>
              <h3 className="font-bricolage font-extrabold text-2xl text-ink mb-2">{role.title}</h3>
              <p className="font-jakarta text-xs text-ink/80 leading-relaxed">{role.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
