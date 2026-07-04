'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const PROBLEMS = [
  {
    emoji: '❌',
    title: "Banks don't see you.",
    desc: "No salary. No history. So they shut the door before you even start.",
    color: '#2563EB',
  },
  {
    emoji: '💸',
    title: "Apps take advantage.",
    desc: "Hidden fees, traps, and fine print designed to cost you more.",
    color: '#10B981',
  },
  {
    emoji: '🎓',
    title: "No one shows you how.",
    desc: "Real money skills? Missing from classrooms and real life.",
    color: '#F5C518',
  },
  {
    emoji: '⚠️',
    title: "The system isn't built for you.",
    desc: "Credit was never designed with students in mind.",
    color: '#2563EB',
  },
];

export const WhyWeExist = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const closingRef = useRef<HTMLDivElement>(null);
  const dividerTopRef = useRef<HTMLDivElement>(null);
  const dividerBotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Eyebrow fade-in
      gsap.fromTo(
        eyebrowRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: eyebrowRef.current, start: 'top 85%' },
        }
      );

      // Headline line-by-line reveal
      gsap.fromTo(
        '.wwe-headline-line',
        { opacity: 0, y: 60, clipPath: 'inset(0 0 100% 0)' },
        {
          opacity: 1, y: 0, clipPath: 'inset(0 0 0% 0)',
          stagger: 0.15, duration: 0.9, ease: 'power4.out',
          scrollTrigger: { trigger: headlineRef.current, start: 'top 80%' },
        }
      );

      // Dividers grow
      gsap.fromTo(
        [dividerTopRef.current, dividerBotRef.current],
        { scaleX: 0, transformOrigin: 'left center' },
        {
          scaleX: 1, duration: 1, ease: 'power3.inOut',
          scrollTrigger: { trigger: cardsRef.current, start: 'top 80%' },
        }
      );

      // Cards stagger in
      gsap.fromTo(
        '.wwe-card',
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, stagger: 0.12, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: cardsRef.current, start: 'top 75%' },
        }
      );

      // Closing statement
      gsap.fromTo(
        '.wwe-closing-word',
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, stagger: 0.04, duration: 0.6, ease: 'power3.out',
          scrollTrigger: { trigger: closingRef.current, start: 'top 85%' },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const closingWords = "So we built what the system never did — for you.".split(" ");

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-ink text-bg-primary py-24 md:py-36 px-6 md:px-12 overflow-hidden"
    >
      {/* Background texture blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-accent-blue/8 blur-[120px]" />
        <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] rounded-full bg-accent-green/8 blur-[120px]" />
      </div>

      <div className="relative max-w-6xl mx-auto">

        {/* Eyebrow */}
        <div ref={eyebrowRef} className="mb-10 opacity-0">
          <span className="inline-flex items-center gap-2 border border-bg-primary/15 rounded-full px-4 py-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-yellow" />
            <span className="font-satoshi text-xs font-semibold uppercase tracking-[0.2em] text-bg-primary/60">
              Why We Exist
            </span>
          </span>
        </div>

        {/* Headline */}
        <div ref={headlineRef} className="mb-14 overflow-hidden">
          <div className="wwe-headline-line font-chillax font-bold text-bg-primary leading-[0.9] tracking-tight"
               style={{ fontSize: 'clamp(2.8rem, 6vw, 90px)' }}>
            The financial system
          </div>
          <div className="wwe-headline-line font-chillax font-bold leading-[0.9] tracking-tight"
               style={{ fontSize: 'clamp(2.8rem, 6vw, 90px)', color: '#F5C518' }}>
            ignores students.
          </div>
        </div>

        {/* Divider top */}
        <div ref={dividerTopRef} className="w-full h-px bg-bg-primary/10 mb-12" />

        {/* Problem cards grid */}
        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
          {PROBLEMS.map((p, i) => (
            <div
              key={i}
              className="wwe-card group relative rounded-2xl p-7 overflow-hidden
                         bg-white/[0.03] border border-white/[0.07]
                         hover:bg-white/[0.06] transition-colors duration-300"
              style={{ borderLeft: `3px solid ${p.color}33` }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-2xl"
                style={{ background: `radial-gradient(circle at 30% 50%, ${p.color}15, transparent 70%)` }}
              />

              <div className="relative z-10">
                {/* Emoji + accent dot */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{p.emoji}</span>
                  <span
                    className="w-1 h-6 rounded-full"
                    style={{ backgroundColor: p.color, opacity: 0.6 }}
                  />
                </div>

                <h3 className="font-chillax font-bold text-xl text-bg-primary mb-2 leading-tight">
                  {p.title}
                </h3>
                <p className="font-satoshi text-sm text-bg-primary/50 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Divider bottom */}
        <div ref={dividerBotRef} className="w-full h-px bg-bg-primary/10 mb-16" />

        {/* Closing pivot statement */}
        <div ref={closingRef}>
          <p
            className="font-chillax font-bold leading-[1.05] tracking-tight"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 68px)' }}
          >
            {closingWords.map((word, i) => {
              const isAccent = ['built', 'never', 'did'].includes(word.replace(/[—.,]/g, '').toLowerCase());
              return (
                <span
                  key={i}
                  className="wwe-closing-word inline-block mr-[0.25em] opacity-0"
                  style={isAccent ? { color: '#10B981' } : { color: 'rgba(240,246,255,0.9)' }}
                >
                  {word}
                </span>
              );
            })}
          </p>
        </div>

      </div>
    </section>
  );
};
