import Link from "next/link";
import { ArrowRight, Mail, MessageCircle, PhoneCall } from "lucide-react";
import LeadCaptureForm from "../components/LeadCaptureForm";

const whatsappUrl = "https://wa.me/243834783307?text=Bonjour%20CizaOnline%2C%20je%20veux%20des%20informations%20sur%20la%20formation%20crypto.";
const emailUrl = "mailto:contact@cizaonline.com";
const contactPhone = "+243834783307";
const contactEmail = "contact@cizaonline.com";

export const metadata = {
  title: "Contact CizaOnline | Formation crypto RDC",
  description: "Contactez CizaOnline pour une formation crypto, un accompagnement Binance, un abonnement premium ou une demande liee a la crypto en Afrique francophone.",
  alternates: { canonical: "/contact" }
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-ciza-black px-4 pb-24 pt-28 text-ciza-ivory sm:px-6 lg:px-8">
      <section className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[minmax(0,.9fr)_minmax(0,1.1fr)] lg:items-center">
        <div>
          <p className="inline-flex rounded-full border border-ciza-gold/25 bg-ciza-gold/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-ciza-gold">Contact CizaOnline</p>
          <h1 className="mt-6 font-display text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
            Parler avec CizaOnline
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
            Une question sur la formation crypto, Binance, le P2P, l&apos;abonnement premium ou un accompagnement ? Laisse tes coordonnees ou utilise WhatsApp.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="premium-button inline-flex min-h-[3.25rem] items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-black text-black">
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
            <Link href="/blog" className="inline-flex min-h-[3.25rem] items-center justify-center gap-2 rounded-full border border-ciza-gold/25 bg-white/[0.055] px-6 py-3 text-sm font-bold text-white hover:bg-ciza-gold/10">
              Lire le blog
              <ArrowRight className="h-4 w-4 text-ciza-gold" />
            </Link>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="rounded-3xl border border-ciza-gold/18 bg-black/24 p-5 transition hover:border-ciza-gold/45 hover:bg-ciza-gold/10">
              <PhoneCall className="h-8 w-8 text-ciza-gold" />
              <p className="mt-4 text-sm font-black uppercase tracking-[0.18em] text-ciza-gold">WhatsApp</p>
              <p className="mt-2 break-words font-display text-xl font-black text-white">{contactPhone}</p>
            </a>
            <a href={emailUrl} className="rounded-3xl border border-ciza-gold/18 bg-black/24 p-5 transition hover:border-ciza-gold/45 hover:bg-ciza-gold/10">
              <Mail className="h-8 w-8 text-ciza-gold" />
              <p className="mt-4 text-sm font-black uppercase tracking-[0.18em] text-ciza-gold">Email</p>
              <p className="mt-2 break-all font-display text-xl font-black text-white">{contactEmail}</p>
            </a>
          </div>
        </div>

        <LeadCaptureForm
          source="contact-page"
          title="Envoyer une demande"
          description="Choisis ton sujet d'interet et l'equipe CizaOnline te recontactera avec les prochaines etapes."
        />
      </section>
    </main>
  );
}
