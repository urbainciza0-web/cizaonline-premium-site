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
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [startedAt] = useState(() => Date.now());

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    setError("");
    setSubmitting(true);

    if (!form) {
      setError("Le formulaire n'est pas disponible. Veuillez reessayer.");
      setSubmitting(false);
      return;
    }

    const formData = new FormData(form);
    const payload = {
      name: formData.get("nom")?.toString().trim() || "",
      whatsapp: formData.get("whatsapp")?.toString().trim() || "",
      email: formData.get("email")?.toString().trim() || "",
      interest: formData.get("interet")?.toString() || "",
      message: formData.get("message")?.toString().trim() || "",
      company: formData.get("company")?.toString().trim() || "",
      source: source === "Chatbot" ? "Chatbot" : "Formulaire",
      submittedAfterMs: Date.now() - startedAt
    };

    try {
      const response = await fetch("/api/prospects", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload)
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "La demande n'a pas pu etre envoyee.");
      }

      if (form?.reset) {
        form.reset();
      }
      setSubmitted(true);
    } catch (submitError) {
      setError(submitError.message);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className={`gold-border glass rounded-[1.5rem] p-5 shadow-gold sm:rounded-[2rem] sm:p-7 ${className}`}>
      <Mail className="h-8 w-8 text-ciza-gold" />
      <h2 className="mt-4 font-display text-2xl font-black leading-tight text-white">{title}</h2>
      <p className="mt-3 text-sm leading-7 text-white/62">
        {description || "Laisse tes coordonnees et le sujet qui t'interesse. L'equipe CizaOnline reviendra vers toi rapidement."}
      </p>
      <div className="mt-6 grid gap-3">
        <input name="company" tabIndex="-1" autoComplete="off" className="hidden" aria-hidden="true" />
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
        <textarea name="message" rows="4" placeholder="Message" className="min-h-28 resize-none rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition placeholder:text-white/36 focus:border-ciza-gold" />
        <button type="submit" disabled={submitting} className="premium-button min-h-12 rounded-full px-5 text-sm font-black text-black disabled:cursor-wait disabled:opacity-70">
          {submitting ? "Envoi en cours..." : "Envoyer ma demande"}
        </button>
      </div>
      {submitted ? (
        <p className="mt-4 rounded-2xl border border-ciza-emerald/30 bg-ciza-emerald/10 p-4 text-sm font-bold leading-6 text-ciza-emerald">
          Votre demande a été envoyée avec succès. L'équipe CizaOnline vous contactera prochainement.
        </p>
      ) : null}
      {error ? (
        <p className="mt-4 rounded-2xl border border-red-400/30 bg-red-400/10 p-4 text-sm font-bold leading-6 text-red-200">
          {error}
        </p>
      ) : null}
    </form>
  );
}
