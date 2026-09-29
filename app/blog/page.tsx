/**
 * @fileoverview Blog page for CreditBuddy.
 *
 * The Student Financial Journal — a content hub targeting financial
 * literacy keywords for Indian college students.
 *
 * Content categories:
 *   - Credit 101 (CIBIL score guides)
 *   - Campus Gigs (earning opportunities)
 *   - Budgeting (money management tips)
 *   - Taxes (ITR for students)
 *   - Investing (SIP, mutual funds)
 *
 * SEO priority: 0.7 — content / thought-leadership page.
 *
 * @see {@link file:///d:/Vibe%20projects/CredBud/app/sitemap.ts} — Sitemap entry
 */

import { SmoothScroll } from '@/components/landing/shared/SmoothScroll';
import { GrainOverlay } from '@/components/landing/shared/GrainOverlay';
import { FinalCTA } from '@/components/landing/FinalCTA';
import { FooterShutter } from '@/components/landing/Footer/FooterShutter';
import {
  buildMetadata,
  generateWebPage,
  generateBlogPosting,
} from '@/lib/seo';

// ─── SEO Metadata ────────────────────────────────────────────────────────────

export const metadata = buildMetadata({
  title: 'Blog — Student Financial Journal, Credit Tips & Campus Money Hacks',
  description:
    'Bite-sized articles on credit scores, campus gig earnings, student budgeting, tax filing, ' +
    'and investing tips. Real financial advice for Indian college students — no jargon, just clarity.',
  path: '/blog',
  keywords: [
    'student financial blog India',
    'credit score tips students',
    'campus money hacks',
    'student budgeting tips India',
    'CIBIL score guide students',
    'financial literacy articles students',
    'campus gig earning tips',
    'tax filing for students India',
    'ITR for college students',
    'SIP for beginners India',
    'mutual funds for students',
    'student money management blog',
    'personal finance college students India',
    'how to build credit score India',
    'student financial advice blog',
    'college student money tips India',
    'student investing guide India',
    'budgeting 50 30 20 rule students',
    'student freelancing tax India',
    'campus job earning guide',
  ],
});

// ─── Article Data ────────────────────────────────────────────────────────────

/**
 * Static article data for the blog listing page.
 *
 * In a production app, these would come from a CMS / database.
 * Each article includes metadata used for both rendering and
 * generating BlogPosting JSON-LD structured data.
 */
const ARTICLES = [
  {
    category: 'Credit 101',
    title: 'How to Build a 750+ CIBIL Score Before You Graduate',
    excerpt:
      'Most students start adulthood with zero credit history. Here is how to use CreditBuddy to build an stellar credit score safely in college.',
    readTime: '4 min read',
    author: 'Arjun Mehta',
    date: 'Aug 5, 2026',
    dateISO: '2026-08-05',
    color: 'bg-accent-lime text-ink',
  },
  {
    category: 'Campus Gigs',
    title: 'Top 7 High-Paying Micro Gigs for College Students in 2026',
    excerpt:
      'From brand promotions to student ambassador roles, discover how to make ₹5,000 to ₹15,000 a month between lectures.',
    readTime: '5 min read',
    author: 'Dev Malhotra',
    date: 'Jul 28, 2026',
    dateISO: '2026-07-28',
    color: 'bg-accent-gold text-ink',
  },
  {
    category: 'Budgeting',
    title: 'The 50/30/20 Rule Modified for Pocket Money & Stipends',
    excerpt:
      'Traditional budgeting rules fail when your income is irregular. Here is a practical framework tailored for student lifestyles.',
    readTime: '3 min read',
    author: 'Sneha Kapoor',
    date: 'Jul 20, 2026',
    dateISO: '2026-07-20',
    color: 'bg-accent-cyan text-ink',
  },
  {
    category: 'Taxes',
    title: 'Tax Filing 101: Do Students in India Need to File ITR?',
    excerpt:
      'Everything you need to know about TDS on freelancing, internship stipends, and tax returns without the confusing jargon.',
    readTime: '6 min read',
    author: 'Priya Sundaram',
    date: 'Jul 12, 2026',
    dateISO: '2026-07-12',
    color: 'bg-accent-coral text-ink',
  },
  {
    category: 'Investing',
    title: 'Starting Your First ₹500 SIP: A Beginner Guide to Mutual Funds',
    excerpt:
      'Why starting small in your early 20s lets compounding work magic for your post-college future.',
    readTime: '5 min read',
    author: 'Rohan Gupta',
    date: 'Jul 04, 2026',
    dateISO: '2026-07-04',
    color: 'bg-accent-purple text-white',
  },
];

// ─── Structured Data ─────────────────────────────────────────────────────────

const webPageJsonLd = JSON.stringify(
  generateWebPage({
    title: 'Blog — CreditBuddy Student Financial Journal',
    description:
      'Financial literacy articles, credit tips, and money hacks for Indian college students.',
    path: '/blog',
    breadcrumbs: [
      { name: 'Home', href: '/' },
      { name: 'Blog', href: '/blog' },
    ],
  }),
);

/**
 * Generate BlogPosting JSON-LD for each article.
 * This enables article rich results in Google Search.
 */
const articleJsonLds = ARTICLES.map((art) =>
  JSON.stringify(
    generateBlogPosting({
      title: art.title,
      description: art.excerpt,
      path: '/blog', // All on the same listing page for now
      author: art.author,
      datePublished: art.dateISO,
      category: art.category,
      readTime: art.readTime,
    }),
  ),
);

// ─── Page Component ──────────────────────────────────────────────────────────

/**
 * Blog page component.
 *
 * Renders a card grid of financial literacy articles with
 * category tags, author info, and publication dates.
 */
export default function BlogPage() {
  return (
    <SmoothScroll>
      <GrainOverlay />

      {/* Page-level structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: webPageJsonLd }}
      />
      {articleJsonLds.map((jsonLd, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd }}
        />
      ))}

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
