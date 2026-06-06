import SeoLandingPage from "../seo-pages/SeoLandingPage";

const siteUrl = "https://cizaonline.com";

const page = {
  eyebrow: "Binance RDC",
  title: "Guide Binance RDC pour debuter avec methode",
  description: "Guide CizaOnline pour utiliser Binance en RDC: inscription, securite, verification, P2P, achat USDT ou Bitcoin, erreurs a eviter et formation crypto adaptee aux debutants.",
  signupText: "S'inscrire a CizaOnline",
  whatsappText: "Bonjour CizaOnline, je veux un guide Binance adapte a la RDC.",
  outcomes: [
    "Comprendre les bases de Binance avant les premiers depots.",
    "Configurer la securite du compte et limiter les risques d'acces non autorise.",
    "Approcher le P2P, l'USDT et Bitcoin avec prudence.",
    "Savoir quand demander une formation avant d'utiliser des produits avances."
  ],
  highlights: [
    { title: "Inscription claire", text: "Le guide explique les grandes etapes: compte, verification, securite, langue, notifications et informations personnelles." },
    { title: "P2P en RDC", text: "Le P2P demande methode: vendeur fiable, conditions lisibles, paiement confirme, mediation et respect des regles de la plateforme." },
    { title: "Formation responsable", text: "CizaOnline insiste sur l'apprentissage avant l'effet de levier, les promesses de gains rapides ou les decisions prises sous pression." }
  ],
  guideTitle: "Bien configurer Binance avant d'acheter ou vendre",
  guideIntro: "Binance peut etre utile pour acheter, vendre, convertir ou apprendre la crypto, mais un compte mal securise expose a des pertes. Ce guide aide les utilisateurs en RDC a avancer pas a pas avec des reflexes simples.",
  steps: [
    { title: "1. Creer le compte proprement", text: "Utilise tes vraies informations, une adresse e-mail fiable et un mot de passe unique. Evite de partager ton compte ou tes codes avec une autre personne." },
    { title: "2. Activer la securite", text: "Active la double authentification, verifie les appareils connectes, configure les alertes et controle regulierement les connexions suspectes." },
    { title: "3. Comprendre le P2P", text: "Lis les conditions du vendeur, ne libere jamais une crypto avant confirmation du paiement et ne sors pas du cadre de protection de la plateforme." },
    { title: "4. Apprendre avant de trader", text: "Spot, futures, earn ou conversions ont des risques differents. CizaOnline recommande de commencer par les bases et la gestion du risque." }
  ],
  faqs: [
    { q: "Binance fonctionne-t-il pour les utilisateurs en RDC ?", a: "Les fonctionnalites disponibles peuvent varier selon les regles de la plateforme et le profil utilisateur. Il faut verifier directement dans l'application et respecter les conditions en vigueur." },
    { q: "Faut-il commencer par Bitcoin ou USDT ?", a: "Cela depend de l'objectif. Beaucoup de debutants apprennent d'abord USDT pour comprendre les transferts, puis Bitcoin pour l'investissement long terme." },
    { q: "CizaOnline est-il Binance ?", a: "Non. CizaOnline est une marque de formation et d'accompagnement crypto, pas une entite officielle de Binance." }
  ]
};

export const metadata = {
  title: "Guide Binance RDC | CizaOnline",
  description: page.description,
  keywords: ["Guide Binance RDC", "Binance Congo", "Binance Kinshasa", "P2P Binance RDC", "formation Binance RDC"],
  alternates: { canonical: "/guide-binance-rdc" },
  openGraph: { title: "Guide Binance RDC", description: page.description, url: `${siteUrl}/guide-binance-rdc`, siteName: "CizaOnline", locale: "fr_FR", type: "article" },
  twitter: { card: "summary_large_image", title: "Guide Binance RDC", description: page.description }
};

export default function GuideBinanceRdcPage() {
  return <SeoLandingPage page={page} />;
}
