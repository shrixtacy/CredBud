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
    <section ref={containerRef} className="py-32 px-6 md:px-12 bg-ink-dark w-full relative overflow-hidden">
      
      {/* Background Animated Linework */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="trust-line absolute top-[20%] left-0 h-[1px] bg-accent-indigo" />
        <div className="trust-line absolute top-[50%] left-0 h-[1px] bg-accent-indigo" />
        <div className="trust-line absolute top-[80%] left-0 h-[1px] bg-accent-indigo" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col items-center">
        <div className="mb-20 text-center">
          <h2 className="font-chillax text-4xl md:text-6xl font-medium tracking-tight text-white mb-6">
            Bank-grade <span className="editorial-italic text-accent-indigo">security</span>.
          </h2>
          <p className="font-satoshi text-white/60 text-lg max-w-xl mx-auto">
            Your data is encrypted. Your funds are secure. We employ the same security infrastructure as India&apos;s top financial institutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {[
            { title: '256-bit Encryption', desc: 'All data is encrypted at rest and in transit.' },
            { title: 'RBI Compliant', desc: 'Strict adherence to all regulatory guidelines.' },
            { title: 'Zero Data Sharing', desc: 'We never sell your personal information.' }
          ].map((item, i) => (
             <div key={i} className="trust-card bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors duration-500">
               <h3 className="font-chillax font-medium text-2xl text-white mb-4">{item.title}</h3>
               <p className="font-satoshi text-white/50">{item.desc}</p>
             </div>
          ))}
        </div>
      </div>

    </section>
  );
};
