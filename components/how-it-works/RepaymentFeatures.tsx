'use client';

import React, { useState } from 'react';
import { CreditCard, Calendar, HeartHandshake, TrendingUp, Wallet2, Sparkles } from 'lucide-react';

export const RepaymentFeatures = () => {
  const [repaymentMode, setRepaymentMode] = useState<'full' | 'split' | 'extension'>('split');

  return (
    <section className="py-16 md:py-24 px-6 md:px-12 bg-bg-primary relative border-t border-ink/10 overflow-hidden">
      {/* Soft Glow Orbs */}
      <div className="absolute top-1/3 left-1/3 w-[450px] h-[450px] bg-accent-blue/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="font-cabinet text-xs font-bold uppercase tracking-widest text-accent-blue border border-accent-blue/30 bg-accent-blue/10 rounded-full px-4 py-1 inline-block">
            The feature no other loan app has &rarr;
          </span>
          <h2 className="font-cabinet text-3xl sm:text-4xl md:text-5xl font-black text-ink uppercase tracking-tight leading-none">
            Repaying is <br />
            <span className="editorial-italic font-light normal-case text-accent-blue">just as easy.</span>
          </h2>
          <p className="font-satoshi text-base text-ink/70 leading-relaxed">
            No rigid deadlines, no toxic collection calls. We built a credit system that works with student life, not against it.
          </p>
        </div>

        {/* Interactive Mode Switcher Bar */}
        <div className="flex justify-center">
          <div className="inline-flex p-1 rounded-xl bg-white border border-ink/10 shadow-sm">
            <button
              onClick={() => setRepaymentMode('full')}
              className={`px-4 py-2 rounded-lg font-cabinet text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                repaymentMode === 'full' ? 'bg-accent-blue text-white shadow-sm' : 'text-ink/60 hover:text-ink'
              }`}
            >
              Full Repayment
            </button>
            <button
              onClick={() => setRepaymentMode('split')}
              className={`px-4 py-2 rounded-lg font-cabinet text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                repaymentMode === 'split' ? 'bg-accent-green text-white shadow-sm' : 'text-ink/60 hover:text-ink'
              }`}
            >
              Split Weekly Micro-Payments
            </button>
            <button
              onClick={() => setRepaymentMode('extension')}
              className={`px-4 py-2 rounded-lg font-cabinet text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                repaymentMode === 'extension' ? 'bg-ink text-white shadow-sm' : 'text-ink/60 hover:text-ink'
              }`}
            >
              1-Tap Grace Extension
            </button>
          </div>
        </div>

        {/* Mode Feature Spotlight Banner */}
        <div className="p-6 rounded-2xl bg-white border border-ink/10 shadow-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="space-y-1 text-center md:text-left">
            <span className="font-cabinet text-xs font-bold uppercase tracking-widest text-accent-green">
              Active Mode Selected: {repaymentMode.toUpperCase()}
            </span>
            <h3 className="font-cabinet text-xl md:text-2xl font-bold text-ink">
              {repaymentMode === 'full' && 'Pay ₹5,150 in one single tap when pocket money arrives.'}
              {repaymentMode === 'split' && 'Split ₹5,150 into 4 easy weekly installments of ₹1,287.50.'}
              {repaymentMode === 'extension' && 'Exams delayed? Extend due date by 14 days with zero penalty.'}
            </h3>
          </div>
          <div className="shrink-0">
            <div className="w-10 h-10 rounded-xl bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center text-accent-blue font-bold">
              <Sparkles className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <div className="p-6 rounded-2xl bg-white border border-ink/10 shadow-sm hover:border-accent-blue/40 transition-all duration-300 group hover:-translate-y-1">
            <div className="w-10 h-10 rounded-xl bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center text-accent-blue mb-4 group-hover:scale-105 transition-transform">
              <CreditCard className="w-5 h-5" />
            </div>
            <h3 className="font-cabinet text-xl font-bold text-ink uppercase tracking-tight">Payment options</h3>
            <p className="font-satoshi text-xs sm:text-sm text-ink/60 mt-2 leading-relaxed">
              Pay via your favorite method: <strong className="text-ink font-semibold">UPI · Net banking · Debit card · Wallet</strong>. Auto-debit available if preferred.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-ink/10 shadow-sm hover:border-accent-green/40 transition-all duration-300 group hover:-translate-y-1">
            <div className="w-10 h-10 rounded-xl bg-accent-green/10 border border-accent-green/20 flex items-center justify-center text-accent-green mb-4 group-hover:scale-105 transition-transform">
              <Wallet2 className="w-5 h-5" />
            </div>
            <h3 className="font-cabinet text-xl font-bold text-ink uppercase tracking-tight">Flexible</h3>
            <p className="font-satoshi text-xs sm:text-sm text-ink/60 mt-2 leading-relaxed">
              Pay in full at the end or split repayments into smaller weekly micro-payments whenever pocket money arrives.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-ink/10 shadow-sm hover:border-accent-blue/40 transition-all duration-300 group hover:-translate-y-1">
            <div className="w-10 h-10 rounded-xl bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center text-accent-blue mb-4 group-hover:scale-105 transition-transform">
              <Calendar className="w-5 h-5" />
            </div>
            <h3 className="font-cabinet text-xl font-bold text-ink uppercase tracking-tight">Grace Extensions</h3>
            <p className="font-satoshi text-xs sm:text-sm text-ink/60 mt-2 leading-relaxed">
              Can&apos;t pay on time? Extend your due date directly in app with one tap — zero heavy penalties or surprise fees.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-ink/10 shadow-sm hover:border-accent-blue/40 transition-all duration-300 group hover:-translate-y-1 md:col-span-2 lg:col-span-2">
            <div className="w-10 h-10 rounded-xl bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center text-accent-blue mb-4 group-hover:scale-105 transition-transform">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <h3 className="font-cabinet text-xl font-bold text-ink uppercase tracking-tight">Collection policy</h3>
            <p className="font-satoshi text-xs sm:text-sm text-ink/70 mt-2 leading-relaxed max-w-xl">
              <strong className="text-ink font-semibold">No harassment. No shame. Respect-first support.</strong> We know exam delays and family emergencies happen. Reach out and our team will rework your repayment schedule.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-br from-accent-blue/10 to-accent-green/10 border border-accent-green/30 shadow-sm hover:border-accent-green/50 transition-all duration-300 group hover:-translate-y-1">
            <div className="w-10 h-10 rounded-xl bg-accent-green/20 border border-accent-green/30 flex items-center justify-center text-accent-green mb-4 group-hover:scale-105 transition-transform">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h3 className="font-cabinet text-xl font-bold text-ink uppercase tracking-tight">Credit building</h3>
            <p className="font-satoshi text-xs sm:text-sm text-ink/70 mt-2 leading-relaxed">
              Every on-time repayment is reported to CIBIL / Experian, giving you a 750+ score before graduation.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
