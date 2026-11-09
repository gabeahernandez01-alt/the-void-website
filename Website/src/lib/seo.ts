const SITE_ORIGIN = "https://www.thevoid.com.mx";

type SeoPage = {
  path: string;
  title: string;
  description: string;
};

export function seoHead({ path, title, description }: SeoPage) {
  const url = `${SITE_ORIGIN}${path}`;

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:locale", content: "es_MX" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}
