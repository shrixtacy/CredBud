'use client';

import React, { useState } from 'react';
import { Briefcase, ArrowUpRight, Zap, Star, CheckCircle, Sparkles, Filter, MapPin, Clock } from 'lucide-react';

interface Gig {
  id: string;
  title: string;
  category: 'DESIGN' | 'TECH' | 'EVENTS' | 'MARKETING';
  reward: number;
  timeEstimate: string;
  college: string;
  spotsLeft: number;
  badgeColor: string;
}

const sampleGigs: Gig[] = [
  {
    id: 'gig-1',
    title: 'Design TechFest Main Poster',
    category: 'DESIGN',
    reward: 1200,
    timeEstimate: '2 Hours',
    college: 'IIT Bombay',
    spotsLeft: 2,
    badgeColor: 'bg-[#F5C518]/20 text-[#0D1B2A] border border-[#F5C518]/40',
  },
  {
    id: 'gig-2',
    title: 'Campus Brand Ambassador',
    category: 'MARKETING',
    reward: 2500,
    timeEstimate: '4 Hours/Wk',
    college: 'BITS Pilani',
    spotsLeft: 5,
    badgeColor: 'bg-[#2563EB]/15 text-[#2563EB] border border-[#2563EB]/30',
  },
  {
    id: 'gig-3',
    title: 'CS201 Data Structures Notes',
    category: 'TECH',
    reward: 600,
    timeEstimate: 'Instant PDF',
    college: 'DU South Campus',
    spotsLeft: 12,
    badgeColor: 'bg-[#10B981]/15 text-[#10B981] border border-[#10B981]/30',
  },
  {
    id: 'gig-4',
    title: 'IPL Final Screening Host',
    category: 'EVENTS',
    reward: 1800,
    timeEstimate: '3 Hours',
    college: 'Manipal Univ',
    spotsLeft: 1,
    badgeColor: 'bg-[#2563EB]/15 text-[#2563EB] border border-[#2563EB]/30',
  },
];

export const HowItWorksGigMarketplace = () => {
  const [activeFilter, setActiveFilter] = useState<'ALL' | 'DESIGN' | 'MARKETING' | 'TECH' | 'EVENTS'>('ALL');
  const [appliedGigs, setAppliedGigs] = useState<string[]>([]);

  const filteredGigs = activeFilter === 'ALL' ? sampleGigs : sampleGigs.filter(g => g.category === activeFilter);

  const toggleApply = (id: string) => {
    if (appliedGigs.includes(id)) {
      setAppliedGigs(appliedGigs.filter(gId => gId !== id));
    } else {
      setAppliedGigs([...appliedGigs, id]);
    }
  };

  return (
    <section className="relative w-full bg-[#FAF7F2] text-[#0D1B2A] py-24 px-6 md:px-12 border-b border-[#0D1B2A]/10">
      
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#0D1B2A]/10 pb-8">
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#2563EB] bg-[#2563EB]/10 border border-[#2563EB]/20 px-3 py-1 rounded-full">
                CAMPUS MARKETPLACE
              </span>
              <span className="font-mono text-xs font-bold uppercase text-[#10B981]">
                02.3 // EARN & REPAY
              </span>
            </div>
            <h2 className="font-cabinet text-4xl md:text-6xl font-bold text-[#0D1B2A] tracking-tight">
              Turn Campus Skills into <br />
              <span className="editorial-italic text-[#10B981] font-light normal-case">instant cash payouts.</span>
            </h2>
          </div>
          <p className="font-satoshi text-base text-[#0D1B2A]/70 max-w-md">
            Don&apos;t ask parents for money. Pick verified micro-tasks from top Indian colleges and auto-knock down your credit balance in real time.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-mono text-xs font-bold text-[#0D1B2A]/50 uppercase mr-2 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" /> FILTER:
          </span>
          {(['ALL', 'DESIGN', 'MARKETING', 'TECH', 'EVENTS'] as const).map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-1.5 rounded-full font-mono text-xs font-bold uppercase transition-all duration-200 cursor-pointer border ${
                activeFilter === filter
                  ? 'bg-[#2563EB] text-white border-[#2563EB] shadow-md'
                  : 'bg-white text-[#0D1B2A]/80 border-[#0D1B2A]/10 hover:border-[#2563EB]/40'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Gig Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredGigs.map((gig) => {
            const isApplied = appliedGigs.includes(gig.id);

            return (
              <div
                key={gig.id}
                className="bg-white rounded-2xl border border-[#0D1B2A]/10 p-6 flex flex-col justify-between space-y-6 shadow-md hover:border-[#2563EB]/40 transition-colors"
              >
                <div className="space-y-4">
                  {/* Category Pill */}
                  <div className="flex justify-between items-center">
                    <span className={`font-mono text-[10px] font-bold tracking-wider px-2.5 py-1 rounded-md uppercase ${gig.badgeColor}`}>
                      {gig.category}
                    </span>
                    <span className="font-mono text-[10px] text-[#0D1B2A]/50 font-bold">
                      {gig.spotsLeft} SPOTS LEFT
                    </span>
                  </div>

                  <h3 className="font-cabinet text-xl font-bold text-[#0D1B2A] leading-snug">
                    {gig.title}
                  </h3>

                  <div className="font-mono text-xs text-[#0D1B2A]/60 space-y-1.5 pt-1">
                    <span className="flex items-center gap-1.5 font-medium"><MapPin className="w-3.5 h-3.5" /> {gig.college}</span>
                    <span className="flex items-center gap-1.5 font-medium"><Clock className="w-3.5 h-3.5" /> {gig.timeEstimate}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#0D1B2A]/10 space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-xs text-[#0D1B2A]/50 uppercase font-bold">Payout</span>
                    <span className="font-cabinet text-2xl font-black text-[#10B981]">
                      +₹{gig.reward}
                    </span>
                  </div>

                  <button
                    onClick={() => toggleApply(gig.id)}
                    className={`w-full py-2.5 rounded-xl font-cabinet font-bold text-xs uppercase tracking-wider transition-all duration-200 border flex items-center justify-center space-x-2 cursor-pointer ${
                      isApplied
                        ? 'bg-[#10B981] text-white border-[#10B981]'
                        : 'bg-[#2563EB] hover:bg-[#1d4ed8] text-white border-[#2563EB] shadow-md'
                    }`}
                  >
                    {isApplied ? (
                      <>
                        <CheckCircle className="w-4 h-4" />
                        <span>GIG APPLIED!</span>
                      </>
                    ) : (
                      <>
                        <Zap className="w-4 h-4" />
                        <span>CLAIM GIG</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
};
