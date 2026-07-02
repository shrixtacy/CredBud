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
    // We can access lenis instance if needed
    // Update ScrollTrigger whenever lenis scrolls
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }
    
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(update);
    };
  }, []);

  return (
    <ReactLenis root ref={lenisRef} autoRaf={false} options={{ smoothWheel: true, duration: 1.2 }}>
      {/* @ts-expect-error Type mismatch between React 18 and 19 */}
      {children}
    </ReactLenis>
  );
};
