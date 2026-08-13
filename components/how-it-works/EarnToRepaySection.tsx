'use client';

import React from 'react';
import { Award, Laptop, Megaphone, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { ThreeDPhoneSimulator } from './ThreeDPhoneSimulator';

export const EarnToRepaySection = () => {
  return (
    <section className="py-16 md:py-24 px-6 md:px-12 bg-bg-primary relative border-t border-ink/10 overflow-hidden">
      {/* Glow Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-green/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="font-cabinet text-xs font-bold uppercase tracking-widest text-accent-green border border-accent-green/30 bg-accent-green/10 rounded-full px-4 py-1 inline-block">
            Student Gig Ecosystem
          </span>
          <h2 className="font-cabinet text-3xl sm:text-4xl md:text-5xl font-black text-ink uppercase tracking-tight leading-none">
            Earn to repay. <br />
            <span className="editorial-italic font-light normal-case text-accent-green">Or just keep it.</span>
          </h2>
          <p className="font-satoshi text-base text-ink/70 leading-relaxed">
            Never worry about allowance shortages. Pick up campus tasks, earn cash into your Buddy Wallet, and clear your loan in a single tap.
          </p>
        </div>

        {/* 3 Step Flow Line */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 relative">
          
          <div className="p-6 rounded-2xl bg-white border border-ink/10 shadow-sm hover:border-accent-blue/30 transition-all flex flex-col justify-between">
            <div>
              <span className="font-cabinet text-xs font-bold text-accent-blue tracking-widest uppercase">Step 1</span>
              <h3 className="font-cabinet text-xl font-bold text-ink mt-1.5">Complete a gig or task</h3>
              <p className="font-satoshi text-xs text-ink/60 mt-1.5 leading-relaxed">Pick up micro-tasks tailored to your skills &amp; schedule on campus.</p>
            </div>
            <div className="mt-6 flex items-center space-x-1.5 text-accent-green text-xs font-bold uppercase tracking-wider">
              <span>Explore Gigs</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-ink/10 shadow-sm hover:border-accent-green/30 transition-all flex flex-col justify-between">
            <div>
              <span className="font-cabinet text-xs font-bold text-accent-green tracking-widest uppercase">Step 2</span>
              <h3 className="font-cabinet text-xl font-bold text-ink mt-1.5">Earnings land in Wallet</h3>
              <p className="font-satoshi text-xs text-ink/60 mt-1.5 leading-relaxed">Instant payout directly to your Buddy Wallet upon task completion.</p>
            </div>
            <div className="mt-6 flex items-center space-x-1.5 text-accent-green text-xs font-bold uppercase tracking-wider">
              <span>Instant Payout</span>
              <CheckCircle2 className="w-3.5 h-3.5" />
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-ink/10 shadow-sm hover:border-accent-blue/30 transition-all flex flex-col justify-between">
            <div>
              <span className="font-cabinet text-xs font-bold text-accent-blue tracking-widest uppercase">Step 3</span>
              <h3 className="font-cabinet text-xl font-bold text-ink mt-1.5">Apply to loan in one tap</h3>
              <p className="font-satoshi text-xs text-ink/60 mt-1.5 leading-relaxed">Use earnings to settle your due amount or withdraw directly to bank.</p>
            </div>
            <div className="mt-6 flex items-center space-x-1.5 text-accent-blue text-xs font-bold uppercase tracking-wider">
              <span>One-Tap Repay</span>
              <Sparkles className="w-3.5 h-3.5" />
            </div>
          </div>

        </div>

        {/* Interactive Gigs Cards & 3D Phone Model */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4">
          
          {/* Gig Categories (Col 7) */}
          <div className="lg:col-span-7 space-y-3">
            <h3 className="font-cabinet text-2xl font-bold text-ink uppercase tracking-tight mb-2">
              Featured Campus Gigs
            </h3>

            <div className="p-4 rounded-xl bg-white border border-ink/10 shadow-sm flex items-center justify-between hover:border-accent-green/30 transition-all">
              <div className="flex items-center space-x-3.5">
                <div className="w-10 h-10 rounded-xl bg-accent-blue/10 text-accent-blue flex items-center justify-center font-bold">
                  <Laptop className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-cabinet text-base font-bold text-ink">Product Testing</h4>
                  <p className="font-satoshi text-xs text-ink/60 mt-0.5">Test new app features &amp; get money on feedback</p>
                </div>
              </div>
              <span className="font-cabinet text-sm font-black text-accent-green">+₹300 / test</span>
            </div>

            <div className="p-4 rounded-xl bg-white border border-ink/10 shadow-sm flex items-center justify-between hover:border-accent-green/30 transition-all">
              <div className="flex items-center space-x-3.5">
                <div className="w-10 h-10 rounded-xl bg-accent-green/10 text-accent-green flex items-center justify-center font-bold">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-cabinet text-base font-bold text-ink">Freelance Tasks</h4>
                  <p className="font-satoshi text-xs text-ink/60 mt-0.5">Design, content writing, &amp; coding based on work</p>
                </div>
              </div>
              <span className="font-cabinet text-sm font-black text-accent-green">+₹1,200 / task</span>
            </div>

            <div className="p-4 rounded-xl bg-white border border-ink/10 shadow-sm flex items-center justify-between hover:border-accent-green/30 transition-all">
              <div className="flex items-center space-x-3.5">
                <div className="w-10 h-10 rounded-xl bg-accent-blue/10 text-accent-blue flex items-center justify-center font-bold">
                  <Megaphone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-cabinet text-base font-bold text-ink">Campus Promotion</h4>
                  <p className="font-satoshi text-xs text-ink/60 mt-0.5">Ambassador referrals — earnings grow every week</p>
                </div>
              </div>
              <span className="font-cabinet text-sm font-black text-accent-green">+₹2,500 / week</span>
            </div>
          </div>

          {/* 3D Phone Model */}
          <div className="lg:col-span-5 flex justify-center">
            <ThreeDPhoneSimulator initialStep={3} />
          </div>

        </div>

      </div>
    </section>
  );
};
