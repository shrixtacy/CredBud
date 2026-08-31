'use client';

import React, { useRef, useEffect } from 'react';
import { SplitText } from '@/components/landing/shared/SplitText';
import { FileX, Search, PhoneOff, UserX } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const NEVER_ITEMS = [
  {
    num: '01',
    title: 'No Salary Slips',
    desc: 'We know you are in college. We never ask for income proof or pay stubs.',
    icon: FileX,
    color: 'bg-accent-lime text-ink',
  },
  {
    num: '02',
    title: 'No Hidden Fees',
    desc: 'Every rupee is disclosed 100% upfront before you confirm your advance.',
    icon: Search,
    color: 'bg-accent-gold text-ink',
  },
  {
    num: '03',
    title: 'No Spam Calls',
    desc: 'We communicate strictly in-app. Zero relentless agent phone calls.',
    icon: PhoneOff,
    color: 'bg-accent-coral text-white',
  },
  {
    num: '04',
    title: 'No Parent Guarantee',
    desc: 'You build your own credit score and true financial independence.',
    icon: UserX,
    color: 'bg-accent-cyan text-ink',
  },
];

export const StudentsNeverList = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo('.never-card-item',
        { y: 60, opacity: 0, scale: 0.9, rotate: -2 },
        {
          y: 0, opacity: 1, scale: 1, rotate: 0,
          stagger: 0.1, duration: 0.8, ease: 'back.out(1.4)',
          scrollTrigger: { trigger: containerRef.current, start: 'top 75%' }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-10 md:py-20 bg-ink text-bg-primary w-full relative overflow-hidden">
      {/* Full Width Thick Lemon Green Uniform Wavy Line behind the boxes */}
      <div className="absolute top-[65%] -translate-y-1/2 left-0 right-0 w-full pointer-events-none z-0 select-none opacity-90">
        <svg viewBox="0 0 1440 200" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-36 md:h-52">
          <path
            d="M 0 100 C 35 40, 85 40, 120 100 C 155 160, 205 160, 240 100 C 275 40, 325 40, 360 100 C 395 160, 445 160, 480 100 C 515 40, 565 40, 600 100 C 635 160, 685 160, 720 100 C 755 40, 805 40, 840 100 C 875 160, 925 160, 960 100 C 995 40, 1045 40, 1080 100 C 1115 160, 1165 160, 1200 100 C 1235 40, 1285 40, 1320 100 C 1355 160, 1405 160, 1440 100"
            stroke="#C8FF3D"
            strokeWidth="14"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-12 relative z-10">
        <div className="mb-8 md:mb-16 text-center max-w-2xl mx-auto">
          <span className="font-jetbrains text-accent-lime text-xs block mb-2">// strict policy</span>
          <h2 className="font-bricolage text-3xl md:text-6xl font-extrabold tracking-tight text-white">
            <SplitText
              text="What CreditBuddy will NEVER do."
              splitType="words"
              variant="rise"
              delay={50}
              textAlign="center"
              tag="span"
            />
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 md:gap-6">
          {NEVER_ITEMS.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="never-card-item bg-bg-primary text-ink brutal-card p-4 md:p-6 flex flex-col justify-between h-[145px] md:h-[185px] hover:translate-y-[-2px] transition-transform duration-200"
                style={{ boxShadow: '4px 4px 0px #C8FF3D' }}
              >
                <div>
                  <div className="flex items-center justify-between mb-2 md:mb-4">
                    <div className={`w-8 h-8 md:w-10 md:h-10 rounded-xl flex items-center justify-center brutal-border ${item.color}`}>
                      <Icon className="w-4 h-4 md:w-5 md:h-5" />
                    </div>
                    <span className="font-jetbrains text-[9px] md:text-xs font-bold text-ink-muted">
                      {item.num}
                    </span>
                  </div>

                  <h3 className="font-bricolage font-extrabold text-sm md:text-xl text-ink leading-tight mb-1">
                    {item.title}
                  </h3>
                  <p className="font-jakarta text-[11px] md:text-xs text-ink-muted leading-tight md:leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
