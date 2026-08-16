'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, ChevronDown, ChevronUp } from 'lucide-react';
import { SplitText } from '@/components/landing/shared/SplitText';

const TEAM = [
  {
    name: 'Debasish Mallick (Dev)',
    role: 'Founder & CEO',
    bio: 'A student founder building CreditBuddy to solve real financial challenges students face. Combining technology and insight to create a system where students can borrow, earn, and grow with confidence.',
    color: 'bg-accent-lime text-ink',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Dr Bimal Kumar Mallick',
    role: 'Chief Technology Officer (CTO)',
    bio: 'Leads the technology behind CreditBuddy, building scalable and reliable systems designed around real student needs.',
    color: 'bg-accent-gold text-ink',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Goutam Bhosagar',
    role: 'PLATFORM OPERATIONS MANAGER',
    bio: 'Oversees the performance, functionality, and continuous improvement of CreditBuddy’s app and website. Ensures a smooth, reliable user experience by identifying issues, optimizing workflows, and coordinating fixes across teams. Focused on maintaining quality, stability, and seamless product performance.',
    color: 'bg-accent-cyan text-ink',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Ipsit Kumar Thakur',
    role: 'Technical Lead',
    bio: 'Transforms student problems into practical tech solutions. Focused on building fast and user-friendly features.',
    color: 'bg-accent-purple text-white',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Atul Meher',
    role: 'BRAND & MARKETING LEAD',
    bio: 'Builds CreditBuddy’s voice across campaigns and social media while driving awareness and engagement among students. Blends creativity with data to craft high-impact content, optimize performance, and turn attention into meaningful user action.',
    color: 'bg-accent-coral text-white',
    linkedin: 'https://linkedin.com',
  },
];

export const AboutTeamSection = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="py-20 md:py-28 px-6 md:px-12 bg-bg-primary w-full max-w-7xl mx-auto overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
        className="mb-14 text-center max-w-3xl mx-auto space-y-3"
      >
        <span className="font-jetbrains text-ink-muted text-xs block">// leadership</span>
        <h2 className="font-bricolage text-4xl md:text-6xl font-extrabold tracking-tight text-ink">
          <SplitText
            text="The people behind CreditBuddy."
            splitType="words"
            variant="blur"
            delay={50}
            textAlign="center"
            tag="span"
          />
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {TEAM.map((member, i) => {
          const isExpanded = expandedIndex === i;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className={`${member.color} brutal-card p-8 flex flex-col justify-between transition-all`}
              style={{ boxShadow: '6px 6px 0px #14100F' }}
            >
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div className="w-14 h-14 rounded-2xl bg-white border-2 border-ink flex items-center justify-center font-bricolage font-extrabold text-ink text-2xl shadow-[3px_3px_0px_#14100F]">
                    {member.name[0]}
                  </div>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-jetbrains text-xs font-bold inline-flex items-center gap-1 hover:underline underline-offset-4"
                  >
                    LinkedIn <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div>
                  <h3 className="font-bricolage font-extrabold text-2xl leading-snug">{member.name}</h3>
                  <p className="font-jetbrains text-xs font-bold uppercase tracking-wider opacity-85 mt-1">
                    {member.role}
                  </p>
                </div>

                <p className={`font-jakarta text-sm leading-relaxed font-medium ${isExpanded ? 'block' : 'line-clamp-3'}`}>
                  {member.bio}
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-current/20 flex justify-between items-center">
                <button
                  onClick={() => toggleExpand(i)}
                  className="font-jetbrains text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 cursor-pointer hover:opacity-80 transition-opacity"
                >
                  {isExpanded ? (
                    <>
                      View Less <ChevronUp className="w-3.5 h-3.5" />
                    </>
                  ) : (
                    <>
                      View More <ChevronDown className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
