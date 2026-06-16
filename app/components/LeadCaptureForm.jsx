"use client";

import { useState } from "react";
import { Mail } from "lucide-react";

const interestOptions = [
  "Formation crypto",
  "Accompagnement Binance",
  "Abonnement premium",
  "Autre"
];

export default function LeadCaptureForm({ title = "Recevoir un accompagnement CizaOnline", description, source = "site", className = "" }) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const prospect = {
      name: formData.get("nom")?.toString().trim() || "",
      whatsapp: formData.get("whatsapp")?.toString().trim() || "",
      email: formData.get("email")?.toString().trim() || "",
      interest: formData.get("interet")?.toString() || "",
      source,
      createdAt: new Date().toISOString(),
      status: "pending"
    };

    const storageKey = "cizaonline_prospect_requests";
    const existing = JSON.parse(window.localStorage.getItem(storageKey) || "[]");
    window.localStorage.setItem(storageKey, JSON.stringify([...existing, prospect]));
    event.currentTarget.reset();
    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit} className={`gold-border glass rounded-[1.5rem] p-5 shadow-gold sm:rounded-[2rem] sm:p-7 ${className}`}>
      <Mail className="h-8 w-8 text-ciza-gold" />
      <h2 className="mt-4 font-display text-2xl font-black leading-tight text-white">{title}</h2>
      <p className="mt-3 text-sm leading-7 text-white/62">
        {description || "Laisse tes coordonnees et le sujet qui t'interesse. L'equipe CizaOnline reviendra vers toi rapidement."}
      </p>
      <div className="mt-6 grid gap-3">
        <input name="nom" required placeholder="Nom" className="min-h-12 rounded-2xl border border-white/10 bg-black/40 px-4 text-white outline-none transition placeholder:text-white/36 focus:border-ciza-gold" />
        <input name="whatsapp" required placeholder="Numero WhatsApp" className="min-h-12 rounded-2xl border border-white/10 bg-black/40 px-4 text-white outline-none transition placeholder:text-white/36 focus:border-ciza-gold" />
        <input name="email" type="email" required placeholder="Email" className="min-h-12 rounded-2xl border border-white/10 bg-black/40 px-4 text-white outline-none transition placeholder:text-white/36 focus:border-ciza-gold" />
        <select name="interet" required defaultValue="" className="min-h-12 rounded-2xl border border-white/10 bg-black/40 px-4 text-white outline-none transition focus:border-ciza-gold">
          <option value="" disabled>Sujet d&apos;interet</option>
          {interestOptions.map((option) => (
            <option key={option} value={option} className="bg-ciza-black text-white">
              {option}
            </option>
          ))}
        </select>
        <button type="submit" className="premium-button min-h-12 rounded-full px-5 text-sm font-black text-black">
          Envoyer ma demande
        </button>
      </div>
      {submitted ? (
        <p className="mt-4 rounded-2xl border border-ciza-emerald/30 bg-ciza-emerald/10 p-4 text-sm font-bold leading-6 text-ciza-emerald">
          Merci, votre demande a bien ete recue. L&apos;equipe CizaOnline vous contactera rapidement.
        </p>
      ) : null}
    </form>
  );
}
