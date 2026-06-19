import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import LeadCaptureForm from "../components/LeadCaptureForm";

const siteUrl = "https://cizaonline.com";
const whatsappUrl = "https://wa.me/243834783307?text=Bonjour%20CizaOnline%2C%20je%20viens%20du%20blog%20et%20je%20veux%20un%20accompagnement%20crypto.";

export default function ArticleLayout({ article }) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.intro,
    url: `${siteUrl}/${article.slug}`,
    inLanguage: "fr",
    author: {
      "@type": "Organization",
      name: "CizaOnline",
      url: siteUrl
    },
    publisher: {
      "@type": "Organization",
      name: "CizaOnline",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/favicon.svg`
      }
    },
    articleSection: article.tag
  };

  return (
    <main className="min-h-screen bg-ciza-black px-4 pb-24 pt-28 text-ciza-ivory sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <article className="mx-auto max-w-4xl">
        <Link href="/blog" className="text-sm font-black text-ciza-gold">Blog CizaOnline</Link>
        <p className="mt-6 inline-flex rounded-full border border-ciza-gold/25 bg-ciza-gold/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-ciza-gold">
          {article.tag}
        </p>
        <h1 className="mt-6 font-display text-4xl font-black leading-tight text-white sm:text-5xl">
          {article.title}
        </h1>
        <p className="mt-5 text-lg leading-8 text-white/70">{article.intro}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="premium-button inline-flex min-h-[3.25rem] items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-black text-black">
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
          <Link href="/#inscription" className="inline-flex min-h-[3.25rem] items-center justify-center gap-2 rounded-full border border-ciza-gold/25 bg-white/[0.055] px-6 py-3 text-sm font-bold text-white hover:bg-ciza-gold/10">
            Inscription CizaOnline
            <ArrowRight className="h-4 w-4 text-ciza-gold" />
          </Link>
        </div>

        <div className="mt-10 space-y-8 leading-8 text-white/68">
          {article.sections.map((section) => (
            <section key={section.title} className="rounded-[1.5rem] border border-white/10 bg-white/[0.025] p-5 sm:p-6">
              <h2 className="font-display text-2xl font-black leading-tight text-white">{section.title}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="mt-3">{paragraph}</p>
              ))}
            </section>
          ))}
        </div>

        <LeadCaptureForm
          source={article.slug}
          title="Recevoir un accompagnement apres cette lecture"
          description="Tu veux appliquer ce guide avec un cadre plus clair ? Laisse tes coordonnees et CizaOnline te recontactera."
          className="mt-12"
        />
      </article>
    </main>
  );
}
