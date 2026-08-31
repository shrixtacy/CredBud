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
    <div className="sticky top-[10vh] md:top-[4vh] h-auto py-2 md:h-[92vh] w-full z-[11] flex items-center justify-center my-4">
      <div ref={containerRef} className="w-[95%] md:w-[96%] h-[260px] md:h-full bg-bg-secondary flex items-center p-6 md:p-8 brutal-card bg-elements overflow-hidden">
        <div className="max-w-7xl mx-auto w-full h-full flex flex-col justify-center">
          
          <div className="mb-2 md:mb-12">
            <span className="font-jetbrains text-ink font-normal tracking-widest uppercase text-xs brutal-pill bg-accent-gold px-4 py-1.5 inline-block mb-2 md:mb-4">
              // 02. earn
            </span>
            <h2 className="font-bricolage text-3xl sm:text-6xl md:text-8xl font-extrabold tracking-tight text-ink">
              Earn while you <KeywordHighlight text="learn" />.
            </h2>
            <p className="block md:hidden font-jakarta text-xs text-ink-muted leading-relaxed max-w-sm mt-3">
              Get paid internships, short-term campus gigs, and referral payouts directly to your wallet.
            </p>
          </div>

          <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 items-end h-auto md:h-[50vh] overflow-visible pr-1 md:pr-0">
            {/* Col 1 */}
            <div className="earn-col bg-white brutal-card p-3 md:p-6 h-[110px] md:h-[80%] flex flex-row md:flex-col justify-between items-center md:items-start gap-4 md:gap-0 overflow-hidden">
              <div className="flex-1 flex flex-col justify-between h-full text-left">
                <span className="font-bricolage font-extrabold text-accent-purple text-base md:text-2xl z-10 shrink-0">Internships</span>
                <p className="font-jakarta text-ink-muted text-[10px] md:text-base leading-tight md:leading-snug z-10 shrink-0">Curated paid opportunities directly from our network.</p>
              </div>
              <div className="w-16 h-16 md:w-full md:h-full md:flex-1 flex items-center justify-center relative min-h-0 overflow-hidden shrink-0">
                <img 
                  src="/images/internships.png" 
                  alt="Internships" 
                  className="w-full h-full object-contain scale-110 md:scale-140 drop-shadow-sm pointer-events-none transition-transform duration-300" 
                />
              </div>
            </div>
            
            {/* Col 2 */}
            <div className="earn-col bg-white brutal-card p-3 md:p-6 h-[110px] md:h-full flex flex-row md:flex-col justify-between items-center md:items-start gap-4 md:gap-0 overflow-hidden">
              <div className="flex-1 flex flex-col justify-between h-full text-left">
                <span className="font-bricolage font-extrabold text-accent-coral text-base md:text-2xl z-10 shrink-0">Gigs</span>
                <p className="font-jakarta text-ink-muted text-[10px] md:text-base leading-tight md:leading-snug z-10 shrink-0">Short-term tasks you can do between classes.</p>
              </div>
              <div className="w-16 h-16 md:w-full md:h-full md:flex-1 flex items-center justify-center relative min-h-0 overflow-hidden shrink-0">
                <img 
                  src="/images/gigs.png" 
                  alt="Gigs" 
                  className="w-full h-full object-contain scale-110 md:scale-140 drop-shadow-sm pointer-events-none transition-transform duration-300" 
                />
              </div>
            </div>

            {/* Col 3 */}
            <div className="earn-col bg-accent-gold brutal-card p-3 md:px-6 md:py-4 h-[110px] md:h-[60%] flex flex-row md:flex-col justify-between items-center md:items-start gap-4 md:gap-0 overflow-hidden">
              <div className="flex-1 flex flex-col justify-between h-full text-left">
                <span className="font-bricolage font-extrabold text-ink text-base md:text-2xl z-10 shrink-0">Referrals</span>
                <p className="font-jakarta text-ink text-[10px] md:text-sm leading-tight z-10 shrink-0">Bring friends, earn instant cash directly to your wallet.</p>
              </div>
              <div className="w-16 h-16 md:w-full md:h-full flex items-center justify-center relative min-h-0 my-0 shrink-0">
                <img 
                  src="/images/referrals.png" 
                  alt="Referrals" 
                  className="w-full h-full object-contain scale-[1.1] md:scale-[1.75] translate-x-1 md:translate-x-4 -translate-y-0.5 md:translate-y-0 drop-shadow-sm pointer-events-none transition-transform duration-300" 
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
