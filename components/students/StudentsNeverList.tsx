'use client';

import React from 'react';
import { SplitText } from '@/components/landing/shared/SplitText';

const NEVER_ITEMS = [
  { title: 'No Salary Slips', desc: 'We know you are in college. We do not ask for pay stubs.' },
  { title: 'No Hidden Fees', desc: 'Every rupee is disclosed upfront before you confirm.' },
  { title: 'No Spam Calls', desc: 'We communicate through the app. No relentless agent calls.' },
  { title: 'No Parental Guarantee', desc: 'You are an adult building your own financial independence.' },
];

export const StudentsNeverList = () => {
  return (
    <section className="py-20 bg-ink text-bg-primary w-full relative overflow-hidden">
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

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <span className="font-jetbrains text-accent-lime text-xs block mb-2">// strict policy</span>
          <h2 className="font-bricolage text-4xl md:text-6xl font-extrabold tracking-tight text-white">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {NEVER_ITEMS.map((item, i) => (
            <div key={i} className="bg-bg-primary text-ink brutal-card p-6 flex flex-col justify-between" style={{ boxShadow: '4px 4px 0px #C8FF3D' }}>
              <span className="font-jetbrains text-2xl font-bold text-accent-coral">✕</span>
              <div className="mt-6">
                <h3 className="font-bricolage font-extrabold text-xl mb-2">{item.title}</h3>
                <p className="font-jakarta text-xs text-ink-muted leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
