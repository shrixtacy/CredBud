'use client';

import React from 'react';

export const StudentsBorrowSection = () => {
  return (
    <section className="relative w-full bg-bg-primary py-20 md:py-24 overflow-hidden">
      {/* Top Right Extreme Corner - Lemon Green Pair (Bigger, only 1/4th visible) */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-72 h-72 md:w-[440px] md:h-[440px] pointer-events-none z-0 select-none opacity-90">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Outer Green Ring */}
          <circle cx="100" cy="100" r="88" stroke="#C8FF3D" strokeWidth="14" />
          {/* Inner Green Ring */}
          <circle cx="100" cy="100" r="58" stroke="#C8FF3D" strokeWidth="10" />
        </svg>
      </div>

      {/* Bottom Left Extreme Corner - Purple Pair (Bigger, only 1/4th visible) */}
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-72 h-72 md:w-[440px] md:h-[440px] pointer-events-none z-0 select-none opacity-90">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Outer Purple Ring */}
          <circle cx="100" cy="100" r="88" stroke="#7B5CFF" strokeWidth="14" />
          {/* Inner Purple Ring */}
          <circle cx="100" cy="100" r="58" stroke="#7B5CFF" strokeWidth="10" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-12">
          <span className="font-jetbrains text-ink-muted text-xs block mb-2">// borrowing simplified</span>
          <h2 className="font-bricolage text-4xl md:text-6xl font-extrabold tracking-tight text-ink">
            Need cash? Approved in <span className="accent-underline text-ink">60 seconds</span>.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-accent-lime brutal-card p-8 flex flex-col justify-between min-h-[260px]">
            <span className="font-jetbrains text-xs font-bold text-ink">01 // INSTANT</span>
            <div>
              <h3 className="font-bricolage text-3xl font-extrabold text-ink mb-2">₹500 to ₹50,000</h3>
              <p className="font-jakarta text-xs text-ink/80">Instant transfer directly to your bank account or UPI.</p>
            </div>
          </div>

          <div className="bg-white brutal-card p-8 flex flex-col justify-between min-h-[260px]">
            <span className="font-jetbrains text-xs font-bold text-accent-purple">02 // TRANSPARENT</span>
            <div>
              <h3 className="font-bricolage text-3xl font-extrabold text-ink mb-2">0% for 30 Days</h3>
              <p className="font-jakarta text-xs text-ink-muted">Zero interest for your first 30 days. No hidden charges ever.</p>
            </div>
          </div>

          <div className="bg-accent-gold brutal-card p-8 flex flex-col justify-between min-h-[260px]">
            <span className="font-jetbrains text-xs font-bold text-ink">03 // EASY KYC</span>
            <div>
              <h3 className="font-bricolage text-3xl font-extrabold text-ink mb-2">College ID Only</h3>
              <p className="font-jakarta text-xs text-ink/80">Upload your student ID card and Aadhaar. That&apos;s literally it.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


