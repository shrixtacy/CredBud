'use client';

import React, { useState } from 'react';
import { ShieldCheck, Zap, Calendar, Briefcase, CheckCircle2, ArrowUpRight, Smartphone, Sparkles, RefreshCw } from 'lucide-react';

export const HowItWorksNarrativeJourney = () => {
  // Step 2 interactive state
  const [selectedAmount, setSelectedAmount] = useState(10000);
  
  // Step 4 interactive state
  const [completedGigCount, setCompletedGigCount] = useState(2);

  const gigReward = 600;
  const totalEarned = completedGigCount * gigReward;
  const remainingRepayment = Math.max(0, 5000 - totalEarned);

  return (
    <section id="narrative-journey" className="relative w-full bg-[#EFECE6] text-[#0D1B2A] py-24 px-6 md:px-12 border-b border-[#0D1B2A]/10">
      
      {/* Header Badge */}
      <div className="max-w-7xl mx-auto mb-16 border-b border-[#0D1B2A]/10 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#2563EB] bg-[#2563EB]/10 border border-[#2563EB]/20 px-3 py-1 rounded-full inline-block mb-3">
            02.1 // NARRATIVE FLOW
          </span>
          <h2 className="font-cabinet text-4xl md:text-6xl font-bold text-[#0D1B2A] tracking-tight">
            How CreditBuddy Works in <span className="editorial-italic text-[#2563EB] font-light normal-case">4 simple steps.</span>
          </h2>
        </div>
        <p className="font-satoshi text-base text-[#0D1B2A]/70 max-w-md">
          Designed for Indian college students. No credit history required, zero paperwork, 100% digital verification.
        </p>
      </div>

      {/* Main Grid: Sticky Left Counter & Right Step Story Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative">
        
        {/* Left Column (4 cols): Sticky Step Counter & Timeline Nav */}
        <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-8 bg-white border border-[#0D1B2A]/10 p-6 md:p-8 rounded-3xl shadow-md">
          <div className="space-y-2">
            <span className="font-mono text-xs text-[#0D1B2A]/50 uppercase tracking-widest block">STEP PROGRESSION</span>
            <div className="flex items-baseline space-x-2">
              <span className="font-cabinet text-5xl md:text-6xl font-bold text-[#2563EB]">01–04</span>
              <span className="font-mono text-sm text-[#0D1B2A]/60">/ COMPLETE FLOW</span>
            </div>
          </div>

          <div className="space-y-4 pt-4 border-t border-[#0D1B2A]/10 font-mono text-xs">
            <a href="#step-1" className="flex items-center space-x-3 text-[#0D1B2A]/80 hover:text-[#2563EB] transition-colors p-2 rounded-lg hover:bg-[#FAF7F2]">
              <span className="w-6 h-6 rounded bg-[#2563EB]/15 text-[#2563EB] flex items-center justify-center font-bold">01</span>
              <span>DIGITAL KYC & VERIFICATION</span>
            </a>
            <a href="#step-2" className="flex items-center space-x-3 text-[#0D1B2A]/80 hover:text-[#2563EB] transition-colors p-2 rounded-lg hover:bg-[#FAF7F2]">
              <span className="w-6 h-6 rounded bg-[#2563EB]/15 text-[#2563EB] flex items-center justify-center font-bold">02</span>
              <span>INSTANT WALLET DISBURSAL</span>
            </a>
            <a href="#step-3" className="flex items-center space-x-3 text-[#0D1B2A]/80 hover:text-[#2563EB] transition-colors p-2 rounded-lg hover:bg-[#FAF7F2]">
              <span className="w-6 h-6 rounded bg-[#2563EB]/15 text-[#2563EB] flex items-center justify-center font-bold">03</span>
              <span>ZERO INTEREST 30-DAY WINDOW</span>
            </a>
            <a href="#step-4" className="flex items-center space-x-3 text-[#0D1B2A]/80 hover:text-[#2563EB] transition-colors p-2 rounded-lg hover:bg-[#FAF7F2]">
              <span className="w-6 h-6 rounded bg-[#2563EB]/15 text-[#2563EB] flex items-center justify-center font-bold">04</span>
              <span>EARN & AUTO-REPAY GIGS</span>
            </a>
          </div>

          <div className="pt-4 border-t border-[#0D1B2A]/10 text-xs font-mono text-[#10B981] flex items-center space-x-2">
            <ShieldCheck className="w-4 h-4" />
            <span>256-BIT ENCRYPTED & RBI REGULATED</span>
          </div>
        </div>

        {/* Right Column (8 cols): Deep Story Cards */}
        <div className="lg:col-span-8 space-y-16">
          
          {/* STEP 1 */}
          <div id="step-1" className="scroll-mt-28 bg-white border border-[#0D1B2A]/10 rounded-3xl p-8 md:p-10 relative overflow-hidden space-y-8 shadow-md hover:border-[#2563EB]/40 transition-colors">
            
            <div className="flex justify-between items-start">
              <div className="space-y-2">
                <span className="font-mono text-xs font-bold text-[#2563EB] uppercase tracking-widest">
                  STEP 01 // ONBOARDING
                </span>
                <h3 className="font-cabinet text-3xl md:text-4xl font-bold text-[#0D1B2A]">
                  60-Second <span className="editorial-italic text-[#2563EB] font-light">Digital Verification</span>
                </h3>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-[#2563EB]/15 text-[#2563EB] flex items-center justify-center font-mono font-bold text-lg">
                01
              </div>
            </div>

            <p className="font-satoshi text-base text-[#0D1B2A]/70 leading-relaxed max-w-2xl">
              Simply upload your student ID and connect DigiLocker. Our instant AI engine verifies your college enrollment and activates your credit line in 60 seconds without collateral or salary slips.
            </p>

            {/* Mock Verification Card */}
            <div className="rounded-2xl bg-[#FAF7F2] border border-[#0D1B2A]/10 p-6 space-y-4 relative">
              <div className="flex items-center justify-between border-b border-[#0D1B2A]/10 pb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-[#2563EB]/20 text-[#2563EB] font-bold flex items-center justify-center border border-[#2563EB]/30">
                    ID
                  </div>
                  <div>
                    <h4 className="font-cabinet text-sm font-bold text-[#0D1B2A]">IIT Bombay / Student Verification</h4>
                    <span className="font-mono text-[10px] text-[#0D1B2A]/50">REG NO: 2024-CS-0841</span>
                  </div>
                </div>
                <div className="px-3 py-1 rounded-full bg-[#10B981]/15 border border-[#10B981]/30 text-[#10B981] font-mono text-xs font-bold flex items-center space-x-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>VERIFIED</span>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-xs font-mono">
                <div className="p-3 rounded-xl bg-white border border-[#0D1B2A]/10">
                  <span className="text-[#0D1B2A]/50 block">Credit Limit</span>
                  <span className="text-[#0D1B2A] font-bold text-sm mt-0.5 block">₹15,000</span>
                </div>
                <div className="p-3 rounded-xl bg-white border border-[#0D1B2A]/10">
                  <span className="text-[#0D1B2A]/50 block">KYC Status</span>
                  <span className="text-[#10B981] font-bold text-sm mt-0.5 block">Instant Approved</span>
                </div>
                <div className="p-3 rounded-xl bg-white border border-[#0D1B2A]/10 col-span-2 md:col-span-1">
                  <span className="text-[#0D1B2A]/50 block">Processing Time</span>
                  <span className="text-[#2563EB] font-bold text-sm mt-0.5 block">48 Seconds</span>
                </div>
              </div>
            </div>

          </div>

          {/* STEP 2 */}
          <div id="step-2" className="scroll-mt-28 bg-white border border-[#0D1B2A]/10 rounded-3xl p-8 md:p-10 relative overflow-hidden space-y-8 shadow-md hover:border-[#2563EB]/40 transition-colors">
            
            <div className="flex justify-between items-start">
              <div className="space-y-2">
                <span className="font-mono text-xs font-bold text-[#2563EB] uppercase tracking-widest">
                  STEP 02 // DISBURSAL
                </span>
                <h3 className="font-cabinet text-3xl md:text-4xl font-bold text-[#0D1B2A]">
                  Instant Cash to Any <span className="editorial-italic text-[#2563EB] font-light">UPI or Wallet</span>
                </h3>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-[#2563EB]/15 text-[#2563EB] flex items-center justify-center font-mono font-bold text-lg">
                02
              </div>
            </div>

            <p className="font-satoshi text-base text-[#0D1B2A]/70 leading-relaxed max-w-2xl">
              Choose the exact amount you need. Funds are sent straight to your Google Pay, PhonePe, Paytm, or bank account via instant UPI transfer.
            </p>

            {/* Interactive Loan Amount Simulator */}
            <div className="rounded-2xl bg-[#FAF7F2] border border-[#0D1B2A]/10 p-6 space-y-6">
              
              <div className="flex justify-between items-center">
                <span className="font-mono text-xs text-[#0D1B2A]/60 uppercase">Select Credit Amount:</span>
                <span className="font-cabinet text-2xl md:text-3xl font-black text-[#2563EB]">
                  ₹{selectedAmount.toLocaleString('en-IN')}
                </span>
              </div>

              {/* Slider */}
              <input 
                type="range" 
                min="1000" 
                max="20000" 
                step="1000"
                value={selectedAmount}
                onChange={(e) => setSelectedAmount(Number(e.target.value))}
                className="w-full h-2 bg-[#0D1B2A]/10 rounded-lg appearance-none cursor-pointer accent-[#2563EB]"
              />

              {/* Terms summary */}
              <div className="grid grid-cols-3 gap-3 text-xs font-mono pt-2 border-t border-[#0D1B2A]/10">
                <div>
                  <span className="text-[#0D1B2A]/50 block">Disbursal Fee</span>
                  <span className="text-[#10B981] font-bold">₹0 Free</span>
                </div>
                <div>
                  <span className="text-[#0D1B2A]/50 block">First 30 Days</span>
                  <span className="text-[#10B981] font-bold">0% Interest</span>
                </div>
                <div>
                  <span className="text-[#0D1B2A]/50 block">Speed</span>
                  <span className="text-[#2563EB] font-bold">Instant UPI</span>
                </div>
              </div>

            </div>

          </div>

          {/* STEP 3 */}
          <div id="step-3" className="scroll-mt-28 bg-white border border-[#0D1B2A]/10 rounded-3xl p-8 md:p-10 relative overflow-hidden space-y-8 shadow-md hover:border-[#2563EB]/40 transition-colors">
            
            <div className="flex justify-between items-start">
              <div className="space-y-2">
                <span className="font-mono text-xs font-bold text-[#2563EB] uppercase tracking-widest">
                  STEP 03 // ZERO INTEREST WINDOW
                </span>
                <h3 className="font-cabinet text-3xl md:text-4xl font-bold text-[#0D1B2A]">
                  30 Days <span className="editorial-italic text-[#2563EB] font-light">Interest-Free</span> Grace Period
                </h3>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-[#2563EB]/15 text-[#2563EB] flex items-center justify-center font-mono font-bold text-lg">
                03
              </div>
            </div>

            <p className="font-satoshi text-base text-[#0D1B2A]/70 leading-relaxed max-w-2xl">
              Pay zero interest for the first 30 days. No compound penalties or predatory charges. You payback only what you borrowed.
            </p>

            {/* Timeline graphic widget */}
            <div className="rounded-2xl bg-[#FAF7F2] border border-[#0D1B2A]/10 p-6 space-y-4">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-[#0D1B2A]/60">DAY 01 (Disbursal)</span>
                <span className="text-[#10B981] font-bold">DAY 30 (0% Interest End)</span>
              </div>
              
              <div className="w-full h-3 bg-[#0D1B2A]/10 rounded-full overflow-hidden relative">
                <div className="h-full bg-gradient-to-r from-[#2563EB] to-[#10B981] w-3/4 rounded-full" />
              </div>

              <div className="flex justify-between items-center text-xs font-mono pt-2">
                <span className="text-[#0D1B2A]/50">Borrowed: ₹{selectedAmount.toLocaleString('en-IN')}</span>
                <span className="text-[#0D1B2A] font-bold">Repay Amount: ₹{selectedAmount.toLocaleString('en-IN')}</span>
              </div>
            </div>

          </div>

          {/* STEP 4 */}
          <div id="step-4" className="scroll-mt-28 bg-white border border-[#0D1B2A]/10 rounded-3xl p-8 md:p-10 relative overflow-hidden space-y-8 shadow-md hover:border-[#2563EB]/40 transition-colors">
            
            <div className="flex justify-between items-start">
              <div className="space-y-2">
                <span className="font-mono text-xs font-bold text-[#2563EB] uppercase tracking-widest">
                  STEP 04 // EARN TO REPAY
                </span>
                <h3 className="font-cabinet text-3xl md:text-4xl font-bold text-[#0D1B2A]">
                  Pay Back via <span className="editorial-italic text-[#10B981] font-light">Campus Gigs</span> or Wallet
                </h3>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-[#2563EB]/15 text-[#2563EB] flex items-center justify-center font-mono font-bold text-lg">
                04
              </div>
            </div>

            <p className="font-satoshi text-base text-[#0D1B2A]/70 leading-relaxed max-w-2xl">
              Don&apos;t have cash from parents? No worries. Complete micro-gigs (event banners, notes sharing, campus brand ambassadorship) directly inside CreditBuddy and automatically knock down your repayment balance!
            </p>

            {/* Interactive Micro Gig Repayment Calculator */}
            <div className="rounded-2xl bg-[#FAF7F2] border border-[#0D1B2A]/10 p-6 space-y-6">
              
              <div className="flex justify-between items-center border-b border-[#0D1B2A]/10 pb-4">
                <div>
                  <span className="font-mono text-xs text-[#0D1B2A]/60 block uppercase">Sample Loan Balance</span>
                  <span className="font-cabinet text-2xl font-black text-[#0D1B2A]">₹5,000</span>
                </div>
                <div className="text-right">
                  <span className="font-mono text-xs text-[#10B981] block uppercase font-bold">Gigs Completed: {completedGigCount}</span>
                  <span className="font-cabinet text-2xl font-black text-[#10B981]">-₹{totalEarned}</span>
                </div>
              </div>

              {/* Action Simulator */}
              <div className="flex items-center justify-between space-x-4">
                <div className="space-y-1">
                  <span className="text-xs font-mono text-[#0D1B2A]/60 block">Remaining Repayment:</span>
                  <span className="text-lg font-cabinet font-black text-[#2563EB]">₹{remainingRepayment}</span>
                </div>

                <button 
                  onClick={() => setCompletedGigCount((prev) => (prev >= 8 ? 0 : prev + 1))}
                  className="px-4 py-2.5 rounded-xl bg-[#10B981] hover:bg-[#059669] text-white font-cabinet font-bold text-xs uppercase tracking-wider transition-colors flex items-center space-x-2 cursor-pointer shadow-lg shadow-[#10B981]/20"
                >
                  <Briefcase className="w-4 h-4" />
                  <span>Simulate 1 Gig (+₹600)</span>
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};
