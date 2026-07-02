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
    <div ref={containerRef} className="sticky top-0 h-screen w-full bg-bg-primary flex items-center p-8 border-b border-ink/10">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* Copy */}
        <div className="flex flex-col space-y-6">
          <h2 className="font-chillax text-5xl md:text-7xl font-medium tracking-tight leading-[1.05]">
            Start building your <br />
            <KeywordHighlight text="credit score" /> early.
          </h2>
          <p className="font-satoshi text-lg text-ink/70 max-w-md">
            Every timely repayment on CreditBuddy contributes to your credit history. Graduate with a stellar score.
          </p>
        </div>

        {/* Type Graph */}
        <div className="h-[400px] flex items-end justify-center space-x-4 md:space-x-8">
          {[
            { label: 'Month 1', score: '650' },
            { label: 'Month 3', score: '680' },
            { label: 'Month 6', score: '720' },
            { label: 'Month 12', score: '780' }
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center h-full justify-end w-16 md:w-24">
              <span className="font-chillax font-bold text-xl md:text-3xl text-ink/40 mb-4">{item.score}</span>
              <div className="credit-bar w-full bg-ink/5 rounded-t-xl relative overflow-hidden flex flex-col justify-end">
                {i === 3 && <div className="absolute inset-0 bg-accent-blue" />}
              </div>
              <span className="font-satoshi text-sm text-ink/50 mt-4">{item.label}</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
