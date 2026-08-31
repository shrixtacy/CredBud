'use client';

import React, { useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { SplitText } from '@/components/landing/shared/SplitText';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const REASONS = [
  {
    num: '01',
    title: 'Tech platform, not a lender',
    desc: 'We partner with RBI-regulated NBFCs to ensure fairness, security, and full regulatory compliance.',
    color: 'bg-accent-lime text-ink',
    topOffset: 'top-[100px]',
    zIndex: 'z-10',
  },
  {
    num: '02',
    title: 'Compliance from day one',
    desc: 'Built with legal and financial frameworks first — never patched together after launching.',
    color: 'bg-accent-gold text-ink',
    topOffset: 'top-[125px]',
    zIndex: 'z-20',
  },
  {
    num: '03',
    title: 'Earn, not just borrow',
    desc: 'Unique campus micro-gig and referral model designed to reduce long-term loan dependency.',
    color: 'bg-accent-cyan text-ink',
    topOffset: 'top-[150px]',
    zIndex: 'z-30',
  },
  {
    num: '04',
    title: 'Built with students',
    desc: 'Every single feature is co-designed and validated with real feedback from college campuses.',
    color: 'bg-accent-purple text-white',
    topOffset: 'top-[175px]',
    zIndex: 'z-40',
  },
  {
    num: '05',
    title: 'Transparent to a fault',
    desc: 'Zero hidden charges, zero surprise fees. Every term is displayed 100% upfront.',
    color: 'bg-accent-coral text-white',
    topOffset: 'top-[200px]',
    zIndex: 'z-50',
  },
];

export const AboutWhyDifferent = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo('.why-diff-sticky-card',
        { y: 80, opacity: 0, scale: 0.93 },
        {
          y: 0, opacity: 1, scale: 1, stagger: 0.15, duration: 0.85, ease: 'back.out(1.2)',
          scrollTrigger: { trigger: containerRef.current, start: 'top 70%' }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-12 md:py-28 px-4 md:px-12 bg-bg-primary border-t-[1.6px] border-ink w-full relative">
      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto space-y-3"
        >
          <span className="font-jetbrains text-ink-muted text-xs block mb-2">// key differentiators</span>
          <h2 className="font-bricolage text-3xl md:text-6xl font-extrabold tracking-tight text-ink">
            <SplitText
              text="Why this isn’t just another app."
              splitType="words"
              variant="rise"
              delay={50}
              textAlign="center"
              tag="span"
            />
          </h2>
          <p className="font-jakarta text-ink-muted text-xs md:text-base mt-2">
            Scroll down to explore how CreditBuddy is built differently.
          </p>
        </motion.div>

        {/* Desktop Grid Layout (Laptop/Desktop) */}
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          {REASONS.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`${r.color} brutal-card p-8 flex flex-col justify-between min-h-[220px] transition-transform hover:-translate-y-1`}
              style={{ boxShadow: '6px 6px 0px #14100F' }}
            >
              <span className="font-jetbrains text-xs font-extrabold opacity-75 mb-4 block">
                REASON {r.num}
              </span>
              <div>
                <h3 className="font-bricolage font-extrabold text-2xl mb-2">{r.title}</h3>
                <p className="font-jakarta text-sm opacity-90 leading-relaxed font-medium">{r.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Sticky Stacked Cards Layout */}
        <div className="block md:hidden max-w-4xl mx-auto space-y-6 pb-24 relative z-10">
          {REASONS.map((r, i) => (
            <div
              key={i}
              className={`why-diff-sticky-card sticky ${r.topOffset} ${r.zIndex} w-full`}
            >
              <div
                className={`${r.color} brutal-card p-6 text-ink shadow-[8px_8px_0px_#14100F] border-[2px] border-ink rounded-3xl min-h-[200px] flex flex-col justify-between items-start gap-4 transition-transform hover:-translate-y-1`}
              >
                <div className="space-y-3 max-w-xl">
                  <div className="flex items-center gap-3">
                    <span className="font-jetbrains text-xs font-bold brutal-pill bg-white/80 text-ink px-3 py-1 border border-ink">
                      REASON {r.num}
                    </span>
                    <span className="font-jetbrains text-xs font-bold opacity-75">
                      CreditBuddy //
                    </span>
                  </div>

                  <h3 className="font-bricolage font-extrabold text-2xl tracking-tight">
                    {r.title}
                  </h3>

                  <p className="font-jakarta text-xs opacity-90 font-medium leading-relaxed">
                    {r.desc}
                  </p>
                </div>

                <span className="font-jetbrains font-extrabold text-5xl opacity-20 select-none self-end">
                  {r.num}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
