import Link from "next/link";
import { CheckCircle2, MessageCircle, Star } from "lucide-react";

const siteUrl = "https://cizaonline.com";
const paymentUrl = "https://www.binance.com/referral/earn-together/refer2earn-usdc/claim?hl=fr&ref=GRO_28502_48A90&utm_source=referral_entrance";
const whatsappUrl = "https://wa.me/243834783307?text=Bonjour%20CizaOnline%2C%20je%20veux%20rejoindre%20l%27Espace%20Premium%206%24%2Fmois.";

export const metadata = {
  title: "Espace Premium 6$/mois | CizaOnline",
  description: "Rejoins l'Espace Premium CizaOnline 6$/mois: guides crypto, communaute, veille educative, support WhatsApp et parcours Binance/USDT pour l'Afrique francophone.",
  keywords: ["CizaOnline premium", "espace premium crypto", "formation crypto 6 dollars", "crypto Afrique francophone"],
  alternates: { canonical: "/espace-premium" },
  openGraph: { title: "Espace Premium CizaOnline 6$/mois", description: "Acces premium educatif crypto pour debutants et investisseurs responsables.", url: `${siteUrl}/espace-premium`, siteName: "CizaOnline", locale: "fr_FR", type: "website" }
};

const benefits = ["Guides Binance, USDT, Bitcoin et wallet", "Support WhatsApp pour orientation", "Ciza Market Pulse educatif", "Checklists securite et Mobile Money", "Maillage vers formations et rendez-vous"];

export default function EspacePremiumPage() {
  return (
    <main className="min-h-screen bg-ciza-black px-4 pb-20 pt-28 text-ciza-ivory sm:px-6 lg:px-8">
      <section className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,.72fr)] lg:items-center">
        <div>
          <p className="inline-flex rounded-full border border-ciza-gold/25 bg-ciza-gold/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-ciza-gold">Espace Premium</p>
          <h1 className="mt-6 font-display text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">Espace Premium CizaOnline a 6$/mois.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">Un espace educatif pour apprendre la crypto avec methode: Binance, USDT, Bitcoin, Mobile Money, securite wallet et discipline de risque.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={paymentUrl} target="_blank" rel="noopener noreferrer" className="premium-button inline-flex min-h-[3.25rem] items-center justify-center rounded-full px-6 py-3 text-sm font-black text-black">Rejoindre pour 6$/mois</a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[3.25rem] items-center justify-center gap-2 rounded-full border border-ciza-gold/25 bg-white/[0.055] px-6 py-3 text-sm font-bold text-white"><MessageCircle className="h-4 w-4 text-ciza-gold" />WhatsApp</a>
          </div>
        </div>
        <aside className="gold-border glass rounded-[1.5rem] p-6 shadow-gold sm:rounded-[2rem]">
          <Star className="h-9 w-9 text-ciza-gold" />
          <p className="mt-4 font-display text-5xl font-black text-white">6$<span className="text-lg text-white/46">/mois</span></p>
          <p className="mt-4 leading-7 text-white/64">Sans systeme de paiement complexe pour l'instant: l'acces se confirme via le lien existant ou WhatsApp.</p>
        </aside>
      </section>
      <section className="mx-auto mt-14 grid max-w-7xl gap-4 md:grid-cols-2 lg:grid-cols-3">
        {benefits.map((benefit) => (
          <div key={benefit} className="flex gap-3 rounded-[1.25rem] border border-white/10 bg-white/[0.035] p-5"><CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-ciza-gold" /><p className="leading-7 text-white/68">{benefit}</p></div>
        ))}
      </section>
      <section className="mx-auto mt-14 max-w-7xl rounded-[1.5rem] border border-ciza-gold/20 bg-white/[0.035] p-6">
        <h2 className="font-display text-3xl font-black text-white">Continuer l'apprentissage</h2>
        <div className="mt-6 grid gap-3 text-sm font-bold text-white/64 sm:grid-cols-2 lg:grid-cols-4">
          <Link href="/blog" className="hover:text-ciza-gold">Blog Crypto RDC</Link>
          <Link href="/actualites-bitcoin" className="hover:text-ciza-gold">Actualites Bitcoin</Link>
          <Link href="/comparatif-crypto-rdc" className="hover:text-ciza-gold">Comparatif crypto RDC</Link>
          <Link href="/faq-cizaonline" className="hover:text-ciza-gold">FAQ CizaOnline</Link>
        </div>
      </section>
    </main>
  );
}
