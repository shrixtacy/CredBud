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
    <div className="sticky top-[5vh] md:top-[4vh] h-[90vh] md:h-[92vh] w-full z-[11] flex items-center justify-center my-4">
      <div ref={containerRef} className="w-[95%] md:w-[96%] h-full bg-bg-secondary flex items-center p-8 brutal-card bg-elements overflow-hidden">
        <div className="max-w-7xl mx-auto w-full h-full flex flex-col justify-center">
          
          <div className="mb-12">
            <span className="font-jetbrains text-ink font-normal tracking-widest uppercase text-xs brutal-pill bg-accent-gold px-4 py-1.5 inline-block mb-4">
              // 02. earn
            </span>
            <h2 className="font-bricolage text-6xl md:text-8xl font-extrabold tracking-tight text-ink">
              Earn while you <KeywordHighlight text="learn" />.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end h-[50vh]">
            {/* Col 1 */}
            <div className="earn-col bg-white brutal-card p-6 h-[80%] flex flex-col justify-between">
              <span className="font-bricolage font-extrabold text-accent-purple text-2xl">Internships</span>
              <p className="font-jakarta text-ink-muted text-lg">Curated paid opportunities directly from our network.</p>
            </div>
            
            {/* Col 2 */}
            <div className="earn-col bg-white brutal-card p-6 h-full flex flex-col justify-between">
              <span className="font-bricolage font-extrabold text-accent-coral text-2xl">Gigs</span>
              <p className="font-jakarta text-ink-muted text-lg">Short-term tasks you can do between classes.</p>
            </div>

            {/* Col 3 */}
            <div className="earn-col bg-accent-gold brutal-card p-6 h-[60%] flex flex-col justify-between">
              <span className="font-bricolage font-extrabold text-ink text-2xl">Referrals</span>
              <p className="font-jakarta text-ink font-medium text-lg">Bring friends, earn instant cash directly to your wallet.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
