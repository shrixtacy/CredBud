import React, { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface SectionWrapperProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  theme?: 'primary' | 'secondary' | 'dark';
}

export const SectionWrapper = ({
  children,
  className,
  theme = 'primary',
  ...props
}: SectionWrapperProps) => {
  const themeClasses = {
    primary: 'bg-bg-primary text-ink',
    secondary: 'bg-bg-secondary text-ink',
    dark: 'bg-ink-dark text-white',
  };

  return (
    <section
      className={cn('relative w-full overflow-hidden', themeClasses[theme], className)}
      {...props}
    >
      {children}
    </section>
  );
};
