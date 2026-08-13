'use client';

import React from 'react';

export const ContactCompanyDetails = () => {
  return (
    <section className="py-16 px-6 md:px-12 bg-bg-secondary w-full">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white brutal-card p-6">
          <span className="font-jetbrains text-xs font-bold text-accent-purple uppercase">// Support Hours</span>
          <h3 className="font-bricolage font-extrabold text-lg text-ink mt-2">24/7 In-App Chat</h3>
          <p className="font-jakarta text-xs text-ink-muted mt-1">Our support bot and student advocates are online round the clock.</p>
        </div>

        <div className="bg-white brutal-card p-6">
          <span className="font-jetbrains text-xs font-bold text-accent-lime uppercase">// Office HQ</span>
          <h3 className="font-bricolage font-extrabold text-lg text-ink mt-2">Bengaluru, India</h3>
          <p className="font-jakarta text-xs text-ink-muted mt-1">CreditBuddy Technologies Pvt. Ltd., Koramangala 5th Block.</p>
        </div>

        <div className="bg-white brutal-card p-6">
          <span className="font-jetbrains text-xs font-bold text-accent-gold uppercase">// Regulatory</span>
          <h3 className="font-bricolage font-extrabold text-lg text-ink mt-2">RBI Compliant NBFC</h3>
          <p className="font-jakarta text-xs text-ink-muted mt-1">Partnered with regulated NBFC lending partners across India.</p>
        </div>
      </div>
    </section>
  );
};
