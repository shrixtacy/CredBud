'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { KeywordHighlight } from '../shared/KeywordHighlight';

gsap.registerPlugin(ScrollTrigger);

const scenes = [
  { id: 'need-money', title: 'Need Money?', desc: 'Late night cravings or textbook fees.' },
  { id: 'verify-id', title: 'Verify Identity', desc: 'A quick campus ID scan.' },
  { id: 'receive-funds', title: 'Funds Received', desc: 'Instantly in your bank account.' },
  { id: 'earn-rewards', title: 'Earn Rewards', desc: 'Cashback on every spend.' },
  { id: 'repay-easily', title: 'Repay Easily', desc: 'Flexible options for students.' },
  { id: 'improve-credit', title: 'Improve Credit', desc: 'Watch your score go up.' },
  { id: 'unlock-limits', title: 'Unlock Bigger Limits', desc: 'More financial power.' },
];

export const HorizontalJourney = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const sections = gsap.utils.toArray('.horizontal-scene');
      
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          end: () => "+=" + scrollWrapperRef.current?.scrollWidth,
          invalidateOnRefresh: true,
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="h-screen w-full overflow-hidden bg-ink-dark flex items-center relative z-10">
      <div ref={scrollWrapperRef} className="w-[700vw] h-full flex">
        
        {scenes.map((scene, i) => (
          <div key={scene.id} className="horizontal-scene w-[100vw] h-full flex-shrink-0 flex items-center justify-center p-8 md:p-24 relative overflow-hidden border-r border-white/5">
            
            {/* Thematic Backgrounds */}
            <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-transparent to-accent-blue mix-blend-overlay" />
            
            <div className="relative z-10 w-full max-w-4xl flex flex-col items-center text-center">
              <span className="editorial-italic text-accent-blue text-2xl mb-8">
                Phase 0{i + 1}
              </span>
              <h2 className="font-chillax text-6xl md:text-8xl lg:text-[7rem] font-bold text-white tracking-tighter leading-tight mb-6">
                {scene.title}
              </h2>
              <p className="font-satoshi text-xl text-white/60">
                {scene.desc}
              </p>
            </div>
            
            {/* Very large subtle background typography for texture */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none">
              <span className="font-chillax font-bold text-[15vw] text-white/[0.02] tracking-tighter whitespace-nowrap">
                {scene.title}
              </span>
            </div>
          </div>
        ))}
        
      </div>
    </section>
  );
};
