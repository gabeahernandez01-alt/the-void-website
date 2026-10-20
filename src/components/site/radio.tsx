import { useState } from "react";
import type { RadioVideo } from "@/data/catalog";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function VideoCard({ video, featured = false }: { video: RadioVideo; featured?: boolean }) {
  const { t, lang } = useI18n();
  const [play, setPlay] = useState(false);

  return (
    <article className={cn("border border-line bg-dim", featured && "xl:col-span-1")}>
      <div className="relative aspect-video bg-bg">
        {play ? (
          <iframe
            title={video.title}
            src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0`}
            className="absolute inset-0 h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />
        ) : (
          <button type="button" className="absolute inset-0 block w-full" onClick={() => setPlay(true)}>
            <img
              src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
              alt=""
              width={480}
              height={360}
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <span className="absolute inset-0 bg-bg/25" />
            <span className="absolute bottom-3 left-3 bg-acid px-3 py-2 font-mono text-xs uppercase tracking-widest text-bg">
              {t("playVideo")}
            </span>
          </button>
        )}
      </div>
      <div className="space-y-2 p-4">
        <p className="font-mono text-xs uppercase tracking-widest text-acid">{video.series}</p>
        <h3 className={cn("font-display uppercase", featured ? "text-3xl xl:text-4xl" : "text-2xl")}>{video.title}</h3>
        <p className="text-sm text-muted">{video.caption[lang]}</p>
      </div>
    </article>
  );
}
