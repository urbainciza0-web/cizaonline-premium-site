"use client";

import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";
import { useMemo, useState } from "react";

export default function BlogSearch({ articles, categories }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");

  const filteredArticles = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return articles.filter((article) => {
      const matchesCategory = category === "all" || article.category === category;
      const searchableText = [article.title, article.description, article.tag, ...(article.keywords || [])]
        .join(" ")
        .toLowerCase();
      const matchesQuery = !normalizedQuery || searchableText.includes(normalizedQuery);

      return matchesCategory && matchesQuery;
    });
  }, [articles, category, query]);

  return (
    <section className="mx-auto mt-16 max-w-7xl" aria-labelledby="blog-search-title">
      <div className="rounded-[1.5rem] border border-ciza-gold/16 bg-white/[0.025] p-5 shadow-panel">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-ciza-gold">Recherche SEO</p>
            <h2 id="blog-search-title" className="mt-3 font-display text-3xl font-black text-white">
              Explorer les guides Crypto et Binance
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_14rem] lg:min-w-[34rem]">
            <label className="relative block">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ciza-gold" />
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Rechercher Bitcoin, USDT, Binance..."
                className="min-h-12 w-full rounded-full border border-ciza-gold/18 bg-black/30 py-3 pl-11 pr-4 text-sm font-bold text-white outline-none placeholder:text-white/36 focus:border-ciza-gold"
              />
            </label>
            <select
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              className="min-h-12 rounded-full border border-ciza-gold/18 bg-black/30 px-4 text-sm font-bold text-white outline-none focus:border-ciza-gold"
            >
              <option value="all">Toutes categories</option>
              {categories.map((item) => (
                <option key={item.slug} value={item.slug}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {categories.map((item) => (
            <Link
              key={item.slug}
              href={`/blog/categories/${item.slug}`}
              className="rounded-full border border-ciza-gold/18 bg-black/24 px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-white/68 transition hover:border-ciza-gold/50 hover:text-ciza-gold"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-6 grid gap-5 md:grid-cols-3">
        {filteredArticles.map((article) => (
          <article key={article.href} className="rounded-[1.25rem] border border-ciza-gold/16 bg-ciza-graphite p-5 shadow-panel">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-ciza-gold">{article.tag}</p>
            <h3 className="mt-4 font-display text-2xl font-black leading-tight text-white">{article.title}</h3>
            <p className="mt-4 text-sm leading-7 text-white/64">{article.description}</p>
            <Link href={article.href} className="mt-6 inline-flex items-center gap-2 text-sm font-black text-ciza-gold">
              Lire le guide <ArrowRight className="h-4 w-4" />
            </Link>
          </article>
        ))}
        {filteredArticles.length === 0 ? (
          <div className="rounded-[1.25rem] border border-ciza-gold/16 bg-ciza-graphite p-5 text-sm leading-7 text-white/64 md:col-span-3">
            Aucun guide ne correspond a cette recherche.
          </div>
        ) : null}
      </div>
    </section>
  );
}
