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
    <div className="sticky top-[5vh] md:top-[4vh] h-[90vh] md:h-[92vh] w-full z-[14] flex items-center justify-center my-4">
      <div ref={containerRef} className="w-[95%] md:w-[96%] h-full bg-bg-secondary flex items-center p-8 brutal-card overflow-hidden relative bg-elements">
        
        {/* Background Scrapbook Elements */}
        <div className="absolute inset-0 pointer-events-none flex justify-center items-center">
          <div className="scrapbook-item absolute left-[10%] top-[20%] w-48 h-64 bg-white brutal-card p-3 -rotate-6">
            <div className="w-full h-full bg-accent-gold/20 flex items-center justify-center rounded-xl">
               <span className="font-bricolage font-extrabold text-ink/40">Coffee</span>
            </div>
          </div>
          <div className="scrapbook-item absolute right-[15%] top-[15%] w-64 h-48 bg-white brutal-card p-3 rotate-3">
            <div className="w-full h-full bg-accent-cyan/20 flex items-center justify-center rounded-xl">
               <span className="font-bricolage font-extrabold text-ink/40">Tech</span>
            </div>
          </div>
          <div className="scrapbook-item absolute left-[20%] bottom-[15%] w-56 h-56 bg-white brutal-card p-3 rotate-12">
            <div className="w-full h-full bg-accent-coral/20 flex items-center justify-center rounded-xl">
               <span className="font-bricolage font-extrabold text-ink/40">Travel</span>
            </div>
          </div>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto text-center bg-white brutal-card p-12 shadow-2xl">
          <span className="font-jetbrains text-ink font-normal tracking-widest uppercase text-xs brutal-pill bg-accent-coral px-4 py-1.5 inline-block mb-4">
            // 05. campus rewards
          </span>
          <h2 className="font-bricolage text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            Rewards built for <br/> <KeywordHighlight text="campus life" />.
          </h2>
          <p className="font-jakarta text-lg text-ink-muted max-w-xl mx-auto">
            Get cashbacks and discounts at the brands you actually care about. From late-night food delivery to flight tickets home.
          </p>
        </div>

      </div>
    </div>
  );
};
