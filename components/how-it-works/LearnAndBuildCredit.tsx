'use client';

import React, { useState } from 'react';
import { BookOpen, CheckCircle } from 'lucide-react';

const LESSONS = [
  { id: 'budgeting', title: 'Budgeting basics', time: '4 min' },
  { id: 'credit', title: 'Credit scores 101', time: '6 min' },
  { id: 'fraud', title: 'Fraud awareness', time: '3 min' },
  { id: 'investing', title: 'Investing, gently', time: '7 min', desc: 'Start with ₹100. Understand SIPs, compounding, and why time in the market beats timing the market.' },
];

const STEPS = [
  { num: '01', title: 'Borrow small, smart', desc: 'Take your first student-friendly advance in minutes.' },
  { num: '02', title: 'Repay on time', desc: 'Every on-time payment adds points to your CreditBuddy score.' },
  { num: '03', title: 'Watch it climb', desc: 'Track your score live and unlock better limits & perks.' },
  { num: '04', title: 'Graduate credit-ready', desc: 'Leave college with real credibility for loans & cards.' },
];

export const LearnAndBuildCredit = () => {
  const [selectedLesson, setSelectedLesson] = useState('investing');

  const activeLessonObj = LESSONS.find(l => l.id === selectedLesson) || LESSONS[3];

  return (
    <section className="py-20 md:py-28 px-6 md:px-12 bg-bg-primary w-full max-w-7xl mx-auto space-y-28">
      
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
                className={`w-full p-4 rounded-2xl brutal-border text-left flex items-center justify-between transition-all cursor-pointer ${
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
                <span className="font-jetbrains text-xs opacity-75">⏱ {l.time}</span>
              </button>
            ))}
          </div>

          {/* Right: Featured Lesson Card (Lime) */}
          <div className="lg:col-span-7 bg-accent-lime brutal-card p-8 md:p-12 flex flex-col justify-between space-y-6">
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
                📖 Start lesson <span className="font-jetbrains text-xs text-accent-lime">free, forever</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 2. BUILD CREDIT SECTION */}
      <div>
        <div className="flex justify-end mb-2">
          <span className="font-jetbrains text-ink-muted text-xs">// build credit</span>
        </div>
        <div className="flex justify-end mb-12">
          <h2 className="font-bricolage text-4xl md:text-6xl font-extrabold tracking-tight text-ink text-right">
            Small habits. Big future.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Credit Score Card */}
          <div className="lg:col-span-6 bg-white brutal-card p-8 md:p-10 space-y-8" style={{ boxShadow: '8px 8px 0px #14100F' }}>
            <div className="flex justify-between items-center">
              <span className="font-jetbrains text-xs text-ink-muted">CreditBuddy Score</span>
              <span className="font-jetbrains text-xs font-bold bg-accent-lime text-ink px-3 py-1 rounded-full brutal-border">
                excellent
              </span>
            </div>

            <div>
              <div className="flex items-baseline gap-2">
                <span className="font-bricolage text-6xl md:text-7xl font-extrabold text-ink">742</span>
                <span className="font-jetbrains text-sm text-ink-muted">/ 900</span>
              </div>

              {/* Progress Bar */}
              <div className="mt-4 w-full h-3 bg-bg-secondary rounded-full overflow-hidden brutal-border">
                <div className="h-full w-[82%] bg-gradient-to-r from-accent-coral via-accent-gold to-accent-lime" />
              </div>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-white brutal-card p-3 text-center">
                <span className="font-jetbrains text-[9px] text-ink-muted uppercase block">Payments</span>
                <span className="font-jetbrains text-xs font-bold text-ink mt-0.5 block">on time</span>
              </div>
              <div className="bg-white brutal-card p-3 text-center">
                <span className="font-jetbrains text-[9px] text-ink-muted uppercase block">Streak</span>
                <span className="font-jetbrains text-xs font-bold text-ink mt-0.5 block">9 months</span>
              </div>
              <div className="bg-white brutal-card p-3 text-center">
                <span className="font-jetbrains text-[9px] text-ink-muted uppercase block">Limit</span>
                <span className="font-jetbrains text-xs font-bold text-ink mt-0.5 block">unlocked ↑</span>
              </div>
            </div>
          </div>

          {/* Right: 4 Steps */}
          <div className="lg:col-span-6 space-y-6">
            {STEPS.map((step, i) => (
              <div key={i} className="flex items-start gap-4 pb-6 border-b border-ink/10 last:border-0">
                <span className="font-jetbrains text-xs font-bold text-accent-purple bg-accent-purple/10 px-2.5 py-1 rounded-md brutal-border">
                  {step.num}
                </span>
                <div>
                  <h4 className="font-bricolage font-extrabold text-xl text-ink flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent-purple" />
                    {step.title}
                  </h4>
                  <p className="font-jakarta text-sm text-ink-muted mt-1 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};
