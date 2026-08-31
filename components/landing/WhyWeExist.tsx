'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Ban, Coins, GraduationCap, AlertTriangle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const PROBLEMS = [
  {
    icon: Ban,
    title: "Banks don't see you.",
    desc: "No salary. No history. So they shut the door before you even start.",
    color: '#7B5CFF',
  },
  {
    icon: Coins,
    title: "Apps take advantage.",
    desc: "Hidden fees, traps, and fine print designed to cost you more.",
    color: '#FF5A3C',
  },
  {
    icon: GraduationCap,
    title: "No one shows you how.",
    desc: "Real money skills? Missing from classrooms and real life.",
    color: '#FFD23F',
  },
  {
    icon: AlertTriangle,
    title: "The system isn't built for you.",
    desc: "Credit was never designed with students in mind.",
    color: '#35C8FF',
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
      className="relative w-[95%] md:w-[96%] mx-auto my-4 md:my-10 bg-bg-primary text-ink py-8 md:py-24 px-4 md:px-12 overflow-hidden rounded-[1.5rem] md:rounded-[3.5rem] brutal-border"
    >

      <div className="relative max-w-6xl mx-auto">

        {/* Eyebrow */}
        <div ref={eyebrowRef} className="mb-6 md:mb-10 opacity-0">
          <span className="inline-flex items-center gap-2 brutal-pill bg-accent-lime px-4 py-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-ink" />
            <span className="font-jetbrains text-xs font-normal text-ink">
              // why we exist
            </span>
          </span>
        </div>

        {/* Headline */}
        <div ref={headlineRef} className="mb-8 md:mb-14 overflow-hidden">
          <div className="wwe-headline-line font-bricolage font-extrabold text-ink leading-[0.95] tracking-tight"
            style={{ fontSize: 'clamp(1.8rem, 6vw, 56px)', letterSpacing: '-1px' }}>
            The financial system
          </div>
          <div className="wwe-headline-line font-bricolage font-extrabold leading-[0.95] tracking-tight"
            style={{ fontSize: 'clamp(1.8rem, 6vw, 56px)', letterSpacing: '-1px', color: '#FF5A3C' }}>
            ignores students.
          </div>
        </div>

        {/* Divider top */}
        <div ref={dividerTopRef} className="w-full h-[1.6px] bg-ink/15 mb-6 md:mb-12" />

        {/* Problem cards grid (Desktop/Laptop) vs Simple List (Mobile) */}
        <div ref={cardsRef} className="flex flex-col md:grid md:grid-cols-2 gap-2 md:gap-5 mb-6 md:mb-12">
          {PROBLEMS.map((p, i) => (
            <React.Fragment key={i}>
              {/* Mobile List Item */}
              <div className="flex md:hidden items-start gap-4 py-3 border-b border-ink/10 last:border-0 wwe-card">
                <div 
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border"
                  style={{ backgroundColor: p.color + '15', borderColor: p.color }}
                >
                  <p.icon className="w-5 h-5" style={{ color: p.color }} strokeWidth={2} />
                </div>
                <div className="space-y-1">
                  <h3 className="font-bricolage font-extrabold text-base text-ink leading-tight">
                    {p.title}
                  </h3>
                  <p className="font-jakarta text-xs text-ink-muted leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>

              {/* Desktop Card Item */}
              <div
                className="hidden md:block wwe-card group relative rounded-3xl p-7 overflow-hidden bg-white brutal-border hover:translate-x-[-2px] hover:translate-y-[-2px] transition-transform duration-300"
                style={{ boxShadow: `4px 4px 0px ${p.color}` }}
              >
                <div className="relative z-10">
                  {/* Icon + accent dot */}
                  <div className="flex items-center gap-3 mb-4">
                    <p.icon className="w-8 h-8 text-ink" strokeWidth={1.8} />
                    <span
                      className="w-1 h-6 rounded-full"
                      style={{ backgroundColor: p.color }}
                    />
                  </div>

                  <h3 className="font-bricolage font-extrabold text-xl text-ink mb-2 leading-tight">
                    {p.title}
                  </h3>
                  <p className="font-jakarta text-sm text-ink-muted leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>

        {/* Divider bottom */}
        <div ref={dividerBotRef} className="w-full h-[1.6px] bg-ink/15 mb-8 md:mb-16" />

        {/* Closing pivot statement */}
        <div ref={closingRef}>
          <p
            className="font-bricolage font-extrabold leading-[1.05] tracking-tight"
            style={{ fontSize: 'clamp(1.6rem, 4vw, 56px)', letterSpacing: '-1px' }}
          >
            {closingWords.map((word, i) => {
              const isAccent = ['built', 'never', 'did'].includes(word.replace(/[—.,]/g, '').toLowerCase());
              return (
                <span
                  key={i}
                  className="wwe-closing-word inline-block mr-[0.25em] opacity-0"
                  style={isAccent ? { color: '#7B5CFF' } : { color: '#14100F' }}
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
