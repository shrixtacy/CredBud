'use client';

import React from 'react';
import { motion } from 'motion/react';
import {
  GraduationCap,
  Search,
  ShieldCheck,
  HeartHandshake,
  BookOpen,
  TrendingUp,
} from 'lucide-react';
import { SplitText } from '@/components/landing/shared/SplitText';

const VALUES = [
  {
    id: '01',
    title: 'Student-first. Always.',
    desc: 'Every product decision starts with one single question: is this actually good for the student? If the answer is no, it doesn’t get built.',
    icon: GraduationCap,
    badge: '01 // CORE PLEDGE',
    color: 'bg-accent-lime text-ink',
    colSpan: 'lg:col-span-2',
    tilt: '-rotate-1 md:-rotate-2',
    widget: '✓ 100% Verified Good For Students',
  },
  {
    id: '02',
    title: 'Compliance is non-negotiable.',
    desc: 'RBI-aligned, legal-first approach. We build on strong regulatory frameworks for long-term trust.',
    icon: ShieldCheck,
    badge: '02 // TRUST',
    color: 'bg-accent-purple text-white',
    colSpan: 'lg:col-span-1',
    tilt: 'rotate-1 md:rotate-2',
    widget: '● RBI-Aligned Framework',
  },
  {
    id: '03',
    title: 'Radical transparency.',
    desc: 'No small print. No surprises. Every fee and repayment schedule is displayed 100% upfront.',
    icon: Search,
    badge: '03 // CLEAR',
    color: 'bg-accent-gold text-ink',
    colSpan: 'lg:col-span-1',
    tilt: '-rotate-1 md:-rotate-[1.5deg]',
    widget: 'Zero Hidden Charges',
  },
  {
    id: '04',
    title: 'Zero harassment. Full stop.',
    desc: 'No aggressive calls, no threat messages, no contacting friends. Just respectful communication always.',
    icon: HeartHandshake,
    badge: '04 // RESPECT',
    color: 'bg-accent-coral text-white',
    colSpan: 'lg:col-span-1',
    tilt: 'rotate-1 md:rotate-[1.8deg]',
    widget: 'Zero Call Guarantee',
  },
  {
    id: '05',
    title: 'Education is a right.',
    desc: 'Financial literacy shouldn’t be behind a paywall. We equip students with practical money skills.',
    icon: BookOpen,
    badge: '05 // KNOWLEDGE',
    color: 'bg-accent-cyan text-ink',
    colSpan: 'lg:col-span-1',
  },
];

export const AboutValuesGrid = () => {
  return (
    <section className="py-12 md:py-28 px-4 md:px-12 bg-bg-secondary border-t-[1.6px] border-b-[1.6px] border-ink w-full relative">
      <div className="max-w-7xl mx-auto space-y-8 md:space-y-14 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto space-y-3"
        >
          <span className="font-jetbrains text-xs font-bold text-ink brutal-pill bg-accent-gold px-4 py-1.5 border border-ink inline-block">
            // core principles
          </span>
          <h2 className="font-bricolage text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-ink">
            <SplitText
              text="The values behind CreditBuddy."
              splitType="words"
              variant="rise"
              delay={50}
              textAlign="center"
              tag="span"
            />
          </h2>
          <p className="font-jakarta text-ink-muted text-xs md:text-base font-medium">
            Explore our core commitments built for Indian students.
          </p>
        </motion.div>

        {/* Bento Grid Container with generous padding to prevent shadow/border cutoff */}
        <div className="w-full relative">
          <div className="flex overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4 md:px-6 py-4 no-scrollbar snap-x snap-mandatory">
            {VALUES.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`${item.color} ${item.colSpan} brutal-card p-6 md:p-8 w-[290px] md:w-auto shrink-0 snap-center md:shrink flex flex-col justify-between space-y-6 md:space-y-8 transition-all duration-300 ease-out hover:scale-[1.02] hover:-translate-y-2 hover:z-20 cursor-pointer group min-h-[240px] md:min-h-[260px]`}
                  style={{ boxShadow: '8px 8px 0px #14100F' }}
                >
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-white border-2 border-ink rounded-xl flex items-center justify-center shadow-[3px_3px_0px_#14100F] group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5 md:w-6 md:h-6 text-ink" />
                      </div>
                      <span className="font-jetbrains text-[10px] md:text-xs font-bold opacity-80 brutal-pill bg-white/20 px-2.5 md:px-3 py-1 border border-current">
                        {item.badge}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-bricolage font-extrabold text-xl md:text-3xl tracking-tight mb-2 leading-tight">
                        {item.title}
                      </h3>
                      <p className="font-jakarta text-xs md:text-base opacity-90 font-medium leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 md:pt-4 border-t border-current/20">
                    <span className="font-jetbrains text-[10px] md:text-xs font-extrabold brutal-pill bg-white text-ink px-3 py-1.5 border border-ink inline-block shadow-[2px_2px_0px_#14100F]">
                      {item.widget}
                    </span>
                  </div>
                </motion.div>
              );
            })}

            {/* Full-Width Feature Card 6: Long Game Always */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="lg:col-span-3 bg-white text-ink brutal-card p-6 md:p-10 w-[290px] md:w-auto shrink-0 snap-center md:shrink flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-8 transition-all duration-300 ease-out hover:scale-[1.01] hover:-translate-y-2 hover:z-20 cursor-pointer group"
              style={{ boxShadow: '8px 8px 0px #14100F' }}
            >
              <div className="space-y-3 max-w-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-accent-gold border-2 border-ink rounded-xl flex items-center justify-center shadow-[3px_3px_0px_#14100F] group-hover:scale-110 transition-transform">
                    <TrendingUp className="w-5 h-5 md:w-6 md:h-6 text-ink" />
                  </div>
                  <span className="font-jetbrains text-[10px] md:text-xs font-bold text-ink brutal-pill bg-accent-gold/30 px-3 py-1 border border-ink">
                    06 // SUSTAINABILITY
                  </span>
                </div>
                <h3 className="font-bricolage font-extrabold text-2xl md:text-3xl text-ink">
                  Long game, always.
                </h3>
                <p className="font-jakarta text-ink-muted text-xs md:text-base font-medium leading-relaxed">
                  We build systems that help students grow for life — helping you graduate with a verified credit score and financial maturity.
                </p>
              </div>

              <div className="bg-bg-primary border-2 border-ink rounded-2xl p-4 md:p-6 shadow-[4px_4px_0px_#14100F] flex items-center gap-4 md:gap-6 shrink-0 w-full md:w-auto justify-around">
                <div className="text-center px-3 md:px-4 border-r border-ink/20">
                  <span className="font-jetbrains text-[10px] md:text-xs text-ink-muted block uppercase font-semibold mb-1">Day 1</span>
                  <span className="font-bricolage text-base md:text-xl font-extrabold text-ink">Zero Credit</span>
                </div>
                <div className="text-center px-3 md:px-4">
                  <span className="font-jetbrains text-[10px] md:text-xs text-accent-purple font-bold block uppercase mb-1">Graduation</span>
                  <span className="font-bricolage text-lg md:text-2xl font-extrabold text-accent-purple">750+ CIBIL</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
};
