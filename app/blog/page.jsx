import Link from "next/link";
import { ArrowRight, MessageCircle, ShieldCheck, TrendingUp } from "lucide-react";
import BlogSearch from "../components/BlogSearch";
import LeadCaptureForm from "../components/LeadCaptureForm";
import { blogArticles, blogCategories, buildBlogSchema } from "../lib/blogContent";

const siteUrl = "https://cizaonline.com";
const whatsappUrl = "https://wa.me/243834783307?text=Bonjour%20CizaOnline%2C%20je%20veux%20recevoir%20les%20guides%20crypto%20RDC.";

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
  const blogSchema = buildBlogSchema();

  return (
    <main className="min-h-screen bg-ciza-black px-4 pb-20 pt-28 text-ciza-ivory sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <section className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,.72fr)] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-ciza-gold/25 bg-ciza-gold/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-ciza-gold">Blog Crypto RDC</p>
            <h1 className="mt-6 text-balance font-display text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">Guides crypto pour Kinshasa, Goma, Lubumbashi et l&apos;Afrique francophone.</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">Articles pedagogiques CizaOnline pour comprendre Binance, USDT, Mobile Money, securite wallet et investissement responsable sans promesse financiere.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="premium-button inline-flex min-h-[3.25rem] items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-black text-black"><MessageCircle className="h-4 w-4" />WhatsApp</a>
              <Link href="/#inscription" className="inline-flex min-h-[3.25rem] items-center justify-center gap-2 rounded-full border border-ciza-gold/25 bg-white/[0.055] px-6 py-3 text-sm font-bold text-white hover:bg-ciza-gold/10">Inscription CizaOnline<ArrowRight className="h-4 w-4 text-ciza-gold" /></Link>
            </div>
          </div>
          <LeadCaptureForm
            source="blog"
            title="Recevoir les guides premium"
            description="Laisse tes coordonnees pour recevoir les prochains guides CizaOnline et choisir le sujet qui t'interesse."
          />
        </div>
      </section>

      <BlogSearch articles={blogArticles} categories={blogCategories} />

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
