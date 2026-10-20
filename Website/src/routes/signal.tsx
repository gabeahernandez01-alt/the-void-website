import { createFileRoute } from "@tanstack/react-router";
import { SignalPage } from "@/components/site/pages";

export const Route = createFileRoute("/signal")({
  component: SignalPage,
});
