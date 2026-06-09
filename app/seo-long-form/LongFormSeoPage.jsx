import Link from "next/link";
import { ArrowRight, BookOpenCheck, CheckCircle2, HelpCircle, MessageCircle, ShieldCheck, Sparkles } from "lucide-react";

const whatsappBase = "https://wa.me/243834783307";

function WhatsAppLink({ text, children, className }) {
  const href = `${whatsappBase}?text=${encodeURIComponent(text)}`;
  return (
    <a href={href} target="_blank" rel="noreferrer" className={className}>
      {children}
    </a>
  );
}

export default function LongFormSeoPage({ page }) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a
      }
    }))
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: page.title,
    description: page.description,
    author: {
      "@type": "Organization",
      name: "CizaOnline"
    },
    publisher: {
      "@type": "Organization",
      name: "CizaOnline"
    },
    mainEntityOfPage: page.canonicalUrl,
    inLanguage: "fr-FR"
  };

  return (
    <main className="min-h-screen bg-[#070606] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <section className="relative overflow-hidden border-b border-[#d7a84f]/20 px-5 py-20 sm:px-8 lg:px-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(215,168,79,0.18),transparent_35%),linear-gradient(180deg,rgba(215,168,79,0.08),transparent)]" />
        <div className="relative mx-auto max-w-6xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#d7a84f]/35 bg-[#d7a84f]/10 px-4 py-2 text-sm font-semibold text-[#f8d98a]">
            <Sparkles className="h-4 w-4" />
            {page.eyebrow}
          </div>
          <div className="grid gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:items-end">
            <div>
              <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-normal text-white sm:text-5xl lg:text-6xl">
                {page.title}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-white/72">
                {page.description}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  href="/espace-premium"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d7a84f] px-6 py-3 text-sm font-black text-black shadow-[0_18px_55px_rgba(215,168,79,0.25)] transition hover:-translate-y-0.5 hover:bg-[#f4ca68]"
                >
                  Espace Premium 6$/mois <ArrowRight className="h-4 w-4" />
                </Link>
                <WhatsAppLink
                  text={page.whatsappText}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-emerald-400/50 bg-emerald-500/12 px-6 py-3 text-sm font-bold text-emerald-100 transition hover:-translate-y-0.5 hover:bg-emerald-500/20"
                >
                  <MessageCircle className="h-4 w-4" /> Parler sur WhatsApp
                </WhatsAppLink>
                <Link
                  href="/#tarifs"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-bold text-white/85 transition hover:border-[#d7a84f]/60 hover:text-[#f8d98a]"
                >
                  Voir les offres CizaOnline
                </Link>
              </div>
            </div>
            <aside className="rounded-2xl border border-[#d7a84f]/25 bg-black/35 p-6 shadow-2xl shadow-black/30 backdrop-blur">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#f8d98a]">Points clés</p>
              <div className="mt-5 space-y-4">
                {page.keyPoints.map((point) => (
                  <div key={point} className="flex gap-3 text-sm leading-6 text-white/75">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#d7a84f]" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="px-5 py-14 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">
          {page.trustCards.map((card) => (
            <div key={card.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#d7a84f]/12 text-[#f8d98a]">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h2 className="text-xl font-black text-white">{card.title}</h2>
              <p className="mt-3 text-sm leading-7 text-white/68">{card.text}</p>
            </div>
          ))}
        </div>
      </section>

      <article className="px-5 pb-16 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div className="space-y-10">
            {page.sections.map((section) => (
              <section key={section.title} className="rounded-2xl border border-white/10 bg-[#0d0b0a] p-6 sm:p-8">
                <div className="mb-5 flex items-center gap-3 text-[#f8d98a]">
                  <BookOpenCheck className="h-5 w-5" />
                  <h2 className="text-2xl font-black text-white sm:text-3xl">{section.title}</h2>
                </div>
                <div className="space-y-5 text-base leading-8 text-white/74">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                {section.items ? (
                  <ul className="mt-6 grid gap-3 text-sm leading-6 text-white/72 sm:grid-cols-2">
                    {section.items.map((item) => (
                      <li key={item} className="flex gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#d7a84f]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>

          <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-[#d7a84f]/25 bg-[#120f0b] p-6">
              <h2 className="text-xl font-black text-white">Liens utiles CizaOnline</h2>
              <div className="mt-5 space-y-3">
                {page.internalLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="flex items-center justify-between rounded-xl border border-white/10 bg-black/25 px-4 py-3 text-sm font-bold text-white/78 transition hover:border-[#d7a84f]/50 hover:text-[#f8d98a]">
                    {link.label}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-emerald-400/25 bg-emerald-500/10 p-6">
              <h2 className="text-xl font-black text-white">Accompagnement personnalisé</h2>
              <p className="mt-3 text-sm leading-7 text-white/70">
                CizaOnline fournit un contenu éducatif et un accompagnement pratique. Ce contenu ne constitue pas un conseil financier personnalisé.
              </p>
              <WhatsAppLink
                text={page.whatsappText}
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-500 px-5 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-emerald-400"
              >
                <MessageCircle className="h-4 w-4" /> Contacter CizaOnline
              </WhatsAppLink>
            </div>
          </aside>
        </div>
      </article>

      <section className="border-y border-[#d7a84f]/20 bg-[#0b0908] px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex items-center gap-3 text-[#f8d98a]">
            <HelpCircle className="h-6 w-6" />
            <h2 className="text-3xl font-black text-white">FAQ</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {page.faqs.map((item) => (
              <div key={item.q} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                <h3 className="text-lg font-black text-white">{item.q}</h3>
                <p className="mt-3 text-sm leading-7 text-white/70">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
