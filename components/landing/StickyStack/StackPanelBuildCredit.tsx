'use client';

import React, { useRef, useEffect } from 'react';
import { KeywordHighlight } from '../shared/KeywordHighlight';
import gsap from 'gsap';

export const StackPanelBuildCredit = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const bars = gsap.utils.toArray('.credit-bar');
      bars.forEach((bar, i) => {
        gsap.fromTo(bar as Element, 
          { height: '10%' },
          {
            height: `${40 + (i * 15)}%`,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top center',
              end: 'bottom center',
              scrub: true,
            }
          }
        );
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Mobile View - Clean card layout */}
      <div className="block md:hidden w-[92%] mx-auto my-4">
        <div className="bg-white border-2 border-[#14100F] shadow-[4px_4px_0px_0px_#14100F] rounded-[28px] p-6 text-[#14100F]">
          {/* Top Tag Pill */}
          <div className="inline-block bg-[#35C8FF] text-[#14100F] border-2 border-[#14100F] rounded-full px-4 py-1.5 font-jetbrains text-xs font-bold uppercase tracking-wider mb-4">
            // 04. BUILD CREDIT
          </div>

          {/* Title */}
          <h2 className="font-bricolage font-extrabold text-3xl sm:text-4xl text-[#14100F] leading-[1.08] tracking-tight mb-3">
            Start building your{' '}
            <span className="relative inline-block after:absolute after:bottom-[3px] after:left-0 after:right-0 after:h-[6px] after:bg-[#7B5CFF] after:-z-0 z-10">
              credit score
            </span>{' '}
            early.
          </h2>

          {/* Subtext */}
          <p className="font-jakarta text-sm text-[#14100F]/80 leading-relaxed font-normal">
            Every timely repayment on CreditBuddy contributes to your credit history. Graduate with a stellar score.
          </p>
        </div>
      </div>

      {/* Desktop View - Untouched sticky panel */}
      <div className="hidden md:flex sticky top-[5vh] md:top-[4vh] h-[90vh] md:h-[92vh] w-full z-[13] items-center justify-center my-4">
        <div ref={containerRef} className="w-[95%] md:w-[96%] h-full bg-bg-primary flex items-start md:items-center p-5 sm:p-8 brutal-card bg-elements overflow-y-auto md:overflow-hidden pt-8 md:pt-8">
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            
            {/* Copy */}
            <div className="flex flex-col space-y-3 sm:space-y-6 pt-2 md:pt-0">
              <span className="font-jetbrains text-ink font-normal tracking-widest uppercase text-xs brutal-pill bg-accent-cyan px-4 py-1.5 inline-block w-fit">
                // 04. build credit
              </span>
              <h2 className="font-bricolage text-3xl sm:text-4xl md:text-7xl font-extrabold tracking-tight leading-[1.08]">
                Start building your <br className="hidden sm:inline" />
                <KeywordHighlight text="credit score" /> early.
              </h2>
              <p className="font-jakarta text-sm sm:text-lg text-ink-muted max-w-md">
                Every timely repayment on CreditBuddy contributes to your credit history. Graduate with a stellar score.
              </p>
            </div>

            {/* Type Graph */}
            <div className="h-[220px] sm:h-[300px] md:h-[400px] flex items-end justify-center space-x-3 sm:space-x-4 md:space-x-8">
              {[
                { label: 'Month 1', score: '650' },
                { label: 'Month 3', score: '680' },
                { label: 'Month 6', score: '720' },
                { label: 'Month 12', score: '780' }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center h-full justify-end w-12 sm:w-16 md:w-24">
                  <span className="font-bricolage font-extrabold text-lg sm:text-xl md:text-3xl text-ink/30 mb-2 sm:mb-4">{item.score}</span>
                  <div className="credit-bar w-full bg-bg-secondary rounded-t-xl relative overflow-hidden flex flex-col justify-end brutal-border">
                    {i === 3 && <div className="absolute inset-0 bg-accent-lime" />}
                  </div>
                  <span className="font-jetbrains text-[10px] sm:text-xs text-ink-muted mt-2 sm:mt-4">{item.label}</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </>
  );
};
