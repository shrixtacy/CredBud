'use client';

import React, { useState } from 'react';

const FAQS = [
  {
    q: 'Who is eligible to apply for CreditBuddy?',
    a: 'Any college student in India currently enrolled in an accredited degree/diploma program with a valid college ID.',
  },
  {
    q: 'Do I need a salary slip or proof of income?',
    a: 'No salary slip or proof of income required. Verification is instant via your college ID and digital KYC.',
  },
  {
    q: 'Is there any interest for the first 30 days?',
    a: '0% interest for the first 30 days for new student borrowers. Pay back exactly what you borrow.',
  },
  {
    q: 'How do campus gigs work?',
    a: 'Complete short tasks (brand promo, surveys, referrals) listed on the app and receive instant payouts directly to your CreditBuddy wallet.',
  },
  {
    q: 'Will using CreditBuddy build my official credit score?',
    a: 'Yes! On-time repayments are reported to RBI-licensed credit bureaus, building your CIBIL score before graduation.',
  },
];

export const HowItWorksFAQEditorial = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-20 md:py-28 px-6 md:px-12 bg-bg-primary border-t-[1.6px] border-ink w-full max-w-7xl mx-auto">
      <div className="max-w-4xl mx-auto">
        <span className="font-jetbrains text-ink-muted text-xs block mb-2">// FAQ</span>
        <h2 className="font-bricolage text-4xl md:text-6xl font-extrabold tracking-tight text-ink mb-12">
          Frequently asked questions.
        </h2>

        <div className="space-y-4">
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className="bg-white brutal-card p-6 cursor-pointer transition-all"
              onClick={() => setOpenIdx(openIdx === i ? null : i)}
            >
              <div className="flex justify-between items-center gap-4">
                <h3 className="font-bricolage font-extrabold text-xl text-ink">
                  {faq.q}
                </h3>
                <span className="font-bricolage text-2xl font-bold text-ink">
                  {openIdx === i ? '−' : '+'}
                </span>
              </div>
              {openIdx === i && (
                <p className="font-jakarta text-ink-muted text-base mt-4 pt-4 border-t border-ink/10 leading-relaxed">
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
