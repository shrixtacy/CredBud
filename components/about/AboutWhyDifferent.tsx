'use client';

import React from 'react';
import { motion } from 'motion/react';
import { SplitText } from '@/components/landing/shared/SplitText';

const REASONS = [
  {
    num: '01',
    title: 'Tech platform, not a lender',
    desc: 'We partner with RBI-regulated NBFCs to ensure fairness and compliance.',
    color: 'bg-accent-lime text-ink',
  },
  {
    num: '02',
    title: 'Compliance from day one',
    desc: 'Built with legal frameworks first — not fixed later.',
    color: 'bg-accent-gold text-ink',
  },
  {
    num: '03',
    title: 'Earn, not just borrow',
    desc: 'Unique earn + repay model to reduce dependency on loans.',
    color: 'bg-accent-cyan text-ink',
  },
  {
    num: '04',
    title: 'Built with students',
    desc: 'Every feature is validated with real student feedback.',
    color: 'bg-accent-purple text-white',
  },
  {
    num: '05',
    title: 'Transparent to a fault',
    desc: 'No hidden charges. What you see is what you pay.',
    color: 'bg-accent-coral text-white',
  },
];

export const AboutWhyDifferent = () => {
  return (
    <section className="py-20 md:py-28 px-6 md:px-12 bg-bg-primary border-t-[1.6px] border-ink w-full overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto space-y-3"
        >
          <span className="font-jetbrains text-ink-muted text-xs block">// key differentiators</span>
          <h2 className="font-bricolage text-4xl md:text-6xl font-extrabold tracking-tight text-ink">
            <SplitText
              text="Why this isn’t just another app."
              splitType="words"
              variant="rise"
              delay={50}
              textAlign="center"
              tag="span"
            />
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {REASONS.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`${r.color} brutal-card p-8 flex flex-col justify-between min-h-[220px] transition-transform hover:-translate-y-1`}
              style={{ boxShadow: '6px 6px 0px #14100F' }}
            >
              <span className="font-jetbrains text-xs font-extrabold opacity-75 mb-4 block">
                REASON {r.num}
              </span>
              <div>
                <h3 className="font-bricolage font-extrabold text-2xl mb-2">{r.title}</h3>
                <p className="font-jakarta text-sm opacity-90 leading-relaxed font-medium">{r.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
