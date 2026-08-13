'use client';

import React, { useState } from 'react';
import { BookOpen, Coins, Users, Sparkles, CheckCircle2 } from 'lucide-react';

const MODULES = [
  { id: 1, title: 'Why your credit score decides your entire financial life', duration: '5 min' },
  { id: 2, title: 'How to budget on a student allowance (and actually stick to it)', duration: '4 min' },
  { id: 3, title: 'APR explained: why 36% APR costs more than you think', duration: '5 min' },
  { id: 4, title: 'Smart savings: build an emergency fund on ₹500/month', duration: '3 min' },
  { id: 5, title: 'Loan vs credit card: which one to use and when', duration: '5 min' },
  { id: 6, title: 'Investing basics: SIPs and mutual funds in plain language', duration: '6 min' },
  { id: 7, title: 'What actually happens if you default on a student loan', duration: '4 min' },
];

export const FinancialLiteracyMaximalist = () => {
  const [completedModules, setCompletedModules] = useState<number[]>([1]);
  const [coins, setCoins] = useState(150);

  const toggleModule = (id: number) => {
    if (completedModules.includes(id)) {
      setCompletedModules(completedModules.filter(m => m !== id));
      setCoins(coins - 50);
    } else {
      setCompletedModules([...completedModules, id]);
      setCoins(coins + 50);
    }
  };

  return (
    <section className="py-20 md:py-28 bg-bg-primary border-b border-ink/10 relative overflow-hidden">
      {/* Soft Glow */}
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-accent-blue/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 space-y-12">
        
        {/* Header Pitch */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="font-cabinet text-xs font-bold uppercase tracking-widest text-accent-blue border border-accent-blue/30 bg-accent-blue/10 rounded-full px-4 py-1 inline-block">
            Financial Literacy &amp; Skills
          </span>
          <h2 className="font-cabinet text-3xl sm:text-4xl md:text-5xl font-black text-ink uppercase tracking-tight leading-none">
            Financial confidence. <br />
            <span className="editorial-italic font-light normal-case text-accent-blue">5 minutes a day.</span>
          </h2>
          <p className="font-satoshi text-base text-ink/70 leading-relaxed">
            School taught you Pythagoras. Nobody taught you how a credit score affects your entire life. We fix that.
          </p>
        </div>

        {/* 3 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          
          <div className="p-6 rounded-2xl bg-white border border-ink/10 shadow-sm flex items-start space-x-3.5">
            <div className="w-10 h-10 rounded-xl bg-accent-blue/10 text-accent-blue flex items-center justify-center font-bold shrink-0">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-cabinet text-lg font-bold text-ink uppercase tracking-tight">📌 5-Min Format</h3>
              <p className="font-satoshi text-xs text-ink/60 mt-1 leading-relaxed">
                Real scenarios, not textbook theory. Bite-sized micro modules designed for busy college schedules.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-ink/10 shadow-sm flex items-start space-x-3.5">
            <div className="w-10 h-10 rounded-xl bg-accent-green/10 text-accent-green flex items-center justify-center font-bold shrink-0">
              <Coins className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-cabinet text-lg font-bold text-ink uppercase tracking-tight">🪙 Buddy Coins</h3>
              <p className="font-satoshi text-xs text-ink/60 mt-1 leading-relaxed">
                Earn coins for every module completed. Build streaks and redeem for vouchers or loan fee waivers.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-ink/10 shadow-sm flex items-start space-x-3.5">
            <div className="w-10 h-10 rounded-xl bg-accent-blue/10 text-accent-blue flex items-center justify-center font-bold shrink-0">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-cabinet text-lg font-bold text-ink uppercase tracking-tight">🌐 Peer Forum</h3>
              <p className="font-satoshi text-xs text-ink/60 mt-1 leading-relaxed">
                Anonymous campus community — ask real money questions without judgment or fear.
              </p>
            </div>
          </div>

        </div>

        {/* Modules List & Live Coin Counter Widget */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-2">
          
          {/* Modules List (Col 8) */}
          <div className="lg:col-span-8 space-y-3">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-cabinet text-2xl font-bold text-ink uppercase tracking-tight">
                📚 What you&apos;ll actually learn
              </h3>
              <span className="text-xs text-ink/50 font-bold uppercase tracking-wider">Tap module to finish</span>
            </div>

            <div className="space-y-2.5">
              {MODULES.map((m) => {
                const isDone = completedModules.includes(m.id);
                return (
                  <button
                    key={m.id}
                    onClick={() => toggleModule(m.id)}
                    className={`w-full p-4 rounded-xl border text-left transition-all flex items-center justify-between cursor-pointer ${
                      isDone 
                        ? 'bg-accent-blue/10 border-accent-blue/30 shadow-sm' 
                        : 'bg-white border-ink/10 hover:border-accent-blue/20 shadow-sm'
                    }`}
                  >
                    <div className="flex items-center space-x-3.5">
                      <div className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs ${
                        isDone ? 'bg-accent-blue text-white' : 'bg-ink/5 text-ink/40'
                      }`}>
                        {isDone ? '✔' : m.id}
                      </div>
                      <span className={`font-satoshi text-xs sm:text-sm font-medium ${isDone ? 'text-ink font-bold' : 'text-ink/70'}`}>
                        {m.title}
                      </span>
                    </div>

                    <div className="flex items-center space-x-3 shrink-0">
                      <span className="text-[10px] font-bold text-ink/40 uppercase tracking-widest">{m.duration}</span>
                      {isDone ? (
                        <span className="text-xs font-bold text-accent-green flex items-center space-x-1">
                          <span>+50 Coins</span>
                          <CheckCircle2 className="w-3.5 h-3.5" />
                        </span>
                      ) : (
                        <span className="text-xs font-bold text-accent-blue hover:text-blue-600">+50 Coins</span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Coins Widget (Col 4) */}
          <div className="lg:col-span-4">
            <div className="p-6 rounded-2xl bg-ink text-white border border-ink/20 shadow-xl space-y-5 text-center">
              <div className="w-12 h-12 rounded-xl bg-accent-blue/20 border border-accent-blue/30 flex items-center justify-center text-accent-blue mx-auto">
                <Coins className="w-6 h-6" />
              </div>

              <div>
                <span className="text-[10px] font-bold text-white/50 uppercase tracking-widest block">Your Buddy Coins Balance</span>
                <h4 className="font-cabinet text-4xl font-black text-accent-green mt-0.5">{coins} 🪙</h4>
              </div>

              <p className="font-satoshi text-xs text-white/70 leading-relaxed">
                Complete modules to build streaks &amp; redeem coins for Spotify, Swiggy vouchers, or loan fee waivers.
              </p>

              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center space-x-2 text-xs text-accent-blue">
                <Sparkles className="w-3.5 h-3.5 text-accent-blue animate-pulse" />
                <span>Streak Bonus Active: 3x Multiplier</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
