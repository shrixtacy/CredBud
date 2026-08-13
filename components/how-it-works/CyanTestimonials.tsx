'use client';

import React from 'react';

const REVIEWS = [
  {
    quote: '"My laptop died two days before submissions. CreditBuddy got me ₹40k the same afternoon. Actual lifesaver."',
    name: 'Ananya R.',
    role: 'B.Tech, 2nd year',
    initial: 'A',
    color: 'bg-accent-coral text-ink',
  },
  {
    quote: '"I make ₹9k a month just repping CreditBuddy on campus. Pays my hostel mess bill, no cap."',
    name: 'Dev Malhotra',
    role: 'Campus Ambassador',
    initial: 'D',
    color: 'bg-accent-cyan text-ink',
  },
  {
    quote: '"The Learn section taught me more about money than 3 years of college. And it\'s actually fun??"',
    name: 'Fatima K.',
    role: 'B.Com, Final year',
    initial: 'F',
    color: 'bg-accent-gold text-ink',
  },
  {
    quote: '"Went from no credit history to a 740 score before graduating. Feels like cheating (legally)."',
    name: 'Rohit S.',
    role: 'First-time borrower',
    initial: 'R',
    color: 'bg-accent-lime text-ink',
  },
];

export const CyanTestimonials = () => {
  return (
    <section className="w-full">
      {/* 1. Cyan Testimonials Strip (Figma Screenshot 4 Top) */}
      <div className="bg-accent-cyan py-20 md:py-24 px-6 md:px-12 w-full text-ink">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <h2 className="font-bricolage text-4xl md:text-6xl font-extrabold tracking-tight">
              Loved by students, <br />not banks.
            </h2>
            <div className="flex items-center gap-2">
              <div className="flex text-ink text-lg">★★★★★</div>
              <span className="font-jetbrains text-xs font-bold">4.9 on the app store</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {REVIEWS.map((r, i) => (
              <div
                key={i}
                className={`${r.color} brutal-card p-6 flex flex-col justify-between min-h-[260px] hover:translate-y-[-4px] transition-transform duration-300`}
                style={{ boxShadow: '4px 4px 0px #14100F' }}
              >
                <p className="font-bricolage font-bold text-sm md:text-base leading-snug">
                  {r.quote}
                </p>
                <div className="flex items-center gap-3 pt-6">
                  <div className="w-9 h-9 rounded-full bg-white brutal-border flex items-center justify-center font-bricolage font-extrabold text-ink text-sm">
                    {r.initial}
                  </div>
                  <div>
                    <h4 className="font-bricolage font-extrabold text-xs">{r.name}</h4>
                    <p className="font-jetbrains text-[10px] opacity-75">{r.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* 2. Big Lime Final CTA Card (Figma Screenshot 4 Bottom) */}
      <div className="py-16 md:py-24 px-6 md:px-12 bg-bg-primary w-full">
        <div className="max-w-6xl mx-auto bg-accent-lime brutal-card p-10 md:p-20 text-center relative overflow-hidden" style={{ boxShadow: '8px 8px 0px #14100F' }}>
          
          {/* Corner Circles */}
          <div className="absolute -top-12 -left-12 w-32 h-32 rounded-full bg-accent-coral brutal-border pointer-events-none" />
          <div className="absolute -bottom-16 -right-16 w-44 h-44 rounded-full bg-accent-purple brutal-border pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="font-jetbrains text-xs font-normal text-ink uppercase tracking-widest block mb-4">
              no salary slip • no credit history • no stress
            </span>
            
            <h2 className="font-bricolage text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-ink mb-6">
              Your dreams can&apos;t wait.
            </h2>
            
            <p className="font-jakarta text-ink-muted text-base md:text-lg max-w-xl mx-auto mb-10">
              Join 62,000+ students borrowing smart, earning steady, and building a future they own.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button suppressHydrationWarning className="w-full sm:w-auto px-8 py-4 bg-ink text-bg-primary font-bricolage font-bold text-base brutal-pill brutal-shadow-purple transition-transform hover:scale-105 cursor-pointer">
                Get started free ↗
              </button>
              <button suppressHydrationWarning className="w-full sm:w-auto px-8 py-4 bg-white text-ink font-bricolage font-bold text-base brutal-pill transition-transform hover:scale-105 cursor-pointer">
                Talk to us
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
