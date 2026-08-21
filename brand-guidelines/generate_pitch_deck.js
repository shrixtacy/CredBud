const PptxGenJS = require('pptxgenjs');
const path = require('path');
const fs = require('fs');

// Initialize PPTXGenJS
const pptx = new PptxGenJS();

// Set 16:9 Widescreen Presentation Layout (Canvas: 10.0" x 5.625")
pptx.layout = 'LAYOUT_16x9';
pptx.title = 'CreditBuddy Official Investor Pitch Deck';
pptx.author = 'Debasish Mallick & CreditBuddy Core Team';
pptx.company = 'CreditBuddy Partners Private Limited';
pptx.revision = '1.0';

// ── COLOR PALETTE TOKENS ──
const COLORS = {
  bgLight: 'FBF7EF',
  bgDark: '14100F',
  ink: '14100F',
  inkMuted: '6B6259',
  white: 'FFFFFF',
  accentLime: 'C8FF3D',
  accentPurple: '7B5CFF',
  accentCoral: 'FF5A3C',
  accentGold: 'FFD23F',
  accentCyan: '35C8FF',
  cardLight: 'FFFFFF',
  cardDark: '1A1514',
  borderDark: '14100F'
};

// ── OFFICIAL BRAND FONTS ──
const FONTS = {
  display: 'Bricolage Grotesque',
  body: 'Plus Jakarta Sans',
  mono: 'JetBrains Mono'
};

const PAPER_BG_PATH = path.join(__dirname, 'paper-bg.png');
const CHAR_GIRL_PATH = path.join(__dirname, '../public/student-hero-character.png');
const CHAR_BOY_PATH = path.join(__dirname, '../public/student-hero-boy.png');

// Helper: Set 100% full-screen slide background
function setSlideBackground(slide, isDark, usePaperBg = true) {
  if (usePaperBg && fs.existsSync(PAPER_BG_PATH)) {
    slide.background = { path: PAPER_BG_PATH };
    if (isDark) {
      slide.addShape(pptx.shapes.RECTANGLE, {
        x: 0, y: 0, w: 10.0, h: 5.625,
        fill: { color: COLORS.bgDark, transparency: 10 }
      });
    }
  } else {
    slide.background = { color: isDark ? COLORS.bgDark : COLORS.bgLight };
  }
}

// Helper: Add Neo-Brutalist Pill Badge
function addBrutalPill(slide, text, x, y, bgColor = COLORS.accentLime, textColor = COLORS.ink) {
  slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: x, y: y, w: 2.2, h: 0.28,
    rectRadius: 0.15,
    fill: { color: bgColor },
    line: { color: COLORS.borderDark, width: 1.2 }
  });

  slide.addText(text, {
    x: x, y: y, w: 2.2, h: 0.28,
    fontFace: FONTS.mono, fontSize: 8, bold: true, color: textColor,
    align: 'center', valign: 'middle'
  });
}

// Helper: Add Section Slide Header
function addSlideHeader(slide, pillText, titleText, subText = null, isDark = false, pillBg = COLORS.accentLime) {
  addBrutalPill(slide, pillText, 0.5, 0.35, pillBg, COLORS.ink);

  slide.addText(titleText, {
    x: 0.5, y: 0.68, w: 9.0, h: 0.42,
    fontFace: FONTS.display, fontSize: 20, bold: true,
    color: isDark ? COLORS.white : COLORS.ink, valign: 'top'
  });

  if (subText) {
    slide.addText(subText, {
      x: 0.5, y: 1.08, w: 9.0, h: 0.25,
      fontFace: FONTS.body, fontSize: 9,
      color: isDark ? 'D0C8B8' : COLORS.inkMuted, valign: 'top'
    });
  }
}

// Helper: Add Decorative Neo-Brutalist Card
function addBrutalCard(slide, x, y, w, h, bg = COLORS.white, borderColor = COLORS.borderDark, shadowColor = COLORS.borderDark) {
  // Offset Shadow
  slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: x + 0.04, y: y + 0.04, w: w, h: h,
    rectRadius: 0.08,
    fill: { color: shadowColor }
  });
  // Main Card
  slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: x, y: y, w: w, h: h,
    rectRadius: 0.08,
    fill: { color: bg },
    line: { color: borderColor, width: 1.3 }
  });
}

// ─────────────────────────────────────────────────────────
// SLIDE 1: COVER PAGE
// ─────────────────────────────────────────────────────────
{
  const slide = pptx.addSlide();
  setSlideBackground(slide, true, true);

  // Concentric ring accent on top right
  slide.addShape(pptx.shapes.OVAL, {
    x: 7.8, y: -0.4, w: 2.4, h: 2.4,
    fill: { color: COLORS.accentLime, transparency: 85 },
    line: { color: COLORS.accentLime, width: 2.5 }
  });

  addBrutalPill(slide, '// INVESTOR PRESENTATION', 0.6, 0.6, COLORS.accentLime, COLORS.ink);

  slide.addText('CREDITBUDDY', {
    x: 0.6, y: 1.05, w: 6.0, h: 0.6,
    fontFace: FONTS.display, fontSize: 36, bold: true, color: COLORS.white
  });

  slide.addText('Borrow. Earn. Learn. Build the Future.', {
    x: 0.6, y: 1.65, w: 6.0, h: 0.7,
    fontFace: FONTS.display, fontSize: 22, bold: true, color: COLORS.accentLime, lineSpacing: 24
  });

  // Lime underline bar
  slide.addShape(pptx.shapes.RECTANGLE, {
    x: 0.6, y: 2.45, w: 3.5, h: 0.05,
    fill: { color: COLORS.accentLime }
  });

  slide.addText('A student-first financial ecosystem combining responsible credit, real earning, and financial learning.', {
    x: 0.6, y: 2.65, w: 5.8, h: 0.6,
    fontFace: FONTS.body, fontSize: 11, color: 'D0C8B8', lineSpacing: 15
  });

  // Footer Metadata Box
  addBrutalCard(slide, 0.6, 3.8, 5.5, 0.9, COLORS.cardDark, COLORS.accentLime, COLORS.accentPurple);
  slide.addText('BUILT BY STUDENTS • GUIDED BY REGULATION • DESIGNED FOR SCALE\nPREPARED BY: DEBASISH MALLICK (FOUNDER & CEO) | CREDITBUDDY PARTNERS PVT LTD', {
    x: 0.75, y: 3.9, w: 5.2, h: 0.7,
    fontFace: FONTS.mono, fontSize: 8, bold: true, color: COLORS.accentLime, valign: 'middle', lineSpacing: 12
  });

  if (fs.existsSync(CHAR_GIRL_PATH)) {
    slide.addImage({
      path: CHAR_GIRL_PATH,
      x: 6.8, y: 0.5, w: 2.7, h: 4.6
    });
  }
}

// ─────────────────────────────────────────────────────────
// SLIDE 2: THE PROBLEM: STUDENT FINANCIAL INSTABILITY
// ─────────────────────────────────────────────────────────
{
  const slide = pptx.addSlide();
  setSlideBackground(slide, false, true);
  addSlideHeader(slide, '01 // MARKET GAP', 'The Problem: Student Financial Instability');

  // Top 2 Key Stat Cards
  addBrutalCard(slide, 0.5, 1.25, 4.35, 0.9, COLORS.white, COLORS.borderDark, COLORS.accentCoral);
  slide.addText('43M+ Students in India', {
    x: 0.65, y: 1.35, w: 4.0, h: 0.25,
    fontFace: FONTS.display, fontSize: 13, bold: true, color: COLORS.ink
  });
  slide.addText('Face financial instability during their college years.', {
    x: 0.65, y: 1.6, w: 4.0, h: 0.45,
    fontFace: FONTS.body, fontSize: 9, color: COLORS.inkMuted
  });

  addBrutalCard(slide, 5.15, 1.25, 4.35, 0.9, COLORS.white, COLORS.borderDark, COLORS.accentGold);
  slide.addText('75%+ Face Regular Cash Gaps', {
    x: 5.3, y: 1.35, w: 4.0, h: 0.25,
    fontFace: FONTS.display, fontSize: 13, bold: true, color: COLORS.ink
  });
  slide.addText('Monthly shortfalls of ₹1k–₹10k driven by living expenses, emergencies, & career costs.', {
    x: 5.3, y: 1.6, w: 4.0, h: 0.45,
    fontFace: FONTS.body, fontSize: 9, color: COLORS.inkMuted
  });

  // 3 Problem Pillars
  const problems = [
    { title: '❌ Earn', desc: 'Limited access to safe, flexible earning opportunities. Unstructured part-time work and inconsistent income.' },
    { title: '❌ Learn', desc: 'No financial literacy on budgeting, credit, or long-term money management. Students make decisions without guidance.' },
    { title: '❌ Borrow', desc: 'Banks reject students due to lack of credit history. Existing apps charge high APRs and use coercive recovery practices.' }
  ];

  problems.forEach((p, i) => {
    const xPos = 0.5 + i * 3.08;
    addBrutalCard(slide, xPos, 2.3, 2.83, 1.5, COLORS.white, COLORS.borderDark, COLORS.ink);
    slide.addText(p.title, {
      x: xPos + 0.15, y: 2.42, w: 2.5, h: 0.25,
      fontFace: FONTS.display, fontSize: 13, bold: true, color: COLORS.accentCoral
    });
    slide.addText(p.desc, {
      x: xPos + 0.15, y: 2.7, w: 2.5, h: 1.0,
      fontFace: FONTS.body, fontSize: 8.5, color: COLORS.inkMuted, lineSpacing: 12
    });
  });

  // Bottom Box: Why Existing Solutions Fail
  addBrutalCard(slide, 0.5, 3.95, 9.0, 1.2, COLORS.accentCoral, COLORS.borderDark, COLORS.ink);
  slide.addText('WHY EXISTING SOLUTIONS FAIL FOR STUDENTS', {
    x: 0.7, y: 4.05, w: 8.6, h: 0.2,
    fontFace: FONTS.mono, fontSize: 7.5, bold: true, color: COLORS.white
  });
  slide.addText('• Predatory lending (APR 70%+)  • Aggressive calls and harassment  • No income enablement pathways\n• No financial education  • Loan-first, short-term financial thinking', {
    x: 0.7, y: 4.28, w: 8.6, h: 0.45,
    fontFace: FONTS.body, fontSize: 9, bold: true, color: COLORS.white, lineSpacing: 13
  });
  slide.addText('Students don\'t need just loans — they need a fair financial ecosystem.', {
    x: 0.7, y: 4.78, w: 8.6, h: 0.3,
    fontFace: FONTS.display, fontSize: 10, bold: true, italic: true, color: COLORS.white
  });
}

// ─────────────────────────────────────────────────────────
// SLIDE 3: OUR SOLUTION: CREDITBUDDY
// ─────────────────────────────────────────────────────────
{
  const slide = pptx.addSlide();
  setSlideBackground(slide, false, true);
  addSlideHeader(slide, '02 // ECOSYSTEM SOLUTION', 'Our Solution: CreditBuddy', 'A unified student financial ecosystem built around Earn, Learn, and Borrow.');

  const solutions = [
    { title: 'Safe, Instant Microloans (Borrow)', text: '₹500–₹10,000 short-term credit with transparent pricing. Built for genuine student needs, not predatory lending.', bg: COLORS.accentLime },
    { title: 'Flexible Repayment (Borrow)', text: '20–30 day repayment cycles with extension options. Reduces stress and improves repayment outcomes.', bg: COLORS.white },
    { title: 'Repayment Discipline (Borrow → Earn)', text: 'Non-cash benefits such as higher loan limits and fee reductions for timely repayment. Encourages responsible borrowing.', bg: COLORS.white },
    { title: 'Purpose-Based Loans (Borrow + Learn)', text: 'Preferential terms for verified education and medical expenses. Ensures credit is used for high-impact needs.', bg: COLORS.accentGold },
    { title: 'Earn & Learn Ecosystem (Earn + Learn)', text: 'Verified campus gigs and earning pathways paired with financial literacy tools to improve income stability.', bg: COLORS.accentPurple, textColor: COLORS.white }
  ];

  // 3 Top, 2 Bottom Layout
  solutions.slice(0, 3).forEach((s, i) => {
    const xPos = 0.5 + i * 3.08;
    addBrutalCard(slide, xPos, 1.35, 2.83, 1.7, s.bg, COLORS.borderDark, COLORS.ink);
    slide.addText(s.title, {
      x: xPos + 0.15, y: 1.48, w: 2.5, h: 0.35,
      fontFace: FONTS.display, fontSize: 11, bold: true, color: s.textColor || COLORS.ink
    });
    slide.addText(s.text, {
      x: xPos + 0.15, y: 1.85, w: 2.5, h: 1.1,
      fontFace: FONTS.body, fontSize: 8.5, color: s.textColor || COLORS.inkMuted, lineSpacing: 12
    });
  });

  solutions.slice(3).forEach((s, i) => {
    const xPos = 0.5 + i * 4.6;
    addBrutalCard(slide, xPos, 3.2, 4.35, 1.4, s.bg, COLORS.borderDark, COLORS.ink);
    slide.addText(s.title, {
      x: xPos + 0.15, y: 3.32, w: 4.0, h: 0.3,
      fontFace: FONTS.display, fontSize: 11, bold: true, color: s.textColor || COLORS.ink
    });
    slide.addText(s.text, {
      x: xPos + 0.15, y: 3.65, w: 4.0, h: 0.85,
      fontFace: FONTS.body, fontSize: 8.5, color: s.textColor || COLORS.inkMuted, lineSpacing: 12
    });
  });

  // Footer banner
  addBrutalCard(slide, 0.5, 4.75, 9.0, 0.5, COLORS.cardDark, COLORS.accentLime, COLORS.borderDark);
  slide.addText('CreditBuddy is designed as a long-term student financial ecosystem — not a loan-first app.', {
    x: 0.7, y: 4.85, w: 8.6, h: 0.3,
    fontFace: FONTS.display, fontSize: 10, bold: true, color: COLORS.accentLime, align: 'center'
  });
}

// ─────────────────────────────────────────────────────────
// SLIDE 4: MARKET OPPORTUNITY
// ─────────────────────────────────────────────────────────
{
  const slide = pptx.addSlide();
  setSlideBackground(slide, false, true);
  addSlideHeader(slide, '03 // MARKET SIZING', 'Market Opportunity', '43M+ Students in India actively enrolled in higher education facing income gaps and credit needs.');

  // TAM SAM SOM 3 Cards
  const market = [
    { label: 'TAM (Total Addressable Market)', stat: '43M Students • ₹1,20,000 Cr', desc: 'All higher-education students in India with recurring financial needs.', bg: COLORS.white },
    { label: 'SAM (Serviceable Addressable Market)', stat: '25M Students • ₹40,000 Cr', desc: 'Urban and semi-urban students seeking short-term credit and income pathways.', bg: COLORS.accentLime },
    { label: 'SOM (Serviceable Obtainable Market)', stat: '200K Students • ₹400 Cr', desc: 'Campus-first rollout through selected colleges using ambassadors and referrals.', bg: COLORS.accentGold }
  ];

  market.forEach((m, i) => {
    const xPos = 0.5 + i * 3.08;
    addBrutalCard(slide, xPos, 1.35, 2.83, 1.8, m.bg, COLORS.borderDark, COLORS.ink);
    slide.addText(m.label, {
      x: xPos + 0.15, y: 1.48, w: 2.5, h: 0.25,
      fontFace: FONTS.mono, fontSize: 7.5, bold: true, color: COLORS.ink
    });
    slide.addText(m.stat, {
      x: xPos + 0.15, y: 1.75, w: 2.5, h: 0.45,
      fontFace: FONTS.display, fontSize: 13, bold: true, color: COLORS.ink
    });
    slide.addText(m.desc, {
      x: xPos + 0.15, y: 2.22, w: 2.5, h: 0.8,
      fontFace: FONTS.body, fontSize: 8.5, color: COLORS.inkMuted, lineSpacing: 12
    });
  });

  // Target Segment & Attractive Drivers (2 Columns)
  addBrutalCard(slide, 0.5, 3.3, 4.35, 1.95, COLORS.white, COLORS.borderDark, COLORS.accentPurple);
  slide.addText('TARGET SEGMENT: STUDENTS (18–25)', {
    x: 0.65, y: 3.42, w: 4.0, h: 0.2,
    fontFace: FONTS.mono, fontSize: 7.5, bold: true, color: COLORS.accentPurple
  });
  slide.addText('• Digitally native, mobile-first users\n• Frequent cash-flow mismatches\n• Limited or no access to traditional credit\n• Early need for income opportunities & financial guidance', {
    x: 0.65, y: 3.68, w: 4.0, h: 1.4,
    fontFace: FONTS.body, fontSize: 8.5, color: COLORS.inkMuted, lineSpacing: 13
  });

  addBrutalCard(slide, 5.15, 3.3, 4.35, 1.95, COLORS.cardDark, COLORS.accentLime, COLORS.borderDark);
  slide.addText('WHY THIS MARKET IS ATTRACTIVE', {
    x: 5.3, y: 3.42, w: 4.0, h: 0.2,
    fontFace: FONTS.mono, fontSize: 7.5, bold: true, color: COLORS.accentLime
  });
  slide.addText('• High-frequency, repeat financial needs\n• Early entry into customer financial lifecycle\n• Strong campus-driven and referral-led network effects\n• Low brand loyalty to existing solutions', {
    x: 5.3, y: 3.68, w: 4.0, h: 1.4,
    fontFace: FONTS.body, fontSize: 8.5, color: COLORS.white, lineSpacing: 13
  });
}

// ─────────────────────────────────────────────────────────
// SLIDE 5: COMPETITION ANALYSIS
// ─────────────────────────────────────────────────────────
{
  const slide = pptx.addSlide();
  setSlideBackground(slide, false, true);
  addSlideHeader(slide, '04 // COMPETITIVE LANDSCAPE', 'Competition Analysis', 'Purpose-built for students — not adapted from consumer fintech.');

  // Comparison Table Card
  addBrutalCard(slide, 0.5, 1.35, 9.0, 3.4, COLORS.white, COLORS.borderDark, COLORS.ink);

  // Table Headers
  const cols = [
    { title: 'Feature', x: 0.7, w: 2.0 },
    { title: 'mPokket', x: 2.8, w: 1.9 },
    { title: 'Slice', x: 4.8, w: 1.9 },
    { title: 'CreditBuddy', x: 6.8, w: 2.5 }
  ];

  cols.forEach(col => {
    slide.addText(col.title, {
      x: col.x, y: 1.45, w: col.w, h: 0.3,
      fontFace: FONTS.display, fontSize: 11, bold: true,
      color: col.title === 'CreditBuddy' ? COLORS.accentPurple : COLORS.ink
    });
  });

  const rows = [
    { f: 'Pricing Model', m: 'High effective pricing', s: 'Variable, usage-based', cb: '✓ Transparent, student-aligned' },
    { f: 'Core User', m: 'General micro-credit users', s: 'Young professionals', cb: '✓ Students (18–25), campus-first' },
    { f: 'Product Focus', m: 'Loan-first', s: 'Credit-led lifestyle', cb: '✓ Earn + Learn + Borrow' },
    { f: 'Engagement Model', m: 'Standard fintech processes', s: 'Conventional collections', cb: '✓ Support-led, student-safe' },
    { f: 'Financial Literacy', m: 'Minimal', s: 'Limited', cb: '✓ Built-in literacy tools' },
    { f: 'Regulatory Structure', m: 'NBFC-partner-led', s: 'RBI-compliant structure', cb: '✓ Fully compliant, NBFC-led' }
  ];

  rows.forEach((r, idx) => {
    const yPos = 1.85 + idx * 0.45;
    // Row background highlight
    if (idx % 2 === 0) {
      slide.addShape(pptx.shapes.RECTANGLE, {
        x: 0.6, y: yPos - 0.05, w: 8.8, h: 0.4,
        fill: { color: COLORS.bgLight }
      });
    }

    slide.addText(r.f, { x: 0.7, y: yPos, w: 2.0, h: 0.3, fontFace: FONTS.body, fontSize: 8.5, bold: true, color: COLORS.ink });
    slide.addText(r.m, { x: 2.8, y: yPos, w: 1.9, h: 0.3, fontFace: FONTS.body, fontSize: 8, color: COLORS.inkMuted });
    slide.addText(r.s, { x: 4.8, y: yPos, w: 1.9, h: 0.3, fontFace: FONTS.body, fontSize: 8, color: COLORS.inkMuted });
    slide.addText(r.cb, { x: 6.8, y: yPos, w: 2.5, h: 0.3, fontFace: FONTS.display, fontSize: 8.5, bold: true, color: COLORS.accentPurple });
  });

  // Footer summary box
  addBrutalCard(slide, 0.5, 4.85, 9.0, 0.45, COLORS.accentLime, COLORS.borderDark, COLORS.ink);
  slide.addText('CreditBuddy combines Borrow + Earn + Learn into a single student-first moated ecosystem.', {
    x: 0.7, y: 4.92, w: 8.6, h: 0.3,
    fontFace: FONTS.display, fontSize: 9.5, bold: true, color: COLORS.ink, align: 'center'
  });
}

// ─────────────────────────────────────────────────────────
// SLIDE 6: VALIDATION & EARLY TRACTION
// ─────────────────────────────────────────────────────────
{
  const slide = pptx.addSlide();
  setSlideBackground(slide, false, true);
  addSlideHeader(slide, '05 // USER RESEARCH', 'Validation & Early Traction', 'Early validation from students across multiple campuses (ages 18–24)');

  // 3 Donut Stat Cards
  const stats = [
    { val: '75%', title: 'Face Financial Challenges', desc: 'Recurring short-term money gaps affect academics and daily life.', bg: COLORS.white },
    { val: '62%', title: 'Prefer RBI Compliance', desc: 'Trust regulatory-backed solutions over informal or unregulated credit.', bg: COLORS.accentLime },
    { val: '78%', title: 'Want Earn & Learn', desc: 'Seek income pathways combined with skill-building and guidance.', bg: COLORS.accentGold }
  ];

  stats.forEach((s, i) => {
    const xPos = 0.5 + i * 3.08;
    addBrutalCard(slide, xPos, 1.35, 2.83, 1.8, s.bg, COLORS.borderDark, COLORS.ink);
    slide.addText(s.val, {
      x: xPos + 0.15, y: 1.45, w: 2.5, h: 0.55,
      fontFace: FONTS.display, fontSize: 26, bold: true, color: COLORS.ink
    });
    slide.addText(s.title, {
      x: xPos + 0.15, y: 2.0, w: 2.5, h: 0.25,
      fontFace: FONTS.display, fontSize: 10, bold: true, color: COLORS.ink
    });
    slide.addText(s.desc, {
      x: xPos + 0.15, y: 2.25, w: 2.5, h: 0.8,
      fontFace: FONTS.body, fontSize: 8, color: COLORS.inkMuted, lineSpacing: 11
    });
  });

  // Quotes (2 Boxes)
  addBrutalCard(slide, 0.5, 3.3, 4.35, 1.1, COLORS.white, COLORS.borderDark, COLORS.accentPurple);
  slide.addText('"Finally, a platform that understands students and prioritizes trust."', {
    x: 0.65, y: 3.4, w: 4.0, h: 0.6,
    fontFace: FONTS.body, fontSize: 9.5, italic: true, bold: true, color: COLORS.ink
  });
  slide.addText('— Student participant (Delhi University)', {
    x: 0.65, y: 4.0, w: 4.0, h: 0.3,
    fontFace: FONTS.mono, fontSize: 7.5, color: COLORS.inkMuted
  });

  addBrutalCard(slide, 5.15, 3.3, 4.35, 1.1, COLORS.white, COLORS.borderDark, COLORS.accentCoral);
  slide.addText('"Learning how to manage money mattered as much as accessing credit."', {
    x: 5.3, y: 3.4, w: 4.0, h: 0.6,
    fontFace: FONTS.body, fontSize: 9.5, italic: true, bold: true, color: COLORS.ink
  });
  slide.addText('— Student participant (IIT Sambalpur)', {
    x: 5.3, y: 4.0, w: 4.0, h: 0.3,
    fontFace: FONTS.mono, fontSize: 7.5, color: COLORS.inkMuted
  });

  // Key Learnings Bar
  addBrutalCard(slide, 0.5, 4.55, 9.0, 0.75, COLORS.cardDark, COLORS.accentLime, COLORS.borderDark);
  slide.addText('KEY EARLY LEARNINGS:\n• Strong appreciation for simple onboarding & transparent terms  • High interest in income-linked & learning features', {
    x: 0.7, y: 4.62, w: 8.6, h: 0.6,
    fontFace: FONTS.body, fontSize: 8.5, color: COLORS.white, lineSpacing: 12
  });
}

// ─────────────────────────────────────────────────────────
// SLIDE 7: HOW CREDITBUDDY WORKS
// ─────────────────────────────────────────────────────────
{
  const slide = pptx.addSlide();
  setSlideBackground(slide, false, true);
  addSlideHeader(slide, '06 // PRODUCT FLOW', 'How CreditBuddy Works', 'A simple, transparent flow designed for students — aligned with trust and compliance.');

  const steps = [
    { num: '01', title: 'Apply (Purpose-Based)', desc: 'Select loan purpose and amount through a simple, mobile-first interface built for college use cases.' },
    { num: '02', title: 'Transparent Agreement', desc: 'Clear RBI-compliant documentation with a plain-language summary of interest, fees, and timelines.' },
    { num: '03', title: 'Instant Disbursement', desc: 'Funds disbursed immediately upon post-approval verification with zero hidden charges.' },
    { num: '04', title: 'Flexible Repayment', desc: '20–30 day repayment cycles with extension options designed to reduce stress and prevent defaults.' },
    { num: '05', title: 'Responsible Usage Benefits', desc: 'On-time repayment unlocks better terms, lower fees, and higher eligibility over time.' },
    { num: '06', title: 'Earn & Learn Integration', desc: 'Access to verified campus gigs and financial literacy tools to improve income stability and score.' }
  ];

  steps.forEach((st, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const xPos = 0.5 + col * 4.6;
    const yPos = 1.35 + row * 1.15;

    addBrutalCard(slide, xPos, yPos, 4.35, 1.05, COLORS.white, COLORS.borderDark, COLORS.ink);
    
    slide.addText(st.num, {
      x: xPos + 0.15, y: yPos + 0.12, w: 0.5, h: 0.3,
      fontFace: FONTS.mono, fontSize: 12, bold: true, color: COLORS.accentPurple
    });
    slide.addText(st.title, {
      x: xPos + 0.7, y: yPos + 0.12, w: 3.5, h: 0.25,
      fontFace: FONTS.display, fontSize: 11, bold: true, color: COLORS.ink
    });
    slide.addText(st.desc, {
      x: xPos + 0.7, y: yPos + 0.38, w: 3.5, h: 0.6,
      fontFace: FONTS.body, fontSize: 8.5, color: COLORS.inkMuted, lineSpacing: 11
    });
  });

  // Footer Banner
  addBrutalCard(slide, 0.5, 4.85, 9.0, 0.45, COLORS.accentGold, COLORS.borderDark, COLORS.ink);
  slide.addText('CreditBuddy is built as a long-term student financial ecosystem — not a loan-first app.', {
    x: 0.7, y: 4.92, w: 8.6, h: 0.3,
    fontFace: FONTS.display, fontSize: 9.5, bold: true, color: COLORS.ink, align: 'center'
  });
}

// ─────────────────────────────────────────────────────────
// SLIDE 8: REVENUE MODEL
// ─────────────────────────────────────────────────────────
{
  const slide = pptx.addSlide();
  setSlideBackground(slide, false, true);
  addSlideHeader(slide, '07 // MONETIZATION', 'Revenue Model', 'A lending-led model with ecosystem revenue layers — designed for sustainability & low CAC.');

  // Layer 1: Today
  addBrutalCard(slide, 0.5, 1.35, 9.0, 1.0, COLORS.accentLime, COLORS.borderDark, COLORS.ink);
  slide.addText('TODAY // REVENUE LAYER: LOAN INTEREST', {
    x: 0.7, y: 1.45, w: 8.6, h: 0.2,
    fontFace: FONTS.mono, fontSize: 7.5, bold: true, color: COLORS.ink
  });
  slide.addText('Loan Interest: Transparent, student-aligned interest on short-term microloans. Designed for high repayment discipline and regulatory compliance.', {
    x: 0.7, y: 1.68, w: 8.6, h: 0.55,
    fontFace: FONTS.body, fontSize: 9, bold: true, color: COLORS.ink, lineSpacing: 13
  });

  // Layer 2: Scaling Phase (2 Cards)
  addBrutalCard(slide, 0.5, 2.5, 4.35, 1.1, COLORS.white, COLORS.borderDark, COLORS.accentGold);
  slide.addText('SCALING PHASE // GIG MARKETPLACE', {
    x: 0.65, y: 2.6, w: 4.0, h: 0.2,
    fontFace: FONTS.mono, fontSize: 7.5, bold: true, color: COLORS.accentGold
  });
  slide.addText('Commission from connecting students to verified campus gigs & income opportunities. Lowers credit risk.', {
    x: 0.65, y: 2.82, w: 4.0, h: 0.7,
    fontFace: FONTS.body, fontSize: 8.5, color: COLORS.inkMuted, lineSpacing: 12
  });

  addBrutalCard(slide, 5.15, 2.5, 4.35, 1.1, COLORS.white, COLORS.borderDark, COLORS.accentPurple);
  slide.addText('SCALING PHASE // BRAND PARTNERSHIPS', {
    x: 5.3, y: 2.6, w: 4.0, h: 0.2,
    fontFace: FONTS.mono, fontSize: 7.5, bold: true, color: COLORS.accentPurple
  });
  slide.addText('Targeted, opt-in partnerships with student-focused brands (education, lifestyle) monetized contextually.', {
    x: 5.3, y: 2.82, w: 4.0, h: 0.7,
    fontFace: FONTS.body, fontSize: 8.5, color: COLORS.inkMuted, lineSpacing: 12
  });

  // Layer 3: Long Term (2 Cards)
  addBrutalCard(slide, 0.5, 3.75, 4.35, 1.1, COLORS.cardDark, COLORS.accentLime, COLORS.borderDark);
  slide.addText('LONG-TERM // PREMIUM TOOLS', {
    x: 0.65, y: 3.85, w: 4.0, h: 0.2,
    fontFace: FONTS.mono, fontSize: 7.5, bold: true, color: COLORS.accentLime
  });
  slide.addText('Optional productivity & career tools (resume builder, study aids) improving income stability & retention.', {
    x: 0.65, y: 4.07, w: 4.0, h: 0.7,
    fontFace: FONTS.body, fontSize: 8.5, color: COLORS.white, lineSpacing: 12
  });

  addBrutalCard(slide, 5.15, 3.75, 4.35, 1.1, COLORS.cardDark, COLORS.accentGold, COLORS.borderDark);
  slide.addText('LONG-TERM // BUDDY COINS ECOSYSTEM', {
    x: 5.3, y: 3.85, w: 4.0, h: 0.2,
    fontFace: FONTS.mono, fontSize: 7.5, bold: true, color: COLORS.accentGold
  });
  slide.addText('Non-cash incentive layer rewarding responsible usage and repayment, driving cross-product adoption.', {
    x: 5.3, y: 4.07, w: 4.0, h: 0.7,
    fontFace: FONTS.body, fontSize: 8.5, color: COLORS.white, lineSpacing: 12
  });

  // Bottom Summary
  slide.addText('Lending drives revenue; ecosystem layers improve LTV, retention, and unit economics without increasing student cost burden.', {
    x: 0.5, y: 4.95, w: 9.0, h: 0.3,
    fontFace: FONTS.body, fontSize: 8.5, italic: true, color: COLORS.inkMuted, align: 'center'
  });
}

// ─────────────────────────────────────────────────────────
// SLIDE 9: UNIT & CUSTOMER ECONOMICS (MODELED)
// ─────────────────────────────────────────────────────────
{
  const slide = pptx.addSlide();
  setSlideBackground(slide, false, true);
  addSlideHeader(slide, '08 // ECONOMICS', 'Unit & Customer Economics (Modeled)');

  // Left Column: Unit Economics Stack (w = 4.3 in)
  addBrutalCard(slide, 0.5, 1.25, 4.35, 3.8, COLORS.white, COLORS.borderDark, COLORS.ink);
  slide.addText('UNIT ECONOMICS: ₹1,000 LOAN | 30 DAYS', {
    x: 0.65, y: 1.38, w: 4.0, h: 0.2,
    fontFace: FONTS.mono, fontSize: 7.5, bold: true, color: COLORS.accentPurple
  });

  const unitSteps = [
    { title: '₹60 Interest Earned', desc: 'Transparent monthly interest from micro-loan' },
    { title: '₹20 NBFC Partner Share', desc: 'Capital, underwriting, and risk management' },
    { title: '₹25 Technology & Ops', desc: 'KYC, infrastructure, compliance, & support' },
    { title: '₹15 Credit Loss Provision (1.5%)', desc: 'Conservative default buffer' },
    { title: '₹0–₹5 Net Contribution per Loan', desc: 'Loans designed for access & engagement' }
  ];

  unitSteps.forEach((u, i) => {
    const yPos = 1.65 + i * 0.62;
    slide.addText(u.title, {
      x: 0.65, y: yPos, w: 4.0, h: 0.22,
      fontFace: FONTS.display, fontSize: 10, bold: true, color: i === 4 ? COLORS.accentPurple : COLORS.ink
    });
    slide.addText(u.desc, {
      x: 0.65, y: yPos + 0.22, w: 4.0, h: 0.35,
      fontFace: FONTS.body, fontSize: 8, color: COLORS.inkMuted
    });
  });

  // Right Column: Customer Economics Metrics (w = 4.35 in)
  const custMetrics = [
    { val: '₹220', title: 'Gross CAC', desc: 'Campus ambassadors & referrals', bg: COLORS.accentLime },
    { val: '<12 Months', title: 'CAC Payback', desc: 'Revenue offsets CAC in Year 1', bg: COLORS.white },
    { val: '~₹480', title: 'Annual Contribution', desc: 'Driven by non-loan revenue', bg: COLORS.white },
    { val: '₹2.5K–₹3K', title: '3-Year LTV', desc: 'Sustained cross-product usage', bg: COLORS.accentGold },
    { val: '11x–13x', title: 'LTV : CAC Ratio', desc: 'Strong, scalable unit economics', bg: COLORS.accentPurple, textColor: COLORS.white }
  ];

  custMetrics.forEach((cm, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const xPos = 5.15 + col * 2.25;
    const yPos = i === 4 ? 3.7 : (1.25 + row * 1.2);
    const wVal = i === 4 ? 4.35 : 2.1;

    addBrutalCard(slide, xPos, yPos, wVal, 1.1, cm.bg, COLORS.borderDark, COLORS.ink);
    slide.addText(cm.val, {
      x: xPos + 0.1, y: yPos + 0.12, w: wVal - 0.2, h: 0.4,
      fontFace: FONTS.display, fontSize: 18, bold: true, color: cm.textColor || COLORS.ink
    });
    slide.addText(cm.title, {
      x: xPos + 0.1, y: yPos + 0.52, w: wVal - 0.2, h: 0.2,
      fontFace: FONTS.display, fontSize: 9, bold: true, color: cm.textColor || COLORS.ink
    });
    slide.addText(cm.desc, {
      x: xPos + 0.1, y: yPos + 0.72, w: wVal - 0.2, h: 0.32,
      fontFace: FONTS.body, fontSize: 7.5, color: cm.textColor || COLORS.inkMuted
    });
  });

  // Bottom Note
  slide.addText('CreditBuddy prioritizes student trust and adoption in early transactions, with margins expanding through ecosystem monetization.', {
    x: 0.5, y: 5.1, w: 9.0, h: 0.3,
    fontFace: FONTS.body, fontSize: 8, italic: true, color: COLORS.inkMuted, align: 'center'
  });
}

// ─────────────────────────────────────────────────────────
// SLIDE 10: RISK MANAGEMENT
// ─────────────────────────────────────────────────────────
{
  const slide = pptx.addSlide();
  setSlideBackground(slide, false, true);
  addSlideHeader(slide, '09 // RISK FRAMEWORK', 'Risk Management', 'A prevention-first credit risk framework built for students, compliance, and long-term portfolio quality.');

  const risks = [
    { title: 'Gradual Credit Building', desc: 'Small starting limits (₹500–₹1,000), increased only through verified on-time repayments.', bg: COLORS.accentLime },
    { title: 'Earn-to-Repay System', desc: 'Verified campus gigs directly help students earn income and repay microloans on time.', bg: COLORS.white },
    { title: 'Flexible Extensions', desc: 'Pre-default extension options reduce stress and prevent hard credit score defaults.', bg: COLORS.white },
    { title: 'Purpose Verification', desc: 'Proof-based microloans specifically targeted for verified education and medical needs.', bg: COLORS.accentGold },
    { title: 'Radical Transparency', desc: 'Plain-language, RBI-aligned agreements with zero hidden fees or surprise penalties.', bg: COLORS.accentPurple, textColor: COLORS.white }
  ];

  risks.slice(0, 3).forEach((r, i) => {
    const xPos = 0.5 + i * 3.08;
    addBrutalCard(slide, xPos, 1.35, 2.83, 1.6, r.bg, COLORS.borderDark, COLORS.ink);
    slide.addText(r.title, {
      x: xPos + 0.15, y: 1.48, w: 2.5, h: 0.3,
      fontFace: FONTS.display, fontSize: 11, bold: true, color: r.textColor || COLORS.ink
    });
    slide.addText(r.desc, {
      x: xPos + 0.15, y: 1.82, w: 2.5, h: 1.0,
      fontFace: FONTS.body, fontSize: 8.5, color: r.textColor || COLORS.inkMuted, lineSpacing: 12
    });
  });

  risks.slice(3).forEach((r, i) => {
    const xPos = 0.5 + i * 4.6;
    addBrutalCard(slide, xPos, 3.1, 4.35, 1.4, r.bg, COLORS.borderDark, COLORS.ink);
    slide.addText(r.title, {
      x: xPos + 0.15, y: 3.22, w: 4.0, h: 0.3,
      fontFace: FONTS.display, fontSize: 11, bold: true, color: r.textColor || COLORS.ink
    });
    slide.addText(r.desc, {
      x: xPos + 0.15, y: 3.55, w: 4.0, h: 0.85,
      fontFace: FONTS.body, fontSize: 8.5, color: r.textColor || COLORS.inkMuted, lineSpacing: 12
    });
  });

  // Footer banner
  addBrutalCard(slide, 0.5, 4.7, 9.0, 0.5, COLORS.cardDark, COLORS.accentLime, COLORS.borderDark);
  slide.addText('Risk is managed through behaviour-based incentives and early intervention mechanisms.', {
    x: 0.7, y: 4.8, w: 8.6, h: 0.3,
    fontFace: FONTS.display, fontSize: 10, bold: true, color: COLORS.accentLime, align: 'center'
  });
}

// ─────────────────────────────────────────────────────────
// SLIDE 11: GO-TO-MARKET STRATEGY
// ─────────────────────────────────────────────────────────
{
  const slide = pptx.addSlide();
  setSlideBackground(slide, false, true);
  addSlideHeader(slide, '10 // GTM STRATEGY', 'Go-To-Market Strategy', 'Campus-led growth with low CAC, trust-first distribution, and controlled credit risk.');

  const phases = [
    {
      phase: 'Phase 1: Campus Foundation (1k–10k students)',
      sub: 'Controlled pilot & repayment validation',
      bullets: ['• Campus ambassadors + verified onboarding', '• College & student-body tie-ups', '• Repayment-linked referrals'],
      goal: 'Goal: Validate CAC, repayment discipline, & trust signals',
      bg: COLORS.accentLime
    },
    {
      phase: 'Phase 2: Regional Expansion',
      sub: 'Earn-to-repay driven organic growth',
      bullets: ['• Gig marketplace → higher income, better repayment', '• Word-of-mouth from high-performing cohorts', '• Regional college clusters'],
      goal: 'Goal: Scale with improving unit economics & lower risk',
      bg: COLORS.white
    },
    {
      phase: 'Phase 3: Pan-India Scale',
      sub: 'Demand-led national rollout',
      bullets: ['• Waitlist-based expansion to manage exposure', '• Product-led Earn-Learn-Borrow loop', '• Strategic partnerships (NBFCs, brands)'],
      goal: 'Goal: National presence with disciplined credit control',
      bg: COLORS.accentPurple, textColor: COLORS.white
    }
  ];

  phases.forEach((p, i) => {
    const xPos = 0.5 + i * 3.08;
    addBrutalCard(slide, xPos, 1.35, 2.83, 3.4, p.bg, COLORS.borderDark, COLORS.ink);
    
    slide.addText(p.phase, {
      x: xPos + 0.15, y: 1.48, w: 2.5, h: 0.45,
      fontFace: FONTS.display, fontSize: 11, bold: true, color: p.textColor || COLORS.ink
    });
    slide.addText(p.sub, {
      x: xPos + 0.15, y: 1.95, w: 2.5, h: 0.25,
      fontFace: FONTS.mono, fontSize: 7.5, bold: true, color: p.textColor || COLORS.inkMuted
    });
    
    const bulletText = p.bullets.join('\n');
    slide.addText(bulletText, {
      x: xPos + 0.15, y: 2.3, w: 2.5, h: 1.5,
      fontFace: FONTS.body, fontSize: 8.5, color: p.textColor || COLORS.inkMuted, lineSpacing: 13
    });

    slide.addText(p.goal, {
      x: xPos + 0.15, y: 4.0, w: 2.5, h: 0.6,
      fontFace: FONTS.display, fontSize: 8.5, bold: true, italic: true, color: p.textColor || COLORS.ink
    });
  });

  // Footer Banner
  addBrutalCard(slide, 0.5, 4.85, 9.0, 0.45, COLORS.cardDark, COLORS.accentLime, COLORS.borderDark);
  slide.addText('Growth is product-driven — distribution improves repayment, not just installs.', {
    x: 0.7, y: 4.92, w: 8.6, h: 0.3,
    fontFace: FONTS.display, fontSize: 9.5, bold: true, color: COLORS.accentLime, align: 'center'
  });
}

// ─────────────────────────────────────────────────────────
// SLIDE 12: DRIVEN BY STUDENTS, GUIDED BY EXPERTS (TEAM)
// ─────────────────────────────────────────────────────────
{
  const slide = pptx.addSlide();
  setSlideBackground(slide, false, true);
  addSlideHeader(slide, '11 // TEAM & ADVISORS', 'Driven by Students, Guided by Experts', 'Student-led execution, strengthened by experienced compliance, finance, and growth leadership.');

  // Core Team Column (w = 4.35 in)
  addBrutalCard(slide, 0.5, 1.35, 4.35, 3.4, COLORS.white, COLORS.borderDark, COLORS.accentLime);
  slide.addText('CORE TEAM', {
    x: 0.65, y: 1.48, w: 4.0, h: 0.2,
    fontFace: FONTS.mono, fontSize: 7.5, bold: true, color: COLORS.accentPurple
  });

  const coreTeam = [
    { name: 'Debasish Mallick – Founder & CEO', role: 'Founder building a compliant credit ecosystem. Owns product vision, credit design, & regulatory alignment.' },
    { name: 'Goutam Bhosagar – Tech Lead', role: 'Leads fintech backend architecture, security, and scalable systems.' },
    { name: 'Ipsit Kumar Thakur – Tech Developer', role: 'Full-stack developer (mobile + backend). Focused on UX, reliability, and performance.' },
    { name: 'Extended Support Team', role: '5 on-demand specialists supporting UI/UX, backend optimisation, content, and growth.' }
  ];

  coreTeam.forEach((t, i) => {
    const yPos = 1.75 + i * 0.72;
    slide.addText(t.name, {
      x: 0.65, y: yPos, w: 4.0, h: 0.2,
      fontFace: FONTS.display, fontSize: 9.5, bold: true, color: COLORS.ink
    });
    slide.addText(t.role, {
      x: 0.65, y: yPos + 0.2, w: 4.0, h: 0.45,
      fontFace: FONTS.body, fontSize: 7.5, color: COLORS.inkMuted, lineSpacing: 10
    });
  });

  // Advisory Board Column (w = 4.35 in)
  addBrutalCard(slide, 5.15, 1.35, 4.35, 3.4, COLORS.cardDark, COLORS.accentLime, COLORS.borderDark);
  slide.addText('ADVISORY BOARD', {
    x: 5.3, y: 1.48, w: 4.0, h: 0.2,
    fontFace: FONTS.mono, fontSize: 7.5, bold: true, color: COLORS.accentLime
  });

  const advisors = [
    { name: 'CS Susant Pradhan – Compliance Advisor', role: 'RBI compliance frameworks, governance structure, regulatory readiness.' },
    { name: 'CMA Vishal Pathak – Finance & Audit Advisor', role: 'Unit economics, audits, and financial control systems.' },
    { name: 'Karan Agrawal – Lending & NBFC Advisor', role: 'Lending structure, NBFC partnerships, and capital flow management.' },
    { name: 'Shekhar Kumar Padhy – GTM & Revenue Advisor', role: 'Go-to-market strategy, monetisation, and revenue scaling.' },
    { name: 'Ayush Nanda – Business Advisor', role: 'Fundraising guidance and national expansion strategy.' }
  ];

  advisors.forEach((a, i) => {
    const yPos = 1.72 + i * 0.58;
    slide.addText(a.name, {
      x: 5.3, y: yPos, w: 4.0, h: 0.2,
      fontFace: FONTS.display, fontSize: 9, bold: true, color: COLORS.accentLime
    });
    slide.addText(a.role, {
      x: 5.3, y: yPos + 0.18, w: 4.0, h: 0.38,
      fontFace: FONTS.body, fontSize: 7.5, color: 'D0C8B8', lineSpacing: 10
    });
  });

  // Footer Banner
  addBrutalCard(slide, 0.5, 4.85, 9.0, 0.45, COLORS.accentLime, COLORS.borderDark, COLORS.ink);
  slide.addText('Founder-led execution, with governance, compliance, and scale guided by experienced operators.', {
    x: 0.7, y: 4.92, w: 8.6, h: 0.3,
    fontFace: FONTS.display, fontSize: 9.5, bold: true, color: COLORS.ink, align: 'center'
  });
}

// ─────────────────────────────────────────────────────────
// SLIDE 13: VISION & LONG-TERM IMPACT
// ─────────────────────────────────────────────────────────
{
  const slide = pptx.addSlide();
  setSlideBackground(slide, false, true);
  addSlideHeader(slide, '12 // LONG-TERM VISION', 'Vision & Long-Term Impact', 'Building financially confident students and a responsible student credit ecosystem.');

  const visionPillars = [
    { title: 'Financial Literacy', desc: 'Equipping students with practical financial knowledge for long-term independence.', bg: COLORS.accentLime },
    { title: 'Gamified Responsibility', desc: 'Encouraging disciplined financial behavior through incentives and Buddy Coins.', bg: COLORS.white },
    { title: 'Diverse Earning Opportunities', desc: 'Unlocking income via campus gigs, referrals, rewards, and skill-based work.', bg: COLORS.white },
    { title: 'Long-Term Credit Health', desc: 'Helping students build strong credit histories that unlock future banking opportunities.', bg: COLORS.accentGold }
  ];

  visionPillars.forEach((vp, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const xPos = 0.5 + col * 4.6;
    const yPos = 1.35 + row * 1.5;

    addBrutalCard(slide, xPos, yPos, 4.35, 1.35, vp.bg, COLORS.borderDark, COLORS.ink);
    slide.addText(vp.title, {
      x: xPos + 0.2, y: yPos + 0.15, w: 4.0, h: 0.3,
      fontFace: FONTS.display, fontSize: 13, bold: true, color: COLORS.ink
    });
    slide.addText(vp.desc, {
      x: xPos + 0.2, y: yPos + 0.5, w: 4.0, h: 0.7,
      fontFace: FONTS.body, fontSize: 9, color: COLORS.inkMuted, lineSpacing: 13
    });
  });

  // Motto Box
  addBrutalCard(slide, 0.5, 4.45, 9.0, 0.85, COLORS.cardDark, COLORS.accentPurple, COLORS.borderDark);
  slide.addText('BORROW → EARN → LEARN', {
    x: 0.7, y: 4.55, w: 8.6, h: 0.3,
    fontFace: FONTS.display, fontSize: 16, bold: true, color: COLORS.accentPurple, align: 'center'
  });
  slide.addText('Future-ready students. Responsible credit. Scaled impact.', {
    x: 0.7, y: 4.9, w: 8.6, h: 0.3,
    fontFace: FONTS.body, fontSize: 10, bold: true, color: COLORS.white, align: 'center'
  });
}

// ─────────────────────────────────────────────────────────
// SLIDE 14: INVESTMENT OPPORTUNITY
// ─────────────────────────────────────────────────────────
{
  const slide = pptx.addSlide();
  setSlideBackground(slide, false, true);
  addSlideHeader(slide, '13 // FUNDRAISING', 'Investment Opportunity');

  // Hero Callout Box
  addBrutalCard(slide, 0.5, 1.25, 9.0, 1.1, COLORS.accentLime, COLORS.borderDark, COLORS.ink);
  slide.addText('WE ARE RAISING A SEED ROUND TO SCALE CREDITBUDDY', {
    x: 0.7, y: 1.35, w: 8.6, h: 0.2,
    fontFace: FONTS.mono, fontSize: 8, bold: true, color: COLORS.ink
  });
  slide.addText('We are raising a seed round to scale CreditBuddy\'s compliant, campus-led student credit platform across India.', {
    x: 0.7, y: 1.58, w: 8.6, h: 0.65,
    fontFace: FONTS.display, fontSize: 14, bold: true, color: COLORS.ink, lineSpacing: 18
  });

  // 3 Value Pillar Cards (w = 2.83 in)
  const pillars = [
    { title: 'Guidance & Mentorship', desc: 'Fintech, NBFC, and regulatory guidance to build a compliant, scalable student lending platform.' },
    { title: 'Strategic Partnerships', desc: 'Access to NBFCs, lenders, and financial institutions to power lending partnerships at scale.' },
    { title: 'Scaling Support', desc: 'Capital and operational support to expand campus-led distribution and controlled credit rollout.' }
  ];

  pillars.forEach((p, i) => {
    const xPos = 0.5 + i * 3.08;
    addBrutalCard(slide, xPos, 2.45, 2.83, 1.45, COLORS.white, COLORS.borderDark, COLORS.ink);
    slide.addText(p.title, {
      x: xPos + 0.15, y: 2.58, w: 2.5, h: 0.25,
      fontFace: FONTS.display, fontSize: 11, bold: true, color: COLORS.ink
    });
    slide.addText(p.desc, {
      x: xPos + 0.15, y: 2.85, w: 2.5, h: 0.9,
      fontFace: FONTS.body, fontSize: 8.5, color: COLORS.inkMuted, lineSpacing: 12
    });
  });

  // Terms & Use of Capital Box
  addBrutalCard(slide, 0.5, 4.0, 9.0, 1.25, COLORS.cardDark, COLORS.accentGold, COLORS.borderDark);
  slide.addText('STAGE: SEED | RAISE: ₹1.5–2 CR', {
    x: 0.7, y: 4.12, w: 8.6, h: 0.25,
    fontFace: FONTS.display, fontSize: 12, bold: true, color: COLORS.accentGold
  });
  slide.addText('Use of Capital: Compliance readiness, product hardening, campus pilots, and controlled geographic expansion.\nIdeal Investors: Angels, early-stage funds, and operators with fintech, lending, or regulatory expertise.', {
    x: 0.7, y: 4.4, w: 8.6, h: 0.75,
    fontFace: FONTS.body, fontSize: 9, color: COLORS.white, lineSpacing: 13
  });
}

// ─────────────────────────────────────────────────────────
// SLIDE 15: THANK YOU / CONTACT SLIDE
// ─────────────────────────────────────────────────────────
{
  const slide = pptx.addSlide();
  setSlideBackground(slide, true, true);

  slide.addText('THANK YOU', {
    x: 0.5, y: 0.6, w: 9.0, h: 0.6,
    fontFace: FONTS.display, fontSize: 36, bold: true, color: COLORS.white, align: 'center'
  });

  slide.addText('Together, we are building a responsible, student-first financial future for India.', {
    x: 0.5, y: 1.25, w: 9.0, h: 0.35,
    fontFace: FONTS.body, fontSize: 12, color: COLORS.accentLime, align: 'center'
  });

  // Center Contact Card (w = 6.0 in)
  addBrutalCard(slide, 2.0, 1.75, 6.0, 3.1, COLORS.cardDark, COLORS.accentLime, COLORS.accentPurple);

  slide.addText('CONTACT US', {
    x: 2.2, y: 1.9, w: 5.6, h: 0.2,
    fontFace: FONTS.mono, fontSize: 8, bold: true, color: COLORS.accentLime, align: 'center'
  });

  slide.addText('Debasish Mallick', {
    x: 2.2, y: 2.15, w: 5.6, h: 0.35,
    fontFace: FONTS.display, fontSize: 18, bold: true, color: COLORS.white, align: 'center'
  });

  slide.addText('Founder & CEO — CreditBuddy', {
    x: 2.2, y: 2.5, w: 5.6, h: 0.25,
    fontFace: FONTS.body, fontSize: 10, color: 'D0C8B8', align: 'center'
  });

  slide.addText('📱 +91 73280 49306   |   🌐 creditbuddy.org.in\n✉️ info@creditbuddy.org.in   |   📧 creditbuddyofficial@gmail.com\n📍 Sambalpur, Odisha, India - 768004\n\nCREDITBUDDY PARTNERS PRIVATE LIMITED\nCIN: U62090OD2026PTC053104 | GSTIN: 21AANCC6754D1ZS', {
    x: 2.2, y: 2.85, w: 5.6, h: 1.8,
    fontFace: FONTS.mono, fontSize: 8.5, color: COLORS.white, align: 'center', lineSpacing: 14
  });

  slide.addText('Committed to shaping a financially inclusive, empowered future for India\'s students.', {
    x: 0.5, y: 5.05, w: 9.0, h: 0.3,
    fontFace: FONTS.body, fontSize: 8.5, italic: true, color: 'B0A898', align: 'center'
  });
}

// Save presentation
const outputPath = path.join(__dirname, 'CreditBuddy_Pitch_Deck.pptx');
pptx.writeFile({ fileName: outputPath })
  .then(() => {
    console.log(`✅ Success! Pitch deck saved to ${outputPath}`);
  })
  .catch(err => {
    console.error('❌ Error generating pitch deck:', err);
  });
