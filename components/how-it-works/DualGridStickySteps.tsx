'use client';

import React, { useState } from 'react';
import { Check, Phone, ShieldCheck, Smartphone, UserCheck, Zap, Sparkles, ArrowRight } from 'lucide-react';
import { ThreeDPhoneSimulator } from './ThreeDPhoneSimulator';

export const DualGridStickySteps = () => {
  const [activeStep, setActiveStep] = useState<1 | 2>(1);

  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 md:px-12 bg-bg-primary border-b border-ink/10 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="font-cabinet text-xs font-bold uppercase tracking-widest text-accent-blue border border-accent-blue/30 bg-accent-blue/10 rounded-full px-4 py-1 inline-block">
            Dual Grid Interactive Flow
          </span>
          <h2 className="font-cabinet text-3xl sm:text-4xl md:text-5xl font-black text-ink uppercase tracking-tight leading-tight">
            2 Simple Steps to Disbursal. <br />
            <span className="editorial-italic font-light normal-case text-accent-blue">Zero Paperwork.</span>
          </h2>
          <p className="font-satoshi text-base text-ink/70 leading-relaxed">
            Test the live 3D phone simulator on the left as you scroll through the onboarding checklist.
          </p>
        </div>

        {/* Dual Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Sticky 3D Phone Simulator */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 flex flex-col items-center justify-center">
            <div className="p-4 rounded-3xl bg-white border border-ink/10 shadow-lg w-full flex flex-col items-center">
              <span className="font-cabinet text-xs font-bold text-ink uppercase tracking-widest mb-2">
                Live 3D App Preview &bull; Step {activeStep}
              </span>
              <ThreeDPhoneSimulator initialStep={activeStep} />
            </div>
          </div>

          {/* Right Column: Scrollable Step Cards */}
          <div className="lg:col-span-7 space-y-16">
            
            {/* --- STEP 1: ONBOARDING --- */}
            <div 
              onMouseEnter={() => setActiveStep(1)}
              className="space-y-6 p-8 rounded-3xl bg-white border border-ink/10 shadow-md relative overflow-hidden group hover:border-accent-blue/40 transition-all"
            >
              <div className="inline-flex items-center space-x-2 border border-accent-blue/30 bg-accent-blue/10 rounded-full px-4 py-1">
                <span className="w-2 h-2 rounded-full bg-accent-blue animate-pulse" />
                <span className="font-cabinet text-xs font-bold text-accent-blue uppercase tracking-widest">
                  Step 1 &bull; Account Creation
                </span>
              </div>

              <h3 className="font-cabinet text-3xl sm:text-4xl font-black text-ink uppercase tracking-tight">
                Create your account. <br />
                <span className="editorial-italic font-light normal-case text-accent-blue">2 minutes max.</span>
              </h3>

              <p className="font-satoshi text-sm sm:text-base text-ink/70 leading-relaxed">
                No physical visits or printed documents. Upload your student credentials and verify Aadhaar + PAN in 120 seconds.
              </p>

              {/* Bullet Points */}
              <div className="space-y-3.5 pt-2">
                
                <div className="p-4 rounded-2xl bg-bg-primary border border-ink/10 flex items-start space-x-3.5">
                  <div className="w-8 h-8 rounded-lg bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center shrink-0 text-accent-blue font-bold">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-cabinet text-base font-bold text-ink uppercase tracking-tight">What you need</h4>
                    <p className="font-satoshi text-xs text-ink/60 mt-0.5">
                      Phone number &middot; Student ID or college email &middot; Aadhaar card &middot; PAN card
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-bg-primary border border-ink/10 flex items-start space-x-3.5">
                  <div className="w-8 h-8 rounded-lg bg-accent-green/10 border border-accent-green/20 flex items-center justify-center shrink-0 text-accent-green font-bold">
                    <Smartphone className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-cabinet text-base font-bold text-ink uppercase tracking-tight">Download Free App</h4>
                    <p className="font-satoshi text-xs text-ink/60 mt-0.5">
                      Android app live on Play Store. <span className="text-ink/40">(iOS Q3 2026)</span>
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-bg-primary border border-ink/10 flex items-start space-x-3.5">
                  <div className="w-8 h-8 rounded-lg bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center shrink-0 text-accent-blue font-bold">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-cabinet text-base font-bold text-ink uppercase tracking-tight">Phone OTP Verification</h4>
                    <p className="font-satoshi text-xs text-ink/60 mt-0.5">
                      Enter mobile &rarr; instant OTP &rarr; completed in 15 seconds.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-bg-primary border border-ink/10 flex items-start space-x-3.5">
                  <div className="w-8 h-8 rounded-lg bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center shrink-0 text-accent-blue font-bold">
                    <UserCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-cabinet text-base font-bold text-ink uppercase tracking-tight">Student ID Check</h4>
                    <p className="font-satoshi text-xs text-ink/60 mt-0.5">
                      Upload physical student ID card OR verify via college email address.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-bg-primary border border-ink/10 flex items-start space-x-3.5">
                  <div className="w-8 h-8 rounded-lg bg-accent-green/10 border border-accent-green/20 flex items-center justify-center shrink-0 text-accent-green font-bold">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-cabinet text-base font-bold text-ink uppercase tracking-tight">Instant KYC Approval</h4>
                    <p className="font-satoshi text-xs text-ink/60 mt-0.5">
                      Aadhaar + PAN + quick selfie. Approved under 2 minutes automatically.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* --- STEP 2: LOAN DISBURSAL --- */}
            <div 
              onMouseEnter={() => setActiveStep(2)}
              className="space-y-6 p-8 rounded-3xl bg-white border border-ink/10 shadow-md relative overflow-hidden group hover:border-accent-green/40 transition-all"
            >
              <div className="inline-flex items-center space-x-2 border border-accent-green/30 bg-accent-green/10 rounded-full px-4 py-1">
                <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
                <span className="font-cabinet text-xs font-bold text-accent-green uppercase tracking-widest">
                  Step 2 &bull; Amount Picker &amp; Disbursal
                </span>
              </div>

              <h3 className="font-cabinet text-3xl sm:text-4xl font-black text-ink uppercase tracking-tight">
                Pick your amount <br />
                <span className="editorial-italic font-light normal-case text-accent-green">and confirm disbursal.</span>
              </h3>

              <p className="font-satoshi text-sm sm:text-base text-ink/70 leading-relaxed">
                Select your required credit amount (₹500 - ₹10,000) and pick your preferred 20 or 30 day repayment cycle.
              </p>

              {/* Bullet Points */}
              <div className="space-y-3.5 pt-2">
                
                <div className="p-4 rounded-2xl bg-bg-primary border border-ink/10 flex items-start space-x-3.5">
                  <div className="w-8 h-8 rounded-lg bg-accent-green/10 border border-accent-green/20 flex items-center justify-center shrink-0 text-accent-green font-bold">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-cabinet text-base font-bold text-ink uppercase tracking-tight">Loan Limit Growth</h4>
                    <p className="font-satoshi text-xs text-ink/60 mt-0.5">
                      ₹500 to ₹10,000. Limits grow automatically up to ₹50,000 on prompt repayments.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-bg-primary border border-ink/10 flex items-start space-x-3.5">
                  <div className="w-8 h-8 rounded-lg bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center shrink-0 text-accent-blue font-bold">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-cabinet text-base font-bold text-ink uppercase tracking-tight">Flexible Terms</h4>
                    <p className="font-satoshi text-xs text-ink/60 mt-0.5">
                      20-day or 30-day options matched to your monthly allowance schedule.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-bg-primary border border-ink/10 flex items-start space-x-3.5">
                  <div className="w-8 h-8 rounded-lg bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center shrink-0 text-accent-blue font-bold">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-cabinet text-base font-bold text-ink uppercase tracking-tight">Full Pricing Upfront</h4>
                    <p className="font-satoshi text-xs text-ink/60 mt-0.5">
                      Flat ₹150 platform fee for 30 days. No hidden charges or compounding interest.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-bg-primary border border-ink/10 flex items-start space-x-3.5">
                  <div className="w-8 h-8 rounded-lg bg-accent-green/10 border border-accent-green/20 flex items-center justify-center shrink-0 text-accent-green font-bold">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-cabinet text-base font-bold text-ink uppercase tracking-tight">0% Interest Waivers</h4>
                    <p className="font-satoshi text-xs text-ink/60 mt-0.5">
                      Upload proof for textbooks or emergency medical fees for full interest waivers.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-bg-primary border border-ink/10 flex items-start space-x-3.5">
                  <div className="w-8 h-8 rounded-lg bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center shrink-0 text-accent-blue font-bold">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-cabinet text-base font-bold text-ink uppercase tracking-tight">60s Disbursal to UPI</h4>
                    <p className="font-satoshi text-xs text-ink/60 mt-0.5">
                      Direct instant transfer to Google Pay, PhonePe, Paytm, or your bank account.
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
