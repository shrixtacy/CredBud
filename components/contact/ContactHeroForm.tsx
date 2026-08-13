'use client';

import React, { useState } from 'react';

export const ContactHeroForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="relative pt-32 pb-20 px-6 md:px-12 bg-bg-primary text-ink border-b-[1.6px] border-ink">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Heading */}
        <div className="lg:col-span-5 space-y-6">
          <span className="font-jetbrains text-xs font-normal brutal-pill bg-accent-lime px-4 py-1.5 inline-block">
            // get in touch
          </span>
          
          <h1 className="font-bricolage text-5xl md:text-7xl font-extrabold tracking-tight leading-[0.95]">
            We&apos;re here to <span className="accent-underline">help</span>.
          </h1>
          
          <p className="font-jakarta text-ink-muted text-base md:text-lg leading-relaxed">
            Have questions about your credit line, campus gig payouts, or ambassador application? Drop us a message and our team will get back to you within 2 hours.
          </p>

          <div className="space-y-3 font-jetbrains text-xs text-ink pt-4">
            <p>📧 support@creditbuddy.in</p>
            <p>📱 +91 800-CRED-BUD</p>
            <p>📍 Koramangala 5th Block, Bengaluru, KA 560095</p>
          </div>
        </div>

        {/* Right Column: Brutalist Contact Form */}
        <div className="lg:col-span-7 bg-white brutal-card p-8 md:p-10" style={{ boxShadow: '8px 8px 0px #14100F' }}>
          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <span className="text-5xl">🎉</span>
              <h3 className="font-bricolage text-3xl font-extrabold text-ink">Message Received!</h3>
              <p className="font-jakarta text-ink-muted text-sm max-w-sm mx-auto">
                Thanks for reaching out! Our team will respond to your registered email shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-jetbrains text-xs font-bold text-ink block mb-2">FULL NAME *</label>
                  <input
                    required
                    type="text"
                    placeholder="Sneha Sharma"
                    className="w-full p-3.5 bg-bg-primary brutal-border rounded-xl font-jakarta text-sm focus:outline-none focus:ring-2 focus:ring-accent-purple"
                  />
                </div>
                <div>
                  <label className="font-jetbrains text-xs font-bold text-ink block mb-2">EMAIL ADDRESS *</label>
                  <input
                    required
                    type="email"
                    placeholder="sneha@college.edu.in"
                    className="w-full p-3.5 bg-bg-primary brutal-border rounded-xl font-jakarta text-sm focus:outline-none focus:ring-2 focus:ring-accent-purple"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-jetbrains text-xs font-bold text-ink block mb-2">COLLEGE / UNIVERSITY</label>
                  <input
                    type="text"
                    placeholder="IIT Delhi"
                    className="w-full p-3.5 bg-bg-primary brutal-border rounded-xl font-jakarta text-sm focus:outline-none focus:ring-2 focus:ring-accent-purple"
                  />
                </div>
                <div>
                  <label className="font-jetbrains text-xs font-bold text-ink block mb-2">TOPIC</label>
                  <select className="w-full p-3.5 bg-bg-primary brutal-border rounded-xl font-jakarta text-sm focus:outline-none focus:ring-2 focus:ring-accent-purple">
                    <option>Student Support</option>
                    <option>Ambassador Program</option>
                    <option>Campus Partnership</option>
                    <option>Media & Investor Inquiry</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="font-jetbrains text-xs font-bold text-ink block mb-2">YOUR MESSAGE *</label>
                <textarea
                  required
                  rows={4}
                  placeholder="How can we help you?"
                  className="w-full p-3.5 bg-bg-primary brutal-border rounded-xl font-jakarta text-sm focus:outline-none focus:ring-2 focus:ring-accent-purple"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-ink text-bg-primary font-bricolage font-bold text-base brutal-pill brutal-shadow-purple transition-transform hover:scale-[1.01] active:scale-95 cursor-pointer text-center"
              >
                Send Message →
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
};
