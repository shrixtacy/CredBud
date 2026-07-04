'use client';

import React, { useRef, useEffect } from 'react';
import { KeywordHighlight } from '../shared/KeywordHighlight';
import gsap from 'gsap';

export const ShowcaseEarn = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo('.earn-showcase-fade',
        { scale: 0.95, opacity: 0 },
        {
          scale: 1, opacity: 1, duration: 1.2, ease: 'power3.out',
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
    <section ref={containerRef} className="py-32 px-6 md:px-12 bg-bg-secondary w-full overflow-hidden bg-elements">
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center gap-16">
        
        {/* Left Side: Large staggered grid */}
        <div className="w-full md:w-1/2 relative h-[500px]">
          <div className="earn-showcase-fade absolute top-0 left-0 w-[60%] h-[60%] bg-white shadow-xl p-6 rounded-2xl -rotate-3 z-10 flex flex-col justify-between">
            <span className="editorial-italic text-ink/40">Referral</span>
            <div className="font-chillax text-4xl text-accent-indigo">₹500 <span className="text-lg text-ink/50 font-satoshi">/friend</span></div>
          </div>
          <div className="earn-showcase-fade absolute bottom-0 right-0 w-[65%] h-[55%] bg-accent-blue text-white shadow-2xl p-6 rounded-2xl rotate-2 z-20 flex flex-col justify-between">
            <span className="editorial-italic text-white/50">Campus Gig</span>
            <div>
               <div className="font-satoshi font-medium text-xl">Event Promo</div>
               <div className="font-chillax text-3xl mt-2">₹1,200</div>
            </div>
          </div>
        </div>

        {/* Right Side: Copy */}
        <div className="w-full md:w-1/2 flex flex-col space-y-6">
          <h2 className="earn-showcase-fade font-chillax text-4xl md:text-6xl font-medium tracking-tight">
            Turn your free time into <KeywordHighlight text="income" />.
          </h2>
          <p className="earn-showcase-fade font-satoshi text-ink/70 text-lg leading-relaxed">
            Don&apos;t just borrow. Earn. Our curated campus gig board and powerful referral program help you make money while you study.
          </p>
          <div className="earn-showcase-fade pt-4">
             <button className="px-6 py-3 border border-ink/20 rounded-full font-satoshi font-medium hover:bg-ink hover:text-white transition-colors duration-300">
               Explore Gigs
             </button>
          </div>
        </div>

      </div>
    </section>
  );
};
