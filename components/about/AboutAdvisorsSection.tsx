'use client';

import React from 'react';
import { motion } from 'motion/react';
import { SplitText } from '@/components/landing/shared/SplitText';

const ADVISORS = [
  {
    name: 'CS Sushant Pradhan',
    role: 'Legal Advisor',
    detail: 'RBI frameworks and governance — ensuring full regulatory compliance.',
  },
  {
    name: 'Nidhi Agrawal',
    role: 'FINANCE & COMPLIANCE ADVISOR',
    detail: 'Oversees financial structuring, compliance, and regulatory alignment across CreditBuddy. Ensures accurate reporting, clean accounting systems, and adherence to all statutory and RBI guidelines.',
  },
  {
    name: 'CMA Vishal Pathak',
    role: 'Finance & Audit',
    detail: 'Leads unit economics, financial modeling, and audit systems.',
  },
  {
    name: 'Karan Agrawal',
    role: 'Business Strategy',
    detail: 'Drives NBFC partnerships, lending structure, and capital strategy.',
  },
  {
    name: 'Ayush Nanda',
    role: 'Business Advisor',
    detail: 'Fundraising guidance and national expansion strategy.',
  },
];

export const AboutAdvisorsSection = () => {
  return (
    <section className="py-20 md:py-24 px-6 md:px-12 bg-bg-secondary border-t-[1.6px] border-ink w-full overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto space-y-3"
        >
          <span className="font-jetbrains text-ink-muted text-xs block">// governance &amp; guidance</span>
          <h2 className="font-bricolage text-4xl md:text-6xl font-extrabold tracking-tight text-ink">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ADVISORS.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white brutal-card p-6 flex flex-col justify-between space-y-4 transition-transform hover:-translate-y-1"
              style={{ boxShadow: '6px 6px 0px #14100F' }}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent-gold border-2 border-ink flex items-center justify-center font-bricolage font-extrabold text-ink text-xl shadow-[3px_3px_0px_#14100F] shrink-0">
                  {a.name[0]}
                </div>
                <div>
                  <h3 className="font-bricolage font-extrabold text-xl text-ink leading-snug">{a.name}</h3>
                  <p className="font-jetbrains text-xs font-bold uppercase text-accent-purple mt-0.5">{a.role}</p>
                </div>
              </div>

              <p className="font-jakarta text-xs md:text-sm text-ink-muted leading-relaxed font-medium pt-3 border-t border-ink/10">
                {a.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
