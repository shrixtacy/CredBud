'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const METRICS = [
  { value: '62,000+', label: 'Active Students' },
  { value: '400+', label: 'College Campuses' },
  { value: '₹12 Cr+', label: 'Disbursed Safely' },
  { value: '4.9 ★', label: 'App Store Rating' },
];

export const StudentsTrustMetrics = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo('.metric-card-item',
        { y: 60, opacity: 0, scale: 0.82 },
        {
          y: 0, opacity: 1, scale: 1, stagger: 0.1, duration: 0.8, ease: 'back.out(1.8)',
          scrollTrigger: { trigger: containerRef.current, start: 'top 85%' }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-16 px-6 md:px-12 bg-bg-primary border-t-[1.6px] border-ink w-full">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
        {METRICS.map((m, i) => (
          <div key={i} className="metric-card-item bg-white brutal-card p-6 text-center">
            <h3 className="font-bricolage font-extrabold text-3xl md:text-5xl text-ink mb-1">{m.value}</h3>
            <p className="font-jetbrains text-xs text-ink-muted uppercase">{m.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
