'use client';

import React from 'react';
import { Lock, Scale, ShieldCheck, Check } from 'lucide-react';

export const SecuritySafetySection = () => {
  return (
    <section className="py-16 md:py-24 px-6 md:px-12 bg-bg-primary relative border-t border-ink/10 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-blue/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="font-cabinet text-xs font-bold uppercase tracking-widest text-accent-green border border-accent-green/30 bg-accent-green/10 rounded-full px-4 py-1 inline-block">
            Bank-Grade Trust Architecture
          </span>
          <h2 className="font-cabinet text-3xl sm:text-4xl md:text-5xl font-black text-ink uppercase tracking-tight leading-none">
            Your money and data are safe. <br />
            <span className="editorial-italic font-light normal-case text-accent-blue">Here&apos;s exactly how.</span>
          </h2>
          <p className="font-satoshi text-base text-ink/70 leading-relaxed">
            We adhere strictly to Reserve Bank of India (RBI) guidelines and employ financial security standards used by global banks.
          </p>
        </div>

        {/* 3 Shield Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="p-6 rounded-2xl bg-white border border-ink/10 shadow-sm hover:border-accent-blue/40 transition-all space-y-4">
            <div className="w-12 h-12 rounded-xl bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center text-accent-blue">
              <Lock className="w-6 h-6" />
            </div>
            <h3 className="font-cabinet text-xl font-bold text-ink uppercase tracking-tight">🔒 Data Security</h3>
            
            <ul className="space-y-3 pt-1">
              {[
                'AES-256 bank-level encryption',
                'End-to-end data protection',
                '2FA enabled on all accounts',
                'User data is NEVER sold to third parties',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-ink/70 font-satoshi">
                  <span className="w-4 h-4 rounded-full bg-accent-blue/10 text-accent-blue flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-bold">
                    <Check className="w-3 h-3" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-ink/10 shadow-sm hover:border-accent-green/40 transition-all space-y-4">
            <div className="w-12 h-12 rounded-xl bg-accent-green/10 border border-accent-green/20 flex items-center justify-center text-accent-green">
              <Scale className="w-6 h-6" />
            </div>
            <h3 className="font-cabinet text-xl font-bold text-ink uppercase tracking-tight">⚖️ Financial Safety</h3>
            
            <ul className="space-y-3 pt-1">
              {[
                'RBI-aligned NBFC partner network',
                'Full pricing shown upfront in plain text',
                'No hidden charges or surprise penalties',
                'Fair & respectful collection policies',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-ink/70 font-satoshi">
                  <span className="w-4 h-4 rounded-full bg-accent-green/10 text-accent-green flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-bold">
                    <Check className="w-3 h-3" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-ink/10 shadow-sm hover:border-accent-blue/40 transition-all space-y-4">
            <div className="w-12 h-12 rounded-xl bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center text-accent-blue">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-cabinet text-xl font-bold text-ink uppercase tracking-tight">🛡️ Legal Compliance</h3>
            
            <ul className="space-y-3 pt-1">
              {[
                'Registered legal entities in India',
                'Hosted on ISO 27001 AWS / GCP infra',
                'Regulated NBFC partner lending model',
                'Full KYC & CIBIL/Experian compliance',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-ink/70 font-satoshi">
                  <span className="w-4 h-4 rounded-full bg-accent-blue/10 text-accent-blue flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-bold">
                    <Check className="w-3 h-3" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};
