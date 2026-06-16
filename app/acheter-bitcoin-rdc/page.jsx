import SeoLandingPage from "../seo-pages/SeoLandingPage";

const siteUrl = "https://cizaonline.com";

const page = {
  eyebrow: "Bitcoin RDC",
  title: "Acheter Bitcoin en RDC avec une methode simple et securisee",
  description: "Guide CizaOnline pour comprendre comment acheter Bitcoin en Republique democratique du Congo, preparer son compte, verifier les frais, utiliser le P2P avec prudence et proteger ses BTC avant d'investir.",
  signupText: "S'inscrire a CizaOnline",
  whatsappText: "Bonjour CizaOnline, je veux apprendre a acheter Bitcoin en RDC de facon securisee.",
  outcomes: [
    "Comprendre les etapes avant d'acheter Bitcoin en RDC.",
    "Comparer compte, wallet, P2P, Mobile Money et verification d'identite.",
    "Eviter les erreurs courantes: faux vendeurs, mauvaises adresses et absence de securite.",
    "Savoir quand demander un accompagnement avant d'envoyer des fonds."
  ],
  highlights: [
    { title: "Approche debutant", text: "CizaOnline explique les bases avant l'achat: role du Bitcoin, volatilite, wallet, frais reseau et responsabilite personnelle." },
    { title: "Contexte RDC", text: "Le guide tient compte des usages locaux: Mobile Money, P2P, verification du vendeur, preuve de paiement et communication claire." },
    { title: "Securite d'abord", text: "Chaque etape insiste sur la protection du compte, l'authentification, les petites transactions test et la conservation des preuves." }
  ],
  guideTitle: "Comment acheter Bitcoin en RDC sans se precipiter",
  guideIntro: "Acheter Bitcoin n'est pas seulement cliquer sur un bouton. Il faut comprendre le prix, le risque, le canal d'achat, la garde des fonds et le niveau d'experience. CizaOnline aide les debutants congolais a construire un processus calme et verifiable.",
  steps: [
    { title: "1. Preparare son compte", text: "Utilise une adresse e-mail fiable, active la double authentification, verifie ton identite si la plateforme le demande et note les regles de securite avant de deposer de l'argent." },
    { title: "2. Choisir le bon canal", text: "En RDC, l'achat peut passer par une plateforme, un service P2P ou un accompagnement. Compare le taux, les frais, la reputation du vendeur et la rapidite de confirmation." },
    { title: "3. Acheter progressivement", text: "Pour un premier achat, commence petit, verifie la reception, evite la pression et conserve les captures utiles. Un test reduit le risque d'erreur d'adresse ou de procedure." },
    { title: "4. Proteger ses BTC", text: "Apprends la difference entre laisser les BTC sur une plateforme et utiliser un wallet personnel. Ne partage jamais seed phrase, codes OTP ou mots de passe." }
  ],
  faqs: [
    { q: "Peut-on acheter Bitcoin avec Mobile Money en RDC ?", a: "Oui, souvent via des vendeurs P2P ou des intermediaires, mais il faut verifier le taux, la reputation, les limites et la preuve de paiement avant toute transaction." },
    { q: "CizaOnline vend-il directement du Bitcoin ?", a: "CizaOnline accompagne et forme. Le plus important est de comprendre le processus, les risques et les bonnes pratiques avant d'acheter." },
    { q: "Quel montant commencer ?", a: "Pour un debutant, il est prudent de commencer avec un petit montant test afin de verifier la plateforme, l'adresse et le processus de reception." }
  ]
};

export const metadata = {
  title: "Acheter Bitcoin en RDC | Guide CizaOnline",
  description: page.description,
  keywords: ["acheter Bitcoin RDC", "Bitcoin Congo", "acheter BTC Kinshasa", "crypto RDC", "CizaOnline Bitcoin"],
  alternates: { canonical: "/acheter-bitcoin-rdc" },
  openGraph: { title: "Acheter Bitcoin en RDC", description: page.description, url: `${siteUrl}/acheter-bitcoin-rdc`, siteName: "CizaOnline", locale: "fr_FR", type: "article" },
  twitter: { card: "summary_large_image", title: "Acheter Bitcoin en RDC", description: page.description }
};

export default function AcheterBitcoinRdcPage() {
  return <SeoLandingPage page={page} />;
}
