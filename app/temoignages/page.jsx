import Link from "next/link";
import { MessageCircle, Play, Star } from "lucide-react";

const siteUrl = "https://cizaonline.com";

export const metadata = {
  title: "Temoignages CizaOnline | Avis formation crypto RDC",
  description: "Temoignages clients CizaOnline avec emplacements videos YouTube et shorts pour renforcer la confiance autour de la formation crypto en RDC et Afrique francophone.",
  keywords: ["temoignages CizaOnline", "avis formation crypto RDC", "CizaOnline Kinshasa", "formation crypto avis"],
  alternates: { canonical: "/temoignages" },
  openGraph: { title: "Temoignages CizaOnline", description: "Avis et retours d'apprenants crypto CizaOnline.", url: `${siteUrl}/temoignages`, siteName: "CizaOnline", locale: "fr_FR", type: "website" }
};

const testimonials = [
  ["Patrick M.", "Kinshasa", "J'ai compris comment securiser mon compte et commencer Binance avec plus de calme."],
  ["Merveille A.", "Lubumbashi", "La methode m'a aidee a eviter les achats impulsifs et a proteger mon capital."],
  ["Junior B.", "Goma", "Les explications sur USDT, wallet et P2P sont simples et directement utiles."],
  ["Ariane N.", "Afrique francophone", "CizaOnline donne un cadre clair pour apprendre sans pression ni promesse rapide."]
];

export default function TemoignagesPage() {
  return (
    <main className="min-h-screen bg-ciza-black px-4 pb-20 pt-28 text-ciza-ivory sm:px-6 lg:px-8">
      <section className="mx-auto max-w-7xl">
        <p className="inline-flex rounded-full border border-ciza-gold/25 bg-ciza-gold/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-ciza-gold">Preuve sociale</p>
        <h1 className="mt-6 max-w-4xl font-display text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">Temoignages CizaOnline et retours d'apprenants crypto.</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">Une section premium noir/or pour regrouper avis clients, videos YouTube, shorts et preuves de confiance sans promesse financiere.</p>
      </section>
      <section className="mx-auto mt-14 grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-4">
        {testimonials.map(([name, city, text]) => (
          <article key={name} className="rounded-[1.25rem] border border-ciza-gold/16 bg-ciza-graphite p-5 shadow-panel">
            <Star className="h-6 w-6 text-ciza-gold" />
            <p className="mt-5 text-sm leading-7 text-white/72">"{text}"</p>
            <p className="mt-5 font-display text-lg font-black text-white">{name}</p>
            <p className="text-sm text-white/46">{city}</p>
          </article>
        ))}
      </section>
      <section className="mx-auto mt-14 grid max-w-7xl gap-5 lg:grid-cols-3">
        {["Video YouTube principale", "Short video Kinshasa", "Short video Goma / Lubumbashi"].map((label) => (
          <div key={label} className="grid min-h-64 place-items-center rounded-[1.5rem] border border-ciza-gold/18 bg-[radial-gradient(circle_at_50%_18%,rgba(244,197,66,.16),transparent_18rem),#0f1013] p-6 text-center shadow-panel">
            <div>
              <span className="mx-auto grid h-16 w-16 place-items-center rounded-full border border-ciza-gold/30 bg-ciza-gold/10 text-ciza-gold"><Play className="h-8 w-8" /></span>
              <h2 className="mt-5 font-display text-2xl font-black text-white">{label}</h2>
              <p className="mt-3 text-sm leading-7 text-white/56">Emplacement prevu pour embed YouTube, temoignage court ou video verticale.</p>
            </div>
          </div>
        ))}
      </section>
      <section className="mx-auto mt-14 flex max-w-7xl flex-col gap-3 rounded-[1.5rem] border border-ciza-gold/20 bg-white/[0.035] p-6 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="font-display text-2xl font-black text-white">Tu veux rejoindre les prochains apprenants ?</h2>
        <div className="flex flex-col gap-3 sm:flex-row"><a href="https://wa.me/243834783307?text=Bonjour%20CizaOnline%2C%20je%20veux%20rejoindre%20la%20formation%20crypto." target="_blank" rel="noopener noreferrer" className="premium-button inline-flex min-h-[3.25rem] items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-black text-black"><MessageCircle className="h-4 w-4" />WhatsApp</a><Link href="/espace-premium" className="inline-flex min-h-[3.25rem] items-center justify-center rounded-full border border-ciza-gold/25 px-6 py-3 text-sm font-bold text-white">Espace Premium 6$/mois</Link></div>
      </section>
    </main>
  );
}
