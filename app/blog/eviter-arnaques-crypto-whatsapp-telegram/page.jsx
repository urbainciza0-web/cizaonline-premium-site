import ArticleLayout from "../ArticleLayout";
import { buildArticleSocialMetadata } from "../../lib/blogContent.js";

const article = {
  slug: "blog/eviter-arnaques-crypto-whatsapp-telegram",
  tag: "Securite crypto",
  title: "Comment eviter les arnaques crypto sur WhatsApp et Telegram",
  intro:
    "WhatsApp et Telegram sont utiles pour apprendre, mais ils sont aussi utilises par de faux supports et des groupes qui promettent des gains rapides. Les debutants doivent connaitre les signaux d'alerte.",
  sections: [
    {
      title: "Identifier les promesses dangereuses",
      paragraphs: [
        "Une promesse de gain garanti, de doublement rapide ou de robot miracle doit etre traitee avec prudence. La crypto comporte des risques et aucun acteur serieux ne peut garantir un profit.",
        "Les messages qui creent l'urgence poussent souvent a agir sans verifier. Le bon reflexe est de ralentir, relire et demander un avis fiable."
      ]
    },
    {
      title: "Verifier les liens et les profils",
      paragraphs: [
        "Les faux supports utilisent parfois des logos, des noms proches et des captures convaincantes. Un lien envoye dans un groupe ne doit pas etre ouvert sans verification.",
        "Il ne faut jamais partager un code OTP, un mot de passe, une phrase de recuperation ou une capture contenant des donnees sensibles."
      ]
    },
    {
      title: "Rester dans les procedures officielles",
      paragraphs: [
        "Lorsqu'une transaction passe par une plateforme, il faut rester dans le cadre prevu. Sortir de la procedure pour payer directement ou confirmer hors systeme augmente le risque.",
        "Les conversations doivent rester claires. Si quelqu'un change les conditions, le numero ou le montant en cours de route, il faut suspendre l'operation."
      ]
    },
    {
      title: "Se faire accompagner",
      paragraphs: [
        "Un debutant ne doit pas avoir honte de poser des questions. Les arnaques exploitent souvent l'isolement, la pression et le manque de vocabulaire.",
        "CizaOnline aide les utilisateurs a comprendre les signaux d'alerte et a construire une hygiene de securite avant les transactions."
      ]
    }
  ]
};

export const metadata = {
  ...buildArticleSocialMetadata({
    slug: "eviter-arnaques-crypto-whatsapp-telegram",
    title: "Eviter les arnaques crypto WhatsApp et Telegram | CizaOnline",
    description:
      "Guide securite pour eviter les arnaques crypto sur WhatsApp et Telegram: faux supports, liens suspects, promesses de gains et bons reflexes.",
    keywords: ["arnaque crypto WhatsApp", "arnaque Telegram crypto", "faux support Binance", "securite crypto RDC"]
  })
};

export default function EviterArnaquesCryptoWhatsappTelegramPage() {
  return <ArticleLayout article={article} />;
}
