import { createFileRoute } from "@tanstack/react-router";
import { MerchPage } from "@/components/site/merch-page";

export const Route = createFileRoute("/merch")({
  component: MerchPage,
});
