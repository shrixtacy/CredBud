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
    <section ref={containerRef} className="py-32 px-6 md:px-12 bg-bg-primary w-full border-t border-ink/5">
      <div className="max-w-7xl mx-auto w-full">
        
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <h2 className="learn-row font-chillax text-4xl md:text-6xl font-medium tracking-tight mb-6">
            Financial literacy, <br /> <KeywordHighlight text="demystified" />.
          </h2>
        </div>

        {/* List layout instead of grid/cards */}
        <div className="flex flex-col border-t border-ink/10">
          {[
            { num: '01', title: 'Credit Scores 101', desc: 'How to build it, how not to break it.' },
            { num: '02', title: 'Tax Filing for Beginners', desc: 'Stop relying on your parents.' },
            { num: '03', title: 'Investment Basics', desc: 'Mutual funds, stocks, and compounding.' }
          ].map((item, i) => (
            <div key={i} className="learn-row flex flex-col md:flex-row md:items-center py-8 border-b border-ink/10 group cursor-pointer hover:bg-ink/5 transition-colors px-4 -mx-4 rounded-xl">
              <span className="editorial-italic text-accent-blue text-xl md:w-24 mb-4 md:mb-0">
                {item.num}
              </span>
              <h3 className="font-chillax text-2xl md:text-4xl font-medium flex-1 group-hover:translate-x-4 transition-transform duration-500">
                {item.title}
              </h3>
              <p className="font-satoshi text-ink/60 md:w-1/3 mt-4 md:mt-0">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
