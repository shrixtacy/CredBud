'use client';

import React, { useRef, useState } from 'react';
import gsap from 'gsap';

const NAV_LINKS = [
  { num: '01', label: 'Home', href: '/' },
  { num: '02', label: 'How It Works', href: '/how-it-works' },
  { num: '03', label: 'Students', href: '/students' },
  { num: '04', label: 'Ambassadors', href: '/ambassador' },
  { num: '05', label: 'Blog', href: '/blog' },
  { num: '06', label: 'About', href: '/about' },
  { num: '07', label: 'Contact', href: '/contact' },
];

const ACCENT_COLORS = ['#C8FF3D', '#7B5CFF', '#FF5A3C', '#35C8FF', '#FFD23F', '#C8FF3D', '#7B5CFF'];

export const NavSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const sidebarRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const accentRef = useRef<HTMLDivElement>(null);
  const line1 = useRef<HTMLSpanElement>(null);
  const line2 = useRef<HTMLSpanElement>(null);
  const line3 = useRef<HTMLSpanElement>(null);

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
    gsap.to(line1.current, { rotate: 45, y: 7, duration: 0.35, ease: 'power3.inOut' });
    gsap.to(line2.current, { opacity: 0, scaleX: 0, duration: 0.2 });
    gsap.to(line3.current, { rotate: -45, y: -7, duration: 0.35, ease: 'power3.inOut' });
  };

  const close = () => {
    gsap.to(sidebarRef.current,
      { x: '100%', duration: 0.55, ease: 'power4.in', onComplete: () => setIsOpen(false) }
    );
    gsap.to(overlayRef.current, { opacity: 0, pointerEvents: 'none', duration: 0.3 });
    gsap.to(line1.current, { rotate: 0, y: 0, duration: 0.35, ease: 'power3.inOut' });
    gsap.to(line2.current, { opacity: 1, scaleX: 1, duration: 0.25, delay: 0.1 });
    gsap.to(line3.current, { rotate: 0, y: 0, duration: 0.35, ease: 'power3.inOut' });
  };

  return (
    <>
      {/* Fixed Top Left Icon Logo Header */}
      <a
        href="/"
        aria-label="CreditBuddy Home"
        className="fixed top-5 left-6 z-[10001] w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-white brutal-border brutal-shadow-sm flex items-center justify-center hover:scale-105 active:scale-95 transition-transform duration-200 cursor-pointer select-none"
      >
        <img 
          src="/images/creditbuddy-logo.png" 
          alt="CreditBuddy Logo" 
          className="w-8 h-8 sm:w-9 sm:h-9 object-contain" 
        />
      </a>

      {/* Trigger button */}
      <button
        id="nav-menu-trigger"
        onClick={isOpen ? close : open}
        aria-label="Toggle navigation"
        suppressHydrationWarning
        className="fixed top-5 right-6 z-[10001] w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-white brutal-border brutal-shadow-sm flex flex-col items-center justify-center gap-[5px] hover:scale-105 active:scale-95 transition-transform duration-200 cursor-pointer"
      >
        <span ref={line1} className="block w-5 h-[2px] bg-ink rounded-full origin-center" />
        <span ref={line2} className="block w-5 h-[2px] bg-ink rounded-full origin-center" />
        <span ref={line3} className="block w-5 h-[2px] bg-ink rounded-full origin-center" />
      </button>

      {/* Backdrop */}
      <div
        ref={overlayRef}
        onClick={close}
        className="fixed inset-0 z-[9998] bg-ink/30 backdrop-blur-sm"
        style={{ opacity: 0, pointerEvents: 'none' }}
      />

      {/* Sidebar panel */}
      <div
        ref={sidebarRef}
        className="fixed top-0 right-0 h-screen z-[9999] flex"
        style={{
          transform: 'translateX(100%)',
          width: '420px',
          visibility: isOpen ? 'visible' : 'hidden'
        }}
      >
        {/* Accent gradient stripe */}
        <div
          ref={accentRef}
          className="w-[3px] h-full flex-shrink-0"
          style={{
            background: 'linear-gradient(to bottom, #C8FF3D, #7B5CFF, #FF5A3C, #35C8FF)',
            transform: 'scaleY(0)',
          }}
        />

        {/* Panel */}
        <div className="flex-1 bg-bg-primary brutal-border border-r-0 flex flex-col h-full overflow-hidden shadow-2xl">

          {/* Header */}
          <div className="flex items-center justify-between px-8 pt-8 pb-6">
            <div className="flex items-center gap-3">
              <img src="/images/creditbuddy-logo.png" alt="CreditBuddy Logo" className="h-8 w-auto object-contain" />
              <img src="/images/creditbuddy-text-logo.png" alt="CreditBuddy" className="h-6 w-auto object-contain" />
            </div>
            <button
              onClick={close}
              className="w-9 h-9 rounded-full brutal-border text-ink hover:bg-accent-lime transition-all duration-200 flex items-center justify-center text-sm font-bold cursor-pointer"
            >
              ✕
            </button>
          </div>

          {/* Divider */}
          <div className="mx-8 h-[1.6px] bg-ink/10 mb-4" />

          {/* Nav links */}
          <nav className="flex-1 px-8 flex flex-col justify-center gap-0">
            {NAV_LINKS.map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="nsl-item group relative flex items-center justify-between py-[13px] border-b border-ink/10 hover:border-ink transition-all duration-300 opacity-0"
              >
                {/* Hover bg */}
                <div className="absolute inset-y-0 -inset-x-3 rounded-xl bg-ink/0 group-hover:bg-accent-lime/20 transition-colors duration-300" />

                <div className="relative flex items-center gap-5">
                  <span
                    className="font-jetbrains text-[11px] font-bold tracking-widest"
                    style={{ color: ACCENT_COLORS[i] }}
                  >
                    {link.num}
                  </span>
                  <span className="font-bricolage font-extrabold text-[1.7rem] leading-none tracking-tight text-ink/70 group-hover:text-ink transition-colors duration-300">
                    {link.label}
                  </span>
                </div>

                {/* Arrow */}
                <span className="relative w-7 h-7 rounded-full brutal-border group-hover:bg-accent-lime flex items-center justify-center transition-all duration-300 text-ink text-xs group-hover:translate-x-0.5">
                  →
                </span>
              </a>
            ))}
          </nav>

          {/* Footer */}
          <div className="nsl-footer px-8 py-8 opacity-0">
            <div className="h-[1.6px] bg-ink/10 mb-6" />
            <p className="font-jakarta text-xs text-ink-muted leading-relaxed mb-5">
              India&apos;s student-first financial ecosystem.
              <br />Built for campus. Built for you.
            </p>
            <div className="flex items-center gap-5">
              {['IG', 'TW', 'LI'].map(s => (
                <a
                  key={s}
                  href="#"
                  className="font-jetbrains text-[10px] font-bold uppercase tracking-widest text-ink/40 hover:text-accent-purple transition-colors duration-200"
                >
                  {s}
                </a>
              ))}
              <span className="ml-auto font-jetbrains text-[10px] text-ink/30">
                © 2026 CreditBuddy
              </span>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};
