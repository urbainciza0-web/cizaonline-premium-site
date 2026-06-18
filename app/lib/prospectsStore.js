import crypto from "crypto";

const GOOGLE_TOKEN_URL = "https://oauth2.googleapis.com/token";
const GOOGLE_SCOPE = "https://www.googleapis.com/auth/spreadsheets";
const DEFAULT_SHEET_NAME = "Prospects";
const SHEET_COLUMNS = ["Date", "Nom", "Email", "WhatsApp", "Source", "Sujet", "Message"];

function getSheetConfig() {
  return {
    spreadsheetId: process.env.GOOGLE_SHEETS_SPREADSHEET_ID,
    clientEmail: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
    privateKey: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    sheetName: process.env.GOOGLE_SHEETS_PROSPECTS_SHEET_NAME || DEFAULT_SHEET_NAME
  };
}

function hasGoogleSheetsConfig(config = getSheetConfig()) {
  return Boolean(config.spreadsheetId && config.clientEmail && config.privateKey);
}

function toBase64Url(input) {
  return Buffer.from(input)
    .toString("base64")
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");
}

function createJwt(config) {
  const now = Math.floor(Date.now() / 1000);
  const header = { alg: "RS256", typ: "JWT" };
  const claim = {
    iss: config.clientEmail,
    scope: GOOGLE_SCOPE,
    aud: GOOGLE_TOKEN_URL,
    exp: now + 3600,
    iat: now
  };
  const unsignedToken = `${toBase64Url(JSON.stringify(header))}.${toBase64Url(JSON.stringify(claim))}`;
  const signature = crypto.createSign("RSA-SHA256").update(unsignedToken).sign(config.privateKey);

  return `${unsignedToken}.${toBase64Url(signature)}`;
}

async function getGoogleAccessToken(config) {
  const response = await fetch(GOOGLE_TOKEN_URL, {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: createJwt(config)
    })
  });

  if (!response.ok) {
    throw new Error(`Google token request failed with status ${response.status}`);
  }

  const data = await response.json();
  return data.access_token;
}

function getMemoryProspects() {
  globalThis.cizaProspectRequests = globalThis.cizaProspectRequests || [];
  return globalThis.cizaProspectRequests;
}

function prospectToRow(prospect) {
  return [
    prospect.submittedAt,
    prospect.name,
    prospect.email,
    prospect.whatsapp,
    prospect.source,
    prospect.interest,
    prospect.message
  ];
}

function rowToProspect(row) {
  return {
    submittedAt: row[0] || "",
    name: row[1] || "",
    email: row[2] || "",
    whatsapp: row[3] || "",
    source: row[4] || "",
    interest: row[5] || "",
    message: row[6] || ""
  };
}

async function appendToGoogleSheets(prospect, config) {
  const accessToken = await getGoogleAccessToken(config);
  const range = encodeURIComponent(`${config.sheetName}!A:G`);
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${config.spreadsheetId}/values/${range}:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      authorization: `Bearer ${accessToken}`,
      "content-type": "application/json"
    },
    body: JSON.stringify({ values: [prospectToRow(prospect)] })
  });

  if (!response.ok) {
    throw new Error(`Google Sheets append failed with status ${response.status}`);
  }
}

async function readFromGoogleSheets(config) {
  const accessToken = await getGoogleAccessToken(config);
  const range = encodeURIComponent(`${config.sheetName}!A:G`);
  const response = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${config.spreadsheetId}/values/${range}`, {
    headers: { authorization: `Bearer ${accessToken}` },
    cache: "no-store"
  });

  if (!response.ok) {
    throw new Error(`Google Sheets read failed with status ${response.status}`);
  }

  const data = await response.json();
  const rows = data.values || [];
  const dataRows = rows[0]?.join("|") === SHEET_COLUMNS.join("|") ? rows.slice(1) : rows;

  return dataRows.map(rowToProspect).reverse();
}

export async function saveProspect(prospect) {
  const config = getSheetConfig();

  if (hasGoogleSheetsConfig(config)) {
    await appendToGoogleSheets(prospect, config);
    return { mode: "google-sheets" };
  }

  const memoryProspects = getMemoryProspects();
  memoryProspects.push(prospect);
  globalThis.cizaProspectRequests = memoryProspects.slice(-200);
  return { mode: "memory" };
}

export async function listProspects() {
  const config = getSheetConfig();

  if (hasGoogleSheetsConfig(config)) {
    return {
      mode: "google-sheets",
      prospects: await readFromGoogleSheets(config)
    };
  }

  return {
    mode: "memory",
    prospects: [...getMemoryProspects()].reverse()
  };
}

export function getProspectColumns() {
  return SHEET_COLUMNS;
}
