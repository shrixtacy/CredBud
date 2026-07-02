'use client';

import React, { useRef, useEffect } from 'react';
import { KeywordHighlight } from '../shared/KeywordHighlight';
import gsap from 'gsap';

export const ShowcaseBorrow = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo('.borrow-showcase-item',
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, stagger: 0.1, duration: 1, ease: 'power2.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 70%',
          }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-32 px-6 md:px-12 bg-bg-primary w-full">
      <div className="max-w-7xl mx-auto w-full">
        <div className="mb-16 max-w-3xl">
          <h2 className="borrow-showcase-item font-chillax text-4xl md:text-6xl font-medium tracking-tight mb-6">
            Borrow without the <KeywordHighlight text="bureaucracy" />.
          </h2>
          <p className="borrow-showcase-item font-satoshi text-ink/70 text-lg">
            Traditional banks don&apos;t understand students. We do. 
            No income proof required, just your campus ID and basic verification.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-auto md:h-[600px]">
          {/* Main Visual */}
          <div className="borrow-showcase-item md:col-span-8 bg-white/50 backdrop-blur rounded-[2rem] border border-ink/5 p-8 flex flex-col justify-end relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-t from-accent-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <h3 className="font-chillax text-4xl font-medium relative z-10">Up to ₹50,000</h3>
            <p className="font-satoshi text-ink/60 mt-2 relative z-10">Instant credit line</p>
          </div>
          
          {/* Side Info */}
          <div className="md:col-span-4 flex flex-col gap-8">
            <div className="borrow-showcase-item flex-1 bg-ink text-white rounded-[2rem] p-8 flex flex-col justify-between">
              <span className="editorial-italic text-2xl">0%</span>
              <p className="font-satoshi text-white/80">Interest for the first 30 days. Pay back what you borrow, nothing more.</p>
            </div>
            <div className="borrow-showcase-item flex-1 bg-accent-blue text-white rounded-[2rem] p-8 flex flex-col justify-between">
              <span className="editorial-italic text-2xl">60s</span>
              <p className="font-satoshi text-white/80">Approval time. Faster than making instant noodles.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
