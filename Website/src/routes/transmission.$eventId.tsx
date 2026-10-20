import { createFileRoute, notFound } from "@tanstack/react-router";
import { EventPage } from "@/components/site/pages";
import { getEvent } from "@/lib/events";

export const Route = createFileRoute("/transmission/$eventId")({
  loader: ({ params }) => {
    const event = getEvent(params.eventId);
    if (!event) throw notFound();
    return event;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: loaderData ? `${loaderData.name} — THE VØID` : "THE VØID" },
      { name: "description", content: loaderData?.summary.es ?? "THE VØID" },
    ],
  }),
  component: function TransmissionRoute() {
    const event = Route.useLoaderData();
    return <EventPage event={event} />;
  },
});
