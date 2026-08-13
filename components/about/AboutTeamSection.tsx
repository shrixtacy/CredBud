'use client';

import React from 'react';

const TEAM = [
  { name: 'Arjun Mehta', role: 'Co-Founder & CEO', college: 'IIT Bombay', color: 'bg-accent-lime' },
  { name: 'Priya Sundaram', role: 'Co-Founder & CTO', college: 'BITS Pilani', color: 'bg-accent-purple text-white' },
  { name: 'Rohan Gupta', role: 'Head of Product', college: 'DU', color: 'bg-accent-gold' },
  { name: 'Sneha Kapoor', role: 'Head of Risk', college: 'IIM Ahmedabad', color: 'bg-accent-cyan' },
];

export const AboutTeamSection = () => {
  return (
    <section className="py-20 md:py-24 px-6 md:px-12 bg-bg-primary w-full max-w-7xl mx-auto">
      <div className="mb-12">
        <span className="font-jetbrains text-ink-muted text-xs block mb-2">// leadership</span>
        <h2 className="font-bricolage text-4xl md:text-6xl font-extrabold tracking-tight text-ink">
          Meet the team building CreditBuddy.
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {TEAM.map((t, i) => (
          <div key={i} className={`${t.color} brutal-card p-6 flex flex-col justify-between min-h-[220px]`}>
            <div className="w-12 h-12 rounded-full bg-white brutal-border flex items-center justify-center font-bricolage font-extrabold text-ink text-lg mb-4">
              {t.name[0]}
            </div>
            <div>
              <h3 className="font-bricolage font-extrabold text-xl mb-0.5">{t.name}</h3>
              <p className="font-jakarta text-xs font-semibold opacity-90">{t.role}</p>
              <p className="font-jetbrains text-[10px] opacity-75 mt-1">{t.college}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
