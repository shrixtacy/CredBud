'use client';

import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { usePathname } from 'next/navigation';

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
  const pathname = usePathname();
  const isHome = pathname === '/';
  
  // Start hidden on home page to allow the welcome intro to play, show instantly on subpages
  const [isVisible, setIsVisible] = useState(!isHome);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleStart = () => setIsVisible(false);
    const handleComplete = () => setIsVisible(true);

    window.addEventListener('intro-start', handleStart);
    window.addEventListener('intro-complete', handleComplete);

    // Safety fallback: if intro has already run
    if (typeof window !== 'undefined' && !(window as any).__introActive && isHome) {
      setIsVisible(true);
    }

    return () => {
      window.removeEventListener('intro-start', handleStart);
      window.removeEventListener('intro-complete', handleComplete);
    };
  }, [isHome]);

  // Scroll detection: hide header while scrolling/swiping, show when stationary
  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(scrollTimeout);

      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 200);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('touchmove', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('touchmove', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  const isHeaderVisible = isVisible && !isScrolling;

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
      { x: '0%', duration: 0.35, ease: 'power3.out' }
    );
    gsap.to(overlayRef.current, { opacity: 1, pointerEvents: 'auto', duration: 0.25 });
    gsap.fromTo(accentRef.current,
      { scaleY: 0, transformOrigin: 'top center' },
      { scaleY: 1, duration: 0.4, ease: 'power2.out', delay: 0.1 }
    );

    const hasAnimatedInSession = typeof window !== 'undefined' && sessionStorage.getItem('cb_sidebar_animated') === 'true';

    if (!hasAnimatedInSession) {
      gsap.fromTo('.nsl-item',
        { x: 30, opacity: 0 },
        { x: 0, opacity: 1, stagger: 0.03, duration: 0.3, ease: 'power2.out', delay: 0.12 }
      );
      gsap.fromTo('.nsl-footer',
        { opacity: 0, y: 8 },
        { opacity: 1, y: 0, duration: 0.25, ease: 'power2.out', delay: 0.25 }
      );
      if (typeof window !== 'undefined') {
        sessionStorage.setItem('cb_sidebar_animated', 'true');
      }
    } else {
      gsap.set('.nsl-item', { x: 0, opacity: 1 });
      gsap.set('.nsl-footer', { opacity: 1, y: 0 });
    }

    gsap.to(line1.current, { rotate: 45, y: 7, duration: 0.25, ease: 'power2.inOut' });
    gsap.to(line2.current, { opacity: 0, scaleX: 0, duration: 0.15 });
    gsap.to(line3.current, { rotate: -45, y: -7, duration: 0.25, ease: 'power2.inOut' });
  };

  const close = () => {
    gsap.to(sidebarRef.current,
      { x: '100%', duration: 0.28, ease: 'power3.in', onComplete: () => setIsOpen(false) }
    );
    gsap.to(overlayRef.current, { opacity: 0, pointerEvents: 'none', duration: 0.2 });
    gsap.to(line1.current, { rotate: 0, y: 0, duration: 0.25, ease: 'power2.inOut' });
    gsap.to(line2.current, { opacity: 1, scaleX: 1, duration: 0.18, delay: 0.05 });
    gsap.to(line3.current, { rotate: 0, y: 0, duration: 0.25, ease: 'power2.inOut' });
  };

  return (
    <>
      {/* Desktop Floating Header Wrapper */}
      <div 
        className="hidden md:block fixed top-5 left-0 right-0 z-[10001] px-6 select-none transition-all duration-300"
        style={{
          opacity: isHeaderVisible ? 1 : 0,
          transform: isHeaderVisible ? 'translateY(0)' : 'translateY(-20px)',
          pointerEvents: isHeaderVisible ? 'auto' : 'none'
        }}
      >
        <header className="w-full max-w-7xl h-16 bg-white brutal-border brutal-shadow-sm rounded-full flex items-center justify-between px-6 mx-auto">
          {/* Logo and branding */}
          <a href="/" className="flex items-center gap-3 hover:scale-105 active:scale-95 transition-transform duration-200">
            <img src="/images/creditbuddy-logo.png" alt="CreditBuddy Logo" className="h-8 w-auto object-contain" />
            <img src="/images/creditbuddy-text-logo.png" alt="CreditBuddy" className="h-5 w-auto object-contain hidden lg:block" />
          </a>

          {/* Navigation links */}
          <nav className="flex items-center gap-5 lg:gap-8">
            {NAV_LINKS.map((link, i) => {
              const isActive = pathname === link.href;
              return (
                <a
                  key={i}
                  href={link.href}
                  className={`font-jakarta text-xs lg:text-sm font-bold transition-colors duration-200 relative py-1 group ${
                    isActive ? 'text-accent-purple' : 'text-ink hover:text-accent-purple'
                  }`}
                >
                  {link.label}
                  <span className={`absolute bottom-0 left-0 h-[2px] bg-accent-purple transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </a>
              );
            })}
          </nav>

          {/* Action Button */}
          <a
            href="/students"
            className="font-bricolage text-xs uppercase tracking-wider bg-accent-lime brutal-border brutal-shadow-sm px-4 py-2 rounded-full hover:scale-105 hover:bg-accent-lime/90 active:scale-95 transition-all duration-200"
          >
            Get Started
          </a>
        </header>
      </div>

      {/* Mobile Top Header Bar */}
      <div 
        className="fixed top-4 left-0 right-0 z-[10001] px-4 md:hidden"
        style={{
          opacity: isHeaderVisible && !isOpen ? 1 : 0,
          transform: isHeaderVisible && !isOpen ? 'translateY(0)' : 'translateY(-20px)',
          transition: 'opacity 0.3s ease, transform 0.3s ease',
          pointerEvents: isHeaderVisible && !isOpen ? 'auto' : 'none'
        }}
      >
        <header className="w-full h-14 bg-white brutal-card px-4 flex items-center justify-between shadow-md">
          {/* Logo Branding */}
          <a href="/" className="flex items-center gap-2.5 select-none">
            <img src="/images/creditbuddy-logo.png" alt="CreditBuddy Logo" className="h-8 w-auto object-contain" />
            <img src="/images/creditbuddy-text-logo.png" alt="CreditBuddy" className="h-5 w-auto object-contain" />
          </a>

          {/* Trigger button */}
          <button
            id="nav-menu-trigger"
            onClick={isOpen ? close : open}
            aria-label="Toggle navigation"
            className="w-10 h-10 rounded-full bg-bg-primary brutal-border flex flex-col items-center justify-center gap-[4px] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
          >
            <span ref={line1} className="block w-4 h-[2px] bg-ink rounded-full origin-center" />
            <span ref={line2} className="block w-4 h-[2px] bg-ink rounded-full origin-center" />
            <span ref={line3} className="block w-4 h-[2px] bg-ink rounded-full origin-center" />
          </button>
        </header>
      </div>

      {/* Backdrop (Mobile) */}
      <div
        ref={overlayRef}
        onClick={close}
        className="fixed inset-0 z-[9998] bg-ink/30 backdrop-blur-sm md:hidden"
        style={{ opacity: 0, pointerEvents: 'none' }}
      />

      {/* Sidebar panel (Mobile) */}
      <div
        ref={sidebarRef}
        className="fixed top-0 right-0 h-screen z-[9999] flex md:hidden"
        style={{
          transform: 'translateX(100%)',
          width: '300px',
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
          <div className="flex items-center justify-between px-6 pt-8 pb-4">
            <span className="font-jetbrains text-ink-muted text-xs uppercase tracking-widest select-none">// navigation</span>
            <button
              onClick={close}
              className="w-9 h-9 rounded-full brutal-border text-ink hover:bg-accent-lime transition-all duration-200 flex items-center justify-center text-sm font-bold cursor-pointer"
            >
              ✕
            </button>
          </div>

          {/* Divider */}
          <div className="mx-6 h-[1.6px] bg-ink/10 mb-4" />

          {/* Nav links */}
          <nav className="flex-1 px-6 flex flex-col justify-center gap-0">
            {NAV_LINKS.map((link, i) => {
              const isActive = pathname === link.href;
              return (
                <a
                  key={i}
                  href={link.href}
                  className="nsl-item group relative flex items-center justify-between py-[13px] border-b border-ink/10 hover:border-ink transition-all duration-300 opacity-0"
                >
                  {/* Hover/Active bg */}
                  <div className={`absolute inset-y-0 -inset-x-3 rounded-xl transition-colors duration-300 ${
                    isActive ? 'bg-accent-lime/15' : 'bg-ink/0 group-hover:bg-accent-lime/20'
                  }`} />

                  <div className="relative flex items-center gap-5">
                    <span
                      className="font-jetbrains text-[11px] font-bold tracking-widest"
                      style={{ color: ACCENT_COLORS[i] }}
                    >
                      {link.num}
                    </span>
                    <span className={`font-bricolage font-extrabold text-[1.35rem] leading-none tracking-tight transition-colors duration-300 ${
                      isActive ? 'text-ink' : 'text-ink/70 group-hover:text-ink'
                    }`}>
                      {link.label}
                    </span>
                  </div>

                  {/* Arrow */}
                  <span className={`relative w-7 h-7 rounded-full brutal-border flex items-center justify-center transition-all duration-300 text-ink text-xs group-hover:translate-x-0.5 ${
                    isActive ? 'bg-accent-lime' : 'group-hover:bg-accent-lime'
                  }`}>
                    →
                  </span>
                </a>
              );
            })}
          </nav>

          {/* Footer */}
          <div className="nsl-footer px-6 py-8 opacity-0">
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
