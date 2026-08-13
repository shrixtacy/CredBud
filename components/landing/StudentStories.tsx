'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

export const StudentStories = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to('.story-drift', {
        x: '-15%',
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-20 bg-bg-secondary w-[95%] md:w-[96%] mx-auto my-6 md:my-10 brutal-border overflow-hidden relative bg-elements rounded-[2rem] md:rounded-[3.5rem]">
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 mb-16">
        <span className="font-jetbrains text-ink font-normal tracking-widest uppercase text-xs brutal-pill bg-accent-coral px-4 py-1.5 inline-block mb-4">
          // student stories
        </span>
        <h2 className="font-bricolage text-4xl md:text-6xl font-extrabold tracking-tight text-ink">
          Don&apos;t just take our <span className="accent-underline text-ink">word</span> for it.
        </h2>
      </div>

      <div className="story-drift flex space-x-12 px-6 md:px-12 w-[150vw]">

        {/* Story 1 */}
        <div className="w-80 flex-shrink-0 -rotate-3 mt-12">
          <div className="bg-white p-4 brutal-card shadow-xl">
            <div className="w-full aspect-square bg-bg-secondary mb-4 flex items-center justify-center overflow-hidden rounded-xl brutal-border">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://picsum.photos/400/400?random=1" alt="Student" className="w-full h-full object-cover grayscale mix-blend-multiply opacity-80" />
            </div>
            <p className="font-jakarta text-ink font-medium text-sm">&quot;Got my rent sorted in 5 mins. Lifesaver.&quot;</p>
            <p className="font-jetbrains text-ink-muted text-xs mt-2">— Rahul, DU</p>
          </div>
        </div>

        {/* Story 2 (WhatsApp style) */}
        <div className="w-72 flex-shrink-0 rotate-2">
          <div className="bg-accent-lime brutal-card p-6 shadow-lg">
            <div className="bg-white rounded-2xl rounded-tr-none p-4 brutal-border mb-4">
              <p className="font-jakarta text-ink font-medium text-sm">Bro, CreditBuddy just approved my limit upgrade. 📈</p>
            </div>
            <div className="flex items-center space-x-2 opacity-60">
              <div className="w-8 h-8 rounded-full bg-ink brutal-border" />
              <div className="flex-1 h-[2px] bg-ink relative">
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-1/3 h-[4px] bg-ink rounded-full" />
              </div>
            </div>
            <p className="font-jetbrains text-xs text-ink/70 mt-4 text-center">Voice Note • 0:12</p>
          </div>
        </div>

        {/* Story 3 */}
        <div className="w-80 flex-shrink-0 rotate-1 mt-8">
          <div className="bg-white p-4 brutal-card shadow-xl">
            <div className="w-full aspect-square bg-bg-secondary mb-4 flex items-center justify-center overflow-hidden rounded-xl brutal-border">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://picsum.photos/400/400?random=2" alt="Student" className="w-full h-full object-cover grayscale mix-blend-multiply opacity-80" />
            </div>
            <p className="font-jakarta text-ink font-medium text-sm">&quot;Paid for my cert exam via the app. Zero hassle.&quot;</p>
            <p className="font-jetbrains text-ink-muted text-xs mt-2">— Sneha, MIT</p>
          </div>
        </div>

        {/* Story 4 */}
        <div className="w-72 flex-shrink-0 -rotate-2 mt-4">
          <div className="bg-white p-6 brutal-card shadow-xl">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-accent-gold brutal-border flex items-center justify-center font-bricolage font-extrabold text-ink">R</div>
              <div>
                <p className="font-jakarta font-bold text-sm text-ink">Rohit Sharma</p>
                <p className="font-jetbrains text-xs text-ink-muted">Referred 5 friends</p>
              </div>
            </div>
            <p className="font-jakarta text-ink text-sm italic">&quot;Easiest 2.5k I&apos;ve ever made. Referral system is actually legit.&quot;</p>
          </div>
        </div>

      </div>
    </section>
  );
};
