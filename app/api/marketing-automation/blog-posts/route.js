import { NextResponse } from "next/server";
import { getMetricoolSocialPosts } from "../../../lib/blogContent";
import { isMarketingAdminAuthorized } from "../../../lib/marketingAutomationStore";

function getToken(request) {
  const { searchParams } = new URL(request.url);
  return request.headers.get("x-ciza-admin-token") || searchParams.get("token");
}

export async function GET(request) {
  if (!isMarketingAdminAuthorized(getToken(request))) {
    return NextResponse.json({ error: "Acces admin requis." }, { status: 401 });
  }

  return NextResponse.json({
    generatedAt: new Date().toISOString(),
    source: "CizaOnline blog SEO",
    destination: "Metricool",
    posts: getMetricoolSocialPosts()
  });
}
