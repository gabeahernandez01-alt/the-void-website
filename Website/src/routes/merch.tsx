import { createFileRoute } from "@tanstack/react-router";
import { MerchPage } from "@/components/site/merch-page";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/merch")({
  head: () =>
    seoHead({
      path: "/merch",
      title: "Official THE VØID Merch | Made to Order in Mérida",
      description:
        "Shop THE VØID techno apparel made to order in Mérida, Yucatán. Browse designs and request sizes, prices and production times.",
    }),
  component: MerchPage,
});
