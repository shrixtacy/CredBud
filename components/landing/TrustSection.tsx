'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

export const TrustSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo('.trust-line',
        { width: 0 },
        {
          width: '100%', duration: 1.5, ease: 'power3.inOut', stagger: 0.2,
          scrollTrigger: { trigger: containerRef.current, start: 'top 60%' }
        }
      );

      gsap.fromTo('.trust-card',
        { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power2.out',
          scrollTrigger: { trigger: containerRef.current, start: 'top 50%' }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-24 px-6 md:px-12 bg-bg-primary w-[95%] md:w-[96%] mx-auto my-6 md:my-10 brutal-border relative overflow-hidden rounded-[2rem] md:rounded-[3.5rem]">

      {/* Background Animated Linework */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="trust-line absolute top-[20%] left-0 h-[1.6px] bg-accent-purple" />
        <div className="trust-line absolute top-[50%] left-0 h-[1.6px] bg-accent-purple" />
        <div className="trust-line absolute top-[80%] left-0 h-[1.6px] bg-accent-purple" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col items-center">
        <div className="mb-20 text-center">
          <span className="font-jetbrains text-ink font-normal tracking-widest uppercase text-xs brutal-pill bg-accent-lime px-4 py-1.5 inline-block mb-4">
            // bank-grade security
          </span>
          <h2 className="font-bricolage text-4xl md:text-6xl font-extrabold tracking-tight text-ink mb-6">
            Bank-grade <span className="accent-underline text-ink">security</span>.
          </h2>
          <p className="font-jakarta text-ink-muted text-lg max-w-xl mx-auto">
            Your data is encrypted. Your funds are secure. We employ the same security infrastructure as India&apos;s top financial institutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {[
            { title: '256-bit Encryption', desc: 'All data is encrypted at rest and in transit.', color: 'bg-accent-purple/10' },
            { title: 'RBI Compliant', desc: 'Strict adherence to all regulatory guidelines.', color: 'bg-accent-lime/20' },
            { title: 'Zero Data Sharing', desc: 'We never sell your personal information.', color: 'bg-accent-gold/20' }
          ].map((item, i) => (
            <div key={i} className={`trust-card bg-white brutal-card p-8 hover:translate-y-[-4px] transition-transform duration-300`}>
              <div className={`w-8 h-8 rounded-full ${item.color} brutal-border mb-4 flex items-center justify-center font-jetbrains text-xs font-bold`}>
                ✓
              </div>
              <h3 className="font-bricolage font-extrabold text-2xl text-ink mb-4">{item.title}</h3>
              <p className="font-jakarta text-ink-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};
