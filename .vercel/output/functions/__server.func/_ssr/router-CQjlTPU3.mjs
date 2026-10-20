import { i as __toESM } from "../_runtime.mjs";
import { C as require_jsx_runtime, S as useRouter, X as require_react, Y as notFound, _ as Outlet, b as createRootRoute, d as Scripts, f as HeadContent, g as useMatchRoute, h as createRouter, p as useRouterState, v as lazyRouteComponent, x as Link, y as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Menu, r as ArrowUpRight, t as X } from "../_libs/lucide-react.mjs";
import { _ as meridaKey, a as analytics, b as useDocTitle, c as displayStatus, d as getEvent, f as instagramUrl, g as media, h as listUpcoming, i as StatusMark, l as eventJsonLd, m as listArchive, n as EventCard, o as buttonClass, p as jsonScript, r as I18nProvider, s as cn, t as Countdown, u as formatWhen, x as useI18n, y as tiktokUrl } from "./event-card-lZhlT3vD.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-CQjlTPU3.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";
function errorMessage(error) {
	if (error instanceof Error && error.message) return error.message;
	if (typeof error === "string" && error) return error;
	return FALLBACK_MESSAGE;
}
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-4 bg-bg px-6 text-center text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-xs uppercase tracking-widest text-acid",
				children: "VØID_SYSTEM / FAULT"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-5xl uppercase",
				children: "Signal lost"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md font-mono text-sm break-words text-muted",
				children: errorMessage(error)
			})
		]
	});
}
/**
* Path-based preview hosts serve the dev server under `/{port_id}/` and strip
* that prefix before forwarding, so SSR sees `/` while the browser URL keeps the
* prefix. TanStack Start resets `basepath` on hydration, so a `rewrite` keeps
* client routing and generated links aligned with the public URL.
*/
var PATH_BASED_PREVIEW_HOSTS = /* @__PURE__ */ new Set([
	"preview.grok.genai.mil",
	"preview.grok.mil",
	"preview.grokgsac.com"
]);
var PORT_ID_PREFIX = /^\/hds-[a-z0-9]+-\d+-[a-z0-9]+(?=\/|$)/i;
function previewPathPrefix(hostname, pathname) {
	if (!PATH_BASED_PREVIEW_HOSTS.has(hostname.toLowerCase())) return void 0;
	return PORT_ID_PREFIX.exec(pathname)?.[0];
}
function prefixRewrite(prefix) {
	return {
		input: ({ url }) => {
			if (url.pathname === prefix) url.pathname = "/";
			else if (url.pathname.startsWith(`${prefix}/`)) url.pathname = url.pathname.slice(prefix.length);
			return url;
		},
		output: ({ url }) => {
			url.pathname = `${prefix}${url.pathname}`;
			return url;
		}
	};
}
function previewPathRewrite() {
	if (typeof window === "undefined") return void 0;
	const prefix = previewPathPrefix(window.location.hostname, window.location.pathname);
	return prefix ? prefixRewrite(prefix) : void 0;
}
function ArchiveBrowser({ events }) {
	const { t } = useI18n();
	const [query, setQuery] = (0, import_react.useState)("");
	const [year, setYear] = (0, import_react.useState)("all");
	const [genre, setGenre] = (0, import_react.useState)("all");
	const years = (0, import_react.useMemo)(() => {
		return [...new Set(events.map((event) => meridaKey(new Date(event.start)).slice(0, 4)))].sort((a, b) => b.localeCompare(a));
	}, [events]);
	const genres = (0, import_react.useMemo)(() => {
		return [...new Set(events.flatMap((event) => event.genres))].sort((a, b) => a.localeCompare(b));
	}, [events]);
	const filtered = events.filter((event) => {
		const eventYear = meridaKey(new Date(event.start)).slice(0, 4);
		if (year !== "all" && eventYear !== year) return false;
		if (genre !== "all" && !event.genres.includes(genre)) return false;
		return [
			event.name,
			event.venue,
			event.address ?? "",
			event.artists.join(" "),
			event.genres.join(" "),
			event.summary.es,
			event.summary.en
		].join(" ").toLowerCase().includes(query.trim().toLowerCase());
	});
	const chip = (active) => cn("min-h-11 border px-3 font-mono text-xs uppercase tracking-widest", active ? "border-acid bg-acid text-bg" : "border-line text-muted hover:text-fg");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "border border-line p-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					htmlFor: "archive-search",
					className: "font-mono text-xs uppercase tracking-widest text-muted",
					children: t("searchLabel")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					id: "archive-search",
					value: query,
					onChange: (event) => setQuery(event.target.value),
					placeholder: t("searchPlaceholder"),
					className: "mt-2 w-full border border-line bg-bg px-3 py-3 font-mono text-sm text-fg outline-none placeholder:text-muted"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-xs uppercase tracking-widest text-muted",
						children: t("year")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2 flex flex-wrap gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: chip(year === "all"),
							"aria-pressed": year === "all",
							onClick: () => setYear("all"),
							children: t("all")
						}), years.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: chip(year === item),
							"aria-pressed": year === item,
							onClick: () => setYear(item),
							children: item
						}, item))]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-xs uppercase tracking-widest text-muted",
						children: t("genre")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2 flex flex-wrap gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: chip(genre === "all"),
							"aria-pressed": genre === "all",
							onClick: () => setGenre("all"),
							children: t("all")
						}), genres.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: chip(genre === item),
							"aria-pressed": genre === item,
							onClick: () => setGenre(item),
							children: item
						}, item))]
					})]
				}),
				(query || year !== "all" || genre !== "all") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "mt-4 min-h-11 font-mono text-xs uppercase tracking-widest text-acid",
					onClick: () => {
						setQuery("");
						setYear("all");
						setGenre("all");
					},
					children: t("clear")
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-4 font-mono text-xs uppercase tracking-widest text-muted",
			"aria-live": "polite",
			children: [
				filtered.length,
				" ",
				t("results")
			]
		}),
		filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-8 border border-line p-6 text-muted",
			children: t("noResults")
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4 grid gap-4 lg:grid-cols-2",
			children: filtered.map((event) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EventCard, { event }, event.id))
		})
	] });
}
function PageIntro({ kicker, title, lede }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "page-pad pb-10 pt-32 xl:pt-36",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-xs uppercase tracking-widest text-acid",
				children: kicker
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 max-w-5xl font-display text-5xl uppercase sm:text-7xl md:text-8xl",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 max-w-2xl text-muted",
				children: lede
			})
		]
	});
}
function TransmissionsPage() {
	const { t, lang } = useI18n();
	useDocTitle(t("transmissionsTitle"));
	const upcoming = listUpcoming();
	const next = upcoming[0];
	const lede = lang === "es" ? "La próxima puerta. El botón de boletos aparece solo si existe un enlace oficial." : "The next door. A ticket button appears only when an official link exists.";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		next && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
			type: "application/ld+json",
			dangerouslySetInnerHTML: { __html: jsonScript(eventJsonLd(next)) }
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
			kicker: "VØID_SYSTEM / TX",
			title: t("navTransmissions"),
			lede
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "page-pad pb-24",
			children: next ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Countdown, { iso: next.start }), upcoming.map((event, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EventCard, {
					event,
					featured: index === 0
				}, event.id))]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border border-line p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-4xl uppercase",
						children: t("emptyTitle")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-xl text-muted",
						children: t("emptyBody")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/archive",
						className: buttonClass("line", "mt-6"),
						children: t("enterArchive")
					})
				]
			})
		})
	] });
}
function ArchivePage() {
	const { t } = useI18n();
	useDocTitle(t("archiveTitleDoc"));
	const archive = listArchive();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
		kicker: t("archiveKicker"),
		title: t("archiveTitle"),
		lede: t("archiveLede")
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "page-pad pb-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArchiveBrowser, { events: archive })
	})] });
}
function SignalCard({ item }) {
	const { t, lang } = useI18n();
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "border border-line bg-dim",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "poster relative overflow-hidden bg-surface",
			children: [
				!open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: item.image,
					alt: "",
					width: 1200,
					height: 1600,
					className: "h-full w-full object-cover",
					loading: "lazy"
				}),
				open && item.embedUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
					title: item.title[lang],
					src: item.embedUrl,
					className: "absolute inset-0 h-full w-full bg-bg",
					loading: "lazy",
					referrerPolicy: "strict-origin-when-cross-origin"
				}),
				!open && item.embedUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-x-0 bottom-0 p-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: buttonClass("solid"),
						onClick: () => setOpen(true),
						children: t("loadEmbed")
					})
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-3 p-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-xs uppercase tracking-widest text-acid",
					children: item.source
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl uppercase",
					children: item.title[lang]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: item.caption[lang]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					className: buttonClass("quiet"),
					href: item.href,
					target: "_blank",
					rel: "noopener noreferrer",
					children: [t("openOriginal"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
						"aria-hidden": "true",
						className: "size-4"
					})]
				})
			]
		})]
	});
}
function SignalPage() {
	const { t } = useI18n();
	useDocTitle(t("signalTitleDoc"));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
		kicker: t("signalKicker"),
		title: t("signalTitle"),
		lede: t("signalLede")
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "page-pad grid gap-4 pb-24 xl:grid-cols-3",
		children: media.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SignalCard, { item }, item.id))
	})] });
}
var TOPICS = [
	"booking",
	"collab",
	"press",
	"other"
];
function ContactPage() {
	const { t } = useI18n();
	useDocTitle(t("contactTitleDoc"));
	const started = (0, import_react.useRef)(0);
	if (started.current === 0 && typeof performance !== "undefined") started.current = performance.now();
	const [name, setName] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [topic, setTopic] = (0, import_react.useState)("booking");
	const [message, setMessage] = (0, import_react.useState)("");
	const [company, setCompany] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)(null);
	const [draft, setDraft] = (0, import_react.useState)(null);
	const [copied, setCopied] = (0, import_react.useState)(false);
	const topicLabel = {
		booking: t("topicBooking"),
		collab: t("topicCollab"),
		press: t("topicPress"),
		other: t("topicOther")
	}[topic];
	const onSubmit = (event) => {
		event.preventDefault();
		if (company.trim()) {
			setDraft("");
			setError(null);
			return;
		}
		if (name.trim().length < 2) return setError(t("errName"));
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) return setError(t("errEmail"));
		if (message.trim().length < 8) return setError(t("errMessage"));
		if (performance.now() - started.current < 800) return;
		const text = `THE VØID / ${topicLabel}\n${name.trim()} · ${email.trim()}\n\n${message.trim()}`;
		setError(null);
		setDraft(text);
		setCopied(false);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
		kicker: "VØID_SYSTEM / IN",
		title: t("contactTitle"),
		lede: t("contactLede")
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "page-pad grid gap-10 pb-24 xl:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "relative border border-line p-4 sm:p-6",
			onSubmit,
			noValidate: true,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute h-px w-px overflow-hidden",
					"aria-hidden": "true",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Company", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: company,
						onChange: (event) => setCompany(event.target.value),
						tabIndex: -1,
						autoComplete: "off"
					})] })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "grid gap-2 font-mono text-xs uppercase tracking-widest text-muted",
							htmlFor: "contact-name",
							children: [t("name"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "contact-name",
								value: name,
								onChange: (event) => setName(event.target.value),
								autoComplete: "name",
								required: true,
								className: "border border-line bg-bg px-3 py-3 font-mono text-sm text-fg"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "grid gap-2 font-mono text-xs uppercase tracking-widest text-muted",
							htmlFor: "contact-email",
							children: [t("email"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "contact-email",
								type: "email",
								value: email,
								onChange: (event) => setEmail(event.target.value),
								autoComplete: "email",
								required: true,
								className: "border border-line bg-bg px-3 py-3 font-mono text-sm text-fg"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "grid gap-2 font-mono text-xs uppercase tracking-widest text-muted",
							htmlFor: "contact-topic",
							children: [t("topic"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
								id: "contact-topic",
								value: topic,
								onChange: (event) => setTopic(event.target.value),
								className: "min-h-11 border border-line bg-bg px-3 font-mono text-sm text-fg",
								children: TOPICS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: item,
									children: item === "booking" ? t("topicBooking") : item === "collab" ? t("topicCollab") : item === "press" ? t("topicPress") : t("topicOther")
								}, item))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "grid gap-2 font-mono text-xs uppercase tracking-widest text-muted",
							htmlFor: "contact-message",
							children: [t("message"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								id: "contact-message",
								value: message,
								onChange: (event) => setMessage(event.target.value),
								required: true,
								rows: 6,
								className: "border border-line bg-bg px-3 py-3 font-mono text-sm text-fg"
							})]
						})
					]
				}),
				error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm text-acid",
					role: "alert",
					children: error
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "submit",
					className: buttonClass("solid", "mt-6 w-full sm:w-auto"),
					children: t("send")
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border border-line p-4 sm:p-6",
			children: draft ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: t("contactReady")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					readOnly: true,
					value: draft,
					rows: 8,
					className: "mt-4 w-full border border-line bg-bg px-3 py-3 font-mono text-sm text-fg"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex flex-col gap-3 sm:flex-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: buttonClass("line"),
						onClick: async () => {
							try {
								await navigator.clipboard.writeText(draft);
								setCopied(true);
							} catch {
								setCopied(false);
							}
						},
						children: copied ? t("copied") : t("copy")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						className: buttonClass("solid"),
						href: instagramUrl,
						target: "_blank",
						rel: "noopener noreferrer",
						children: t("openIg")
					})]
				})
			] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-xs uppercase tracking-widest text-acid",
						children: "@thevoid_mid"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted",
						children: t("joinBody")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						className: buttonClass("line"),
						href: instagramUrl,
						target: "_blank",
						rel: "noopener noreferrer",
						children: "Instagram"
					})
				]
			})
		})]
	})] });
}
function PrivacyPage() {
	const { t, lang } = useI18n();
	useDocTitle(t("privacyTitleDoc"));
	const blocks = lang === "es" ? [
		"El idioma que eliges se guarda en este navegador (localStorage). No es una cookie de rastreo.",
		"El formulario de contacto no sube tu mensaje a un servidor. Lo prepara para que lo envíes por Instagram. Un campo oculto descarta envíos automáticos.",
		"Google Analytics y Meta Pixel están preparados, pero no hay identificadores configurados. Esos scripts no se cargan. Si el colectivo los activa, pedirán consentimiento antes.",
		"Instagram, TikTok y Resident Advisor son sitios de terceros. Al salir de aquí se aplican sus políticas."
	] : [
		"Your language choice stays in this browser (localStorage). It is not a tracking cookie.",
		"The contact form does not upload your message. It prepares it so you can send it through Instagram. A hidden field drops automated submissions.",
		"Google Analytics and the Meta Pixel are wired, but no IDs are configured, so those scripts never load. If the collective turns them on, they will ask first.",
		"Instagram, TikTok and Resident Advisor are third parties. Their policies apply once you leave this site."
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
		kicker: "VØID_SYSTEM / PRIV",
		title: t("privacyTitle"),
		lede: t("privacyLede")
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "page-pad mb-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "max-w-3xl space-y-4 border border-line p-6 text-muted xl:p-8",
			children: blocks.map((block) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: block }, block))
		})
	})] });
}
function EventPage({ event }) {
	const { t, lang } = useI18n();
	useDocTitle(`${event.name} — THE VØID`);
	const when = formatWhen(event.start, lang, event.timeKnown);
	const end = event.end ? formatWhen(event.end, lang, true) : null;
	const status = displayStatus(event);
	const canBuy = Boolean(event.ticketUrl) && status !== "ended";
	const related = [...listUpcoming(), ...listArchive()].filter((item) => item.id !== event.id).slice(0, 2);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
			type: "application/ld+json",
			dangerouslySetInnerHTML: { __html: jsonScript(eventJsonLd(event)) }
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "page-pad pb-16 pt-32 xl:pt-36",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: status === "ended" ? "/archive" : "/transmissions",
				className: buttonClass("quiet"),
				children: t("back")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 grid gap-8 lg:grid-cols-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: event.image,
					alt: "",
					width: 1200,
					height: 1600,
					className: "poster w-full object-cover lg:col-span-5"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-7",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusMark, { event }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-3 font-display text-5xl uppercase sm:text-7xl",
							children: event.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-xl text-muted",
							children: event.summary[lang]
						}),
						status !== "ended" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 max-w-md",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Countdown, { iso: event.start })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
							className: "mt-8 grid gap-px bg-line sm:grid-cols-2",
							children: [
								[t("when"), `${when.day}${when.time ? ` · ${when.time}` : ""}${end?.time ? ` — ${end.time}` : ""}`],
								[t("venue"), event.address ?? event.venue],
								[t("artists"), event.artists.length ? event.artists.join(" · ") : event.artistNote?.[lang] ?? "—"],
								[t("genres"), event.genres.join(" · ")],
								...event.age ? [[t("age"), event.age]] : [],
								...event.production ? [[t("production"), event.production.join(" · ")]] : [],
								...event.priceMxn ? [[t("price"), `MXN ${event.priceMxn}`]] : []
							].map(([label, value]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "bg-bg p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "font-mono text-xs uppercase tracking-widest text-acid",
									children: label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "mt-2 text-sm text-fg",
									children: value
								})]
							}, label))
						}),
						event.scheduleNote && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm text-muted",
							children: event.scheduleNote[lang]
						}),
						event.priceMxn && status === "ended" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted",
							children: t("priceNote")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex flex-col gap-3 sm:flex-row",
							children: [canBuy && event.ticketUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								className: buttonClass("solid"),
								href: event.ticketUrl,
								target: "_blank",
								rel: "noopener noreferrer",
								children: [t("tickets"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
									"aria-hidden": "true",
									className: "size-4"
								})]
							}), event.links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: buttonClass("line"),
								href: link.href,
								target: "_blank",
								rel: "noopener noreferrer",
								children: link.label
							}, link.href))]
						})
					]
				})]
			})]
		}),
		related.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "page-pad pb-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mb-4 font-display text-3xl uppercase",
				children: t("related")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 lg:grid-cols-2",
				children: related.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EventCard, { event: item }, item.id))
			})]
		})
	] });
}
function NotFoundPage() {
	const { t } = useI18n();
	useDocTitle(t("notFoundTitle"));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "page-pad pb-24 pt-36",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-xs uppercase tracking-widest text-acid",
				children: "404 / SIGNAL LOST"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-display text-6xl uppercase sm:text-8xl",
				children: t("notFoundTitle")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-md text-muted",
				children: t("notFoundBody")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				className: buttonClass("solid", "mt-8"),
				children: "THE VØID"
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var CONNECTOR_TOKEN_READY_EVENT = "grok:connector-token-ready";
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
var ConnectorTokenReadySchema = EnvelopeSchema.extend({ type: literal("connector-token-ready") });
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Origin of the Grok embedder framing this page, or null when the page runs
* top-level (download/export, local `npm run dev`, deployed sites) or under a
* non-Grok parent. Client-only; null during SSR.
*/
function resolveCurrentEmbedderOrigin() {
	if (typeof window === "undefined") return null;
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	return resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	const parentOrigin = resolveCurrentEmbedderOrigin();
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onHello = (data) => {
		if (!HelloSchema.safeParse(data).success) return;
		announce();
	};
	const onNavigate = (data) => {
		const parsed = NavigateSchema.safeParse(data);
		if (!parsed.success) return;
		navigate(parsed.data.path);
		queueMicrotask(reportLocation);
	};
	const onHistory = (data) => {
		const parsed = HistorySchema.safeParse(data);
		if (!parsed.success) return;
		if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
		window.history.go(parsed.data.delta);
	};
	const onConnectorTokenReady = (data) => {
		if (!ConnectorTokenReadySchema.safeParse(data).success) return;
		window.dispatchEvent(new Event(CONNECTOR_TOKEN_READY_EVENT));
	};
	const hostMessageHandlers = /* @__PURE__ */ new Map([
		["hello", onHello],
		["navigate", onNavigate],
		["history", onHistory],
		["connector-token-ready", onConnectorTokenReady]
	]);
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		hostMessageHandlers.get(envelope.data.type)?.(event.data);
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
var GA_ID = /^G-[A-Z0-9]+$/;
var PIXEL_ID = /^\d{8,20}$/;
function safeGa() {
	return GA_ID.test(analytics.gaId) ? analytics.gaId : "";
}
function safePixel() {
	return PIXEL_ID.test(analytics.metaPixelId) ? analytics.metaPixelId : "";
}
function Consent() {
	const ga = safeGa();
	const pixel = safePixel();
	const { lang } = useI18n();
	const [choice, setChoice] = (0, import_react.useState)("unknown");
	(0, import_react.useEffect)(() => {
		const stored = localStorage.getItem("void-consent");
		if (stored === "granted" || stored === "denied") setChoice(stored);
	}, []);
	(0, import_react.useEffect)(() => {
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
	}, [
		choice,
		ga,
		pixel
	]);
	if (!ga && !pixel || choice !== "unknown") return null;
	const accept = () => {
		localStorage.setItem("void-consent", "granted");
		setChoice("granted");
	};
	const reject = () => {
		localStorage.setItem("void-consent", "denied");
		setChoice("denied");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "page-pad fixed inset-x-0 bottom-0 z-40 border-t border-line bg-bg py-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "max-w-3xl text-sm text-muted",
			children: lang === "es" ? "Medición opcional. Acepta para cargar los scripts configurados, o déjalos apagados." : "Analytics is optional. Accept to load the configured scripts, or keep them off."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-3 flex gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "min-h-11 bg-acid px-4 font-mono text-xs uppercase tracking-widest text-bg",
				onClick: accept,
				children: lang === "es" ? "Aceptar" : "Accept"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "min-h-11 border border-line px-4 font-mono text-xs uppercase tracking-widest text-fg",
				onClick: reject,
				children: lang === "es" ? "Rechazar" : "Reject"
			})]
		})]
	});
}
var LINES = [
	"VØID_SYSTEM",
	"INITIALIZING TRANSMISSION...",
	"SIGNAL DETECTED",
	"REALITY STATUS: UNSTABLE",
	"CONNECTION ESTABLISHED"
];
var NAV = [
	{
		to: "/",
		key: "navHome",
		exact: true
	},
	{
		to: "/transmissions",
		key: "navTransmissions"
	},
	{
		to: "/archive",
		key: "navArchive"
	},
	{
		to: "/signal",
		key: "navSignal"
	},
	{
		to: "/contact",
		key: "navContact"
	}
];
function Boot() {
	const { t } = useI18n();
	const [phase, setPhase] = (0, import_react.useState)("wait");
	const [count, setCount] = (0, import_react.useState)(1);
	(0, import_react.useEffect)(() => {
		const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		let seen = false;
		try {
			seen = sessionStorage.getItem("void-booted") === "1";
		} catch {
			seen = true;
		}
		setPhase(reduce || seen ? "done" : "play");
	}, []);
	(0, import_react.useEffect)(() => {
		if (phase !== "play") return;
		if (count >= LINES.length) return;
		const id = window.setTimeout(() => setCount((n) => n + 1), 420);
		return () => window.clearTimeout(id);
	}, [phase, count]);
	(0, import_react.useEffect)(() => {
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
		} catch {}
		setPhase("out");
		window.setTimeout(() => setPhase("done"), 280);
	};
	if (phase === "wait" || phase === "done") return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		role: "dialog",
		"aria-modal": "true",
		"aria-label": "VØID_SYSTEM",
		className: cn("fixed inset-0 z-50 flex flex-col justify-between bg-bg px-5 py-6 text-fg transition-opacity sm:px-10", phase === "out" ? "opacity-0" : "opacity-100"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between gap-4 font-mono text-xs uppercase tracking-widest text-muted",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "VØID_SYSTEM / BOOT" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "min-h-11 px-3 text-acid",
					onClick: finish,
					children: t("bootSkip")
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto w-full max-w-xl",
				"aria-live": "polite",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "space-y-2 font-mono text-sm sm:text-base",
					children: LINES.slice(0, count).map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "text-fg",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-acid",
							children: "> "
						}), line]
					}, line))
				}), count >= LINES.length && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "mt-8 min-h-11 bg-acid px-6 font-mono text-xs uppercase tracking-widest text-bg",
					onClick: finish,
					children: t("bootEnter")
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-xs uppercase tracking-widest text-muted",
				children: "MÉRIDA / YUCATÁN"
			})
		]
	});
}
function Clock() {
	const [time, setTime] = (0, import_react.useState)("--:--:--");
	(0, import_react.useEffect)(() => {
		const tick = () => {
			setTime(new Intl.DateTimeFormat("en-GB", {
				timeZone: "America/Merida",
				hour: "2-digit",
				minute: "2-digit",
				second: "2-digit",
				hour12: false
			}).format(/* @__PURE__ */ new Date()));
		};
		tick();
		const id = window.setInterval(tick, 1e3);
		return () => window.clearInterval(id);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "tabular-nums",
		children: time
	});
}
function Frame({ children }) {
	const { t, lang, setLang } = useI18n();
	const [open, setOpen] = (0, import_react.useState)(false);
	const pathname = useRouterState({ select: (state) => state.location.pathname });
	const matchRoute = useMatchRoute();
	(0, import_react.useEffect)(() => {
		setOpen(false);
	}, [pathname]);
	(0, import_react.useEffect)(() => {
		if (!open) return;
		const onKey = (event) => {
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#content",
				className: "sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-acid focus:px-4 focus:py-3 focus:text-bg",
				children: t("skip")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Boot, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "fixed inset-x-0 top-0 z-40 border-b border-line bg-bg",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "page-pad flex h-16 items-center justify-between gap-6 lg:h-20",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: "flex shrink-0 items-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/media/logo.webp",
								alt: "THE VØID",
								width: 1400,
								height: 193,
								className: "h-6 w-auto sm:h-7 lg:h-8"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
							className: "hidden items-center gap-8 md:flex",
							"aria-label": t("menuLabel"),
							children: NAV.slice(1).map((item) => {
								const active = Boolean(matchRoute({
									to: item.to,
									fuzzy: false
								}));
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: item.to,
									className: cn("inline-flex min-h-11 items-center font-mono text-xs uppercase tracking-widest", active ? "text-acid" : "text-muted hover:text-fg"),
									children: t(item.key)
								}, item.to);
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "hidden font-mono text-xs tracking-widest text-muted lg:block",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, {}),
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-line",
											children: "/"
										}),
										" CST"
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex border border-line",
									role: "group",
									"aria-label": t("langLabel"),
									children: ["es", "en"].map((code) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										"aria-pressed": lang === code,
										className: cn("min-h-11 min-w-11 px-2 font-mono text-xs uppercase", lang === code ? "bg-acid text-bg" : "text-muted hover:text-fg"),
										onClick: () => setLang(code),
										children: code
									}, code))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									className: "inline-flex size-11 items-center justify-center border border-line text-fg md:hidden",
									"aria-expanded": open,
									"aria-controls": "site-menu",
									onClick: () => setOpen((value) => !value),
									children: [open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { "aria-hidden": "true" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { "aria-hidden": "true" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "sr-only",
										children: open ? t("menuClose") : t("menuOpen")
									})]
								})
							]
						})
					]
				})
			}),
			open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				id: "site-menu",
				role: "dialog",
				"aria-modal": "true",
				"aria-label": t("menuLabel"),
				className: "fixed inset-0 z-30 bg-bg px-6 pt-24 md:hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "flex flex-col",
					children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						className: "border-b border-line py-4 font-display text-5xl uppercase text-fg",
						children: t(item.key)
					}, item.to))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				id: "content",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Consent, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "page-pad border-t border-line py-14",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/media/logo.webp",
							alt: "",
							width: 1400,
							height: 193,
							className: "h-8 w-auto"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 font-mono text-xs uppercase tracking-widest text-muted",
							children: t("cityLine")
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-x-6 gap-y-3 font-mono text-xs uppercase tracking-widest",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									className: "min-h-11 text-fg hover:text-acid",
									href: instagramUrl,
									target: "_blank",
									rel: "noopener noreferrer",
									children: "Instagram"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									className: "min-h-11 text-fg hover:text-acid",
									href: tiktokUrl,
									target: "_blank",
									rel: "noopener noreferrer",
									children: "TikTok"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/contact",
									className: "min-h-11 text-fg hover:text-acid",
									children: t("navContact")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/privacy",
									className: "min-h-11 text-muted hover:text-fg",
									children: t("privacy")
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-8 max-w-3xl text-sm text-muted",
						children: t("footerNote")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 font-mono text-xs uppercase tracking-widest text-muted",
						children: t("adult")
					})
				]
			})
		]
	});
}
var styles_default = "/assets/styles-C2NfY0xk.css";
var Route$7 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "THE VØID — Mérida" },
			{
				name: "description",
				content: "THE VØID — hard techno, schranz, industrial, hard bounce y hard groove en Mérida, Yucatán. Transmisiones, archivo y señal."
			},
			{
				name: "theme-color",
				content: "#070807"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			}
		]
	}),
	component: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "es",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(I18nProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }) }) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
		] })]
	})
});
var $$splitComponentImporter$6 = () => import("./routes-DJGbkK25.mjs");
var Route$6 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter$6, "component") });
var $$splitComponentImporter$5 = () => import("./archive-Bk7SVLSg.mjs");
var Route$5 = createFileRoute("/archive")({ component: lazyRouteComponent($$splitComponentImporter$5, "component") });
var $$splitComponentImporter$4 = () => import("./contact-6W2TaST_.mjs");
var Route$4 = createFileRoute("/contact")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
var $$splitComponentImporter$3 = () => import("./privacy-BSzlYDy1.mjs");
var Route$3 = createFileRoute("/privacy")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var $$splitComponentImporter$2 = () => import("./signal-DJK5whf3.mjs");
var Route$2 = createFileRoute("/signal")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
var $$splitComponentImporter$1 = () => import("./transmissions-BqbBC4pp.mjs");
var Route$1 = createFileRoute("/transmissions")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("./transmission._eventId-DfECW0A8.mjs");
var Route = createFileRoute("/transmission/$eventId")({
	loader: ({ params }) => {
		const event = getEvent(params.eventId);
		if (!event) throw notFound();
		return event;
	},
	head: ({ loaderData }) => ({ meta: [{ title: loaderData ? `${loaderData.name} — THE VØID` : "THE VØID" }, {
		name: "description",
		content: loaderData?.summary.es ?? "THE VØID"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$6.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$7
	}),
	ArchiveRoute: Route$5.update({
		id: "/archive",
		path: "/archive",
		getParentRoute: () => Route$7
	}),
	ContactRoute: Route$4.update({
		id: "/contact",
		path: "/contact",
		getParentRoute: () => Route$7
	}),
	PrivacyRoute: Route$3.update({
		id: "/privacy",
		path: "/privacy",
		getParentRoute: () => Route$7
	}),
	SignalRoute: Route$2.update({
		id: "/signal",
		path: "/signal",
		getParentRoute: () => Route$7
	}),
	TransmissionsRoute: Route$1.update({
		id: "/transmissions",
		path: "/transmissions",
		getParentRoute: () => Route$7
	}),
	TransmissionEventIdRoute: Route.update({
		id: "/transmission/$eventId",
		path: "/transmission/$eventId",
		getParentRoute: () => Route$7
	})
};
var routeTree = Route$7._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		rewrite: previewPathRewrite(),
		defaultErrorComponent: AppErrorComponent,
		defaultNotFoundComponent: NotFoundPage
	});
}
//#endregion
export { EventPage as a, TransmissionsPage as c, ContactPage as i, Route as n, PrivacyPage as o, ArchivePage as r, SignalPage as s, router_exports as t };
