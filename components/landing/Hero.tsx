'use client';

import React, { useRef, useEffect } from 'react';
import { KeywordHighlight } from './shared/KeywordHighlight';
import gsap from 'gsap';

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        '.hero-reveal',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 75%',
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-[90vh] flex items-center pt-24 pb-12 px-6 md:px-12 w-full bg-bg-primary overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
        
        {/* Left Col - Copy */}
        <div className="flex flex-col items-start z-10">
          <div className="hero-reveal inline-flex items-center space-x-2 border border-ink/10 rounded-full px-4 py-1.5 mb-8">
            <span className="block w-2 h-2 rounded-full bg-accent-blue" />
            <span className="font-satoshi text-sm font-medium text-ink/70 uppercase tracking-widest">
              Now accepting students
            </span>
          </div>

          <h1 className="hero-reveal font-chillax headline text-ink mb-8">
            India&apos;s <KeywordHighlight text="student-first" /> <br />
            financial ecosystem.
          </h1>

          <p className="hero-reveal font-satoshi text-lg md:text-xl text-ink/70 max-w-md leading-relaxed mb-10">
            Build credit, get instant cash for campus needs, and unlock rewards—all tailored for college life. Not just a loan, a lifelong financial partner.
          </p>

          <div className="hero-reveal flex flex-col sm:flex-row items-center gap-6 mt-10">
            <button className="w-full sm:w-auto px-10 py-5 bg-accent-blue text-white rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-accent-indigo transition-colors duration-300">
              Get Started Now
            </button>
            <button className="w-full sm:w-auto px-10 py-5 bg-transparent text-ink rounded-full border border-ink/20 font-bold uppercase tracking-widest text-[10px] hover:bg-bg-secondary transition-colors duration-300">
              See How It Works
            </button>
          </div>
        </div>

        {/* Right Col - 3D Composition (CSS/HTML representation) */}
        <div className="hero-reveal relative w-full aspect-square md:aspect-[4/3] lg:aspect-square flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-tr from-accent-blue/10 to-accent-indigo/5 rounded-[3rem] rotate-3 blur-3xl opacity-50" />
          
          <div className="relative w-full max-w-md aspect-[3/4] bg-white/40 backdrop-blur-md rounded-[2.5rem] border border-white/60 shadow-2xl overflow-hidden flex flex-col p-8">
            <div className="flex justify-between items-center mb-12">
              <span className="font-satoshi font-medium text-ink/50">Available Balance</span>
              <span className="w-8 h-8 rounded-full bg-accent-blue/10 flex items-center justify-center">
                <span className="w-3 h-3 rounded-full bg-accent-blue" />
              </span>
            </div>
            
            <h3 className="font-chillax text-6xl font-medium tracking-tight mb-2">₹15,000</h3>
            <p className="font-satoshi text-ink/60 mb-auto">Ready to withdraw instantly</p>
            
            <div className="space-y-4">
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="w-full bg-white/50 rounded-2xl p-4 flex items-center space-x-4 border border-white/40">
                  <div className="w-10 h-10 rounded-full bg-ink/5" />
                  <div className="flex-1 space-y-2">
                    <div className="h-3 w-1/3 bg-ink/10 rounded-full" />
                    <div className="h-2 w-1/4 bg-ink/5 rounded-full" />
                  </div>
                  <div className="font-satoshi text-sm font-medium">+ ₹500</div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
