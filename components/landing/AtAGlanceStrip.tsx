'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const features = [
  "Instant Cash & Campus Loans",
  "No Credit Score Required",
  "Build Credit History Early",
  "Exclusive Campus Rewards"
];

export const AtAGlanceStrip = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        '.glance-item',
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 85%',
          }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="w-full border-t border-ink/10 bg-bg-secondary/50 overflow-hidden py-8 px-12 z-10">
      <div className="max-w-7xl mx-auto w-full flex flex-wrap justify-between items-center gap-8">
        <div className="flex gap-20 flex-wrap">
          {features.map((feature, i) => (
            <div key={i} className="glance-item flex flex-col">
              <span className="text-[10px] uppercase tracking-widest opacity-40 font-bold mb-1">
                Phase {(i + 1).toString().padStart(2, '0')}
              </span>
              <span className="text-lg font-medium whitespace-nowrap">
                {feature}
              </span>
            </div>
          ))}
        </div>
        
        <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-accent-blue flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-accent-blue animate-pulse"></span>
          Live in 400+ Campuses
        </div>
      </div>
    </div>
  );
};
