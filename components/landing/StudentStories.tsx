'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

export const StudentStories = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to('.story-drift', {
        x: '-15%',
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-32 bg-bg-secondary w-full overflow-hidden relative">
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 mb-16">
        <h2 className="font-chillax text-4xl md:text-6xl font-medium tracking-tight">
          Don&apos;t just take our <span className="editorial-italic text-accent-blue">word</span> for it.
        </h2>
      </div>

      <div className="story-drift flex space-x-12 px-6 md:px-12 w-[150vw]">
        
        {/* Story 1 */}
        <div className="w-80 flex-shrink-0 -rotate-3 mt-12">
          <div className="bg-white p-4 shadow-xl">
            <div className="w-full aspect-square bg-ink/10 mb-4 flex items-center justify-center overflow-hidden">
               {/* eslint-disable-next-line @next/next/no-img-element */}
               <img src="https://picsum.photos/400/400?random=1" alt="Student" className="w-full h-full object-cover grayscale mix-blend-multiply opacity-80" />
            </div>
            <p className="font-satoshi text-ink/80 text-sm">&quot;Got my rent sorted in 5 mins. Lifesaver.&quot;</p>
            <p className="editorial-italic text-ink/50 text-xs mt-2">— Rahul, DU</p>
          </div>
        </div>

        {/* Story 2 (WhatsApp style) */}
        <div className="w-72 flex-shrink-0 rotate-2">
          <div className="bg-[#E5DDD0] rounded-3xl p-6 shadow-lg border border-white/50">
            <div className="bg-white rounded-2xl rounded-tr-none p-4 shadow-sm mb-4">
              <p className="font-satoshi text-ink/80 text-sm">Bro, CreditBuddy just approved my limit upgrade. 📈</p>
            </div>
            <div className="flex items-center space-x-2 opacity-60">
               <div className="w-8 h-8 rounded-full bg-ink/20" />
               <div className="flex-1 h-[2px] bg-ink/30 relative">
                  <div className="absolute top-1/2 left-0 -translate-y-1/2 w-1/3 h-[4px] bg-ink/50 rounded-full" />
               </div>
            </div>
            <p className="font-satoshi text-xs text-ink/50 mt-4 text-center">Voice Note • 0:12</p>
          </div>
        </div>

        {/* Story 3 */}
        <div className="w-80 flex-shrink-0 rotate-1 mt-8">
          <div className="bg-white p-4 shadow-xl">
            <div className="w-full aspect-square bg-ink/10 mb-4 flex items-center justify-center overflow-hidden">
               {/* eslint-disable-next-line @next/next/no-img-element */}
               <img src="https://picsum.photos/400/400?random=2" alt="Student" className="w-full h-full object-cover grayscale mix-blend-multiply opacity-80" />
            </div>
            <p className="font-satoshi text-ink/80 text-sm">&quot;Paid for my cert exam via the app. Zero hassle.&quot;</p>
            <p className="editorial-italic text-ink/50 text-xs mt-2">— Sneha, MIT</p>
          </div>
        </div>

        {/* Story 4 */}
        <div className="w-72 flex-shrink-0 -rotate-2 mt-4">
          <div className="bg-white p-6 rounded-3xl shadow-xl border border-ink/5">
             <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-accent-blue/20 flex items-center justify-center text-accent-blue font-chillax">R</div>
                <div>
                   <p className="font-satoshi font-medium text-sm">Rohit Sharma</p>
                   <p className="font-satoshi text-xs text-ink/50">Referred 5 friends</p>
                </div>
             </div>
             <p className="font-satoshi text-ink/80 text-sm italic">&quot;Easiest 2.5k I&apos;ve ever made. Referral system is actually legit.&quot;</p>
          </div>
        </div>

      </div>
    </section>
  );
};
