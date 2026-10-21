'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_ITEMS = [
  { num: '01', color: '#C8FF3D', label: 'Home', href: '/' },
  { num: '02', color: '#7B5CFF', label: 'How It Works', href: '/how-it-works' },
  { num: '03', color: '#FF5A3C', label: 'Students', href: '/students' },
  { num: '04', color: '#35C8FF', label: 'Ambassadors', href: '/ambassador' },
  { num: '05', color: '#FFD23F', label: 'Blog', href: '/blog' },
  { num: '06', color: '#C8FF3D', label: 'About', href: '/about' },
  { num: '07', color: '#7B5CFF', label: 'Contact', href: '/contact' },
];

export const Navbar = () => {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // When active scrolling occurs past top hero threshold, hide navbar upwards
      if (currentScrollY > 20) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      // Reset scroll timeout: when scrolling STOPS, show navbar back again
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      scrollTimeoutRef.current = setTimeout(() => {
        setIsVisible(true);
      }, 220);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  return (
    <>
      <header
        className={`fixed top-3 sm:top-4 md:top-6 left-1/2 -translate-x-1/2 z-[10000] w-[92%] sm:w-[94%] max-w-[1240px] transition-all duration-300 ease-in-out ${
          isVisible || isMobileMenuOpen
            ? 'translate-y-0 opacity-100 pointer-events-auto'
            : '-translate-y-[180%] opacity-0 pointer-events-none'
        }`}
      >
        {/* Floating Pill Container */}
        <div className="relative bg-white rounded-full border-[2px] border-[#14100F] shadow-[3.5px_3.5px_0px_0px_#14100F] px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 flex items-center justify-between transition-shadow duration-200">
          
          {/* Left: Brand Logo & Title */}
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
            <img
              src="/images/creditbuddy-logo.webp"
              alt="CreditBuddy Logo"
              className="h-7 sm:h-8 md:h-9 w-auto object-contain transition-transform group-hover:scale-105"
            />
            <img
              src="/images/creditbuddy-text-logo.webp"
              alt="CreditBuddy"
              className="h-4 sm:h-5 md:h-6 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </Link>

          {/* Center: Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-8">
            {NAV_ITEMS.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== '/' && pathname?.startsWith(item.href));

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`relative font-jakarta font-extrabold text-[13px] xl:text-[14px] transition-colors duration-200 py-1 ${
                    isActive
                      ? 'text-[#7B5CFF]'
                      : 'text-[#14100F] hover:text-[#7B5CFF]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-[-3px] left-0 right-0 h-[2.5px] bg-[#7B5CFF] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right: Desktop CTA Button & Mobile Trigger */}
          <div className="flex items-center gap-3">
            {/* GET STARTED CTA Button */}
            <Link
              href="/students"
              className="hidden sm:inline-flex items-center justify-center bg-[#C8FF3D] border-[1.8px] border-[#14100F] shadow-[2.5px_2.5px_0px_0px_#14100F] hover:shadow-[3.5px_3.5px_0px_0px_#14100F] hover:-translate-x-[1px] hover:-translate-y-[1px] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_0px_#14100F] transition-all duration-200 rounded-full px-5 py-2 font-jetbrains font-extrabold text-[11px] xl:text-[12px] tracking-wider text-[#14100F] uppercase select-none"
            >
              GET STARTED
            </Link>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden w-9 h-9 rounded-full border-[1.8px] border-[#14100F] shadow-[2px_2px_0px_0px_#14100F] flex items-center justify-center bg-white text-[#14100F] font-bold text-base hover:bg-[#C8FF3D] transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? '✕' : '≡'}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav Sidebar Drawer - Smooth Slide In & Out */}
      <div
        className={`lg:hidden fixed inset-0 z-[10001] flex justify-end transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          onClick={() => setIsMobileMenuOpen(false)}
          className={`fixed inset-0 bg-[#14100F]/30 backdrop-blur-sm transition-opacity duration-300 ease-in-out ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Right Drawer Panel */}
        <div
          className={`relative w-[85vw] max-w-[360px] h-full bg-[#FBF7EF] border-l-[2px] border-[#14100F] shadow-2xl z-10 flex flex-col justify-between p-6 sm:p-7 overflow-y-auto transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Accent gradient line border on left */}
          <div
            className="absolute left-0 top-0 bottom-0 w-[3px]"
            style={{
              background: 'linear-gradient(to bottom, #C8FF3D, #7B5CFF, #FF5A3C, #35C8FF)',
            }}
          />

          <div>
            {/* Header */}
            <div className="flex items-center justify-between pb-6 mb-2">
              <span className="font-jetbrains text-xs font-bold text-[#14100F]/50 tracking-widest uppercase">
                // NAVIGATION
              </span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-9 h-9 rounded-full border-[1.8px] border-[#14100F] bg-white hover:bg-[#C8FF3D] text-[#14100F] flex items-center justify-center text-sm font-bold transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Navigation Items */}
            <nav className="flex flex-col gap-1">
              {NAV_ITEMS.map((item) => {
                const isActive =
                  pathname === item.href ||
                  (item.href !== '/' && pathname?.startsWith(item.href));

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`group relative flex items-center justify-between transition-all duration-200 ${
                      isActive
                        ? 'bg-[#EEF8CF] px-3.5 py-3 rounded-2xl'
                        : 'py-3 px-1 border-b border-[#14100F]/10 hover:border-[#14100F]'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className={`font-jetbrains text-xs font-bold tracking-widest ${
                          isActive ? 'text-[#7B5CFF]' : ''
                        }`}
                        style={!isActive ? { color: item.color } : undefined}
                      >
                        {item.num}
                      </span>
                      <span className="font-bricolage font-extrabold text-xl text-[#14100F] tracking-tight">
                        {item.label}
                      </span>
                    </div>

                    {/* Circle Arrow */}
                    <span
                      className={`w-8 h-8 rounded-full border border-[#14100F] flex items-center justify-center text-xs text-[#14100F] transition-all duration-200 ${
                        isActive
                          ? 'bg-[#C8FF3D]'
                          : 'bg-white group-hover:bg-[#C8FF3D]'
                      }`}
                    >
                      →
                    </span>
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Footer */}
          <div className="pt-6">
            <div className="w-full h-[1px] bg-[#14100F]/10 mb-5" />
            <p className="font-jakarta text-xs text-[#14100F]/70 leading-relaxed font-normal">
              India&apos;s student-first financial ecosystem.
              <br />
              Built for campus. Built for you.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
