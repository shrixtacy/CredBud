'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const StudentsEarnSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo('.earn-card-item',
        { y: 90, opacity: 0, scale: 0.85, rotate: -3 },
        {
          y: 0, opacity: 1, scale: 1, rotate: 0,
          stagger: 0.12, duration: 0.85, ease: 'back.out(1.8)',
          scrollTrigger: { trigger: containerRef.current, start: 'top 75%' }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-10 md:py-24 px-4 md:px-12 bg-bg-secondary border-t-[1.6px] border-ink w-full overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-16 gap-4 md:gap-6">
          <div>
            <span className="font-jetbrains text-ink-muted text-xs block mb-2">// campus gigs</span>
            <h2 className="font-bricolage text-3xl md:text-6xl font-extrabold tracking-tight text-ink">
              Earn steady while you study.
            </h2>
          </div>
          <p className="font-jakarta text-ink-muted text-xs md:text-base max-w-sm">
            Turn your free time between classes into instant wallet cash with verified campus micro-gigs.
          </p>
        </div>

        <div className="flex overflow-x-auto md:grid md:grid-cols-3 gap-4 md:gap-6 no-scrollbar pb-4 md:pb-0 snap-x snap-mandatory">
          <div className="earn-card-item bg-white brutal-card p-5 md:p-8 w-[260px] md:w-auto shrink-0 snap-center md:shrink flex flex-col justify-between min-h-[220px]">
            <span className="font-jetbrains text-xs font-bold text-accent-purple">// AMBASSADOR</span>
            <div className="my-4 md:my-6">
              <h3 className="font-bricolage text-2xl md:text-3xl font-extrabold text-ink mb-2">Campus Leader</h3>
              <p className="font-jakarta text-xs text-ink-muted">Represent CreditBuddy on your campus and earn monthly stipends up to ₹15,000.</p>
            </div>
            <button className="py-2.5 px-4 bg-ink text-bg-primary font-bricolage font-bold text-xs brutal-pill">Apply Now →</button>
          </div>

          <div className="earn-card-item bg-accent-gold brutal-card p-5 md:p-8 w-[260px] md:w-auto shrink-0 snap-center md:shrink flex flex-col justify-between min-h-[220px]">
            <span className="font-jetbrains text-xs font-bold text-ink">// REFERRALS</span>
            <div className="my-4 md:my-6">
              <h3 className="font-bricolage text-2xl md:text-3xl font-extrabold text-ink mb-2">₹250 per Friend</h3>
              <p className="font-jakarta text-xs text-ink/80">Invite batchmates. Both get rewarded instantly when they sign up.</p>
            </div>
            <button className="py-2.5 px-4 bg-ink text-bg-primary font-bricolage font-bold text-xs brutal-pill">Get Invite Link →</button>
          </div>

          <div className="earn-card-item bg-accent-cyan brutal-card p-5 md:p-8 w-[260px] md:w-auto shrink-0 snap-center md:shrink flex flex-col justify-between min-h-[220px]">
            <span className="font-jetbrains text-xs font-bold text-ink">// TASKS & SURVEYS</span>
            <div className="my-4 md:my-6">
              <h3 className="font-bricolage text-2xl md:text-3xl font-extrabold text-ink mb-2">Instant Micro-Gigs</h3>
              <p className="font-jakarta text-xs text-ink/80">Complete 5-minute brand surveys and product testing for quick cash payouts.</p>
            </div>
            <button className="py-2.5 px-4 bg-ink text-bg-primary font-bricolage font-bold text-xs brutal-pill">Explore Gigs →</button>
          </div>
        </div>
      </div>
    </section>
  );
};
