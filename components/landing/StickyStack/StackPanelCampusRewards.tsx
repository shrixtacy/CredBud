'use client';

import React, { useRef, useEffect } from 'react';
import { KeywordHighlight } from '../shared/KeywordHighlight';
import gsap from 'gsap';

export const StackPanelCampusRewards = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo('.scrapbook-item', 
        { y: 100, rotation: 10, opacity: 0 },
        {
          y: 0, rotation: 0, opacity: 1, stagger: 0.1, duration: 1,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 50%',
          }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="sticky top-0 h-screen w-full bg-bg-secondary flex items-center p-8 border-b border-ink/10 overflow-hidden relative bg-elements">
      
      {/* Background Scrapbook Elements */}
      <div className="absolute inset-0 pointer-events-none flex justify-center items-center">
        <div className="scrapbook-item absolute left-[10%] top-[20%] w-48 h-64 bg-white shadow-xl p-3 -rotate-6">
          <div className="w-full h-full bg-ink/5 flex items-center justify-center">
             <span className="editorial-italic text-ink/30">Coffee</span>
          </div>
        </div>
        <div className="scrapbook-item absolute right-[15%] top-[15%] w-64 h-48 bg-white shadow-xl p-3 rotate-3">
          <div className="w-full h-full bg-accent-blue/10 flex items-center justify-center">
             <span className="editorial-italic text-accent-blue/50">Tech</span>
          </div>
        </div>
        <div className="scrapbook-item absolute left-[20%] bottom-[15%] w-56 h-56 bg-white shadow-xl p-3 rotate-12">
          <div className="w-full h-full bg-accent-indigo/10 flex items-center justify-center">
             <span className="editorial-italic text-accent-indigo/50">Travel</span>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center bg-white/70 backdrop-blur-xl p-12 rounded-[3rem] border border-white/50 shadow-2xl">
        <h2 className="font-chillax text-5xl md:text-7xl font-medium tracking-tight mb-6">
          Rewards built for <br/> <KeywordHighlight text="campus life" />.
        </h2>
        <p className="font-satoshi text-lg text-ink/70 max-w-xl mx-auto">
          Get cashbacks and discounts at the brands you actually care about. From late-night food delivery to flight tickets home.
        </p>
      </div>

    </div>
  );
};
