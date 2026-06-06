import SeoLandingPage from "../seo-pages/SeoLandingPage";

const siteUrl = "https://cizaonline.com";

const page = {
  eyebrow: "FAQ CizaOnline",
  title: "FAQ CizaOnline: formation crypto, Binance, USDT et securite",
  description: "Reponses aux questions frequentes sur CizaOnline, la formation crypto en Afrique francophone, Binance, USDT, Mobile Money, securite wallet, prix, inscription et accompagnement.",
  signupText: "S'inscrire maintenant",
  whatsappText: "Bonjour CizaOnline, j'ai une question apres avoir lu la FAQ.",
  outcomes: [
    "Comprendre ce que propose CizaOnline et ce que la marque ne promet pas.",
    "Identifier les options: formation, rendez-vous, communaute et accompagnement entreprise.",
    "Clarifier les questions sur Binance, USDT, Bitcoin, Mobile Money et wallet.",
    "Contacter l'equipe pour une orientation adaptee."
  ],
  highlights: [
    { title: "Transparence", text: "CizaOnline est une plateforme d'education et d'accompagnement crypto. Elle ne vend pas de promesse de rendement." },
    { title: "Inscription simple", text: "Les apprenants peuvent passer par WhatsApp ou la page d'inscription pour demander le canal adapte a leur niveau." },
    { title: "Securite", text: "La FAQ rappelle les bases: proteger ses comptes, verifier les adresses, eviter les faux supports et commencer petit." }
  ],
  guideTitle: "Questions frequentes avant de rejoindre CizaOnline",
  guideIntro: "Cette FAQ regroupe les points essentiels pour les debutants, investisseurs et entrepreneurs qui veulent apprendre la crypto avec un cadre francophone clair, responsable et adapte au contexte africain.",
  steps: [
    { title: "CizaOnline est-il adapte aux debutants ?", text: "Oui. Le parcours commence par les bases: Bitcoin, USDT, wallet, Binance, P2P, securite et vocabulaire crypto." },
    { title: "CizaOnline donne-t-il des conseils financiers ?", text: "Non. Le contenu est educatif. Chaque personne reste responsable de ses decisions, de son capital et de son niveau de risque." },
    { title: "Comment rejoindre CizaOnline ?", text: "Tu peux contacter l'equipe sur WhatsApp ou passer par la section inscription. L'equipe t'oriente selon ton niveau et ton besoin." },
    { title: "Quels sujets sont couverts ?", text: "Formation crypto, Binance, USDT, Bitcoin, Mobile Money, wallet, securite, P2P, gestion du risque et accompagnement entreprise." }
  ],
  faqs: [
    { q: "Combien coute la formation CizaOnline ?", a: "Le site presente des options selon le besoin: ressources gratuites, formation sur rendez-vous et accompagnement entreprise. Les details peuvent etre confirmes sur WhatsApp." },
    { q: "Puis-je payer avec Mobile Money ?", a: "Selon le pays et la disponibilite, Mobile Money peut etre propose comme canal de paiement ou de validation. Il faut confirmer avec l'equipe." },
    { q: "CizaOnline garantit-il des gains crypto ?", a: "Non. CizaOnline enseigne la methode, la securite et la discipline. Aucune formation serieuse ne peut garantir des gains sur un marche volatil." },
    { q: "Puis-je demander une formation pour mon entreprise ?", a: "Oui. L'accompagnement entreprise aide les equipes a comprendre crypto, stablecoins, paiements numeriques, risques et bonnes pratiques." }
  ]
};

export const metadata = {
  title: "FAQ CizaOnline | Questions formation crypto",
  description: page.description,
  keywords: ["FAQ CizaOnline", "questions CizaOnline", "formation crypto FAQ", "Binance RDC FAQ", "USDT Mobile Money FAQ"],
  alternates: { canonical: "/faq-cizaonline" },
  openGraph: { title: "FAQ CizaOnline", description: page.description, url: `${siteUrl}/faq-cizaonline`, siteName: "CizaOnline", locale: "fr_FR", type: "article" },
  twitter: { card: "summary_large_image", title: "FAQ CizaOnline", description: page.description }
};

export default function FaqCizaOnlinePage() {
  return <SeoLandingPage page={page} />;
}
