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
    <div className="sticky top-[5vh] md:top-[4vh] h-[90vh] md:h-[92vh] w-full z-[12] flex items-center justify-center my-4">
      <div ref={containerRef} className="w-[95%] md:w-[96%] h-full bg-bg-primary flex flex-col justify-center brutal-card overflow-hidden relative">
        
        {/* Foreground Copy */}
        <div className="absolute inset-0 flex items-center justify-center z-10 p-8 pointer-events-none">
          <div className="max-w-2xl text-center">
            <span className="font-jetbrains text-ink font-normal tracking-widest uppercase text-xs brutal-pill bg-accent-purple/20 px-4 py-1.5 inline-block mb-4 pointer-events-auto">
              // 03. learn
            </span>
            <h2 className="font-bricolage text-5xl md:text-7xl font-extrabold text-ink mb-6 tracking-tight">
              Master your <span className="accent-underline text-ink">finances</span>.
            </h2>
            <p className="font-jakarta text-ink-muted text-xl leading-relaxed">
              Byte-sized financial education. Understand credit scores, taxes, and investing before you graduate.
            </p>
          </div>
        </div>

        {/* Typography Wall Texture */}
        <div className="learn-type-wall whitespace-nowrap opacity-[0.04] flex flex-col gap-4 -rotate-2 scale-110 select-none">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="font-bricolage font-extrabold text-7xl md:text-[8rem] text-ink tracking-tighter uppercase leading-none">
              SAVINGS INVESTING CREDIT SCORE TAXES BUDGETING INTEREST SAVINGS INVESTING CREDIT SCORE TAXES BUDGETING INTEREST
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
};
