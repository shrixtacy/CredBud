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
          
          <div className="mb-6 md:mb-12">
            <span className="font-jetbrains text-ink font-normal tracking-widest uppercase text-xs brutal-pill bg-accent-gold px-4 py-1.5 inline-block mb-4">
              // 02. earn
            </span>
            <h2 className="font-bricolage text-4xl sm:text-6xl md:text-8xl font-extrabold tracking-tight text-ink">
              Earn while you <KeywordHighlight text="learn" />.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 items-end h-auto md:h-[50vh] max-h-[60vh] md:max-h-none overflow-y-auto md:overflow-visible pr-1 md:pr-0">
            {/* Col 1 */}
            <div className="earn-col bg-white brutal-card p-4 md:p-6 h-[170px] md:h-[80%] flex flex-col justify-between overflow-hidden">
              <span className="font-bricolage font-extrabold text-accent-purple text-xl md:text-2xl z-10 shrink-0">Internships</span>
              <div className="flex-1 flex items-center justify-center my-1 relative min-h-0 overflow-hidden">
                <img 
                  src="/images/internships.png" 
                  alt="Internships" 
                  className="w-full h-full object-contain scale-110 md:scale-140 drop-shadow-sm pointer-events-none transition-transform duration-300" 
                />
              </div>
              <p className="font-jakarta text-ink-muted text-xs md:text-base leading-snug z-10 shrink-0">Curated paid opportunities directly from our network.</p>
            </div>
            
            {/* Col 2 */}
            <div className="earn-col bg-white brutal-card p-4 md:p-6 h-[180px] md:h-full flex flex-col justify-between overflow-hidden">
              <span className="font-bricolage font-extrabold text-accent-coral text-xl md:text-2xl z-10 shrink-0">Gigs</span>
              <div className="flex-1 flex items-center justify-center my-1 relative min-h-0 overflow-hidden">
                <img 
                  src="/images/gigs.png" 
                  alt="Gigs" 
                  className="w-full h-full object-contain scale-110 md:scale-140 drop-shadow-sm pointer-events-none transition-transform duration-300" 
                />
              </div>
              <p className="font-jakarta text-ink-muted text-xs md:text-base leading-snug z-10 shrink-0">Short-term tasks you can do between classes.</p>
            </div>

            {/* Col 3 */}
            <div className="earn-col bg-accent-gold brutal-card p-4 md:px-6 md:py-4 h-[160px] md:h-[60%] flex flex-col justify-between overflow-hidden">
              <span className="font-bricolage font-extrabold text-ink text-xl md:text-2xl z-10 shrink-0">Referrals</span>
              <div className="flex-1 flex items-center justify-center relative min-h-0 my-0">
                <img 
                  src="/images/referrals.png" 
                  alt="Referrals" 
                  className="w-full h-full object-contain scale-[1.3] md:scale-[1.75] translate-x-2 md:translate-x-4 -translate-y-1 md:-translate-y-2.5 drop-shadow-sm pointer-events-none transition-transform duration-300" 
                />
              </div>
              <p className="font-jakarta text-ink font-medium text-xs md:text-sm leading-tight z-10 shrink-0">Bring friends, earn instant cash directly to your wallet.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
