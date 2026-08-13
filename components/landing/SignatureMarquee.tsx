'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const SignatureMarquee = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const text1Ref = useRef<HTMLDivElement>(null);
  const text2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      let direction = 1; // 1 = forward, -1 = backward
      
      const tl = gsap.timeline({
        repeat: -1,
        onUpdate: function () {
           // We can adjust speed via timeScale
        }
      });

      tl.to([text1Ref.current, text2Ref.current], {
        xPercent: -100,
        ease: "none",
        duration: 20
      });

      // Observer to detect scroll velocity
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top bottom',
        end: 'bottom top',
        onUpdate: (self) => {
          const velocity = self.getVelocity();
          // Adjust timescale based on velocity (cap it to prevent crazy speeds)
          const targetScale = 1 + Math.abs(velocity / 100);
          gsap.to(tl, { timeScale: direction * Math.min(targetScale, 5), duration: 0.5 });
          
          if (self.direction !== direction) {
            direction = self.direction;
            gsap.to(tl, { timeScale: direction, duration: 0.5 });
          }
        }
      });
      
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full overflow-hidden z-20 py-8 md:py-16">
      <div className="w-full bg-ink border-y-[1.6px] border-ink py-10 md:py-16 flex items-center transform -rotate-2 scale-110 shadow-2xl">
        <div className="flex whitespace-nowrap overflow-hidden w-full">
          <div ref={text1Ref} className="font-bricolage font-extrabold text-6xl md:text-[7rem] text-bg-primary tracking-tighter uppercase px-8 flex-shrink-0">
            STUDENT FIRST <span className="text-accent-lime">✦</span> NO HIDDEN FEES <span className="text-accent-lime">✦</span> INSTANT APPROVAL <span className="text-accent-lime">✦</span> STUDENT FIRST <span className="text-accent-lime">✦</span> NO HIDDEN FEES <span className="text-accent-lime">✦</span> INSTANT APPROVAL <span className="text-accent-lime">✦</span>
          </div>
          <div ref={text2Ref} className="font-bricolage font-extrabold text-6xl md:text-[7rem] text-bg-primary tracking-tighter uppercase px-8 flex-shrink-0">
            STUDENT FIRST <span className="text-accent-lime">✦</span> NO HIDDEN FEES <span className="text-accent-lime">✦</span> INSTANT APPROVAL <span className="text-accent-lime">✦</span> STUDENT FIRST <span className="text-accent-lime">✦</span> NO HIDDEN FEES <span className="text-accent-lime">✦</span> INSTANT APPROVAL <span className="text-accent-lime">✦</span>
          </div>
        </div>
      </div>
    </section>
  );
};
