'use client';

import React, { useRef, useEffect } from 'react';
import { KeywordHighlight } from '../shared/KeywordHighlight';
import gsap from 'gsap';

export const StackPanelEarn = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo('.earn-col', 
        { y: 100, opacity: 0 },
        {
          y: 0, opacity: 1, stagger: 0.1, duration: 1, ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 60%',
          }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="sticky top-0 h-screen w-full bg-bg-secondary flex items-center p-8 border-b border-ink/10">
      <div className="max-w-7xl mx-auto w-full h-full flex flex-col justify-center">
        
        <div className="mb-12">
          <h2 className="font-chillax text-6xl md:text-8xl font-medium tracking-tight text-ink">
            Earn while you <KeywordHighlight text="learn" />.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end h-[50vh]">
          {/* Col 1 */}
          <div className="earn-col bg-white/40 backdrop-blur border border-white/60 p-6 rounded-2xl h-[80%] flex flex-col justify-between">
            <span className="editorial-italic text-accent-indigo text-xl">Internships</span>
            <p className="font-satoshi text-ink/80 text-lg">Curated paid opportunities directly from our network.</p>
          </div>
          
          {/* Col 2 */}
          <div className="earn-col bg-white/40 backdrop-blur border border-white/60 p-6 rounded-2xl h-full flex flex-col justify-between">
            <span className="editorial-italic text-accent-indigo text-xl">Gigs</span>
            <p className="font-satoshi text-ink/80 text-lg">Short-term tasks you can do between classes.</p>
          </div>

          {/* Col 3 */}
          <div className="earn-col bg-ink text-white p-6 rounded-2xl h-[60%] flex flex-col justify-between">
            <span className="editorial-italic text-bg-primary text-xl">Referrals</span>
            <p className="font-satoshi text-white/80 text-lg">Bring friends, earn instant cash directly to your wallet.</p>
          </div>
        </div>

      </div>
    </div>
  );
};
