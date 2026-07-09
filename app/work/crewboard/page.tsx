import type { Metadata } from "next";
import CrewboardCaseStudy from "./case-study";

export const metadata: Metadata = {
  title: "CrewBoard — Case Study · Alvin Salim",
  description:
    "How I built CrewBoard, a multi-tenant team task board on Supabase + Next.js: database-level tenant isolation with Row Level Security, realtime board sync, role-based access and zero-setup onboarding.",
};

export default function Page() {
  return <CrewboardCaseStudy />;
}
