'use client';

import React, { useRef, useEffect } from 'react';
import { KeywordHighlight } from '../shared/KeywordHighlight';
import gsap from 'gsap';

export const StackPanelBorrow = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to('.borrow-number', {
        scale: 1.1,
        color: '#7B5CFF',
        stagger: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top center',
          end: 'bottom center',
          scrub: true,
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Mobile View - Exact match for Screenshot 2 Card 1 */}
      <div className="block md:hidden w-[92%] mx-auto my-4">
        <div className="bg-[#C8FF3D] border-2 border-[#14100F] shadow-[4px_4px_0px_0px_#14100F] rounded-[28px] p-6 text-[#14100F]">
          {/* Top Tag Pill */}
          <div className="inline-block bg-white border-2 border-[#14100F] rounded-full px-4 py-1.5 font-jetbrains text-xs font-bold uppercase tracking-wider text-[#14100F] mb-4">
            // 01. BORROW
          </div>

          {/* Title */}
          <h2 className="font-bricolage font-extrabold text-3xl sm:text-4xl text-[#14100F] leading-[1.08] tracking-tight mb-3">
            Instant access to{' '}
            <span className="relative inline-block after:absolute after:bottom-[3px] after:left-0 after:right-0 after:h-[6px] after:bg-[#7B5CFF] after:-z-0 z-10">
              cash
            </span>{' '}
            when you need it.
          </h2>

          {/* Subtext */}
          <p className="font-jakarta text-sm text-[#14100F]/80 leading-relaxed font-normal">
            Cover tuition, buy that laptop, or handle month-end expenses. Rapid approvals from ₹500 up to ₹50,000.
          </p>
        </div>
      </div>

      {/* Desktop View - Untouched original sticky panel */}
      <div className="hidden md:flex sticky top-[5vh] md:top-[4vh] h-[90vh] md:h-[92vh] w-full z-[10] items-center justify-center my-4">
        <div ref={containerRef} className="w-[95%] md:w-[96%] h-full bg-accent-lime flex items-start md:items-center p-5 sm:p-8 brutal-card bg-elements overflow-y-auto md:overflow-hidden pt-8 md:pt-8">
          <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center">
            
            {/* Left Side: Copy */}
            <div className="md:col-span-5 flex flex-col items-start justify-center space-y-3 sm:space-y-6 pt-2 md:pt-0">
              <span className="font-jetbrains text-ink font-normal tracking-widest uppercase text-xs brutal-pill bg-white px-4 py-1.5">
                // 01. borrow
              </span>
              <h2 className="font-bricolage text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight text-ink leading-[1.08]">
                Instant access to <KeywordHighlight text="cash" /> when you need it.
              </h2>
              <p className="font-jakarta text-sm sm:text-lg text-ink-muted leading-relaxed max-w-sm">
                Cover tuition, buy that laptop, or just handle month-end expenses. No lengthy paperwork, just rapid approvals.
              </p>
            </div>

            {/* Right Side: Numbers Led */}
            <div className="md:col-span-7 flex flex-col space-y-2 sm:space-y-4 md:pl-16">
              {['₹500', '₹5,000', '₹50,000'].map((num, i) => (
                <div key={i} className="borrow-number font-bricolage text-4xl sm:text-6xl md:text-8xl font-extrabold text-ink/20 transform origin-left transition-colors">
                  {num}
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </>
  );
};
