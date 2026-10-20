import { createFileRoute } from "@tanstack/react-router";
import { ArchivePage } from "@/components/site/pages";

export const Route = createFileRoute("/archive")({
  component: ArchivePage,
});
