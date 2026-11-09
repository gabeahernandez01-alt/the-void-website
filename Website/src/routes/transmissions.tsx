import { createFileRoute } from "@tanstack/react-router";
import { TransmissionsPage } from "@/components/site/pages";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/transmissions")({
  head: () =>
    seoHead({
      path: "/transmissions",
      title: "Techno & Hard Techno Events in Mérida | THE VØID",
      description:
        "Discover upcoming techno and hard techno events by THE VØID in Mérida, Yucatán, México.",
    }),
  component: TransmissionsPage,
});
