'use client';

import React, { useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { SplitText } from '@/components/landing/shared/SplitText';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const AboutTeamSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo('.founder-image-block',
        { x: -80, opacity: 0, scale: 0.92 },
        {
          x: 0, opacity: 1, scale: 1,
          duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: containerRef.current, start: 'top 70%' }
        }
      );

      gsap.fromTo('.founder-text-block',
        { x: 60, opacity: 0 },
        {
          x: 0, opacity: 1,
          duration: 0.9, ease: 'power3.out', delay: 0.2,
          scrollTrigger: { trigger: containerRef.current, start: 'top 70%' }
        }
      );

      gsap.fromTo('.founder-stat-pill',
        { y: 30, opacity: 0, scale: 0.85 },
        {
          y: 0, opacity: 1, scale: 1,
          stagger: 0.1, duration: 0.7, ease: 'back.out(1.8)',
          scrollTrigger: { trigger: '.founder-stats-row', start: 'top 90%' }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-28 px-6 md:px-12 bg-bg-primary w-full max-w-7xl mx-auto overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
        className="mb-14 text-center max-w-3xl mx-auto space-y-3"
      >
        <span className="font-jetbrains text-ink-muted text-xs block">// leadership</span>
        <h2 className="font-bricolage text-4xl md:text-6xl font-extrabold tracking-tight text-ink">
          <SplitText
            text="The people behind CreditBuddy."
            splitType="words"
            variant="blur"
            delay={50}
            textAlign="center"
            tag="span"
          />
        </h2>
      </motion.div>

      {/* Founder Spotlight — Image Left, Text Right */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-14 items-stretch">

        {/* Left — Image Block */}
        <div className="founder-image-block lg:w-[45%] flex-shrink-0">
          <div
            className="relative w-full aspect-[3/4] max-h-[580px] rounded-3xl overflow-hidden brutal-border bg-gradient-to-br from-accent-lime/30 via-accent-purple/20 to-accent-gold/20"
            style={{ boxShadow: '8px 8px 0px #14100F' }}
          >
            {/* Decorative initials as large background */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
              <span className="font-bricolage font-extrabold text-[12rem] md:text-[16rem] text-ink/[0.04] leading-none tracking-tighter">
                DM
              </span>
            </div>

            {/* Founder Avatar Placeholder */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-6">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-white border-[3px] border-ink flex items-center justify-center shadow-[4px_4px_0px_#14100F]">
                <span className="font-bricolage font-extrabold text-5xl md:text-6xl text-ink">D</span>
              </div>

              {/* Name below avatar */}
              <div className="text-center">
                <h3 className="font-bricolage font-extrabold text-2xl md:text-3xl text-ink">Debasish Mallick</h3>
                <span className="font-jetbrains text-xs font-bold text-ink/60 uppercase tracking-widest mt-1 block">(Dev)</span>
              </div>
            </div>

            {/* Corner accent dots */}
            <div className="absolute top-5 left-5 w-3 h-3 rounded-full bg-accent-lime border-2 border-ink" />
            <div className="absolute top-5 right-5 w-3 h-3 rounded-full bg-accent-purple border-2 border-ink" />
            <div className="absolute bottom-5 left-5 w-3 h-3 rounded-full bg-accent-gold border-2 border-ink" />
            <div className="absolute bottom-5 right-5 w-3 h-3 rounded-full bg-accent-coral border-2 border-ink" />
          </div>
        </div>

        {/* Right — Text Block */}
        <div className="founder-text-block lg:w-[55%] flex flex-col justify-center gap-6 md:gap-8">

          {/* Role Pill */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="brutal-pill bg-accent-lime px-4 py-1.5 font-jetbrains text-xs font-bold text-ink">
              Founder &amp; CEO
            </span>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-jetbrains text-xs font-bold text-ink inline-flex items-center gap-1 hover:text-accent-purple transition-colors underline underline-offset-4"
            >
              LinkedIn <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Name */}
          <div>
            <h3 className="font-bricolage font-extrabold text-3xl md:text-5xl text-ink leading-tight tracking-tight">
              Debasish Mallick
            </h3>
            <p className="font-jetbrains text-xs text-ink-muted uppercase tracking-widest mt-2">
              // building credit from scratch for Indian college students
            </p>
          </div>

          {/* Bio */}
          <p className="font-jakarta text-base md:text-lg text-ink/80 leading-relaxed max-w-xl">
            A student founder building CreditBuddy to solve real financial challenges students face.
            Combining technology and insight to create a system where students can borrow, earn, and
            grow with confidence. On a mission to make financial access a right, not a privilege, for
            every college student in India.
          </p>

          {/* Stat Pills */}
          <div className="founder-stats-row flex flex-wrap gap-3 pt-2">
            {[
              { label: 'Mission', value: 'Student-First Finance' },
              { label: 'Focus', value: 'Fintech × Campus' },
              { label: 'Vision', value: '35M+ Students' },
            ].map((stat, i) => (
              <div
                key={i}
                className="founder-stat-pill brutal-card bg-white px-5 py-3 flex flex-col"
                style={{ boxShadow: '4px 4px 0px #14100F' }}
              >
                <span className="font-jetbrains text-[10px] text-ink-muted uppercase tracking-widest">{stat.label}</span>
                <span className="font-bricolage font-extrabold text-sm text-ink mt-0.5">{stat.value}</span>
              </div>
            ))}
          </div>

          {/* Quote */}
          <div className="mt-2 border-l-4 border-accent-purple pl-5 py-2">
            <p className="font-bricolage text-lg md:text-xl font-extrabold text-ink/90 italic leading-snug">
              &ldquo;The financial system was never designed for students. So we&apos;re building one that is.&rdquo;
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
