"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, MotionConfig, type Variants } from "motion/react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

/* ----------------------------------------------------------------------------
   Motion presets — editorial fade-up + stagger.
   Wrapped in <MotionConfig reducedMotion="user"> so transforms are auto-disabled
   for visitors who prefer reduced motion (only opacity animates then).
---------------------------------------------------------------------------- */
const EASE = [0.21, 0.47, 0.32, 0.98] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const inView = { initial: "hidden", whileInView: "show", viewport: { once: true, margin: "-80px" } } as const;

type Project = {
  kicker: string;
  title: string;
  role: string;
  problem: string;
  build: string;
  metric: string;
  resultRest: string;
  tags: string[];
  href: string;
  hrefLabel: string;
  mockUrl: string;
  mockAccent: string;
  mockBig: string;
  img: string;
  alt: string;
  caseStudy?: string;
};

const projects: Project[] = [
  {
    kicker: "Business System · ERP",
    title: "Distribution ERP",
    role: "CV Anugerah Sejati — building-materials distributor · CTO & Lead Developer",
    problem:
      "Orders lost between sales & warehouse; nobody knew who owed what; month-end took 3 people two days of copy-pasting Excel.",
    build:
      "One integrated ERP — quotation → order → delivery → invoice with self-updating stock, partial payments & cashback, FIFO costing, and a director's dashboard (P&L, cashflow, receivables).",
    metric: "month-end: 2 days → real-time",
    resultRest: "7 roles · full audit trail · 60+ models, 29 services.",
    tags: ["Laravel", "PHP", "MySQL", "Tailwind", "Alpine.js"],
    href: "https://cvanugerahsejati.com",
    hrefLabel: "Live site ↗",
    caseStudy: "/work/distribution-erp",
    mockUrl: "cvanugerahsejati.com",
    mockAccent: "// distribution control board",
    mockBig: "Sales → Delivery → Invoice",
    img: "/erp.png",
    alt: "CV Anugerah Sejati ERP — distribution control board",
  },
  {
    kicker: "AI SaaS · Product I own",
    title: "FeedLens",
    role: "AI review-intelligence SaaS · Solo founder & full-stack",
    problem:
      "Customer feedback piles up faster than anyone can read it — and a gut-feel summary misses what to actually do about it.",
    build:
      "An AI SaaS that turns raw reviews into decisions: per-review sentiment, a 1–5 score, recurring themes and one concrete action item — Groq (llama-3.3-70b) under a strict-JSON contract, with a Recharts dashboard, auth, metered plans and Xendit billing.",
    metric: "reviews → decisions",
    resultRest: "sentiment · themes · action items · free + Pro tiers · billing in test mode · built & owned end to end.",
    tags: ["Next.js", "TypeScript", "Supabase", "Groq AI", "Recharts", "Xendit"],
    href: "https://getfeedlens.com",
    hrefLabel: "Live site ↗",
    caseStudy: "/work/feedlens",
    mockUrl: "app.getfeedlens.com · dashboard",
    mockAccent: "// review → sentiment · themes · action",
    mockBig: "Reviews → decisions",
    img: "",
    alt: "FeedLens — AI review-intelligence SaaS dashboard",
  },
  {
    kicker: "SaaS · Multi-tenant",
    title: "MomenKita",
    role: "QR-based live photo-sharing for events · Solo founder & full-stack",
    problem:
      "At events, guests want their photos shared instantly — but there's no central, real-time gallery and no one wants to install an app.",
    build:
      "A multi-tenant SaaS: guests scan a QR code and upload to a live shared gallery — no app, no login. Host slideshow, moderation, one-click ZIP.",
    metric: "~80% smaller files",
    resultRest: "via client-side compression, at full HD. Built solo, monetization-ready.",
    tags: ["Next.js", "React", "TypeScript", "Drizzle", "MySQL", "Vercel"],
    href: "https://wedding-photos-nine-black.vercel.app",
    hrefLabel: "Live demo ↗",
    mockUrl: "momenkita · landing",
    mockAccent: "// scan · snap · live",
    mockBig: "Galeri Kenangan",
    img: "/momenkita.png",
    alt: "MomenKita — QR photo-sharing landing page",
  },
  {
    kicker: "Web · Catalogue + Ordering",
    title: "Florist Storefront",
    role: "Catalogue + WhatsApp ordering template · Design & full-stack build",
    problem:
      "Small florists take every order by hand on WhatsApp — customers send reference photos and prices are quoted one at a time, with no catalogue to browse.",
    build:
      "A premium, mobile-first catalogue: browse bouquets by occasion, tap one, and WhatsApp opens pre-filled with the order — plus a self-update admin so the owner edits products in seconds.",
    metric: "browse → WhatsApp in one tap",
    resultRest: "owner-editable catalogue · single-config rebrand · image-optimised · designed, built & deployed in a day.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Framer Motion", "Vercel"],
    href: "https://hanna-petals.vercel.app",
    hrefLabel: "Live demo ↗",
    mockUrl: "florist storefront · demo",
    mockAccent: "// catalogue → whatsapp order",
    mockBig: "Your Florist",
    img: "/florist-demo.jpg",
    alt: "Florist storefront template — catalogue with one-tap WhatsApp ordering",
  },
  {
    kicker: "Web · Beauty E-commerce",
    title: "Lumière — Beauty Storefront",
    role: "Chic beauty brand landing · Design & frontend build",
    problem:
      "Beauty brands live or die on aesthetic — a generic template store reads as cheap and loses trust before the first scroll.",
    build:
      "A premium, editorial storefront: masked headline reveal, scroll parallax, spring micro-interactions, shop-by-concern & social proof — all token-driven, so the whole brand (colors, copy, photos) reskins in minutes.",
    metric: "rebrand in minutes",
    resultRest: "researched from award-winning beauty sites · responsive · accessible · designed, built & deployed in a day.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Framer Motion", "Vercel"],
    href: "https://lumiere-skincare-delta.vercel.app",
    hrefLabel: "Live demo ↗",
    mockUrl: "lumiere · beauty demo",
    mockAccent: "// chic beauty storefront",
    mockBig: "Skin that speaks softly",
    img: "/lumiere.jpg",
    alt: "Lumière beauty storefront — chic editorial hero with serum product",
  },
  {
    kicker: "Web · Food E-commerce",
    title: "OLEA — Olive Oil Storefront",
    role: "Premium food brand storefront · Design & frontend build",
    problem:
      "Premium food brands need a site that tastes as considered as the product — a template store reads as cheap and kills the sense of craft before the first scroll.",
    build:
      "An editorial single-estate storefront: masked headline reveal, scroll parallax, an infinite trust marquee, a dark provenance section, an interactive grove-to-glass gallery & a tasting guarantee — all token-driven, so the whole brand reskins in minutes.",
    metric: "rebrand in minutes",
    resultRest: "interactive gallery · dark provenance section · responsive · accessible · designed, built & deployed in a day.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Framer Motion", "Vercel"],
    href: "https://olea-storefront.vercel.app",
    hrefLabel: "Live demo ↗",
    mockUrl: "olea · food demo",
    mockAccent: "// single-estate olive oil",
    mockBig: "Taste that lingers",
    img: "/olea.jpg",
    alt: "OLEA olive oil storefront — editorial hero with a single-estate bottle",
  },
  {
    kicker: "Web · Company Profile · B2B",
    title: "Arkatek — Engineering Company Profile",
    role: "Corporate site for an industrial engineering firm · Design & frontend build",
    problem:
      "Industrial B2B buyers judge a supplier's website in 60–90 seconds — a generic template reads as unproven and drops off the shortlist before the specs are even read.",
    build:
      "A precision-led corporate site: a kinetic hero, animated stat counters, a capabilities bento, spec-driven project case studies, procurement-ready certifications, a light/dark toggle and duotone industrial photography — engineered to signal credibility fast.",
    metric: "trust in 60 seconds",
    resultRest: "light + dark themes · animated counters · duotone imagery · WCAG-minded · static build, Next.js-portable · designed, built & deployed fast.",
    tags: ["HTML", "CSS", "JavaScript", "Responsive", "Light / Dark"],
    href: "https://arkatek-site.vercel.app",
    hrefLabel: "Live demo ↗",
    mockUrl: "arkatek · company profile",
    mockAccent: "// electrical · mechanical · automation",
    mockBig: "Precision engineering",
    img: "/arkatek.png",
    alt: "Arkatek — company profile site for an electrical & industrial engineering firm",
  },
  {
    kicker: "Web · Motion & Gamification",
    title: "Motion Lab — Gamified EdTech",
    role: "Interactive learning-animation system · Motion design & frontend build",
    problem:
      "Gamified learning apps need animations that feel rewarding but never distract — most builds ship flashy effects that lag or pull a student's focus mid-question.",
    build:
      "A live, clickable animation system: an interactive Rive mascot (state machine), a 30-day streak celebration, XP counters with a fill-ring, level-up set-pieces, badge unlocks and calm answer feedback — Rive + Lottie + Framer Motion, integrated in React.",
    metric: "Rive + Lottie + Framer",
    resultRest: "state-machine mascot · 6 interactive mechanics · reduced-motion aware · lightweight · built to drop into an existing codebase.",
    tags: ["Next.js", "TypeScript", "Framer Motion", "Rive", "Lottie"],
    href: "https://edtech-motion-lab.vercel.app",
    hrefLabel: "Live demo ↗",
    mockUrl: "motion-lab · edtech demo",
    mockAccent: "// gamified learning animations",
    mockBig: "Feels rewarding",
    img: "/motion-lab.jpg",
    alt: "Motion Lab — gamified EdTech animation demo with a claymorphic app preview",
  },
  {
    kicker: "SaaS · Supabase · Realtime",
    title: "CrewBoard — Multi-tenant SaaS",
    role: "Team task board · Full-stack build (Supabase + Next.js)",
    problem:
      "Teams need one shared board every member sees update in real time — but each team's data must stay strictly isolated at the database, not just hidden in the UI.",
    build:
      "A live kanban SaaS: Supabase Auth, a relational Postgres schema, database-level Row Level Security so each workspace is fully isolated, and Realtime so cards move across sessions instantly. Sign-up auto-seeds a private workspace.",
    metric: "RLS-isolated + realtime",
    resultRest: "Supabase Auth · Row Level Security · live sync · role-based access · seeded demo account so you can click straight in.",
    tags: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "RLS", "Realtime"],
    href: "https://crewboard-ciel-vins-projects.vercel.app",
    hrefLabel: "Live demo ↗",
    caseStudy: "/work/crewboard",
    mockUrl: "crewboard · saas demo",
    mockAccent: "// multi-tenant team board",
    mockBig: "Stays in sync",
    img: "/crewboard.jpg",
    alt: "CrewBoard — multi-tenant team kanban SaaS built with Supabase (Auth, RLS, Realtime)",
  },
  {
    kicker: "Backend · Integration · AI",
    title: "FlowBridge — Lead Integration",
    role: "Lead-integration service + live dashboard · Full-stack (FastAPI + Next.js)",
    problem:
      "Leads arrive from a dozen places and must land in a CRM cleanly — no duplicates, enriched, and reliably even when the CRM is down. Brittle glue scripts break at exactly the wrong moment.",
    build:
      "A small integration engine: webhook → contract validation → idempotent dedupe → relational normalize → AI enrichment (classify, prioritise, summarise) → CRM sync with retry & backoff. Provider-agnostic AI (Groq), plus a live dashboard to fire test webhooks and watch the pipeline run.",
    metric: "webhook → CRM, exactly once",
    resultRest: "idempotency ledger · retry + backoff · real Groq AI enrichment · FastAPI + SQLite backend, dashboard in Next.js + framer-motion — deployed live.",
    tags: ["FastAPI", "Python", "Next.js", "TypeScript", "Groq AI", "Docker"],
    href: "https://dashboard-nine-tau-50.vercel.app",
    hrefLabel: "Live demo ↗",
    mockUrl: "flowbridge · integration",
    mockAccent: "// webhook → enrich → sync",
    mockBig: "Data that flows",
    img: "/flowbridge.png",
    alt: "FlowBridge — lead-integration service dashboard with live Groq AI enrichment",
  },
];

const stack = [
  { h: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Alpine.js"] },
  { h: "Backend & Data", items: ["Laravel / PHP", "REST APIs", "MySQL", "Drizzle ORM", "Auth · Cloud storage"] },
  { h: "Practice", items: ["Full-stack architecture", "Multi-tenant SaaS", "ERP / business systems", "AI-assisted dev (Claude Code)", "Git"] },
];

function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1240px] px-6 sm:px-8 lg:px-10 ${className}`}>{children}</div>;
}

function Kicker({ children }: { children: React.ReactNode }) {
  return <span className="font-mono text-[0.78rem] tracking-wide text-brand">{children}</span>;
}

/* Section heading with a number kicker, revealed on scroll. */
function SectionHead({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <motion.div variants={fadeUp} {...inView} className="mb-9 flex items-baseline gap-4">
      <Kicker>{n}</Kicker>
      <h2 className="font-serif text-[clamp(1.7rem,3.4vw,2.4rem)] font-medium">{children}</h2>
    </motion.div>
  );
}

function Mock({ url, accent, big, img, alt, priority }: { url: string; accent: string; big: string; img?: string; alt?: string; priority?: boolean }) {
  return (
    <div className="w-full overflow-hidden rounded-[10px] border border-[#28333f] shadow-[0_24px_60px_-30px_rgba(0,0,0,0.8)]">
      <div className="flex items-center gap-1.5 border-b border-[#1d2733] bg-[#0c1219] px-3 py-2.5">
        <i className="h-2.5 w-2.5 rounded-full bg-[#2a3744]" />
        <i className="h-2.5 w-2.5 rounded-full bg-[#2a3744]" />
        <i className="h-2.5 w-2.5 rounded-full bg-[#2a3744]" />
        <span className="ml-2 font-mono text-[0.68rem] text-[#5d6b78]">{url}</span>
      </div>
      {img ? (
        // `fill` + aspect wrapper keeps the 16/10 crop responsive and avoids
        // Next.js' "width/height modified but not the other" warning.
        <div className="relative aspect-[16/10] w-full">
          <Image
            src={img}
            alt={alt ?? ""}
            fill
            priority={priority}
            sizes="(max-width: 768px) 100vw, 600px"
            className="object-cover object-top"
          />
        </div>
      ) : (
        <div className="flex aspect-[16/10] flex-col justify-center gap-2 bg-[radial-gradient(120%_120%_at_70%_0%,#16202c,#0c1117)] p-6">
          <span className="font-mono text-[0.7rem] text-brand">{accent}</span>
          <div className="font-serif text-2xl text-ink">{big}</div>
          <div className="h-2 w-[70%] rounded bg-[#1c2733]" />
          <div className="h-2 w-[45%] rounded bg-[#223341]" />
          <div className="h-2 w-[70%] rounded bg-[#1c2733]" />
        </div>
      )}
    </div>
  );
}

function ProjectCard({ p, reverse, priority }: { p: (typeof projects)[number]; reverse: boolean; priority: boolean }) {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 320, damping: 26 }}
      className="grid grid-cols-1 overflow-hidden rounded-2xl border border-line bg-surface transition-colors hover:border-[#33414f] md:grid-cols-2"
    >
      <div className={`p-8 lg:p-10 ${reverse ? "md:order-2" : ""}`}>
        <Kicker>{p.kicker}</Kicker>
        <h3 className="mt-2.5 font-serif text-2xl font-semibold">{p.title}</h3>
        <p className="mt-1 text-sm text-faint">{p.role}</p>
        <div className="my-4 flex flex-col gap-2.5">
          {([["problem", p.problem], ["build", p.build]] as const).map(([k, v]) => (
            <div key={k} className="flex gap-2.5 text-[0.96rem] text-[#cdd6df]">
              <span className="min-w-[74px] pt-1 font-mono text-[0.72rem] text-brand">{k}</span>
              <span>{v}</span>
            </div>
          ))}
          <div className="flex gap-2.5 text-[0.96rem] text-[#cdd6df]">
            <span className="min-w-[74px] pt-1 font-mono text-[0.72rem] text-brand">result</span>
            <span>
              <span className="inline-block rounded-[7px] border border-brand/25 bg-brand/10 px-2 py-0.5 font-mono text-[0.82rem] font-medium text-brand">
                {p.metric}
              </span>{" "}
              {p.resultRest}
            </span>
          </div>
        </div>
        <div className="my-5 flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <Badge key={t} variant="outline" className="rounded-md border-line font-mono text-[0.74rem] font-normal text-faint">
              {t}
            </Badge>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-5">
          <a href={p.href} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-brand hover:underline">
            {p.hrefLabel}
          </a>
          {p.caseStudy && (
            <Link href={p.caseStudy} className="text-sm font-semibold text-ink transition-colors hover:text-brand">
              Read case study →
            </Link>
          )}
        </div>
      </div>
      <div className={`flex items-center justify-center border-line bg-[linear-gradient(160deg,#0e141b,#11181f)] p-6 lg:p-8 ${reverse ? "md:order-1 md:border-r" : "md:border-l"} border-t md:border-t-0`}>
        <Mock url={p.mockUrl} accent={p.mockAccent} big={p.mockBig} img={p.img} alt={p.alt} priority={priority} />
      </div>
    </motion.article>
  );
}

/* Right-side hero panel — fills the desktop width with real content (live builds)
   instead of leaving the right half empty. */
function NowPanel() {
  const live = [
    { name: "Distribution ERP", host: "cvanugerahsejati.com", href: "https://cvanugerahsejati.com", note: "live · in production" },
    { name: "FeedLens", host: "getfeedlens.com · ai saas", href: "https://getfeedlens.com", note: "live · product I own" },
    { name: "MomenKita", host: "momenkita · vercel", href: "https://wedding-photos-nine-black.vercel.app", note: "live demo" },
    { name: "Florist Storefront", host: "florist demo · vercel", href: "https://hanna-petals.vercel.app", note: "live demo" },
    { name: "Lumière", host: "beauty demo · vercel", href: "https://lumiere-skincare-delta.vercel.app", note: "live demo" },
    { name: "OLEA", host: "food demo · vercel", href: "https://olea-storefront.vercel.app", note: "live demo" },
    { name: "Arkatek", host: "company profile · b2b", href: "https://arkatek-site.vercel.app", note: "live demo" },
    { name: "Motion Lab", host: "edtech demo · vercel", href: "https://edtech-motion-lab.vercel.app", note: "live demo" },
    { name: "CrewBoard", host: "saas demo · vercel", href: "https://crewboard-ciel-vins-projects.vercel.app", note: "live demo" },
    { name: "FlowBridge", host: "integration · ai", href: "https://dashboard-nine-tau-50.vercel.app", note: "live demo" },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, ease: EASE, delay: 0.15 }}
      className="relative w-full overflow-hidden rounded-2xl border border-line bg-surface/70 shadow-[0_40px_90px_-50px_rgba(0,0,0,0.9)] backdrop-blur-sm"
    >
      <div className="flex items-center gap-1.5 border-b border-[#1d2733] bg-[#0c1219]/80 px-4 py-3">
        <i className="h-2.5 w-2.5 rounded-full bg-[#2a3744]" />
        <i className="h-2.5 w-2.5 rounded-full bg-[#2a3744]" />
        <i className="h-2.5 w-2.5 rounded-full bg-[#2a3744]" />
        <span className="ml-2 font-mono text-[0.7rem] text-[#5d6b78]">alvin@dev — ~/now</span>
      </div>

      <div className="space-y-1 p-5 font-mono text-[0.82rem] leading-relaxed sm:p-6">
        <p className="text-[#5d6b78]">$ whoami</p>
        <p className="text-ink">full-stack · Laravel + Next.js · ships to production</p>
        <p className="mt-3 text-[#5d6b78]">$ ls ~/shipping</p>
      </div>

      <ul className="space-y-2.5 px-5 pb-5 sm:px-6 sm:pb-6">
        {live.map((l, i) => (
          <motion.li
            key={l.name}
            initial={{ opacity: 0, x: 14 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: EASE, delay: 0.35 + i * 0.12 }}
          >
            <a
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-3 rounded-xl border border-line bg-bg/40 px-4 py-3 transition-colors hover:border-brand/50 hover:bg-bg/70"
            >
              <span className="flex items-center gap-3">
                <motion.span
                  className="h-[9px] w-[9px] shrink-0 rounded-full bg-brand shadow-[0_0_0_3px_rgba(74,222,128,0.18)]"
                  animate={{ opacity: [1, 0.35, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
                />
                <span>
                  <span className="block text-[0.92rem] font-semibold text-ink">{l.name}</span>
                  <span className="block font-mono text-[0.72rem] text-faint">{l.host}</span>
                </span>
              </span>
              <span className="font-mono text-[0.68rem] text-brand opacity-0 transition-opacity group-hover:opacity-100">open ↗</span>
            </a>
          </motion.li>
        ))}
      </ul>

      {/* soft brand glow */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-brand/15 blur-3xl" />
    </motion.div>
  );
}

export default function Home() {
  return (
    <MotionConfig reducedMotion="user">
      <nav className="sticky top-0 z-50 border-b border-line bg-bg/70 backdrop-blur-md">
        <Container className="flex h-[62px] items-center justify-between">
          <a href="#top" className="font-serif text-[1.15rem] font-semibold">
            Alvin Salim<span className="text-brand">.</span>
          </a>
          <div className="flex items-center gap-6">
            <a href="#work" className="hidden text-[0.92rem] text-faint transition-colors hover:text-ink sm:inline">Work</a>
            <a href="#about" className="hidden text-[0.92rem] text-faint transition-colors hover:text-ink sm:inline">About</a>
            <a href="#contact" className="hidden text-[0.92rem] text-faint transition-colors hover:text-ink sm:inline">Contact</a>
            <Badge variant="outline" className="gap-2 rounded-full border-line px-3 py-1.5 font-normal text-faint">
              <span className="h-[7px] w-[7px] rounded-full bg-brand shadow-[0_0_0_3px_rgba(74,222,128,0.18)]" />
              Open to freelance
            </Badge>
          </div>
        </Container>
      </nav>

      <header id="top" className="relative overflow-hidden py-[88px] lg:py-[112px]">
        {/* ambient background */}
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_75%_0%,rgba(74,222,128,0.08),transparent_70%)]" />
        <Container>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="show"
              className="lg:col-span-7"
            >
              <motion.div variants={fadeUp}>
                <Kicker>{"// Full-Stack Developer — Laravel · Next.js"}</Kicker>
              </motion.div>
              <motion.h1
                variants={fadeUp}
                className="my-5 max-w-[16ch] font-serif text-[clamp(2.6rem,6vw,4.6rem)] font-medium leading-[1.03] tracking-[-0.5px]"
              >
                I build business systems that <em className="italic text-brand">just work.</em>
              </motion.h1>
              <motion.p variants={fadeUp} className="max-w-[54ch] text-[1.18rem] text-faint">
                I turn messy, real-world operations — the spreadsheets, the WhatsApp threads, the guesswork — into{" "}
                <b className="font-semibold text-ink">software teams actually use</b>. From the database to the dashboard, I own it end to end.
              </motion.p>
              <motion.div variants={fadeUp} className="mt-9 flex flex-wrap gap-3.5">
                <Button
                  nativeButton={false}
                  render={<a href="#work" />}
                  className="h-auto rounded-[10px] bg-brand px-5 py-3 text-[0.95rem] font-semibold text-[#04130a] hover:bg-brand-strong"
                >
                  View selected work →
                </Button>
                <Button
                  variant="outline"
                  nativeButton={false}
                  render={<a href="mailto:alvinsalim01@gmail.com" />}
                  className="h-auto rounded-[10px] border-line bg-transparent px-5 py-3 text-[0.95rem] font-semibold text-ink hover:border-brand hover:bg-transparent hover:text-brand"
                >
                  Get in touch
                </Button>
              </motion.div>
              <motion.div variants={fadeUp} className="mt-12 flex flex-wrap gap-x-7 gap-y-3 text-[0.9rem] text-faint">
                <span><b className="text-ink">4+ yrs</b> shipping production software</span>
                <span><b className="text-ink">CTO</b> & sole engineer of a live ERP</span>
                <span>Based in <b className="text-ink">Surabaya</b> · works remote</span>
              </motion.div>
            </motion.div>

            <div className="lg:col-span-5">
              <NowPanel />
            </div>
          </div>
        </Container>
      </header>

      <section id="work" className="border-t border-line py-[72px] lg:py-24">
        <Container>
          <SectionHead n="01">Selected Work</SectionHead>
          <motion.div variants={stagger} {...inView} className="flex flex-col gap-[30px]">
            {projects.map((p, i) => (
              <ProjectCard key={p.title} p={p} reverse={i % 2 === 1} priority={i === 0} />
            ))}
          </motion.div>
        </Container>
      </section>

      <section id="about" className="border-t border-line py-[72px] lg:py-24">
        <Container>
          <SectionHead n="02">How I work</SectionHead>
          <motion.div variants={stagger} {...inView} className="grid grid-cols-1 items-start gap-10 md:grid-cols-2">
            <motion.div variants={fadeUp} className="space-y-4 text-[#cdd6df]">
              <p>I&apos;m a full-stack developer who started by building a company&apos;s entire operations platform from scratch — as its CTO and only engineer. That meant sitting with the sales, purchasing, and finance teams first, learning how the business <em className="italic">actually</em> runs, then designing the system around reality.</p>
              <p>I work across Laravel/PHP and Next.js/React/TypeScript, and I use AI tooling (Claude Code) to ship fast — while staying in control of every line. I own the architecture, not just the syntax.</p>
            </motion.div>
            <motion.blockquote variants={fadeUp} className="border-l-2 border-brand pl-5 font-serif text-[1.3rem] italic leading-[1.45] text-ink">
              &ldquo;Software that fits how people work beats software that&apos;s clean but ignores how people work.&rdquo;
            </motion.blockquote>
          </motion.div>
        </Container>
      </section>

      <section id="stack" className="border-t border-line py-[72px] lg:py-24">
        <Container>
          <SectionHead n="03">Stack</SectionHead>
          <motion.div variants={stagger} {...inView} className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {stack.map((g) => (
              <motion.div key={g.h} variants={fadeUp}>
                <h4 className="mb-2.5 font-mono text-[0.75rem] uppercase tracking-wider text-brand">{g.h}</h4>
                <ul className="text-[0.95rem] text-[#cdd6df]">
                  {g.items.map((it) => (
                    <li key={it} className="border-b border-line py-1">{it}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      <section id="contact" className="border-t border-line py-24 text-center lg:py-28">
        <Container>
          <motion.div variants={stagger} {...inView}>
            <motion.div variants={fadeUp}>
              <Kicker>{"// let's build"}</Kicker>
            </motion.div>
            <motion.h2 variants={fadeUp} className="mb-4 mt-3.5 font-serif text-[clamp(2rem,5vw,3.2rem)] font-medium">
              Got a process held together by <em className="italic text-brand">spreadsheets?</em>
            </motion.h2>
            <motion.p variants={fadeUp} className="mx-auto mb-7 max-w-[46ch] text-faint">
              Tell me what&apos;s slowing your operations down — I&apos;ll tell you honestly how I&apos;d build it.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Button
                nativeButton={false}
                render={<a href="mailto:alvinsalim01@gmail.com" />}
                className="h-auto rounded-[10px] bg-brand px-5 py-3 text-[0.95rem] font-semibold text-[#04130a] hover:bg-brand-strong"
              >
                alvinsalim01@gmail.com
              </Button>
            </motion.div>
            <motion.div variants={fadeUp} className="mt-7 flex flex-wrap justify-center gap-6 font-mono text-[0.9rem]">
              <a href="https://linkedin.com/in/alvin-salim-57b06240a" target="_blank" rel="noopener noreferrer" className="text-faint transition-colors hover:text-brand">LinkedIn ↗</a>
              <a href="https://cvanugerahsejati.com" target="_blank" rel="noopener noreferrer" className="text-faint transition-colors hover:text-brand">ERP ↗</a>
              <a href="https://getfeedlens.com" target="_blank" rel="noopener noreferrer" className="text-faint transition-colors hover:text-brand">FeedLens ↗</a>
              <a href="https://wedding-photos-nine-black.vercel.app" target="_blank" rel="noopener noreferrer" className="text-faint transition-colors hover:text-brand">MomenKita ↗</a>
              <a href="https://hanna-petals.vercel.app" target="_blank" rel="noopener noreferrer" className="text-faint transition-colors hover:text-brand">Florist Demo ↗</a>
              <a href="https://lumiere-skincare-delta.vercel.app" target="_blank" rel="noopener noreferrer" className="text-faint transition-colors hover:text-brand">Lumière ↗</a>
              <a href="https://olea-storefront.vercel.app" target="_blank" rel="noopener noreferrer" className="text-faint transition-colors hover:text-brand">OLEA ↗</a>
              <a href="https://arkatek-site.vercel.app" target="_blank" rel="noopener noreferrer" className="text-faint transition-colors hover:text-brand">Arkatek ↗</a>
              <a href="https://edtech-motion-lab.vercel.app" target="_blank" rel="noopener noreferrer" className="text-faint transition-colors hover:text-brand">Motion Lab ↗</a>
              <a href="https://crewboard-ciel-vins-projects.vercel.app" target="_blank" rel="noopener noreferrer" className="text-faint transition-colors hover:text-brand">CrewBoard ↗</a>
              <a href="https://dashboard-nine-tau-50.vercel.app" target="_blank" rel="noopener noreferrer" className="text-faint transition-colors hover:text-brand">FlowBridge ↗</a>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      <footer className="border-t border-line py-7">
        <Container className="flex flex-wrap justify-between gap-2 text-[0.82rem] text-[#5d6b78]">
          <span>© {new Date().getFullYear()} Alvin Salim</span>
          <span className="font-mono">Built &amp; designed by hand.</span>
        </Container>
      </footer>
    </MotionConfig>
  );
}
