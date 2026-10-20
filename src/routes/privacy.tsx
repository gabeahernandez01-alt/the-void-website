import { createFileRoute } from "@tanstack/react-router";
import { PrivacyPage } from "@/components/site/pages";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPage,
});
