"use client";

import Link from "next/link";
import { motion, MotionConfig, type Variants } from "motion/react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

/* ----------------------------------------------------------------------------
   Motion presets — mirrors app/page.tsx so the case study reads as one system.
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

function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1080px] px-6 sm:px-8 lg:px-10 ${className}`}>{children}</div>;
}

function Kicker({ children }: { children: React.ReactNode }) {
  return <span className="font-mono text-[0.78rem] tracking-wide text-brand">{children}</span>;
}

function SectionHead({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <motion.div variants={fadeUp} {...inView} className="mb-9 flex items-baseline gap-4">
      <Kicker>{n}</Kicker>
      <h2 className="font-serif text-[clamp(1.6rem,3.2vw,2.2rem)] font-medium">{children}</h2>
    </motion.div>
  );
}

/* Data — confirmed from the FeedLens source (getfeedlens.com / pulse repo). */
const stats = [
  { big: "3", label: "signals / review (sentiment · themes · action)" },
  { big: "1–5", label: "sentiment score scale" },
  { big: "50/mo", label: "free-tier analyses" },
  { big: "Solo", label: "designed, built & owned" },
];

const features = [
  {
    step: "01",
    name: "Paste or upload feedback",
    body: "Drop in raw customer reviews from anywhere — no schema, no setup — and FeedLens takes it from there.",
  },
  {
    step: "02",
    name: "Per-review AI signals",
    body: "Each review gets a sentiment (pos/neu/neg), a 1–5 score, up to 3 recurring themes, and one concrete action item.",
  },
  {
    step: "03",
    name: "Dashboard & trends",
    body: "Sentiment over time, top themes and an action-item queue — the signal, not the noise, in one calm view.",
  },
  {
    step: "04",
    name: "Plans & billing",
    body: "Auth, workspaces, a metered free tier and a Pro plan with checkout — the full SaaS surface.",
  },
];

const underHood = [
  {
    title: "AI analysis pipeline (Groq)",
    body: "Reviews are analysed by llama-3.3-70b via Groq under a strict-JSON contract, so each one comes back as clean, typed data — sentiment, score, up to three themes and a specific action — same length and order as the input, no free-text drift.",
    span: "md:col-span-2",
  },
  {
    title: "Auth & workspaces",
    body: "Supabase Auth with a server-side session (@supabase/ssr), so every query runs as the signed-in user across workspaces.",
    span: "",
  },
  {
    title: "Metering & rate limits",
    body: "A metered free tier (50 analyses/month), per-user rate limiting and Pro gating keep the AI spend and abuse in check.",
    span: "",
  },
  {
    title: "Billing (Xendit)",
    body: "Checkout via Xendit with a signature-verified webhook — a PAID/SETTLED invoice flips the workspace to Pro. (Billing is wired end-to-end and currently runs in test mode.)",
    span: "md:col-span-2",
  },
  {
    title: "Analytics dashboard",
    body: "Recharts-driven sentiment-over-time and theme breakdowns turn the AI output into something a team can actually read at a glance.",
    span: "",
  },
  {
    title: "Product-grade surface",
    body: "Next.js 16 App Router, a real login, settings, theming, and privacy/terms pages — built like a product, not a demo.",
    span: "",
  },
];

const stackGroups = [
  { h: "Frontend", items: ["Next.js 16", "React 19", "TypeScript", "Tailwind v4", "Recharts"] },
  { h: "Backend & AI", items: ["Supabase (Auth + DB)", "Groq · llama-3.3-70b", "Route handlers"] },
  { h: "Billing & Ops", items: ["Xendit (checkout + webhook)", "Metering / rate limits", "Vercel Analytics"] },
];

const outcomes = [
  "A live, working AI SaaS I designed, built and own end to end — from the AI pipeline to the dashboard to billing.",
  "AI wired into a real workflow (feedback → decisions), not a chatbot bolted onto a page.",
  "Structured, typed AI output under a strict contract — reliable enough to build a product on.",
  "The full SaaS surface: auth, workspaces, metered free tier, Pro plan and checkout (Xendit, in test mode).",
];

const LIVE = "https://getfeedlens.com";

export default function FeedlensCaseStudy() {
  return (
    <MotionConfig reducedMotion="user">
      <nav className="sticky top-0 z-50 border-b border-line bg-bg/70 backdrop-blur-md">
        <Container className="flex h-[62px] items-center justify-between">
          <Link href="/" className="font-serif text-[1.05rem] font-semibold">
            Alvin Salim<span className="text-brand">.</span>
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/#work" className="text-[0.9rem] text-faint transition-colors hover:text-ink">
              ← All work
            </Link>
            <a href={LIVE} target="_blank" rel="noopener noreferrer" className="text-[0.9rem] font-semibold text-brand hover:underline">
              Live site ↗
            </a>
          </div>
        </Container>
      </nav>

      {/* Hero */}
      <header className="relative overflow-hidden py-[72px] lg:py-[92px]">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_75%_0%,rgba(74,222,128,0.08),transparent_70%)]" />
        <Container>
          <motion.div variants={stagger} initial="hidden" animate="show">
            <motion.div variants={fadeUp}>
              <Kicker>{"// Case Study · AI SaaS · Product I own"}</Kicker>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="my-4 max-w-[18ch] font-serif text-[clamp(2.3rem,5.4vw,3.9rem)] font-medium leading-[1.04] tracking-[-0.5px]"
            >
              Feed<em className="italic text-brand">Lens</em>
            </motion.h1>
            <motion.p variants={fadeUp} className="max-w-[62ch] text-[1.12rem] text-faint">
              An AI SaaS that turns <b className="font-semibold text-ink">raw customer reviews into decisions</b> — sentiment,
              recurring themes and the concrete action items worth a team's time, in one calm dashboard. Designed, built and
              owned end to end.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-6 flex flex-wrap gap-2">
              {["Next.js · Supabase", "Groq AI", "SaaS I own", "Xendit billing"].map((t) => (
                <Badge key={t} variant="outline" className="rounded-md border-line font-mono text-[0.74rem] font-normal text-faint">
                  {t}
                </Badge>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3.5">
              <Button
                nativeButton={false}
                render={<a href={LIVE} target="_blank" rel="noopener noreferrer" />}
                className="h-auto rounded-[10px] bg-brand px-5 py-3 text-[0.95rem] font-semibold text-[#04130a] hover:bg-brand-strong"
              >
                Open live site →
              </Button>
              <Button
                variant="outline"
                nativeButton={false}
                render={<Link href="/#work" />}
                className="h-auto rounded-[10px] border-line bg-transparent px-5 py-3 text-[0.95rem] font-semibold text-ink hover:border-brand hover:bg-transparent hover:text-brand"
              >
                ← Back to work
              </Button>
            </motion.div>
          </motion.div>

          {/* On-brand product mock (echoes the real dashboard) */}
          <motion.div variants={fadeUp} {...inView} className="mt-12">
            <div className="w-full overflow-hidden rounded-[10px] border border-[#28333f] shadow-[0_24px_60px_-30px_rgba(0,0,0,0.8)]">
              <div className="flex items-center gap-1.5 border-b border-[#1d2733] bg-[#0c1219] px-3 py-2.5">
                <i className="h-2.5 w-2.5 rounded-full bg-[#2a3744]" />
                <i className="h-2.5 w-2.5 rounded-full bg-[#2a3744]" />
                <i className="h-2.5 w-2.5 rounded-full bg-[#2a3744]" />
                <span className="ml-2 font-mono text-[0.68rem] text-[#5d6b78]">app.getfeedlens.com · dashboard</span>
              </div>
              <div className="bg-[radial-gradient(120%_120%_at_70%_0%,#16202c,#0c1117)] p-6 sm:p-8">
                <span className="font-mono text-[0.72rem] text-brand">// review → sentiment · themes · action</span>
                <div className="mt-3 font-serif text-[clamp(1.4rem,3vw,2rem)] text-ink">Raw reviews, turned into decisions.</div>
                <div className="mt-6 grid grid-cols-3 gap-3">
                  {[
                    { k: "Sentiment", v: "pos · neu · neg" },
                    { k: "Themes", v: "up to 3 / review" },
                    { k: "Action items", v: "1 concrete step" },
                  ].map((t) => (
                    <div key={t.k} className="rounded-lg border border-line bg-bg/40 p-3">
                      <div className="font-mono text-[0.68rem] uppercase tracking-wider text-brand">{t.k}</div>
                      <div className="mt-1 text-[0.82rem] text-[#cdd6df]">{t.v}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-5 space-y-2">
                  <div className="h-2 w-[72%] rounded bg-[#1c2733]" />
                  <div className="h-2 w-[52%] rounded bg-[#223341]" />
                  <div className="h-2 w-[64%] rounded bg-[#1c2733]" />
                </div>
              </div>
            </div>
          </motion.div>
        </Container>
      </header>

      {/* Stat band */}
      <section className="border-t border-line py-12">
        <Container>
          <motion.div variants={stagger} {...inView} className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((s) => (
              <motion.div key={s.label} variants={fadeUp}>
                <div className="font-serif text-[clamp(1.9rem,4vw,2.6rem)] font-semibold text-brand">{s.big}</div>
                <div className="mt-1 text-[0.9rem] text-faint">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* The problem */}
      <section className="border-t border-line py-[64px] lg:py-20">
        <Container>
          <SectionHead n="01">The problem</SectionHead>
          <motion.div variants={stagger} {...inView} className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <motion.p variants={fadeUp} className="text-[1.02rem] leading-[1.7] text-[#cdd6df]">
              Customer feedback piles up faster than anyone can read it — scattered across stores, forms and support threads.
              Reading it one review at a time doesn't scale, and a gut-feel summary misses what to actually <em className="italic">do</em>.
            </motion.p>
            <motion.p variants={fadeUp} className="text-[1.02rem] leading-[1.7] text-[#cdd6df]">
              Teams don't need more dashboards of raw text — they need the <b className="font-semibold text-ink">signal</b>: how
              people feel, which themes keep recurring, and the specific next step. FeedLens was built to turn the pile into a
              short, honest list of decisions.
            </motion.p>
          </motion.div>
        </Container>
      </section>

      {/* What I built */}
      <section className="border-t border-line py-[64px] lg:py-20">
        <Container>
          <SectionHead n="02">What I built</SectionHead>
          <motion.p variants={fadeUp} {...inView} className="mb-9 max-w-[68ch] text-[1.02rem] leading-[1.7] text-[#cdd6df]">
            A full AI SaaS: paste or upload feedback, let the model do the reading, and get back{" "}
            <b className="font-semibold text-ink">sentiment, themes and action items</b> — with the auth, plans and billing
            of a real product around it.
          </motion.p>

          <motion.div variants={stagger} {...inView} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {features.map((f) => (
              <motion.article key={f.step} variants={fadeUp} className="rounded-2xl border border-line bg-surface p-6 lg:p-7">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-[0.72rem] text-brand">{f.step}</span>
                  <h3 className="font-serif text-xl font-semibold">{f.name}</h3>
                </div>
                <p className="mt-2.5 text-[0.98rem] leading-[1.6] text-[#cdd6df]">{f.body}</p>
              </motion.article>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Under the hood */}
      <section className="border-t border-line py-[64px] lg:py-20">
        <Container>
          <SectionHead n="03">Under the hood</SectionHead>
          <motion.div variants={stagger} {...inView} className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {underHood.map((c) => (
              <motion.article key={c.title} variants={fadeUp} className={`rounded-2xl border border-line bg-surface p-6 lg:p-7 ${c.span}`}>
                <h3 className="font-serif text-lg font-semibold text-ink">{c.title}</h3>
                <p className="mt-2 text-[0.96rem] leading-[1.6] text-[#cdd6df]">{c.body}</p>
              </motion.article>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Stack */}
      <section className="border-t border-line py-[64px] lg:py-20">
        <Container>
          <SectionHead n="04">Stack</SectionHead>
          <motion.div variants={stagger} {...inView} className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {stackGroups.map((g) => (
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

      {/* Outcome */}
      <section className="border-t border-line py-[64px] lg:py-20">
        <Container>
          <SectionHead n="05">Outcome</SectionHead>
          <motion.div variants={stagger} {...inView} className="flex flex-col gap-4">
            {outcomes.map((o) => (
              <motion.div key={o} variants={fadeUp} className="flex gap-3 text-[1.02rem] leading-[1.65] text-[#cdd6df]">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                <span>{o}</span>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* CTA */}
      <section className="border-t border-line py-24 text-center lg:py-28">
        <Container>
          <motion.div variants={stagger} {...inView}>
            <motion.div variants={fadeUp}>
              <Kicker>{"// let's build"}</Kicker>
            </motion.div>
            <motion.h2 variants={fadeUp} className="mb-4 mt-3.5 font-serif text-[clamp(1.9rem,4.6vw,3rem)] font-medium">
              Want AI in your product — <em className="italic text-brand">done right?</em>
            </motion.h2>
            <motion.p variants={fadeUp} className="mx-auto mb-7 max-w-[48ch] text-faint">
              I build AI into real workflows and run a SaaS of my own. New product or an update to an existing one — let's talk.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-3.5">
              <Button
                nativeButton={false}
                render={<a href="mailto:alvinsalim01@gmail.com" />}
                className="h-auto rounded-[10px] bg-brand px-5 py-3 text-[0.95rem] font-semibold text-[#04130a] hover:bg-brand-strong"
              >
                alvinsalim01@gmail.com
              </Button>
              <Button
                variant="outline"
                nativeButton={false}
                render={<Link href="/#work" />}
                className="h-auto rounded-[10px] border-line bg-transparent px-5 py-3 text-[0.95rem] font-semibold text-ink hover:border-brand hover:bg-transparent hover:text-brand"
              >
                ← See more work
              </Button>
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
