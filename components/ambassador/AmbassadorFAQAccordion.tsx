'use client';

import React, { useState } from 'react';

const FAQS = [
  { q: 'How much time do I need to commit?', a: 'Around 4-6 hours per week, flexible around your class schedule and exams.' },
  { q: 'How do I get paid?', a: 'Monthly stipends and gig rewards are credited directly to your CreditBuddy wallet.' },
  { q: 'Will I get an official certificate?', a: 'Yes! All ambassadors receive a verified certificate of leadership upon completing their term.' },
];

export const AmbassadorFAQAccordion = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-20 md:py-24 px-6 md:px-12 bg-bg-primary border-t-[1.6px] border-ink w-full max-w-7xl mx-auto">
      <div className="max-w-4xl mx-auto">
        <span className="font-jetbrains text-ink-muted text-xs block mb-2">// ambassador FAQ</span>
        <h2 className="font-bricolage text-4xl md:text-6xl font-extrabold tracking-tight text-ink mb-12">
          Ambassador Questions.
        </h2>

        <div className="space-y-4">
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className="bg-white brutal-card p-6 cursor-pointer transition-all"
              onClick={() => setOpenIdx(openIdx === i ? null : i)}
            >
              <div className="flex justify-between items-center gap-4">
                <h3 className="font-bricolage font-extrabold text-xl text-ink">{faq.q}</h3>
                <span className="font-bricolage text-2xl font-bold text-ink">{openIdx === i ? '−' : '+'}</span>
              </div>
              {openIdx === i && (
                <p className="font-jakarta text-ink-muted text-base mt-4 pt-4 border-t border-ink/10 leading-relaxed">{faq.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
