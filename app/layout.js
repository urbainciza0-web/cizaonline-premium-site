import "./globals.css";
import CizaChatbot from "./components/CizaChatbot";

const siteUrl = "https://cizaonline.com";
const siteName = "CizaOnline";
const seoTitle = "CizaOnline | Formation crypto premium en Afrique francophone";
const seoDescription =
  "CizaOnline accompagne les débutants, investisseurs et entreprises d'Afrique francophone avec des formations crypto, Binance, USDT, wallets, P2P et sécurité Web3.";
const ogImage = "/images/ciza-hero.png";

const seoNavigationLinks = [
  { label: "Bitcoin RDC", href: "/acheter-bitcoin-rdc" },
  { label: "USDT Mobile Money", href: "/acheter-usdt-mobile-money" },
  { label: "Binance RDC", href: "/guide-binance-rdc" },
  { label: "Formation Crypto", href: "/formation-crypto-afrique-francophone" },
  { label: "Blog", href: "/blog" },
  { label: "Market Pulse", href: "/actualites-bitcoin" },
  { label: "Premium 6$", href: "/espace-premium" },
  { label: "Comparatif", href: "/comparatif-crypto-rdc" },
  { label: "Témoignages", href: "/temoignages" },
  { label: "FAQ", href: "/faq-cizaonline" },
  { label: "Confidentialité", href: "/politique-de-confidentialite" },
  { label: "Conditions", href: "/conditions-utilisation" },
  { label: "Mentions", href: "/mentions-legales" }
];

const legalLinks = [
  { label: "Politique de confidentialite", href: "/politique-de-confidentialite" },
  { label: "Conditions d'utilisation", href: "/conditions-utilisation" },
  { label: "Mentions legales", href: "/mentions-legales" }
];

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteName,
  url: siteUrl,
  logo: `${siteUrl}/favicon.svg`,
  image: `${siteUrl}${ogImage}`,
  description: seoDescription,
  email: "contact@cizaonline.com",
  telephone: "+243834783307",
  sameAs: ["https://t.me/+qWeBitmp1OcxMjI0", "https://wa.me/243834783307"],
  areaServed: [
    {
      "@type": "Place",
      name: "Afrique francophone"
    },
    {
      "@type": "Country",
      name: "République démocratique du Congo"
    }
  ],
  knowsAbout: ["Crypto-monnaies", "Binance", "USDT", "Wallet crypto", "P2P", "Sécurité Web3"]
};

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Formation crypto CizaOnline",
  description:
    "Formation crypto débutant à intermédiaire pour apprendre Binance, l'achat et la vente via mobile money, la sécurité wallet, le P2P, l'USDT et les bases du trading responsable.",
  provider: {
    "@type": "Organization",
    name: siteName,
    sameAs: siteUrl
  },
  educationalLevel: "Débutant à intermédiaire",
  inLanguage: "fr",
  teaches: ["Sécurité crypto", "Binance", "Wallet", "Stablecoins", "P2P", "Gestion du risque"],
  audience: {
    "@type": "Audience",
    audienceType: "Débutants crypto, entrepreneurs et entreprises d'Afrique francophone"
  },
  offers: [
    {
      "@type": "Offer",
      name: "Formation crypto sur rendez-vous",
      price: "50",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: `${siteUrl}/#tarifs`
    },
    {
      "@type": "Offer",
      name: "Accompagnement Entreprise",
      price: "1000",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: `${siteUrl}/#tarifs`
    }
  ]
};

export const metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  title: {
    default: seoTitle,
    template: `%s | ${siteName}`
  },
  description: seoDescription,
  keywords: [
    "formation crypto Afrique",
    "formation Binance RDC",
    "CizaOnline",
    "crypto Afrique francophone",
    "USDT Mobile Money",
    "wallet crypto",
    "P2P Binance",
    "sécurité crypto",
    "accompagnement crypto entreprise",
    "blog crypto RDC",
    "Bitcoin Kinshasa",
    "crypto Goma",
    "crypto Lubumbashi"
  ],
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  category: "Education crypto",
  alternates: {
    canonical: "/"
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" }
    ],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg"
  },
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName,
    locale: "fr_FR",
    title: seoTitle,
    description: seoDescription,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "CizaOnline, formation crypto premium pour l'Afrique francophone"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: seoTitle,
    description: seoDescription,
    images: [ogImage]
  }
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#050505"
};

function SeoNavigation() {
  return (
    <nav
      aria-label="Navigation SEO CizaOnline"
      className="fixed inset-x-2 bottom-3 z-40 mx-auto flex max-w-6xl gap-2 overflow-x-auto rounded-2xl border border-ciza-gold/18 bg-black/76 p-2 text-xs font-black text-white/72 shadow-panel backdrop-blur-2xl sm:bottom-4 sm:rounded-full sm:px-3"
    >
      {seoNavigationLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="shrink-0 rounded-full border border-white/8 bg-white/[0.045] px-3 py-2 transition hover:border-ciza-gold/45 hover:bg-ciza-gold/10 hover:text-ciza-gold"
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}

function LegalFooter() {
  return (
    <footer className="border-t border-ciza-gold/14 bg-ciza-black px-4 pb-28 pt-8 text-ciza-ivory sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 rounded-[1.25rem] border border-ciza-gold/16 bg-white/[0.025] p-5 shadow-panel sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-lg font-black text-white">CizaOnline legal</p>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-white/52">
            Contenu educatif crypto pour l&apos;Afrique francophone. Pas de conseil financier personnalise.
          </p>
        </div>
        <nav aria-label="Liens legaux CizaOnline" className="flex flex-col gap-2 text-sm font-bold text-white/58 sm:flex-row sm:flex-wrap sm:justify-end">
          {legalLinks.map((link) => (
            <a key={link.href} href={link.href} className="rounded-full border border-ciza-gold/18 px-4 py-2 transition hover:border-ciza-gold/50 hover:text-ciza-gold">
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
        />
        <div className="noise-layer" />
        <SeoNavigation />
        {children}
        <LegalFooter />
        <CizaChatbot />
      </body>
    </html>
  );
}
