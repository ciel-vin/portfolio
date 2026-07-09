import type { Metadata } from "next";
import DistributionErpCaseStudy from "./case-study";

export const metadata: Metadata = {
  title: "Distribution ERP — Case Study · Alvin Salim",
  description:
    "How I built a production ERP for a building-materials distributor (CV Anugerah Sejati): 7 role workspaces, order-to-cash + procurement workflow, live finance dashboards. Laravel · PHP · MySQL.",
};

export default function Page() {
  return <DistributionErpCaseStudy />;
}
