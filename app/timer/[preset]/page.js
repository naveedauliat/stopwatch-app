import Link from "next/link";
import { notFound } from "next/navigation";
import CountdownTimer from "../../countdown/CountdownTimer";
import { presets, presetBySlug, presetSlugs } from "../presets";

const BASE = "https://stopwatch.lol";

export function generateStaticParams() {
  return presetSlugs.map((preset) => ({ preset }));
}

export function generateMetadata({ params }) {
  const p = presetBySlug[params.preset];
  if (!p) return { title: "Timer Not Found | Stopwatch.lol" };
  const url = `${BASE}/timer/${p.slug}`;
  return {
    title: p.title,
    description: p.description,
    alternates: { canonical: url },
    openGraph: {
      title: p.title,
      description: p.description,
      type: "website",
      url,
      siteName: "Stopwatch.lol",
      images: [{ url: `${BASE}/og_image.png`, width: 1200, height: 630, alt: p.label }],
    },
    twitter: {
      card: "summary_large_image",
      title: p.title,
      description: p.description,
      images: [`${BASE}/og_image.png`],
    },
  };
}

export default function TimerPresetPage({ params }) {
  const p = presetBySlug[params.preset];
  if (!p) notFound();

  const url = `${BASE}/timer/${p.slug}`;
  const related = p.related.map((s) => presetBySlug[s]).filter(Boolean);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: p.title,
    description: p.description,
    isPartOf: { "@id": `${BASE}/#website` },
    about: { "@id": `${BASE}/#webapp` },
    inLanguage: "en-US",
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE },
        { "@type": "ListItem", position: 2, name: "Timers", item: `${BASE}/timer` },
        { "@type": "ListItem", position: 3, name: p.label, item: url },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="max-w-2xl mx-auto mb-6 text-sm text-white/60" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/timer" className="hover:text-white transition-colors">Timers</Link>
          <span className="mx-2">/</span>
          <span className="text-white/80">{p.label}</span>
        </nav>

        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{p.h1}</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">{p.intro}</p>
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-white/80">
            <span className="bg-white/10 px-3 py-1 rounded-full">Sound Alarm</span>
            <span className="bg-white/10 px-3 py-1 rounded-full">One-Click Start</span>
            <span className="bg-white/10 px-3 py-1 rounded-full">Works Offline</span>
            <span className="bg-white/10 px-3 py-1 rounded-full">No Signup</span>
          </div>
        </div>

        <CountdownTimer initialH={p.h} initialM={p.m} initialS={p.s} />

        {/* Use cases */}
        <section className="mt-16 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            What a {p.label} Is Good For
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {p.useCases.map((item, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-white/80 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related timers */}
        <section className="mt-16 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-6">Other Popular Timers</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/timer/${r.slug}`}
                className="bg-white/10 hover:bg-white/20 border border-white/20 rounded-full px-5 py-2 text-white/90 hover:text-white transition"
              >
                {r.label}
              </Link>
            ))}
            <Link
              href="/timer"
              className="bg-white/10 hover:bg-white/20 border border-white/20 rounded-full px-5 py-2 text-white/90 hover:text-white transition"
            >
              All Timers →
            </Link>
          </div>
        </section>

        <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm">
          <Link href="/countdown" className="text-white/70 hover:text-white transition inline-flex items-center gap-2">
            Custom Countdown Timer
          </Link>
          <Link href="/" className="text-white/70 hover:text-white transition inline-flex items-center gap-2">
            Stopwatch
          </Link>
        </div>
      </div>
    </>
  );
}
