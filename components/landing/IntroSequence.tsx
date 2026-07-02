'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { KeywordHighlight } from './shared/KeywordHighlight';
import { SectionWrapper } from './shared/SectionWrapper';

export const IntroSequence = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const act1Ref = useRef<HTMLDivElement>(null);
  const act2Ref = useRef<HTMLDivElement>(null);
  const act3Ref = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=300%',
          pin: true,
          scrub: 1,
        },
      });

      // Act 1
      tl.to(act1Ref.current, { opacity: 1, y: 0, duration: 1 })
        .to(act1Ref.current, { opacity: 0, y: -50, duration: 1 }, '+=0.5');

      // Act 2
      tl.to(act2Ref.current, { opacity: 1, y: 0, duration: 1 })
        .to(act2Ref.current, { opacity: 0, y: -50, duration: 1 }, '+=0.5');

      // Act 3
      tl.to(act3Ref.current, { opacity: 1, scale: 1, duration: 1 })
        .to(act3Ref.current, { opacity: 0, scale: 1.5, duration: 1 }, '+=0.5');

      // Final Logo / Hero entry prep
      tl.to(logoRef.current, { opacity: 1, y: 0, duration: 1 });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative h-screen w-full bg-bg-primary text-ink overflow-hidden flex items-center justify-center">
      
      {/* Act 1 */}
      <div ref={act1Ref} className="absolute flex flex-col items-center text-center opacity-0 translate-y-[50px]">
        <h2 className="font-chillax text-4xl md:text-7xl tracking-tight">
          Are you a <KeywordHighlight text="student?" />
        </h2>
      </div>

      {/* Act 2 */}
      <div ref={act2Ref} className="absolute flex flex-col items-center text-center opacity-0 translate-y-[50px]">
        <h2 className="font-chillax text-4xl md:text-7xl tracking-tight max-w-3xl leading-tight">
          Struggling with <KeywordHighlight text="low funds?" />
        </h2>
      </div>

      {/* Act 3 */}
      <div ref={act3Ref} className="absolute flex flex-col items-center text-center opacity-0 scale-90">
        <h2 className="font-chillax headline text-accent-indigo">
          CreditBuddy Hai Na!!
        </h2>
      </div>

      {/* Logo morphs in */}
      <div ref={logoRef} className="absolute top-8 left-8 opacity-0 -translate-y-4">
        <h1 className="font-chillax text-2xl font-bold tracking-tight uppercase">
          Credit<span className="editorial-italic normal-case">Buddy</span>
        </h1>
      </div>
    </div>
  );
};
