import { createFileRoute } from "@tanstack/react-router";
import { HistoryPage } from "@/components/site/history";

export const Route = createFileRoute("/history")({
  component: HistoryPage,
});
