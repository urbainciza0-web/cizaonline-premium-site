import { NextResponse } from "next/server";

const canonicalHost = "cizaonline.com";
const previewNoIndexHeader = "noindex, nofollow, noarchive, nosnippet";

function isVercelPreviewHost(hostname) {
  return hostname.endsWith(".vercel.app");
}

export function middleware(request) {
  const url = request.nextUrl.clone();
  const hostname = request.headers.get("host")?.split(":")[0]?.toLowerCase() || "";

  if (hostname === `www.${canonicalHost}`) {
    url.hostname = canonicalHost;
    url.protocol = "https";
    return NextResponse.redirect(url, 308);
  }

  const response = NextResponse.next();

  if (isVercelPreviewHost(hostname)) {
    response.headers.set("X-Robots-Tag", previewNoIndexHeader);
  }

  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|favicon.svg|site.webmanifest).*)"
  ]
};
