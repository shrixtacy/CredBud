'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

export const StackPanelLearn = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to('.learn-type-wall', {
        x: '-20%',
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="sticky top-0 h-screen w-full bg-ink-dark flex flex-col justify-center overflow-hidden border-b border-ink/20">
      
      {/* Foreground Copy */}
      <div className="absolute inset-0 flex items-center justify-center z-10 p-8 pointer-events-none">
        <div className="max-w-2xl text-center">
          <h2 className="font-chillax text-5xl md:text-7xl font-medium text-white mb-6 tracking-tight">
            Master your <span className="editorial-italic text-accent-blue">finances</span>.
          </h2>
          <p className="font-satoshi text-white/70 text-xl leading-relaxed">
            Byte-sized financial education. Understand credit scores, taxes, and investing before you graduate.
          </p>
        </div>
      </div>

      {/* Typography Wall Texture */}
      <div className="learn-type-wall whitespace-nowrap opacity-5 flex flex-col gap-4 -rotate-2 scale-110 select-none">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="font-chillax font-bold text-7xl md:text-[8rem] text-white tracking-tighter uppercase leading-none">
            SAVINGS INVESTING CREDIT SCORE TAXES BUDGETING INTEREST SAVINGS INVESTING CREDIT SCORE TAXES BUDGETING INTEREST
          </div>
        ))}
      </div>
      
    </div>
  );
};
