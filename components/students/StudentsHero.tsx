'use client';

import React from 'react';
import { SplitText } from '@/components/landing/shared/SplitText';

export const StudentsHero = () => {
  return (
    <section className="relative pt-20 pb-44 sm:pb-48 lg:pt-32 lg:pb-20 px-6 md:px-12 bg-bg-primary text-ink border-b-[1.6px] border-ink overflow-hidden">
      {/* Soft background ambient glow behind left character */}
      <div className="absolute bottom-0 left-0 lg:top-1/2 lg:-translate-y-1/2 w-64 h-64 lg:w-80 lg:h-80 bg-accent-lime/20 rounded-full blur-[80px] pointer-events-none" />

      {/* Soft background ambient glow behind right character */}
      <div className="absolute bottom-0 right-0 lg:top-1/2 lg:-translate-y-1/2 w-64 h-64 lg:w-80 lg:h-80 bg-accent-cyan/20 rounded-full blur-[80px] pointer-events-none" />

      {/* Bottom Right Extreme Corner Continuation - Lemon Green Pair (Top half of ring behind Boy PNG) */}
      <div className="absolute bottom-0 right-0 translate-y-1/2 translate-x-1/2 w-72 h-72 md:w-[440px] md:h-[440px] pointer-events-none z-10 select-none opacity-90">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Outer Green Ring */}
          <circle cx="100" cy="100" r="88" stroke="#C8FF3D" strokeWidth="14" />
          {/* Inner Green Ring */}
          <circle cx="100" cy="100" r="58" stroke="#C8FF3D" strokeWidth="10" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative flex flex-col items-center text-center">
        
        {/* Left side character image - Girl */}
        <div className="absolute bottom-[-165px] sm:bottom-[-195px] left-[-22px] sm:left-[-10px] lg:top-1/2 lg:bottom-auto lg:-translate-y-[54%] lg:left-[-4rem] xl:left-[-7.5rem] 2xl:left-[-11rem] w-[145px] sm:w-[190px] md:w-[240px] lg:w-[340px] xl:w-[460px] 2xl:w-[520px] pointer-events-none z-20">
          <img
            src="/student-hero-character.png"
            alt="CreditBuddy Student Character Girl"
            className="w-full h-auto object-contain drop-shadow-2xl animate-float-gentle"
          />
        </div>

        {/* Right side character image - Boy */}
        <div className="absolute bottom-[-165px] sm:bottom-[-195px] right-[-22px] sm:right-[-10px] lg:top-1/2 lg:bottom-auto lg:-translate-y-[28%] lg:right-[-4rem] xl:right-[-7.5rem] 2xl:right-[-11rem] w-[145px] sm:w-[190px] md:w-[240px] lg:w-[340px] xl:w-[460px] 2xl:w-[520px] pointer-events-none z-20 scale-x-[-1]">
          <img
            src="/student-hero-boy.png"
            alt="CreditBuddy Student Character Boy"
            className="w-full h-auto object-contain drop-shadow-2xl animate-float-gentle"
            style={{ animationDelay: '1.5s' }}
          />
        </div>

        <span className="font-jetbrains text-xs font-normal brutal-pill bg-accent-lime px-4 py-1.5 mb-6 inline-block z-10">
          // built for Indian college students
        </span>
        
        <h1 className="font-bricolage text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[0.95] mb-6 max-w-4xl z-10">
          <SplitText
            text="By students. For students. Always first."
            splitType="chars"
            variant="rise"
            delay={20}
            duration={0.5}
            tag="span"
          />
        </h1>
        
        <p className="font-jakarta text-ink-muted text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed mb-8 z-10 font-semibold">
          <SplitText
            text="No bank visits, no parental guarantees, no hidden fees. CreditBuddy is designed from the ground up for college life in India."
            splitType="words"
            variant="blur"
            delay={35}
            duration={0.5}
            tag="span"
          />
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 z-10">
          <button className="px-8 py-4 bg-ink text-bg-primary font-bricolage font-bold text-base brutal-pill brutal-shadow-purple hover:scale-105 transition-transform cursor-pointer">
            Get Started Free ↗
          </button>
        </div>

      </div>
    </section>
  );
};
