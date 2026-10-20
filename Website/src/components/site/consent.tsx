import { useEffect, useState } from "react";
import { analytics } from "@/data/catalog";
import { useI18n } from "@/lib/i18n";

const GA_ID = /^G-[A-Z0-9]+$/;
const PIXEL_ID = /^\d{8,20}$/;

function safeGa() {
  return GA_ID.test(analytics.gaId) ? analytics.gaId : "";
}

function safePixel() {
  return PIXEL_ID.test(analytics.metaPixelId) ? analytics.metaPixelId : "";
}

export function Consent() {
  const ga = safeGa();
  const pixel = safePixel();
  const { lang } = useI18n();
  const [choice, setChoice] = useState<"unknown" | "granted" | "denied">("unknown");

  useEffect(() => {
    const stored = localStorage.getItem("void-consent");
    if (stored === "granted" || stored === "denied") setChoice(stored);
  }, []);

  useEffect(() => {
    if (choice !== "granted") return;
    if (ga && !document.getElementById("ga-src")) {
      const src = document.createElement("script");
      src.id = "ga-src";
      src.async = true;
      src.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(ga)}`;
      document.head.appendChild(src);
      const inline = document.createElement("script");
      inline.id = "ga-inline";
      inline.text = `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config',${JSON.stringify(ga)});`;
      document.head.appendChild(inline);
    }
    if (pixel && !document.getElementById("meta-pixel")) {
      const src = document.createElement("script");
      src.id = "meta-pixel";
      src.text = `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init',${JSON.stringify(pixel)});fbq('track','PageView');`;
      document.head.appendChild(src);
    }
  }, [choice, ga, pixel]);

  if ((!ga && !pixel) || choice !== "unknown") return null;

  const accept = () => {
    localStorage.setItem("void-consent", "granted");
    setChoice("granted");
  };
  const reject = () => {
    localStorage.setItem("void-consent", "denied");
    setChoice("denied");
  };

  return (
    <div className="page-pad fixed inset-x-0 bottom-0 z-40 border-t border-line bg-bg py-4">
      <p className="max-w-3xl text-sm text-muted">
        {lang === "es"
          ? "Medición opcional. Acepta para cargar los scripts configurados, o déjalos apagados."
          : "Analytics is optional. Accept to load the configured scripts, or keep them off."}
      </p>
      <div className="mt-3 flex gap-2">
        <button type="button" className="min-h-11 bg-acid px-4 font-mono text-xs uppercase tracking-widest text-bg" onClick={accept}>
          {lang === "es" ? "Aceptar" : "Accept"}
        </button>
        <button type="button" className="min-h-11 border border-line px-4 font-mono text-xs uppercase tracking-widest text-fg" onClick={reject}>
          {lang === "es" ? "Rechazar" : "Reject"}
        </button>
      </div>
    </div>
  );
}
