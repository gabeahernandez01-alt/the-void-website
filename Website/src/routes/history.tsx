import { createFileRoute } from "@tanstack/react-router";
import { HistoryPage } from "@/components/site/history";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/history")({
  head: () =>
    seoHead({
      path: "/history",
      title: "A History of Techno | THE VØID",
      description:
        "Follow techno from its roots in Detroit through Berlin and into the underground sound shaping THE VØID in Mérida.",
    }),
  component: HistoryPage,
});
