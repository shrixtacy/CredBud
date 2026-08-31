'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Scale, FileCheck, Calculator, Briefcase, Rocket } from 'lucide-react';
import { SplitText } from '@/components/landing/shared/SplitText';

const ADVISORS = [
  {
    name: 'CS Sushant Pradhan',
    role: 'Legal Advisor',
    icon: Scale,
    badgeColor: 'bg-accent-lime',
  },
  {
    name: 'Nidhi Agrawal',
    role: 'Finance & Compliance Advisor',
    icon: FileCheck,
    badgeColor: 'bg-accent-gold',
  },
  {
    name: 'CMA Vishal Pathak',
    role: 'Finance & Audit Lead',
    icon: Calculator,
    badgeColor: 'bg-accent-cyan',
  },
  {
    name: 'Karan Agrawal',
    role: 'Business Strategy Lead',
    icon: Briefcase,
    badgeColor: 'bg-accent-purple',
  },
  {
    name: 'Ayush Nanda',
    role: 'Business Advisor',
    icon: Rocket,
    badgeColor: 'bg-accent-coral',
  },
];

export const AboutAdvisorsSection = () => {
  return (
    <section className="py-16 md:py-24 px-6 md:px-12 bg-bg-secondary border-t-[1.6px] border-ink w-full overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-10 md:space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto space-y-3"
        >
          <span className="font-jetbrains text-ink-muted text-xs block">// governance &amp; guidance</span>
          <h2 className="font-bricolage text-3xl md:text-6xl font-extrabold tracking-tight text-ink">
            <SplitText
              text="Advisory Board"
              splitType="words"
              variant="rise"
              delay={60}
              textAlign="center"
              tag="span"
            />
          </h2>
        </motion.div>

        {/* Desktop Grid Layout (Laptop/Desktop) */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ADVISORS.map((a, i) => {
            const Icon = a.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white brutal-card p-6 flex flex-col justify-between space-y-4 transition-transform hover:-translate-y-1 min-h-[140px]"
                style={{ boxShadow: '6px 6px 0px #14100F' }}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl ${a.badgeColor} border-2 border-ink flex items-center justify-center shadow-[3px_3px_0px_#14100F] shrink-0`}>
                    <Icon className="w-6 h-6 text-ink" />
                  </div>
                  <div>
                    <h3 className="font-bricolage font-extrabold text-xl text-ink leading-snug">{a.name}</h3>
                    <p className="font-jetbrains text-xs font-bold uppercase text-accent-purple mt-0.5">{a.role}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile List Layout */}
        <div className="block md:hidden max-w-3xl mx-auto space-y-3">
          {ADVISORS.map((a, i) => {
            const Icon = a.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white brutal-card p-4 flex items-center justify-between gap-4 transition-transform hover:-translate-y-0.5"
                style={{ boxShadow: '4px 4px 0px #14100F' }}
              >
                <div className="flex items-center gap-3.5">
                  <div className={`w-10 h-10 rounded-xl ${a.badgeColor} border-2 border-ink flex items-center justify-center shadow-[2px_2px_0px_#14100F] shrink-0`}>
                    <Icon className="w-5 h-5 text-ink" />
                  </div>
                  <div>
                    <h3 className="font-bricolage font-extrabold text-base text-ink leading-tight">{a.name}</h3>
                    <span className="font-jetbrains text-[10px] font-bold uppercase text-accent-purple tracking-wider block mt-0.5">
                      {a.role}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
