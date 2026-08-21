'use client';

import React, { useRef, useEffect } from 'react';
import { UserCheck, Megaphone, CheckSquare, ClipboardList, Briefcase, Gift, GraduationCap, Heart } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const GIGS = [
  {
    icon: <UserCheck className="w-5 h-5" />,
    title: 'Campus Ambassador',
    pay: '₹5k-15k/mo',
    color: 'bg-accent-gold text-ink',
    colSpan: 'col-span-1 md:col-span-2',
  },
  {
    icon: <Megaphone className="w-5 h-5" />,
    title: 'Brand Promotions',
    pay: 'per campaign',
    color: 'bg-accent-cyan text-ink',
    colSpan: 'col-span-1',
  },
  {
    icon: <CheckSquare className="w-5 h-5" />,
    title: 'Micro Tasks',
    pay: '₹20-200 each',
    color: 'bg-accent-lime text-ink',
    colSpan: 'col-span-1',
  },
  {
    icon: <ClipboardList className="w-5 h-5" />,
    title: 'Surveys',
    pay: '₹50 avg',
    color: 'bg-accent-coral text-ink',
    colSpan: 'col-span-1',
  },
  {
    icon: <Briefcase className="w-5 h-5" />,
    title: 'Freelance Gigs',
    pay: 'you set it',
    color: 'bg-accent-purple text-white',
    colSpan: 'col-span-1 md:col-span-2',
  },
  {
    icon: <Gift className="w-5 h-5" />,
    title: 'Referrals',
    pay: '₹250 / friend',
    color: 'bg-accent-gold text-ink',
    colSpan: 'col-span-1',
  },
  {
    icon: <GraduationCap className="w-5 h-5" />,
    title: 'Internships',
    pay: 'stipend',
    color: 'bg-accent-cyan text-ink',
    colSpan: 'col-span-1',
  },
  {
    icon: <Heart className="w-5 h-5" />,
    title: 'Community',
    pay: 'rewards + rep',
    color: 'bg-accent-lime text-ink',
    colSpan: 'col-span-1 md:col-span-2',
  },
];

export const CampusGigsBento = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo('.gig-card-item',
        { y: 60, opacity: 0, scale: 0.92 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          stagger: 0.08,
          duration: 0.85,
          ease: 'back.out(1.4)',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 75%',
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-28 px-6 md:px-12 bg-ink text-bg-primary w-full">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="font-bricolage text-4xl md:text-6xl font-extrabold tracking-tight leading-tight max-w-2xl">
              Money doesn&apos;t grow on trees. <span className="text-accent-lime">It grows on campus.</span>
            </h2>
          </div>
          <p className="font-jetbrains text-bg-primary/70 text-xs md:text-sm max-w-xs">
            Pick up gigs between lectures. Get paid to your CreditBuddy wallet, instantly.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {GIGS.map((gig, i) => (
            <div
              key={i}
              className={`gig-card-item ${gig.colSpan} ${gig.color} brutal-card p-6 min-h-[140px] flex flex-col justify-between hover:translate-y-[-4px] transition-transform duration-300`}
              style={{ boxShadow: '4px 4px 0px #FBF7EF' }}
            >
              <div className="mb-4">{gig.icon}</div>
              <div>
                <h3 className="font-bricolage font-extrabold text-xl leading-snug">{gig.title}</h3>
                <p className="font-jetbrains text-xs opacity-75 mt-1">{gig.pay}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
