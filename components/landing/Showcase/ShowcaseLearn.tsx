'use client';

import React, { useRef, useEffect } from 'react';
import { KeywordHighlight } from '../shared/KeywordHighlight';
import gsap from 'gsap';

export const ShowcaseLearn = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo('.learn-row',
        { x: -50, opacity: 0 },
        {
          x: 0, opacity: 1, stagger: 0.15, duration: 1, ease: 'power2.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 75%',
          }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-24 px-6 md:px-12 bg-bg-primary w-[95%] md:w-[96%] mx-auto my-6 md:my-10 brutal-border bg-elements overflow-hidden rounded-[2rem] md:rounded-[3.5rem]">
      <div className="max-w-7xl mx-auto w-full">

        <div className="mb-20 text-center max-w-3xl mx-auto">
          <span className="learn-row font-jetbrains text-ink font-normal tracking-widest uppercase text-xs brutal-pill bg-accent-purple/20 px-4 py-1.5 inline-block mb-4">
            // learn feature
          </span>
          <h2 className="learn-row font-bricolage text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Financial literacy, <br /> <KeywordHighlight text="demystified" />.
          </h2>
        </div>

        {/* List layout instead of grid/cards */}
        <div className="flex flex-col border-t-[1.6px] border-ink">
          {[
            { num: '01', title: 'Credit Scores 101', desc: 'How to build it, how not to break it.' },
            { num: '02', title: 'Tax Filing for Beginners', desc: 'Stop relying on your parents.' },
            { num: '03', title: 'Investment Basics', desc: 'Mutual funds, stocks, and compounding.' }
          ].map((item, i) => (
            <div key={i} className="learn-row flex flex-col md:flex-row md:items-center py-8 border-b-[1.6px] border-ink group cursor-pointer hover:bg-accent-lime/20 transition-colors px-6 -mx-6 rounded-xl">
              <span className="font-jetbrains font-bold text-accent-purple text-xl md:w-24 mb-4 md:mb-0">
                {item.num}
              </span>
              <h3 className="font-bricolage text-2xl md:text-4xl font-extrabold flex-1 group-hover:translate-x-4 transition-transform duration-500 text-ink">
                {item.title}
              </h3>
              <p className="font-jakarta text-ink-muted md:w-1/3 mt-4 md:mt-0">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
