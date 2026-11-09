import { createFileRoute } from "@tanstack/react-router";
import { ArchivePage } from "@/components/site/pages";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/archive")({
  head: () =>
    seoHead({
      path: "/archive",
      title: "Techno Event Archive in Mérida | THE VØID",
      description:
        "Explore THE VØID’s past techno and hard techno events in Mérida, Yucatán, with artists, dates and venue details.",
    }),
  component: ArchivePage,
});
