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
    <div className="sticky top-[5vh] md:top-[4vh] h-[90vh] md:h-[92vh] w-full z-[10] flex items-center justify-center my-4">
      <div ref={containerRef} className="w-[95%] md:w-[96%] h-full bg-accent-lime flex items-center justify-center p-8 brutal-card overflow-hidden bg-elements">
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Left Side: Copy */}
          <div className="md:col-span-5 flex flex-col items-start justify-center h-full space-y-6">
            <span className="font-jetbrains text-ink font-normal tracking-widest uppercase text-xs brutal-pill bg-white px-4 py-1.5">
              // 01. borrow
            </span>
            <h2 className="font-bricolage text-5xl md:text-6xl font-extrabold tracking-tight text-ink leading-[1.05]">
              Instant access to <KeywordHighlight text="cash" /> when you need it.
            </h2>
            <p className="font-jakarta text-ink-muted text-lg leading-relaxed max-w-sm">
              Cover tuition, buy that laptop, or just handle month-end expenses. No lengthy paperwork, just rapid approvals.
            </p>
          </div>

          {/* Right Side: Numbers Led */}
          <div className="md:col-span-7 flex flex-col space-y-4 md:pl-16">
            {['₹500', '₹5,000', '₹50,000'].map((num, i) => (
              <div key={i} className="borrow-number font-bricolage text-6xl md:text-8xl font-extrabold text-ink/20 transform origin-left transition-colors">
                {num}
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};
