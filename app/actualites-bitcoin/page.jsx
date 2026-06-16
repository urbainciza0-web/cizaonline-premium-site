import Link from "next/link";
import { ArrowRight, BarChart3, MessageCircle, TrendingUp } from "lucide-react";

const siteUrl = "https://cizaonline.com";

export const metadata = {
  title: "Actualites Bitcoin RDC | Ciza Market Pulse",
  description: "Ciza Market Pulse: section educative statique sur Bitcoin, USDT, marche crypto, risque et veille pour la RDC et l'Afrique francophone.",
  keywords: ["actualites Bitcoin RDC", "Ciza Market Pulse", "Bitcoin Kinshasa", "crypto RDC", "veille Bitcoin Afrique"],
  alternates: { canonical: "/actualites-bitcoin" },
  openGraph: { title: "Actualites Bitcoin RDC", description: "Veille educative Bitcoin et crypto par CizaOnline.", url: `${siteUrl}/actualites-bitcoin`, siteName: "CizaOnline", locale: "fr_FR", type: "website" }
};

const pulseItems = [
  { label: "BTC", value: "Lecture tendance", note: "Observer support, resistance, volatilite et horizon long terme." },
  { label: "USDT", value: "Stablecoin", note: "Comprendre son role pour P2P, transfert et protection contre la volatilite." },
  { label: "RDC", value: "Usage local", note: "Mobile Money, P2P, formation et securite restent les bases." }
];

export default function ActualitesBitcoinPage() {
  return (
    <main className="min-h-screen bg-ciza-black px-4 pb-20 pt-28 text-ciza-ivory sm:px-6 lg:px-8">
      <section className="mx-auto max-w-7xl">
        <p className="inline-flex rounded-full border border-ciza-gold/25 bg-ciza-gold/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-ciza-gold">Ciza Market Pulse</p>
        <h1 className="mt-6 max-w-4xl font-display text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">Actualites Bitcoin educatives pour la RDC et l'Afrique francophone.</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">Cette section ne fournit pas de prix en direct. Les donnees sont educatives et servent a apprendre comment lire un marche sans promesse financiere.</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a href="https://wa.me/243834783307?text=Bonjour%20CizaOnline%2C%20je%20veux%20comprendre%20les%20actualites%20Bitcoin." target="_blank" rel="noopener noreferrer" className="premium-button inline-flex min-h-[3.25rem] items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-black text-black"><MessageCircle className="h-4 w-4" />WhatsApp</a>
          <Link href="/formation-crypto-afrique-francophone" className="inline-flex min-h-[3.25rem] items-center justify-center gap-2 rounded-full border border-ciza-gold/25 bg-white/[0.055] px-6 py-3 text-sm font-bold text-white">Formation crypto<ArrowRight className="h-4 w-4 text-ciza-gold" /></Link>
        </div>
      </section>
      <section className="mx-auto mt-14 grid max-w-7xl gap-5 md:grid-cols-3">
        {pulseItems.map((item) => (
          <article key={item.label} className="rounded-[1.25rem] border border-ciza-gold/16 bg-ciza-graphite p-5 shadow-panel">
            <BarChart3 className="h-8 w-8 text-ciza-gold" />
            <p className="mt-4 text-xs font-black uppercase tracking-[0.18em] text-ciza-gold">{item.label}</p>
            <h2 className="mt-2 font-display text-2xl font-black text-white">{item.value}</h2>
            <p className="mt-3 text-sm leading-7 text-white/64">{item.note}</p>
          </article>
        ))}
      </section>
      <section className="mx-auto mt-14 max-w-7xl rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-6 shadow-panel">
        <TrendingUp className="h-8 w-8 text-ciza-gold" />
        <h2 className="mt-4 font-display text-3xl font-black text-white">Comment utiliser cette veille</h2>
        <p className="mt-4 max-w-4xl leading-8 text-white/64">Regarde d'abord le contexte, puis les risques, puis seulement l'action possible. CizaOnline recommande de separer education, investissement, reserve d'urgence et speculation.</p>
        <div className="mt-6 grid gap-3 text-sm font-bold text-white/64 sm:grid-cols-2 lg:grid-cols-4">
          <Link href="/acheter-bitcoin-rdc" className="hover:text-ciza-gold">Acheter Bitcoin en RDC</Link>
          <Link href="/acheter-usdt-mobile-money" className="hover:text-ciza-gold">Acheter USDT Mobile Money</Link>
          <Link href="/guide-binance-rdc" className="hover:text-ciza-gold">Guide Binance RDC</Link>
          <Link href="/blog" className="hover:text-ciza-gold">Blog Crypto RDC</Link>
        </div>
      </section>
    </main>
  );
}
