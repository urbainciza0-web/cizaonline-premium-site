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

export const blogArticles = [
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
  }
];

export function getCategoryBySlug(slug) {
  return blogCategories.find((category) => category.slug === slug);
}

export function getArticlesByCategory(slug) {
  return blogArticles.filter((article) => article.category === slug);
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
