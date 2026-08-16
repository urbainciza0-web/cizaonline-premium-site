import { NextResponse } from "next/server";

const previewNoIndexHeader = "noindex, nofollow, noarchive, nosnippet";

function isVercelPreviewHost(hostname) {
  return hostname.endsWith(".vercel.app");
}

export function middleware(request) {
  const hostname = request.headers.get("host")?.split(":")[0]?.toLowerCase() || "";
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
