'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQS = [
  {
    num: '01',
    q: 'Who can use CreditBuddy?',
    a: 'College students aged 18–25 enrolled in recognized Indian universities with a valid student ID card or college email, Aadhaar, and PAN card.'
  },
  {
    num: '02',
    q: 'How much can I borrow?',
    a: 'Initial credit lines start between ₹500 and ₹10,000. As you complete on-time repayments and build your CreditBuddy score, your credit limit automatically grows up to ₹50,000.'
  },
  {
    num: '03',
    q: 'What does it cost?',
    a: 'We charge a simple, transparent flat platform fee (e.g. ₹150 flat fee on a ₹5,000 30-day loan). Zero interest, zero processing traps, and zero hidden charges. What you see upfront is what you pay.'
  },
  {
    num: '04',
    q: 'How fast is disbursal?',
    a: 'Instant. Once your 2-minute KYC is verified, disbursal to your UPI ID, bank account, or wallet takes under 60 seconds.'
  },
  {
    num: '05',
    q: 'What if I can’t repay on time?',
    a: 'We understand student emergencies happen. You can request a due date extension directly in the app before your due date. We enforce a strict zero-harassment, respect-first support policy.'
  },
  {
    num: '06',
    q: 'Is CreditBuddy a bank or NBFC?',
    a: 'CreditBuddy is a technology platform that partners with Reserve Bank of India (RBI) regulated Non-Banking Financial Companies (NBFCs) to disburse credit safely and legally.'
  },
  {
    num: '07',
    q: 'What are Buddy Coins?',
    a: 'Buddy Coins are reward points you earn by completing 5-minute financial modules, maintaining on-time repayment streaks, or inviting friends. They can be redeemed for gift vouchers, fee waivers, or cash rewards.'
  },
  {
    num: '08',
    q: 'Is my data safe?',
    a: 'Absolutely. We use AES-256 bank-level encryption, multi-factor authentication, and hosting on ISO 27001 certified AWS/GCP servers. We strictly never sell your data.'
  }
];

export const FAQMaximalist = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-20 md:py-28 bg-bg-primary border-b border-ink/10 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-12 space-y-10">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center space-x-2 border border-accent-blue/30 bg-accent-blue/10 rounded-full px-4 py-1">
            <HelpCircle className="w-4 h-4 text-accent-blue" />
            <span className="font-cabinet text-xs font-bold text-accent-blue uppercase tracking-widest">
              Frequently Asked Questions
            </span>
          </div>

          <h2 className="font-cabinet text-3xl sm:text-5xl font-black text-ink uppercase tracking-tight">
            Quick answers.
          </h2>
          <p className="font-satoshi text-ink/70 text-base">
            Everything you need to know about getting started, costs, and security.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx}
                className="rounded-2xl bg-white border border-ink/10 shadow-sm hover:border-accent-blue/30 transition-all overflow-hidden"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 text-left flex justify-between items-center space-x-4 cursor-pointer"
                >
                  <div className="flex items-center space-x-4">
                    <span className="font-cabinet text-xs font-bold text-accent-blue uppercase tracking-widest">{faq.num}</span>
                    <span className="font-cabinet text-base md:text-lg font-bold text-ink tracking-tight">
                      {faq.q}
                    </span>
                  </div>
                  <ChevronDown className={`w-4 h-4 text-accent-blue shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-0 font-satoshi text-xs md:text-sm text-ink/70 leading-relaxed border-t border-ink/5 mt-1 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
