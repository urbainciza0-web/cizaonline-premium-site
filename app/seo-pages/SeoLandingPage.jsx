import Link from "next/link";
import { ArrowRight, CheckCircle2, MessageCircle, ShieldCheck, Sparkles } from "lucide-react";

const whatsappUrl = "https://wa.me/243834783307";
const signupUrl = "/#inscription";

const seoLinks = [
  ["Acheter Bitcoin en RDC", "/acheter-bitcoin-rdc"],
  ["Acheter USDT Mobile Money", "/acheter-usdt-mobile-money"],
  ["Guide Binance RDC", "/guide-binance-rdc"],
  ["Formation Crypto Afrique", "/formation-crypto-afrique-francophone"],
  ["FAQ CizaOnline", "/faq-cizaonline"]
];

function CtaButtons({ whatsappText, signupText }) {
  return (
    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
      <a
        href={`${whatsappUrl}?text=${encodeURIComponent(whatsappText)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="premium-button inline-flex min-h-[3.25rem] items-center justify-center gap-2 rounded-full px-6 py-3 text-center text-sm font-black text-black"
      >
        <MessageCircle className="h-4 w-4" aria-hidden="true" />
        WhatsApp
      </a>
      <Link
        href={signupUrl}
        className="inline-flex min-h-[3.25rem] items-center justify-center gap-2 rounded-full border border-ciza-gold/25 bg-white/[0.055] px-6 py-3 text-center text-sm font-bold text-white transition hover:border-ciza-gold/60 hover:bg-ciza-gold/10"
      >
        {signupText}
        <ArrowRight className="h-4 w-4 text-ciza-gold" aria-hidden="true" />
      </Link>
    </div>
  );
}

export default function SeoLandingPage({ page }) {
  return (
    <main className="min-h-screen bg-ciza-black text-ciza-ivory">
      <section className="relative overflow-hidden px-4 pb-16 pt-28 sm:px-6 sm:pb-24 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(244,197,66,.18),transparent_24rem),radial-gradient(circle_at_85%_18%,rgba(24,211,158,.1),transparent_22rem)]" />
        <div className="relative mx-auto max-w-7xl">
          <nav className="mb-10 flex flex-wrap gap-2 text-xs font-bold text-white/56" aria-label="Pages SEO CizaOnline">
            <Link href="/" className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 hover:text-ciza-gold">Accueil</Link>
            {seoLinks.map(([label, href]) => (
              <Link key={href} href={href} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 hover:text-ciza-gold">
                {label}
              </Link>
            ))}
          </nav>

          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.04fr)_minmax(18rem,.72fr)] lg:items-center">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-ciza-gold/25 bg-ciza-gold/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-ciza-gold">
                <Sparkles className="h-4 w-4" aria-hidden="true" />
                {page.eyebrow}
              </p>
              <h1 className="mt-6 text-balance font-display text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
                {page.title}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
                {page.description}
              </p>
              <CtaButtons whatsappText={page.whatsappText} signupText={page.signupText} />
            </div>

            <aside className="gold-border glass rounded-[1.5rem] p-5 shadow-gold sm:rounded-[2rem] sm:p-7">
              <p className="font-display text-2xl font-black text-white">Ce que tu vas clarifier</p>
              <div className="mt-6 grid gap-3">
                {page.outcomes.map((item) => (
                  <div key={item} className="flex gap-3 rounded-2xl border border-white/8 bg-black/24 p-4">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-ciza-gold" aria-hidden="true" />
                    <p className="text-sm leading-6 text-white/70">{item}</p>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="border-y border-white/8 bg-white/[0.025] px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {page.highlights.map(({ title, text }) => (
            <article key={title} className="rounded-[1.25rem] border border-ciza-gold/16 bg-ciza-graphite p-5 shadow-panel">
              <ShieldCheck className="h-7 w-7 text-ciza-gold" aria-hidden="true" />
              <h2 className="mt-4 font-display text-xl font-black text-white">{title}</h2>
              <p className="mt-3 text-sm leading-7 text-white/62">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[minmax(0,.72fr)_minmax(0,1fr)]">
          <div>
            <p className="font-display text-xs font-black uppercase tracking-[0.24em] text-ciza-gold">Guide CizaOnline</p>
            <h2 className="mt-4 text-balance font-display text-3xl font-black leading-tight text-white sm:text-4xl">{page.guideTitle}</h2>
            <p className="mt-5 leading-8 text-white/68">{page.guideIntro}</p>
            <CtaButtons whatsappText={page.whatsappText} signupText={page.signupText} />
          </div>
          <div className="grid gap-4">
            {page.steps.map(({ title, text }) => (
              <article key={title} className="rounded-[1.25rem] border border-white/10 bg-white/[0.035] p-5">
                <h3 className="font-display text-xl font-black text-white">{title}</h3>
                <p className="mt-3 leading-7 text-white/64">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white/[0.025] px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="text-center font-display text-xs font-black uppercase tracking-[0.24em] text-ciza-gold">Questions utiles</p>
          <h2 className="mt-4 text-center font-display text-3xl font-black text-white sm:text-4xl">FAQ rapide</h2>
          <div className="mt-10 grid gap-3">
            {page.faqs.map(({ q, a }) => (
              <details key={q} className="rounded-[1.25rem] border border-white/10 bg-ciza-graphite p-5">
                <summary className="cursor-pointer list-none font-display text-lg font-black text-white">{q}</summary>
                <p className="mt-4 leading-7 text-white/62">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="cta-panel mx-auto max-w-7xl rounded-[1.5rem] border border-ciza-gold/24 p-6 shadow-gold sm:rounded-[2rem] sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
            <div>
              <h2 className="font-display text-3xl font-black text-white sm:text-4xl">Besoin d'un accompagnement CizaOnline ?</h2>
              <p className="mt-4 max-w-3xl leading-8 text-white/68">Pose ta question sur WhatsApp ou rejoins le parcours d'inscription pour apprendre avec une methode claire, progressive et responsable.</p>
            </div>
            <CtaButtons whatsappText={page.whatsappText} signupText={page.signupText} />
          </div>
        </div>
      </section>
    </main>
  );
}
