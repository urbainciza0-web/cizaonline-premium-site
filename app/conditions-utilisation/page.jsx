import Link from "next/link";
import { FileText, Mail, ShieldCheck } from "lucide-react";

const siteUrl = "https://cizaonline.com";
const contactEmail = "contact@cizaonline.com";

export const metadata = {
  title: "Conditions d'utilisation CizaOnline",
  description:
    "Conditions d'utilisation CizaOnline pour le contenu educatif crypto, les formations, WhatsApp, emails, inscriptions et limites de responsabilite.",
  alternates: { canonical: "/conditions-utilisation" },
  openGraph: {
    title: "Conditions d'utilisation CizaOnline",
    description:
      "Regles d'utilisation du site educatif crypto CizaOnline en RDC et Afrique francophone.",
    url: `${siteUrl}/conditions-utilisation`,
    siteName: "CizaOnline",
    locale: "fr_FR",
    type: "website"
  }
};

const sections = [
  {
    title: "1. Objet du site",
    text:
      "CizaOnline propose du contenu educatif crypto pour aider les utilisateurs d'Afrique francophone, notamment en RDC, a comprendre Binance, Bitcoin, USDT, Mobile Money, wallets, P2P et securite Web3."
  },
  {
    title: "2. Pas de conseil financier personnalise",
    text:
      "Les contenus CizaOnline sont pedagogiques et generaux. Ils ne constituent pas un conseil financier, fiscal, juridique ou investissement personnalise. Chaque utilisateur reste responsable de ses decisions."
  },
  {
    title: "3. Inscriptions et communications",
    text:
      "Les formulaires, liens WhatsApp et emails permettent de demander une information, une inscription, un rendez-vous ou un accompagnement. CizaOnline peut repondre via email, WhatsApp ou tout canal communique par l'utilisateur."
  },
  {
    title: "4. Usage responsable",
    text:
      "Chaque utilisateur doit fournir des informations exactes, ne pas perturber le site, ne pas copier abusivement les contenus et respecter les autres membres des espaces CizaOnline."
  },
  {
    title: "5. Cookies et statistiques",
    text:
      "Des cookies ou outils statistiques peuvent etre actives plus tard pour mesurer l'audience et ameliorer le service. Leur usage restera lie a la performance, la securite et l'amelioration de l'experience."
  },
  {
    title: "6. Contact",
    text:
      "Pour toute question sur ces conditions, contacte CizaOnline a contact@cizaonline.com."
  }
];

export default function ConditionsUtilisationPage() {
  return (
    <main className="min-h-screen bg-ciza-black px-4 pb-20 pt-28 text-ciza-ivory sm:px-6 lg:px-8">
      <section className="mx-auto max-w-5xl">
        <p className="inline-flex items-center gap-2 rounded-full border border-ciza-gold/25 bg-ciza-gold/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-ciza-gold">
          <FileText className="h-4 w-4" />
          Conditions
        </p>
        <h1 className="mt-6 max-w-4xl font-display text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
          Conditions d&apos;utilisation CizaOnline
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
          Ces conditions encadrent l&apos;utilisation de CizaOnline, site educatif crypto destine a l&apos;Afrique francophone et a la RDC.
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
          <h2 className="font-display text-2xl font-black text-white">Question sur les conditions ?</h2>
          <p className="mt-2 text-sm leading-6 text-white/60">Le contact officiel CizaOnline reste disponible par email.</p>
        </div>
        <a href={`mailto:${contactEmail}`} className="premium-button inline-flex min-h-[3.25rem] items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-black text-black">
          <Mail className="h-4 w-4" />
          {contactEmail}
        </a>
      </section>

      <nav className="mx-auto mt-8 flex max-w-5xl flex-col gap-3 sm:flex-row">
        <Link href="/politique-de-confidentialite" className="inline-flex min-h-[3rem] items-center justify-center rounded-full border border-ciza-gold/25 px-5 py-3 text-sm font-bold text-white hover:text-ciza-gold">
          Politique de confidentialite
        </Link>
        <Link href="/mentions-legales" className="inline-flex min-h-[3rem] items-center justify-center gap-2 rounded-full border border-ciza-gold/25 px-5 py-3 text-sm font-bold text-white hover:text-ciza-gold">
          <ShieldCheck className="h-4 w-4" />
          Mentions legales
        </Link>
      </nav>
    </main>
  );
}
