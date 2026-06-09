import Link from "next/link";
import { Mail, MessageCircle, ShieldCheck } from "lucide-react";

const siteUrl = "https://cizaonline.com";
const contactEmail = "contact@cizaonline.com";

export const metadata = {
  title: "Politique de confidentialite CizaOnline",
  description:
    "Politique de confidentialite CizaOnline: donnees de contact, formulaires, WhatsApp, emails, cookies et statistiques pour un site educatif crypto en Afrique francophone.",
  alternates: { canonical: "/politique-de-confidentialite" },
  openGraph: {
    title: "Politique de confidentialite CizaOnline",
    description:
      "Comment CizaOnline traite les donnees de contact dans un cadre educatif crypto en RDC et Afrique francophone.",
    url: `${siteUrl}/politique-de-confidentialite`,
    siteName: "CizaOnline",
    locale: "fr_FR",
    type: "website"
  }
};

const sections = [
  {
    title: "1. Donnees collectees",
    text:
      "CizaOnline peut collecter les informations transmises volontairement via les formulaires, WhatsApp, email ou messages directs: nom, adresse email, numero WhatsApp, ville, besoin de formation et contenu du message."
  },
  {
    title: "2. Utilisation des donnees",
    text:
      "Ces donnees servent a repondre aux demandes, organiser les inscriptions, planifier les rendez-vous, envoyer des informations educatives et ameliorer la qualite du service CizaOnline."
  },
  {
    title: "3. WhatsApp, emails et formulaires",
    text:
      "Les echanges via WhatsApp, email ou formulaires peuvent etre conserves pour assurer le suivi de la relation, confirmer une demande, traiter une question ou fournir un accompagnement educatif."
  },
  {
    title: "4. Cookies et statistiques",
    text:
      "CizaOnline peut utiliser plus tard des cookies ou outils statistiques pour comprendre la navigation, mesurer les pages consultees et ameliorer l'experience. Si ces outils sont actives, ils devront rester proportionnes a un usage educatif et analytique."
  },
  {
    title: "5. Education crypto, pas de conseil financier",
    text:
      "CizaOnline fournit du contenu educatif sur la crypto, Binance, USDT, wallets, P2P, securite et Web3. Le site ne fournit pas de conseil financier personnalise ni de promesse de rendement."
  },
  {
    title: "6. Contact et droits",
    text:
      "Pour demander une correction, une suppression ou une information sur tes donnees, contacte CizaOnline a contact@cizaonline.com."
  }
];

export default function PolitiqueConfidentialitePage() {
  return (
    <main className="min-h-screen bg-ciza-black px-4 pb-20 pt-28 text-ciza-ivory sm:px-6 lg:px-8">
      <section className="mx-auto max-w-5xl">
        <p className="inline-flex items-center gap-2 rounded-full border border-ciza-gold/25 bg-ciza-gold/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-ciza-gold">
          <ShieldCheck className="h-4 w-4" />
          Confidentialite
        </p>
        <h1 className="mt-6 max-w-4xl font-display text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
          Politique de confidentialite CizaOnline
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
          Cette page explique comment CizaOnline traite les donnees de contact dans le cadre de son activite educative crypto en RDC et en Afrique francophone.
        </p>
      </section>

      <section className="mx-auto mt-12 grid max-w-5xl gap-5">
        {sections.map((section) => (
          <article key={section.title} className="rounded-[1.5rem] border border-ciza-gold/18 bg-ciza-graphite p-6 shadow-panel">
            <h2 className="font-display text-2xl font-black text-white">{section.title}</h2>
            <p className="mt-4 text-sm leading-7 text-white/68 sm:text-base">{section.text}</p>
          </article>
        ))}
      </section>

      <section className="mx-auto mt-12 flex max-w-5xl flex-col gap-3 rounded-[1.5rem] border border-ciza-gold/20 bg-white/[0.035] p-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="font-display text-2xl font-black text-white">Contact officiel</h2>
          <p className="mt-2 text-sm leading-6 text-white/60">Pour toute question juridique ou confidentialite.</p>
        </div>
        <a href={`mailto:${contactEmail}`} className="premium-button inline-flex min-h-[3.25rem] items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-black text-black">
          <Mail className="h-4 w-4" />
          {contactEmail}
        </a>
      </section>

      <nav className="mx-auto mt-8 flex max-w-5xl flex-col gap-3 sm:flex-row">
        <Link href="/conditions-utilisation" className="inline-flex min-h-[3rem] items-center justify-center rounded-full border border-ciza-gold/25 px-5 py-3 text-sm font-bold text-white hover:text-ciza-gold">
          Conditions d&apos;utilisation
        </Link>
        <Link href="/mentions-legales" className="inline-flex min-h-[3rem] items-center justify-center rounded-full border border-ciza-gold/25 px-5 py-3 text-sm font-bold text-white hover:text-ciza-gold">
          Mentions legales
        </Link>
        <a href="https://wa.me/243834783307" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[3rem] items-center justify-center gap-2 rounded-full border border-ciza-gold/25 px-5 py-3 text-sm font-bold text-white hover:text-ciza-gold">
          <MessageCircle className="h-4 w-4" />
          WhatsApp
        </a>
      </nav>
    </main>
  );
}
