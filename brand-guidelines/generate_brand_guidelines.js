const PptxGenJS = require('pptxgenjs');
const path = require('path');
const fs = require('fs');

// Initialize PPTXGenJS
const pptx = new PptxGenJS();

// Set 16:9 Widescreen Presentation Layout (Canvas: 10.0" x 5.625")
pptx.layout = 'LAYOUT_16x9';
pptx.title = 'CreditBuddy Official Brand Guidelines';
pptx.author = 'Debashish & CreditBuddy Core Team';
pptx.company = 'CreditBuddy India';
pptx.revision = '2.0';

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
function setSlideBackground(slide, isDark, usePaperBg = false) {
  if (usePaperBg && fs.existsSync(PAPER_BG_PATH)) {
    slide.background = { path: PAPER_BG_PATH };
    // Optional semi-transparent dark overlay for dark theme slides
    if (isDark) {
      slide.addShape(pptx.shapes.RECTANGLE, {
        x: 0, y: 0, w: 10.0, h: 5.625,
        fill: { color: COLORS.bgDark, transparency: 15 }
      });
    }
  } else {
    slide.background = { color: isDark ? COLORS.bgDark : COLORS.bgLight };
  }
}

// Helper: Add Neo-Brutalist Pill Badge
function addBrutalPill(slide, text, x, y, bgColor = COLORS.accentLime, textColor = COLORS.ink) {
  slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: x,
    y: y,
    w: 2.2,
    h: 0.28,
    rectRadius: 0.15,
    fill: { color: bgColor },
    line: { color: COLORS.borderDark, width: 1.2 }
  });

  slide.addText(text, {
    x: x,
    y: y,
    w: 2.2,
    h: 0.28,
    fontFace: FONTS.mono,
    fontSize: 8.5,
    bold: true,
    color: textColor,
    align: 'center',
    valign: 'middle'
  });
}

// Helper: Add Section Slide Header
function addSlideHeader(slide, pillText, titleText, isDark = false, pillBg = COLORS.accentLime) {
  addBrutalPill(slide, pillText, 0.5, 0.35, pillBg, COLORS.ink);

  slide.addText(titleText, {
    x: 0.5,
    y: 0.68,
    w: 9.0,
    h: 0.45,
    fontFace: FONTS.display,
    fontSize: 20,
    bold: true,
    color: isDark ? COLORS.white : COLORS.ink,
    valign: 'top'
  });
}

// Helper: Add Decorative Neo-Brutalist Card
function addBrutalCard(slide, x, y, w, h, bg = COLORS.white, borderColor = COLORS.borderDark, shadowColor = COLORS.borderDark) {
  // Offset Shadow
  slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: x + 0.05,
    y: y + 0.05,
    w: w,
    h: h,
    rectRadius: 0.1,
    fill: { color: shadowColor }
  });
  // Main Card
  slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: x,
    y: y,
    w: w,
    h: h,
    rectRadius: 0.1,
    fill: { color: bg },
    line: { color: borderColor, width: 1.4 }
  });
}

// ─────────────────────────────────────────────────────────
// SLIDE 0: COVER PAGE
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
  slide.addShape(pptx.shapes.OVAL, {
    x: 8.2, y: 0.0, w: 1.6, h: 1.6,
    fill: { color: COLORS.accentPurple, transparency: 85 },
    line: { color: COLORS.accentPurple, width: 2 }
  });

  addBrutalPill(slide, '// OFFICIAL BRAND SPEC', 0.6, 0.6, COLORS.accentLime, COLORS.ink);

  slide.addText('CREDITBUDDY\nBRAND GUIDELINES', {
    x: 0.6, y: 1.05, w: 6.0, h: 1.5,
    fontFace: FONTS.display,
    fontSize: 32,
    bold: true,
    color: COLORS.white,
    lineSpacing: 34
  });

  // Lime underline bar
  slide.addShape(pptx.shapes.RECTANGLE, {
    x: 0.6, y: 2.65, w: 3.5, h: 0.06,
    fill: { color: COLORS.accentLime }
  });

  slide.addText('Built from Scratch for Indian College Students — Visual Identity & Voice Spec', {
    x: 0.6, y: 2.85, w: 5.8, h: 0.6,
    fontFace: FONTS.body,
    fontSize: 12,
    color: 'D0C8B8',
    lineSpacing: 16
  });

  // Footer Metadata Box
  addBrutalCard(slide, 0.6, 3.8, 5.5, 0.85, COLORS.cardDark, COLORS.accentLime, COLORS.accentPurple);
  slide.addText('VERSION 1.0 • AUGUST 2026\nPREPARED BY: DEBASHISH & CREDITBUDDY CORE TEAM', {
    x: 0.75, y: 3.9, w: 5.2, h: 0.65,
    fontFace: FONTS.mono,
    fontSize: 9,
    bold: true,
    color: COLORS.accentLime,
    valign: 'middle'
  });

  if (fs.existsSync(CHAR_GIRL_PATH)) {
    slide.addImage({
      path: CHAR_GIRL_PATH,
      x: 6.8, y: 0.5, w: 2.7, h: 4.6
    });
  }
}

// ─────────────────────────────────────────────────────────
// SLIDE 1: BRAND STORY
// ─────────────────────────────────────────────────────────
{
  const slide = pptx.addSlide();
  setSlideBackground(slide, false, true);
  addSlideHeader(slide, '01 // ORIGIN & MISSION', 'The CreditBuddy Story');

  // 3 columns inside x: 0.5 to 9.5 (w = 2.83 in)
  const storyBlocks = [
    {
      title: 'THE PROBLEM',
      tag: '01 // FINANCIAL INVISIBILITY',
      bg: COLORS.white,
      border: COLORS.accentCoral,
      text: '35 Million+ Indian college students are financially invisible to traditional banks. With zero salary slips, no credit history, and zero parental guarantees, students are trapped relying on expensive micro-loans or family favors.'
    },
    {
      title: 'THE BREAKOUT',
      tag: '02 // BUILT ON CAMPUS',
      bg: COLORS.accentLime,
      border: COLORS.ink,
      text: 'CreditBuddy was engineered directly for college life in India. We created a transparent, 60-second instant credit line linked securely to student ID cards — paired with campus micro-gigs and 5-minute financial literacy modules.'
    },
    {
      title: 'THE IMPACT',
      tag: '03 // GRADUATING EMPOWERED',
      bg: COLORS.accentPurple,
      border: COLORS.ink,
      textColor: COLORS.white,
      text: 'From paying semester fees on time to earning wallet rewards via campus gigs, CreditBuddy ensures every student builds a rock-solid CIBIL score and real-world financial independence long before graduation day.'
    }
  ];

  storyBlocks.forEach((item, i) => {
    const xPos = 0.5 + i * 3.08;
    addBrutalCard(slide, xPos, 1.25, 2.83, 3.8, item.bg, item.border, COLORS.ink);

    slide.addText(item.tag, {
      x: xPos + 0.2, y: 1.45, w: 2.43, h: 0.25,
      fontFace: FONTS.mono, fontSize: 7.5, bold: true, color: item.textColor || COLORS.ink
    });

    slide.addText(item.title, {
      x: xPos + 0.2, y: 1.75, w: 2.43, h: 0.4,
      fontFace: FONTS.display, fontSize: 15, bold: true, color: item.textColor || COLORS.ink
    });

    slide.addText(item.text, {
      x: xPos + 0.2, y: 2.25, w: 2.43, h: 2.6,
      fontFace: FONTS.body, fontSize: 9.5, color: item.textColor || COLORS.inkMuted, lineSpacing: 14
    });
  });
}

// ─────────────────────────────────────────────────────────
// SLIDE 2: MISSION & VISION
// ─────────────────────────────────────────────────────────
{
  const slide = pptx.addSlide();
  setSlideBackground(slide, true, false);
  addSlideHeader(slide, '02 // ALIGNMENT & STRATEGY', 'Mission Statement & 5-Year Vision', true);

  // Mission Hero Box
  addBrutalCard(slide, 0.5, 1.25, 9.0, 1.35, COLORS.cardDark, COLORS.accentLime, COLORS.accentPurple);
  slide.addText('OUR MISSION', {
    x: 0.7, y: 1.35, w: 3.0, h: 0.2,
    fontFace: FONTS.mono, fontSize: 8.5, bold: true, color: COLORS.accentLime
  });
  slide.addText('"To empower 10 Million Indian college students with transparent credit access, verified campus gig earnings, and byte-sized financial skills — building India\'s first youth credit scoring ecosystem."', {
    x: 0.7, y: 1.6, w: 8.6, h: 0.85,
    fontFace: FONTS.display, fontSize: 13, italic: true, color: COLORS.white, lineSpacing: 18
  });

  // 4-Column Roadmap (w = 2.1 in)
  const roadmap = [
    { year: '2026', title: 'Campus Penetration', desc: '100+ Tier 1 & 2 College launch, 500k active students.' },
    { year: '2027', title: 'CreditBuddy UPI', desc: 'Custom student UPI wallet & virtual credit card rollout.' },
    { year: '2028', title: 'Gig Marketplace', desc: 'Pan-India brand micro-gigs & peer earn network.' },
    { year: '2029', title: 'Alumni Credit Bridge', desc: 'Direct credit line migration to prime banking partners.' }
  ];

  roadmap.forEach((step, i) => {
    const xPos = 0.5 + i * 2.3;
    addBrutalCard(slide, xPos, 2.8, 2.1, 2.25, COLORS.bgDark, COLORS.accentPurple, COLORS.accentLime);

    slide.addText(step.year, {
      x: xPos + 0.15, y: 2.95, w: 1.8, h: 0.35,
      fontFace: FONTS.display, fontSize: 18, bold: true, color: COLORS.accentLime
    });
    slide.addText(step.title, {
      x: xPos + 0.15, y: 3.3, w: 1.8, h: 0.35,
      fontFace: FONTS.display, fontSize: 11, bold: true, color: COLORS.white
    });
    slide.addText(step.desc, {
      x: xPos + 0.15, y: 3.7, w: 1.8, h: 1.1,
      fontFace: FONTS.body, fontSize: 8.5, color: 'B0A898', lineSpacing: 12
    });
  });
}

// ─────────────────────────────────────────────────────────
// SLIDE 3: TARGET AUDIENCE PROFILES
// ─────────────────────────────────────────────────────────
{
  const slide = pptx.addSlide();
  setSlideBackground(slide, false, true);
  addSlideHeader(slide, '03 // PERSONA & SEGMENTS', 'Target Audience Profiles');

  const personas = [
    {
      role: 'COLLEGE STUDENTS',
      badge: 'PRIMARY USER (18-24)',
      bg: COLORS.accentLime,
      traits: ['Mobile-native Gen-Z', 'Frequent UPI transactions', 'No credit history', 'Needs fast approval'],
      approach: 'Speak like a trusted campus peer. Zero jargon, maximum speed, 100% transparency.'
    },
    {
      role: 'INVESTORS & NBFCS',
      badge: 'CAPITAL & UNDERWRITING',
      bg: COLORS.accentPurple,
      textColor: COLORS.white,
      traits: ['Focus on CAC & LTV', 'Requires low NPL rates', 'Data-driven risk models', 'Long-term Gen-Z moat'],
      approach: 'Present robust unit economics, alt-data risk scoring algorithms, and rapid user retention.'
    },
    {
      role: 'DEVELOPERS & CREATORS',
      badge: 'ECOSYSTEM BUILDERS',
      bg: COLORS.white,
      traits: ['Tech & API enthusiast', 'Campus ambassador', 'Gig-economy creator', 'Community advocate'],
      approach: 'Clear API specs, high referral rewards, modular component design, and hacker culture.'
    }
  ];

  personas.forEach((p, i) => {
    const xPos = 0.5 + i * 3.08;
    addBrutalCard(slide, xPos, 1.25, 2.83, 3.8, p.bg, COLORS.borderDark, COLORS.borderDark);

    slide.addText(p.badge, {
      x: xPos + 0.2, y: 1.45, w: 2.43, h: 0.2,
      fontFace: FONTS.mono, fontSize: 7, bold: true, color: p.textColor || COLORS.ink
    });

    slide.addText(p.role, {
      x: xPos + 0.2, y: 1.68, w: 2.43, h: 0.35,
      fontFace: FONTS.display, fontSize: 13, bold: true, color: p.textColor || COLORS.ink
    });

    const bulletText = p.traits.map(t => `• ${t}`).join('\n');
    slide.addText('KEY TRAITS:\n' + bulletText, {
      x: xPos + 0.2, y: 2.1, w: 2.43, h: 1.5,
      fontFace: FONTS.body, fontSize: 8.5, color: p.textColor || COLORS.inkMuted, lineSpacing: 13
    });

    slide.addText('COMMUNICATION APPROACH:\n' + p.approach, {
      x: xPos + 0.2, y: 3.7, w: 2.43, h: 1.2,
      fontFace: FONTS.body, fontSize: 8, italic: true, color: p.textColor || COLORS.ink, lineSpacing: 12
    });
  });
}

// ─────────────────────────────────────────────────────────
// SLIDE 4: BRAND PERSONALITY & TONE OF VOICE
// ─────────────────────────────────────────────────────────
{
  const slide = pptx.addSlide();
  setSlideBackground(slide, true, true);
  addSlideHeader(slide, '04 // VOICE & VERBAL IDENTITY', 'Brand Personality & Tone of Voice', true);

  // 4 Top Traits Cards
  const traits = [
    { title: 'APPROACHABLE', desc: 'Friendly as a senior student' },
    { title: 'CREDIBLE', desc: '100% compliant & transparent' },
    { title: 'UNAPOLOGETIC', desc: 'Zero banking fluff or BS' },
    { title: 'SPEED-FIRST', desc: 'Action-oriented in 60s' }
  ];

  traits.forEach((t, i) => {
    const xPos = 0.5 + i * 2.3;
    addBrutalCard(slide, xPos, 1.25, 2.1, 0.95, COLORS.cardDark, COLORS.accentLime, COLORS.accentPurple);
    slide.addText(t.title, {
      x: xPos + 0.1, y: 1.35, w: 1.9, h: 0.25,
      fontFace: FONTS.display, fontSize: 11, bold: true, color: COLORS.accentLime
    });
    slide.addText(t.desc, {
      x: xPos + 0.1, y: 1.6, w: 1.9, h: 0.45,
      fontFace: FONTS.body, fontSize: 8, color: 'B0A898'
    });
  });

  // Do vs Don't 2 Columns (w = 4.3 in)
  addBrutalCard(slide, 0.5, 2.4, 4.3, 2.65, COLORS.cardDark, COLORS.accentLime, COLORS.borderDark);
  slide.addText('✔ HOW CREDITBUDDY SOUNDS (DO)', {
    x: 0.65, y: 2.55, w: 4.0, h: 0.3,
    fontFace: FONTS.display, fontSize: 11, bold: true, color: COLORS.accentLime
  });
  slide.addText('• "Broke today? Borrow instant cash with 0% interest for 30 days."\n• "No salary slip? Upload your College ID and Aadhaar. That\'s literally it."\n• "Earn up to ₹15,000/month leading your campus network."', {
    x: 0.65, y: 2.9, w: 4.0, h: 1.9,
    fontFace: FONTS.body, fontSize: 8.5, color: COLORS.white, lineSpacing: 15
  });

  addBrutalCard(slide, 5.2, 2.4, 4.3, 2.65, COLORS.cardDark, COLORS.accentCoral, COLORS.borderDark);
  slide.addText('✖ WHAT TO AVOID (DON\'T)', {
    x: 5.35, y: 2.55, w: 4.0, h: 0.3,
    fontFace: FONTS.display, fontSize: 11, bold: true, color: COLORS.accentCoral
  });
  slide.addText('• "Dear Valued Customer, your credit facility is subject to underwriting."\n• "Mandatory submission of 6 months bank statements and IT returns."\n• "Leverage multi-channel omni-synergy financial product modules."', {
    x: 5.35, y: 2.9, w: 4.0, h: 1.9,
    fontFace: FONTS.body, fontSize: 8.5, color: COLORS.white, lineSpacing: 15
  });
}

// ─────────────────────────────────────────────────────────
// SLIDE 5: PRIMARY LOGO USAGE
// ─────────────────────────────────────────────────────────
{
  const slide = pptx.addSlide();
  setSlideBackground(slide, false, true);
  addSlideHeader(slide, '05 // LOGO SPECIFICATION', 'Primary Logo Usage & Clearance');

  // 3 Logo Spec Cards (w = 2.83 in)
  addBrutalCard(slide, 0.5, 1.25, 2.83, 2.0, COLORS.white, COLORS.borderDark, COLORS.ink);
  slide.addText('LIGHT BACKGROUND', {
    x: 0.65, y: 1.4, w: 2.5, h: 0.2,
    fontFace: FONTS.mono, fontSize: 7, bold: true, color: COLORS.inkMuted
  });
  slide.addText('CreditBuddy', {
    x: 0.65, y: 1.75, w: 2.5, h: 0.6,
    fontFace: FONTS.display, fontSize: 24, bold: true, color: COLORS.ink
  });

  addBrutalCard(slide, 3.58, 1.25, 2.83, 2.0, COLORS.bgDark, COLORS.accentLime, COLORS.ink);
  slide.addText('DARK BACKGROUND', {
    x: 3.73, y: 1.4, w: 2.5, h: 0.2,
    fontFace: FONTS.mono, fontSize: 7, bold: true, color: COLORS.accentLime
  });
  slide.addText('CreditBuddy', {
    x: 3.73, y: 1.75, w: 2.5, h: 0.6,
    fontFace: FONTS.display, fontSize: 24, bold: true, color: COLORS.white
  });

  addBrutalCard(slide, 6.67, 1.25, 2.83, 2.0, COLORS.accentLime, COLORS.borderDark, COLORS.ink);
  slide.addText('BRAND ACCENT BACKGROUND', {
    x: 6.82, y: 1.4, w: 2.5, h: 0.2,
    fontFace: FONTS.mono, fontSize: 7, bold: true, color: COLORS.ink
  });
  slide.addText('CreditBuddy', {
    x: 6.82, y: 1.75, w: 2.5, h: 0.6,
    fontFace: FONTS.display, fontSize: 24, bold: true, color: COLORS.ink
  });

  // Rules Box (w = 9.0 in)
  addBrutalCard(slide, 0.5, 3.45, 9.0, 1.6, COLORS.white, COLORS.borderDark, COLORS.accentPurple);
  slide.addText('LOGO RULES & CLEARANCE ZONE', {
    x: 0.7, y: 3.6, w: 8.6, h: 0.25,
    fontFace: FONTS.display, fontSize: 11, bold: true, color: COLORS.ink
  });
  slide.addText('• Exclusion Zone: Maintain minimum 0.5x letter height padding around all sides of the wordmark.\n• Minimum Digital Width: 140px on web, 36px for mobile navbar icon.\n• Incorrect Usage: Never stretch, distort, alter wordmark font, or apply drop shadow gradients.', {
    x: 0.7, y: 3.9, w: 8.6, h: 1.0,
    fontFace: FONTS.body, fontSize: 8.5, color: COLORS.inkMuted, lineSpacing: 14
  });
}

// ─────────────────────────────────────────────────────────
// SLIDE 6: SECONDARY / ICON LOGO
// ─────────────────────────────────────────────────────────
{
  const slide = pptx.addSlide();
  setSlideBackground(slide, true, false);
  addSlideHeader(slide, '06 // ICON & FAVICON', 'Secondary Mark & App Icon', true);

  // App Icon Preview Card 1 (w = 2.6 in)
  addBrutalCard(slide, 0.8, 1.35, 2.6, 2.6, COLORS.accentLime, COLORS.borderDark, COLORS.accentPurple);
  slide.addText('CB', {
    x: 0.8, y: 2.0, w: 2.6, h: 0.9,
    fontFace: FONTS.display, fontSize: 44, bold: true, color: COLORS.ink, align: 'center'
  });
  slide.addText('APP LAUNCHER ICON', {
    x: 0.8, y: 4.1, w: 2.6, h: 0.3,
    fontFace: FONTS.mono, fontSize: 8, bold: true, color: COLORS.accentLime, align: 'center'
  });

  // App Icon Preview Card 2 (w = 2.6 in)
  addBrutalCard(slide, 3.7, 1.35, 2.6, 2.6, COLORS.cardDark, COLORS.accentLime, COLORS.borderDark);
  slide.addText('CB', {
    x: 3.7, y: 2.0, w: 2.6, h: 0.9,
    fontFace: FONTS.display, fontSize: 44, bold: true, color: COLORS.accentLime, align: 'center'
  });
  slide.addText('FAVICON / DARK MARK', {
    x: 3.7, y: 4.1, w: 2.6, h: 0.3,
    fontFace: FONTS.mono, fontSize: 8, bold: true, color: COLORS.accentLime, align: 'center'
  });

  // Guidelines Card (w = 2.7 in)
  addBrutalCard(slide, 6.6, 1.35, 2.9, 3.6, COLORS.cardDark, COLORS.accentPurple, COLORS.borderDark);
  slide.addText('USAGE SPECIFICATIONS', {
    x: 6.8, y: 1.55, w: 2.5, h: 0.3,
    fontFace: FONTS.display, fontSize: 11, bold: true, color: COLORS.accentPurple
  });
  slide.addText('• Favicon & App Icon: Use square 1:1 format with 24px border radius.\n• Monogram Mark: "CB" set in Bricolage Grotesque Extrabold.\n• Neo-Brutalist Shadow: Solid 4px offset shadow in #7B5CFF or #14100F.\n• Smallest Size: 16x16px for web favicons.', {
    x: 6.8, y: 1.95, w: 2.5, h: 2.8,
    fontFace: FONTS.body, fontSize: 8.5, color: COLORS.white, lineSpacing: 14
  });
}

// ─────────────────────────────────────────────────────────
// SLIDE 7: COLOUR PALETTE
// ─────────────────────────────────────────────────────────
{
  const slide = pptx.addSlide();
  setSlideBackground(slide, false, true);
  addSlideHeader(slide, '07 // COLOR SYSTEM', 'Official CreditBuddy Color Palette');

  // 3x2 Grid inside x: 0.5 to 9.5 (w = 2.83 in, h = 1.8 in)
  const colorSwatches = [
    { name: 'Warm Cream (Primary BG)', hex: '#FBF7EF', rgb: '251, 247, 239', cmyk: '2, 2, 6, 0', bg: 'FBF7EF', text: COLORS.ink },
    { name: 'Dark Ink (Primary Text)', hex: '#14100F', rgb: '20, 16, 15', cmyk: '60, 60, 60, 90', bg: '14100F', text: COLORS.white },
    { name: 'Accent Lime', hex: '#C8FF3D', rgb: '200, 255, 61', cmyk: '22, 0, 76, 0', bg: 'C8FF3D', text: COLORS.ink },
    { name: 'Accent Purple', hex: '#7B5CFF', rgb: '123, 92, 255', cmyk: '52, 64, 0, 0', bg: '7B5CFF', text: COLORS.white },
    { name: 'Accent Coral', hex: '#FF5A3C', rgb: '255, 90, 60', cmyk: '0, 65, 76, 0', bg: 'FF5A3C', text: COLORS.white },
    { name: 'Accent Gold', hex: '#FFD23F', rgb: '255, 210, 63', cmyk: '0, 18, 75, 0', bg: 'FFD23F', text: COLORS.ink }
  ];

  colorSwatches.forEach((c, i) => {
    const col = i % 3;
    const row = Math.floor(i / 3);
    const xPos = 0.5 + col * 3.08;
    const yPos = 1.25 + row * 1.95;

    addBrutalCard(slide, xPos, yPos, 2.83, 1.8, c.bg, COLORS.borderDark, COLORS.borderDark);

    slide.addText(c.name.toUpperCase(), {
      x: xPos + 0.15, y: yPos + 0.12, w: 2.5, h: 0.2,
      fontFace: FONTS.mono, fontSize: 7, bold: true, color: c.text
    });
    slide.addText(c.hex, {
      x: xPos + 0.15, y: yPos + 0.35, w: 2.5, h: 0.4,
      fontFace: FONTS.display, fontSize: 16, bold: true, color: c.text
    });
    slide.addText(`RGB: ${c.rgb}\nCMYK: ${c.cmyk}`, {
      x: xPos + 0.15, y: yPos + 0.85, w: 2.5, h: 0.75,
      fontFace: FONTS.body, fontSize: 8, color: c.text, lineSpacing: 11
    });
  });
}

// ─────────────────────────────────────────────────────────
// SLIDE 8: TYPOGRAPHY SYSTEM
// ─────────────────────────────────────────────────────────
{
  const slide = pptx.addSlide();
  setSlideBackground(slide, true, false);
  addSlideHeader(slide, '08 // TYPOGRAPHY', 'Typography Hierarchy & Font System', true);

  // 3 Rows (w = 9.0 in, h = 1.15 in)
  const fonts = [
    {
      role: 'DISPLAY & HEADLINES',
      family: 'Bricolage Grotesque',
      spec: 'Extrabold (800) • Tracking -0.02em',
      sample: 'By students. For students.',
      use: 'Used for main hero titles, section headers, and high-impact numerical stats.'
    },
    {
      role: 'BODY COPY & UI LABELS',
      family: 'Plus Jakarta Sans',
      spec: 'Medium (500) & Bold (700)',
      sample: 'Instant cash line approved in 60 seconds with 0% interest.',
      use: 'Used for paragraph descriptions, card body text, and input form labels.'
    },
    {
      role: 'BADGES & MONOSPACE NUMBERS',
      family: 'JetBrains Mono',
      spec: 'Regular (400) & Bold (700)',
      sample: '// 01 INSTANT APPROVED',
      use: 'Used for neo-brutalist pill tags, step indicators, and financial table data.'
    }
  ];

  fonts.forEach((f, i) => {
    const yPos = 1.25 + i * 1.3;
    addBrutalCard(slide, 0.5, yPos, 9.0, 1.15, COLORS.cardDark, COLORS.accentLime, COLORS.borderDark);

    slide.addText(f.role, {
      x: 0.65, y: yPos + 0.1, w: 2.5, h: 0.2,
      fontFace: FONTS.mono, fontSize: 7, bold: true, color: COLORS.accentLime
    });

    slide.addText(`${f.family} — ${f.spec}`, {
      x: 0.65, y: yPos + 0.32, w: 4.5, h: 0.25,
      fontFace: FONTS.display, fontSize: 11, bold: true, color: COLORS.white
    });

    slide.addText(f.sample, {
      x: 0.65, y: yPos + 0.6, w: 4.5, h: 0.4,
      fontFace: FONTS.display, fontSize: 12, bold: true, color: COLORS.accentLime
    });

    slide.addText('USAGE:\n' + f.use, {
      x: 5.5, y: yPos + 0.15, w: 3.8, h: 0.85,
      fontFace: FONTS.body, fontSize: 8, color: 'B0A898', lineSpacing: 11
    });
  });
}

// ─────────────────────────────────────────────────────────
// SLIDE 9: ICONOGRAPHY STYLE
// ─────────────────────────────────────────────────────────
{
  const slide = pptx.addSlide();
  setSlideBackground(slide, false, true);
  addSlideHeader(slide, '09 // ICONOGRAPHY', 'Iconography Style Guide');

  // 4 Columns (w = 2.1 in)
  const iconRules = [
    { title: 'UNIFORM STROKE', val: '2.0px Solid', desc: 'Maintains consistent visual weight across Lucide icon set.' },
    { title: 'CORNER RADIUS', val: '6px - 8px Soft', desc: 'Prevents overly sharp edges; friendly campus feel.' },
    { title: 'CONTAINER PADDING', val: '12px Padding', desc: 'Encapsulated inside brutal square/circle cards.' },
    { title: 'COLOR CODING', val: '3 Accent Tones', desc: 'Lime for Borrow, Gold for Earn, Purple for Learn.' }
  ];

  iconRules.forEach((r, i) => {
    const xPos = 0.5 + i * 2.3;
    addBrutalCard(slide, xPos, 1.25, 2.1, 2.0, COLORS.white, COLORS.borderDark, COLORS.ink);

    slide.addText(r.title, {
      x: xPos + 0.15, y: 1.4, w: 1.8, h: 0.2,
      fontFace: FONTS.mono, fontSize: 7, bold: true, color: COLORS.inkMuted
    });
    slide.addText(r.val, {
      x: xPos + 0.15, y: 1.65, w: 1.8, h: 0.35,
      fontFace: FONTS.display, fontSize: 13, bold: true, color: COLORS.ink
    });
    slide.addText(r.desc, {
      x: xPos + 0.15, y: 2.1, w: 1.8, h: 0.95,
      fontFace: FONTS.body, fontSize: 8.5, color: COLORS.inkMuted, lineSpacing: 12
    });
  });

  // Summary Box (w = 9.0 in)
  addBrutalCard(slide, 0.5, 3.45, 9.0, 1.6, COLORS.accentLime, COLORS.borderDark, COLORS.accentPurple);
  slide.addText('ICON PLACEMENT & ALIGNMENT SPECIFICATIONS', {
    x: 0.7, y: 3.6, w: 8.6, h: 0.25,
    fontFace: FONTS.display, fontSize: 11, bold: true, color: COLORS.ink
  });
  slide.addText('• Icons must always align center-left with card text headlines.\n• Never mix filled icons with outline icons in the same UI component row.\n• Interactive buttons use 16px arrow icons with 45-degree angle (↗ / ↓).', {
    x: 0.7, y: 3.9, w: 8.6, h: 1.0,
    fontFace: FONTS.body, fontSize: 8.5, color: COLORS.ink, lineSpacing: 14
  });
}

// ─────────────────────────────────────────────────────────
// SLIDE 10: PHOTOGRAPHY & ILLUSTRATION STYLE
// ─────────────────────────────────────────────────────────
{
  const slide = pptx.addSlide();
  setSlideBackground(slide, true, true);
  addSlideHeader(slide, '10 // VISUAL ASSETS', 'Photography & 3D Illustration Style', true);

  // 2 Columns (w = 4.3 in)
  addBrutalCard(slide, 0.5, 1.25, 4.3, 3.8, COLORS.cardDark, COLORS.accentLime, COLORS.borderDark);
  slide.addText('3D CHARACTER ILLUSTRATIONS', {
    x: 0.65, y: 1.45, w: 4.0, h: 0.25,
    fontFace: FONTS.mono, fontSize: 8, bold: true, color: COLORS.accentLime
  });
  slide.addText('• Style: Vibrant 3D animated Gen-Z college student characters.\n• Expressions: Cheerful, confident, celebrating financial wins.\n• Props: Smartphones, backpacks, floating Rupee coins & currency notes.\n• Backgrounds: Transparent background for dynamic floating placement on web & mobile.', {
    x: 0.65, y: 1.8, w: 4.0, h: 3.0,
    fontFace: FONTS.body, fontSize: 9, color: COLORS.white, lineSpacing: 16
  });

  addBrutalCard(slide, 5.2, 1.25, 4.3, 3.8, COLORS.cardDark, COLORS.accentPurple, COLORS.borderDark);
  slide.addText('CAMPUS PHOTOGRAPHY DIRECTION', {
    x: 5.35, y: 1.45, w: 4.0, h: 0.25,
    fontFace: FONTS.mono, fontSize: 8, bold: true, color: COLORS.accentPurple
  });
  slide.addText('• Subject: Real Indian college students in authentic campus settings (canteens, libraries, hostel common rooms).\n• Lighting: Warm, natural daylight with vibrant high-contrast tones.\n• Mood: Energetic, collaborative, authentic, non-staged.\n• Anti-Pattern: No generic western corporate stock photography.', {
    x: 5.35, y: 1.8, w: 4.0, h: 3.0,
    fontFace: FONTS.body, fontSize: 9, color: COLORS.white, lineSpacing: 16
  });
}

// ─────────────────────────────────────────────────────────
// SLIDE 11: UI COMPONENT STYLE
// ─────────────────────────────────────────────────────────
{
  const slide = pptx.addSlide();
  setSlideBackground(slide, false, true);
  addSlideHeader(slide, '11 // UI COMPONENTS', 'UI Component Design System');

  // 3 Columns (w = 2.83 in)
  addBrutalCard(slide, 0.5, 1.25, 2.83, 3.8, COLORS.white, COLORS.borderDark, COLORS.ink);
  slide.addText('BRUTAL CARD SPEC', {
    x: 0.65, y: 1.45, w: 2.5, h: 0.2,
    fontFace: FONTS.mono, fontSize: 7, bold: true, color: COLORS.inkMuted
  });
  slide.addText('Card Box', {
    x: 0.65, y: 1.7, w: 2.5, h: 0.35,
    fontFace: FONTS.display, fontSize: 14, bold: true, color: COLORS.ink
  });
  slide.addText('border: 1.6px solid #14100F\nborder-radius: 24px\nbox-shadow: 6px 6px 0px #14100F\n\nBackground Tones:\n#FFFFFF, #C8FF3D, #FFD23F', {
    x: 0.65, y: 2.15, w: 2.5, h: 2.6,
    fontFace: FONTS.body, fontSize: 8.5, color: COLORS.inkMuted, lineSpacing: 14
  });

  addBrutalCard(slide, 3.58, 1.25, 2.83, 3.8, COLORS.accentLime, COLORS.borderDark, COLORS.borderDark);
  slide.addText('BRUTAL PILL SPEC', {
    x: 3.73, y: 1.45, w: 2.5, h: 0.2,
    fontFace: FONTS.mono, fontSize: 7, bold: true, color: COLORS.ink
  });
  slide.addText('Pill Tag', {
    x: 3.73, y: 1.7, w: 2.5, h: 0.35,
    fontFace: FONTS.display, fontSize: 14, bold: true, color: COLORS.ink
  });
  slide.addText('border: 1.6px solid #14100F\nborder-radius: 9999px\npadding: 6px 16px\nfont: JetBrains Mono\n\nUsage:\n// hero badge, tag labels', {
    x: 3.73, y: 2.15, w: 2.5, h: 2.6,
    fontFace: FONTS.body, fontSize: 8.5, color: COLORS.ink, lineSpacing: 14
  });

  addBrutalCard(slide, 6.67, 1.25, 2.83, 3.8, COLORS.bgDark, COLORS.accentLime, COLORS.borderDark);
  slide.addText('PRIMARY BUTTON SPEC', {
    x: 6.82, y: 1.45, w: 2.5, h: 0.2,
    fontFace: FONTS.mono, fontSize: 7, bold: true, color: COLORS.accentLime
  });
  slide.addText('Button CTA', {
    x: 6.82, y: 1.7, w: 2.5, h: 0.35,
    fontFace: FONTS.display, fontSize: 14, bold: true, color: COLORS.white
  });
  slide.addText('background: #14100F\ncolor: #FBF7EF\nborder-radius: 9999px\nbox-shadow: 5px 5px 0px #7B5CFF\nhover: scale(1.05)\n\nCTA Text: "Get Started Free ↗"', {
    x: 6.82, y: 2.15, w: 2.5, h: 2.6,
    fontFace: FONTS.body, fontSize: 8.5, color: 'D0C8B8', lineSpacing: 14
  });
}

// ─────────────────────────────────────────────────────────
// SLIDE 12: SOCIAL MEDIA TEMPLATES
// ─────────────────────────────────────────────────────────
{
  const slide = pptx.addSlide();
  setSlideBackground(slide, true, false);
  addSlideHeader(slide, '12 // SOCIAL MEDIA', 'Social Media Graphic Templates', true);

  // 3 Columns (w = 2.83 in)
  addBrutalCard(slide, 0.5, 1.25, 2.83, 3.8, COLORS.cardDark, COLORS.accentLime, COLORS.borderDark);
  slide.addText('INSTAGRAM CAROUSEL (1:1)', {
    x: 0.65, y: 1.45, w: 2.5, h: 0.2,
    fontFace: FONTS.mono, fontSize: 7, bold: true, color: COLORS.accentLime
  });
  slide.addText('Broke Today,\nBoss Tomorrow.', {
    x: 0.65, y: 1.75, w: 2.5, h: 0.55,
    fontFace: FONTS.display, fontSize: 15, bold: true, color: COLORS.white
  });
  slide.addText('• Bold 60pt Headline in Bricolage Grotesque.\n• Accent Lime pill badge header.\n• 3D character graphic bottom right.\n• Swipe indicator arrow footer.', {
    x: 0.65, y: 2.4, w: 2.5, h: 2.4,
    fontFace: FONTS.body, fontSize: 8.5, color: 'B0A898', lineSpacing: 14
  });

  addBrutalCard(slide, 3.58, 1.25, 2.83, 3.8, COLORS.cardDark, COLORS.accentPurple, COLORS.borderDark);
  slide.addText('TWITTER / X POST (16:9)', {
    x: 3.73, y: 1.45, w: 2.5, h: 0.2,
    fontFace: FONTS.mono, fontSize: 7, bold: true, color: COLORS.accentPurple
  });
  slide.addText('Instant ₹5,000 Credit Line.', {
    x: 3.73, y: 1.75, w: 2.5, h: 0.55,
    fontFace: FONTS.display, fontSize: 15, bold: true, color: COLORS.accentPurple
  });
  slide.addText('• High-contrast solid dark background.\n• Purple accent underline bar.\n• Key metric highlighted in JetBrains Mono.\n• Direct app link CTA.', {
    x: 3.73, y: 2.4, w: 2.5, h: 2.4,
    fontFace: FONTS.body, fontSize: 8.5, color: 'B0A898', lineSpacing: 14
  });

  addBrutalCard(slide, 6.67, 1.25, 2.83, 3.8, COLORS.cardDark, COLORS.accentGold, COLORS.borderDark);
  slide.addText('LINKEDIN ARTICLE (1.91:1)', {
    x: 6.82, y: 1.45, w: 2.5, h: 0.2,
    fontFace: FONTS.mono, fontSize: 7, bold: true, color: COLORS.accentGold
  });
  slide.addText('Building Credit for 35M Students.', {
    x: 6.82, y: 1.75, w: 2.5, h: 0.55,
    fontFace: FONTS.display, fontSize: 15, bold: true, color: COLORS.accentGold
  });
  slide.addText('• Executive leadership tone.\n• Clean white card with 4px offset shadow.\n• Verified statistics & metrics callout.\n• Founder quote attribution.', {
    x: 6.82, y: 2.4, w: 2.5, h: 2.4,
    fontFace: FONTS.body, fontSize: 8.5, color: 'B0A898', lineSpacing: 14
  });
}

// ─────────────────────────────────────────────────────────
// SLIDE 13: PITCH DECK TEMPLATE
// ─────────────────────────────────────────────────────────
{
  const slide = pptx.addSlide();
  setSlideBackground(slide, false, true);
  addSlideHeader(slide, '13 // INVESTOR PRESENTATION', 'Pitch Deck Template System');

  // 4 Columns (w = 2.1 in)
  const deckSlides = [
    { num: 'SLIDE 1', name: 'THE PROBLEM', bg: COLORS.accentLime, desc: '35M+ unbanked Indian college students. Zero credit score, zero income proof.' },
    { num: 'SLIDE 2', name: 'THE SOLUTION', bg: COLORS.white, desc: 'CreditBuddy 3-pillar app: Instant Credit, Campus Micro-gigs, and Financial Education.' },
    { num: 'SLIDE 3', name: 'TRACTION & METRICS', bg: COLORS.accentGold, desc: '100+ Campus ambassador leads, 0% NPL 30-day payback rate, 4.8 App Store rating.' },
    { num: 'SLIDE 4', name: 'THE TEAM', bg: COLORS.accentPurple, textColor: COLORS.white, desc: 'Debashish (Founder & CEO) & team with deep fintech, engineering, and campus growth expertise.' }
  ];

  deckSlides.forEach((s, i) => {
    const xPos = 0.5 + i * 2.3;
    addBrutalCard(slide, xPos, 1.25, 2.1, 3.8, s.bg, COLORS.borderDark, COLORS.ink);

    slide.addText(s.num, {
      x: xPos + 0.15, y: 1.45, w: 1.8, h: 0.2,
      fontFace: FONTS.mono, fontSize: 7, bold: true, color: s.textColor || COLORS.inkMuted
    });
    slide.addText(s.name, {
      x: xPos + 0.15, y: 1.7, w: 1.8, h: 0.45,
      fontFace: FONTS.display, fontSize: 13, bold: true, color: s.textColor || COLORS.ink
    });
    slide.addText(s.desc, {
      x: xPos + 0.15, y: 2.25, w: 1.8, h: 2.5,
      fontFace: FONTS.body, fontSize: 8.5, color: s.textColor || COLORS.ink, lineSpacing: 14
    });
  });
}

// ─────────────────────────────────────────────────────────
// SLIDE 14: EMAIL SIGNATURE TEMPLATE
// ─────────────────────────────────────────────────────────
{
  const slide = pptx.addSlide();
  setSlideBackground(slide, true, false);
  addSlideHeader(slide, '14 // COMMUNICATIONS', 'Branded Email Signature Template', true);

  // Email Signature Card Mockup (w = 9.0 in, h = 3.6 in)
  addBrutalCard(slide, 0.5, 1.35, 9.0, 3.6, COLORS.cardDark, COLORS.accentLime, COLORS.borderDark);

  // Left Avatar Box (w = 2.0 in)
  addBrutalCard(slide, 0.8, 1.65, 2.0, 3.0, COLORS.accentLime, COLORS.borderDark, COLORS.borderDark);
  slide.addText('CB', {
    x: 0.8, y: 2.4, w: 2.0, h: 0.8,
    fontFace: FONTS.display, fontSize: 40, bold: true, color: COLORS.ink, align: 'center'
  });

  // Right Details Text
  slide.addText('DEBASHISH', {
    x: 3.1, y: 1.75, w: 6.0, h: 0.35,
    fontFace: FONTS.display, fontSize: 20, bold: true, color: COLORS.accentLime
  });
  slide.addText('Founder & Chief Executive Officer • CreditBuddy India', {
    x: 3.1, y: 2.1, w: 6.0, h: 0.25,
    fontFace: FONTS.body, fontSize: 10, bold: true, color: COLORS.white
  });

  // Divider Line
  slide.addShape(pptx.shapes.RECTANGLE, {
    x: 3.1, y: 2.45, w: 6.0, h: 0.03,
    fill: { color: COLORS.accentPurple }
  });

  slide.addText('📧 debashish@creditbuddy.in   |   🌐 www.creditbuddy.in\n📱 +91 98765 43210            |   📍 Bengaluru, Karnataka, India\n\n"Building credit from scratch for 35M+ Indian college students."', {
    x: 3.1, y: 2.6, w: 6.0, h: 1.8,
    fontFace: FONTS.body, fontSize: 9, color: 'D0C8B8', lineSpacing: 14
  });
}

// ─────────────────────────────────────────────────────────
// SLIDE 15: BUSINESS CARD DESIGN
// ─────────────────────────────────────────────────────────
{
  const slide = pptx.addSlide();
  setSlideBackground(slide, false, true);
  addSlideHeader(slide, '15 // PRINT ASSETS', 'Business Card Print Specifications');

  // 2 Columns (w = 4.3 in)
  addBrutalCard(slide, 0.5, 1.25, 4.3, 2.8, COLORS.accentLime, COLORS.borderDark, COLORS.ink);
  slide.addText('FRONT SIDE (3.5" x 2.0")', {
    x: 0.65, y: 1.4, w: 4.0, h: 0.2,
    fontFace: FONTS.mono, fontSize: 7, bold: true, color: COLORS.ink
  });
  slide.addText('CreditBuddy', {
    x: 0.65, y: 1.7, w: 4.0, h: 0.5,
    fontFace: FONTS.display, fontSize: 22, bold: true, color: COLORS.ink
  });
  slide.addText('DEBASHISH\nFounder & CEO\n\ndebashish@creditbuddy.in | www.creditbuddy.in', {
    x: 0.65, y: 2.3, w: 4.0, h: 1.5,
    fontFace: FONTS.body, fontSize: 9, color: COLORS.ink, lineSpacing: 13
  });

  // Card Back
  addBrutalCard(slide, 5.2, 1.25, 4.3, 2.8, COLORS.bgDark, COLORS.accentLime, COLORS.ink);
  slide.addText('BACK SIDE (3.5" x 2.0")', {
    x: 5.35, y: 1.4, w: 4.0, h: 0.2,
    fontFace: FONTS.mono, fontSize: 7, bold: true, color: COLORS.accentLime
  });
  slide.addText('CB', {
    x: 5.35, y: 1.7, w: 4.0, h: 0.6,
    fontFace: FONTS.display, fontSize: 36, bold: true, color: COLORS.accentLime
  });
  slide.addText('SCAN TO DOWNLOAD APP\nNFC TAP ENABLED // CAMPUS CARD v1.0', {
    x: 5.35, y: 2.5, w: 4.0, h: 1.3,
    fontFace: FONTS.mono, fontSize: 8, bold: true, color: COLORS.white, lineSpacing: 13
  });

  // Specs Footer
  slide.addText('PRINT SPECS: 350 GSM Matte Cardstock • Spot UV on "CB" Monogram • 3.5" x 2.0" + 0.125" Bleed', {
    x: 0.5, y: 4.4, w: 9.0, h: 0.35,
    fontFace: FONTS.mono, fontSize: 8.5, bold: true, color: COLORS.inkMuted, align: 'center'
  });
}

// ─────────────────────────────────────────────────────────
// SLIDE 16: BRAND DOS & DON'TS
// ─────────────────────────────────────────────────────────
{
  const slide = pptx.addSlide();
  setSlideBackground(slide, true, true);
  addSlideHeader(slide, '16 // BRAND COMPLIANCE', 'Brand Dos & Don\'ts Summary', true);

  // 3x2 Grid inside x: 0.5 to 9.5 (w = 2.83 in, h = 1.8 in)
  const rules = [
    { do: 'Use exact HEX code #C8FF3D for Lime accent elements.', dont: 'Substitute with neon standard yellow or dull olive green.' },
    { do: 'Keep solid 1.6px-2.4px dark borders on all brutal cards.', dont: 'Remove borders or apply soft blurred drop shadows.' },
    { do: 'Use conversational student-first copy tone.', dont: 'Use corporate banking legalese or formal jargon.' },
    { do: 'Maintain 0.5x clear space around all logos.', dont: 'Place logo flush against screen edge or card margins.' },
    { do: 'Use 3D student characters with floating Rupee coins.', dont: 'Use generic corporate stock photo models.' },
    { do: 'Ensure 4.5:1 minimum WCAG contrast ratio on mobile UI.', dont: 'Place dark ink text directly over dark purple cards.' }
  ];

  rules.forEach((r, i) => {
    const col = i % 3;
    const row = Math.floor(i / 3);
    const xPos = 0.5 + col * 3.08;
    const yPos = 1.25 + row * 1.95;

    addBrutalCard(slide, xPos, yPos, 2.83, 1.8, COLORS.cardDark, COLORS.accentLime, COLORS.borderDark);

    slide.addText(`RULE 0${i+1}`, {
      x: xPos + 0.15, y: yPos + 0.12, w: 2.5, h: 0.2,
      fontFace: FONTS.mono, fontSize: 7, bold: true, color: COLORS.accentLime
    });
    slide.addText(`✔ DO: ${r.do}`, {
      x: xPos + 0.15, y: yPos + 0.35, w: 2.5, h: 0.65,
      fontFace: FONTS.body, fontSize: 8, bold: true, color: COLORS.white, lineSpacing: 11
    });
    slide.addText(`✖ DON'T: ${r.dont}`, {
      x: xPos + 0.15, y: yPos + 1.05, w: 2.5, h: 0.65,
      fontFace: FONTS.body, fontSize: 8, color: COLORS.accentCoral, lineSpacing: 11
    });
  });
}

// ─────────────────────────────────────────────────────────
// SAVE PRESENTATION FILE
// ─────────────────────────────────────────────────────────
const outputFileName = 'CreditBuddy_Brand_Guidelines.pptx';
const outputPath = path.join(__dirname, outputFileName);

pptx.writeFile({ fileName: outputPath })
  .then(fileName => {
    console.log(`✅ SUCCESS: Brand Guidelines presentation created at: ${fileName}`);
  })
  .catch(err => {
    console.error('❌ ERROR generating PPT:', err);
  });
