import { useEffect, useState } from "react";
import { Link, useMatchRoute, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Consent } from "@/components/site/consent";
import { facebookUrl, instagramUrl, tiktokUrl, youtubeUrl } from "@/data/catalog";
import { useI18n, type CopyKey } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const LINES = [
  "VØID_SYSTEM",
  "INITIALIZING TRANSMISSION...",
  "SIGNAL DETECTED",
  "REALITY STATUS: UNSTABLE",
  "CONNECTION ESTABLISHED",
];

const NAV: { to: "/" | "/transmissions" | "/archive" | "/signal" | "/history" | "/contact"; key: CopyKey; exact?: boolean }[] = [
  { to: "/", key: "navHome", exact: true },
  { to: "/transmissions", key: "navTransmissions" },
  { to: "/archive", key: "navArchive" },
  { to: "/signal", key: "navSignal" },
  { to: "/history", key: "navHistory" },
  { to: "/contact", key: "navContact" },
];

function Boot() {
  const { t } = useI18n();
  const [phase, setPhase] = useState<"wait" | "play" | "out" | "done">("wait");
  const [count, setCount] = useState(1);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let seen = false;
    try {
      seen = sessionStorage.getItem("void-booted") === "1";
    } catch {
      seen = true;
    }
    setPhase(reduce || seen ? "done" : "play");
  }, []);

  useEffect(() => {
    if (phase !== "play") return;
    if (count >= LINES.length) return;
    const id = window.setTimeout(() => setCount((n) => n + 1), 420);
    return () => window.clearTimeout(id);
  }, [phase, count]);

  useEffect(() => {
    if (phase !== "play" && phase !== "out") return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [phase]);

  const finish = () => {
    try {
      sessionStorage.setItem("void-booted", "1");
    } catch {
      /* ignore */
    }
    setPhase("out");
    window.setTimeout(() => setPhase("done"), 280);
  };

  if (phase === "wait" || phase === "done") return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="VØID_SYSTEM"
      className={cn(
        "fixed inset-0 z-50 flex flex-col justify-between bg-bg px-5 py-6 text-fg transition-opacity sm:px-10",
        phase === "out" ? "opacity-0" : "opacity-100",
      )}
    >
      <div className="flex items-center justify-between gap-4 font-mono text-xs uppercase tracking-widest text-muted">
        <span>VØID_SYSTEM / BOOT</span>
        <button type="button" className="min-h-11 px-3 text-acid" onClick={finish}>
          {t("bootSkip")}
        </button>
      </div>
      <div className="mx-auto w-full max-w-xl" aria-live="polite">
        <ol className="space-y-2 font-mono text-sm sm:text-base">
          {LINES.slice(0, count).map((line) => (
            <li key={line} className="text-fg">
              <span className="text-acid">{"> "}</span>
              {line}
            </li>
          ))}
        </ol>
        {count >= LINES.length && (
          <button
            type="button"
            className="mt-8 min-h-11 bg-acid px-6 font-mono text-xs uppercase tracking-widest text-bg"
            onClick={finish}
          >
            {t("bootEnter")}
          </button>
        )}
      </div>
      <p className="font-mono text-xs uppercase tracking-widest text-muted">MÉRIDA / YUCATÁN</p>
    </div>
  );
}

function Clock() {
  const [time, setTime] = useState("--:--:--");
  useEffect(() => {
    const tick = () => {
      setTime(
        new Intl.DateTimeFormat("en-GB", {
          timeZone: "America/Merida",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }).format(new Date()),
      );
    };
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);
  return <span className="tabular-nums">{time}</span>;
}

export function Frame({ children }: { children: React.ReactNode }) {
  const { t, lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const matchRoute = useMatchRoute();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <div className="min-h-screen bg-bg text-fg">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-acid focus:px-4 focus:py-3 focus:text-bg"
      >
        {t("skip")}
      </a>
      <Boot />
      <header className="fixed inset-x-0 top-0 z-40 border-b border-line bg-bg">
        <div className="page-pad flex h-16 items-center justify-between gap-6 lg:h-20">
          <Link to="/" className="flex shrink-0 items-center">
            <img src="/media/logo.webp" alt="THE VØID" width={1400} height={193} className="h-6 w-auto sm:h-7 lg:h-8" />
          </Link>
          <nav className="hidden items-center gap-4 xl:gap-7 md:flex" aria-label={t("menuLabel")}>
            {NAV.slice(1).map((item) => {
              const active = Boolean(matchRoute({ to: item.to, fuzzy: false }));
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={cn(
                    "inline-flex min-h-11 items-center font-mono text-xs uppercase tracking-widest",
                    active ? "text-acid" : "text-muted hover:text-fg",
                  )}
                >
                  {t(item.key)}
                </Link>
              );
            })}
          </nav>
          <div className="flex items-center gap-2">
            <p className="hidden font-mono text-xs tracking-widest text-muted lg:block">
              <Clock /> <span className="text-line">/</span> CST
            </p>
            <div className="flex border border-line" role="group" aria-label={t("langLabel")}>
              {(["es", "en"] as const).map((code) => (
                <button
                  key={code}
                  type="button"
                  aria-pressed={lang === code}
                  className={cn(
                    "min-h-11 min-w-11 px-2 font-mono text-xs uppercase",
                    lang === code ? "bg-acid text-bg" : "text-muted hover:text-fg",
                  )}
                  onClick={() => setLang(code)}
                >
                  {code}
                </button>
              ))}
            </div>
            <button
              type="button"
              className="inline-flex size-11 items-center justify-center border border-line text-fg md:hidden"
              aria-expanded={open}
              aria-controls="site-menu"
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
              <span className="sr-only">{open ? t("menuClose") : t("menuOpen")}</span>
            </button>
          </div>
        </div>
      </header>
      {open && (
        <div id="site-menu" role="dialog" aria-modal="true" aria-label={t("menuLabel")} className="fixed inset-0 z-30 bg-bg px-6 pt-24 md:hidden">
          <nav className="flex flex-col">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="border-b border-line py-4 font-display text-5xl uppercase text-fg"
              >
                {t(item.key)}
              </Link>
            ))}
          </nav>
        </div>
      )}
      <main id="content">{children}</main>
      <Consent />
      <footer className="page-pad border-t border-line py-14">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <img src="/media/logo.webp" alt="" width={1400} height={193} className="h-8 w-auto" />
            <p className="mt-3 font-mono text-xs uppercase tracking-widest text-muted">{t("cityLine")}</p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-3 font-mono text-xs uppercase tracking-widest">
            <a className="min-h-11 text-fg hover:text-acid" href={instagramUrl} target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            <a className="min-h-11 text-fg hover:text-acid" href={tiktokUrl} target="_blank" rel="noopener noreferrer">
              TikTok
            </a>
            <a className="min-h-11 text-fg hover:text-acid" href={youtubeUrl} target="_blank" rel="noopener noreferrer">
              YouTube
            </a>
            <a className="min-h-11 text-fg hover:text-acid" href={facebookUrl} target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
            <Link to="/contact" className="min-h-11 text-fg hover:text-acid">
              {t("navContact")}
            </Link>
            <Link to="/privacy" className="min-h-11 text-muted hover:text-fg">
              {t("privacy")}
            </Link>
          </div>
        </div>
        <p className="mt-8 max-w-3xl text-sm text-muted">{t("footerNote")}</p>
        <p className="mt-3 font-mono text-xs uppercase tracking-widest text-muted">{t("adult")}</p>
      </footer>
    </div>
  );
}
