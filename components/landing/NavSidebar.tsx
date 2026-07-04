'use client';

import React, { useRef, useState } from 'react';
import gsap from 'gsap';

const NAV_LINKS = [
  { num: '01', label: 'Home' },
  { num: '02', label: 'How It Works' },
  { num: '03', label: 'Students' },
  { num: '04', label: 'Ambassadors' },
  { num: '05', label: 'Blog' },
  { num: '06', label: 'About' },
  { num: '07', label: 'Contact' },
];

export const NavSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const sidebarRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const accentRef  = useRef<HTMLDivElement>(null);
  const line1      = useRef<HTMLSpanElement>(null);
  const line2      = useRef<HTMLSpanElement>(null);
  const line3      = useRef<HTMLSpanElement>(null);

  const open = () => {
    setIsOpen(true);
    gsap.fromTo(sidebarRef.current,
      { x: '100%' },
      { x: '0%', duration: 0.65, ease: 'power4.out' }
    );
    gsap.to(overlayRef.current, { opacity: 1, pointerEvents: 'auto', duration: 0.4 });
    gsap.fromTo(accentRef.current,
      { scaleY: 0, transformOrigin: 'top center' },
      { scaleY: 1, duration: 0.8, ease: 'power3.out', delay: 0.2 }
    );
    gsap.fromTo('.nsl-item',
      { x: 50, opacity: 0 },
      { x: 0, opacity: 1, stagger: 0.06, duration: 0.55, ease: 'power3.out', delay: 0.25 }
    );
    gsap.fromTo('.nsl-footer',
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out', delay: 0.6 }
    );
    gsap.to(line1.current, { rotate: 45,  y: 7,  duration: 0.35, ease: 'power3.inOut' });
    gsap.to(line2.current, { opacity: 0, scaleX: 0, duration: 0.2 });
    gsap.to(line3.current, { rotate: -45, y: -7, duration: 0.35, ease: 'power3.inOut' });
  };

  const close = () => {
    gsap.to(sidebarRef.current,
      { x: '100%', duration: 0.55, ease: 'power4.in', onComplete: () => setIsOpen(false) }
    );
    gsap.to(overlayRef.current, { opacity: 0, pointerEvents: 'none', duration: 0.3 });
    gsap.to(line1.current, { rotate: 0, y: 0,  duration: 0.35, ease: 'power3.inOut' });
    gsap.to(line2.current, { opacity: 1, scaleX: 1, duration: 0.25, delay: 0.1 });
    gsap.to(line3.current, { rotate: 0, y: 0,  duration: 0.35, ease: 'power3.inOut' });
  };

  return (
    <>
      {/* Trigger button */}
      <button
        id="nav-menu-trigger"
        onClick={isOpen ? close : open}
        aria-label="Toggle navigation"
        className="fixed top-6 right-6 z-[10001] w-11 h-11 rounded-full bg-white shadow-lg border border-ink/10 flex flex-col items-center justify-center gap-[5px] hover:scale-105 active:scale-95 transition-transform duration-200"
      >
        <span ref={line1} className="block w-5 h-[1.5px] bg-ink rounded-full origin-center" />
        <span ref={line2} className="block w-5 h-[1.5px] bg-ink rounded-full origin-center" />
        <span ref={line3} className="block w-5 h-[1.5px] bg-ink rounded-full origin-center" />
      </button>

      {/* Backdrop */}
      <div
        ref={overlayRef}
        onClick={close}
        className="fixed inset-0 z-[9998] bg-ink/20 backdrop-blur-sm"
        style={{ opacity: 0, pointerEvents: 'none' }}
      />

      {/* Sidebar panel */}
      <div
        ref={sidebarRef}
        className="fixed top-0 right-0 h-screen z-[9999] flex"
        style={{ transform: 'translateX(100%)', width: '420px' }}
      >
        {/* Accent gradient stripe */}
        <div
          ref={accentRef}
          className="w-[3px] h-full flex-shrink-0"
          style={{
            background: 'linear-gradient(to bottom, #2563EB, #10B981, #F5C518)',
            transform: 'scaleY(0)',
          }}
        />

        {/* White panel */}
        <div className="flex-1 bg-white flex flex-col h-full overflow-hidden shadow-2xl">

          {/* Header */}
          <div className="flex items-center justify-between px-8 pt-8 pb-6">
            <div>
              <p className="font-satoshi text-[10px] font-semibold uppercase tracking-[0.25em] text-ink/30 mb-1">
                Navigation
              </p>
              <span className="font-chillax text-lg font-bold text-ink tracking-tight">
                Credit<span className="editorial-italic text-accent-green normal-case font-light">Buddy</span>
              </span>
            </div>
            <button
              onClick={close}
              className="w-9 h-9 rounded-full border border-ink/15 text-ink/40 hover:text-ink hover:border-ink/30 transition-all duration-200 flex items-center justify-center text-sm"
            >
              ✕
            </button>
          </div>

          {/* Divider */}
          <div className="mx-8 h-px bg-ink/6 mb-4" />

          {/* Nav links */}
          <nav className="flex-1 px-8 flex flex-col justify-center gap-0">
            {NAV_LINKS.map((link, i) => (
              <a
                key={i}
                href="#"
                className="nsl-item group relative flex items-center justify-between py-[13px] border-b border-ink/[0.06] hover:border-ink/15 transition-all duration-300 opacity-0"
              >
                {/* Hover bg */}
                <div className="absolute inset-y-0 -inset-x-3 rounded-xl bg-ink/0 group-hover:bg-ink/[0.025] transition-colors duration-300" />

                <div className="relative flex items-center gap-5">
                  <span
                    className="font-satoshi text-[11px] font-bold tracking-widest"
                    style={{
                      color: ['#2563EB','#10B981','#F5C518','#2563EB','#10B981','#F5C518','#2563EB'][i],
                    }}
                  >
                    {link.num}
                  </span>
                  <span className="font-chillax font-bold text-[1.7rem] leading-none tracking-tight text-ink/60 group-hover:text-ink transition-colors duration-300">
                    {link.label}
                  </span>
                </div>

                {/* Arrow */}
                <span className="relative w-7 h-7 rounded-full border border-ink/10 group-hover:border-accent-blue group-hover:bg-accent-blue/10 flex items-center justify-center transition-all duration-300 text-ink/20 group-hover:text-accent-blue text-xs group-hover:translate-x-0.5">
                  →
                </span>
              </a>
            ))}
          </nav>

          {/* Footer */}
          <div className="nsl-footer px-8 py-8 opacity-0">
            <div className="h-px bg-ink/6 mb-6" />
            <p className="font-satoshi text-xs text-ink/35 leading-relaxed mb-5">
              India&apos;s student-first financial ecosystem.
              <br />Built for campus. Built for you.
            </p>
            <div className="flex items-center gap-5">
              {['IG', 'TW', 'LI'].map(s => (
                <a
                  key={s}
                  href="#"
                  className="font-satoshi text-[10px] font-bold uppercase tracking-widest text-ink/30 hover:text-accent-green transition-colors duration-200"
                >
                  {s}
                </a>
              ))}
              <span className="ml-auto font-satoshi text-[10px] text-ink/20">
                © 2025 CreditBuddy
              </span>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};
