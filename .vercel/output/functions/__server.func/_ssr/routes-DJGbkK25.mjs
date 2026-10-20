import { C as require_jsx_runtime, x as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { b as useDocTitle, f as instagramUrl, h as listUpcoming, l as eventJsonLd, m as listArchive, n as EventCard, o as buttonClass, p as jsonScript, s as cn, t as Countdown, u as formatWhen, v as soundGenres, x as useI18n, y as tiktokUrl } from "./event-card-lZhlT3vD.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DJGbkK25.js
var import_jsx_runtime = require_jsx_runtime();
var STRIP = [
	"/media/red-haze.webp",
	"/media/beams.webp",
	"/media/void-booth.webp",
	"/media/fire.webp",
	"/media/trails.webp",
	"/media/headphones.webp",
	"/media/decks-red.webp",
	"/media/night-trees.webp"
];
function Waveform() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 240 48",
		className: "h-12 w-full text-acid",
		"aria-hidden": "true",
		children: Array.from({ length: 48 }, (_, index) => {
			const height = 6 + index * 17 % 34;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: index * 5,
				y: (48 - height) / 2,
				width: "2",
				height,
				fill: "currentColor",
				opacity: .35 + index % 5 * .13
			}, index);
		})
	});
}
function HomePage() {
	const { t, lang } = useI18n();
	useDocTitle(t("homeTitle"));
	const next = listUpcoming()[0];
	const recent = listArchive().slice(0, 4);
	const nextWhen = next ? formatWhen(next.start, lang, next.timeKnown) : null;
	const org = {
		"@context": "https://schema.org",
		"@type": "Organization",
		name: "THE VØID",
		areaServed: "Mérida, Yucatán, Mexico",
		sameAs: [instagramUrl, tiktokUrl],
		description: t("philosophyBody")
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
			type: "application/ld+json",
			dangerouslySetInnerHTML: { __html: jsonScript(org) }
		}),
		next && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
			type: "application/ld+json",
			dangerouslySetInnerHTML: { __html: jsonScript(eventJsonLd(next)) }
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "grain relative flex min-h-[100svh] flex-col justify-end overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/media/hero.webp",
					alt: "",
					width: 1837,
					height: 1225,
					className: "hero-still",
					fetchPriority: "high"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-bg via-bg/35 to-bg/20" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 hidden bg-gradient-to-r from-bg via-bg/55 to-transparent xl:block" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "scanlines absolute inset-0 opacity-50" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "pointer-events-none absolute inset-5 hidden border border-white/15 xl:block",
					"aria-hidden": "true",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute left-0 top-0 size-8 border-l-2 border-t-2 border-acid" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute right-0 top-0 size-8 border-r-2 border-t-2 border-acid" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute bottom-0 left-0 size-8 border-b-2 border-l-2 border-acid" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute bottom-0 right-0 size-8 border-b-2 border-r-2 border-acid" })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "page-pad relative z-10 grid items-end gap-10 pb-12 pt-32 xl:grid-cols-12 xl:pb-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "xl:col-span-7",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-xs uppercase tracking-widest text-acid",
								children: "VØID_SYSTEM / STATUS: UNSTABLE"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 font-mono text-xs uppercase tracking-widest text-muted",
								children: t("reality")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-6 max-w-5xl font-display text-6xl uppercase text-fg sm:text-8xl xl:text-[7.5rem]",
								children: t("heroTitle")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 font-display text-2xl uppercase tracking-wide text-fg sm:text-4xl",
								children: t("heroSupport")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 flex flex-wrap gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/transmissions",
									className: buttonClass("solid"),
									children: t("explore")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/archive",
									className: buttonClass("line"),
									children: t("enterArchive")
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-8 font-mono text-xs uppercase tracking-widest text-muted",
								children: [t("location"), " · 20.967° N / 89.593° W"]
							})
						]
					}), next && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
						className: "border border-line bg-bg/75 p-5 backdrop-blur-sm xl:col-span-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-xs uppercase tracking-widest text-acid",
								children: t("nextKicker")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-2 font-display text-4xl uppercase xl:text-5xl",
								children: next.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-3 font-mono text-xs uppercase tracking-widest text-muted",
								children: [
									nextWhen?.stamp,
									nextWhen?.time ? ` · ${nextWhen.time}` : "",
									" · ",
									next.venue
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-5",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Countdown, { iso: next.start })
							}),
							next.ticketUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: buttonClass("solid", "mt-5 w-full"),
								href: next.ticketUrl,
								target: "_blank",
								rel: "noopener noreferrer",
								children: t("tickets")
							})
						]
					})]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			"aria-label": lang === "es" ? "Archivo fotográfico" : "Photo archive",
			className: "border-y border-line",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 md:grid-cols-4 xl:grid-cols-8",
				children: STRIP.map((src, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src,
					alt: "",
					width: 800,
					height: 450,
					className: cn("aspect-[4/5] w-full object-cover xl:aspect-[3/4]", index > 3 && "hidden md:block"),
					loading: "lazy"
				}, src))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "page-pad py-16 xl:py-24",
			children: next ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EventCard, {
				event: next,
				featured: true
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border border-line p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-xl text-muted",
					children: t("emptyBody")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/archive",
					className: buttonClass("line", "mt-6"),
					children: t("enterArchive")
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "page-pad border-t border-line py-16 xl:py-28",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-xs uppercase tracking-widest text-acid",
					children: t("philosophyKicker")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 max-w-5xl font-display text-5xl uppercase xl:text-8xl",
					children: t("philosophyTitle")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 grid gap-6 md:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted",
						children: t("philosophyBody")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted",
						children: t("philosophyBody2")
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
					className: "mt-10 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4",
					children: [
						["01", "Mérida, Yucatán"],
						["02", "ØØ1 · 27.09.25"],
						["03", lang === "es" ? "1 año · 26.09.26" : "1 year · 26.09.26"],
						["04", "+18"]
					].map(([index, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-bg p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "font-mono text-xs text-acid",
							children: index
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-2 font-display text-2xl uppercase",
							children: label
						})]
					}, index))
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "border-t border-line",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "marquee-track flex w-max",
					children: [0, 1].map((copy) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: copy === 1 ? "flex motion-reduce:hidden" : "flex",
						"aria-hidden": copy === 1,
						children: soundGenres.map((genre) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-6 px-3 py-5 font-display text-4xl uppercase sm:text-6xl",
							children: [genre, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-acid",
								children: "/"
							})]
						}, `${genre}-${copy}`))
					}, copy))
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "page-pad grid gap-10 py-16 xl:grid-cols-2 xl:py-28",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-xs uppercase tracking-widest text-acid",
						children: t("soundKicker")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-5xl uppercase sm:text-7xl",
						children: t("soundTitle")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-xl text-muted",
						children: t("soundBody")
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col justify-end gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Waveform, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "grid grid-cols-1 gap-2 sm:grid-cols-2",
						children: soundGenres.map((genre) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "border border-line px-3 py-3 font-mono text-xs uppercase tracking-widest",
							children: genre
						}, genre))
					})]
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "page-pad border-t border-line py-16 xl:py-28",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-8 flex items-end justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-5xl uppercase xl:text-7xl",
					children: t("archiveHomeTitle")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/archive",
					className: buttonClass("quiet"),
					children: t("viewArchive")
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 xl:grid-cols-2",
				children: recent.map((event) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EventCard, { event }, event.id))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "page-pad border-t border-line py-16 xl:py-28",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-xs uppercase tracking-widest text-acid",
					children: t("joinKicker")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 max-w-5xl font-display text-5xl uppercase xl:text-8xl",
					children: t("joinTitle")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 max-w-2xl text-muted",
					children: t("joinBody")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-col gap-3 sm:flex-row",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: buttonClass("solid", "w-full sm:w-auto"),
							href: instagramUrl,
							target: "_blank",
							rel: "noopener noreferrer",
							children: "Instagram"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: buttonClass("line", "w-full sm:w-auto"),
							href: tiktokUrl,
							target: "_blank",
							rel: "noopener noreferrer",
							children: "TikTok"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							className: buttonClass("line", "w-full sm:w-auto"),
							children: t("navContact")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/signal",
							className: buttonClass("quiet", "w-full sm:w-auto"),
							children: t("viewSignal")
						})
					]
				})
			]
		})
	] });
}
var SplitComponent = HomePage;
//#endregion
export { SplitComponent as component };
