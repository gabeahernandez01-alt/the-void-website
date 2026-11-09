import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/components/site/pages";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () =>
    seoHead({
      path: "/contact",
      title: "Contact THE VØID | Bookings & Press in Mérida",
      description:
        "Contact THE VØID in Mérida, México for artist bookings, press, collaborations and event inquiries.",
    }),
  component: ContactPage,
});
