import type {Metadata} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'CreditBuddy | Student-First Financial Ecosystem',
  description: 'India\'s student-first financial ecosystem. Cinematic, editorial, story-driven.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <head>
        <link href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&f[]=chillax@500,600,700&display=swap" rel="stylesheet" />
      </head>
      <body suppressHydrationWarning className="antialiased overflow-x-hidden selection:bg-accent-blue selection:text-white">
        {children}
      </body>
    </html>
  );
}
