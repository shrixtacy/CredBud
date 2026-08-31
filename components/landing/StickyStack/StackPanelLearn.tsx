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
    <div className="sticky top-[10vh] md:top-[4vh] h-auto py-2 md:h-[92vh] w-full z-[12] flex items-center justify-center my-4">
      <div ref={containerRef} className="w-[95%] md:w-[96%] h-[260px] md:h-full bg-bg-primary flex flex-col justify-center items-center brutal-card overflow-hidden relative py-12 md:py-0">
        
        {/* Foreground Copy */}
        <div className="relative z-10 max-w-4xl text-center px-6">
          <span className="font-jetbrains text-ink font-normal tracking-widest uppercase text-xs brutal-pill bg-accent-purple/20 px-4 py-1.5 inline-block mb-4">
            // 03. learn
          </span>
          <h2 className="font-bricolage text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-ink mb-6 tracking-tight">
            Master your <span className="accent-underline text-ink">finances.</span>
          </h2>
          <p className="font-jakarta text-ink-muted text-xs sm:text-xl leading-relaxed max-w-xl mx-auto">
            Byte-sized financial education. Understand credit scores, taxes, and investing before you graduate.
          </p>
        </div>

        {/* Typography Wall Texture (Background) */}
        <div className="learn-type-wall absolute inset-0 opacity-[0.04] flex flex-col gap-4 -rotate-2 scale-110 select-none pointer-events-none justify-center">
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
