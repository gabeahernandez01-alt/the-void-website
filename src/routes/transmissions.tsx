import { createFileRoute } from "@tanstack/react-router";
import { TransmissionsPage } from "@/components/site/pages";

export const Route = createFileRoute("/transmissions")({
  component: TransmissionsPage,
});
