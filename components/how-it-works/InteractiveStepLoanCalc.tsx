'use client';

import React from 'react';
import { Check, Zap, Sparkles } from 'lucide-react';
import { ThreeDPhoneSimulator } from './ThreeDPhoneSimulator';

export const InteractiveStepLoanCalc = () => {
  return (
    <section className="py-16 md:py-24 px-6 md:px-12 bg-bg-primary relative border-t border-ink/10 overflow-hidden">
      {/* Soft Glow */}
      <div className="absolute top-1/2 -right-48 w-80 h-80 bg-accent-green/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        {/* Left Column: STEP 2 Details */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center space-x-2 border border-accent-green/30 bg-accent-green/10 rounded-full px-4 py-1">
            <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
            <span className="font-cabinet text-xs font-bold text-accent-green uppercase tracking-widest">
              Step 2 of 2
            </span>
          </div>

          <h2 className="font-cabinet text-3xl sm:text-4xl md:text-5xl font-black text-ink leading-tight uppercase">
            Pick your amount <br />
            <span className="editorial-italic font-light normal-case text-accent-green">and confirm.</span>
          </h2>

          <p className="font-satoshi text-base text-ink/70 leading-relaxed max-w-xl">
            You choose exactly how much you need and when you want to repay. Full transparency at every tick.
          </p>

          {/* Cards List */}
          <div className="space-y-3 pt-2">
            
            <div className="p-4 rounded-xl bg-white border border-ink/10 shadow-sm hover:border-accent-green/30 transition-all flex items-start space-x-3.5">
              <div className="w-8 h-8 rounded-lg bg-accent-green/10 border border-accent-green/20 flex items-center justify-center shrink-0 text-accent-green font-bold">
                <Check className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-cabinet text-base font-bold text-ink uppercase tracking-tight">Loan range</h4>
                <p className="font-satoshi text-xs sm:text-sm text-ink/60 mt-0.5 leading-relaxed">
                  ₹500 to ₹10,000. Start small — credit limits grow automatically with on-time repayments.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-ink/10 shadow-sm hover:border-accent-blue/30 transition-all flex items-start space-x-3.5">
              <div className="w-8 h-8 rounded-lg bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center shrink-0 text-accent-blue font-bold">
                <Check className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-cabinet text-base font-bold text-ink uppercase tracking-tight">Flexible Terms</h4>
                <p className="font-satoshi text-xs sm:text-sm text-ink/60 mt-0.5 leading-relaxed">
                  20-day or 30-day options. You pick based on your monthly allowance cycle.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-ink/10 shadow-sm hover:border-accent-blue/30 transition-all flex items-start space-x-3.5">
              <div className="w-8 h-8 rounded-lg bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center shrink-0 text-accent-blue font-bold">
                <Check className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-cabinet text-base font-bold text-ink uppercase tracking-tight">Full cost upfront</h4>
                <p className="font-satoshi text-xs sm:text-sm text-ink/60 mt-0.5 leading-relaxed">
                  Total repayment amount is clearly displayed before you confirm — zero surprises.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-ink/10 shadow-sm hover:border-accent-green/30 transition-all flex items-start space-x-3.5">
              <div className="w-8 h-8 rounded-lg bg-accent-green/10 border border-accent-green/20 flex items-center justify-center shrink-0 text-accent-green font-bold">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-cabinet text-base font-bold text-ink uppercase tracking-tight">Interest waivers</h4>
                <p className="font-satoshi text-xs sm:text-sm text-ink/60 mt-0.5 leading-relaxed">
                  Upload receipts/proof for textbooks or medical needs — we may waive the fee completely.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-ink/10 shadow-sm hover:border-accent-blue/30 transition-all flex items-start space-x-3.5">
              <div className="w-8 h-8 rounded-lg bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center shrink-0 text-accent-blue font-bold">
                <Zap className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-cabinet text-base font-bold text-ink uppercase tracking-tight">Instant Disbursal</h4>
                <p className="font-satoshi text-xs sm:text-sm text-ink/60 mt-0.5 leading-relaxed">
                  Direct transfer to your UPI ID, bank account, or wallet within 60 seconds.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Right Column: 3D Phone Simulator */}
        <div className="lg:col-span-5 flex justify-center">
          <ThreeDPhoneSimulator initialStep={2} />
        </div>

      </div>
    </section>
  );
};
