import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://cizaonline.com"),
  title: "CizaOnline | Crypto premium pour l'Afrique",
  description:
    "CizaOnline forme et connecte une nouvelle generation d'investisseurs crypto africains avec une experience premium, claire et securisee.",
  openGraph: {
    title: "CizaOnline | Crypto premium pour l'Afrique",
    description:
      "Formation crypto, communaute privee, signaux educatifs et inscription WhatsApp/Telegram.",
    images: ["/images/ciza-hero.png"]
  }
};

export const viewport = {
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <div className="noise-layer" />
        {children}
      </body>
    </html>
  );
}
