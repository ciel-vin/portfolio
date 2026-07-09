"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, MotionConfig, type Variants } from "motion/react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

/* ----------------------------------------------------------------------------
   Motion presets — mirrors app/page.tsx so the case study reads as one system.
   Wrapped in <MotionConfig reducedMotion="user"> so transforms auto-disable for
   visitors who prefer reduced motion (only opacity animates then).
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

/* Data — every claim here is confirmed from the live system + source repo. */
const stats = [
  { big: "7", label: "role workspaces" },
  { big: "60+", label: "data models" },
  { big: "29", label: "domain services" },
  { big: "real-time", label: "month-end (was 2 days)" },
];

const workflow = [
  {
    step: "01",
    name: "Sales Order",
    body: "Input customer, products, discounts, approval status and revisions — all without losing the order's context.",
  },
  {
    step: "02",
    name: "Stock Guard",
    body: "Admins see live stock, shortages and actual price before an order moves forward, so nothing is promised that can't be delivered.",
  },
  {
    step: "03",
    name: "Purchase Flow",
    body: "Supplier POs and product receipts link straight back to what sales actually needs — procurement and demand stay in sync.",
  },
  {
    step: "04",
    name: "Invoice Control",
    body: "Delivery notes, invoices, payments and director approval all stay on the same track, end to end.",
  },
];

const flowChain = ["Order Check", "Purchase Receipt", "Stock Update", "Invoice Payment"];

const capabilities = [
  {
    title: "Role Workspace",
    body: "Director, Sales Admin, Purchasing, Settlement, Tax, Sales and Customer each get their own work area — access separated by role at the policy layer, not just hidden in the UI.",
    span: "md:col-span-2",
  },
  {
    title: "Operational Queue",
    body: "Orders, receipts, invoices and payments appear as a live work queue — “validate price”, “ready for delivery note”, “waiting on stock”, “credit review” — not decoration.",
    span: "",
  },
  {
    title: "Finance Visibility",
    body: "Receivables, payables, customer payments and supplier payments read fast in one place, with a director dashboard for P&L, cashflow and receivables.",
    span: "",
  },
  {
    title: "Stock, costing & cashback",
    body: "Self-updating stock, FIFO costing, partial payments and tiered cashback — the money math the business actually runs on.",
    span: "md:col-span-2",
  },
  {
    title: "Distribution Control Board",
    body: "Live operational indicators (orders needing review, stock ready, active POs, monitored receivables) visualised with Chart.js.",
    span: "",
  },
  {
    title: "Print-safe documents",
    body: "Stable, production-grade print templates for invoices and delivery notes, generated server-side with dompdf — an overlooked detail that's critical in the field.",
    span: "md:col-span-2",
  },
];

const stackGroups = [
  { h: "Backend", items: ["Laravel 10", "PHP 8.1", "Sanctum / Breeze", "REST"] },
  { h: "Frontend", items: ["Blade", "Alpine.js", "Tailwind", "Vite", "Chart.js"] },
  { h: "Data & Docs", items: ["MySQL", "dompdf (PDF)", "PhpSpreadsheet"] },
];

const outcomes = [
  "Live in production as the backbone of the distributor's daily operations — not a demo, not a prototype.",
  "Every step is locked to the flow (order → stock → buy → invoice → pay), cutting “hanging” orders and manual back-and-forth.",
  "Each role works from its own queue while the director oversees and approves from one dashboard.",
  "Financial visibility (receivables & payables) that used to be scattered across spreadsheets now reads in a single view.",
];

function Frame({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <div className="w-full overflow-hidden rounded-[10px] border border-[#28333f] shadow-[0_24px_60px_-30px_rgba(0,0,0,0.8)]">
      <div className="flex items-center gap-1.5 border-b border-[#1d2733] bg-[#0c1219] px-3 py-2.5">
        <i className="h-2.5 w-2.5 rounded-full bg-[#2a3744]" />
        <i className="h-2.5 w-2.5 rounded-full bg-[#2a3744]" />
        <i className="h-2.5 w-2.5 rounded-full bg-[#2a3744]" />
        <span className="ml-2 font-mono text-[0.68rem] text-[#5d6b78]">{label}</span>
      </div>
      {children}
    </div>
  );
}

export default function DistributionErpCaseStudy() {
  return (
    <MotionConfig reducedMotion="user">
      {/* Nav — back to portfolio */}
      <nav className="sticky top-0 z-50 border-b border-line bg-bg/70 backdrop-blur-md">
        <Container className="flex h-[62px] items-center justify-between">
          <Link href="/" className="font-serif text-[1.05rem] font-semibold">
            Alvin Salim<span className="text-brand">.</span>
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/#work" className="text-[0.9rem] text-faint transition-colors hover:text-ink">
              ← All work
            </Link>
            <a
              href="https://cvanugerahsejati.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[0.9rem] font-semibold text-brand hover:underline"
            >
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
              <Kicker>{"// Case Study · Business System · ERP"}</Kicker>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="my-4 max-w-[18ch] font-serif text-[clamp(2.3rem,5.4vw,3.9rem)] font-medium leading-[1.04] tracking-[-0.5px]"
            >
              Distribution <em className="italic text-brand">ERP</em>
            </motion.h1>
            <motion.p variants={fadeUp} className="max-w-[60ch] text-[1.12rem] text-faint">
              An end-to-end operations platform for <b className="font-semibold text-ink">CV Anugerah Sejati</b>, a
              building-materials distributor — controlling sales orders, purchasing, stock, invoicing and cashflow in one
              role-based workspace. Built and owned end to end, as its CTO and only engineer, and running in production.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-6 flex flex-wrap gap-2">
              {["Laravel · PHP", "Live in production", "Solo build", "7 role workspaces"].map((t) => (
                <Badge
                  key={t}
                  variant="outline"
                  className="rounded-md border-line font-mono text-[0.74rem] font-normal text-faint"
                >
                  {t}
                </Badge>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3.5">
              <Button
                nativeButton={false}
                render={<a href="https://cvanugerahsejati.com" target="_blank" rel="noopener noreferrer" />}
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

          <motion.div variants={fadeUp} {...inView} className="mt-12">
            <Frame label="cvanugerahsejati.com · distribution control board">
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src="/erp.png"
                  alt="CV Anugerah Sejati ERP — distribution control board dashboard"
                  fill
                  priority
                  sizes="(max-width: 1080px) 100vw, 1080px"
                  className="object-cover object-top"
                />
              </div>
            </Frame>
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
              A building-materials distributor runs a dense operation: dozens of sales orders a day, stock that must be
              checked before a price is locked, supplier POs that have to tie back to real demand — plus invoices,
              delivery notes, payments and director approvals, all depending on each other.
            </motion.p>
            <motion.p variants={fadeUp} className="text-[1.02rem] leading-[1.7] text-[#cdd6df]">
              Without one system, this scatters across spreadsheets, chats and manual notes: orders stall waiting on
              stock confirmation, receivables are hard to track, and no role has a clear place to work. Month-end alone
              took three people two days of copy-pasting Excel. What was needed wasn't a record-keeping app — it was a{" "}
              <b className="font-semibold text-ink">workflow that locks each step to the next</b>.
            </motion.p>
          </motion.div>
        </Container>
      </section>

      {/* What I built */}
      <section className="border-t border-line py-[64px] lg:py-20">
        <Container>
          <SectionHead n="02">What I built</SectionHead>
          <motion.p variants={fadeUp} {...inView} className="mb-9 max-w-[68ch] text-[1.02rem] leading-[1.7] text-[#cdd6df]">
            One unified workspace across five core areas — <b className="font-semibold text-ink">Sales, Buying, Stock,
            Finance and Dashboard</b> — on top of a clear, low-click operational flow.
          </motion.p>

          <motion.div variants={stagger} {...inView} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {workflow.map((w) => (
              <motion.article
                key={w.step}
                variants={fadeUp}
                className="rounded-2xl border border-line bg-surface p-6 lg:p-7"
              >
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-[0.72rem] text-brand">{w.step}</span>
                  <h3 className="font-serif text-xl font-semibold">{w.name}</h3>
                </div>
                <p className="mt-2.5 text-[0.98rem] leading-[1.6] text-[#cdd6df]">{w.body}</p>
              </motion.article>
            ))}
          </motion.div>

          {/* Flow control chain */}
          <motion.div variants={fadeUp} {...inView} className="mt-8">
            <div className="mb-3 font-mono text-[0.72rem] uppercase tracking-wider text-brand">flow control</div>
            <div className="flex flex-wrap items-center gap-2.5">
              {flowChain.map((step, i) => (
                <span key={step} className="flex items-center gap-2.5">
                  <span className="rounded-lg border border-line bg-surface px-3.5 py-2 font-mono text-[0.82rem] text-ink">
                    {step}
                  </span>
                  {i < flowChain.length - 1 && <span className="text-brand">→</span>}
                </span>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Under the hood */}
      <section className="border-t border-line py-[64px] lg:py-20">
        <Container>
          <SectionHead n="03">Under the hood</SectionHead>
          <motion.div variants={stagger} {...inView} className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {capabilities.map((c) => (
              <motion.article
                key={c.title}
                variants={fadeUp}
                className={`rounded-2xl border border-line bg-surface p-6 lg:p-7 ${c.span}`}
              >
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
                    <li key={it} className="border-b border-line py-1">
                      {it}
                    </li>
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
              Need a system your team <em className="italic text-brand">actually uses?</em>
            </motion.h2>
            <motion.p variants={fadeUp} className="mx-auto mb-7 max-w-[46ch] text-faint">
              Tell me what's slowing your operations down — I'll tell you honestly how I'd build it.
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
