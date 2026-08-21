'use client';

import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Fingerprint, Wallet, ArrowRight, BookOpen, Award, TrendingUp } from 'lucide-react';
import { useLenis } from '@studio-freight/react-lenis';

gsap.registerPlugin(ScrollTrigger);

export const InteractiveFlow = () => {
  const lenis = useLenis();
  const phoneContainerRef = useRef<HTMLDivElement>(null);
  const outerContainerRef = useRef<HTMLDivElement>(null);
  const innerContainerRef = useRef<HTMLElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const leftColumnRef = useRef<HTMLDivElement>(null);

  // States
  const [isBooted, setIsBooted] = useState(false);
  const [isHolding, setIsHolding] = useState(false);
  const [bootProgress, setBootProgress] = useState(0);
  const [isLocked, setIsLocked] = useState(false);

  const progressRef = useRef(0);
  const animationFrameRef = useRef<number | null>(null);

  // 1. Lock/Unlock scrolling side effects
  useEffect(() => {
    const preventScroll = (e: Event) => {
      e.preventDefault();
    };

    const preventKeys = (e: KeyboardEvent) => {
      const keys = ['Space', 'ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'End', 'Home'];
      if (keys.includes(e.code)) {
        e.preventDefault();
      }
    };

    if (isLocked) {
      window.addEventListener('wheel', preventScroll, { passive: false });
      window.addEventListener('touchmove', preventScroll, { passive: false });
      window.addEventListener('keydown', preventKeys, { passive: false });
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      lenis?.stop();
    } else {
      window.removeEventListener('wheel', preventScroll);
      window.removeEventListener('touchmove', preventScroll);
      window.removeEventListener('keydown', preventKeys);
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      lenis?.start();
    }

    return () => {
      window.removeEventListener('wheel', preventScroll);
      window.removeEventListener('touchmove', preventScroll);
      window.removeEventListener('keydown', preventKeys);
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      lenis?.start();
    };
  }, [isLocked, lenis]);

  // 2. Snap-lock trigger (runs only when device is unbooted)
  useEffect(() => {
    if (isBooted) return;

    const lockTrigger = ScrollTrigger.create({
      trigger: outerContainerRef.current,
      start: 'top top',
      end: 'top+=10 top',
      onEnter: () => {
        if (!isBooted) {
          if (lenis && outerContainerRef.current) {
            lenis.scrollTo(outerContainerRef.current, { immediate: true });
          } else {
            window.scrollTo({
              top: outerContainerRef.current?.offsetTop || 0,
              behavior: 'auto',
            });
          }
          setIsLocked(true);
        }
      },
      onEnterBack: () => {
        if (!isBooted) {
          if (lenis && outerContainerRef.current) {
            lenis.scrollTo(outerContainerRef.current, { immediate: true });
          } else {
            window.scrollTo({
              top: outerContainerRef.current?.offsetTop || 0,
              behavior: 'auto',
            });
          }
          setIsLocked(true);
        }
      },
    });

    return () => {
      lockTrigger.kill();
    };
  }, [isBooted, lenis]);

  // Listen to lenis scroll directly for snap-locking to prevent fast scrolling bypass
  useLenis((lenisInstance) => {
    if (!isBooted && !isLocked) {
      const topOfSection = outerContainerRef.current?.offsetTop || 0;
      if (lenisInstance.scroll >= topOfSection - 10) {
        if (outerContainerRef.current) {
          lenisInstance.scrollTo(outerContainerRef.current, { immediate: true });
        }
        setIsLocked(true);
      }
    }
  }, [isBooted, isLocked]);

  // 3. Press and hold timer logic
  const startHolding = () => {
    if (isBooted) return;
    setIsHolding(true);

    const startTime = performance.now() - (progressRef.current / 100) * 2000; // Hold for 2 seconds

    const updateProgress = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min((elapsed / 2000) * 100, 100);
      progressRef.current = progress;
      setBootProgress(progress);

      if (progress < 100) {
        animationFrameRef.current = requestAnimationFrame(updateProgress);
      } else {
        // Successful Boot
        setIsBooted(true);
        setIsLocked(false);
        setIsHolding(false);
        setBootProgress(100);
      }
    };

    animationFrameRef.current = requestAnimationFrame(updateProgress);
  };

  const stopHolding = () => {
    setIsHolding(false);
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    // Decays progress back to 0 in 350ms
    const startTime = performance.now();
    const startProgress = progressRef.current;

    const decayProgress = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.max(startProgress - (elapsed / 350) * 100, 0);
      progressRef.current = progress;
      setBootProgress(progress);

      if (progress > 0) {
        animationFrameRef.current = requestAnimationFrame(decayProgress);
      }
    };

    animationFrameRef.current = requestAnimationFrame(decayProgress);
  };

  // 4. Scroll triggered sequence (Active only after booted)
  useEffect(() => {
    if (!isBooted) return;

    let ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Desktop layout: phone shifts side-to-side dynamically
      mm.add("(min-width: 768px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: outerContainerRef.current,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 1,
            pin: innerContainerRef.current,
            invalidateOnRefresh: true,
          },
        });

        // --- PHONE ROTATION ---
        tl.to(phoneRef.current, {
          rotateY: -15,
          rotateX: 10,
          z: -50,
          ease: 'none',
        }, 0);

        // --- PHASE 1: BORROW ---
        // Motion trail stagger paths
        tl.fromTo('.trail-ghost-borrow-1', { x: 0, y: 0 }, { x: -8, y: 2, duration: 1.2 }, 0.1);
        tl.fromTo('.trail-ghost-borrow-2', { x: 0, y: 0 }, { x: -16, y: 4, duration: 1.2 }, 0.2);
        tl.fromTo('.trail-ghost-borrow-3', { x: 0, y: 0 }, { x: -24, y: 6, duration: 1.2 }, 0.3);

        // Fade in left-side borrow description block
        tl.fromTo('.desc-borrow', 
          { opacity: 0, y: '8vh' },
          { opacity: 1, y: '0vh', pointerEvents: 'auto', duration: 1 },
          0.4
        );

        // --- PHASE 2: MORPH & FLOW TO EARN ---
        // Move phone from right to left
        tl.to(phoneContainerRef.current, {
          x: '-46vw',
          duration: 2,
          ease: 'power2.inOut',
        }, 2);

        // Move Earn description block to the right and fade in
        tl.fromTo('.desc-earn',
          { opacity: 0, x: '46vw', y: '8vh' },
          { opacity: 1, x: '46vw', y: '0vh', pointerEvents: 'auto', duration: 1 },
          2.5
        );

        // Motion trail switches target direction
        tl.to('.trail-ghost-earn-1', { x: 8, y: 2, duration: 1.5 }, 2.1);
        tl.to('.trail-ghost-earn-2', { x: 16, y: 4, duration: 1.5 }, 2.2);
        tl.to('.trail-ghost-earn-3', { x: 24, y: 6, duration: 1.5 }, 2.3);

        // Cross-fade Borrow description block out
        tl.to('.desc-borrow', { opacity: 0, y: '-4vh', pointerEvents: 'none', duration: 0.8 }, 2);

        // --- PHASE 3: MORPH & FLOW TO LEARN ---
        // Move phone back to the right
        tl.to(phoneContainerRef.current, {
          x: '0vw',
          duration: 2,
          ease: 'power2.inOut',
        }, 4.5);

        // Motion trail targets left
        tl.to('.trail-ghost-learn-1', { x: -8, y: 2, duration: 1.5 }, 4.6);
        tl.to('.trail-ghost-learn-2', { x: -16, y: 4, duration: 1.5 }, 4.7);
        tl.to('.trail-ghost-learn-3', { x: -24, y: 6, duration: 1.5 }, 4.8);

        // Cross-fade Earn description block to Learn description block
        tl.to('.desc-earn', { opacity: 0, y: '-4vh', pointerEvents: 'none', duration: 0.8 }, 4.5);
        tl.fromTo('.desc-learn',
          { opacity: 0, y: '8vh' },
          { opacity: 1, y: '0vh', pointerEvents: 'auto', duration: 1 },
          5.0
        );
      });

      // Mobile layout: elements remain centered and stack nicely vertically
      mm.add("(max-width: 767px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: outerContainerRef.current,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 1,
            pin: innerContainerRef.current,
            invalidateOnRefresh: true,
          },
        });

        // Phone rotation
        tl.to(phoneRef.current, {
          rotateY: -10,
          rotateX: 5,
          z: -30,
          ease: 'none',
        }, 0);

        // --- PHASE 1: BORROW ---
        tl.fromTo('.desc-borrow', 
          { opacity: 0, y: '8vh' },
          { opacity: 1, y: '0vh', pointerEvents: 'auto', duration: 1 },
          0.4
        );

        // --- PHASE 2: EARN ---
        tl.to('.desc-borrow', { opacity: 0, y: '-4vh', pointerEvents: 'none', duration: 0.8 }, 2);
        tl.fromTo('.desc-earn',
          { opacity: 0, y: '8vh' },
          { opacity: 1, y: '0vh', pointerEvents: 'auto', duration: 1 },
          2.5
        );

        // --- PHASE 3: LEARN ---
        tl.to('.desc-earn', { opacity: 0, y: '-4vh', pointerEvents: 'none', duration: 0.8 }, 4.5);
        tl.fromTo('.desc-learn',
          { opacity: 0, y: '8vh' },
          { opacity: 1, y: '0vh', pointerEvents: 'auto', duration: 1 },
          5.0
        );
      });

    }, outerContainerRef);

    return () => ctx.revert();
  }, [isBooted]);

  return (
    <div ref={outerContainerRef} className="relative w-full min-h-[400vh] bg-ink">
      
      {/* Full-viewport scene display container */}
      <section 
        ref={innerContainerRef} 
        className="h-screen w-full flex flex-col md:flex-row items-center justify-between relative overflow-hidden bg-ink z-20 px-6 md:px-12 py-12"
      >
        {/* Glow behind phone and background */}
        <div className="absolute w-[450px] h-[450px] top-1/2 right-[10%] -translate-y-1/2 bg-accent-purple/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute w-[350px] h-[350px] top-1/3 left-[5%] bg-accent-lime/10 rounded-full blur-[100px] pointer-events-none" />

        {/* Left Column: Flow Context Descriptions */}
        <div ref={leftColumnRef} className="w-full md:w-[45%] h-[55vh] md:h-[70vh] relative flex flex-col justify-start md:justify-center items-start pt-16 md:pt-0 z-40">
          
          {/* Pre-Boot context display */}
          {!isBooted && (
            <div className="flex flex-col items-start space-y-3 sm:space-y-5 animate-fade-in pr-10 md:pr-0">
              <span className="font-jetbrains text-[10px] sm:text-xs font-normal text-ink brutal-pill bg-accent-lime px-3 sm:px-4 py-1 sm:py-1.5">
                // financial operating system
              </span>
              <h2 className="font-bricolage text-3xl sm:text-4xl md:text-6xl font-extrabold text-white leading-tight">
                Unlock the <br />CreditBuddy App.
              </h2>
              <p className="font-jakarta text-xs sm:text-base md:text-lg text-white/70 leading-relaxed max-w-xs sm:max-w-sm">
                India&apos;s student-first financial ecosystem. Touch and hold the fingerprint scanner on the phone to boot the interface and unlock the scroll path.
              </p>
            </div>
          )}

          {/* Dynamic Scroll descriptions (Title text exactly over paragraph text) */}
          <div className="desc-borrow absolute inset-0 flex flex-col items-start justify-start md:justify-center pt-16 md:pt-0 space-y-2.5 sm:space-y-4 opacity-0 pointer-events-none pr-8 md:pr-0">
            {/* Title directly over paragraph text */}
            <div className="word-borrow relative flex items-center justify-start font-bricolage font-extrabold text-3xl sm:text-5xl md:text-[4.5rem] lg:text-[5.5rem] uppercase select-none leading-none mb-1">
              <span className="trail-ghost trail-ghost-borrow-3 absolute text-accent-lime/10">BORROW</span>
              <span className="trail-ghost trail-ghost-borrow-2 absolute text-accent-lime/20">BORROW</span>
              <span className="trail-ghost trail-ghost-borrow-1 absolute text-accent-lime/30">BORROW</span>
              <span className="relative text-accent-lime" style={{ textShadow: 'none' }}>BORROW</span>
            </div>

            <span className="font-jetbrains text-[10px] sm:text-xs font-normal text-ink brutal-pill bg-accent-lime px-3 sm:px-4 py-1 sm:py-1.5">
              // borrow feature
            </span>
            <h3 className="font-bricolage text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-none">
              Need Instant Cash?
            </h3>
            <p className="font-jakarta text-xs sm:text-base md:text-lg text-white/70 leading-relaxed max-w-xs sm:max-w-sm">
              Tuition payments, exam registrations, or campus needs? Get approved in 60 seconds with 0% interest for the first 30 days. Linked securely to your student ID.
            </p>
          </div>

          <div className="desc-earn absolute inset-0 flex flex-col items-start justify-start md:justify-center pt-16 md:pt-0 space-y-2.5 sm:space-y-4 opacity-0 pointer-events-none pr-8 md:pr-0">
            {/* Title directly over paragraph text */}
            <div className="word-earn relative flex items-center justify-start font-bricolage font-extrabold text-3xl sm:text-5xl md:text-[4.5rem] lg:text-[5.5rem] uppercase select-none leading-none mb-1">
              <span className="trail-ghost trail-ghost-earn-3 absolute text-accent-gold/10">EARN</span>
              <span className="trail-ghost trail-ghost-earn-2 absolute text-accent-gold/20">EARN</span>
              <span className="trail-ghost trail-ghost-earn-1 absolute text-accent-gold/30">EARN</span>
              <span className="relative text-accent-gold">EARN</span>
            </div>

            <span className="font-jetbrains text-[10px] sm:text-xs font-normal text-ink brutal-pill bg-accent-gold px-3 sm:px-4 py-1 sm:py-1.5">
              // earn feature
            </span>
            <h3 className="font-bricolage text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-none">
              Grow Your Balance.
            </h3>
            <p className="font-jakarta text-xs sm:text-base md:text-lg text-white/70 leading-relaxed max-w-xs sm:max-w-sm">
              Monetize your spare time. Pick up verified campus gigs, complete student challenges, or leverage our powerful referral network. Get paid directly to your wallet.
            </p>
          </div>

          <div className="desc-learn absolute inset-0 flex flex-col items-start justify-start md:justify-center pt-16 md:pt-0 space-y-2.5 sm:space-y-4 opacity-0 pointer-events-none pr-8 md:pr-0">
            {/* Title directly over paragraph text */}
            <div className="word-learn relative flex items-center justify-start font-bricolage font-extrabold text-3xl sm:text-5xl md:text-[4.5rem] lg:text-[5.5rem] uppercase select-none leading-none mb-1">
              <span className="trail-ghost trail-ghost-learn-3 absolute text-accent-purple/10">LEARN</span>
              <span className="trail-ghost trail-ghost-learn-2 absolute text-accent-purple/20">LEARN</span>
              <span className="trail-ghost trail-ghost-learn-3 absolute text-accent-purple/30">LEARN</span>
              <span className="relative text-accent-purple">LEARN</span>
            </div>

            <span className="font-jetbrains text-[10px] sm:text-xs font-normal text-white brutal-pill bg-accent-purple px-3 sm:px-4 py-1 sm:py-1.5">
              // learn feature
            </span>
            <h3 className="font-bricolage text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-none">
              Real-World Skills.
            </h3>
            <p className="font-jakarta text-xs sm:text-base md:text-lg text-white/70 leading-relaxed max-w-xs sm:max-w-sm">
              No textbook fluff. Master budgeting, taxes, card building, and mutual funds via interactive, byte-sized modules. Secure your future before you graduate.
            </p>
          </div>

        </div>

        {/* Right Column: 3D Phone Container */}
        <div className="w-full md:w-[50%] h-auto md:h-[75vh] flex items-end justify-end md:items-center md:justify-center absolute bottom-4 right-14 sm:bottom-6 sm:right-24 md:relative md:bottom-auto md:right-auto z-20 pointer-events-auto">
          
          {/* 3D iPhone Model */}
          <div ref={phoneContainerRef} className="iphone-container w-[280px] h-[580px] md:w-[300px] md:h-[610px] scale-[0.60] xs:scale-[0.66] sm:scale-80 md:scale-100 origin-center md:-translate-x-[6vw]">
            <div 
              ref={phoneRef}
              className="w-full h-full iphone-frame flex flex-col"
              style={{
                borderColor: '#C8FF3D',
                borderWidth: '4px',
                borderStyle: 'solid',
                boxShadow: '10px 10px 0px #C8FF3D',
                transform: 'rotateY(20deg) rotateX(10deg)',
                transition: isHolding ? 'transform 0.25s ease-out' : 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)'
              }}
            >
              <div className="iphone-island border border-[#C8FF3D]/40" />
              <div className="iphone-glare" />

              {/* Screen Inner view */}
              <div className="w-full h-full bg-bg-primary relative p-4 pt-10 flex flex-col justify-between overflow-hidden">
                
                {/* --- MOCK BOOT / LOCK SCREEN (Active when not booted) --- */}
                {!isBooted && (
                  <div className="absolute inset-0 bg-bg-primary flex flex-col items-center justify-between p-6 pt-12 pb-16 z-30 select-none">
                    
                    {/* Top status */}
                    <div className="w-full flex justify-between text-[10px] text-ink-muted font-bold uppercase tracking-widest font-jetbrains">
                      <span>CB OS v1.2</span>
                      <span>SECURED</span>
                    </div>

                    {/* Logo/Name */}
                    <div className="text-center">
                      <h3 className="font-bricolage text-3xl font-extrabold text-ink tracking-tight uppercase">
                        Credit<span className="text-accent-purple">Buddy</span>
                      </h3>
                      <p className="font-jetbrains text-[9px] text-ink-muted uppercase tracking-[0.25em] mt-1.5">
                        India&apos;s Student Network
                      </p>
                    </div>

                    {/* Touch ID Trigger */}
                    <div className="flex flex-col items-center space-y-4 relative">
                      <button
                        onMouseDown={startHolding}
                        onMouseUp={stopHolding}
                        onMouseLeave={stopHolding}
                        onTouchStart={startHolding}
                        onTouchEnd={stopHolding}
                        className={`w-20 h-20 rounded-full brutal-border bg-accent-lime/20 flex items-center justify-center relative cursor-pointer outline-none transition-all duration-300 select-none ${
                          isHolding ? 'scale-90 bg-accent-lime/50 shadow-lg' : 'hover:scale-105 active:scale-95'
                        }`}
                      >
                        {/* Circular Progress Loader SVG */}
                        <svg className="absolute inset-0 w-full h-full -rotate-90">
                          <circle
                            cx="50%"
                            cy="50%"
                            r="36"
                            stroke="url(#progress-gradient)"
                            strokeWidth="3.5"
                            fill="transparent"
                            strokeDasharray={2 * Math.PI * 36}
                            strokeDashoffset={2 * Math.PI * 36 * (1 - bootProgress / 100)}
                            strokeLinecap="round"
                            className="transition-all"
                          />
                        </svg>

                        <Fingerprint className={`w-8 h-8 transition-colors duration-300 ${isHolding ? 'text-accent-purple' : 'text-ink/40'}`} />
                      </button>

                      <div className="text-center">
                        <span className="block text-[8px] font-bold uppercase tracking-[0.2em] text-accent-purple animate-pulse font-jetbrains">
                          {isHolding ? 'Booting App...' : 'Hold Finger to Boot'}
                        </span>
                        <span className="block text-[7px] text-ink-muted uppercase tracking-[0.1em] mt-1 font-jetbrains">
                          Keep pressed for 2 seconds
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {/* --- ACTIVE FINTECH UI SCREEN (Booted) --- */}
                {isBooted && (
                  <div className="w-full h-full flex flex-col justify-between pt-4 pb-2 animate-fade-in relative z-20">
                    
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-7 h-7 rounded-full bg-accent-lime flex items-center justify-center text-[10px] font-bold text-ink brutal-border">
                          S
                        </div>
                        <div>
                          <span className="block text-[8px] text-ink-muted uppercase tracking-widest leading-none font-jetbrains">Hi, student</span>
                          <span className="block text-[10px] font-bold text-ink leading-none mt-0.5 font-jakarta">Sneha Sharma</span>
                        </div>
                      </div>
                      <div className="px-2 py-0.5 rounded-full brutal-border bg-accent-purple text-[7px] font-bold text-white tracking-wider font-jetbrains">
                        LVL 3
                      </div>
                    </div>

                    {/* Balance Card Widget */}
                    <div className="rounded-2xl bg-ink p-3 brutal-border relative overflow-hidden" style={{ boxShadow: '4px 4px 0px #7B5CFF' }}>
                      <div className="flex justify-between items-start">
                        <div>
                          <span className="text-[7px] text-bg-primary/50 uppercase tracking-widest font-bold font-jetbrains">Total Balance</span>
                          <h4 className="font-bricolage text-lg font-extrabold text-bg-primary mt-0.5">₹14,500</h4>
                        </div>
                        <Wallet className="w-4 h-4 text-accent-lime" />
                      </div>
                      <div className="flex justify-between mt-3 gap-2">
                        <button className="flex-1 py-1 rounded-lg bg-accent-lime text-[8px] font-bold text-ink cursor-pointer text-center font-bricolage">
                          Withdraw
                        </button>
                        <button className="flex-1 py-1 rounded-lg bg-white/10 border border-white/20 text-[8px] font-bold text-white cursor-pointer text-center font-bricolage">
                          Pay Bills
                        </button>
                      </div>
                    </div>

                    {/* Quick Features List */}
                    <div className="flex-1 flex flex-col justify-center space-y-2 mt-4 mb-4">
                      <span className="text-[7px] text-ink-muted uppercase tracking-widest font-bold font-jetbrains">Core Modules</span>
                      
                      {/* Features */}
                      {[
                        { title: 'Borrow', desc: '0% Instant Cash Line', color: 'brutal-border bg-accent-lime/10 text-ink', icon: <ArrowRight className="w-3 h-3 text-ink" /> },
                        { title: 'Earn', desc: 'Micro gigs & rewards', color: 'brutal-border bg-accent-gold/10 text-ink', icon: <Award className="w-3 h-3 text-accent-gold" /> },
                        { title: 'Learn', desc: 'Bite-sized financial skills', color: 'brutal-border bg-accent-purple/10 text-ink', icon: <BookOpen className="w-3 h-3 text-accent-purple" /> }
                      ].map((item, i) => (
                        <div key={i} className={`flex items-center justify-between p-2 rounded-xl ${item.color} transition-all`}>
                          <div>
                            <span className="block text-[9px] font-bold font-bricolage">{item.title}</span>
                            <span className="block text-[7px] opacity-60 mt-0.5 font-jetbrains">{item.desc}</span>
                          </div>
                          {item.icon}
                        </div>
                      ))}
                    </div>

                    {/* Spend graph */}
                    <div className="rounded-xl brutal-border bg-white p-2 flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <TrendingUp className="w-3 h-3 text-accent-purple" />
                        <span className="text-[7px] text-ink-muted uppercase tracking-widest font-bold font-jetbrains">Spending Track</span>
                      </div>
                      <div className="flex space-x-0.5 items-end h-6">
                        {[10, 18, 12, 24, 15, 30, 20].map((h, i) => (
                          <div 
                            key={i} 
                            className={`w-[3px] rounded-t-sm ${i === 5 ? 'bg-accent-purple' : 'bg-ink/10'}`} 
                            style={{ height: `${h}px` }} 
                          />
                        ))}
                      </div>
                    </div>

                  </div>
                )}

              </div>
            </div>
          </div>

        </div>

      </section>

      {/* Embedded definitions SVG */}
      <svg className="hidden">
        <defs>
          <linearGradient id="progress-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C8FF3D" />
            <stop offset="100%" stopColor="#7B5CFF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};
