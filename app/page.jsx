"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  BellRing,
  BookOpenCheck,
  CheckCircle2,
  ChevronDown,
  Coins,
  Crown,
  FileText,
  Gem,
  Globe2,
  LockKeyhole,
  Mail,
  Menu,
  MessageCircle,
  Orbit,
  PhoneCall,
  Radar,
  ShieldCheck,
  Sparkles,
  Star,
  TrendingUp,
  UsersRound,
  WalletCards,
  X,
  Zap
} from "lucide-react";

const whatsappUrl = "https://wa.me/243834783307";
const emailUrl = "mailto:contact@cizaonline.com";
const contactPhone = "+243834783307";
const contactEmail = "contact@cizaonline.com";
const telegramUrl = "https://t.me/+qWeBitmp1OcxMjI0";
const paymentUrl =
  "https://www.binance.com/referral/earn-together/refer2earn-usdc/claim?hl=fr&ref=GRO_28502_48A90&utm_source=referral_entrance";
const binanceAcademyUrl = "https://www.binance.com/fr/academy";
const appointmentUrl =
  "https://wa.me/243834783307?text=Bonjour%20CizaOnline%2C%20je%20veux%20r%C3%A9server%20la%20formation%20crypto%20%C3%A0%2050%24";
const enterpriseUrl =
  "https://wa.me/243834783307?text=Bonjour%20CizaOnline%2C%20je%20veux%20un%20accompagnement%20entreprise%20%C3%A0%201000%24";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.62, ease: "easeOut" } }
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } }
};

const navItems = [
  { label: "Terminal", href: "#terminal" },
  { label: "À propos", href: "#apropos" },
  { label: "Offre", href: "#offre" },
  { label: "Tarifs", href: "#tarifs" },
  { label: "Confiance", href: "#confiance" },
  { label: "Contact", href: "#contact" },
  { label: "FAQ", href: "#faq" }
];

const socialProof = [
  { value: "5 000+", label: "membres formes", detail: "Afrique francophone" },
  { value: "120+", label: "retours verifies", detail: "WhatsApp et Telegram" },
  { value: "24/7", label: "veille marche", detail: "BTC, ETH, USDT, BNB" },
  { value: "6$", label: "acces mensuel", detail: "abonnement clair" }
];

const markets = [
  ["BTC", "Bitcoin", "+4.82%", "$68,420", 78],
  ["ETH", "Ethereum", "+3.24%", "$3,780", 64],
  ["BNB", "BNB", "+2.18%", "$604", 58],
  ["SOL", "Solana", "+7.41%", "$174", 86],
  ["USDT", "Tether", "+0.01%", "$1.00", 42]
];

const advantages = [
  ["Academie mobile first", "Modules courts, checklists pratiques et vocabulaire clair pour progresser meme depuis smartphone.", BookOpenCheck],
  ["Trading terminal prive", "Watchlist, plans de risque, niveaux importants et alertes educatives pour garder le cap.", BarChart3],
  ["Wallet security", "Process de protection, hygiene des seed phrases, stablecoins et erreurs a eviter.", ShieldCheck],
  ["Execution responsable", "Pas de promesses rapides: methode, discipline, capital protege et decisions mieux documentees.", BadgeCheck],
  ["Communaute premium", "Un canal encadre pour apprendre, poser des questions et rester loin du bruit.", UsersRound],
  ["Afrique-ready", "Mobile Money, USDT, Binance et habitudes locales integrees au parcours.", WalletCards]
];

const offerItems = [
  ["Communaute privee WhatsApp / Telegram", UsersRound],
  ["Formation crypto debutant a intermediaire", BookOpenCheck],
  ["Mini dashboard marche et alertes educatives", BellRing],
  ["Checklists wallet, achat, vente, risque", CheckCircle2],
  ["Lives et analyses hebdomadaires", BarChart3],
  ["Ressources PDF premium", FileText]
];

const pricingPlans = [
  {
    title: "Découverte crypto gratuite",
    price: "0$",
    description:
      "Accès aux ressources gratuites de Binance Academy pour apprendre les bases de la crypto, blockchain, sécurité et Web3.",
    button: "Commencer gratuitement",
    href: binanceAcademyUrl,
    Icon: BookOpenCheck,
    badge: "Ressources gratuites"
  },
  {
    title: "Formation crypto sur rendez-vous",
    price: "50$",
    description:
      "Session personnalisée avec CizaOnline pour comprendre Binance, acheter/vendre via mobile money, sécurité crypto, P2P, wallet et bases du trading.",
    button: "Réserver un rendez-vous",
    href: appointmentUrl,
    Icon: Crown,
    badge: "Accompagnement privé"
  },
  {
    title: "Accompagnement Entreprise",
    price: "1000$",
    description:
      "Accompagnement premium destiné aux entreprises, organisations, équipes et projets qui veulent comprendre, intégrer ou former leur personnel sur l’écosystème crypto, Binance, stablecoins, sécurité, paiements numériques, P2P et Web3.",
    button: "Demander un accompagnement entreprise",
    href: enterpriseUrl,
    Icon: Gem,
    badge: "Entreprise"
  }
];

const testimonials = [
  {
    avatar: "/images/testimonial-1.png",
    name: "Patrick M.",
    place: "Kinshasa, RDC",
    text: "Grâce à CizaOnline, j’ai compris comment m’inscrire, sécuriser mon compte et commencer à utiliser Binance facilement.",
    result: "Compte sécurisé"
  },
  {
    avatar: "/images/testimonial-2.png",
    name: "Merveille A.",
    place: "Lubumbashi, RDC",
    text: "Le groupe est calme, structuré et professionnel. J’ai appris à réfléchir avant d’acheter et à protéger mon capital.",
    result: "Meilleure discipline"
  },
  {
    avatar: "/images/testimonial-3.png",
    name: "Eric L.",
    place: "Abidjan, Côte d’Ivoire",
    text: "CizaOnline ressemble plus à un desk privé qu’à un groupe crypto bruyant. Les analyses sont simples et applicables.",
    result: "Plan de risque applique"
  },
  {
    avatar: "/images/testimonial-4.png",
    name: "Junior B.",
    place: "Goma, RDC",
    text: "Avant, je suivais les signaux au hasard. Maintenant je comprends mieux USDT, wallet, risque et timing d’entrée.",
    result: "Décisions plus calmes"
  },
  {
    avatar: "/images/testimonial-5.png",
    name: "Ariane N.",
    place: "Kigali, Rwanda",
    text: "Les checklists m’ont aidée à éviter les erreurs de débutant et à avancer étape par étape sans pression.",
    result: "Parcours plus clair"
  }
];

const trustBadges = [
  ["Education responsable", ShieldCheck],
  ["Mobile Money ready", WalletCards],
  ["Stablecoin literacy", Coins],
  ["No hype promise", LockKeyhole]
];

const faqs = [
  {
    q: "Est-ce adapte aux debutants ?",
    a: "Oui. Le parcours commence par les bases: wallet, stablecoins, securite, vocabulaire, puis avance vers l'analyse et la gestion du risque."
  },
  {
    q: "Est-ce que CizaOnline promet des gains ?",
    a: "Non. CizaOnline vend un cadre d'apprentissage, pas une promesse de rendement. L'objectif est de construire de meilleures decisions."
  },
  {
    q: "Comment rejoindre le groupe ?",
    a: "Tu demandes l'acces via WhatsApp, Telegram ou la page d'inscription. L'equipe confirme ensuite le canal adapte a ton niveau."
  },
  {
    q: "Le paiement Mobile Money est accepte ?",
    a: "Oui, selon le pays et le canal de validation. L'offre est pensee pour l'Afrique francophone."
  }
];

function isExternalUrl(href) {
  return href && !href.startsWith("#");
}

function LogoMark({ compact = false }) {
  return (
    <span className="group/logo flex items-center gap-3">
      <span className="logo-mark relative grid h-11 w-11 place-items-center overflow-hidden rounded-2xl border border-ciza-gold/40 bg-black text-ciza-gold shadow-gold">
        <span className="absolute inset-1 rounded-[0.85rem] border border-white/10" />
        <span className="absolute h-12 w-12 rounded-full border border-ciza-gold/25" />
        <span className="absolute h-5 w-5 rounded-full bg-ciza-gold/18 blur-md" />
        <span className="relative font-display text-lg font-black">C</span>
      </span>
      {compact ? null : (
        <span>
          <span className="block font-display text-lg font-black leading-none text-white">CizaOnline</span>
          <span className="mt-1 block text-[0.62rem] font-bold uppercase tracking-[0.22em] text-ciza-gold/80">
            Crypto Academy
          </span>
        </span>
      )}
    </span>
  );
}

function PrimaryButton({ children, href = paymentUrl }) {
  const external = isExternalUrl(href);
  return (
    <motion.a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      whileHover={{ y: -3, scale: 1.015 }}
      whileTap={{ scale: 0.97 }}
      className="premium-button group inline-flex min-h-[3.25rem] w-full items-center justify-center gap-2 rounded-full px-5 py-3.5 text-center text-sm font-black text-black sm:w-auto sm:px-7"
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
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
      className="inline-flex min-h-[3.25rem] w-full items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.055] px-5 py-3.5 text-center text-sm font-bold text-white shadow-panel backdrop-blur-xl transition hover:border-ciza-gold/60 hover:bg-ciza-gold/10 sm:w-auto sm:px-6"
    >
      {children}
    </motion.a>
  );
}

function SectionHeader({ eyebrow, title, text }) {
  return (
    <motion.div
      className="mx-auto max-w-3xl text-center"
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
    >
      <p className="mb-3 font-display text-xs font-black uppercase tracking-[0.24em] text-ciza-gold">{eyebrow}</p>
      <h2 className="font-display text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl">{title}</h2>
      <p className="mt-4 text-sm leading-7 text-white/68 sm:text-base md:text-lg md:leading-8">{text}</p>
    </motion.div>
  );
}

function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <Image
        src="/images/hero-cizaonline.png"
        alt="Ambassadrice CizaOnline utilisant son smartphone"
        fill
        priority
        sizes="100vw"
        className="object-contain object-center opacity-42 sm:object-[center_top] sm:opacity-52 lg:object-[72%_top]"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_22%,rgba(244,197,66,.22),transparent_24rem),linear-gradient(90deg,#030303_0%,rgba(3,3,3,.92)_32%,rgba(3,3,3,.68)_62%,rgba(3,3,3,.42)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,3,3,.72)_0%,rgba(3,3,3,.18)_42%,#050505_100%)]" />
      <div className="cinema-light absolute -right-24 top-24 h-72 w-72 rounded-full bg-ciza-gold/18 blur-3xl" />
      <div className="data-grid absolute inset-0" />
      <div className="hero-orbit hero-orbit-one" />
      <div className="hero-orbit hero-orbit-two" />
      <div className="floating-coin left-[78%] top-[22%] hidden lg:grid">B</div>
      <div className="floating-coin left-[62%] top-[58%] hidden lg:grid">₮</div>
    </div>
  );
}

function MarketTerminal() {
  const bars = useMemo(() => [35, 54, 48, 72, 61, 84, 69, 92, 78, 96, 88, 104, 94, 116], []);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, y: 28 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.78, ease: "easeOut", delay: 0.2 }}
      className="terminal-card gold-border glass relative mx-auto w-full max-w-[28rem] rounded-[1.65rem] p-4 shadow-gold sm:p-5"
    >
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/42">Ciza Market Pulse</p>
          <p className="mt-2 font-display text-3xl font-black text-white">Global Desk</p>
        </div>
        <span className="inline-flex items-center gap-2 rounded-full border border-ciza-emerald/25 bg-ciza-emerald/10 px-3 py-1 text-xs font-black text-ciza-emerald">
          <span className="h-2 w-2 rounded-full bg-ciza-emerald shadow-[0_0_16px_rgba(24,211,158,.8)]" />
          LIVE
        </span>
      </div>
      <div className="rounded-3xl border border-white/8 bg-black/36 p-4">
        <div className="mb-4 flex items-end justify-between">
          <div>
            <p className="text-sm text-white/46">Portfolio discipline</p>
            <p className="font-display text-3xl font-black text-white">$12,840</p>
          </div>
          <p className="rounded-full bg-ciza-gold/14 px-3 py-1 text-sm font-black text-ciza-gold">+18.4%</p>
        </div>
        <div className="terminal-chart relative h-32 overflow-hidden rounded-2xl border border-ciza-gold/12 bg-[linear-gradient(180deg,rgba(244,197,66,.12),rgba(255,255,255,.025))] p-3">
          <div className="absolute inset-x-3 top-1/2 h-px bg-ciza-gold/16" />
          <svg className="absolute inset-3 h-[calc(100%-1.5rem)] w-[calc(100%-1.5rem)]" viewBox="0 0 320 110" aria-hidden="true">
            <motion.path
              d="M0 82 C28 62 38 76 62 52 S104 64 126 38 172 56 196 28 242 24 266 42 296 18 320 22"
              fill="none"
              stroke="url(#chartGold)"
              strokeWidth="4"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.4, ease: "easeOut" }}
            />
            <defs>
              <linearGradient id="chartGold" x1="0" y1="0" x2="1" y2="0">
                <stop stopColor="#fff8e6" />
                <stop offset="0.5" stopColor="#f4c542" />
                <stop offset="1" stopColor="#18d39e" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute bottom-3 left-3 right-3 flex items-end gap-1.5 opacity-50">
            {bars.map((height, index) => (
              <motion.span
                key={index}
                initial={{ height: 16 }}
                animate={{ height }}
                transition={{ duration: 0.75, delay: index * 0.03 }}
                className="flex-1 rounded-t-full bg-ciza-gold/70"
              />
            ))}
          </div>
        </div>
      </div>
      <div className="mt-4 grid gap-2">
        {markets.map(([ticker, name, move, price, score]) => (
          <div key={ticker} className="market-row grid grid-cols-[auto_1fr_auto] items-center gap-3 rounded-2xl border border-white/8 bg-white/[0.035] p-3">
            <span className="grid h-10 w-10 place-items-center rounded-full border border-ciza-gold/20 bg-ciza-gold/12 text-xs font-black text-ciza-gold">
              {ticker}
            </span>
            <div className="min-w-0">
              <div className="flex items-center justify-between gap-3">
                <p className="truncate font-bold text-white">{name}</p>
                <p className="font-semibold text-white">{price}</p>
              </div>
              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/8">
                <motion.span
                  initial={{ width: "18%" }}
                  whileInView={{ width: `${score}%` }}
                  viewport={{ once: true }}
                  className="block h-full rounded-full bg-[linear-gradient(90deg,#f4c542,#18d39e)]"
                />
              </div>
            </div>
            <p className="text-sm font-black text-ciza-emerald">{move}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-hidden bg-ciza-black text-ciza-ivory">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/8 bg-black/62 backdrop-blur-2xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
          <a href="#" aria-label="CizaOnline accueil">
            <LogoMark />
          </a>
          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-sm font-semibold text-white/62 transition hover:text-ciza-gold">
                {item.label}
              </a>
            ))}
          </div>
          <a href={paymentUrl} target="_blank" rel="noopener noreferrer" className="hidden rounded-full bg-white px-5 py-2.5 text-sm font-black text-black transition hover:bg-ciza-gold sm:inline-flex">
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
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="border-t border-white/8 bg-ciza-black/96 px-4 pb-5 pt-3 shadow-panel sm:hidden">
            <div className="grid gap-2">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} onClick={() => setMobileMenuOpen(false)} className="rounded-2xl border border-white/8 bg-white/[0.035] px-4 py-3 text-sm font-semibold text-white/76">
                  {item.label}
                </a>
              ))}
              <a href={paymentUrl} target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)} className="mt-2 rounded-2xl bg-ciza-gold px-4 py-3 text-center text-sm font-black text-black">
                Rejoindre pour 6$/mois
              </a>
            </div>
          </motion.div>
        ) : null}
      </header>

      <section className="relative flex min-h-[96vh] items-center pt-24 sm:pt-28">
        <HeroBackground />
        <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-4 pb-14 pt-8 sm:px-6 lg:grid-cols-[1.02fr_.98fr] lg:px-8">
          <motion.div initial="hidden" animate="show" variants={stagger} className="max-w-3xl">
            <motion.div variants={fadeUp} className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-ciza-gold/30 bg-ciza-gold/10 px-3 py-2 text-[0.68rem] font-black uppercase tracking-[0.14em] text-ciza-gold sm:px-4 sm:text-xs sm:tracking-[0.18em]">
              <Sparkles className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span className="truncate sm:whitespace-normal">Plateforme crypto premium pour l'Afrique francophone</span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="max-w-[11ch] font-display text-4xl font-black leading-[1.02] text-white min-[380px]:text-5xl sm:max-w-none sm:text-6xl lg:text-7xl">
              Le desk crypto prive pour apprendre, investir et{" "}
              <span className="gold-text inline-block">executer avec discipline.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-base leading-7 text-white/74 sm:text-lg sm:leading-8">
              CizaOnline transforme l'apprentissage crypto en experience premium: formation, communaute,
              alertes educatives, dashboard marche et support direct pour progresser sans bruit.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-7 flex flex-wrap gap-2">
              {trustBadges.map(([label, Icon]) => (
                <span key={label} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-bold text-white/70 backdrop-blur-xl">
                  <Icon className="h-4 w-4 text-ciza-gold" aria-hidden="true" />
                  {label}
                </span>
              ))}
            </motion.div>
            <motion.div variants={fadeUp} className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <PrimaryButton href={paymentUrl}>Rejoindre pour 6$/mois</PrimaryButton>
              <SecondaryButton href="#terminal">
                <Radar className="h-4 w-4 text-ciza-gold" aria-hidden="true" />
                Voir le terminal
              </SecondaryButton>
            </motion.div>
          </motion.div>

          <div id="terminal" className="lg:self-end">
            <MarketTerminal />
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {socialProof.map((item) => (
            <motion.div key={item.label} variants={fadeUp} className="stat-card rounded-3xl border border-ciza-gold/18 bg-white/[0.035] p-5 shadow-panel sm:p-6">
              <p className="font-display text-3xl font-black text-white">{item.value}</p>
              <p className="mt-2 text-sm font-bold text-ciza-gold">{item.label}</p>
              <p className="mt-1 text-sm leading-6 text-white/50">{item.detail}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="ticker-shell border-y border-ciza-gold/20 py-3 sm:py-4">
        <div className="marquee-track gap-2 whitespace-nowrap sm:gap-4">
          {[...Array(2)].flatMap((_, group) =>
            ["BTC +4.82%", "ETH +3.24%", "USDT rails", "Wallet security", "Risk desk", "Binance workflow", "Mobile Money", "Afrique Web3"].map((item) => (
              <span key={`${group}-${item}`} className="mx-2 inline-flex items-center gap-2 rounded-full border border-ciza-gold/20 bg-black/40 px-3 py-2 text-[0.68rem] font-black uppercase tracking-[0.14em] text-white/60 sm:mx-4 sm:px-4 sm:text-sm">
                <Star className="h-4 w-4 text-ciza-gold" aria-hidden="true" />
                {item}
              </span>
            ))
          )}
        </div>
      </section>

      <section id="apropos" className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.p variants={fadeUp} className="font-display text-xs font-black uppercase tracking-[0.24em] text-ciza-gold">
              À propos
            </motion.p>
            <motion.h2 variants={fadeUp} className="mt-4 font-display text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl">
              Une marque crypto africaine visuelle, claire et rassurante.
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-5 max-w-2xl text-base leading-7 text-white/68 sm:text-lg sm:leading-8">
              CizaOnline associe l’image premium d’une fintech moderne à une pédagogie simple:
              apprendre Binance, USDT, la sécurité wallet et la discipline d’investissement sans surcharge.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-7 grid gap-3 sm:grid-cols-2">
              {["Mobile first", "Business crypto", "Support humain", "Méthode claire"].map((item) => (
                <span key={item} className="rounded-2xl border border-ciza-gold/16 bg-white/[0.035] px-4 py-3 text-sm font-bold text-white/70">
                  {item}
                </span>
              ))}
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="gold-border glass overflow-hidden rounded-[1.5rem] p-2 shadow-gold sm:rounded-[2rem]"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.25rem] bg-[radial-gradient(circle_at_50%_18%,rgba(244,197,66,.16),transparent_18rem),#050505] sm:aspect-[16/11] sm:rounded-[1.65rem]">
              <Image
                src="/images/cizaonline-app.png"
                alt="Ambassadrice CizaOnline travaillant sur ordinateur"
                fill
                sizes="(min-width: 1024px) 48vw, 100vw"
                className="object-contain object-center transition duration-500 lg:object-[center_top]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/58 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/10 bg-black/48 p-4 backdrop-blur-xl">
                <p className="font-display text-xl font-black text-white">CizaOnline Academy</p>
                <p className="mt-1 text-sm leading-6 text-white/62">Formation, communauté et confiance digitale.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="confiance" className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto w-full max-w-7xl overflow-hidden">
          <SectionHeader
            eyebrow="Identite CizaOnline"
            title="Une experience qui ressemble a une fintech mondiale."
            text="Le site met en avant un cadre serieux: terminal visuel, signaux educatifs, protection du capital et communaute structuree."
          />
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="mt-10 grid gap-5 rounded-[1.5rem] border border-ciza-gold/18 bg-white/[0.025] p-4 shadow-panel sm:rounded-[2rem] sm:p-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-center"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.25rem] bg-[radial-gradient(circle_at_50%_18%,rgba(244,197,66,.16),transparent_18rem),#050505] sm:aspect-[16/10] lg:aspect-[4/5]">
              <Image
                src="/images/cizaonline-business.png"
                alt="Ambassadrice CizaOnline en tenue business"
                fill
                sizes="(min-width: 1024px) 38vw, 100vw"
                className="object-contain object-center transition duration-500 lg:object-[center_top]"
              />
            </div>
            <div className="p-1 sm:p-4">
              <p className="font-display text-xs font-black uppercase tracking-[0.24em] text-ciza-gold">Avantages premium</p>
              <h3 className="mt-4 font-display text-2xl font-black leading-tight text-white sm:text-4xl">
                Une expérience rassurante pour apprendre, comparer et passer à l’action.
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/62 sm:text-base">
                Les visuels CizaOnline renforcent la confiance sans remplacer le fond: sécurité, méthode,
                pédagogie, communauté et usage mobile au quotidien.
              </p>
            </div>
          </motion.div>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} className="mt-10 grid gap-4 sm:mt-14 md:grid-cols-2 lg:grid-cols-3">
            {advantages.map(([title, text, Icon]) => (
              <motion.article key={title} variants={fadeUp} className="gold-border glass feature-card rounded-3xl p-5 sm:p-7">
                <Icon className="mb-5 h-8 w-8 text-ciza-gold sm:mb-7 sm:h-9 sm:w-9" aria-hidden="true" />
                <h3 className="font-display text-lg font-black text-white sm:text-xl">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/62 sm:mt-4 sm:text-base">{text}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="offre" className="relative overflow-hidden bg-white/[0.025] px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="absolute inset-x-0 top-0 h-px bg-gold-line" />
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_.74fr] lg:items-stretch">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={stagger} className="gold-border glass rounded-[1.5rem] p-5 sm:rounded-[2rem] sm:p-8 md:p-10">
            <motion.p variants={fadeUp} className="font-display text-xs font-black uppercase tracking-[0.24em] text-ciza-gold">
              Offre premium
            </motion.p>
            <motion.h2 variants={fadeUp} className="mt-4 font-display text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl">
              L'abonnement crypto qui donne une structure a tes decisions.
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-5 max-w-2xl text-base leading-7 text-white/68 sm:text-lg sm:leading-8">
              Chaque element sert une chose: t'aider a apprendre, securiser, filtrer le bruit et passer a l'action avec methode.
            </motion.p>
            <motion.div variants={stagger} className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-4">
              {offerItems.map(([item, Icon]) => (
                <motion.div key={item} variants={fadeUp} className="flex items-center gap-3 rounded-2xl border border-white/8 bg-white/[0.035] p-3.5 sm:p-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-ciza-gold/14 text-ciza-gold">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <p className="font-semibold text-white">{item}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.aside initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.65, ease: "easeOut" }} className="pricing-card rounded-[1.5rem] border border-ciza-gold/30 p-5 shadow-gold sm:rounded-[2rem] sm:p-7">
            <div className="flex items-center justify-between gap-4">
              <p className="inline-flex items-center gap-2 rounded-full bg-black/40 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-ciza-gold">
                <Crown className="h-4 w-4" aria-hidden="true" />
                Acces premium
              </p>
              <p className="rounded-full border border-ciza-emerald/25 bg-ciza-emerald/10 px-3 py-1 text-xs font-black text-ciza-emerald">
                Actif
              </p>
            </div>
            <div className="mt-8">
              <p className="text-sm font-semibold text-white/56">A partir de</p>
              <p className="mt-1 font-display text-5xl font-black text-white sm:text-6xl">6$<span className="text-lg text-white/46">/mois</span></p>
              <p className="mt-4 leading-7 text-white/64">
                Une porte d'entree premium pour apprendre avec une communaute serieuse, des ressources utiles et un cadre qui protege ton capital.
              </p>
            </div>
            <div className="mt-8 grid gap-3">
              <PrimaryButton href={paymentUrl}>Demander l'acces maintenant</PrimaryButton>
              <SecondaryButton href={whatsappUrl}>
                <MessageCircle className="h-4 w-4 text-ciza-gold" aria-hidden="true" />
                Parler a l'equipe
              </SecondaryButton>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-2 border-t border-white/10 pt-5">
              {["Wallet", "USDT", "Risk"].map((item) => (
                <span key={item} className="rounded-2xl border border-white/8 bg-black/24 px-3 py-3 text-center text-xs font-black text-white/62">
                  {item}
                </span>
              ))}
            </div>
          </motion.aside>
        </div>
      </section>

      <section id="tarifs" className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="absolute inset-x-0 top-0 h-px bg-gold-line" />
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Tarification"
            title="Trois chemins simples pour apprendre et intégrer la crypto."
            text="Commence avec les ressources gratuites, reserve un accompagnement personnalise, ou structure une formation premium pour ton entreprise."
          />

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="mx-auto mt-10 grid w-full max-w-[72rem] grid-cols-1 gap-5 sm:mt-14 md:grid-cols-2 xl:grid-cols-3"
          >
            {pricingPlans.map(({ title, price, description, button, href, Icon, badge }, index) => (
              <motion.article
                key={title}
                variants={fadeUp}
                className={`gold-border glass pricing-card min-w-0 rounded-[1.5rem] p-5 shadow-gold sm:rounded-[2rem] sm:p-6 xl:p-6 ${
                  index === 2 ? "border-ciza-gold/55 bg-ciza-gold/5" : index === 1 ? "border-ciza-gold/40" : "border-white/10"
                }`}
              >
                <div className="flex min-w-0 flex-col gap-5 sm:flex-row sm:items-start sm:justify-between xl:flex-col">
                  <div className="min-w-0">
                    <p className="inline-flex items-center gap-2 rounded-full border border-ciza-gold/22 bg-ciza-gold/10 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-ciza-gold">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                      {badge}
                    </p>
                    <h2 className="mt-5 font-display text-2xl font-black leading-tight text-white sm:text-3xl xl:text-[1.65rem]">
                      {title}
                    </h2>
                  </div>
                  <p className={`shrink-0 break-words font-display font-black leading-none text-white ${index === 2 ? "text-4xl sm:text-5xl xl:text-[3.15rem]" : "text-5xl sm:text-6xl xl:text-[3.35rem]"}`}>
                    {price}
                  </p>
                </div>

                <p className="mt-5 text-sm leading-7 text-white/68 sm:text-base xl:min-h-[10.5rem]">
                  {description}
                </p>

                <div className="mt-7">
                  {index === 0 ? (
                    <SecondaryButton href={href}>
                      <BookOpenCheck className="h-4 w-4 text-ciza-gold" aria-hidden="true" />
                      {button}
                    </SecondaryButton>
                  ) : (
                    <PrimaryButton href={href}>{button}</PrimaryButton>
                  )}
                </div>
              </motion.article>
            ))}
          </motion.div>

          <div className="mt-8 grid gap-3 rounded-[1.25rem] border border-white/10 bg-black/28 p-4 text-sm leading-6 text-white/56 shadow-panel sm:rounded-[1.5rem] sm:p-5 md:grid-cols-2">
            <p>
              CizaOnline n’est pas affilié officiellement à Binance. Binance Academy est une ressource éducative gratuite proposée par Binance.
            </p>
            <p>
              Education crypto uniquement. Pas de conseil financier individualisé.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Témoignages"
            title="Des retours crédibles avec des profils professionnels."
            text="Les membres parlent de clarté, de sécurité, d’inscription, de Binance et de discipline. C’est la base d’une marque crypto durable."
          />
          <div className="mt-10 grid gap-4 sm:mt-14 md:grid-cols-2 xl:grid-cols-5">
            {testimonials.map((item, index) => (
              <motion.article
                key={item.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.55, delay: index * 0.06 }}
                className="testimonial-card rounded-3xl border border-ciza-gold/18 bg-ciza-graphite p-5 shadow-panel transition-colors hover:border-ciza-gold/40 hover:bg-white/[0.045] sm:p-6"
              >
                <div className="mb-6 flex items-center gap-4">
                  <span className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border border-ciza-gold/45 bg-ciza-gold/10 shadow-gold">
                    <Image
                      src={item.avatar}
                      alt={`Photo de profil de ${item.name}`}
                      fill
                      sizes="64px"
                      className="object-cover object-center"
                    />
                  </span>
                  <div>
                    <p className="font-semibold text-white">{item.name}</p>
                    <p className="text-sm text-white/46">{item.place}</p>
                  </div>
                </div>
                <p className="text-sm leading-7 text-white/72">"{item.text}"</p>
                <p className="mt-6 inline-flex rounded-full bg-ciza-gold/12 px-3 py-1 text-xs font-black text-ciza-gold">
                  {item.result}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="inscription" className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="cta-panel mx-auto max-w-7xl overflow-hidden rounded-[1.5rem] border border-ciza-gold/24 p-5 shadow-gold sm:rounded-[2rem] sm:p-7 md:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_.82fr] lg:items-center">
            <div>
              <p className="font-display text-xs font-black uppercase tracking-[0.24em] text-ciza-gold">WhatsApp / Telegram</p>
              <h2 className="mt-4 font-display text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl">
                Entre dans le canal qui correspond a ton niveau.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
                Tu demandes l'acces, l'equipe valide ton profil, puis tu rejoins la communaute adaptee: debutant, investisseur actif ou entrepreneur Web3.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <PrimaryButton href={whatsappUrl}>
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                WhatsApp
              </PrimaryButton>
              <SecondaryButton href={telegramUrl}>
                <Globe2 className="h-4 w-4 text-ciza-gold" aria-hidden="true" />
                Telegram
              </SecondaryButton>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.p variants={fadeUp} className="font-display text-xs font-black uppercase tracking-[0.24em] text-ciza-gold">
              Contact direct
            </motion.p>
            <motion.h2 variants={fadeUp} className="mt-4 font-display text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl">
              Besoin d'aide ? Contactez CizaOnline
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-5 max-w-2xl text-base leading-7 text-white/68 sm:text-lg sm:leading-8">
              Une question sur l'inscription, le paiement, l'acces au groupe ou les ressources premium ? L'equipe CizaOnline te repond directement.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="gold-border glass grid gap-4 rounded-[1.5rem] p-5 shadow-gold sm:rounded-[2rem] sm:p-7 md:grid-cols-2"
          >
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-3xl border border-ciza-gold/18 bg-black/24 p-5 transition hover:border-ciza-gold/45 hover:bg-ciza-gold/10 sm:p-6"
            >
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-ciza-gold text-black shadow-gold">
                <PhoneCall className="h-6 w-6" aria-hidden="true" />
              </span>
              <p className="mt-5 text-sm font-black uppercase tracking-[0.18em] text-ciza-gold">Telephone / WhatsApp</p>
              <p className="mt-2 break-words font-display text-2xl font-black text-white transition group-hover:text-ciza-gold">
                {contactPhone}
              </p>
              <p className="mt-3 text-sm leading-6 text-white/56">Ouvrir WhatsApp pour parler a l'equipe.</p>
            </a>

            <a
              href={emailUrl}
              className="group rounded-3xl border border-ciza-gold/18 bg-black/24 p-5 transition hover:border-ciza-gold/45 hover:bg-ciza-gold/10 sm:p-6"
            >
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-black shadow-panel">
                <Mail className="h-6 w-6" aria-hidden="true" />
              </span>
              <p className="mt-5 text-sm font-black uppercase tracking-[0.18em] text-ciza-gold">E-mail</p>
              <p className="mt-2 break-words font-display text-2xl font-black text-white transition group-hover:text-ciza-gold">
                {contactEmail}
              </p>
              <p className="mt-3 text-sm leading-6 text-white/56">Envoyer un message a l'adresse officielle.</p>
            </a>
          </motion.div>
        </div>
      </section>

      <section id="faq" className="bg-white/[0.025] px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <SectionHeader
            eyebrow="FAQ"
            title="Clair, responsable, sans promesse magique."
            text="Une marque financiere premium inspire confiance quand elle dit clairement ce qu'elle fait et ce qu'elle ne fait pas."
          />
          <div className="mt-10 space-y-3 sm:mt-12 sm:space-y-4">
            {faqs.map((item) => (
              <details key={item.q} className="group rounded-3xl border border-white/10 bg-ciza-graphite p-5 sm:p-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-base font-black text-white sm:text-lg">
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
        <motion.div initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.65, ease: "easeOut" }} className="mx-auto grid max-w-7xl gap-8 rounded-[1.5rem] border border-ciza-gold/26 bg-[radial-gradient(circle_at_18%_12%,rgba(244,197,66,.22),transparent_24rem),linear-gradient(135deg,rgba(255,255,255,.06),rgba(255,255,255,.02))] p-5 shadow-gold sm:rounded-[2rem] sm:p-7 md:p-12 lg:grid-cols-[1fr_.72fr] lg:items-center">
          <div className="text-center lg:text-left">
            <p className="mx-auto mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-ciza-gold text-black lg:mx-0">
              <Zap className="h-7 w-7" aria-hidden="true" />
            </p>
            <h2 className="mx-auto max-w-4xl font-display text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl lg:mx-0">
              Construis ta discipline crypto avec une experience premium.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/68 sm:text-lg sm:leading-8 lg:mx-0">
              Rejoins CizaOnline et avance avec methode, prudence et accompagnement.
            </p>
            <div className="mx-auto mt-8 flex max-w-3xl flex-col gap-3 sm:mt-9 sm:flex-row sm:gap-4 lg:mx-0">
              <PrimaryButton href={paymentUrl}>Rejoindre pour 6$/mois</PrimaryButton>
              <SecondaryButton href={telegramUrl}>
                <Orbit className="h-4 w-4 text-ciza-gold" aria-hidden="true" />
                Voir le canal
              </SecondaryButton>
            </div>
          </div>
          <div className="relative min-h-[18rem] overflow-hidden rounded-[1.25rem] border border-ciza-gold/18 bg-[radial-gradient(circle_at_50%_18%,rgba(244,197,66,.16),transparent_18rem),#050505] shadow-panel sm:min-h-[24rem] sm:rounded-[1.65rem]">
            <Image
              src="/images/hero-cizaonline.png"
              alt="Ambassadrice CizaOnline avec application mobile"
              fill
              sizes="(min-width: 1024px) 34vw, 100vw"
              className="object-contain object-center transition duration-500 lg:object-[center_top]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/52 via-transparent to-transparent" />
          </div>
        </motion.div>
      </section>

      <footer className="border-t border-white/10 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-[1.12fr_.7fr_.78fr_1.12fr]">
          <div>
            <LogoMark />
            <p className="mt-5 max-w-md leading-7 text-white/52">
              Plateforme crypto education premium pour une Afrique plus informee, plus protegee et plus ambitieuse dans l'economie digitale.
            </p>
          </div>
          <div>
            <p className="font-semibold text-white">Produit</p>
            <div className="mt-4 grid gap-3 text-sm text-white/52">
              <a href="#terminal" className="hover:text-ciza-gold">Terminal</a>
              <a href="#offre" className="hover:text-ciza-gold">Offre</a>
              <a href="#inscription" className="hover:text-ciza-gold">Inscription</a>
            </div>
          </div>
          <div>
            <p className="font-semibold text-white">Confiance</p>
            <div className="mt-4 grid gap-3 text-sm text-white/52">
              {trustBadges.map(([label, Icon]) => (
                <span key={label} className="inline-flex items-center gap-2">
                  <Icon className="h-4 w-4 text-ciza-gold" />
                  {label}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-ciza-gold/18 bg-white/[0.035] p-5 shadow-panel">
            <p className="font-display text-xs font-black uppercase tracking-[0.24em] text-ciza-gold">Contact</p>
            <div className="mt-5 grid gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-2xl border border-ciza-gold/18 bg-black/30 p-3.5 transition hover:border-ciza-gold/50 hover:bg-ciza-gold/10"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-ciza-gold text-black shadow-gold">
                  <MessageCircle className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-black uppercase tracking-[0.16em] text-white/46">WhatsApp</span>
                  <span className="mt-1 block break-words text-sm font-black text-white transition group-hover:text-ciza-gold">
                    {contactPhone}
                  </span>
                </span>
              </a>
              <a
                href={emailUrl}
                className="group flex items-center gap-3 rounded-2xl border border-ciza-gold/18 bg-black/30 p-3.5 transition hover:border-ciza-gold/50 hover:bg-ciza-gold/10"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-ciza-gold/28 bg-white text-black shadow-panel">
                  <Mail className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-black uppercase tracking-[0.16em] text-white/46">Email</span>
                  <span className="mt-1 block break-all text-sm font-black text-white transition group-hover:text-ciza-gold">
                    {contactEmail}
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-4 border-t border-white/8 pt-6 text-sm text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>(c) 2026 CizaOnline. Tous droits reserves.</p>
          <p>Education crypto. Pas de conseil financier individualise.</p>
        </div>
      </footer>
    </main>
  );
}
