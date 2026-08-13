import type {Metadata} from 'next';
import './globals.css';
import { NavSidebar } from '@/components/landing/NavSidebar';

export const metadata: Metadata = {
  title: 'CreditBuddy | Student-First Financial Ecosystem',
  description: 'India\'s student-first financial ecosystem. Cinematic, editorial, story-driven.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" suppressHydrationWarning className="overflow-x-clip max-w-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap" rel="stylesheet" />
      </head>
      <body suppressHydrationWarning className="antialiased overflow-x-clip max-w-full selection:bg-accent-purple selection:text-white">
        <NavSidebar />
        {children}
      </body>
    </html>
  );
}
