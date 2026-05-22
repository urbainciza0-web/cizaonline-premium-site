"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  BookOpenCheck,
  CheckCircle2,
  ChevronDown,
  Coins,
  FileText,
  Gem,
  Globe2,
  LockKeyhole,
  Menu,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Star,
  TrendingUp,
  UsersRound,
  WalletCards,
  X,
  Zap
} from "lucide-react";

const whatsappUrl = "https://wa.me/message/TARGCCHEL2B5K1";
const telegramUrl = "https://t.me/+qWeBitmp1OcxMjI0";
const paymentUrl = "https://cizaonline.live/inscription";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } }
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } }
};

const navItems = [
  { label: "Pourquoi", href: "#pourquoi" },
  { label: "Offre", href: "#offre" },
  { label: "Temoignages", href: "#temoignages" },
  { label: "FAQ", href: "#faq" }
];

const socialProof = [
  { value: "+5 000", label: "membres accompagnes" },
  { value: "+120", label: "temoignages verifies" },
  { value: "RDC & Afrique", label: "francophone connectee" },
  { value: "WhatsApp + Telegram", label: "canaux actifs" }
];

const markets = [
  ["BTC", "Bitcoin", "+4.8%", "$68,420"],
  ["ETH", "Ethereum", "+3.2%", "$3,780"],
  ["USDT", "Tether", "+0.1%", "$1.00"],
  ["BNB", "BNB", "+2.1%", "$604"]
];

const advantages = [
  ["Formation adaptee aux realites africaines", "Cas concrets, mobile first, vocabulaire clair et decisions applicables.", BookOpenCheck],
  ["Mobile Money / USDT / Binance", "Comprendre les passerelles utilisees au quotidien par la communaute.", WalletCards],
  ["Gestion du risque", "Taille de position, plan d'entree, sortie, stop et protection du capital.", ShieldCheck],
  ["Pas de promesses irrealistes", "Une approche responsable: education, prudence et discipline avant tout.", BadgeCheck],
  ["Communaute active", "Echanges encadres, lives, retours d'experience et progression collective.", UsersRound],
  ["Support WhatsApp / Telegram", "Accompagnement simple, rapide et accessible depuis les canaux que tu utilises deja.", MessageCircle]
];

const offerItems = [
  ["Acces communaute privee", UsersRound],
  ["Formation crypto debutant a intermediaire", BookOpenCheck],
  ["Checklists pratiques", CheckCircle2],
  ["Alertes marche", TrendingUp],
  ["Lives / analyses", BarChart3],
  ["Support WhatsApp", MessageCircle],
  ["Ressources PDF", FileText]
];

const testimonials = [
  {
    initials: "PK",
    name: "Patrick",
    place: "Kinshasa, RDC",
    text: "Grace a CizaOnline, j'ai arrete les trades impulsifs et j'ai appris a gerer mon risque.",
    result: "Plan de trading stabilise"
  },
  {
    initials: "AN",
    name: "Ariane",
    place: "Lubumbashi, RDC",
    text: "Je comprenais les cryptos de loin. Aujourd'hui je sais proteger mon wallet et acheter avec methode.",
    result: "Premier portefeuille securise"
  },
  {
    initials: "JM",
    name: "Joel",
    place: "Abidjan, Cote d'Ivoire",
    text: "La difference, c'est le cadre. Pas de bruit, pas de pression, juste des analyses et des actions simples.",
    result: "Routine hebdomadaire claire"
  }
];

const faqs = [
  {
    q: "Est-ce adapte aux debutants ?",
    a: "Oui. Le parcours commence par les bases: wallet, stablecoins, vocabulaire, securite, puis avance vers l'analyse et la gestion du risque."
  },
  {
    q: "Est-ce que CizaOnline promet des gains ?",
    a: "Non. CizaOnline ne vend pas de promesses rapides. La proposition repose sur la methode, la prudence, l'education et la discipline."
  },
  {
    q: "Comment rejoindre le groupe ?",
    a: "Tu peux demander l'acces via WhatsApp ou Telegram. L'equipe te dirige ensuite vers le canal adapte a ton niveau."
  },
  {
    q: "Est-ce que le paiement mobile money est accepte ?",
    a: "Oui, l'offre est pensee pour l'Afrique francophone. Les modalites de paiement sont confirmees lors de la demande d'acces."
  },
  {
    q: "Quelle est la difference avec les groupes crypto gratuits ?",
    a: "CizaOnline met l'accent sur le cadre, la qualite des ressources, le suivi, les checklists et la prevention des erreurs courantes."
  }
];

function SectionHeader({ eyebrow, title, text }) {
  return (
    <motion.div
      className="mx-auto max-w-3xl text-center"
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
    >
      <p className="mb-3 font-display text-xs font-semibold uppercase tracking-[0.24em] text-ciza-gold">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-semibold leading-tight text-white md:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-sm leading-7 text-white/68 sm:text-base md:mt-5 md:text-lg md:leading-8">{text}</p>
    </motion.div>
  );
}

function isExternalUrl(href) {
  return href && !href.startsWith("#");
}

function PrimaryButton({ children, href = paymentUrl }) {
  const external = isExternalUrl(href);

  return (
    <motion.a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      whileHover={{ y: -3, scale: 1.015 }}
      whileTap={{ scale: 0.98 }}
      className="gold-glow group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-ciza-gold px-5 py-3 text-center text-sm font-black text-black shadow-gold transition hover:bg-ciza-ivory sm:w-auto sm:px-7"
    >
      {children}
      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
    </motion.a>
  );
}

function SecondaryButton({ children, href }) {
  const external = isExternalUrl(href);

  return (
    <motion.a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.98 }}
      className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-ciza-gold/32 bg-black/35 px-5 py-3 text-center text-sm font-bold text-white transition hover:border-ciza-gold hover:bg-ciza-gold/10 sm:w-auto sm:px-6"
    >
      {children}
    </motion.a>
  );
}

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-hidden bg-ciza-black text-ciza-ivory">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/8 bg-black/58 backdrop-blur-2xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#" className="flex items-center gap-3" aria-label="CizaOnline accueil">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-ciza-gold text-lg font-black text-black shadow-gold">
              C
            </span>
            <span className="font-display text-lg font-bold text-white">CizaOnline</span>
          </a>
          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-white/66 transition hover:text-ciza-gold"
              >
                {item.label}
              </a>
            ))}
          </div>
          <a
            href={paymentUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-white px-5 py-2.5 text-sm font-black text-black transition hover:bg-ciza-gold sm:inline-flex"
          >
            Rejoindre
          </a>
          <button
            type="button"
            aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="grid h-11 w-11 place-items-center rounded-full border border-ciza-gold/25 bg-white/[0.04] text-white transition hover:border-ciza-gold sm:hidden"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </nav>
        {mobileMenuOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="border-t border-white/8 bg-ciza-black/96 px-4 pb-5 pt-3 shadow-panel sm:hidden"
          >
            <div className="grid gap-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-2xl border border-white/8 bg-white/[0.035] px-4 py-3 text-sm font-semibold text-white/76"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={paymentUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 rounded-2xl bg-ciza-gold px-4 py-3 text-center text-sm font-black text-black"
              >
                Rejoindre
              </a>
            </div>
          </motion.div>
        ) : null}
      </header>

      <section className="relative flex min-h-[92vh] items-center pt-24 sm:pt-28">
        <div className="absolute inset-0">
          <Image
            src="/images/ciza-hero.png"
            alt="Interface crypto premium CizaOnline"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[62%_center] opacity-42 sm:object-center sm:opacity-62 lg:opacity-74"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,.9)_0%,rgba(5,5,5,.76)_50%,#050505_100%)] sm:bg-[linear-gradient(90deg,#050505_0%,rgba(5,5,5,.92)_32%,rgba(5,5,5,.67)_58%,rgba(5,5,5,.28)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-ciza-black to-transparent" />
        </div>

        <div className="pointer-events-none absolute left-[9%] top-[18%] h-32 w-32 rounded-full bg-ciza-gold/18 blur-3xl sm:h-44 sm:w-44" />

        <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-4 pb-12 pt-8 sm:px-6 sm:pb-16 sm:pt-10 lg:grid-cols-[1.02fr_.98fr] lg:px-8">
          <motion.div initial="hidden" animate="show" variants={stagger} className="max-w-3xl">
            <motion.div
              variants={fadeUp}
              className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-ciza-gold/30 bg-ciza-gold/10 px-3 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-ciza-gold sm:mb-6 sm:px-4 sm:text-xs sm:tracking-[0.18em]"
            >
              <Sparkles className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span className="truncate sm:whitespace-normal">Tunnel crypto premium pour l'Afrique francophone</span>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="max-w-[12ch] font-display text-4xl font-semibold leading-[1.02] text-white min-[380px]:text-5xl sm:max-w-none sm:text-6xl lg:text-7xl"
            >
              Maitrise la crypto avec{" "}
              <motion.span
                className="gold-text inline-block"
                animate={{ filter: ["drop-shadow(0 0 0 rgba(244,197,66,0))", "drop-shadow(0 0 24px rgba(244,197,66,.35))", "drop-shadow(0 0 0 rgba(244,197,66,0))"] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              >
                methode et discipline.
              </motion.span>
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-base leading-7 text-white/74 sm:mt-7 sm:text-lg sm:leading-8">
              CizaOnline combine formation, communaute privee, alertes marche et support direct
              pour aider les francophones d'Afrique a progresser sans promesses irreelles.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:gap-4">
              <PrimaryButton href={paymentUrl}>Rejoindre CizaOnline maintenant</PrimaryButton>
              <SecondaryButton href="#offre">
                <Gem className="h-4 w-4 text-ciza-gold" aria-hidden="true" />
                Voir l'offre
              </SecondaryButton>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 34 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.85, ease: "easeOut", delay: 0.18 }}
            className="hidden self-end lg:block"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="gold-border glass ml-auto max-w-md rounded-[2rem] p-5 shadow-panel"
            >
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-sm text-white/50">Indice discipline</p>
                  <p className="font-display text-3xl font-semibold text-white">CIZA 100</p>
                </div>
                <div className="rounded-full bg-ciza-emerald/14 px-3 py-1 text-sm font-bold text-ciza-emerald">
                  +18.4%
                </div>
              </div>
              <div className="mb-5 h-28 rounded-2xl border border-ciza-gold/15 bg-[linear-gradient(145deg,rgba(244,197,66,.2),rgba(255,255,255,.035))] p-4">
                <div className="flex h-full items-end gap-2">
                  {[34, 52, 44, 70, 56, 76, 88, 68, 94, 82, 100, 91].map((height, index) => (
                    <motion.span
                      key={index}
                      initial={{ height: "18%" }}
                      animate={{ height: `${height}%` }}
                      transition={{ duration: 0.7, delay: index * 0.04 }}
                      className="flex-1 rounded-t-full bg-ciza-gold/85"
                    />
                  ))}
                </div>
              </div>
              <div className="space-y-3">
                {markets.map(([ticker, name, move, price]) => (
                  <div
                    key={ticker}
                    className="flex items-center justify-between rounded-2xl border border-white/8 bg-white/[0.035] px-4 py-3"
                  >
                    <div className="flex items-center gap-3">
                      <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-xs font-black text-black">
                        {ticker}
                      </span>
                      <div>
                        <p className="font-semibold text-white">{name}</p>
                        <p className="text-xs text-white/42">{ticker}/USDT</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-white">{price}</p>
                      <p className="text-sm font-bold text-ciza-emerald">{move}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {socialProof.map((item) => (
            <motion.div
              key={item.label}
              variants={fadeUp}
              className="rounded-3xl border border-ciza-gold/24 bg-white/[0.035] p-6 shadow-panel"
            >
              <p className="font-display text-2xl font-bold text-white">{item.value}</p>
              <p className="mt-2 text-sm leading-6 text-white/56">{item.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="ticker-shell border-y border-ciza-gold/20 py-3 sm:py-4">
        <div className="marquee-track gap-2 whitespace-nowrap sm:gap-4">
          {[...Array(2)].flatMap((_, group) =>
            ["Bitcoin", "USDT", "Mobile Money", "Risk Management", "Binance", "Wallet Security", "Afrique Web3", "Trading Plan"].map(
              (item) => (
                <span
                  key={`${group}-${item}`}
                  className="mx-2 inline-flex items-center gap-2 rounded-full border border-ciza-gold/20 bg-black/40 px-3 py-2 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-white/60 sm:mx-4 sm:gap-3 sm:px-4 sm:text-sm sm:tracking-[0.18em]"
                >
                  <Star className="h-4 w-4 text-ciza-gold" aria-hidden="true" />
                  {item}
                </span>
              )
            )
          )}
        </div>
      </section>

      <section id="pourquoi" className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Pourquoi choisir CizaOnline ?"
            title="Un cadre serieux pour apprendre la crypto sans bruit."
            text="Le positionnement est simple: moins de promesses, plus de methode, plus de securite, plus de communaute."
          />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-10 grid gap-4 sm:mt-14 md:grid-cols-2 lg:grid-cols-3"
          >
            {advantages.map(([title, text, Icon]) => (
              <motion.article key={title} variants={fadeUp} className="gold-border glass rounded-3xl p-5 sm:p-7">
                <Icon className="mb-5 h-8 w-8 text-ciza-gold sm:mb-7 sm:h-9 sm:w-9" aria-hidden="true" />
                <h3 className="font-display text-lg font-semibold text-white sm:text-xl">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/62 sm:mt-4 sm:text-base">{text}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="offre" className="bg-white/[0.025] px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_.72fr] lg:items-stretch">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="gold-border glass rounded-[1.5rem] p-5 sm:rounded-[2rem] sm:p-6 md:p-9"
          >
            <motion.p variants={fadeUp} className="font-display text-xs font-semibold uppercase tracking-[0.24em] text-ciza-gold">
              Offre CizaOnline
            </motion.p>
            <motion.h2 variants={fadeUp} className="mt-4 font-display text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl">
              Ce que tu recois en rejoignant CizaOnline
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-5 max-w-2xl text-base leading-7 text-white/68 sm:text-lg sm:leading-8">
              Une experience premium pour passer de la curiosite crypto a une pratique plus claire,
              plus prudente et plus accompagnee.
            </motion.p>
            <motion.div variants={stagger} className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-4">
              {offerItems.map(([item, Icon]) => (
                <motion.div
                  key={item}
                  variants={fadeUp}
                  className="flex items-center gap-3 rounded-2xl border border-white/8 bg-white/[0.035] p-3.5 sm:p-4"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-ciza-gold/14 text-ciza-gold">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <p className="font-semibold text-white">{item}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="rounded-[1.5rem] border border-ciza-gold/28 bg-[linear-gradient(145deg,rgba(244,197,66,.2),rgba(255,255,255,.04)_45%,rgba(0,0,0,.34))] p-5 shadow-gold sm:rounded-[2rem] sm:p-7"
          >
            <p className="inline-flex rounded-full bg-black/40 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-ciza-gold">
              Acces premium
            </p>
            <div className="mt-8">
              <p className="text-sm text-white/56">A partir de</p>
              <p className="mt-1 font-display text-4xl font-black text-white sm:text-5xl">6$/mois</p>
              <p className="mt-4 leading-7 text-white/64">
                Ideal pour demarrer avec une communaute serieuse, des ressources utiles et un
                cadre qui protege ton capital.
              </p>
            </div>
            <div className="mt-8 grid gap-3">
              <PrimaryButton href={paymentUrl}>Demander l'acces</PrimaryButton>
              <SecondaryButton href={whatsappUrl}>
                <MessageCircle className="h-4 w-4 text-ciza-gold" aria-hidden="true" />
                Parler a l'equipe
              </SecondaryButton>
            </div>
            <div className="mt-8 border-t border-white/10 pt-5 text-sm leading-6 text-white/50">
              Paiement mobile money accepte selon pays et canal de validation.
            </div>
          </motion.aside>
        </div>
      </section>

      <section id="temoignages" className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Temoignages"
            title="Des retours realistes, centres sur la discipline."
            text="Les membres parlent surtout de clarte, de prudence et de meilleures habitudes. C'est la bonne base pour durer."
          />
          <div className="mt-10 grid gap-4 sm:mt-14 lg:grid-cols-3">
            {testimonials.map((item, index) => (
              <motion.article
                key={item.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="rounded-3xl border border-ciza-gold/18 bg-ciza-graphite p-5 shadow-panel sm:p-7"
              >
                <div className="mb-6 flex items-center gap-4">
                  <span className="grid h-12 w-12 place-items-center rounded-full border border-ciza-gold/40 bg-ciza-gold/14 font-display font-black text-ciza-gold">
                    {item.initials}
                  </span>
                  <div>
                    <p className="font-semibold text-white">{item.name}</p>
                    <p className="text-sm text-white/46">{item.place}</p>
                  </div>
                </div>
                <p className="leading-8 text-white/72">"{item.text}"</p>
                <p className="mt-6 inline-flex rounded-full bg-ciza-gold/12 px-3 py-1 text-xs font-bold text-ciza-gold">
                  {item.result}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="inscription" className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[1.5rem] border border-ciza-gold/24 bg-[linear-gradient(135deg,rgba(244,197,66,.2),rgba(255,255,255,.04)_38%,rgba(24,211,158,.12))] p-5 shadow-gold sm:rounded-[2rem] sm:p-6 md:p-10">
          <div className="grid gap-10 lg:grid-cols-[1fr_.82fr] lg:items-center">
            <div>
              <p className="font-display text-xs font-semibold uppercase tracking-[0.24em] text-ciza-gold">
                WhatsApp / Telegram
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl">
                Entre dans le canal qui correspond a ton niveau.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
                Tu demandes l'acces, l'equipe valide ton profil, puis tu rejoins la communaute
                adaptee: debutant, investisseur actif ou entrepreneur Web3.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-h-16 items-center justify-between rounded-3xl bg-white p-4 text-black transition hover:-translate-y-1 hover:bg-ciza-gold sm:p-5"
              >
                <span className="flex items-center gap-4">
                  <MessageCircle className="h-7 w-7" aria-hidden="true" />
                  <span>
                    <span className="block font-display text-xl font-bold">WhatsApp</span>
                    <span className="text-sm text-black/60">Acces rapide et suivi direct</span>
                  </span>
                </span>
                <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" aria-hidden="true" />
              </a>
              <a
                href={telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-h-16 items-center justify-between rounded-3xl border border-white/12 bg-black/38 p-4 text-white transition hover:-translate-y-1 hover:border-ciza-gold/60 sm:p-5"
              >
                <span className="flex items-center gap-4">
                  <Globe2 className="h-7 w-7 text-ciza-gold" aria-hidden="true" />
                  <span>
                    <span className="block font-display text-xl font-bold">Telegram</span>
                    <span className="text-sm text-white/52">Canal annonces et ressources</span>
                  </span>
                </span>
                <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-4">
          {[
            ["Capital protege", "Priorite a la securite wallet, aux process et a la prevention.", LockKeyhole],
            ["Vision long terme", "Des plans d'accumulation et de sortie plutot que du bruit.", TrendingUp],
            ["Reseau africain", "Une communaute adaptee aux moyens de paiement et usages locaux.", UsersRound],
            ["Execution premium", "Design, support, contenus et experience dignes d'une fintech globale.", Gem]
          ].map(([title, text, Icon]) => (
            <div key={title} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <Icon className="mb-5 h-8 w-8 text-ciza-gold" aria-hidden="true" />
              <h3 className="font-display text-xl font-semibold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/56">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="faq" className="bg-white/[0.025] px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <SectionHeader
            eyebrow="FAQ"
            title="Les questions avant de rejoindre."
            text="Une marque financiere inspire confiance quand elle est claire sur ce qu'elle fait, et sur ce qu'elle ne promet pas."
          />
          <div className="mt-10 space-y-3 sm:mt-12 sm:space-y-4">
            {faqs.map((item) => (
              <details key={item.q} className="group rounded-3xl border border-white/10 bg-ciza-graphite p-5 sm:p-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-base font-semibold text-white sm:text-lg">
                  {item.q}
                  <ChevronDown className="h-5 w-5 shrink-0 text-ciza-gold transition group-open:rotate-180" aria-hidden="true" />
                </summary>
                <p className="mt-4 leading-7 text-white/62">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="mx-auto max-w-7xl rounded-[1.5rem] border border-ciza-gold/26 bg-[radial-gradient(circle_at_18%_12%,rgba(244,197,66,.24),transparent_24rem),linear-gradient(135deg,rgba(255,255,255,.06),rgba(255,255,255,.02))] p-5 text-center shadow-gold sm:rounded-[2rem] sm:p-7 md:p-12"
        >
          <p className="mx-auto mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-ciza-gold text-black">
            <Zap className="h-7 w-7" aria-hidden="true" />
          </p>
          <h2 className="mx-auto max-w-4xl font-display text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl">
            Construis ta discipline crypto avec une communaute serieuse.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/68 sm:text-lg sm:leading-8">
            Rejoins CizaOnline et avance avec methode, prudence et accompagnement.
          </p>
          <div className="mx-auto mt-8 grid max-w-3xl gap-3 sm:mt-9 sm:grid-cols-3 sm:gap-4">
            <PrimaryButton href={whatsappUrl}>WhatsApp</PrimaryButton>
            <SecondaryButton href={telegramUrl}>
              <Globe2 className="h-4 w-4 text-ciza-gold" aria-hidden="true" />
              Telegram
            </SecondaryButton>
            <SecondaryButton href={paymentUrl}>
              <Coins className="h-4 w-4 text-ciza-gold" aria-hidden="true" />
              Paiement / Acces
            </SecondaryButton>
          </div>
        </motion.div>
      </section>

      <footer className="border-t border-white/10 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.2fr_.8fr_.8fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-ciza-gold text-lg font-black text-black">
                C
              </span>
              <span className="font-display text-xl font-bold text-white">CizaOnline</span>
            </div>
            <p className="mt-5 max-w-md leading-7 text-white/52">
              Startup crypto education premium pour une Afrique plus informee, plus protegee et
              plus ambitieuse dans l'economie digitale.
            </p>
          </div>
          <div>
            <p className="font-semibold text-white">Produit</p>
            <div className="mt-4 grid gap-3 text-sm text-white/52">
              <a href="#pourquoi" className="hover:text-ciza-gold">Pourquoi</a>
              <a href="#offre" className="hover:text-ciza-gold">Offre</a>
              <a href="#inscription" className="hover:text-ciza-gold">Inscription</a>
            </div>
          </div>
          <div>
            <p className="font-semibold text-white">Confiance</p>
            <div className="mt-4 grid gap-3 text-sm text-white/52">
              <span className="inline-flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-ciza-gold" /> Education responsable</span>
              <span className="inline-flex items-center gap-2"><WalletCards className="h-4 w-4 text-ciza-gold" /> Mobile money ready</span>
              <span className="inline-flex items-center gap-2"><Coins className="h-4 w-4 text-ciza-gold" /> Stablecoin literacy</span>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-4 border-t border-white/8 pt-6 text-sm text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 CizaOnline. Tous droits reserves.</p>
          <p>Education crypto. Pas de conseil financier individualise.</p>
        </div>
      </footer>
    </main>
  );
}
