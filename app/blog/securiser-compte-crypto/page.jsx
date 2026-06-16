import Link from "next/link";
import LeadCaptureForm from "../../components/LeadCaptureForm";

export const metadata = {
  title: "Securiser son compte crypto | CizaOnline",
  description: "Checklist de securite crypto: Binance, wallets, 2FA, seed phrase, mots de passe, WhatsApp, Telegram et erreurs a eviter pour les debutants.",
  alternates: { canonical: "/blog/securiser-compte-crypto" }
};

export default function SecuriserCompteCryptoArticle() {
  return (
    <main className="min-h-screen bg-ciza-black px-4 pb-20 pt-28 text-ciza-ivory sm:px-6 lg:px-8">
      <article className="mx-auto max-w-4xl">
        <Link href="/blog" className="text-sm font-black text-ciza-gold">Blog CizaOnline</Link>
        <h1 className="mt-6 font-display text-4xl font-black leading-tight text-white sm:text-5xl">Securiser son compte crypto</h1>
        <p className="mt-5 text-lg leading-8 text-white/70">La securite est la premiere competence crypto. Avant d'investir, protege tes comptes, tes mots de passe, tes appareils et tes wallets.</p>
        <div className="mt-10 space-y-8 leading-8 text-white/68">
          <section><h2 className="font-display text-2xl font-black text-white">Activer la double authentification</h2><p className="mt-3">Utilise une application 2FA fiable et conserve les codes de secours dans un endroit securise.</p></section>
          <section><h2 className="font-display text-2xl font-black text-white">Proteger la seed phrase</h2><p className="mt-3">Ne photographie jamais ta seed phrase, ne l'envoie jamais sur WhatsApp et ne la donne a aucun support client.</p></section>
          <section><h2 className="font-display text-2xl font-black text-white">Verifier les liens</h2><p className="mt-3">Les faux liens Binance, airdrops et supports Telegram sont frequents. Tape les adresses officielles ou utilise tes favoris.</p></section>
        </div>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row"><Link href="/formation-crypto-afrique-francophone" className="premium-button rounded-full px-6 py-3 text-center text-sm font-black text-black">Formation securite crypto</Link><a href="https://wa.me/243834783307?text=Bonjour%20CizaOnline%2C%20je%20veux%20securiser%20mon%20compte%20crypto." className="rounded-full border border-ciza-gold/25 px-6 py-3 text-center text-sm font-bold text-white">WhatsApp</a></div>
        <LeadCaptureForm source="blog/securiser-compte-crypto" title="Recevoir une checklist securite" className="mt-12" />
      </article>
    </main>
  );
}
