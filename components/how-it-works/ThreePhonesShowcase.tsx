'use client';

import React from 'react';
import Image from 'next/image';

export const ThreePhonesShowcase = () => {
  return (
    <div className="relative w-full flex items-center justify-center py-4 select-none">
      
      {/* Container for Single 3-Phone Showcase PNG */}
      <div className="relative w-full max-w-[620px] aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-[#0D1B2A]/10 bg-[#FAF7F2] group hover:scale-[1.02] transition-transform duration-500">
        <Image
          src="/images/app-screens/three_phones_hero.png"
          alt="CreditBuddy 3-Phone App OS Showcase"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

    </div>
  );
};
