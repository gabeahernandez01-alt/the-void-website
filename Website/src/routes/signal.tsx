import { createFileRoute } from "@tanstack/react-router";
import { SignalPage } from "@/components/site/pages";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/signal")({
  head: () =>
    seoHead({
      path: "/signal",
      title: "THE VØID Signal | Techno Sets & Visuals from Mérida",
      description:
        "Watch THE VØID radio sets, event films and visual transmissions from the underground techno scene in Mérida, Yucatán.",
    }),
  component: SignalPage,
});
