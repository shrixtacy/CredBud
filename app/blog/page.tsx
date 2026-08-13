import type { Metadata } from 'next';
import { SmoothScroll } from '@/components/landing/shared/SmoothScroll';
import { GrainOverlay } from '@/components/landing/shared/GrainOverlay';
import { FinalCTA } from '@/components/landing/FinalCTA';
import { FooterShutter } from '@/components/landing/Footer/FooterShutter';

export const metadata: Metadata = {
  title: 'Blog | CreditBuddy - Student Financial Journal',
  description: 'Byte-sized articles, campus money hacks, credit score guides, and career tips for Indian college students.',
};

const ARTICLES = [
  {
    category: 'Credit 101',
    title: 'How to Build a 750+ CIBIL Score Before You Graduate',
    excerpt: 'Most students start adulthood with zero credit history. Here is how to use CreditBuddy to build an stellar credit score safely in college.',
    readTime: '4 min read',
    author: 'Arjun Mehta',
    date: 'Aug 5, 2026',
    color: 'bg-accent-lime text-ink',
  },
  {
    category: 'Campus Gigs',
    title: 'Top 7 High-Paying Micro Gigs for College Students in 2026',
    excerpt: 'From brand promotions to student ambassador roles, discover how to make ₹5,000 to ₹15,000 a month between lectures.',
    readTime: '5 min read',
    author: 'Dev Malhotra',
    date: 'Jul 28, 2026',
    color: 'bg-accent-gold text-ink',
  },
  {
    category: 'Budgeting',
    title: 'The 50/30/20 Rule Modified for Pocket Money & Stipends',
    excerpt: 'Traditional budgeting rules fail when your income is irregular. Here is a practical framework tailored for student lifestyles.',
    readTime: '3 min read',
    author: 'Sneha Kapoor',
    date: 'Jul 20, 2026',
    color: 'bg-accent-cyan text-ink',
  },
  {
    category: 'Taxes',
    title: 'Tax Filing 101: Do Students in India Need to File ITR?',
    excerpt: 'Everything you need to know about TDS on freelancing, internship stipends, and tax returns without the confusing jargon.',
    readTime: '6 min read',
    author: 'Priya Sundaram',
    date: 'Jul 12, 2026',
    color: 'bg-accent-coral text-ink',
  },
  {
    category: 'Investing',
    title: 'Starting Your First ₹500 SIP: A Beginner Guide to Mutual Funds',
    excerpt: 'Why starting small in your early 20s lets compounding work magic for your post-college future.',
    readTime: '5 min read',
    author: 'Rohan Gupta',
    date: 'Jul 04, 2026',
    color: 'bg-accent-purple text-white',
  },
];

export default function BlogPage() {
  return (
    <SmoothScroll>
      <GrainOverlay />

      <main className="relative w-full block bg-[#FBF7EF]">
        {/* Blog Hero */}
        <section className="relative pt-32 pb-16 px-6 md:px-12 bg-bg-primary text-ink border-b-[1.6px] border-ink">
          <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
            <span className="font-jetbrains text-xs font-normal brutal-pill bg-accent-purple text-white px-4 py-1.5 mb-6 inline-block">
              // student money journal
            </span>
            <h1 className="font-bricolage text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[0.95] mb-6 max-w-4xl">
              Money tips that <span className="accent-underline">actually make sense</span>.
            </h1>
            <p className="font-jakarta text-ink-muted text-lg max-w-2xl leading-relaxed mb-8">
              No textbook jargon. Real advice on credit scores, campus gigs, taxes, and investing for Indian college students.
            </p>
          </div>
        </section>

        {/* Blog Articles Grid */}
        <section className="py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ARTICLES.map((art, i) => (
              <article
                key={i}
                className="bg-white brutal-card p-6 flex flex-col justify-between hover:translate-y-[-4px] transition-transform duration-300"
                style={{ boxShadow: '6px 6px 0px #14100F' }}
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className={`font-jetbrains text-xs font-bold px-3 py-1 rounded-full brutal-border ${art.color}`}>
                      {art.category}
                    </span>
                    <span className="font-jetbrains text-xs text-ink-muted">{art.readTime}</span>
                  </div>

                  <h2 className="font-bricolage text-2xl font-extrabold text-ink mb-3 leading-tight hover:text-accent-purple transition-colors cursor-pointer">
                    {art.title}
                  </h2>

                  <p className="font-jakarta text-xs text-ink-muted leading-relaxed mb-6">
                    {art.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-ink/10 flex items-center justify-between font-jetbrains text-xs text-ink-muted">
                  <span>By {art.author}</span>
                  <span>{art.date}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Shutter setup for FinalCTA and Footer */}
        <div className="relative w-full h-[200vh]">
          <div className="sticky top-0 h-screen w-full">
            <FinalCTA />
          </div>
          <div className="absolute bottom-0 w-full z-20">
            <FooterShutter />
          </div>
        </div>
      </main>
    </SmoothScroll>
  );
}
