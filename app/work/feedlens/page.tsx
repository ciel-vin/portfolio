import type { Metadata } from "next";
import FeedlensCaseStudy from "./case-study";

export const metadata: Metadata = {
  title: "FeedLens — Case Study · Alvin Salim",
  description:
    "How I built FeedLens, an AI SaaS that turns raw customer reviews into sentiment, recurring themes and concrete action items. Next.js + Supabase + Groq (llama-3.3-70b), with auth, metered plans and Xendit billing.",
};

export default function Page() {
  return <FeedlensCaseStudy />;
}
