import SeoLandingPage from "../seo-pages/SeoLandingPage";

const siteUrl = "https://cizaonline.com";

const page = {
  eyebrow: "Formation crypto",
  title: "Formation crypto pour l'Afrique francophone",
  description: "CizaOnline propose une formation crypto en Afrique francophone pour comprendre Bitcoin, USDT, Binance, wallets, P2P, securite, Mobile Money et gestion du risque avec un accompagnement clair.",
  signupText: "S'inscrire a la formation",
  whatsappText: "Bonjour CizaOnline, je veux des informations sur la formation crypto Afrique francophone.",
  outcomes: [
    "Apprendre les bases crypto avec un vocabulaire simple.",
    "Comprendre Bitcoin, USDT, wallets, Binance et P2P.",
    "Eviter les arnaques, faux signaux et decisions emotionnelles.",
    "Construire une methode adaptee au contexte africain francophone."
  ],
  highlights: [
    { title: "Pedagogie progressive", text: "Le parcours commence par les fondamentaux avant d'aborder les plateformes, les transactions, les stablecoins et le risque." },
    { title: "Afrique francophone", text: "Les exemples tiennent compte des usages locaux: Mobile Money, contraintes bancaires, P2P, communautes WhatsApp et besoins entrepreneurs." },
    { title: "Accompagnement humain", text: "CizaOnline oriente les debutants, investisseurs et entreprises vers un apprentissage responsable, sans promesse de rendement." }
  ],
  guideTitle: "Un parcours crypto structure pour apprendre sans bruit",
  guideIntro: "La crypto peut sembler complexe quand on debute seul. CizaOnline organise les notions essentielles dans un ordre logique: comprendre, securiser, pratiquer petit, analyser, puis seulement augmenter son autonomie.",
  steps: [
    { title: "1. Comprendre les fondamentaux", text: "Blockchain, Bitcoin, stablecoins, wallet, seed phrase, frais reseau et volatilite sont expliques avec des exemples simples et concrets." },
    { title: "2. Installer de bons reflexes", text: "Avant toute transaction, l'apprenant apprend a verifier les liens, proteger ses acces, eviter les faux supports et conserver ses preuves." },
    { title: "3. Pratiquer avec prudence", text: "Les premieres operations doivent etre petites et verifiables: achat test, reception, conversion, retrait et suivi des frais." },
    { title: "4. Structurer son risque", text: "La formation rappelle qu'investir exige un plan, une limite de perte, une comprehension de la volatilite et aucune promesse de gain." }
  ],
  faqs: [
    { q: "La formation est-elle adaptee aux debutants ?", a: "Oui. Le parcours part des bases et peut ensuite aller vers Binance, USDT, P2P, securite wallet et gestion du risque." },
    { q: "Est-ce une formation trading ?", a: "CizaOnline enseigne d'abord la comprehension et la securite. Les notions de marche sont abordees avec prudence, sans promesse de gains." },
    { q: "Les entreprises peuvent-elles demander une session ?", a: "Oui. CizaOnline propose aussi un accompagnement pour equipes, organisations et projets qui veulent comprendre les usages crypto et Web3." }
  ]
};

export const metadata = {
  title: "Formation Crypto Afrique Francophone | CizaOnline",
  description: page.description,
  keywords: ["formation crypto Afrique francophone", "formation crypto RDC", "formation Binance Afrique", "apprendre crypto Afrique", "CizaOnline formation"],
  alternates: { canonical: "/formation-crypto-afrique-francophone" },
  openGraph: { title: "Formation Crypto Afrique Francophone", description: page.description, url: `${siteUrl}/formation-crypto-afrique-francophone`, siteName: "CizaOnline", locale: "fr_FR", type: "article" },
  twitter: { card: "summary_large_image", title: "Formation Crypto Afrique Francophone", description: page.description }
};

export default function FormationCryptoAfriqueFrancophonePage() {
  return <SeoLandingPage page={page} />;
}
