'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const StudentStories = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = scrollWrapperRef.current;
    if (!slider) return;

    let isDown = false;
    let startX: number;
    let scrollLeft: number;

    const onMouseDown = (e: MouseEvent) => {
      isDown = true;
      slider.classList.add('cursor-grabbing');
      slider.classList.remove('cursor-grab');
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    };

    const onMouseLeave = () => {
      isDown = false;
      slider.classList.add('cursor-grab');
      slider.classList.remove('cursor-grabbing');
    };

    const onMouseUp = () => {
      isDown = false;
      slider.classList.add('cursor-grab');
      slider.classList.remove('cursor-grabbing');
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 1.5; // scroll speed multiplier
      slider.scrollLeft = scrollLeft - walk;
    };

    slider.addEventListener('mousedown', onMouseDown);
    slider.addEventListener('mouseleave', onMouseLeave);
    slider.addEventListener('mouseup', onMouseUp);
    slider.addEventListener('mousemove', onMouseMove);

    return () => {
      slider.removeEventListener('mousedown', onMouseDown);
      slider.removeEventListener('mouseleave', onMouseLeave);
      slider.removeEventListener('mouseup', onMouseUp);
      slider.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Staggered reveal animation from right to left when the section enters the screen
      gsap.from('.story-drift > div', {
        x: 120,
        opacity: 0,
        stagger: 0.1,
        ease: 'power2.out',
        duration: 0.8,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        }
      });

      // Desktop-only parallax drift as the user scrolls
      ScrollTrigger.matchMedia({
        "(min-width: 768px)": function() {
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
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-8 md:py-16 bg-bg-secondary w-[95%] md:w-[96%] mx-auto my-4 md:my-8 brutal-border overflow-hidden relative bg-elements rounded-[1.5rem] md:rounded-[3rem]">
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 mb-6 md:mb-8">
        <span className="font-jetbrains text-ink font-normal tracking-widest uppercase text-xs brutal-pill bg-accent-coral px-3 py-1 inline-block mb-3">
          // student stories
        </span>
        <h2 className="font-bricolage text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-ink">
          Don&apos;t just take our <span className="accent-underline text-ink">word</span> for it.
        </h2>
      </div>

      <div ref={scrollWrapperRef} className="story-drift flex overflow-x-auto md:overflow-x-visible w-full md:w-[150vw] space-x-4 md:space-x-12 px-6 md:px-12 pb-4 md:pb-0 no-scrollbar snap-x snap-mandatory cursor-grab select-none">

        {/* Story 1 */}
        <div className="w-64 sm:w-80 flex-shrink-0 md:-rotate-3 mt-2 md:mt-12 snap-center snap-always">
          <div className="bg-white p-3 md:p-4 brutal-card shadow-xl">
            <div className="w-full aspect-square bg-bg-secondary mb-3 flex items-center justify-center overflow-hidden rounded-xl brutal-border">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://picsum.photos/400/400?random=1" alt="Student" className="w-full h-full object-cover grayscale mix-blend-multiply opacity-80" />
            </div>
            <p className="font-jakarta text-ink font-medium text-xs sm:text-sm">&quot;Got my rent sorted in 5 mins. Lifesaver.&quot;</p>
            <p className="font-jetbrains text-ink-muted text-[10px] sm:text-xs mt-2">— Rahul, DU</p>
          </div>
        </div>

        {/* Story 2 (WhatsApp style) */}
        <div className="w-64 sm:w-72 flex-shrink-0 md:rotate-2 snap-center snap-always mt-2 md:mt-0">
          <div className="bg-accent-lime brutal-card p-5 md:p-6 shadow-lg">
            <div className="bg-white rounded-2xl rounded-tr-none p-3 sm:p-4 brutal-border mb-3">
              <p className="font-jakarta text-ink font-medium text-xs sm:text-sm">Bro, CreditBuddy just approved my limit upgrade.</p>
            </div>
            <div className="flex items-center space-x-2 opacity-60">
              <div className="w-8 h-8 rounded-full bg-ink brutal-border" />
              <div className="flex-1 h-[2px] bg-ink relative">
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-1/3 h-[4px] bg-ink rounded-full" />
              </div>
            </div>
            <p className="font-jetbrains text-[10px] sm:text-xs text-ink/70 mt-3 text-center">Voice Note • 0:12</p>
          </div>
        </div>

        {/* Story 3 */}
        <div className="w-64 sm:w-80 flex-shrink-0 md:rotate-1 mt-2 md:mt-8 snap-center snap-always">
          <div className="bg-white p-3 md:p-4 brutal-card shadow-xl">
            <div className="w-full aspect-square bg-bg-secondary mb-3 flex items-center justify-center overflow-hidden rounded-xl brutal-border">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://picsum.photos/400/400?random=2" alt="Student" className="w-full h-full object-cover grayscale mix-blend-multiply opacity-80" />
            </div>
            <p className="font-jakarta text-ink font-medium text-xs sm:text-sm">&quot;Paid for my cert exam via the app. Zero hassle.&quot;</p>
            <p className="font-jetbrains text-ink-muted text-[10px] sm:text-xs mt-2">— Sneha, MIT</p>
          </div>
        </div>

        {/* Story 4 */}
        <div className="w-64 sm:w-72 flex-shrink-0 md:-rotate-2 mt-2 snap-center snap-always">
          <div className="bg-white p-4 md:p-6 brutal-card shadow-xl">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-accent-gold brutal-border flex items-center justify-center font-bricolage font-extrabold text-ink text-xs sm:text-base">R</div>
              <div>
                <p className="font-jakarta font-bold text-xs sm:text-sm text-ink">Rohit Sharma</p>
                <p className="font-jetbrains text-[9px] sm:text-xs text-ink-muted">Referred 5 friends</p>
              </div>
            </div>
            <p className="font-jakarta text-ink text-xs sm:text-sm italic">&quot;Easiest 2.5k I&apos;ve ever made. Referral system is actually legit.&quot;</p>
          </div>
        </div>

      </div>
    </section>
  );
};
