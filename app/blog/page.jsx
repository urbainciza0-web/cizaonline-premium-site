import Link from "next/link";
import { ArrowRight, Mail, MessageCircle, ShieldCheck, TrendingUp } from "lucide-react";

const siteUrl = "https://cizaonline.com";
const whatsappUrl = "https://wa.me/243834783307?text=Bonjour%20CizaOnline%2C%20je%20veux%20recevoir%20les%20guides%20crypto%20RDC.";

const articles = [
  {
    title: "Comment debuter avec Binance en RDC",
    href: "/blog/debuter-binance-rdc",
    description: "Compte, securite, verification, P2P et premiers reflexes pour les debutants a Kinshasa, Goma et Lubumbashi.",
    tag: "Binance RDC"
  },
  {
    title: "Acheter USDT avec Mobile Money",
    href: "/blog/acheter-usdt-mobile-money",
    description: "Guide educatif pour comprendre USDT, reseaux, vendeurs P2P, preuves Mobile Money et erreurs a eviter.",
    tag: "USDT"
  },
  {
    title: "Securiser son compte crypto",
    href: "/blog/securiser-compte-crypto",
    description: "Checklist simple pour proteger Binance, wallets, mots de passe, 2FA, seed phrase et comptes WhatsApp/Telegram.",
    tag: "Securite"
  }
];

export const metadata = {
  title: "Blog Crypto RDC | Guides CizaOnline",
  description: "Guides crypto CizaOnline pour debuter avec Binance en RDC, acheter USDT avec Mobile Money et securiser ses comptes crypto en Afrique francophone.",
  keywords: ["blog crypto RDC", "guides Binance RDC", "USDT Mobile Money", "securite crypto", "CizaOnline blog"],
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog Crypto RDC CizaOnline",
    description: "Guides pratiques pour Kinshasa, Goma, Lubumbashi et l'Afrique francophone.",
    url: `${siteUrl}/blog`,
    siteName: "CizaOnline",
    locale: "fr_FR",
    type: "website"
  }
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-ciza-black px-4 pb-20 pt-28 text-ciza-ivory sm:px-6 lg:px-8">
      <section className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,.72fr)] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-ciza-gold/25 bg-ciza-gold/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-ciza-gold">Blog Crypto RDC</p>
            <h1 className="mt-6 text-balance font-display text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">Guides crypto pour Kinshasa, Goma, Lubumbashi et l'Afrique francophone.</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">Articles pedagogiques CizaOnline pour comprendre Binance, USDT, Mobile Money, securite wallet et investissement responsable sans promesse financiere.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="premium-button inline-flex min-h-[3.25rem] items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-black text-black"><MessageCircle className="h-4 w-4" />WhatsApp</a>
              <Link href="/#inscription" className="inline-flex min-h-[3.25rem] items-center justify-center gap-2 rounded-full border border-ciza-gold/25 bg-white/[0.055] px-6 py-3 text-sm font-bold text-white hover:bg-ciza-gold/10">Inscription CizaOnline<ArrowRight className="h-4 w-4 text-ciza-gold" /></Link>
            </div>
          </div>
          <form action="mailto:contact@cizaonline.com" method="post" encType="text/plain" className="gold-border glass rounded-[1.5rem] p-5 shadow-gold sm:rounded-[2rem] sm:p-7">
            <Mail className="h-8 w-8 text-ciza-gold" />
            <h2 className="mt-4 font-display text-2xl font-black text-white">Recevoir les guides premium</h2>
            <p className="mt-3 text-sm leading-7 text-white/62">Laisse tes coordonnees pour recevoir les prochains guides CizaOnline.</p>
            <div className="mt-6 grid gap-3">
              <input name="nom" required placeholder="Nom" className="min-h-12 rounded-2xl border border-white/10 bg-black/40 px-4 text-white outline-none focus:border-ciza-gold" />
              <input name="email" type="email" required placeholder="Email" className="min-h-12 rounded-2xl border border-white/10 bg-black/40 px-4 text-white outline-none focus:border-ciza-gold" />
              <input name="whatsapp" required placeholder="WhatsApp" className="min-h-12 rounded-2xl border border-white/10 bg-black/40 px-4 text-white outline-none focus:border-ciza-gold" />
              <button type="submit" className="premium-button min-h-12 rounded-full px-5 text-sm font-black text-black">Envoyer</button>
            </div>
          </form>
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-7xl">
        <div className="grid gap-5 md:grid-cols-3">
          {articles.map((article) => (
            <article key={article.href} className="rounded-[1.25rem] border border-ciza-gold/16 bg-ciza-graphite p-5 shadow-panel">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-ciza-gold">{article.tag}</p>
              <h2 className="mt-4 font-display text-2xl font-black leading-tight text-white">{article.title}</h2>
              <p className="mt-4 text-sm leading-7 text-white/64">{article.description}</p>
              <Link href={article.href} className="mt-6 inline-flex items-center gap-2 text-sm font-black text-ciza-gold">Lire le guide <ArrowRight className="h-4 w-4" /></Link>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-16 grid max-w-7xl gap-5 lg:grid-cols-2">
        <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-6">
          <TrendingUp className="h-8 w-8 text-ciza-gold" />
          <h2 className="mt-4 font-display text-3xl font-black text-white">Ciza Market Pulse</h2>
          <p className="mt-4 leading-8 text-white/64">Section educative statique: les donnees affichees sur CizaOnline servent a apprendre la lecture de marche et ne remplacent pas les prix en direct ni un conseil financier.</p>
          <Link href="/actualites-bitcoin" className="mt-6 inline-flex items-center gap-2 text-sm font-black text-ciza-gold">Voir les actualites Bitcoin <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-6">
          <ShieldCheck className="h-8 w-8 text-ciza-gold" />
          <h2 className="mt-4 font-display text-3xl font-black text-white">Maillage interne utile</h2>
          <div className="mt-5 grid gap-3 text-sm font-bold text-white/68">
            <Link href="/acheter-bitcoin-rdc" className="hover:text-ciza-gold">Acheter Bitcoin en RDC</Link>
            <Link href="/acheter-usdt-mobile-money" className="hover:text-ciza-gold">Acheter USDT avec Mobile Money</Link>
            <Link href="/guide-binance-rdc" className="hover:text-ciza-gold">Guide Binance RDC</Link>
            <Link href="/formation-crypto-afrique-francophone" className="hover:text-ciza-gold">Formation Crypto Afrique Francophone</Link>
            <Link href="/faq-cizaonline" className="hover:text-ciza-gold">FAQ CizaOnline</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
