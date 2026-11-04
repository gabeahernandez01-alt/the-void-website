import { useEffect, useRef, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Expand, X } from "lucide-react";
import type { Lang } from "@/lib/i18n";

type EventGalleryProps = {
  eventName: string;
  lang: Lang;
  photos: string[];
};

export function EventGallery({ eventName, lang, photos }: EventGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const isOpen = selectedIndex !== null;
  const isSpanish = lang === "es";

  useEffect(() => {
    if (selectedIndex === null) return;

    const frame = window.requestAnimationFrame(() => {
      contentRef.current
        ?.querySelector<HTMLElement>(`[data-gallery-index="${selectedIndex}"]`)
        ?.scrollIntoView({ block: "start" });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [selectedIndex]);

  return (
    <Dialog.Root
      open={isOpen}
      onOpenChange={(open) => {
        if (!open) setSelectedIndex(null);
      }}
    >
      <section className="page-pad pb-16" aria-labelledby="event-gallery-heading">
        <p className="font-mono text-xs uppercase tracking-widest text-acid">THE VØID / ARCHIVE</p>
        <h2 id="event-gallery-heading" className="mt-2 mb-6 font-display text-4xl uppercase sm:text-5xl">
          {isSpanish ? "Galería" : "Gallery"}
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((photo, index) => (
            <button
              key={photo}
              type="button"
              aria-label={`${isSpanish ? "Abrir fotografía" : "Open photo"} ${index + 1} ${isSpanish ? "de" : "of"} ${photos.length}`}
              onClick={(event) => {
                triggerRef.current = event.currentTarget;
                setSelectedIndex(index);
              }}
              className="group relative block w-full overflow-hidden border border-line text-left focus-visible:outline-acid"
            >
              <img
                src={photo}
                alt={`${eventName} — ${isSpanish ? "fotografía" : "photo"} ${index + 1}`}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover motion-safe:transition-transform motion-safe:duration-300 group-hover:scale-[1.03]"
              />
              <span
                aria-hidden="true"
                className="absolute bottom-3 right-3 inline-flex size-11 items-center justify-center border border-line bg-bg/90 text-fg transition-colors group-hover:border-acid group-hover:text-acid"
              >
                <Expand className="size-4" />
              </span>
            </button>
          ))}
        </div>
      </section>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-bg/95 backdrop-blur-sm" />
        <Dialog.Content
          ref={contentRef}
          className="fixed inset-0 z-50 overflow-y-auto overscroll-contain bg-bg text-fg focus:outline-none"
          onCloseAutoFocus={(event) => {
            event.preventDefault();
            triggerRef.current?.focus();
          }}
        >
          <div className="sticky top-0 z-10 flex min-h-16 items-center justify-between gap-4 border-b border-line bg-bg/95 px-4 py-3 backdrop-blur sm:px-8">
            <div className="min-w-0">
              <Dialog.Title className="truncate font-mono text-xs uppercase tracking-widest text-acid">
                {eventName} / {isSpanish ? "Galería" : "Gallery"}
              </Dialog.Title>
              <Dialog.Description className="mt-1 font-mono text-xs text-muted">
                {isSpanish ? "Desliza para recorrer las fotografías" : "Scroll to browse the photos"}
              </Dialog.Description>
            </div>
            <Dialog.Close asChild>
              <button
                type="button"
                className="inline-flex min-h-11 shrink-0 items-center gap-2 border border-line px-3 font-mono text-xs uppercase tracking-widest text-fg hover:border-acid hover:text-acid"
              >
                <X aria-hidden="true" className="size-4" />
                {isSpanish ? "Cerrar" : "Close"}
              </button>
            </Dialog.Close>
          </div>

          <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 pb-12 pt-6 sm:px-8 sm:pb-16">
            {photos.map((photo, index) => (
              <figure
                key={photo}
                data-gallery-index={index}
                className="scroll-mt-20 border-b border-line pb-6"
              >
                <img
                  src={photo}
                  alt={`${eventName} — ${isSpanish ? "fotografía" : "photo"} ${index + 1}`}
                  loading={index === selectedIndex ? "eager" : "lazy"}
                  className="mx-auto max-h-[calc(100dvh-9rem)] w-auto max-w-full border border-line object-contain"
                />
                <figcaption className="mt-3 font-mono text-xs uppercase tracking-widest text-muted">
                  {String(index + 1).padStart(2, "0")} / {String(photos.length).padStart(2, "0")}
                </figcaption>
              </figure>
            ))}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
