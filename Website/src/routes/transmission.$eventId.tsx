import { createFileRoute, notFound } from "@tanstack/react-router";
import { EventPage } from "@/components/site/pages";
import { getEvent } from "@/lib/events";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/transmission/$eventId")({
  loader: ({ params }) => {
    const event = getEvent(params.eventId);
    if (!event) throw notFound();
    return event;
  },
  head: ({ loaderData }) =>
    loaderData
      ? seoHead({
          path: `/transmission/${encodeURIComponent(loaderData.id)}`,
          title: `${loaderData.name} — THE VØID`,
          description: loaderData.summary.es,
        })
      : {},
  component: function TransmissionRoute() {
    const event = Route.useLoaderData();
    return <EventPage event={event} />;
  },
});
