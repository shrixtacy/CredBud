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
        color: '#4F6FFF',
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
    <div ref={containerRef} className="sticky top-0 h-screen w-full bg-bg-primary flex items-center justify-center p-8 border-b border-ink/10 overflow-hidden bg-elements">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        
        {/* Left Side: Copy */}
        <div className="md:col-span-5 flex flex-col items-start justify-center h-full space-y-6">
          <span className="font-satoshi text-accent-blue font-medium tracking-widest uppercase text-sm border border-accent-blue/30 rounded-full px-4 py-1.5">
            Borrow
          </span>
          <h2 className="font-chillax text-5xl md:text-6xl font-medium tracking-tight text-ink leading-[1.1]">
            Instant access to <KeywordHighlight text="cash" /> when you need it.
          </h2>
          <p className="font-satoshi text-ink/70 text-lg leading-relaxed max-w-sm">
            Cover tuition, buy that laptop, or just handle month-end expenses. No lengthy paperwork, just rapid approvals.
          </p>
        </div>

        {/* Right Side: Numbers Led */}
        <div className="md:col-span-7 flex flex-col space-y-4 md:pl-16">
          {['₹500', '₹5,000', '₹50,000'].map((num, i) => (
            <div key={i} className="borrow-number font-chillax text-6xl md:text-8xl font-bold text-ink/10 transform origin-left transition-colors">
              {num}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
