'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Target, Compass, ShieldCheck } from 'lucide-react';
import { SplitText } from '@/components/landing/shared/SplitText';

export const AboutStoryMission = () => {
  return (
    <section className="py-20 md:py-28 px-6 md:px-12 bg-bg-primary w-full relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-24">
        
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-6"
          >
            <span className="font-jetbrains text-xs font-bold text-ink brutal-pill bg-accent-gold px-3.5 py-1 border border-ink inline-block">
              // origin story
            </span>
            <h2 className="font-bricolage text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-ink">
              <SplitText
                text="Why we built CreditBuddy."
                splitType="words"
                variant="rise"
                delay={50}
                textAlign="left"
                tag="span"
              />
            </h2>
            <div className="space-y-4 font-jakarta text-ink/90 text-base md:text-lg leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="font-medium text-ink"
              >
                Late nights. Empty wallet. The hesitation before asking for ₹200 — knowing it’ll worry your parents.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                India has 40 million+ college students — ambitious, capable, building the country’s future. Yet financially, they’re treated like risks, not potential.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Banks won’t lend without a salary slip. And the apps that do? Hidden charges, very high interest, and harassment tactics.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="font-extrabold text-ink text-lg md:text-xl"
              >
                We’ve lived this. So we built the platform we wish we had.
              </motion.p>
            </div>
          </motion.div>

          {/* Founder Quote Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="lg:col-span-5"
          >
            <div className="bg-ink text-bg-primary brutal-card p-8 md:p-10 space-y-6 relative overflow-hidden" style={{ boxShadow: '8px 8px 0px #7B5CFF' }}>
              <span className="font-jetbrains text-5xl text-accent-lime font-extrabold block">“</span>
              <blockquote className="font-bricolage text-xl md:text-2xl font-bold leading-snug text-bg-primary -mt-6">
                Students don’t need to be saved. They need access — to fair credit, real earning opportunities, and the knowledge to make smart decisions.
              </blockquote>
              <div className="pt-4 border-t border-bg-primary/20">
                <span className="font-jetbrains text-sm font-bold text-accent-lime block">— Dev</span>
                <span className="font-jakarta text-xs text-bg-primary/70">Founder &amp; CEO, CreditBuddy</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mission, Vision & Promise Section */}
        <div className="pt-12 space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto space-y-3"
          >
            <span className="font-jetbrains text-xs font-bold text-ink brutal-pill bg-accent-lime px-3.5 py-1 border border-ink inline-block">
              // core alignment
            </span>
            <h2 className="font-bricolage text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-ink">
              <SplitText
                text="Built for students. Backed by purpose."
                splitType="words"
                variant="rise"
                delay={50}
                textAlign="center"
                tag="span"
              />
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-accent-lime text-ink brutal-card p-8 flex flex-col justify-between space-y-6 transition-transform hover:-translate-y-1"
              style={{ boxShadow: '6px 6px 0px #14100F' }}
            >
              <div className="space-y-4">
                <div className="w-12 h-12 bg-white border-2 border-ink rounded-xl flex items-center justify-center shadow-[3px_3px_0px_#14100F]">
                  <Target className="w-6 h-6 text-ink" />
                </div>
                <span className="font-jetbrains text-xs font-bold uppercase tracking-widest text-ink/70 block">
                  What we do
                </span>
                <h3 className="font-bricolage text-2xl font-extrabold text-ink">Mission</h3>
                <p className="font-jakarta text-sm md:text-base text-ink/90 font-medium leading-relaxed">
                  Build India’s most trusted student financial ecosystem — fair credit, real earnings, and practical financial education.
                </p>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-accent-purple text-white brutal-card p-8 flex flex-col justify-between space-y-6 transition-transform hover:-translate-y-1"
              style={{ boxShadow: '6px 6px 0px #14100F' }}
            >
              <div className="space-y-4">
                <div className="w-12 h-12 bg-white border-2 border-ink rounded-xl flex items-center justify-center shadow-[3px_3px_0px_#14100F]">
                  <Compass className="w-6 h-6 text-white" />
                </div>
                <span className="font-jetbrains text-xs font-bold uppercase tracking-widest text-white/70 block">
                  Where we&apos;re going
                </span>
                <h3 className="font-bricolage text-2xl font-extrabold text-white">Vision</h3>
                <p className="font-jakarta text-sm md:text-base text-white/90 font-medium leading-relaxed">
                  Every Indian student has access to financial tools and knowledge to build their future — without debt traps.
                </p>
              </div>
            </motion.div>

            {/* Promise */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-accent-gold text-ink brutal-card p-8 flex flex-col justify-between space-y-6 transition-transform hover:-translate-y-1"
              style={{ boxShadow: '6px 6px 0px #14100F' }}
            >
              <div className="space-y-4">
                <div className="w-12 h-12 bg-white border-2 border-ink rounded-xl flex items-center justify-center shadow-[3px_3px_0px_#14100F]">
                  <ShieldCheck className="w-6 h-6 text-ink" />
                </div>
                <span className="font-jetbrains text-xs font-bold uppercase tracking-widest text-ink/70 block">
                  What we stand for
                </span>
                <h3 className="font-bricolage text-2xl font-extrabold text-ink">Promise</h3>
                <p className="font-jakarta text-sm md:text-base text-ink/90 font-medium leading-relaxed">
                  Radical transparency. Zero harassment. Every decision made in the student’s interest — always.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
};
