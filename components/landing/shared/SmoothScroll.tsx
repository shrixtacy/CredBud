'use client';

import { ReactLenis } from '@studio-freight/react-lenis';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Observer } from 'gsap/Observer';

gsap.registerPlugin(ScrollTrigger, Observer);

export const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
  const lenisRef = useRef<any>(null);

  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    // Lenis initializes async — wait a tick before wiring ScrollTrigger
    const timer = setTimeout(() => {
      const lenis = lenisRef.current?.lenis;
      if (lenis) {
        lenis.on('scroll', ScrollTrigger.update);
        ScrollTrigger.refresh();
      }
    }, 100);

    return () => {
      clearTimeout(timer);
      gsap.ticker.remove(update);
      const lenis = lenisRef.current?.lenis;
      if (lenis) {
        lenis.off('scroll', ScrollTrigger.update);
      }
    };
  }, []);

  return (
    <ReactLenis root ref={lenisRef} autoRaf={false} options={{ smoothWheel: true, duration: 1.2 }}>
      {/* @ts-expect-error Type mismatch between React 18 and 19 */}
      {children}
    </ReactLenis>
  );
};
