'use client';

import React, { useRef, useEffect } from 'react';
import { KeywordHighlight } from '../shared/KeywordHighlight';
import gsap from 'gsap';

export const StackPanelCampusRewards = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Scroll entrance animation
      gsap.fromTo('.scrapbook-item', 
        { y: 80, opacity: 0 },
        {
          y: 0, opacity: 1, stagger: 0.1, duration: 1, ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 70%',
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="sticky top-[10vh] md:top-[4vh] h-auto py-2 md:h-[92vh] w-full z-[14] flex items-center justify-center my-4">
      <div ref={containerRef} className="w-[95%] md:w-[96%] h-auto md:h-full bg-bg-secondary flex items-center p-6 sm:p-8 brutal-card overflow-hidden relative bg-elements py-6 md:py-8">
        
        {/* Background Sticker Elements */}
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          {/* Sticker 1: Coffee Cup (Top Left) */}
          <div className="scrapbook-item absolute hidden md:block left-[2%] md:left-[4%] top-[4%] md:top-[6%] w-48 md:w-64 pointer-events-auto cursor-pointer z-20">
            <div className="animate-sticker-1 drop-shadow-2xl">
              <img 
                src="/images/sticker1.png" 
                alt="Coffee Sticker" 
                className="w-full h-auto object-contain pointer-events-none transition-transform duration-300 hover:scale-110" 
              />
            </div>
          </div>

          {/* Sticker 2: Travel Tickets (Top Right) */}
          <div className="scrapbook-item absolute hidden md:block right-[2%] md:right-[4%] top-[4%] md:top-[6%] w-48 md:w-64 pointer-events-auto cursor-pointer z-20">
            <div className="animate-sticker-2 drop-shadow-2xl">
              <img 
                src="/images/sticker2.png" 
                alt="Flight Tickets Sticker" 
                className="w-full h-auto object-contain pointer-events-none transition-transform duration-300 hover:scale-110" 
              />
            </div>
          </div>

          {/* Sticker 3: Gold Coins (Bottom Left) */}
          <div className="scrapbook-item absolute hidden md:block left-[3%] md:left-[5%] bottom-[4%] md:bottom-[6%] w-48 md:w-64 pointer-events-auto cursor-pointer z-20">
            <div className="animate-sticker-3 drop-shadow-2xl">
              <img 
                src="/images/sticker3.png" 
                alt="Gold Coins Sticker" 
                className="w-full h-auto object-contain pointer-events-none transition-transform duration-300 hover:scale-110" 
              />
            </div>
          </div>

          {/* Sticker 4: Campus Friends (Bottom Right) */}
          <div className="scrapbook-item absolute hidden md:block right-[2%] md:right-[4%] bottom-[3%] md:bottom-[5%] w-52 md:w-72 pointer-events-auto cursor-pointer z-20">
            <div className="animate-sticker-4 drop-shadow-2xl">
              <img 
                src="/images/sticker4.png" 
                alt="Campus Friends Sticker" 
                className="w-full h-auto object-contain pointer-events-none transition-transform duration-300 hover:scale-110" 
              />
            </div>
          </div>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto text-center md:bg-white md:brutal-card p-4 md:p-12 md:shadow-2xl">
          <span className="font-jetbrains text-ink font-normal tracking-widest uppercase text-xs brutal-pill bg-accent-coral px-4 py-1.5 inline-block mb-4">
            // 05. campus rewards
          </span>
          <h2 className="font-bricolage text-3xl md:text-7xl font-extrabold tracking-tight mb-6">
            Rewards built for <br/> <KeywordHighlight text="campus life" />.
          </h2>
          <p className="font-jakarta text-xs sm:text-lg text-ink-muted max-w-xl mx-auto">
            Get cashbacks and discounts at the brands you actually care about. From late-night food delivery to flight tickets home.
          </p>
        </div>

      </div>
    </div>
  );
};
