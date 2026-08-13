'use client';

import React from 'react';

export const AboutStoryMission = () => {
  return (
    <section className="py-20 md:py-24 px-6 md:px-12 bg-bg-primary w-full max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="bg-accent-purple text-white brutal-card p-8 md:p-12 space-y-6" style={{ boxShadow: '8px 8px 0px #14100F' }}>
          <span className="font-jetbrains text-xs uppercase tracking-widest text-white/70">// the origin story</span>
          <h2 className="font-bricolage text-3xl md:text-4xl font-extrabold">
            Founded in a college hostel room.
          </h2>
          <p className="font-jakarta text-white/90 leading-relaxed text-sm md:text-base">
            We experienced firsthand the embarrassment of being rejected by banks for simple emergency advances. We realized millions of Indian students face the exact same barrier.
          </p>
        </div>

        <div className="bg-accent-lime text-ink brutal-card p-8 md:p-12 space-y-6" style={{ boxShadow: '8px 8px 0px #14100F' }}>
          <span className="font-jetbrains text-xs uppercase tracking-widest text-ink/70">// our vision</span>
          <h2 className="font-bricolage text-3xl md:text-4xl font-extrabold">
            A credit score before graduation.
          </h2>
          <p className="font-jakarta text-ink-muted leading-relaxed text-sm md:text-base">
            Our goal is simple: ensure every student in India graduates with a healthy credit score, practical financial knowledge, and zero predatory debt.
          </p>
        </div>
      </div>
    </section>
  );
};
