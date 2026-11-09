import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { Frame } from "@/components/site/frame";
import { I18nProvider } from "@/lib/i18n";
import appCss from "../styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#070807" },
      { property: "og:site_name", content: "THE VØID" },
      { property: "og:image", content: "https://www.thevoid.com.mx/og.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://www.thevoid.com.mx/og.jpg" },
    ],
    links: [
      { rel: "icon", type: "image/png", href: "/The%20VOID%20simbolo-01.png" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
    ],
  }),
  component: () => (
    <html lang="es" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <PreviewHostBridge />
        <AuthProvider>
          <I18nProvider>
            <Frame>
              <Outlet />
            </Frame>
          </I18nProvider>
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  ),
});
