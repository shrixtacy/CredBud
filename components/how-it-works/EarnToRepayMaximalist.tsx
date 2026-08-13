'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { Award, Laptop, Megaphone, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { ThreeDPhoneSimulator } from './ThreeDPhoneSimulator';

export const EarnToRepayMaximalist = () => {
  return (
    <section className="py-20 md:py-28 bg-bg-primary border-b border-ink/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="font-cabinet text-xs font-bold uppercase tracking-widest text-accent-green border border-accent-green/30 bg-accent-green/10 rounded-full px-4 py-1 inline-block">
            Student Gig Marketplace
          </span>
          <h2 className="font-cabinet text-3xl sm:text-5xl md:text-6xl font-black text-ink uppercase tracking-tight leading-none">
            Earn to repay. <br />
            <span className="editorial-italic font-light normal-case text-accent-green">Or just keep it.</span>
          </h2>
          <p className="font-satoshi text-base text-ink/70 leading-relaxed">
            Never worry about allowance shortages. Pick up campus tasks, earn cash into your Buddy Wallet, and clear your loan in a single tap.
          </p>
        </div>

        {/* 3 Step Gig Workflow */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-ink/10 shadow-sm flex flex-col justify-between">
            <div>
              <span className="font-cabinet text-xs font-bold text-accent-blue tracking-widest uppercase">Step 1</span>
              <h3 className="font-cabinet text-xl font-bold text-ink mt-1.5">Complete a Gig</h3>
              <p className="font-satoshi text-xs text-ink/60 mt-1.5 leading-relaxed">Pick up micro-tasks tailored to your skills &amp; schedule on campus.</p>
            </div>
            <div className="mt-6 flex items-center space-x-1.5 text-accent-green text-xs font-bold uppercase tracking-wider">
              <span>Explore Gigs</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-ink/10 shadow-sm flex flex-col justify-between">
            <div>
              <span className="font-cabinet text-xs font-bold text-accent-green tracking-widest uppercase">Step 2</span>
              <h3 className="font-cabinet text-xl font-bold text-ink mt-1.5">Instant Payout</h3>
              <p className="font-satoshi text-xs text-ink/60 mt-1.5 leading-relaxed">Earnings land directly in your Buddy Wallet upon task completion.</p>
            </div>
            <div className="mt-6 flex items-center space-x-1.5 text-accent-green text-xs font-bold uppercase tracking-wider">
              <span>Instant Payout</span>
              <CheckCircle2 className="w-3.5 h-3.5" />
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-ink/10 shadow-sm flex flex-col justify-between">
            <div>
              <span className="font-cabinet text-xs font-bold text-accent-blue tracking-widest uppercase">Step 3</span>
              <h3 className="font-cabinet text-xl font-bold text-ink mt-1.5">One-Tap Repayment</h3>
              <p className="font-satoshi text-xs text-ink/60 mt-1.5 leading-relaxed">Apply wallet balance to clear your loan or withdraw straight to bank.</p>
            </div>
            <div className="mt-6 flex items-center space-x-1.5 text-accent-blue text-xs font-bold uppercase tracking-wider">
              <span>One-Tap Repay</span>
              <Sparkles className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>

        {/* Featured Campus Gigs & 3D Phone Model */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4">
          
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

          <div className="lg:col-span-5 flex justify-center">
            <ThreeDPhoneSimulator initialStep={3} />
          </div>

        </div>

      </div>
    </section>
  );
};
