'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

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
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo('.review-card-item',
        { y: 80, opacity: 0, scale: 0.85, rotate: 3 },
        {
          y: 0, opacity: 1, scale: 1, rotate: 0,
          stagger: 0.12, duration: 0.85, ease: 'back.out(1.8)',
          scrollTrigger: { trigger: containerRef.current, start: 'top 75%' }
        }
      );

      gsap.fromTo('.cta-big-card',
        { y: 80, opacity: 0, scale: 0.92 },
        {
          y: 0, opacity: 1, scale: 1, duration: 0.9, ease: 'back.out(1.5)',
          scrollTrigger: { trigger: '.cta-big-card', start: 'top 80%' }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="w-full overflow-hidden">
      {/* 1. Cyan Testimonials Strip */}
      <div className="bg-accent-cyan py-10 md:py-24 px-4 md:px-12 w-full text-ink">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-16 gap-4 md:gap-6">
            <h2 className="font-bricolage text-3xl md:text-6xl font-extrabold tracking-tight leading-tight">
              Loved by students, <br className="hidden md:block" />not banks.
            </h2>
            <div className="flex items-center gap-2">
              <div className="flex text-ink text-sm md:text-lg">★★★★★</div>
              <span className="font-jetbrains text-xs font-bold">4.9 on the app store</span>
            </div>
          </div>

          <div className="flex overflow-x-auto md:grid md:grid-cols-4 gap-4 md:gap-6 no-scrollbar pb-4 md:pb-0 snap-x snap-mandatory">
            {REVIEWS.map((r, i) => (
              <div
                key={i}
                className={`review-card-item ${r.color} brutal-card p-5 md:p-6 w-[260px] md:w-auto shrink-0 snap-center md:shrink flex flex-col justify-between min-h-[190px] md:min-h-[260px] hover:translate-y-[-4px] transition-transform duration-300`}
                style={{ boxShadow: '4px 4px 0px #14100F' }}
              >
                <p className="font-bricolage font-bold text-sm md:text-base leading-snug">
                  {r.quote}
                </p>
                <div className="flex items-center gap-3 pt-4 md:pt-6">
                  <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-white brutal-border flex items-center justify-center font-bricolage font-extrabold text-ink text-xs md:text-sm shrink-0">
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

    </section>
  );
};
