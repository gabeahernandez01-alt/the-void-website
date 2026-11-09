import { createFileRoute } from "@tanstack/react-router";
import { PrivacyPage } from "@/components/site/pages";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/privacy")({
  head: () =>
    seoHead({
      path: "/privacy",
      title: "Privacy Notice | THE VØID",
      description:
        "Read how THE VØID’s website handles personal information, contact messages and privacy choices.",
    }),
  component: PrivacyPage,
});
