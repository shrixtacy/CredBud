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
    <>
      {/* Mobile View - Exact match for Screenshot 3 Card 3 */}
      <div className="block md:hidden w-[92%] mx-auto my-4">
        <div className="bg-[#F7F4EB] border-2 border-[#14100F] shadow-[4px_4px_0px_0px_#14100F] rounded-[28px] p-6 text-[#14100F] relative overflow-hidden">
          {/* Faint watermark text background matching Screenshot 3 */}
          <div className="absolute inset-0 pointer-events-none select-none opacity-[0.06] flex flex-col justify-center gap-2 overflow-hidden -rotate-6 scale-125">
            <div className="font-bricolage font-black text-4xl uppercase tracking-tighter text-[#14100F]">
              BUDGETING INTEREST SAVINGS INVESTING
            </div>
            <div className="font-bricolage font-black text-4xl uppercase tracking-tighter text-[#14100F]">
              INTEREST SAVINGS INVESTING BUDGETING
            </div>
            <div className="font-bricolage font-black text-4xl uppercase tracking-tighter text-[#14100F]">
              SAVINGS INVESTING BUDGETING INTEREST
            </div>
          </div>

          {/* Top Tag Pill */}
          <div className="inline-block bg-[#ECE6FF] border-2 border-[#14100F] rounded-full px-4 py-1.5 font-jetbrains text-xs font-bold uppercase tracking-wider text-[#14100F] mb-4 relative z-10">
            // 03. LEARN
          </div>

          {/* Title */}
          <h2 className="font-bricolage font-extrabold text-3xl sm:text-4xl text-[#14100F] leading-[1.08] tracking-tight mb-3 relative z-10">
            Master your{' '}
            <span className="relative inline-block after:absolute after:bottom-[3px] after:left-0 after:right-0 after:h-[6px] after:bg-[#7B5CFF] after:-z-0 z-10">
              finances.
            </span>
          </h2>

          {/* Subtext */}
          <p className="font-jakarta text-sm text-[#14100F]/80 leading-relaxed font-normal relative z-10">
            Byte-sized financial education. Understand credit scores, taxes, and investing before you graduate.
          </p>
        </div>
      </div>

      {/* Desktop View - Untouched original sticky panel */}
      <div className="hidden md:flex sticky top-[5vh] md:top-[4vh] h-[90vh] md:h-[92vh] w-full z-[12] items-center justify-center my-4">
        <div ref={containerRef} className="w-[95%] md:w-[96%] h-full bg-bg-primary flex flex-col justify-center brutal-card overflow-hidden relative">
          
          {/* Foreground Copy */}
          <div className="absolute inset-0 flex items-center justify-center z-10 p-8 pointer-events-none">
            <div className="max-w-4xl text-center">
              <span className="font-jetbrains text-ink font-normal tracking-widest uppercase text-xs brutal-pill bg-accent-purple/20 px-4 py-1.5 inline-block mb-4 pointer-events-auto">
                // 03. learn
              </span>
              <h2 className="font-bricolage text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-ink mb-6 tracking-tight whitespace-nowrap">
                Master your <span className="accent-underline text-ink">finances.</span>
              </h2>
              <p className="font-jakarta text-ink-muted text-lg md:text-xl leading-relaxed max-w-xl mx-auto">
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
    </>
  );
};
