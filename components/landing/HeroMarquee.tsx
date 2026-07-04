'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const ITEMS = 'BORROW • EARN • LEARN • ';
const REPEATED = Array(8).fill(ITEMS).join('');

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
      {/* Inner strip is rotated inside the clipping container */}
      <div className="w-full bg-accent-blue py-6 md:py-8 flex items-center transform rotate-2 scale-110 shadow-2xl">
        <div className="flex whitespace-nowrap">
          <div
            ref={track1Ref}
            className="font-chillax font-bold text-3xl md:text-5xl text-white tracking-tighter uppercase px-6 flex-shrink-0"
          >
            {REPEATED}
          </div>
          <div
            ref={track2Ref}
            className="font-chillax font-bold text-3xl md:text-5xl text-white tracking-tighter uppercase px-6 flex-shrink-0"
          >
            {REPEATED}
          </div>
        </div>
      </div>
    </div>
  );
};
