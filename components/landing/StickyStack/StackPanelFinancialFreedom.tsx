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
    <>
      {/* Mobile View - Clean card layout */}
      <div className="block md:hidden w-[92%] mx-auto my-4">
        <div className="bg-[#14100F] border-2 border-[#14100F] shadow-[4px_4px_0px_0px_#14100F] rounded-[28px] p-6 text-center text-white relative overflow-hidden">
          <h2 className="font-bricolage font-extrabold text-[#7B5CFF] text-3xl sm:text-4xl leading-tight tracking-tight mb-2">
            financial freedom.
          </h2>
          <p className="font-jetbrains text-xs text-white/70 uppercase tracking-[0.2em] mt-2 font-medium">
            Before you even graduate ✦
          </p>
        </div>
      </div>

      {/* Desktop View - Untouched sticky panel */}
      <div className="hidden md:flex sticky top-[5vh] md:top-[4vh] h-[90vh] md:h-[92vh] w-full z-[15] items-center justify-center my-4">
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
    </>
  );
};
