'use client';

import React from 'react';
import { motion } from 'motion/react';
import { SplitText } from '@/components/landing/shared/SplitText';

export const AboutHero = () => {
  return (
    <section className="relative pt-32 sm:pt-36 md:pt-44 pb-20 md:pb-28 px-4 md:px-12 bg-bg-primary text-ink border-b-[1.6px] border-ink overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <motion.span
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="font-jetbrains text-xs font-normal brutal-pill bg-accent-lime px-4 py-1.5 mb-6 inline-block"
        >
          // built by students, for students
        </motion.span>

        <h1 className="font-bricolage text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[0.95] mb-6 max-w-5xl">
          <SplitText
            text="We’ve been broke students too."
            splitType="chars"
            variant="rise"
            delay={22}
            duration={0.5}
            tag="span"
          />
        </h1>
        
        <p className="font-jakarta text-ink-muted text-lg md:text-2xl max-w-3xl leading-relaxed font-semibold">
          <SplitText
            text="That’s not a marketing line. It’s the reason CreditBuddy exists — built by students, for students."
            splitType="words"
            variant="blur"
            delay={50}
            duration={0.6}
            tag="span"
          />
        </p>
      </div>
    </section>
  );
};
