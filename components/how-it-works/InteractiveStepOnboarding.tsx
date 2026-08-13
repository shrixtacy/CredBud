'use client';

import React from 'react';
import { Check, Phone, ShieldCheck, Smartphone, UserCheck } from 'lucide-react';
import { ThreeDPhoneSimulator } from './ThreeDPhoneSimulator';

export const InteractiveStepOnboarding = () => {
  return (
    <section className="py-16 md:py-24 px-6 md:px-12 bg-bg-primary relative border-t border-ink/10 overflow-hidden">
      {/* Soft Glow */}
      <div className="absolute top-1/2 -left-48 w-80 h-80 bg-accent-blue/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        {/* Left Column: STEP 1 Explanations & Cream Cards */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center space-x-2 border border-accent-blue/30 bg-accent-blue/10 rounded-full px-4 py-1">
            <span className="w-2 h-2 rounded-full bg-accent-blue animate-pulse" />
            <span className="font-cabinet text-xs font-bold text-accent-blue uppercase tracking-widest">
              Step 1 of 2
            </span>
          </div>

          <h2 className="font-cabinet text-3xl sm:text-4xl md:text-5xl font-black text-ink leading-tight uppercase">
            Create your account. <br />
            <span className="editorial-italic font-light normal-case text-accent-blue">2 minutes.</span>
          </h2>

          <p className="font-satoshi text-base text-ink/70 leading-relaxed max-w-xl">
            Zero paperwork, zero physical visits. Everything is verified instantly right from your smartphone.
          </p>

          {/* Cards List */}
          <div className="space-y-3 pt-2">
            
            <div className="p-4 rounded-xl bg-white border border-ink/10 shadow-sm hover:border-accent-blue/30 transition-all flex items-start space-x-3.5">
              <div className="w-8 h-8 rounded-lg bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center shrink-0 text-accent-blue font-bold">
                <Check className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-cabinet text-base font-bold text-ink uppercase tracking-tight">What you need</h4>
                <p className="font-satoshi text-xs sm:text-sm text-ink/60 mt-0.5 leading-relaxed">
                  Phone number &middot; Student ID or college email &middot; Aadhaar card &middot; PAN card
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-ink/10 shadow-sm hover:border-accent-green/30 transition-all flex items-start space-x-3.5">
              <div className="w-8 h-8 rounded-lg bg-accent-green/10 border border-accent-green/20 flex items-center justify-center shrink-0 text-accent-green font-bold">
                <Smartphone className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-cabinet text-base font-bold text-ink uppercase tracking-tight">Download App</h4>
                <p className="font-satoshi text-xs sm:text-sm text-ink/60 mt-0.5 leading-relaxed">
                  Android app — download free. <span className="text-ink/40">(iOS coming Q3 2026)</span>
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-ink/10 shadow-sm hover:border-accent-blue/30 transition-all flex items-start space-x-3.5">
              <div className="w-8 h-8 rounded-lg bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center shrink-0 text-accent-blue font-bold">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-cabinet text-base font-bold text-ink uppercase tracking-tight">Phone OTP Verification</h4>
                <p className="font-satoshi text-xs sm:text-sm text-ink/60 mt-0.5 leading-relaxed">
                  Enter mobile &rarr; instant OTP &rarr; done in 15 seconds.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-ink/10 shadow-sm hover:border-accent-blue/30 transition-all flex items-start space-x-3.5">
              <div className="w-8 h-8 rounded-lg bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center shrink-0 text-accent-blue font-bold">
                <UserCheck className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-cabinet text-base font-bold text-ink uppercase tracking-tight">Student ID Verification</h4>
                <p className="font-satoshi text-xs sm:text-sm text-ink/60 mt-0.5 leading-relaxed">
                  Upload student ID OR verify with official college email (.edu / .ac.in).
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-ink/10 shadow-sm hover:border-accent-green/30 transition-all flex items-start space-x-3.5">
              <div className="w-8 h-8 rounded-lg bg-accent-green/10 border border-accent-green/20 flex items-center justify-center shrink-0 text-accent-green font-bold">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-cabinet text-base font-bold text-ink uppercase tracking-tight">Instant KYC</h4>
                <p className="font-satoshi text-xs sm:text-sm text-ink/60 mt-0.5 leading-relaxed">
                  Aadhaar + PAN + selfie. Under 2 minutes. Instant approval.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Right Column: 3D Phone Model */}
        <div className="lg:col-span-5 flex justify-center">
          <ThreeDPhoneSimulator initialStep={1} />
        </div>

      </div>
    </section>
  );
};
