'use client';

import React from 'react';
import { Zap, Briefcase, TrendingUp, ShieldCheck, ArrowUpRight, Sparkles } from 'lucide-react';

export const HowItWorksBentoGrid = () => {
  return (
    <section className="relative w-full bg-[#FAF7F2] text-[#0D1B2A] py-24 px-6 md:px-12 border-b border-[#0D1B2A]/10">
      
      {/* Header Section */}
      <div className="max-w-7xl mx-auto mb-16 space-y-4">
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 rounded-full bg-[#2563EB] animate-ping" />
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#2563EB]">
            02.2 // THE OPERATING SYSTEM
          </span>
        </div>
        <h2 className="font-cabinet text-4xl md:text-6xl font-bold tracking-tight text-[#0D1B2A]">
          Everything Included in Your <br />
          <span className="editorial-italic text-[#2563EB] font-light normal-case">Student Financial Ecosystem.</span>
        </h2>
      </div>

      {/* Bento Grid (Asymmetric Layout) */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6">
        
        {/* Bento Card 1: 0% Interest Engine (Col-span 7) */}
        <div className="md:col-span-7 bg-gradient-to-br from-[#2563EB] via-indigo-600 to-[#0D1B2A] text-white rounded-3xl p-8 md:p-10 flex flex-col justify-between space-y-8 relative overflow-hidden group shadow-xl">
          <div className="space-y-4 z-10">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-white/80 bg-white/10 px-3 py-1 rounded-full inline-block">
              ENGINE 01 // 0% INTEREST
            </span>
            <h3 className="font-cabinet text-3xl md:text-5xl font-bold text-white leading-tight">
              Zero Hidden Charges. <br /><span className="editorial-italic font-light">First 30 Days Free.</span>
            </h3>
            <p className="font-satoshi text-base text-white/80 max-w-lg leading-relaxed font-light">
              Traditional credit cards charge up to 42% APR. CreditBuddy gives you a transparent 30-day interest-free window on every withdrawal.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/20 z-10 font-mono">
            <div>
              <span className="text-xs text-white/60 block">Interest Rate</span>
              <span className="text-2xl font-cabinet font-bold text-white">0%</span>
            </div>
            <div>
              <span className="text-xs text-white/60 block">Annual Fee</span>
              <span className="text-2xl font-cabinet font-bold text-white">₹0</span>
            </div>
            <div>
              <span className="text-xs text-white/60 block">Prepayment Penalty</span>
              <span className="text-2xl font-cabinet font-bold text-white">None</span>
            </div>
          </div>
        </div>

        {/* Bento Card 2: Campus Gig Board (Col-span 5) */}
        <div className="md:col-span-5 bg-white border border-[#0D1B2A]/10 rounded-3xl p-8 flex flex-col justify-between space-y-6 shadow-md hover:border-[#2563EB]/40 transition-colors">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#10B981]">
                GIG BOARD // REPAYMENT
              </span>
              <Briefcase className="w-5 h-5 text-[#10B981]" />
            </div>
            <h3 className="font-cabinet text-2xl md:text-3xl font-bold text-[#0D1B2A]">
              Campus <span className="editorial-italic text-[#10B981] font-light">Micro-Gigs</span>
            </h3>
            <p className="font-satoshi text-sm text-[#0D1B2A]/70 leading-relaxed">
              Earn directly on campus. Pick up graphic design tasks, event hosting, or notes sharing to pay off your balance.
            </p>
          </div>

          {/* Sample Live Gigs Feed */}
          <div className="space-y-2.5 font-mono text-xs">
            <div className="p-3 rounded-xl bg-[#FAF7F2] border border-[#0D1B2A]/10 flex justify-between items-center">
              <div>
                <span className="text-[#0D1B2A] font-bold block">Fest Poster Design</span>
                <span className="text-[#0D1B2A]/50 text-[10px]">IIT Bombay Techfest</span>
              </div>
              <span className="text-[#10B981] font-bold">+₹800</span>
            </div>
            <div className="p-3 rounded-xl bg-[#FAF7F2] border border-[#0D1B2A]/10 flex justify-between items-center">
              <div>
                <span className="text-[#0D1B2A] font-bold block">CS101 Exam Notes</span>
                <span className="text-[#0D1B2A]/50 text-[10px]">Shared with 45 students</span>
              </div>
              <span className="text-[#10B981] font-bold">+₹450</span>
            </div>
          </div>
        </div>

        {/* Bento Card 3: Instant UPI Transfer (Col-span 5) */}
        <div className="md:col-span-5 bg-white border border-[#0D1B2A]/10 rounded-3xl p-8 flex flex-col justify-between space-y-6 shadow-md hover:border-[#2563EB]/40 transition-colors">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#2563EB]">
                PAYOUTS // INSTANT
              </span>
              <Zap className="w-5 h-5 text-[#2563EB]" />
            </div>
            <h3 className="font-cabinet text-2xl md:text-3xl font-bold text-[#0D1B2A]">
              Direct <span className="editorial-italic text-[#2563EB] font-light">UPI Payouts</span>
            </h3>
            <p className="font-satoshi text-sm text-[#0D1B2A]/70 leading-relaxed">
              Money drops into your GPay, PhonePe, or Paytm in under 60 seconds after request.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#0D1B2A]/10 flex items-center justify-between font-mono text-xs">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-[#2563EB]/20 text-[#2563EB] flex items-center justify-center font-bold">
                ✓
              </div>
              <div>
                <span className="text-[#0D1B2A] font-bold block">₹12,000 Transferred</span>
                <span className="text-[#0D1B2A]/50 text-[10px]">UPI Ref: 4209184912</span>
              </div>
            </div>
            <span className="text-[#10B981] font-bold">SUCCESS</span>
          </div>
        </div>

        {/* Bento Card 4: Credit Score Builder (Col-span 7) */}
        <div className="md:col-span-7 bg-white border border-[#0D1B2A]/10 rounded-3xl p-8 md:p-10 flex flex-col justify-between space-y-8 shadow-md hover:border-[#2563EB]/40 transition-colors">
          <div className="space-y-4 z-10">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#2563EB]">
                SCORE // CIBIL BUILDER
              </span>
              <TrendingUp className="w-5 h-5 text-[#2563EB]" />
            </div>
            <h3 className="font-cabinet text-3xl md:text-4xl font-bold text-[#0D1B2A]">
              Graduate with a <span className="editorial-italic text-[#2563EB] font-light">750+ CIBIL</span> Score.
            </h3>
            <p className="font-satoshi text-base text-[#0D1B2A]/70 max-w-md leading-relaxed font-light">
              On-time repayments are reported to official credit bureaus, helping you build an elite credit history before you even apply for your first job or home loan.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-6 border-t border-[#0D1B2A]/10 font-mono text-xs z-10">
            <div className="p-3 rounded-xl bg-[#FAF7F2] border border-[#0D1B2A]/10">
              <span className="text-[#0D1B2A]/50 block">Average Score Gain</span>
              <span className="text-xl font-cabinet font-bold text-[#2563EB] mt-1 block">+85 Points</span>
            </div>
            <div className="p-3 rounded-xl bg-[#FAF7F2] border border-[#0D1B2A]/10">
              <span className="text-[#0D1B2A]/50 block">Bureau Reporting</span>
              <span className="text-xl font-cabinet font-bold text-[#0D1B2A] mt-1 block">CIBIL & Experian</span>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
};
