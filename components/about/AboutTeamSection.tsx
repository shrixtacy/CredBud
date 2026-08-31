'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, ChevronDown, ChevronUp } from 'lucide-react';
import { SplitText } from '@/components/landing/shared/SplitText';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const TEAM = [
  {
    name: 'Debasish Mallick (Dev)',
    role: 'Founder & CEO',
    bio: 'A student founder building CreditBuddy to solve real financial challenges students face. Combining technology and insight to create a system where students can borrow, earn, and grow with confidence.',
    color: 'bg-accent-lime text-ink',
    linkedin: 'https://linkedin.com',
    topOffset: 'top-[100px]',
    zIndex: 'z-10',
  },
  {
    name: 'Dr Bimal Kumar Mallick',
    role: 'Chief Technology Officer (CTO)',
    bio: 'Leads the technology behind CreditBuddy, building scalable and reliable systems designed around real student needs.',
    color: 'bg-accent-gold text-ink',
    linkedin: 'https://linkedin.com',
    topOffset: 'top-[125px]',
    zIndex: 'z-20',
  },
  {
    name: 'Goutam Bhosagar',
    role: 'Platform Operations Manager',
    bio: 'Oversees the performance, functionality, and continuous improvement of CreditBuddy’s app and website. Ensures a smooth, reliable user experience by identifying issues, optimizing workflows, and coordinating fixes across teams.',
    color: 'bg-accent-cyan text-ink',
    linkedin: 'https://linkedin.com',
    topOffset: 'top-[150px]',
    zIndex: 'z-30',
  },
  {
    name: 'Ipsit Kumar Thakur',
    role: 'Technical Lead',
    bio: 'Transforms student problems into practical tech solutions. Focused on building fast and user-friendly features.',
    color: 'bg-accent-purple text-white',
    linkedin: 'https://linkedin.com',
    topOffset: 'top-[175px]',
    zIndex: 'z-40',
  },
  {
    name: 'Atul Meher',
    role: 'Brand & Marketing Lead',
    bio: 'Builds CreditBuddy’s voice across campaigns and social media while driving awareness and engagement among students. Blends creativity with data to craft high-impact content.',
    color: 'bg-accent-coral text-white',
    linkedin: 'https://linkedin.com',
    topOffset: 'top-[200px]',
    zIndex: 'z-50',
  },
];

export const AboutTeamSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo('.team-sticky-card',
        { y: 80, opacity: 0, scale: 0.93 },
        {
          y: 0, opacity: 1, scale: 1, stagger: 0.15, duration: 0.85, ease: 'back.out(1.2)',
          scrollTrigger: { trigger: containerRef.current, start: 'top 75%' }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-12 md:py-28 px-4 md:px-12 bg-bg-primary w-full relative">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
        className="mb-12 md:mb-16 text-center max-w-3xl mx-auto space-y-3 relative z-10"
      >
        <span className="font-jetbrains text-ink-muted text-xs block mb-2">// leadership</span>
        <h2 className="font-bricolage text-3xl md:text-6xl font-extrabold tracking-tight text-ink">
          <SplitText
            text="The people behind CreditBuddy."
            splitType="words"
            variant="blur"
            delay={50}
            textAlign="center"
            tag="span"
          />
        </h2>
        <p className="font-jakarta text-ink-muted text-xs md:text-base mt-2">
          Scroll down to meet our leadership team.
        </p>
      </motion.div>

      {/* Desktop Grid Layout (Laptop/Desktop) */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
        {TEAM.map((member, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`${member.color} brutal-card p-8 flex flex-col justify-between space-y-6 transition-transform hover:-translate-y-1 min-h-[240px]`}
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

              <p className="font-jakarta text-sm leading-relaxed font-medium opacity-90">
                {member.bio}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mobile Sticky Stacked Cards Layout */}
      <div className="block md:hidden max-w-4xl mx-auto space-y-6 pb-24 relative z-10">
        {TEAM.map((member, i) => {
          return (
            <div
              key={i}
              className={`team-sticky-card sticky ${member.topOffset} ${member.zIndex} w-full`}
            >
              <div
                className={`${member.color} brutal-card p-6 text-ink shadow-[8px_8px_0px_#14100F] border-[2px] border-ink rounded-3xl min-h-[180px] flex flex-col justify-between space-y-4 transition-transform hover:-translate-y-1`}
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white border-2 border-ink flex items-center justify-center font-bricolage font-extrabold text-ink text-lg shadow-[3px_3px_0px_#14100F] shrink-0">
                        {member.name[0]}
                      </div>
                      <div>
                        <h3 className="font-bricolage font-extrabold text-xl leading-snug">{member.name}</h3>
                        <p className="font-jetbrains text-[10px] font-bold uppercase tracking-wider opacity-80 mt-0.5">
                          {member.role}
                        </p>
                      </div>
                    </div>

                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-jetbrains text-[10px] font-bold inline-flex items-center gap-1 hover:underline underline-offset-4 brutal-pill bg-white/80 px-3 py-1 border border-ink text-ink shrink-0"
                    >
                      LinkedIn <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  <p className="font-jakarta text-xs leading-relaxed font-medium opacity-90 pt-3 border-t border-current/20">
                    {member.bio}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
