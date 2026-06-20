import { longSeoArticleSummaries, longSeoMetricoolSocialPosts } from "./longSeoArticles.js";

export const siteUrl = "https://cizaonline.com";

export const blogCategories = [
  {
    slug: "crypto-rdc",
    label: "Crypto RDC",
    description: "Guides pour acheter, comprendre et securiser la crypto en Republique democratique du Congo."
  },
  {
    slug: "binance-rdc",
    label: "Binance RDC",
    description: "Articles pratiques sur Binance, le P2P, la verification de compte et les usages en RDC."
  },
  {
    slug: "usdt-mobile-money",
    label: "USDT Mobile Money",
    description: "Contenus educatifs sur USDT, Mobile Money, les reseaux et les preuves de paiement."
  },
  {
    slug: "securite-crypto",
    label: "Securite crypto",
    description: "Bonnes pratiques pour proteger ses comptes, wallets, mots de passe, 2FA et transactions."
  }
];

const baseBlogArticles = [
  {
    title: "Comment acheter du Bitcoin en RDC ?",
    href: "/blog/comment-acheter-bitcoin-rdc",
    description: "Methode simple pour comprendre Bitcoin, choisir un canal d'achat, verifier les frais et securiser sa premiere operation.",
    tag: "Bitcoin RDC",
    category: "crypto-rdc",
    keywords: ["acheter bitcoin rdc", "bitcoin congo", "crypto rdc", "mobile money bitcoin"],
    publishedAt: "2026-06-16"
  },
  {
    title: "Binance P2P explique simplement",
    href: "/blog/binance-p2p-explique-simplement",
    description: "Explication claire du P2P Binance, des annonces, des vendeurs, des preuves Mobile Money et des erreurs a eviter.",
    tag: "Binance P2P",
    category: "binance-rdc",
    keywords: ["binance p2p rdc", "p2p binance", "mobile money binance", "acheter usdt rdc"],
    publishedAt: "2026-06-16"
  },
  {
    title: "Les erreurs a eviter quand on debute en crypto",
    href: "/blog/erreurs-debutant-crypto",
    description: "Checklist debutant pour eviter faux supports, mauvais reseaux, securite faible et promesses de gains rapides.",
    tag: "Securite",
    category: "securite-crypto",
    keywords: ["erreurs crypto debutant", "securite crypto", "arnaque crypto", "wallet securise"],
    publishedAt: "2026-06-16"
  },
  {
    title: "Comment debuter avec Binance en RDC",
    href: "/blog/debuter-binance-rdc",
    description: "Compte, securite, verification, P2P et premiers reflexes pour les debutants a Kinshasa, Goma et Lubumbashi.",
    tag: "Binance RDC",
    category: "binance-rdc",
    keywords: ["debuter binance rdc", "formation binance rdc", "compte binance congo"],
    publishedAt: "2026-06-06"
  },
  {
    title: "Acheter USDT avec Mobile Money",
    href: "/blog/acheter-usdt-mobile-money",
    description: "Guide educatif pour comprendre USDT, reseaux, vendeurs P2P, preuves Mobile Money et erreurs a eviter.",
    tag: "USDT",
    category: "usdt-mobile-money",
    keywords: ["acheter usdt mobile money", "usdt rdc", "binance p2p usdt"],
    publishedAt: "2026-06-06"
  },
  {
    title: "Securiser son compte crypto",
    href: "/blog/securiser-compte-crypto",
    description: "Checklist simple pour proteger Binance, wallets, mots de passe, 2FA, seed phrase et comptes WhatsApp/Telegram.",
    tag: "Securite",
    category: "securite-crypto",
    keywords: ["securiser compte crypto", "2fa binance", "seed phrase", "securite wallet"],
    publishedAt: "2026-06-06"
  },
  {
    title: "Comment creer un compte Binance en RDC en 2026",
    href: "/blog/creer-compte-binance-rdc",
    description: "Guide SEO pour creer un compte Binance en RDC, securiser son acces, comprendre la verification et eviter les erreurs de debutant.",
    tag: "Binance RDC",
    category: "binance-rdc",
    keywords: ["creer compte binance rdc", "ouvrir binance congo", "verification binance rdc", "formation binance"],
    publishedAt: "2026-06-19"
  },
  {
    title: "Acheter USDT en RDC avec Binance P2P",
    href: "/blog/acheter-usdt-rdc-binance-p2p",
    description: "Etapes prudentes pour acheter USDT en RDC avec Binance P2P, comparer les annonces, verifier Mobile Money et conserver les preuves.",
    tag: "USDT Mobile Money",
    category: "usdt-mobile-money",
    keywords: ["acheter usdt rdc", "binance p2p rdc", "usdt mobile money", "acheter usdt congo"],
    publishedAt: "2026-06-19"
  },
  {
    title: "Bitcoin ou USDT : quelle difference pour debuter ?",
    href: "/blog/bitcoin-ou-usdt-difference-debutant",
    description: "Comparer Bitcoin et USDT simplement : volatilite, stablecoin, usage, risque et parcours recommande pour debuter en crypto.",
    tag: "Crypto debutant",
    category: "crypto-rdc",
    keywords: ["bitcoin ou usdt", "difference bitcoin usdt", "crypto debutant rdc", "stablecoin usdt"],
    publishedAt: "2026-06-19"
  },
  {
    title: "Comment eviter les arnaques crypto sur WhatsApp et Telegram",
    href: "/blog/eviter-arnaques-crypto-whatsapp-telegram",
    description: "Signaux d'alerte pour eviter faux agents, groupes Telegram dangereux, promesses de gains et liens frauduleux en crypto.",
    tag: "Securite crypto",
    category: "securite-crypto",
    keywords: ["arnaque crypto whatsapp", "arnaque telegram crypto", "faux support binance", "securite crypto rdc"],
    publishedAt: "2026-06-19"
  },
  {
    title: "Pourquoi se former avant d'investir en crypto en Afrique",
    href: "/blog/se-former-avant-investir-crypto-afrique",
    description: "Comprendre pourquoi la formation crypto protege les debutants : vocabulaire, securite, gestion du risque et discipline.",
    tag: "Formation crypto",
    category: "crypto-rdc",
    keywords: ["formation crypto afrique", "investir crypto afrique", "formation crypto rdc", "debuter crypto"],
    publishedAt: "2026-06-19"
  }
];

export const blogArticles = [...baseBlogArticles, ...longSeoArticleSummaries];

export function getArticleSlug(article) {
  return String(article?.href || "").replace(/^\/blog\//, "");
}

export function getArticleImageUrl(articleOrSlug) {
  const slug = typeof articleOrSlug === "string" ? articleOrSlug : getArticleSlug(articleOrSlug);
  return `${siteUrl}/blog-images/${slug}`;
}

export function getBlogArticleBySlug(slug) {
  return blogArticles.find((article) => getArticleSlug(article) === slug);
}

export const metricoolSocialPosts = [
  {
    articleSlug: "creer-compte-binance-rdc",
    articleUrl: `${siteUrl}/blog/creer-compte-binance-rdc`,
    title: "Comment creer un compte Binance en RDC en 2026",
    instagram:
      "Creer un compte Binance en RDC ne se limite pas a installer une application. Il faut securiser l'email, activer la double authentification, comprendre la verification et eviter les faux supports. Nouveau guide CizaOnline: https://cizaonline.com/blog/creer-compte-binance-rdc #BinanceRDC #CryptoRDC #CizaOnline",
    tiktok:
      "Avant de creer ton compte Binance en RDC, retiens ceci: email fiable, mot de passe unique, 2FA activee, verification propre et aucun code partage sur WhatsApp. Le guide complet est sur CizaOnline: https://cizaonline.com/blog/creer-compte-binance-rdc",
    x:
      "Nouveau guide CizaOnline: creer un compte Binance en RDC en 2026, avec securite, verification et erreurs a eviter. https://cizaonline.com/blog/creer-compte-binance-rdc #BinanceRDC #CryptoRDC",
    telegram:
      "Nouveau guide CizaOnline: Comment creer un compte Binance en RDC en 2026.\n\nAu programme: securite du compte, verification, 2FA, erreurs de debutant et bonnes pratiques avant d'utiliser le P2P.\n\nLire le guide: https://cizaonline.com/blog/creer-compte-binance-rdc"
  },
  {
    articleSlug: "acheter-usdt-rdc-binance-p2p",
    articleUrl: `${siteUrl}/blog/acheter-usdt-rdc-binance-p2p`,
    title: "Acheter USDT en RDC avec Binance P2P",
    instagram:
      "Acheter USDT avec Binance P2P demande de la methode: comparer les annonces, verifier le vendeur, lire les conditions, garder les preuves Mobile Money et ne jamais confirmer trop vite. Guide CizaOnline: https://cizaonline.com/blog/acheter-usdt-rdc-binance-p2p #USDT #BinanceP2P #RDC",
    tiktok:
      "USDT + Binance P2P en RDC: ne choisis pas seulement le prix le plus bas. Regarde la reputation, les limites, les conditions et les preuves Mobile Money. Guide complet: https://cizaonline.com/blog/acheter-usdt-rdc-binance-p2p",
    x:
      "Guide CizaOnline: acheter USDT en RDC avec Binance P2P sans bruler les etapes. Annonces, vendeurs, Mobile Money et preuves. https://cizaonline.com/blog/acheter-usdt-rdc-binance-p2p #USDT #BinanceP2P",
    telegram:
      "Guide CizaOnline: Acheter USDT en RDC avec Binance P2P.\n\nPoints cles: comparer les annonces, verifier le vendeur, respecter les conditions, conserver les preuves Mobile Money et commencer petit.\n\nLire: https://cizaonline.com/blog/acheter-usdt-rdc-binance-p2p"
  },
  {
    articleSlug: "bitcoin-ou-usdt-difference-debutant",
    articleUrl: `${siteUrl}/blog/bitcoin-ou-usdt-difference-debutant`,
    title: "Bitcoin ou USDT : quelle difference pour debuter ?",
    instagram:
      "Bitcoin et USDT ne servent pas au meme usage. Bitcoin est volatil. USDT est un stablecoin lie au dollar. Avant d'acheter, comprends la difference, le risque et l'objectif. Guide CizaOnline: https://cizaonline.com/blog/bitcoin-ou-usdt-difference-debutant #Bitcoin #USDT #CryptoDebutant",
    tiktok:
      "Bitcoin ou USDT ? Si tu debutes, ne melange pas tout. Bitcoin bouge beaucoup. USDT sert souvent a transferer ou garder une valeur stable. Explication simple: https://cizaonline.com/blog/bitcoin-ou-usdt-difference-debutant",
    x:
      "Bitcoin ou USDT pour debuter ? CizaOnline explique volatilite, stablecoin, usage et risques dans un guide simple. https://cizaonline.com/blog/bitcoin-ou-usdt-difference-debutant #Bitcoin #USDT",
    telegram:
      "Nouveau guide: Bitcoin ou USDT, quelle difference pour debuter ?\n\nBitcoin est volatil. USDT est un stablecoin. Le bon choix depend de l'objectif, du risque et du niveau de comprehension.\n\nLire: https://cizaonline.com/blog/bitcoin-ou-usdt-difference-debutant"
  },
  {
    articleSlug: "eviter-arnaques-crypto-whatsapp-telegram",
    articleUrl: `${siteUrl}/blog/eviter-arnaques-crypto-whatsapp-telegram`,
    title: "Comment eviter les arnaques crypto sur WhatsApp et Telegram",
    instagram:
      "Faux agents Binance, groupes Telegram trop prometteurs, liens suspects, gains garantis: ce sont des signaux d'alerte. La securite commence avant la transaction. Guide CizaOnline: https://cizaonline.com/blog/eviter-arnaques-crypto-whatsapp-telegram #SecuriteCrypto #CryptoRDC",
    tiktok:
      "Si quelqu'un te promet un gain garanti en crypto sur WhatsApp ou Telegram, ralentis. Verifie le lien, ne partage aucun code et ne sors pas des plateformes officielles. Guide: https://cizaonline.com/blog/eviter-arnaques-crypto-whatsapp-telegram",
    x:
      "Arnaques crypto sur WhatsApp et Telegram: faux supports, liens suspects, promesses de gains. Nouveau guide CizaOnline. https://cizaonline.com/blog/eviter-arnaques-crypto-whatsapp-telegram #SecuriteCrypto",
    telegram:
      "A lire: Comment eviter les arnaques crypto sur WhatsApp et Telegram.\n\nLe guide explique les faux supports, les liens suspects, les promesses de gains et les bons reflexes de verification.\n\nLire: https://cizaonline.com/blog/eviter-arnaques-crypto-whatsapp-telegram"
  },
  {
    articleSlug: "se-former-avant-investir-crypto-afrique",
    articleUrl: `${siteUrl}/blog/se-former-avant-investir-crypto-afrique`,
    title: "Pourquoi se former avant d'investir en crypto en Afrique",
    instagram:
      "Avant d'investir en crypto, forme-toi. Comprendre les mots, les wallets, les reseaux, les frais et les risques evite beaucoup d'erreurs. Nouveau guide CizaOnline: https://cizaonline.com/blog/se-former-avant-investir-crypto-afrique #FormationCrypto #CryptoAfrique #CizaOnline",
    tiktok:
      "La meilleure premiere transaction crypto, c'est souvent la formation. Avant d'acheter, comprends les reseaux, les frais, la securite et le risque. Guide: https://cizaonline.com/blog/se-former-avant-investir-crypto-afrique",
    x:
      "Pourquoi se former avant d'investir en crypto en Afrique ? Vocabulaire, securite, gestion du risque et discipline. Guide CizaOnline: https://cizaonline.com/blog/se-former-avant-investir-crypto-afrique #FormationCrypto",
    telegram:
      "Nouveau guide CizaOnline: Pourquoi se former avant d'investir en crypto en Afrique.\n\nObjectif: comprendre avant d'agir, securiser ses comptes, eviter les promesses rapides et construire une methode.\n\nLire: https://cizaonline.com/blog/se-former-avant-investir-crypto-afrique"
  }
];

const allMetricoolSocialPosts = [...metricoolSocialPosts, ...longSeoMetricoolSocialPosts];

export function getCategoryBySlug(slug) {
  return blogCategories.find((category) => category.slug === slug);
}

export function getArticlesByCategory(slug) {
  return blogArticles.filter((article) => article.category === slug);
}

export function getMetricoolSocialPosts() {
  return allMetricoolSocialPosts.flatMap((item) => [
    {
      articleTitle: item.title,
      articleUrl: item.articleUrl,
      platform: "Instagram",
      text: item.instagram
    },
    {
      articleTitle: item.title,
      articleUrl: item.articleUrl,
      platform: "TikTok",
      text: item.tiktok
    },
    {
      articleTitle: item.title,
      articleUrl: item.articleUrl,
      platform: "X/Twitter",
      text: item.x
    },
    {
      articleTitle: item.title,
      articleUrl: item.articleUrl,
      platform: "Telegram",
      text: item.telegram
    }
  ]);
}

export function buildBlogSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Blog Crypto RDC CizaOnline",
    url: `${siteUrl}/blog`,
    inLanguage: "fr",
    description:
      "Guides pratiques CizaOnline sur Binance, Bitcoin, USDT, Mobile Money et securite crypto en RDC et en Afrique francophone.",
    publisher: {
      "@type": "Organization",
      name: "CizaOnline",
      url: siteUrl
    },
    blogPost: blogArticles.map((article) => ({
      "@type": "BlogPosting",
      headline: article.title,
      url: `${siteUrl}${article.href}`,
      datePublished: article.publishedAt,
      dateModified: article.publishedAt,
      description: article.description,
      keywords: article.keywords.join(", ")
    }))
  };
}

export function buildCategorySchema(category, articles) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${category.label} | Blog CizaOnline`,
    url: `${siteUrl}/blog/categories/${category.slug}`,
    inLanguage: "fr",
    description: category.description,
    hasPart: articles.map((article) => ({
      "@type": "BlogPosting",
      headline: article.title,
      url: `${siteUrl}${article.href}`,
      description: article.description
    }))
  };
}
