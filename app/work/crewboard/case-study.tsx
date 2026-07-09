"use client";

import Image from "next/image";
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

/* Data — every claim here is confirmed from the CrewBoard source (schema + app). */
const stats = [
  { big: "5", label: "relational tables" },
  { big: "3", label: "roles (owner/admin/member)" },
  { big: "RLS", label: "on every table" },
  { big: "realtime", label: "cross-session sync" },
];

const features = [
  {
    step: "01",
    name: "Multi-tenant workspaces",
    body: "Every team is its own organization with members, projects, tasks and comments — isolated end to end.",
  },
  {
    step: "02",
    name: "Kanban board",
    body: "Todo / Doing / Done columns with ordered, positionable cards, assignees and per-task comments.",
  },
  {
    step: "03",
    name: "Realtime sync",
    body: "Move a card and every teammate's board updates instantly — no refresh, across sessions.",
  },
  {
    step: "04",
    name: "Role-based access",
    body: "Owner, admin and member roles — admins manage projects and members, everyone works the board.",
  },
];

const underHood = [
  {
    title: "Database-level isolation (RLS)",
    body: "Row Level Security is enabled on all five tables, so a workspace's data is walled off in Postgres itself — not just hidden in the UI. Policies key every read/write to membership via SECURITY DEFINER helpers (is_member / is_admin) that sidestep policy recursion.",
    span: "md:col-span-2",
  },
  {
    title: "Realtime board",
    body: "The tasks table is added to Supabase's realtime publication, so card moves broadcast to every open session instantly.",
    span: "",
  },
  {
    title: "Zero-setup onboarding",
    body: "A signup trigger seeds each new user a private workspace, a “Getting Started” project and a starter board — click sign-up and you're already working.",
    span: "",
  },
  {
    title: "Atomic org creation",
    body: "Creating a workspace (organization + owner membership) runs in a single create_org RPC, so a team is never left half-created.",
    span: "md:col-span-2",
  },
  {
    title: "Server-first Next.js",
    body: "Next.js App Router with server components fetches the board using the user's own session (@supabase/ssr), so RLS applies on the server too — no leaky client queries.",
    span: "md:col-span-2",
  },
  {
    title: "Try it in one click",
    body: "Sign-up auto-seeds a live demo board, so you can click straight in and open a second tab to watch realtime sync.",
    span: "",
  },
];

const stackGroups = [
  { h: "Frontend", items: ["Next.js 14", "React 18", "TypeScript", "Tailwind", "Motion"] },
  { h: "Backend & Data", items: ["Supabase", "PostgreSQL", "Row Level Security", "Realtime"] },
  { h: "Auth", items: ["Supabase Auth", "@supabase/ssr (server session)", "Role-based access"] },
];

const outcomes = [
  "A working multi-tenant SaaS: sign up, get a private workspace, invite teammates, and collaborate on a live board.",
  "Tenant isolation enforced in the database (RLS), not bolted on in the UI — the safe way to build SaaS.",
  "Realtime collaboration that feels instant, with an onboarding that seeds value on the first click.",
  "Live demo with a seeded account — click in and try it without signing up.",
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

const LIVE = "https://crewboard-ciel-vins-projects.vercel.app";

export default function CrewboardCaseStudy() {
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
              Live demo ↗
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
              <Kicker>{"// Case Study · SaaS · Multi-tenant"}</Kicker>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="my-4 max-w-[18ch] font-serif text-[clamp(2.3rem,5.4vw,3.9rem)] font-medium leading-[1.04] tracking-[-0.5px]"
            >
              Crew<em className="italic text-brand">Board</em>
            </motion.h1>
            <motion.p variants={fadeUp} className="max-w-[60ch] text-[1.12rem] text-faint">
              A multi-tenant team task board where every workspace is <b className="font-semibold text-ink">strictly isolated
              in the database</b> and the board <b className="font-semibold text-ink">syncs in real time</b>. Built full-stack
              on Supabase + Next.js — auth, a relational schema, Row Level Security and Realtime.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-6 flex flex-wrap gap-2">
              {["Next.js · Supabase", "Multi-tenant", "Realtime", "RLS-isolated"].map((t) => (
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
                Open live demo →
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
            <Frame label="crewboard · multi-tenant team board">
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src="/crewboard.jpg"
                  alt="CrewBoard — multi-tenant team kanban SaaS built with Supabase (Auth, RLS, Realtime)"
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
              Teams want one shared board that every member sees update the moment someone moves a card — no refresh, no
              stale state. That's the easy half.
            </motion.p>
            <motion.p variants={fadeUp} className="text-[1.02rem] leading-[1.7] text-[#cdd6df]">
              The hard half is <b className="font-semibold text-ink">isolation</b>: in a multi-tenant SaaS, each team's data
              must be walled off at the database, not just hidden in the interface. Get that wrong and one workspace can read
              another's data. CrewBoard was built to get both right — <b className="font-semibold text-ink">realtime and
              tenant-isolation, enforced where it counts</b>.
            </motion.p>
          </motion.div>
        </Container>
      </section>

      {/* What I built */}
      <section className="border-t border-line py-[64px] lg:py-20">
        <Container>
          <SectionHead n="02">What I built</SectionHead>
          <motion.p variants={fadeUp} {...inView} className="mb-9 max-w-[68ch] text-[1.02rem] leading-[1.7] text-[#cdd6df]">
            A full SaaS on a clean relational schema — <b className="font-semibold text-ink">organizations, members,
            projects, tasks and comments</b> — with auth, live collaboration and role-based access from day one.
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
              Building a <em className="italic text-brand">SaaS product?</em>
            </motion.h2>
            <motion.p variants={fadeUp} className="mx-auto mb-7 max-w-[46ch] text-faint">
              Whether it's a new MVP or improving an existing product — I ship the auth, the data model and the UX, safely.
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
