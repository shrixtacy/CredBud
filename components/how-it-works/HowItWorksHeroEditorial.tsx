'use client';

import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { ThreePhonesShowcase } from './ThreePhonesShowcase';

export const HowItWorksHeroEditorial = () => {
  const scrollToJourney = () => {
    const el = document.getElementById('narrative-journey');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full min-h-screen bg-[#FAF7F2] text-[#0D1B2A] pt-24 pb-16 px-6 md:px-12 flex flex-col justify-between border-b border-[#0D1B2A]/10 overflow-hidden">
      
      {/* Background ambient subtle glow */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#2563EB]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Main Hero Content - Asymmetric Mixed-Font Layout */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center my-auto z-10">
        
        {/* Left Column (7 cols): Arrow & Mixed-Font Headline */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-8 border-b lg:border-b-0 lg:border-r border-[#0D1B2A]/10 pb-12 lg:pb-0 lg:pr-12">
          
          <div className="space-y-6">
            
            {/* Top Category Tag & Explore Flow Button */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#2563EB]/10 border border-[#2563EB]/20 text-[#2563EB] font-mono text-xs font-bold uppercase tracking-wider">
                FINANCIAL OPERATING SYSTEM
              </span>

              <button 
                onClick={scrollToJourney}
                className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#2563EB] hover:bg-[#1d4ed8] text-white font-mono text-xs font-bold tracking-wider uppercase transition-all duration-200 cursor-pointer shadow-md shadow-[#2563EB]/20 hover:scale-105"
              >
                <span>EXPLORE NARRATIVE FLOW</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mixed-Font Headline (Cabinet Grotesk + Georgia Editorial Italic) */}
            <h1 className="font-cabinet text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#0D1B2A] leading-[0.95]">
              Student <span className="editorial-italic text-[#2563EB] font-light normal-case">Credit</span>, <br />
              Demystified.
            </h1>

            <p className="font-satoshi text-lg md:text-xl text-[#0D1B2A]/70 max-w-xl leading-relaxed font-light">
              From zero credit score to <span className="font-medium text-[#0D1B2A]">₹20,000 cash in hand</span> in 60 seconds. Built with <span className="editorial-italic text-[#2563EB]">0% interest</span> for 30 days, zero hidden fees, and campus micro-gigs.
            </p>
          </div>

          {/* Key Value Metric Grid */}
          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#0D1B2A]/10">
            <div className="space-y-1">
              <span className="font-cabinet text-2xl md:text-3xl font-bold text-[#0D1B2A]">60s</span>
              <span className="block font-mono text-[10px] uppercase tracking-wider text-[#0D1B2A]/50">Approval Time</span>
            </div>
            <div className="space-y-1">
              <span className="font-cabinet text-2xl md:text-3xl font-bold text-[#2563EB]">0%</span>
              <span className="block font-mono text-[10px] uppercase tracking-wider text-[#0D1B2A]/50">First 30 Days</span>
            </div>
            <div className="space-y-1">
              <span className="font-cabinet text-2xl md:text-3xl font-bold text-[#0D1B2A]">₹0</span>
              <span className="block font-mono text-[10px] uppercase tracking-wider text-[#0D1B2A]/50">Processing Fee</span>
            </div>
          </div>

        </div>

        {/* Right Column (5 cols): 3 Phones Stage */}
        <div className="lg:col-span-5 flex items-center justify-center relative py-4">
          <ThreePhonesShowcase />
        </div>

      </div>

      {/* Bottom Scroll Cue */}
      <div className="w-full flex justify-between items-center pt-8 font-mono text-xs text-[#0D1B2A]/50 border-t border-[#0D1B2A]/10">
        <span>SWISS-GRID NARRATIVE FLOW</span>
        <button onClick={scrollToJourney} className="flex items-center space-x-2 text-[#0D1B2A]/80 hover:text-[#2563EB] transition-colors cursor-pointer">
          <span>SCROLL DOWN</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </button>
      </div>

    </section>
  );
};
