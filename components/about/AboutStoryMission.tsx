'use client';

import React from 'react';
import { motion } from 'motion/react';
import { SplitText } from '@/components/landing/shared/SplitText';

export const AboutStoryMission = () => {
  return (
    <section className="py-16 md:py-24 px-6 md:px-12 bg-bg-primary w-full relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
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

      </div>
    </section>
  );
};
