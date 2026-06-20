import { ImageResponse } from "next/og";
import { getBlogArticleBySlug } from "../../lib/blogContent.js";

export const runtime = "edge";

function splitTitle(title) {
  const words = String(title || "CizaOnline").split(" ");
  const lines = [];
  let currentLine = "";

  for (const word of words) {
    const nextLine = `${currentLine} ${word}`.trim();

    if (nextLine.length > 24 && currentLine) {
      lines.push(currentLine);
      currentLine = word;
    } else {
      currentLine = nextLine;
    }
  }

  if (currentLine) {
    lines.push(currentLine);
  }

  return lines.slice(0, 5);
}

export async function GET(_request, { params }) {
  const { slug } = await params;
  const article = getBlogArticleBySlug(slug);

  if (!article) {
    return new Response("Image not found", { status: 404 });
  }

  const titleLines = splitTitle(article.title);

  return new ImageResponse(
    (
      <div
        style={{
          width: "1080px",
          height: "1350px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "88px",
          color: "#fff8e7",
          background:
            "radial-gradient(circle at 20% 12%, rgba(214,173,96,.28), transparent 32%), linear-gradient(145deg, #050505 0%, #111111 54%, #211808 100%)",
          fontFamily: "Arial, sans-serif"
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div
            style={{
              display: "flex",
              border: "2px solid rgba(214,173,96,.65)",
              borderRadius: "999px",
              padding: "16px 24px",
              color: "#d6ad60",
              fontSize: 28,
              fontWeight: 800,
              letterSpacing: 2,
              textTransform: "uppercase"
            }}
          >
            {article.tag}
          </div>
          <div style={{ color: "#d6ad60", fontSize: 34, fontWeight: 900 }}>CizaOnline</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
          {titleLines.map((line) => (
            <div key={line} style={{ fontSize: 86, lineHeight: 0.95, fontWeight: 900, letterSpacing: -1 }}>
              {line}
            </div>
          ))}
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "30px",
            borderTop: "2px solid rgba(214,173,96,.42)",
            paddingTop: "36px"
          }}
        >
          <div style={{ fontSize: 35, lineHeight: 1.28, color: "rgba(255,248,231,.82)" }}>
            {article.description}
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ color: "#d6ad60", fontSize: 31, fontWeight: 800 }}>Guide crypto RDC</div>
            <div style={{ color: "rgba(255,248,231,.76)", fontSize: 28 }}>cizaonline.com/blog</div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1080,
      height: 1350
    }
  );
}
