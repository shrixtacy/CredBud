'use client';

import React from 'react';
import { Quote, Shield, Award, CheckCircle2, Lock, Landmark } from 'lucide-react';

export const HowItWorksTrustQuote = () => {
  return (
    <section className="relative w-full bg-[#2563EB] text-white py-24 px-6 md:px-12 overflow-hidden border-b border-[#0D1B2A]/10">
      
      {/* Background Subtle Geometry */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-16 relative z-10">
        
        {/* Top Swiss Metadata Line */}
        <div className="flex justify-between items-center border-b border-white/20 pb-4 font-mono text-xs text-white/80 uppercase tracking-widest font-bold">
          <span>02.4 // VERIFIED STUDENT VOICE</span>
          <span className="hidden md:inline">CAMPUS IMPACT REPORT</span>
        </div>

        {/* Full-width Statement Quote */}
        <div className="space-y-8">
          <Quote className="w-16 h-16 text-white/40 rotate-180" />
          
          <h2 className="font-cabinet text-3xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white max-w-4xl">
            &ldquo;CreditBuddy got me ₹5,000 for my exam registration fees within 60 seconds when my stipend was delayed. <span className="editorial-italic font-light text-white/90">0% interest and super clean UI.</span>&rdquo;
          </h2>

          <div className="flex items-center space-x-4 pt-4">
            <div className="w-12 h-12 rounded-full bg-white text-[#2563EB] font-cabinet font-bold flex items-center justify-center text-lg shadow-lg">
              RS
            </div>
            <div>
              <h4 className="font-cabinet text-lg font-bold text-white">Rohit Sharma</h4>
              <p className="font-mono text-xs text-white/80">IIT Delhi / Final Year B.Tech</p>
            </div>
          </div>
        </div>

        {/* Institutional Trust & Compliance Bar */}
        <div className="pt-12 border-t border-white/20">
          <span className="font-mono text-xs uppercase tracking-widest text-white/80 block mb-6 font-bold">
            INSTITUTIONAL INTEGRATION & SECURITY COMPLIANCE
          </span>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 font-mono text-xs">
            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur p-4 rounded-2xl border border-white/20">
              <Landmark className="w-6 h-6 text-white flex-shrink-0" />
              <div>
                <span className="font-bold text-white block">RBI Regulated</span>
                <span className="text-[10px] text-white/70">NBFC Partners</span>
              </div>
            </div>

            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur p-4 rounded-2xl border border-white/20">
              <Lock className="w-6 h-6 text-white flex-shrink-0" />
              <div>
                <span className="font-bold text-white block">256-Bit SSL</span>
                <span className="text-[10px] text-white/70">Bank-Grade Tech</span>
              </div>
            </div>

            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur p-4 rounded-2xl border border-white/20">
              <Shield className="w-6 h-6 text-white flex-shrink-0" />
              <div>
                <span className="font-bold text-white block">CIBIL Partner</span>
                <span className="text-[10px] text-white/70">Official Credit Bureau</span>
              </div>
            </div>

            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur p-4 rounded-2xl border border-white/20">
              <CheckCircle2 className="w-6 h-6 text-white flex-shrink-0" />
              <div>
                <span className="font-bold text-white block">DigiLocker</span>
                <span className="text-[10px] text-white/70">Instant KYC Integration</span>
              </div>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
};
