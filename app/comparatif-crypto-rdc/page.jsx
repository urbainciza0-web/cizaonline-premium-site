import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

const siteUrl = "https://cizaonline.com";

export const metadata = {
  title: "Comparatif crypto RDC | Binance, P2P, Mobile Money",
  description: "Comparatif educatif CizaOnline: Binance, autres plateformes, P2P et Mobile Money pour comprendre avantages, limites, risques et usages en RDC.",
  keywords: ["comparatif crypto RDC", "Binance vs P2P", "Mobile Money crypto", "plateformes crypto RDC", "CizaOnline comparatif"],
  alternates: { canonical: "/comparatif-crypto-rdc" },
  openGraph: { title: "Comparatif crypto RDC", description: "Comparer Binance, autres plateformes, P2P et Mobile Money de facon neutre et pedagogique.", url: `${siteUrl}/comparatif-crypto-rdc`, siteName: "CizaOnline", locale: "fr_FR", type: "article" }
};

const rows = [
  ["Binance", "Large choix crypto, P2P, ressources educatives", "Verification, securite compte, fonctionnalites variables", "Apprendre USDT, Bitcoin, P2P et conversions"],
  ["Autres plateformes", "Alternatives possibles selon pays, frais et interfaces", "Liquidite, support, reputation et retraits a verifier", "Comparer avant de deposer des fonds"],
  ["P2P", "Achat/vente entre utilisateurs avec modes locaux", "Risque vendeur, litiges, preuves de paiement", "Petites transactions, vendeurs verifies"],
  ["Mobile Money", "Paiement local pratique et rapide", "Ne remplace pas la verification crypto et reseau", "Paiement P2P, formation, validation locale"]
];

export default function ComparatifCryptoRdcPage() {
  return (
    <main className="min-h-screen bg-ciza-black px-4 pb-20 pt-28 text-ciza-ivory sm:px-6 lg:px-8">
      <section className="mx-auto max-w-7xl">
        <p className="inline-flex rounded-full border border-ciza-gold/25 bg-ciza-gold/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-ciza-gold">Comparatif educatif</p>
        <h1 className="mt-6 max-w-4xl font-display text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">Binance, autres plateformes, P2P et Mobile Money en RDC.</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">Comparaison neutre pour apprendre les usages, limites et risques. CizaOnline ne promet aucun gain et recommande de commencer par la formation et la securite.</p>
      </section>
      <section className="mx-auto mt-12 max-w-7xl overflow-x-auto rounded-[1.5rem] border border-ciza-gold/18 bg-white/[0.035] p-3 shadow-panel">
        <table className="w-full min-w-[760px] border-separate border-spacing-0 text-left text-sm">
          <thead className="text-ciza-gold"><tr><th className="p-4">Option</th><th className="p-4">Points forts</th><th className="p-4">Points a verifier</th><th className="p-4">Usage pedagogique</th></tr></thead>
          <tbody className="text-white/68">
            {rows.map(([name, pros, checks, use]) => (
              <tr key={name} className="border-t border-white/10"><td className="p-4 font-black text-white">{name}</td><td className="p-4 leading-7">{pros}</td><td className="p-4 leading-7">{checks}</td><td className="p-4 leading-7">{use}</td></tr>
            ))}
          </tbody>
        </table>
      </section>
      <section className="mx-auto mt-12 grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Link href="/guide-binance-rdc" className="rounded-[1.25rem] border border-white/10 bg-ciza-graphite p-5 font-bold text-white/70 hover:text-ciza-gold">Guide Binance RDC</Link>
        <Link href="/acheter-usdt-mobile-money" className="rounded-[1.25rem] border border-white/10 bg-ciza-graphite p-5 font-bold text-white/70 hover:text-ciza-gold">USDT Mobile Money</Link>
        <Link href="/acheter-bitcoin-rdc" className="rounded-[1.25rem] border border-white/10 bg-ciza-graphite p-5 font-bold text-white/70 hover:text-ciza-gold">Acheter Bitcoin RDC</Link>
        <Link href="/blog" className="rounded-[1.25rem] border border-white/10 bg-ciza-graphite p-5 font-bold text-white/70 hover:text-ciza-gold">Blog Crypto RDC</Link>
      </section>
      <section className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 rounded-[1.5rem] border border-ciza-gold/20 bg-white/[0.035] p-6 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="font-display text-2xl font-black text-white">Besoin d'une orientation avant de choisir ?</h2>
        <a href="https://wa.me/243834783307?text=Bonjour%20CizaOnline%2C%20je%20veux%20comparer%20Binance%2C%20P2P%20et%20Mobile%20Money." target="_blank" rel="noopener noreferrer" className="premium-button inline-flex min-h-[3.25rem] items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-black text-black"><MessageCircle className="h-4 w-4" />WhatsApp<ArrowRight className="h-4 w-4" /></a>
      </section>
    </main>
  );
}
