import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";
import {
  blogCategories,
  buildCategorySchema,
  getArticlesByCategory,
  getCategoryBySlug,
  siteUrl
} from "../../../lib/blogContent";

export function generateStaticParams() {
  return blogCategories.map((category) => ({ category: category.slug }));
}

export async function generateMetadata({ params }) {
  const { category: categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);

  if (!category) {
    return {};
  }

  return {
    title: `${category.label} | Blog Crypto CizaOnline`,
    description: category.description,
    alternates: { canonical: `/blog/categories/${category.slug}` },
    openGraph: {
      title: `${category.label} | Blog CizaOnline`,
      description: category.description,
      url: `${siteUrl}/blog/categories/${category.slug}`,
      type: "website",
      locale: "fr_FR"
    }
  };
}

export default async function BlogCategoryPage({ params }) {
  const { category: categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);

  if (!category) {
    notFound();
  }

  const articles = getArticlesByCategory(category.slug);
  const categorySchema = buildCategorySchema(category, articles);

  return (
    <main className="min-h-screen bg-ciza-black px-4 pb-20 pt-28 text-ciza-ivory sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(categorySchema) }}
      />
      <section className="mx-auto max-w-7xl">
        <Link href="/blog" className="text-sm font-black text-ciza-gold">
          Blog CizaOnline
        </Link>
        <p className="mt-6 inline-flex rounded-full border border-ciza-gold/25 bg-ciza-gold/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-ciza-gold">
          Categorie SEO
        </p>
        <h1 className="mt-6 font-display text-4xl font-black leading-tight text-white sm:text-5xl">
          {category.label}
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-white/70">{category.description}</p>
      </section>

      <section className="mx-auto mt-12 max-w-7xl">
        <div className="grid gap-5 md:grid-cols-3">
          {articles.map((article) => (
            <article key={article.href} className="rounded-[1.25rem] border border-ciza-gold/16 bg-ciza-graphite p-5 shadow-panel">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-ciza-gold">{article.tag}</p>
              <h2 className="mt-4 font-display text-2xl font-black leading-tight text-white">{article.title}</h2>
              <p className="mt-4 text-sm leading-7 text-white/64">{article.description}</p>
              <Link href={article.href} className="mt-6 inline-flex items-center gap-2 text-sm font-black text-ciza-gold">
                Lire le guide <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
