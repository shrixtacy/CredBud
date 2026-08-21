'use client';

import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const ContactHeroForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo('.contact-info-col',
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.85, ease: 'power3.out' }
      );
      gsap.fromTo('.contact-form-card',
        { scale: 0.94, opacity: 0, y: 40 },
        { scale: 1, opacity: 1, y: 0, duration: 0.85, ease: 'back.out(1.2)', delay: 0.2 }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section ref={containerRef} className="relative pt-32 pb-20 px-6 md:px-12 bg-bg-primary text-ink border-b-[1.6px] border-ink">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Heading */}
        <div className="contact-info-col lg:col-span-5 space-y-6">
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
            <p className="flex items-center gap-2"><span className="text-sm">📧</span> <a href="mailto:creditbuddyofficial@gmail.com" className="hover:underline">creditbuddyofficial@gmail.com</a></p>
            <p className="flex items-center gap-2"><span className="text-sm">✉️</span> <a href="mailto:info@creditbuddy.org.in" className="hover:underline">info@creditbuddy.org.in</a></p>
            <p className="flex items-center gap-2"><span className="text-sm">📍</span> Sambalpur, Odisha, India - 768004</p>
            <div className="text-[11px] text-ink-muted leading-relaxed pt-2 border-t border-ink/10 space-y-1">
              <p className="font-bold text-ink">CREDITBUDDY PARTNERS PRIVATE LIMITED</p>
              <p>CIN: U62090OD2026PTC053104 | GSTIN: 21AANCC6754D1ZS</p>
              <p>PLOT NO. 1380/6628 Near Gram Devi Mandir, Matru Vihar, Shanti Nagar, Budharaja, Sambalpur, Odisha, 768004</p>
            </div>
          </div>
        </div>

        {/* Right Column: Brutalist Contact Form */}
        <div className="contact-form-card lg:col-span-7 bg-white brutal-card p-8 md:p-10" style={{ boxShadow: '8px 8px 0px #14100F' }}>
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
