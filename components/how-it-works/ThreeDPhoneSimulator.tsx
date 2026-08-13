'use client';

import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { Check, Smartphone, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

interface ThreeDPhoneSimulatorProps {
  initialStep?: 1 | 2 | 3;
}

export const ThreeDPhoneSimulator: React.FC<ThreeDPhoneSimulatorProps> = ({ initialStep = 1 }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);

  // Active Screen Tab (1 = KYC, 2 = Calc, 3 = Earn)
  const [activeTab, setActiveTab] = useState<1 | 2 | 3>(initialStep);

  // Step 1 States
  const [kycComplete, setKycComplete] = useState(false);

  // Step 2 States (Loan Calculator)
  const [amount, setAmount] = useState(5000);
  const [term, setTerm] = useState<20 | 30>(30);
  const [isDisbursed, setIsDisbursed] = useState(false);
  const platformFee = 150;
  const totalRepay = amount + platformFee;

  // Step 3 States (Earn & Repay)
  const [walletBalance, setWalletBalance] = useState(2500);
  const [loanDue, setLoanDue] = useState(5000);
  const [repaymentSuccess, setRepaymentSuccess] = useState(false);

  // Mouse tilt RAF logic
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let rafId: number | null = null;
    const handleMouseMove = (e: MouseEvent) => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        rafId = null;
        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        const normX = x / (rect.width / 2);
        const normY = y / (rect.height / 2);

        const tiltX = -normY * 12;
        const tiltY = normX * 12;

        gsap.to(phoneRef.current, {
          rotateX: tiltX,
          rotateY: tiltY,
          scale: 1.02,
          duration: 0.5,
          ease: 'power2.out',
          overwrite: 'auto',
        });
      });
    };

    const handleMouseLeave = () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
      gsap.to(phoneRef.current, {
        rotateX: 8,
        rotateY: -10,
        scale: 1,
        duration: 0.8,
        ease: 'power3.out',
        overwrite: 'auto',
      });
    };

    container.addEventListener('mousemove', handleMouseMove, { passive: true });
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  const handleDisburse = () => {
    setIsDisbursed(true);
    setTimeout(() => setIsDisbursed(false), 3500);
  };

  const handleApplyWallet = () => {
    if (walletBalance > 0 && loanDue > 0) {
      setLoanDue(Math.max(0, loanDue - walletBalance));
      setWalletBalance(0);
      setRepaymentSuccess(true);
      setTimeout(() => setRepaymentSuccess(false), 3500);
    }
  };

  return (
    <div ref={containerRef} className="relative flex flex-col items-center justify-center p-2 select-none">
      
      {/* Sleek Tab Switcher Bar */}
      <div className="flex items-center space-x-1.5 p-1 mb-5 rounded-xl bg-white border border-ink/10 shadow-sm z-30">
        <button
          onClick={() => setActiveTab(1)}
          className={`px-3 py-1 rounded-lg font-cabinet text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer ${
            activeTab === 1 ? 'bg-accent-blue text-white shadow-sm' : 'text-ink/60 hover:text-ink'
          }`}
        >
          1. KYC
        </button>
        <button
          onClick={() => setActiveTab(2)}
          className={`px-3 py-1 rounded-lg font-cabinet text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer ${
            activeTab === 2 ? 'bg-accent-green text-white shadow-sm' : 'text-ink/60 hover:text-ink'
          }`}
        >
          2. Disbursal
        </button>
        <button
          onClick={() => setActiveTab(3)}
          className={`px-3 py-1 rounded-lg font-cabinet text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer ${
            activeTab === 3 ? 'bg-ink text-white shadow-sm' : 'text-ink/60 hover:text-ink'
          }`}
        >
          3. Earn &amp; Repay
        </button>
      </div>

      {/* Sleek 3D iPhone Viewport */}
      <div className="iphone-container w-[270px] h-[550px] sm:w-[290px] sm:h-[580px] relative">
        
        {/* Soft Shadow Base */}
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-48 h-8 bg-ink/15 rounded-full blur-xl pointer-events-none" />

        {/* 3D Frame */}
        <div
          ref={phoneRef}
          className="w-full h-full iphone-frame flex flex-col relative z-20 cursor-grab active:cursor-grabbing border-[8px] border-[#1a1a1e] rounded-[2.8rem] shadow-2xl overflow-hidden bg-[#0d1b2a]"
          style={{
            transform: 'rotateY(-10deg) rotateX(8deg)',
            transformStyle: 'preserve-3d',
            transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          {/* Dynamic Island */}
          <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-24 h-3.5 bg-[#050d14] rounded-full z-30" />

          {/* Screen Content View */}
          <div className="w-full h-full bg-[#0d1b2a] text-white relative p-4 pt-9 flex flex-col justify-between overflow-hidden">
            
            {/* TAB 1: KYC */}
            {activeTab === 1 && (
              <div className="w-full h-full flex flex-col justify-between animate-fade-in relative z-20">
                <div>
                  <div className="flex justify-between items-center text-[9px] text-accent-blue font-bold uppercase tracking-widest mb-2">
                    <span>CreditBuddy OS</span>
                    <span className="text-accent-green">INSTANT KYC</span>
                  </div>
                  <h3 className="font-cabinet text-xl font-bold text-white tracking-tight">
                    Student Verification
                  </h3>
                  <p className="font-satoshi text-[10px] text-white/60 mt-0.5">
                    3 simple steps for instant approval.
                  </p>
                </div>

                {/* Steps */}
                <div className="space-y-2.5 my-auto">
                  <div className="p-2.5 rounded-xl bg-emerald-950/40 border border-emerald-500/30 flex items-center justify-between">
                    <div className="flex items-center space-x-2.5">
                      <div className="w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-[10px]">
                        ✔
                      </div>
                      <div>
                        <span className="block text-[11px] font-bold text-white">Phone Verified</span>
                        <span className="block text-[8px] text-emerald-400">+91 98765 ***** (15s)</span>
                      </div>
                    </div>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  </div>

                  <div className="p-2.5 rounded-xl bg-emerald-950/40 border border-emerald-500/30 flex items-center justify-between">
                    <div className="flex items-center space-x-2.5">
                      <div className="w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-[10px]">
                        ✔
                      </div>
                      <div>
                        <span className="block text-[11px] font-bold text-white">Student ID Verified</span>
                        <span className="block text-[8px] text-emerald-400">IIT Delhi &middot; B.Tech &apos;26</span>
                      </div>
                    </div>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  </div>

                  <button
                    onClick={() => setKycComplete(!kycComplete)}
                    className={`w-full p-2.5 rounded-xl border text-left transition-all flex items-center justify-between cursor-pointer ${
                      kycComplete
                        ? 'bg-emerald-950/40 border-emerald-500/40'
                        : 'bg-accent-blue/20 border-accent-blue/40 hover:bg-accent-blue/30'
                    }`}
                  >
                    <div className="flex items-center space-x-2.5">
                      <div className={`w-6 h-6 rounded-lg flex items-center justify-center font-bold text-[10px] ${
                        kycComplete ? 'bg-emerald-500/20 text-emerald-400' : 'bg-accent-blue text-white animate-pulse'
                      }`}>
                        {kycComplete ? '✔' : '3'}
                      </div>
                      <div>
                        <span className="block text-[11px] font-bold text-white">Selfie KYC Approval</span>
                        <span className="block text-[8px] text-white/60">
                          {kycComplete ? 'Aadhaar + PAN Approved' : 'Tap to simulate selfie check'}
                        </span>
                      </div>
                    </div>
                    {kycComplete ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Sparkles className="w-3.5 h-3.5 text-accent-blue" />
                    )}
                  </button>
                </div>

                <button
                  onClick={() => {
                    setKycComplete(true);
                    setActiveTab(2);
                  }}
                  className="w-full py-2.5 rounded-xl bg-accent-blue hover:bg-blue-600 text-white font-cabinet font-bold uppercase tracking-widest text-[9px] flex items-center justify-center space-x-1.5 shadow-md cursor-pointer"
                >
                  <span>Select Loan Amount</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            )}

            {/* TAB 2: CALCULATOR */}
            {activeTab === 2 && (
              <div className="w-full h-full flex flex-col justify-between animate-fade-in relative z-20">
                <div>
                  <div className="flex justify-between items-center text-[9px] text-accent-green font-bold uppercase tracking-widest mb-1.5">
                    <span>LOAN CALCULATOR</span>
                    <span>₹150 FLAT FEE</span>
                  </div>
                  
                  <div className="text-center bg-white/5 border border-white/10 rounded-xl p-2.5">
                    <span className="text-[8px] font-bold text-white/50 uppercase tracking-widest block">Selected Loan</span>
                    <h4 className="font-cabinet text-2xl font-black text-white mt-0.5">
                      ₹{amount.toLocaleString('en-IN')}
                    </h4>
                  </div>
                </div>

                <div className="space-y-3 my-auto">
                  <div>
                    <div className="flex justify-between text-[9px] font-bold text-white/60 mb-1">
                      <span>₹500</span>
                      <span>₹10,000</span>
                    </div>
                    <input
                      type="range"
                      min="500"
                      max="10000"
                      step="500"
                      value={amount}
                      onChange={(e) => setAmount(Number(e.target.value))}
                      className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-accent-green"
                    />
                  </div>

                  <div>
                    <span className="block text-[8px] font-bold text-white/50 uppercase tracking-widest mb-1">Duration</span>
                    <div className="grid grid-cols-2 gap-1.5">
                      <button
                        onClick={() => setTerm(20)}
                        className={`py-1 rounded-lg text-[9px] font-bold transition-all cursor-pointer ${
                          term === 20 ? 'bg-accent-blue text-white' : 'bg-white/5 text-white/40 border border-white/10'
                        }`}
                      >
                        20 Days
                      </button>
                      <button
                        onClick={() => setTerm(30)}
                        className={`py-1 rounded-lg text-[9px] font-bold transition-all cursor-pointer ${
                          term === 30 ? 'bg-accent-blue text-white' : 'bg-white/5 text-white/40 border border-white/10'
                        }`}
                      >
                        30 Days
                      </button>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-[9px] space-y-1">
                    <div className="flex justify-between text-white/60">
                      <span>Term</span>
                      <span className="font-bold text-white">{term} Days</span>
                    </div>
                    <div className="flex justify-between text-white/60">
                      <span>Platform Fee</span>
                      <span className="font-bold text-accent-green">₹{platformFee}</span>
                    </div>
                    <div className="h-px bg-white/10 my-0.5" />
                    <div className="flex justify-between font-cabinet text-xs font-black text-white">
                      <span>Total Repayable</span>
                      <span className="text-accent-green">₹{totalRepay.toLocaleString('en-IN')}</span>
                    </div>
                  </div>
                </div>

                {isDisbursed ? (
                  <div className="w-full py-2.5 rounded-xl bg-accent-green text-white font-cabinet font-bold uppercase text-[9px] flex items-center justify-center space-x-1.5 animate-bounce">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Disbursed to UPI!</span>
                  </div>
                ) : (
                  <button
                    onClick={handleDisburse}
                    className="w-full py-2.5 rounded-xl bg-accent-green hover:bg-emerald-600 text-white font-cabinet font-bold uppercase tracking-widest text-[9px] flex items-center justify-center space-x-1.5 transition-all shadow-md cursor-pointer"
                  >
                    <span>Confirm &amp; Disburse</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                )}
              </div>
            )}

            {/* TAB 3: EARN & REPAY */}
            {activeTab === 3 && (
              <div className="w-full h-full flex flex-col justify-between animate-fade-in relative z-20">
                <div>
                  <div className="flex justify-between items-center text-[9px] text-accent-blue font-bold uppercase tracking-widest mb-1.5">
                    <span>BUDDY WALLET</span>
                    <span className="text-accent-green">EARN TO REPAY</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 bg-white/5 border border-white/10 rounded-xl p-2">
                    <div className="p-1.5 rounded-lg bg-white/5">
                      <span className="text-[7px] font-bold text-white/40 uppercase tracking-widest block">Wallet</span>
                      <span className="font-cabinet text-sm font-black text-accent-green">₹{walletBalance}</span>
                    </div>
                    <div className="p-1.5 rounded-lg bg-white/5">
                      <span className="text-[7px] font-bold text-white/40 uppercase tracking-widest block">Loan Due</span>
                      <span className="font-cabinet text-sm font-black text-white">₹{loanDue}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 my-auto">
                  <span className="text-[8px] font-bold text-white/40 uppercase tracking-widest block">Campus Gigs</span>
                  
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs">
                    <div>
                      <span className="block font-bold text-white text-[10px]">App Testing</span>
                      <span className="block text-[8px] text-white/50">15 min gig</span>
                    </div>
                    <span className="font-cabinet font-bold text-accent-green text-xs">+₹300</span>
                  </div>

                  <div className="p-2 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs">
                    <div>
                      <span className="block font-bold text-white text-[10px]">Ambassador</span>
                      <span className="block text-[8px] text-white/50">Weekly reward</span>
                    </div>
                    <span className="font-cabinet font-bold text-accent-green text-xs">+₹2,200</span>
                  </div>
                </div>

                {repaymentSuccess ? (
                  <div className="w-full py-2.5 rounded-xl bg-accent-green text-white font-cabinet font-bold uppercase text-[9px] flex items-center justify-center space-x-1.5 animate-pulse">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Applied ₹2,500 to Loan!</span>
                  </div>
                ) : (
                  <button
                    onClick={handleApplyWallet}
                    disabled={walletBalance === 0}
                    className={`w-full py-2.5 rounded-xl font-cabinet font-bold uppercase tracking-widest text-[9px] flex items-center justify-center space-x-1.5 transition-all cursor-pointer ${
                      walletBalance > 0
                        ? 'bg-accent-blue hover:bg-blue-600 text-white shadow-md'
                        : 'bg-white/10 text-white/40 cursor-not-allowed'
                    }`}
                  >
                    <span>1-Tap Apply to Loan</span>
                    <Sparkles className="w-3 h-3" />
                  </button>
                )}
              </div>
            )}

          </div>
        </div>

      </div>

    </div>
  );
};
