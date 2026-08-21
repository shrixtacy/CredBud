'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const ContactCompanyDetails = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo('.contact-card-item',
        { y: 70, opacity: 0, scale: 0.85 },
        {
          y: 0, opacity: 1, scale: 1, stagger: 0.12, duration: 0.8, ease: 'back.out(1.8)',
          scrollTrigger: { trigger: containerRef.current, start: 'top 85%' }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-16 px-6 md:px-12 bg-bg-secondary w-full">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="contact-card-item bg-white brutal-card p-6">
          <span className="font-jetbrains text-xs font-bold text-accent-purple uppercase">// Support Hours</span>
          <h3 className="font-bricolage font-extrabold text-lg text-ink mt-2">24/7 In-App Chat</h3>
          <p className="font-jakarta text-xs text-ink-muted mt-1">Our support bot and student advocates are online round the clock.</p>
        </div>

        <div className="contact-card-item bg-white brutal-card p-6">
          <span className="font-jetbrains text-xs font-bold text-accent-lime uppercase">// Office HQ</span>
          <h3 className="font-bricolage font-extrabold text-lg text-ink mt-2">Sambalpur, Odisha</h3>
          <p className="font-jakarta text-xs text-ink-muted mt-1">CREDITBUDDY PARTNERS PRIVATE LIMITED, Shanti Nagar, Budharaja, Sambalpur, Odisha, 768004.</p>
        </div>

        <div className="contact-card-item bg-white brutal-card p-6">
          <span className="font-jetbrains text-xs font-bold text-accent-gold uppercase">// Regulatory</span>
          <h3 className="font-bricolage font-extrabold text-lg text-ink mt-2">RBI Compliant NBFC</h3>
          <p className="font-jakarta text-xs text-ink-muted mt-1">Partnered with regulated NBFC lending partners across India.</p>
        </div>
      </div>
    </section>
  );
};
