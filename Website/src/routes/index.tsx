import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/site/home-page";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () =>
    seoHead({
      path: "/",
      title: "THE VØID | Techno & Hard Techno Events in Mérida, México",
      description:
        "THE VØID is an electronic music collective based in Mérida, Yucatán, México. Discover underground techno, hard techno events, artists and experiences.",
    }),
  component: HomePage,
});
