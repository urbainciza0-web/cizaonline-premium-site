import { NextResponse } from "next/server";
import {
  createMarketingPublication,
  isMarketingAdminAuthorized,
  listAutomationPayloads,
  listMarketingAutomation
} from "../../lib/marketingAutomationStore";

function getToken(request) {
  const { searchParams } = new URL(request.url);
  return request.headers.get("x-ciza-admin-token") || searchParams.get("token");
}

function unauthorized() {
  return NextResponse.json({ error: "Acces admin requis." }, { status: 401 });
}

export async function GET(request) {
  if (!isMarketingAdminAuthorized(getToken(request))) {
    return unauthorized();
  }

  const { searchParams } = new URL(request.url);
  const format = searchParams.get("format");

  if (format === "automation") {
    return NextResponse.json({
      generatedAt: new Date().toISOString(),
      payloads: listAutomationPayloads()
    });
  }

  return NextResponse.json(listMarketingAutomation());
}

export async function POST(request) {
  if (!isMarketingAdminAuthorized(getToken(request))) {
    return unauthorized();
  }

  try {
    const payload = await request.json();
    const result = await createMarketingPublication(payload);
    return NextResponse.json({ ok: true, ...result });
  } catch (error) {
    console.error("Marketing automation publication failed", error);
    return NextResponse.json({ error: "Publication marketing invalide." }, { status: 400 });
  }
}
