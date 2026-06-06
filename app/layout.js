import "./globals.css";

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
  { label: "FAQ", href: "/faq-cizaonline" }
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

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className="h-7 w-7 sm:h-8 sm:w-8">
      <path
        fill="currentColor"
        d="M16.04 3.2A12.74 12.74 0 0 0 5.23 22.68L3.6 28.8l6.27-1.64A12.72 12.72 0 1 0 16.04 3.2Zm0 2.55a10.17 10.17 0 0 1 8.69 15.47 10.18 10.18 0 0 1-12.98 3.55l-.45-.22-3.73.98.99-3.64-.24-.47A10.18 10.18 0 0 1 16.04 5.75Zm-4.28 4.65c-.22-.49-.45-.5-.66-.51h-.56c-.2 0-.52.08-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.07 3.3 5.11 4.49 2.53.99 3.04.79 3.59.74.55-.05 1.78-.73 2.03-1.43.25-.7.25-1.3.17-1.43-.07-.13-.27-.2-.57-.35-.3-.15-1.78-.88-2.05-.98-.27-.1-.47-.15-.67.15-.2.3-.77.98-.94 1.18-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.66-1.6-.91-2.18Z"
      />
    </svg>
  );
}

function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-24 right-3 z-50 flex items-end gap-3 sm:bottom-28 sm:right-5">
      <span className="pointer-events-none relative hidden rounded-2xl border border-ciza-gold/20 bg-black/85 px-4 py-2 text-xs font-black text-white shadow-panel backdrop-blur-xl after:absolute after:right-[-6px] after:top-1/2 after:h-3 after:w-3 after:-translate-y-1/2 after:rotate-45 after:border-r after:border-t after:border-ciza-gold/20 after:bg-black/85 min-[380px]:block">
        Besoin d'aide ?
      </span>
      <a
        href="https://wa.me/243834783307?text=Bonjour%20CizaOnline%2C%20je%20veux%20des%20informations%20sur%20la%20formation%20crypto."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Ouvrir WhatsApp Business CizaOnline"
        className="group relative grid h-14 w-14 shrink-0 place-items-center rounded-full border border-white/20 bg-[#25D366] text-white shadow-[0_14px_38px_rgba(0,0,0,0.34)] transition duration-300 ease-out hover:-translate-y-1 hover:scale-105 hover:shadow-[0_18px_48px_rgba(37,211,102,0.28)] focus:outline-none focus:ring-2 focus:ring-ciza-gold/70 focus:ring-offset-2 focus:ring-offset-ciza-black sm:h-16 sm:w-16"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366]" />
        <span className="absolute inset-[-5px] rounded-full border border-ciza-gold/20 opacity-70 transition duration-300 group-hover:opacity-100" />
        <span className="relative grid h-10 w-10 place-items-center rounded-full bg-white/10 sm:h-11 sm:w-11">
          <WhatsAppIcon />
        </span>
      </a>
    </div>
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
        <FloatingWhatsApp />
        <SeoNavigation />
        {children}
      </body>
    </html>
  );
}
