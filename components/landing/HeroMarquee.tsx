'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const ITEMS = [
  'no salary slip needed',
  'borrow in 90 seconds',
  'earn while you study',
  'build real credit',
  'zero hidden fees',
  'learn money for free',
  'student-first, always',
];

const REPEATED = [...ITEMS, ...ITEMS].map((item, i) => (
  <span key={i} className="flex items-center gap-8 flex-shrink-0">
    <span className="font-bricolage font-bold text-2xl md:text-3xl text-bg-primary tracking-tight uppercase whitespace-nowrap">
      {item}
    </span>
    <span className="font-bricolage font-bold text-2xl md:text-3xl text-accent-lime">✦</span>
  </span>
));

export const HeroMarquee = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const track1Ref = useRef<HTMLDivElement>(null);
  const track2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      let direction = 1;

      const tl = gsap.timeline({ repeat: -1 });
      tl.to([track1Ref.current, track2Ref.current], {
        xPercent: -100,
        ease: 'none',
        duration: 18,
      });

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top bottom',
        end: 'bottom top',
        onUpdate: (self) => {
          const velocity = self.getVelocity();
          const targetScale = 1 + Math.abs(velocity / 120);
          gsap.to(tl, {
            timeScale: direction * Math.min(targetScale, 5),
            duration: 0.4,
          });
          if (self.direction !== direction) {
            direction = self.direction;
            gsap.to(tl, { timeScale: direction, duration: 0.4 });
          }
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden" style={{ paddingBlock: '3rem' }}>
      {/* Dark strip with slight rotation, matching Figma */}
      <div className="w-full bg-ink border-y-[1.6px] border-ink py-4 md:py-5 flex items-center transform -rotate-1 scale-110 shadow-2xl">
        <div className="flex whitespace-nowrap items-center gap-8">
          <div
            ref={track1Ref}
            className="flex items-center gap-8 flex-shrink-0"
          >
            {REPEATED}
          </div>
          <div
            ref={track2Ref}
            className="flex items-center gap-8 flex-shrink-0"
          >
            {REPEATED}
          </div>
        </div>
      </div>
    </div>
  );
};
