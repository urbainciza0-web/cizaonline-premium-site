import "./globals.css";

const siteUrl = "https://cizaonline.com";
const siteName = "CizaOnline";
const seoTitle = "CizaOnline | Formation crypto premium en Afrique francophone";
const seoDescription =
  "CizaOnline accompagne les débutants, investisseurs et entreprises d'Afrique francophone avec des formations crypto, Binance, USDT, wallets, P2P et sécurité Web3.";
const ogImage = "/images/ciza-hero.png";

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
    "accompagnement crypto entreprise"
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
        {children}
      </body>
    </html>
  );
}
