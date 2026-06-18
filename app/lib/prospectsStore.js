const FORM_COLUMNS = ["Date", "Nom", "Email", "WhatsApp", "Source", "Sujet", "Message"];

function getGoogleFormConfig() {
  return {
    actionUrl: process.env.GOOGLE_FORM_ACTION_URL,
    fields: {
      name: process.env.GOOGLE_FORM_ENTRY_NOM,
      whatsapp: process.env.GOOGLE_FORM_ENTRY_WHATSAPP,
      email: process.env.GOOGLE_FORM_ENTRY_EMAIL,
      interest: process.env.GOOGLE_FORM_ENTRY_SUJET,
      message: process.env.GOOGLE_FORM_ENTRY_MESSAGE,
      source: process.env.GOOGLE_FORM_ENTRY_SOURCE,
      date: process.env.GOOGLE_FORM_ENTRY_DATE
    }
  };
}

function hasGoogleFormConfig(config = getGoogleFormConfig()) {
  return Boolean(
    config.actionUrl &&
      config.fields.name &&
      config.fields.whatsapp &&
      config.fields.email &&
      config.fields.interest &&
      config.fields.message &&
      config.fields.source
  );
}

function getMemoryProspects() {
  globalThis.cizaProspectRequests = globalThis.cizaProspectRequests || [];
  return globalThis.cizaProspectRequests;
}

async function sendToGoogleForm(prospect, config) {
  const values = {
    [config.fields.name]: prospect.name,
    [config.fields.whatsapp]: prospect.whatsapp,
    [config.fields.email]: prospect.email,
    [config.fields.interest]: prospect.interest,
    [config.fields.message]: prospect.message,
    [config.fields.source]: prospect.source
  };

  if (config.fields.date) {
    values[config.fields.date] = prospect.submittedAt;
  }

  const formBody = new URLSearchParams(values);

  const response = await fetch(config.actionUrl, {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded;charset=UTF-8"
    },
    body: formBody,
    redirect: "manual"
  });

  if (![0, 200, 302, 303].includes(response.status)) {
    throw new Error(`Google Form submit failed with status ${response.status}`);
  }
}

async function sendTelegramNotification(prospect) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    return { enabled: false };
  }

  const text = [
    "Nouveau prospect CizaOnline",
    `Nom: ${prospect.name}`,
    `WhatsApp: ${prospect.whatsapp}`,
    `Email: ${prospect.email}`,
    `Sujet: ${prospect.interest}`,
    `Source: ${prospect.source}`,
    `Message: ${prospect.message || "-"}`
  ].join("\n");

  const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text
    })
  });

  if (!response.ok) {
    console.error("Telegram prospect notification failed", { status: response.status });
    return { enabled: true, ok: false };
  }

  return { enabled: true, ok: true };
}

async function sendGmailNotification(prospect) {
  const webhookUrl = process.env.GMAIL_PROSPECT_WEBHOOK_URL;

  if (!webhookUrl) {
    return { enabled: false };
  }

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(prospect)
  });

  if (!response.ok) {
    console.error("Gmail prospect notification webhook failed", { status: response.status });
    return { enabled: true, ok: false };
  }

  return { enabled: true, ok: true };
}

function saveToMemory(prospect) {
  const memoryProspects = getMemoryProspects();
  memoryProspects.push(prospect);
  globalThis.cizaProspectRequests = memoryProspects.slice(-200);
}

export async function saveProspect(prospect) {
  const config = getGoogleFormConfig();
  let mode = "memory";

  if (hasGoogleFormConfig(config)) {
    await sendToGoogleForm(prospect, config);
    mode = "google-forms";
  } else {
    console.warn("Prospect storage fallback: Google Forms is not configured. Using memory fallback.", {
      hasActionUrl: Boolean(config.actionUrl),
      hasNameEntry: Boolean(config.fields.name),
      hasWhatsappEntry: Boolean(config.fields.whatsapp),
      hasEmailEntry: Boolean(config.fields.email),
      hasInterestEntry: Boolean(config.fields.interest),
      hasMessageEntry: Boolean(config.fields.message),
      hasSourceEntry: Boolean(config.fields.source)
    });
  }

  saveToMemory(prospect);

  const telegram = await sendTelegramNotification(prospect);
  const gmail = await sendGmailNotification(prospect);

  return { mode, telegram, gmail };
}

export async function listProspects() {
  return {
    mode: hasGoogleFormConfig() ? "google-forms + memory-cache" : "memory",
    prospects: [...getMemoryProspects()].reverse()
  };
}

export function getProspectColumns() {
  return FORM_COLUMNS;
}
