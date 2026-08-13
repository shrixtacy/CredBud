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
    <div className="sticky top-[5vh] md:top-[4vh] h-[90vh] md:h-[92vh] w-full z-[15] flex items-center justify-center my-4">
      <div ref={containerRef} className="w-[95%] md:w-[96%] h-full bg-bg-primary flex items-center justify-center p-8 overflow-hidden bg-elements brutal-card">
        <div className="freedom-text text-center w-full max-w-7xl">
          <h2 className="font-bricolage font-extrabold text-accent-purple text-[3rem] sm:text-[5rem] md:text-[8rem] lg:text-[10rem] leading-none tracking-tight">
            financial freedom.
          </h2>
          <p className="font-jetbrains text-ink-muted uppercase tracking-[0.3em] mt-8 text-sm md:text-base">
            Before you even graduate ✦
          </p>
        </div>
      </div>
    </div>
  );
};
