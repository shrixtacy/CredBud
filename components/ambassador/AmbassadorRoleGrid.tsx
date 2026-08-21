'use client';

import React, { useRef, useEffect } from 'react';
import { Megaphone, Users, MessageSquareCode, Award } from 'lucide-react';
import { SplitText } from '@/components/landing/shared/SplitText';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const ROLES = [
  {
    num: '01',
    title: 'Spread Awareness',
    desc: 'Host workshops & spread the word about student financial literacy.',
    color: 'bg-accent-lime',
    badgeText: '// Campus Outreach',
    icon: Megaphone,
    topOffset: 'top-[100px]',
    zIndex: 'z-10',
  },
  {
    num: '02',
    title: 'Onboard Peers',
    desc: 'Help batchmates activate their zero-fee student credit line.',
    color: 'bg-accent-gold',
    badgeText: '// Student Activation',
    icon: Users,
    topOffset: 'top-[125px]',
    zIndex: 'z-20',
  },
  {
    num: '03',
    title: 'Feedback Loop',
    desc: 'Work directly with our product team to shape new features.',
    color: 'bg-accent-cyan',
    badgeText: '// Product Advisory',
    icon: MessageSquareCode,
    topOffset: 'top-[150px]',
    zIndex: 'z-30',
  },
  {
    num: '04',
    title: 'Earn & Level Up',
    desc: 'Get monthly stipends, performance bonuses, and certificates.',
    color: 'bg-accent-coral',
    badgeText: '// Leadership Perks',
    icon: Award,
    topOffset: 'top-[175px]',
    zIndex: 'z-40',
  },
];

export const AmbassadorRoleGrid = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo('.ambassador-sticky-card',
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
    <section ref={containerRef} className="py-20 md:py-28 px-6 md:px-12 bg-bg-primary w-full relative">
      {/* Background SVG Paper Elements */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0 opacity-25 overflow-hidden">
        <img
          src="/creditbuddy-elements.svg"
          alt="Background paper texture elements"
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="mb-16 text-center max-w-2xl mx-auto relative z-10">
        <span className="font-jetbrains text-ink-muted text-xs block mb-2">// your role</span>
        <h2 className="font-bricolage text-4xl md:text-6xl font-extrabold tracking-tight text-ink">
          <SplitText
            text="What you will do as an Ambassador."
            splitType="words"
            variant="rise"
            delay={50}
            textAlign="center"
            tag="span"
          />
        </h2>
        <p className="font-jakarta text-ink-muted text-sm md:text-base mt-4">
          Scroll down to explore your key campus responsibilities.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-8 pb-16 relative z-10">
        {ROLES.map((role, i) => {
          const Icon = role.icon;
          return (
            <div
              key={i}
              className={`ambassador-sticky-card sticky ${role.topOffset} ${role.zIndex} w-full`}
            >
              <div
                className={`${role.color} brutal-card p-8 md:p-12 text-ink shadow-[8px_8px_0px_#14100F] border-[2px] border-ink rounded-3xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6 transition-transform hover:-translate-y-1`}
              >
                <div className="space-y-4 max-w-xl">
                  <div className="flex items-center gap-3">
                    <span className="font-jetbrains text-xs font-bold text-ink brutal-pill bg-white px-3 py-1 border border-ink">
                      {role.badgeText}
                    </span>
                    <span className="font-jetbrains text-sm font-bold text-ink/70">
                      STEP {role.num}
                    </span>
                  </div>

                  <h3 className="font-bricolage font-extrabold text-3xl md:text-5xl text-ink tracking-tight">
                    {role.title}
                  </h3>

                  <p className="font-jakarta text-sm md:text-lg text-ink/90 font-medium leading-relaxed">
                    {role.desc}
                  </p>
                </div>

                <div className="flex flex-col items-end justify-between self-stretch md:self-auto">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-white border-[2px] border-ink rounded-2xl flex items-center justify-center shadow-[4px_4px_0px_#14100F]">
                    <Icon className="w-8 h-8 md:w-10 md:h-10 text-ink" />
                  </div>
                  <span className="font-jetbrains font-extrabold text-5xl md:text-7xl text-ink/20 mt-4 md:mt-0 select-none">
                    {role.num}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
