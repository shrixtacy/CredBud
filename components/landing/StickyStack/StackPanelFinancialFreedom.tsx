'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

export const StackPanelFinancialFreedom = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo('.freedom-text',
        { scale: 0.9, opacity: 0 },
        {
          scale: 1, opacity: 1, duration: 1.5, ease: 'power2.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top center',
            end: 'bottom center',
            scrub: true,
          }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="sticky top-0 h-screen w-full bg-bg-primary flex items-center justify-center p-8 overflow-hidden">
      <div className="freedom-text text-center w-full max-w-7xl">
        <h2 className="editorial-italic text-accent-indigo text-[3rem] sm:text-[5rem] md:text-[8rem] lg:text-[10rem] leading-none tracking-tight">
          financial freedom.
        </h2>
        <p className="font-satoshi text-ink/50 uppercase tracking-[0.3em] mt-8 text-sm md:text-base">
          Before you even graduate
        </p>
      </div>
    </div>
  );
};
