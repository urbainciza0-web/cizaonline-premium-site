import { notFound } from "next/navigation";
import ArticleLayout from "../ArticleLayout";
import { getArticleImageUrl } from "../../lib/blogContent.js";
import { getLongSeoArticleBySlug, longSeoArticleSummaries } from "../../lib/longSeoArticles";

export function generateStaticParams() {
  return longSeoArticleSummaries.map((article) => ({
    slug: article.href.replace("/blog/", "")
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = getLongSeoArticleBySlug(slug);

  if (!article) {
    return {};
  }

  const imageUrl = getArticleImageUrl(slug);

  return {
    title: `${article.title} | CizaOnline`,
    description: article.intro,
    keywords: article.keywords,
    alternates: { canonical: `/${article.slug}` },
    openGraph: {
      title: `${article.title} | CizaOnline`,
      description: article.intro,
      url: `https://cizaonline.com/${article.slug}`,
      type: "article",
      locale: "fr_FR",
      images: [
        {
          url: imageUrl,
          width: 1080,
          height: 1350,
          alt: article.title
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.intro,
      images: [imageUrl]
    }
  };
}

export default async function LongSeoBlogArticlePage({ params }) {
  const { slug } = await params;
  const article = getLongSeoArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return <ArticleLayout article={article} />;
}
