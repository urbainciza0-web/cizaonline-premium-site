export const MARKETING_CATEGORIES = [
  "Actualites crypto",
  "Binance RDC",
  "Formation crypto",
  "Temoignages clients",
  "Motivation financiere"
];

export const MARKETING_PLATFORMS = ["Facebook", "Telegram", "X", "LinkedIn", "WhatsApp Channel"];

export const PUBLICATION_TEMPLATES = [
  {
    id: "crypto-news-brief",
    category: "Actualites crypto",
    title: "Brief actualite crypto",
    hook: "Ce qui change aujourd'hui dans la crypto en RDC",
    body: "Resume simple de l'actualite, impact pour les debutants, conseil de prudence, puis invitation a se faire accompagner.",
    callToAction: "Contactez CizaOnline sur WhatsApp pour comprendre avant d'investir."
  },
  {
    id: "binance-rdc-guide",
    category: "Binance RDC",
    title: "Guide Binance RDC",
    hook: "Vous voulez utiliser Binance depuis la RDC ?",
    body: "Expliquer une etape precise: inscription, verification, securite, achat USDT ou retrait. Garder un ton educatif.",
    callToAction: "Demandez l'accompagnement CizaOnline avant de faire votre premiere transaction."
  },
  {
    id: "training-tip",
    category: "Formation crypto",
    title: "Conseil formation crypto",
    hook: "Une erreur que beaucoup de debutants font en crypto",
    body: "Identifier l'erreur, expliquer le risque, donner une bonne pratique simple et inviter a la formation.",
    callToAction: "Rejoignez la formation CizaOnline pour apprendre avec methode."
  },
  {
    id: "client-proof",
    category: "Temoignages clients",
    title: "Temoignage client",
    hook: "Avant l'accompagnement, il ne savait pas par ou commencer",
    body: "Presenter le probleme, l'accompagnement, le resultat obtenu et une lecon utile pour les nouveaux prospects.",
    callToAction: "Ecrivez a CizaOnline pour etre accompagne pas a pas."
  },
  {
    id: "financial-motivation",
    category: "Motivation financiere",
    title: "Motivation financiere",
    hook: "La liberte financiere commence par une decision informee",
    body: "Message court de motivation, relie a l'education financiere, la discipline et la prudence dans les actifs numeriques.",
    callToAction: "Construisez vos bases avec CizaOnline."
  }
];

const INITIAL_PUBLICATIONS = [
  {
    id: "seed-binance-rdc-usdt",
    scheduledFor: "2026-06-24T09:00",
    category: "Binance RDC",
    platform: "Facebook",
    status: "Planifie",
    title: "Comment acheter des USDT en RDC",
    caption:
      "Guide simple pour comprendre les etapes avant d'acheter des USDT. Ne vous lancez pas sans verifier la securite du compte et la methode de paiement.",
    callToAction: "Contactez CizaOnline sur WhatsApp pour un accompagnement.",
    automationReady: true,
    createdAt: "2026-06-19T00:00:00.000Z"
  },
  {
    id: "seed-formation-crypto",
    scheduledFor: "2026-06-26T18:00",
    category: "Formation crypto",
    platform: "Telegram",
    status: "Brouillon",
    title: "Les bases avant votre premier achat crypto",
    caption:
      "Avant d'acheter, comprenez le wallet, les frais, les risques et la difference entre investissement et speculation.",
    callToAction: "Rejoignez la communaute CizaOnline pour apprendre avec methode.",
    automationReady: false,
    createdAt: "2026-06-19T00:00:00.000Z"
  }
];

function getCalendarItems() {
  globalThis.cizaMarketingCalendar = globalThis.cizaMarketingCalendar || [...INITIAL_PUBLICATIONS];
  return globalThis.cizaMarketingCalendar;
}

function cleanText(value, maxLength = 1200) {
  return String(value || "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, maxLength);
}

function cleanDateTime(value) {
  return String(value || "").trim().slice(0, 32);
}

function isValidCategory(category) {
  return MARKETING_CATEGORIES.includes(category);
}

function isValidPlatform(platform) {
  return MARKETING_PLATFORMS.includes(platform);
}

function buildAutomationPayload(item) {
  return {
    id: item.id,
    scheduledFor: item.scheduledFor,
    category: item.category,
    platform: item.platform,
    status: item.status,
    title: item.title,
    caption: item.caption,
    callToAction: item.callToAction,
    source: "CizaOnline Marketing Automation",
    destinationHint: {
      metricool: "Use this payload as the content source for a scheduled post.",
      make: "Create a webhook module, then map caption, platform and scheduledFor.",
      n8n: "Use a Webhook trigger, then route by platform."
    }
  };
}

async function notifyAutomationWebhook(item) {
  const webhookUrl = process.env.MARKETING_AUTOMATION_WEBHOOK_URL;

  if (!webhookUrl || !item.automationReady) {
    return { enabled: Boolean(webhookUrl), sent: false };
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(buildAutomationPayload(item))
    });

    if (!response.ok) {
      console.error("Marketing automation webhook failed", { status: response.status });
      return { enabled: true, sent: false };
    }

    return { enabled: true, sent: true };
  } catch (error) {
    console.error("Marketing automation webhook error", error);
    return { enabled: true, sent: false };
  }
}

export function isMarketingAdminAuthorized(token) {
  const configuredPassword = process.env.CIZA_ADMIN_PASSWORD;
  return Boolean(configuredPassword && token === configuredPassword);
}

export function listMarketingAutomation() {
  const items = [...getCalendarItems()].sort((a, b) => String(a.scheduledFor).localeCompare(String(b.scheduledFor)));

  return {
    categories: MARKETING_CATEGORIES,
    platforms: MARKETING_PLATFORMS,
    templates: PUBLICATION_TEMPLATES,
    calendar: items,
    automationEndpoint: "/api/marketing-automation",
    webhookConfigured: Boolean(process.env.MARKETING_AUTOMATION_WEBHOOK_URL)
  };
}

export function listAutomationPayloads() {
  return getCalendarItems()
    .filter((item) => item.automationReady)
    .map(buildAutomationPayload);
}

export async function createMarketingPublication(payload) {
  const category = cleanText(payload.category, 80);
  const platform = cleanText(payload.platform, 80);
  const scheduledFor = cleanDateTime(payload.scheduledFor);
  const title = cleanText(payload.title, 160);
  const caption = cleanText(payload.caption, 1200);
  const callToAction = cleanText(payload.callToAction, 240);

  if (!isValidCategory(category) || !isValidPlatform(platform) || !scheduledFor || !title || !caption) {
    throw new Error("Invalid marketing publication payload");
  }

  const item = {
    id: `mkt-${Date.now()}`,
    scheduledFor,
    category,
    platform,
    status: cleanText(payload.status || "Brouillon", 40),
    title,
    caption,
    callToAction,
    automationReady: Boolean(payload.automationReady),
    createdAt: new Date().toISOString()
  };

  const items = getCalendarItems();
  items.push(item);
  globalThis.cizaMarketingCalendar = items.slice(-200);

  const webhook = await notifyAutomationWebhook(item);

  return { item, webhook };
}
