import { NextResponse } from "next/server";
import { saveProspect } from "../../lib/prospectsStore";

const MAX_MESSAGE_LENGTH = 1200;
const MAX_FIELD_LENGTH = 180;
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 4;

const ipHits = new Map();

function cleanText(value, maxLength = MAX_FIELD_LENGTH) {
  return String(value || "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, maxLength);
}

function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function getClientIp(request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  return forwardedFor?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "unknown";
}

function isRateLimited(ip) {
  const now = Date.now();
  const hits = (ipHits.get(ip) || []).filter((timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS);
  hits.push(now);
  ipHits.set(ip, hits);
  return hits.length > RATE_LIMIT_MAX;
}

export async function POST(request) {
  try {
    const ip = getClientIp(request);

    if (isRateLimited(ip)) {
      return NextResponse.json({ error: "Trop de demandes. Reessayez dans quelques instants." }, { status: 429 });
    }

    const payload = await request.json();

    if (cleanText(payload.company)) {
      return NextResponse.json({ ok: true });
    }

    const submittedAfterMs = Number(payload.submittedAfterMs || 0);

    if (!Number.isFinite(submittedAfterMs) || submittedAfterMs < 2500) {
      return NextResponse.json({ error: "Soumission trop rapide." }, { status: 400 });
    }

    const prospect = {
      name: cleanText(payload.name),
      email: cleanText(payload.email).toLowerCase(),
      whatsapp: cleanText(payload.whatsapp),
      interest: cleanText(payload.interest),
      message: cleanText(payload.message, MAX_MESSAGE_LENGTH),
      source: cleanText(payload.source || "Formulaire"),
      submittedAt: new Date().toISOString()
    };

    if (!prospect.name || !isEmail(prospect.email) || !prospect.whatsapp || !prospect.interest) {
      return NextResponse.json({ error: "Veuillez completer les champs obligatoires." }, { status: 400 });
    }

    console.log("Prospect API received", {
      name: prospect.name,
      whatsapp: prospect.whatsapp,
      email: prospect.email,
      interest: prospect.interest,
      message: prospect.message
    });

    const delivery = await saveProspect(prospect);

    console.log("Prospect API stored", {
      mode: delivery.mode,
      source: prospect.source,
      submittedAt: prospect.submittedAt
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Prospect submission failed", error);
    return NextResponse.json({ error: "La demande n'a pas pu etre envoyee. Veuillez reessayer." }, { status: 500 });
  }
}
