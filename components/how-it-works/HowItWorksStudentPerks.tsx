'use client';

import React from 'react';
import { Gift, Lock, Unlock, Sparkles, Tag, ArrowRight } from 'lucide-react';

interface Perk {
  title: string;
  brand: string;
  discount: string;
  requiredScore: number;
  bgAccent: string;
  tagColor: string;
  isUnlocked: boolean;
}

const perks: Perk[] = [
  {
    title: 'Spotify Student Premium',
    brand: 'SPOTIFY',
    discount: '50% OFF + 3 MO FREE',
    requiredScore: 650,
    bgAccent: 'bg-white',
    tagColor: 'bg-[#10B981]/15 text-[#10B981]',
    isUnlocked: true,
  },
  {
    title: 'Zomato Campus Gold',
    brand: 'ZOMATO',
    discount: 'FREE DELIVERY ALL SEM',
    requiredScore: 680,
    bgAccent: 'bg-white',
    tagColor: 'bg-[#F5C518]/20 text-[#0D1B2A]',
    isUnlocked: true,
  },
  {
    title: 'Apple Education Store',
    brand: 'APPLE',
    discount: '₹10,000 OFF MAC/IPAD',
    requiredScore: 720,
    bgAccent: 'bg-white',
    tagColor: 'bg-[#2563EB]/15 text-[#2563EB]',
    isUnlocked: true,
  },
  {
    title: 'Amazon Prime Student',
    brand: 'AMAZON',
    discount: '50% OFF ANNUAL MEMBERSHIP',
    requiredScore: 750,
    bgAccent: 'bg-white',
    tagColor: 'bg-[#2563EB]/15 text-[#2563EB]',
    isUnlocked: false,
  },
];

export const HowItWorksStudentPerks = () => {
  return (
    <section className="relative w-full bg-[#EFECE6] text-[#0D1B2A] py-24 px-6 md:px-12 border-b border-[#0D1B2A]/10">
      
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#0D1B2A]/10 pb-8">
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#2563EB] bg-[#2563EB]/10 border border-[#2563EB]/20 px-3 py-1 rounded-full">
                STUDENT PERKS LOCKER
              </span>
              <span className="font-mono text-xs font-bold uppercase text-[#10B981]">
                02.5 // EXCLUSIVE REWARDS
              </span>
            </div>
            <h2 className="font-cabinet text-4xl md:text-6xl font-bold text-[#0D1B2A] tracking-tight">
              Build Credit. Unlock <br />
              <span className="editorial-italic text-[#10B981] font-light normal-case">student privileges.</span>
            </h2>
          </div>
          <p className="font-satoshi text-base text-[#0D1B2A]/70 max-w-md">
            Every on-time repayment bumps your CreditBuddy Score and automatically unlocks premium student discounts from top brands.
          </p>
        </div>

        {/* Perks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {perks.map((perk, index) => (
            <div
              key={index}
              className={`rounded-2xl border border-[#0D1B2A]/10 p-6 flex flex-col justify-between space-y-6 shadow-md hover:border-[#2563EB]/40 transition-colors ${perk.bgAccent}`}
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className={`font-mono text-[10px] font-bold tracking-wider px-2.5 py-1 rounded-md uppercase ${perk.tagColor}`}>
                    {perk.brand}
                  </span>
                  {perk.isUnlocked ? (
                    <span className="px-2 py-0.5 rounded-full bg-[#10B981]/15 border border-[#10B981]/30 text-[#10B981] font-mono text-[10px] font-bold flex items-center gap-1">
                      <Unlock className="w-3 h-3" /> UNLOCKED
                    </span>
                  ) : (
                    <span className="px-2 py-0.5 rounded-full bg-[#0D1B2A]/5 border border-[#0D1B2A]/10 text-[#0D1B2A]/50 font-mono text-[10px] font-bold flex items-center gap-1">
                      <Lock className="w-3 h-3" /> SCORE 750+
                    </span>
                  )}
                </div>

                <h3 className="font-cabinet text-xl font-bold text-[#0D1B2A]">
                  {perk.title}
                </h3>

                <div className="p-3 rounded-xl bg-[#FAF7F2] border border-[#0D1B2A]/10">
                  <span className="font-mono text-[10px] text-[#0D1B2A]/50 uppercase block font-bold">Privilege Offer</span>
                  <span className="font-cabinet text-base font-bold text-[#2563EB] block mt-0.5">
                    {perk.discount}
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t border-[#0D1B2A]/10 flex justify-between items-center">
                <span className="font-mono text-xs text-[#0D1B2A]/60 font-bold">
                  Req Score: {perk.requiredScore}
                </span>
                <button className="p-2 rounded-xl bg-[#2563EB] text-white hover:bg-[#1d4ed8] transition-colors cursor-pointer">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
};
