'use client';

import React, { useState } from 'react';
import { CreditCard, Calendar, HeartHandshake, TrendingUp, Wallet2, Sparkles, CheckCircle2 } from 'lucide-react';

export const StickyStackRepaymentMaximalist = () => {
  const [repaymentMode, setRepaymentMode] = useState<'full' | 'split' | 'extension'>('split');

  return (
    <section className="relative w-full py-16 bg-bg-primary border-b border-ink/10">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 px-6 space-y-3">
        <span className="font-cabinet text-xs font-bold uppercase tracking-widest text-accent-blue border border-accent-blue/30 bg-accent-blue/10 rounded-full px-4 py-1 inline-block">
          The Feature No Other Loan App Has
        </span>
        <h2 className="font-cabinet text-3xl sm:text-5xl md:text-6xl font-black text-ink uppercase tracking-tight leading-tight">
          Repaying is <br />
          <span className="editorial-italic font-light normal-case text-accent-blue">just as easy.</span>
        </h2>
        <p className="font-satoshi text-base text-ink/70 leading-relaxed">
          No rigid deadlines, no toxic collection calls. We built a credit system that works with student life, not against it.
        </p>
      </div>

      {/* Mode Selector Buttons */}
      <div className="flex justify-center mb-10 px-6">
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

      {/* Sticky Stack Panels Container */}
      <div className="space-y-6 px-4 sm:px-6 md:px-12 max-w-6xl mx-auto pb-12">
        
        {/* PANEL 1: Payment Options */}
        <div className="sticky top-[8vh] min-h-[45vh] w-full z-[10] flex items-center justify-center my-3">
          <div className="w-full bg-white p-8 border border-ink/10 shadow-xl rounded-[2.5rem] flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="space-y-4 max-w-xl">
              <div className="w-12 h-12 rounded-2xl bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center text-accent-blue font-bold">
                <CreditCard className="w-6 h-6" />
              </div>
              <h3 className="font-cabinet text-3xl font-black text-ink uppercase tracking-tight">Multiple Payment Options</h3>
              <p className="font-satoshi text-base text-ink/70 leading-relaxed">
                Pay via your favorite method: <strong className="text-ink font-semibold">UPI (GPay, PhonePe, Paytm) · Net banking · Debit card · Wallet</strong>. Auto-debit option available for zero-forgetfulness repayments.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-bg-primary border border-ink/10 space-y-3 min-w-[260px]">
              <span className="text-xs font-bold text-accent-blue uppercase tracking-widest">Supported Channels</span>
              <div className="grid grid-cols-2 gap-2 text-xs font-bold text-ink">
                <div className="p-2.5 bg-white rounded-lg border border-ink/10 text-center">Google Pay</div>
                <div className="p-2.5 bg-white rounded-lg border border-ink/10 text-center">PhonePe</div>
                <div className="p-2.5 bg-white rounded-lg border border-ink/10 text-center">Paytm UPI</div>
                <div className="p-2.5 bg-white rounded-lg border border-ink/10 text-center">NetBanking</div>
              </div>
            </div>
          </div>
        </div>

        {/* PANEL 2: Flexible Split Repayments */}
        <div className="sticky top-[10vh] min-h-[45vh] w-full z-[20] flex items-center justify-center my-3">
          <div className="w-full bg-white p-8 border border-accent-green/30 shadow-2xl rounded-[2.5rem] flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="space-y-4 max-w-xl">
              <div className="w-12 h-12 rounded-2xl bg-accent-green/10 border border-accent-green/20 flex items-center justify-center text-accent-green font-bold">
                <Wallet2 className="w-6 h-6" />
              </div>
              <h3 className="font-cabinet text-3xl font-black text-ink uppercase tracking-tight">Flexible Split Repayments</h3>
              <p className="font-satoshi text-base text-ink/70 leading-relaxed">
                Can&apos;t pay the full balance at once? Split your repayment into 4 weekly installments of <strong className="text-accent-green font-bold">₹1,287.50</strong> whenever your pocket money or allowance arrives.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-emerald-950 text-white border border-emerald-500/30 space-y-3 min-w-[260px] text-center">
              <span className="text-xs font-bold text-accent-green uppercase tracking-widest">Split Calculator</span>
              <h4 className="font-cabinet text-3xl font-black text-white">₹1,287.50 / wk</h4>
              <p className="text-[10px] text-emerald-300">4 Weekly Installments &bull; Zero penalty</p>
            </div>
          </div>
        </div>

        {/* PANEL 3: Grace Extensions */}
        <div className="sticky top-[12vh] min-h-[45vh] w-full z-[30] flex items-center justify-center my-3">
          <div className="w-full bg-white p-8 border border-ink/10 shadow-2xl rounded-[2.5rem] flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="space-y-4 max-w-xl">
              <div className="w-12 h-12 rounded-2xl bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center text-accent-blue font-bold">
                <Calendar className="w-6 h-6" />
              </div>
              <h3 className="font-cabinet text-3xl font-black text-ink uppercase tracking-tight">1-Tap Grace Extensions</h3>
              <p className="font-satoshi text-base text-ink/70 leading-relaxed">
                Exams delayed or monthly allowance late? Request a 14-day grace extension directly in the app with one tap — zero heavy penalties or hidden fines.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-bg-primary border border-ink/10 space-y-3 min-w-[260px] text-center">
              <span className="text-xs font-bold text-accent-blue uppercase tracking-widest">Grace Policy</span>
              <h4 className="font-cabinet text-2xl font-black text-ink">+14 Days Extended</h4>
              <p className="text-[10px] text-ink/60">Tap button in app &bull; Zero stress</p>
            </div>
          </div>
        </div>

        {/* PANEL 4: Respect-First Collection & Credit Building */}
        <div className="sticky top-[14vh] min-h-[45vh] w-full z-[40] flex items-center justify-center my-3">
          <div className="w-full bg-gradient-to-br from-ink to-[#0d1b2a] text-white p-8 border border-ink/20 shadow-2xl rounded-[2.5rem] flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="space-y-4 max-w-xl">
              <div className="w-12 h-12 rounded-2xl bg-accent-green/20 border border-accent-green/30 flex items-center justify-center text-accent-green font-bold">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="font-cabinet text-3xl font-black text-white uppercase tracking-tight">Respect-First Collection &amp; Credit Building</h3>
              <p className="font-satoshi text-base text-white/70 leading-relaxed">
                <strong className="text-white font-semibold">Zero harassment. Zero shame.</strong> Every on-time repayment is reported to CIBIL / Experian, giving you a 750+ credit score before graduation.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white/10 border border-white/20 space-y-3 min-w-[260px] text-center">
              <span className="text-xs font-bold text-accent-green uppercase tracking-widest">Credit Bureau Report</span>
              <h4 className="font-cabinet text-4xl font-black text-accent-green">750+ CIBIL</h4>
              <p className="text-[10px] text-white/60">Build credit history before graduation</p>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
};
