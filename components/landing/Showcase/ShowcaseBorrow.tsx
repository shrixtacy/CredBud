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
    <section ref={containerRef} className="py-20 md:py-24 px-6 md:px-12 bg-bg-primary w-[95%] md:w-[96%] mx-auto my-6 md:my-10 brutal-border bg-elements overflow-hidden rounded-[2rem] md:rounded-[3.5rem]">
      <div className="max-w-7xl mx-auto w-full">
        <div className="mb-16 max-w-3xl">
          <span className="borrow-showcase-item font-jetbrains text-ink font-normal tracking-widest uppercase text-xs brutal-pill bg-accent-lime px-4 py-1.5 inline-block mb-4">
            // borrow feature
          </span>
          <h2 className="borrow-showcase-item font-bricolage text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Borrow without the <KeywordHighlight text="bureaucracy" />.
          </h2>
          <p className="borrow-showcase-item font-jakarta text-ink-muted text-lg">
            Traditional banks don&apos;t understand students. We do.
            No income proof required, just your campus ID and basic verification.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-auto md:h-[500px]">
          {/* Main Visual */}
          <div className="borrow-showcase-item md:col-span-8 bg-white brutal-card p-8 flex flex-col justify-end relative overflow-hidden group">
            <div className="absolute inset-0 bg-accent-lime/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <h3 className="font-bricolage text-4xl md:text-5xl font-extrabold relative z-10 text-ink">Up to ₹50,000</h3>
            <p className="font-jakarta text-ink-muted mt-2 relative z-10">Instant credit line linked directly to your student ID</p>
          </div>

          {/* Side Info */}
          <div className="md:col-span-4 flex flex-col gap-8">
            <div className="borrow-showcase-item flex-1 bg-ink text-white brutal-card p-8 flex flex-col justify-between" style={{ boxShadow: '6px 6px 0px #7B5CFF' }}>
              <span className="font-bricolage font-extrabold text-3xl text-accent-lime">0%</span>
              <p className="font-jakarta text-white/80">Interest for the first 30 days. Pay back what you borrow, nothing more.</p>
            </div>
            <div className="borrow-showcase-item flex-1 bg-accent-lime text-ink brutal-card p-8 flex flex-col justify-between">
              <span className="font-bricolage font-extrabold text-3xl text-ink">60s</span>
              <p className="font-jakarta text-ink font-medium">Approval time. Faster than making instant noodles.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
