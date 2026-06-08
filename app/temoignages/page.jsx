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

const videos = [
  {
    title: "Video YouTube principale",
    location: "CizaOnline",
    description: "Retour video principal sur l'accompagnement crypto CizaOnline.",
    href: "https://youtu.be/ZUWc_ZYOkBo?si=UT-zUHqs7DmAqvDG"
  },
  {
    title: "Short video Kinshasa",
    location: "Kinshasa",
    description: "Format court pour decouvrir l'experience CizaOnline a Kinshasa.",
    href: "https://youtube.com/shorts/BO3deHAg8SU?si=8Oyw3BbjRZAeET7Z"
  },
  {
    title: "Short video Goma / Lubumbashi",
    location: "Goma et Lubumbashi",
    description: "Temoignage court pour les apprenants de l'Est et du Sud de la RDC.",
    href: "https://youtu.be/JqrRMI7EHw4?si=IcKIdhupXRyhqfzW"
  }
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
        {videos.map((video) => (
          <a
            key={video.title}
            href={video.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Voir la video ${video.title}`}
            className="group grid min-h-64 place-items-center rounded-[1.5rem] border border-ciza-gold/18 bg-[radial-gradient(circle_at_50%_18%,rgba(244,197,66,.16),transparent_18rem),#0f1013] p-6 text-center shadow-panel transition duration-300 hover:-translate-y-1 hover:border-ciza-gold/45 hover:shadow-[0_24px_70px_rgba(0,0,0,.42)] focus:outline-none focus:ring-2 focus:ring-ciza-gold/70 focus:ring-offset-2 focus:ring-offset-ciza-black"
          >
            <div className="flex h-full w-full flex-col items-center justify-center">
              <span className="relative mx-auto grid h-16 w-16 place-items-center rounded-full border border-ciza-gold/30 bg-ciza-gold/10 text-ciza-gold transition duration-300 group-hover:scale-105 group-hover:bg-ciza-gold group-hover:text-black">
                <span className="absolute -right-1 -top-1 rounded-full bg-[#FF0000] px-2 py-0.5 text-[0.6rem] font-black uppercase tracking-[0.12em] text-white">YT</span>
                <Play className="h-8 w-8 fill-current" />
              </span>
              <p className="mt-5 text-xs font-black uppercase tracking-[0.18em] text-ciza-gold/80">{video.location}</p>
              <h2 className="mt-3 font-display text-2xl font-black text-white">{video.title}</h2>
              <p className="mt-3 max-w-sm text-sm leading-7 text-white/60">{video.description}</p>
              <span className="mt-6 inline-flex min-h-[2.75rem] items-center justify-center gap-2 rounded-full border border-ciza-gold/35 px-5 py-3 text-sm font-black text-ciza-gold transition duration-300 group-hover:border-ciza-gold group-hover:bg-ciza-gold group-hover:text-black">
                <Play className="h-4 w-4 fill-current" />
                Voir la vid&eacute;o
              </span>
            </div>
          </a>
        ))}
      </section>
      <section className="mx-auto mt-14 flex max-w-7xl flex-col gap-3 rounded-[1.5rem] border border-ciza-gold/20 bg-white/[0.035] p-6 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="font-display text-2xl font-black text-white">Tu veux rejoindre les prochains apprenants ?</h2>
        <div className="flex flex-col gap-3 sm:flex-row"><a href="https://wa.me/243834783307?text=Bonjour%20CizaOnline%2C%20je%20veux%20rejoindre%20la%20formation%20crypto." target="_blank" rel="noopener noreferrer" className="premium-button inline-flex min-h-[3.25rem] items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-black text-black"><MessageCircle className="h-4 w-4" />WhatsApp</a><Link href="/espace-premium" className="inline-flex min-h-[3.25rem] items-center justify-center rounded-full border border-ciza-gold/25 px-6 py-3 text-sm font-bold text-white">Espace Premium 6$/mois</Link></div>
      </section>
    </main>
  );
}
