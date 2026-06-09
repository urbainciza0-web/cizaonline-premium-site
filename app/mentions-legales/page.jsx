import Link from "next/link";
import { Building2, Mail, ShieldCheck } from "lucide-react";

const siteUrl = "https://cizaonline.com";
const contactEmail = "contact@cizaonline.com";

export const metadata = {
  title: "Mentions legales CizaOnline",
  description:
    "Mentions legales CizaOnline: informations editeur, contact, responsabilite educative crypto, donnees, cookies et statistiques.",
  alternates: { canonical: "/mentions-legales" },
  openGraph: {
    title: "Mentions legales CizaOnline",
    description:
      "Informations legales du site educatif crypto CizaOnline pour la RDC et l'Afrique francophone.",
    url: `${siteUrl}/mentions-legales`,
    siteName: "CizaOnline",
    locale: "fr_FR",
    type: "website"
  }
};

const sections = [
  {
    title: "1. Editeur du site",
    text:
      "Le site CizaOnline est une plateforme educative crypto orientee Afrique francophone, avec un focus sur la RDC, Kinshasa, Goma et Lubumbashi. Contact officiel: contact@cizaonline.com."
  },
  {
    title: "2. Activite de CizaOnline",
    text:
      "CizaOnline publie des contenus pedagogiques sur la crypto, Binance, USDT, Mobile Money, P2P, wallets, securite et Web3. Ces contenus visent l'information et la formation."
  },
  {
    title: "3. Limite de responsabilite",
    text:
      "CizaOnline ne fournit pas de conseil financier personnalise et ne promet aucun rendement. Les marches crypto comportent des risques. Chaque utilisateur doit verifier les informations et prendre ses propres decisions."
  },
  {
    title: "4. Donnees et communications",
    text:
      "Les formulaires, messages WhatsApp, emails et donnees de contact peuvent etre utilises pour repondre aux demandes, organiser les formations et assurer le suivi client."
  },
  {
    title: "5. Cookies et mesures statistiques",
    text:
      "Le site peut utiliser plus tard des cookies, mesures d'audience ou outils statistiques si ces fonctionnalites sont activees pour ameliorer la navigation et comprendre l'utilisation des pages."
  },
  {
    title: "6. Contact",
    text:
      "Toute demande relative aux mentions legales, a la confidentialite ou aux contenus du site peut etre envoyee a contact@cizaonline.com."
  }
];

export default function MentionsLegalesPage() {
  return (
    <main className="min-h-screen bg-ciza-black px-4 pb-20 pt-28 text-ciza-ivory sm:px-6 lg:px-8">
      <section className="mx-auto max-w-5xl">
        <p className="inline-flex items-center gap-2 rounded-full border border-ciza-gold/25 bg-ciza-gold/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-ciza-gold">
          <Building2 className="h-4 w-4" />
          Mentions legales
        </p>
        <h1 className="mt-6 max-w-4xl font-display text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
          Mentions legales CizaOnline
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
          Informations legales relatives au site CizaOnline, a son contenu educatif crypto et a ses canaux de contact.
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
          <h2 className="font-display text-2xl font-black text-white">Contact juridique</h2>
          <p className="mt-2 text-sm leading-6 text-white/60">Utilise l&apos;adresse officielle pour toute demande.</p>
        </div>
        <a href={`mailto:${contactEmail}`} className="premium-button inline-flex min-h-[3.25rem] items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-black text-black">
          <Mail className="h-4 w-4" />
          {contactEmail}
        </a>
      </section>

      <nav className="mx-auto mt-8 flex max-w-5xl flex-col gap-3 sm:flex-row">
        <Link href="/politique-de-confidentialite" className="inline-flex min-h-[3rem] items-center justify-center gap-2 rounded-full border border-ciza-gold/25 px-5 py-3 text-sm font-bold text-white hover:text-ciza-gold">
          <ShieldCheck className="h-4 w-4" />
          Politique de confidentialite
        </Link>
        <Link href="/conditions-utilisation" className="inline-flex min-h-[3rem] items-center justify-center rounded-full border border-ciza-gold/25 px-5 py-3 text-sm font-bold text-white hover:text-ciza-gold">
          Conditions d&apos;utilisation
        </Link>
      </nav>
    </main>
  );
}
