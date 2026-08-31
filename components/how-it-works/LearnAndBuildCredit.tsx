'use client';

import React, { useRef, useEffect, useState } from 'react';
import { BookOpen, CheckCircle } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const LESSONS = [
  { id: 'budgeting', title: 'Budgeting basics', time: '4 min' },
  { id: 'credit', title: 'Credit scores 101', time: '6 min' },
  { id: 'fraud', title: 'Fraud awareness', time: '3 min' },
  { id: 'investing', title: 'Investing, gently', time: '7 min', desc: 'Start with ₹100. Understand SIPs, compounding, and why time in the market beats timing the market.' },
];

export const LearnAndBuildCredit = () => {
  const [selectedLesson, setSelectedLesson] = useState('investing');
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Stagger entrance for lesson buttons
      gsap.fromTo('.lesson-item',
        { x: -40, opacity: 0 },
        {
          x: 0, opacity: 1, stagger: 0.08, duration: 0.7, ease: 'power3.out',
          scrollTrigger: { trigger: containerRef.current, start: 'top 75%' }
        }
      );

      // Featured card reveal
      gsap.fromTo('.featured-lesson-card',
        { scale: 0.95, opacity: 0, y: 30 },
        {
          scale: 1, opacity: 1, y: 0, duration: 0.8, ease: 'back.out(1.2)',
          scrollTrigger: { trigger: containerRef.current, start: 'top 75%' }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const activeLessonObj = LESSONS.find(l => l.id === selectedLesson) || LESSONS[3];

  return (
    <section ref={containerRef} className="py-20 md:py-28 px-6 md:px-12 bg-bg-primary w-full max-w-7xl mx-auto">
      
      {/* 1. LEARN SECTION */}
      <div>
        <span className="font-jetbrains text-ink-muted text-xs block mb-2">// learn</span>
        <h2 className="font-bricolage text-4xl md:text-6xl font-extrabold tracking-tight text-ink mb-12">
          Financial glow-up, one lesson at a time.
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Lesson Selector Pills */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-3">
            {LESSONS.map(l => (
              <button
                key={l.id}
                onClick={() => setSelectedLesson(l.id)}
                suppressHydrationWarning
                className={`lesson-item w-full p-4 rounded-2xl brutal-border text-left flex items-center justify-between transition-all cursor-pointer ${
                  selectedLesson === l.id
                    ? 'bg-accent-cyan text-ink font-bold brutal-shadow-sm'
                    : 'bg-white text-ink hover:bg-bg-secondary'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full border border-ink/20 flex items-center justify-center">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <span className="font-bricolage font-bold text-base">{l.title}</span>
                </div>
                <span className="font-jetbrains text-xs opacity-75">{l.time}</span>
              </button>
            ))}
          </div>

          {/* Right: Featured Lesson Card (Lime) */}
          <div className="featured-lesson-card lg:col-span-7 bg-accent-lime brutal-card p-8 md:p-12 flex flex-col justify-between space-y-6">
            <div className="flex justify-between items-start">
              <div className="w-12 h-12 rounded-2xl bg-white brutal-border flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-ink" />
              </div>
              <span className="font-jetbrains text-xs font-bold bg-white px-3 py-1 rounded-full brutal-border">
                beginner friendly
              </span>
            </div>

            <div>
              <h3 className="font-bricolage text-3xl md:text-4xl font-extrabold text-ink mb-4">
                {activeLessonObj.title}
              </h3>
              <p className="font-jakarta text-ink-muted text-base md:text-lg leading-relaxed">
                {activeLessonObj.desc || 'Master key financial concepts designed specifically for college students.'}
              </p>
            </div>

            <div>
              <button suppressHydrationWarning className="px-6 py-3.5 bg-ink text-bg-primary font-bricolage font-bold text-sm brutal-pill brutal-shadow-purple transition-transform hover:scale-105 cursor-pointer inline-flex items-center gap-2">
                <BookOpen className="w-4 h-4" /> Start lesson <span className="font-jetbrains text-xs text-accent-lime">free, forever</span>
              </button>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};
