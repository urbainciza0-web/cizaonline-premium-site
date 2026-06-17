import ArticleLayout from "../ArticleLayout";

const article = {
  slug: "blog/erreurs-debutant-crypto",
  tag: "Securite crypto",
  title: "Les erreurs a eviter quand on debute en crypto",
  intro: "La crypto peut etre passionnante, mais les debutants perdent souvent de l'argent a cause d'erreurs simples : mauvais reseau, faux support, promesse de gains ou securite faible.",
  sections: [
    {
      title: "Acheter sans comprendre",
      paragraphs: [
        "La premiere erreur est d'acheter parce qu'un groupe ou une connaissance parle d'une opportunite. Avant d'acheter Bitcoin, USDT ou un autre actif, il faut savoir ce que l'on manipule, pourquoi on le fait et quel risque on accepte.",
        "CizaOnline recommande de lire les guides, de noter les mots importants et de commencer avec un petit montant test. La comprehension doit venir avant l'execution."
      ]
    },
    {
      title: "Negliger la securite du compte",
      paragraphs: [
        "Un mot de passe recycle, une double authentification absente ou un telephone non protege peuvent suffire a compromettre un compte. Les codes OTP, mots de passe et seed phrases ne doivent jamais etre partages.",
        "Il faut aussi verifier les liens officiels, eviter les applications inconnues et se mefier des faux agents de support. Dans la crypto, une erreur de securite peut etre irreversible."
      ]
    },
    {
      title: "Se tromper de reseau ou d'adresse",
      paragraphs: [
        "USDT peut circuler sur plusieurs reseaux. Bitcoin a son propre reseau. Une adresse de depot doit correspondre au reseau choisi. Envoyer des fonds sur une adresse ou un reseau incompatible peut creer une perte difficile a recuperer.",
        "Le bon reflexe consiste a copier l'adresse depuis l'application officielle, verifier les premiers et derniers caracteres, confirmer le reseau et tester avec un petit montant."
      ]
    },
    {
      title: "Croire aux promesses de gains rapides",
      paragraphs: [
        "La crypto attire beaucoup de discours agressifs : rendement garanti, doublement rapide, bot miracle ou investissement sans risque. Ces promesses doivent etre considerees avec prudence. Aucun guide CizaOnline ne garantit un profit.",
        "Le bon parcours est plus simple : apprendre, securiser, tester, poser des questions et avancer avec methode. C'est cette discipline qui protege le mieux les debutants en RDC et en Afrique francophone."
      ]
    }
  ]
};

export const metadata = {
  title: "Erreurs a eviter en crypto | Guide debutant CizaOnline",
  description: "Les erreurs a eviter quand on debute en crypto : faux supports, mauvais reseau, securite faible, promesses de gains et achat impulsif.",
  keywords: ["erreurs crypto debutant", "securite crypto", "debuter crypto RDC", "arnaques crypto", "CizaOnline"],
  alternates: { canonical: "/blog/erreurs-debutant-crypto" }
};

export default function ErreursDebutantCryptoPage() {
  return <ArticleLayout article={article} />;
}
