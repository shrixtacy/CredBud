'use client';

import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const REASONS = [
  { id: 'semester', label: 'Semester fees', amount: 25000, term: 6 },
  { id: 'laptop', label: 'New Laptop', amount: 40000, term: 9 },
  { id: 'hostel', label: 'Hostel deposit', amount: 15000, term: 4 },
  { id: 'emergency', label: 'Emergency', amount: 8000, term: 3 },
];

export const InteractiveLoanCalculator = () => {
  const [selectedReason, setSelectedReason] = useState('semester');
  const [amount, setAmount] = useState(25000);
  const [term, setTerm] = useState(6);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Bold Superpower Cards Entrance
      gsap.fromTo('.superpower-card',
        { y: 100, opacity: 0, scale: 0.82, rotate: -4 },
        {
          y: 0, opacity: 1, scale: 1, rotate: 0,
          stagger: 0.12, duration: 0.85, ease: 'back.out(1.8)',
          scrollTrigger: { trigger: containerRef.current, start: 'top 75%' }
        }
      );

      // Calculator Widget Reveal
      gsap.fromTo('.calc-widget-container',
        { y: 90, opacity: 0, scale: 0.9 },
        {
          y: 0, opacity: 1, scale: 1, duration: 0.9, ease: 'back.out(1.5)',
          scrollTrigger: { trigger: '.calc-widget-container', start: 'top 80%' }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const selectReason = (r: typeof REASONS[0]) => {
    setSelectedReason(r.id);
    setAmount(r.amount);
    setTerm(r.term);
  };

  // Interest calculation (0% for 30d, nominal ~10% simple interest over full term)
  const totalRepayable = Math.round(amount * (1 + (0.08 * (term / 12))));
  const monthlyRepayment = Math.round(totalRepayable / term);

  return (
    <section ref={containerRef} className="py-12 md:py-20 px-6 md:px-12 bg-bg-primary w-full max-w-7xl mx-auto">

      {/* Mobile Card (h-[260px] md:hidden) */}
      <div className="md:hidden calc-widget-mobile w-full h-[260px] bg-accent-purple text-white brutal-card p-5 flex flex-col justify-between" style={{ boxShadow: '6px 6px 0px #14100F' }}>
        <div>
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-bricolage text-lg font-extrabold text-white">Estimate Advance</h3>
            <span className="font-jetbrains text-[10px] bg-white/10 border border-white/20 px-2 py-0.5 rounded-full text-white">~90s approval</span>
          </div>

          {/* Amount Input Slider */}
          <div className="space-y-1">
            <div className="flex justify-between items-center text-xs font-bold font-jetbrains">
              <span className="text-white/75 uppercase tracking-wide">Amount</span>
              <span className="text-white">₹{amount.toLocaleString('en-IN')}</span>
            </div>
            <input
              type="range"
              min="2000"
              max="50000"
              step="1000"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-accent-lime"
            />
          </div>

          {/* Result Stats row */}
          <div className="flex justify-between items-center bg-white/10 border border-white/10 px-3 py-2 rounded-xl mt-3.5 text-xs font-bold font-jetbrains">
            <span className="text-white/80">Repayment</span>
            <span className="font-bricolage text-sm text-accent-lime">₹{monthlyRepayment.toLocaleString('en-IN')}/mo</span>
            <span className="text-white/60">({term} mos)</span>
          </div>
        </div>

        <div>
          <button suppressHydrationWarning className="w-full py-2.5 bg-accent-lime text-ink font-bricolage font-bold text-sm brutal-pill brutal-shadow-purple transition-all duration-300 hover:scale-[1.02] active:scale-95 cursor-pointer text-center">
            Apply Now →
          </button>
        </div>
      </div>

      {/* Desktop Widget (hidden md:grid) */}
      <div className="calc-widget-container w-full hidden md:grid md:grid-cols-12 brutal-card overflow-hidden" style={{ boxShadow: '8px 8px 0px #14100F' }}>
        
        {/* Left Panel: Purple #7B5CFF */}
        <div className="md:col-span-6 bg-accent-purple p-5 md:p-12 text-white flex flex-col justify-between space-y-5 md:space-y-8">
          <div>
            <span className="font-jetbrains text-xs font-normal border border-white/30 rounded-full px-4 py-1.5 inline-flex items-center gap-2 mb-4 md:mb-6">
              ✦ Instant estimate
            </span>
            <h3 className="font-bricolage text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
              How much do you need?
            </h3>
          </div>

          {/* Reason Pills */}
          <div className="flex flex-nowrap overflow-x-auto gap-2 no-scrollbar pb-1 md:flex-wrap md:overflow-visible md:pb-0">
            {REASONS.map(r => (
              <button
                key={r.id}
                onClick={() => selectReason(r)}
                suppressHydrationWarning
                className={`font-jetbrains text-xs font-bold px-3 py-2 rounded-full brutal-border transition-all cursor-pointer whitespace-nowrap ${
                  selectedReason === r.id
                    ? 'bg-accent-lime text-ink border-ink'
                    : 'bg-white/10 text-white border-white/20 hover:bg-white/20'
                }`}
              >
                {r.label}
              </button>
            ))}
          </div>

          {/* Sliders */}
          <div className="space-y-4 md:space-y-6 pt-2 md:pt-4">
            {/* Amount Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="font-jetbrains text-xs uppercase tracking-widest text-white/70">Amount</span>
                <span className="font-bricolage text-xl md:text-2xl font-extrabold text-white">₹{amount.toLocaleString('en-IN')}</span>
              </div>
              <input
                type="range"
                min="2000"
                max="50000"
                step="1000"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full h-3 bg-white/20 rounded-lg appearance-none cursor-pointer accent-accent-lime"
              />
            </div>

            {/* Pay back slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="font-jetbrains text-xs uppercase tracking-widest text-white/70">Pay back over</span>
                <span className="font-bricolage text-xl md:text-2xl font-extrabold text-white">{term} mo</span>
              </div>
              <input
                type="range"
                min="1"
                max="12"
                step="1"
                value={term}
                onChange={(e) => setTerm(Number(e.target.value))}
                className="w-full h-3 bg-white/20 rounded-lg appearance-none cursor-pointer accent-accent-lime"
              />
            </div>
          </div>
        </div>

        {/* Right Panel: Lime #C8FF3D */}
        <div className="md:col-span-6 bg-accent-lime p-5 md:p-12 text-ink flex flex-col justify-between space-y-5 md:space-y-8">
          <div>
            <span className="font-jetbrains text-xs font-normal text-ink-muted uppercase tracking-widest block mb-1">
              Your monthly repayment
            </span>
            <h4 className="font-bricolage text-5xl md:text-7xl font-extrabold tracking-tight text-ink">
              ₹{monthlyRepayment.toLocaleString('en-IN')}
            </h4>
          </div>

          <div className="grid grid-cols-2 gap-3.5 md:gap-4">
            <div className="bg-white brutal-card p-3 md:p-4">
              <span className="font-jetbrains text-[9px] md:text-[10px] text-ink-muted uppercase tracking-widest block">Total repayable</span>
              <p className="font-bricolage text-lg md:text-xl font-extrabold text-ink mt-0.5 md:mt-1">₹{totalRepayable.toLocaleString('en-IN')}</p>
            </div>
            <div className="bg-white brutal-card p-3 md:p-4">
              <span className="font-jetbrains text-[9px] md:text-[10px] text-ink-muted uppercase tracking-widest block">Approval time</span>
              <p className="font-bricolage text-lg md:text-xl font-extrabold text-ink mt-0.5 md:mt-1">~90 sec</p>
            </div>
          </div>

          <div>
            <button suppressHydrationWarning className="w-full py-3.5 bg-ink text-bg-primary font-bricolage font-bold text-base md:text-lg brutal-pill brutal-shadow-purple transition-all duration-300 hover:scale-[1.02] active:scale-95 cursor-pointer text-center flex items-center justify-center gap-2">
              Apply now →
            </button>
            <p className="font-jetbrains text-[9px] md:text-[10px] text-ink-muted text-center mt-2.5">
              *Illustrative estimate. Final terms shown before you accept.
            </p>
          </div>
        </div>

      </div>

    </section>
  );
};
