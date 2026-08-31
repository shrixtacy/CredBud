'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Clock, ShieldCheck, Zap, Sparkles, Tag } from 'lucide-react';
import { ThreeDPhoneSimulator } from './ThreeDPhoneSimulator';

export const HowItWorksHeroMaximalist = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        '.hiw-hero-elem',
        { y: 35, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, stagger: 0.1, ease: 'power3.out' }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-[90vh] pt-28 pb-16 px-4 sm:px-6 md:px-12 bg-bg-primary flex flex-col items-center justify-center text-center overflow-hidden border-b border-ink/10">
      
      {/* Background Soft Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-accent-blue/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[350px] h-[350px] bg-accent-green/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-5xl mx-auto z-10 flex flex-col items-center relative">
        
        {/* Floating Sticker Badges */}
        <div className="hidden lg:flex absolute -top-4 -left-10 rotate-[-6deg] px-4 py-2 bg-accent-yellow text-ink rounded-xl font-cabinet text-xs font-black uppercase tracking-wider shadow-md border border-ink/15 animate-bounce flex items-center gap-1.5" style={{ animationDuration: '3s' }}>
          <Tag className="w-3.5 h-3.5" /> 5 MIN APPROVAL
        </div>
        <div className="hidden lg:flex absolute -top-2 -right-8 rotate-[5deg] px-4 py-2 bg-accent-green text-white rounded-xl font-cabinet text-xs font-black uppercase tracking-wider shadow-md border border-ink/15 animate-pulse flex items-center gap-1.5">
          <Zap className="w-3.5 h-3.5" /> 60s UPI DISBURSAL
        </div>

        {/* Eyebrow Badge Pill */}
        <div className="hiw-hero-elem inline-flex items-center space-x-2 border border-ink/15 bg-white backdrop-blur-md rounded-full px-5 py-2 mb-6 shadow-sm">
          <Sparkles className="w-4 h-4 text-accent-blue animate-pulse" />
          <span className="font-cabinet text-xs font-bold text-ink uppercase tracking-widest">
            Step-By-Step Student Guide
          </span>
        </div>

        {/* Headline */}
        <h1 className="hiw-hero-elem font-cabinet text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-ink leading-[0.92] tracking-tight uppercase max-w-4xl">
          From &ldquo;I need cash&rdquo; <br />
          <span className="editorial-italic font-light normal-case text-accent-blue">to cash in hand.</span>
        </h1>

        {/* Subtitle */}
        <p className="hiw-hero-elem mt-6 font-satoshi text-base sm:text-xl text-ink/70 max-w-2xl leading-relaxed font-normal">
          <strong className="text-ink font-semibold">5 minutes.</strong> No ambiguity. No small print surprises. Here&apos;s every single step decoded.
        </p>

        {/* Onboarding Stopwatch Badge */}
        <div className="hiw-hero-elem mt-8 inline-flex items-center gap-3 p-2.5 px-6 rounded-2xl bg-white border border-ink/10 shadow-md">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-accent-green animate-spin" style={{ animationDuration: '8s' }} />
            <span className="font-cabinet text-xs font-bold text-ink uppercase tracking-wider">Average Onboarding Time</span>
          </div>
          <div className="h-4 w-px bg-ink/15" />
          <span className="font-cabinet text-base sm:text-lg font-black text-accent-green">4 min 42 sec</span>
        </div>

        {/* Feature Pill Grid */}
        <div className="hiw-hero-elem mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 w-full max-w-3xl">
          {[
            { icon: <Zap className="w-4 h-4 text-accent-blue" />, label: '60s Disbursal' },
            { icon: <ShieldCheck className="w-4 h-4 text-accent-green" />, label: 'RBI Compliant' },
            { icon: <Sparkles className="w-4 h-4 text-accent-blue" />, label: '0% Interest Waiver' },
            { icon: <Clock className="w-4 h-4 text-accent-yellow" />, label: '₹150 Flat Fee' },
          ].map((item, idx) => (
            <div key={idx} className="flex items-center justify-center space-x-2 p-3 rounded-xl bg-white border border-ink/10 shadow-sm hover:border-accent-blue/40 transition-colors">
              {item.icon}
              <span className="font-satoshi text-xs font-semibold text-ink/80">{item.label}</span>
            </div>
          ))}
        </div>

        {/* 3D Phone Preview Widget */}
        <div className="hiw-hero-elem mt-10 w-full flex justify-center">
          <ThreeDPhoneSimulator initialStep={1} />
        </div>

      </div>
    </section>
  );
};
