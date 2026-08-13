'use client';

import React, { useRef, useEffect } from 'react';
import { KeywordHighlight } from '../shared/KeywordHighlight';
import gsap from 'gsap';

export const ShowcaseEarn = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo('.earn-showcase-fade',
        { scale: 0.95, opacity: 0 },
        {
          scale: 1, opacity: 1, duration: 1.2, ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 60%',
          }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-24 px-6 md:px-12 bg-bg-secondary w-[95%] md:w-[96%] mx-auto my-6 md:my-10 brutal-border bg-elements overflow-hidden rounded-[2rem] md:rounded-[3.5rem]">
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center gap-16">

        {/* Left Side: Large staggered grid */}
        <div className="w-full md:w-1/2 relative h-[500px]">
          <div className="earn-showcase-fade absolute top-0 left-0 w-[60%] h-[60%] bg-white brutal-card p-6 -rotate-3 z-10 flex flex-col justify-between">
            <span className="font-jetbrains text-xs text-ink-muted uppercase">// Referral</span>
            <div className="font-bricolage font-extrabold text-4xl text-accent-purple">₹500 <span className="text-lg text-ink-muted font-jakarta">/friend</span></div>
          </div>
          <div className="earn-showcase-fade absolute bottom-0 right-0 w-[65%] h-[55%] bg-accent-gold text-ink brutal-card p-6 rotate-2 z-20 flex flex-col justify-between">
            <span className="font-jetbrains text-xs text-ink uppercase">// Campus Gig</span>
            <div>
              <div className="font-jakarta font-bold text-xl">Event Promo</div>
              <div className="font-bricolage font-extrabold text-3xl mt-2">₹1,200</div>
            </div>
          </div>
        </div>

        {/* Right Side: Copy */}
        <div className="w-full md:w-1/2 flex flex-col space-y-6">
          <span className="earn-showcase-fade font-jetbrains text-ink font-normal tracking-widest uppercase text-xs brutal-pill bg-accent-gold px-4 py-1.5 w-fit">
            // earn feature
          </span>
          <h2 className="earn-showcase-fade font-bricolage text-4xl md:text-6xl font-extrabold tracking-tight">
            Turn your free time into <KeywordHighlight text="income" />.
          </h2>
          <p className="earn-showcase-fade font-jakarta text-ink-muted text-lg leading-relaxed">
            Don&apos;t just borrow. Earn. Our curated campus gig board and powerful referral program help you make money while you study.
          </p>
          <div className="earn-showcase-fade pt-4">
            <button className="px-6 py-3 bg-ink text-bg-primary rounded-full font-bricolage font-bold brutal-pill brutal-shadow-purple hover:scale-105 transition-transform duration-300">
              Explore Gigs →
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
