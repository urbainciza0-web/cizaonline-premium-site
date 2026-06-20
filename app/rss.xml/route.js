import { blogArticles, getArticleImageUrl, siteUrl } from "../lib/blogContent.js";

export const dynamic = "force-static";

function escapeXml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function formatRssDate(value) {
  return new Date(`${value}T08:00:00.000Z`).toUTCString();
}

function buildRssFeed() {
  const sortedArticles = [...blogArticles].sort((a, b) => String(b.publishedAt).localeCompare(String(a.publishedAt)));
  const latestDate = sortedArticles[0]?.publishedAt || "2026-06-19";

  const items = sortedArticles
    .map((article) => {
      const url = `${siteUrl}${article.href}`;
      const categories = [article.tag, article.category, ...(article.keywords || [])];
      const imageUrl = getArticleImageUrl(article);

      return `
    <item>
      <title>${escapeXml(article.title)}</title>
      <link>${escapeXml(url)}</link>
      <guid isPermaLink="true">${escapeXml(url)}</guid>
      <description>${escapeXml(article.description)}</description>
      <pubDate>${formatRssDate(article.publishedAt)}</pubDate>
      <enclosure url="${escapeXml(imageUrl)}" length="1200000" type="image/png" />
      <media:content url="${escapeXml(imageUrl)}" medium="image" type="image/png" width="1080" height="1350" />
      ${categories.map((category) => `<category>${escapeXml(category)}</category>`).join("\n      ")}
    </item>`;
    })
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:media="http://search.yahoo.com/mrss/">
  <channel>
    <title>CizaOnline Blog Crypto RDC</title>
    <link>${siteUrl}/blog</link>
    <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml" />
    <description>Guides CizaOnline sur Binance RDC, USDT, Mobile Money, Bitcoin, securite crypto et formation crypto en Afrique francophone.</description>
    <language>fr</language>
    <lastBuildDate>${formatRssDate(latestDate)}</lastBuildDate>
    <generator>CizaOnline</generator>${items}
  </channel>
</rss>`;
}

export function GET() {
  return new Response(buildRssFeed(), {
    headers: {
      "content-type": "application/rss+xml; charset=utf-8",
      "cache-control": "no-store, max-age=0, s-maxage=0, must-revalidate"
    }
  });
}
