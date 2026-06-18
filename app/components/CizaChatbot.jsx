"use client";

import { useMemo, useState } from "react";
import { Bot, CheckCircle2, MessageCircle, Send, X } from "lucide-react";

const CHATBOT_ENABLED = true;
const whatsappUrl = "https://wa.me/243834783307?text=Bonjour%20CizaOnline%2C%20j%27ai%20une%20question%20et%20je%20veux%20etre%20accompagne.";

const quickQuestions = [
  "Comment s'inscrire sur Binance ?",
  "Comment acheter des USDT ?",
  "Comment rejoindre CizaOnline ?",
  "Combien coute l'abonnement ?",
  "Comment contacter l'equipe ?"
];

const defaultMessages = [
  {
    role: "assistant",
    text: "Bonjour, je suis l'assistant CizaOnline. Je peux repondre aux questions simples et t'orienter vers WhatsApp si un accompagnement humain est preferable."
  }
];

function getAnswer(question) {
  const normalized = question.toLowerCase();

  if (normalized.includes("binance") || normalized.includes("inscrire")) {
    return "Pour s'inscrire sur Binance, commence par creer un compte avec une adresse email fiable, active la double authentification, puis suis la verification demandee par la plateforme. Si tu bloques sur une etape, l'equipe CizaOnline peut t'orienter sur WhatsApp.";
  }

  if (normalized.includes("usdt") || normalized.includes("mobile money") || normalized.includes("acheter")) {
    return "Pour acheter des USDT, il faut verifier le vendeur, le montant, le reseau choisi et garder les preuves de paiement. Commence avec un petit montant test. Pour une transaction accompagnee, passe par WhatsApp.";
  }

  if (normalized.includes("rejoindre") || normalized.includes("cizaonline") || normalized.includes("formation")) {
    return "Pour rejoindre CizaOnline, utilise le formulaire contact, la page inscription ou WhatsApp. L'equipe te propose ensuite le parcours adapte: guides gratuits, Premium ou formation sur rendez-vous.";
  }

  if (normalized.includes("cout") || normalized.includes("prix") || normalized.includes("abonnement") || normalized.includes("premium")) {
    return "L'espace Premium est presente a 6$/mois. Certaines formations ou accompagnements peuvent avoir un tarif different selon le besoin. Le plus simple est de confirmer ton cas avec l'equipe sur WhatsApp.";
  }

  if (normalized.includes("contact") || normalized.includes("whatsapp") || normalized.includes("email") || normalized.includes("equipe")) {
    return "Tu peux contacter CizaOnline via les boutons WhatsApp du site ou depuis la page Contact. Pour une question personnelle, WhatsApp est le canal le plus rapide.";
  }

  return "Je peux repondre aux questions simples sur Binance, USDT, l'abonnement Premium et le contact CizaOnline. Pour une situation personnelle ou une operation crypto, je te conseille de parler a l'equipe sur WhatsApp.";
}

export default function CizaChatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [leadOpen, setLeadOpen] = useState(false);
  const [leadSent, setLeadSent] = useState(false);
  const [leadError, setLeadError] = useState("");
  const [leadSubmitting, setLeadSubmitting] = useState(false);
  const [startedAt] = useState(() => Date.now());
  const [messages, setMessages] = useState(defaultMessages);
  const hasHumanCue = useMemo(() => messages.some((message) => message.text.toLowerCase().includes("whatsapp")), [messages]);

  if (!CHATBOT_ENABLED) {
    return null;
  }

  function ask(question) {
    const cleanQuestion = question.trim();

    if (!cleanQuestion) {
      return;
    }

    setMessages((current) => [
      ...current,
      { role: "user", text: cleanQuestion },
      { role: "assistant", text: getAnswer(cleanQuestion) }
    ]);
    setInput("");
  }

  function handleSubmit(event) {
    event.preventDefault();
    ask(input);
  }

  async function handleLeadSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    setLeadError("");
    setLeadSubmitting(true);

    if (!form) {
      setLeadError("Le formulaire chatbot n'est pas disponible. Veuillez reessayer.");
      setLeadSubmitting(false);
      return;
    }

    const formData = new FormData(form);

    try {
      const response = await fetch("/api/prospects", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          name: formData.get("nom")?.toString().trim() || "",
          email: formData.get("email")?.toString().trim() || "",
          whatsapp: formData.get("whatsapp")?.toString().trim() || "",
          interest: "Question chatbot",
          message: formData.get("message")?.toString().trim() || "Demande depuis le chatbot CizaOnline",
          company: formData.get("company")?.toString().trim() || "",
          source: "Chatbot",
          submittedAfterMs: Date.now() - startedAt
        })
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "La demande chatbot n'a pas pu etre envoyee.");
      }

      if (form?.reset) {
        form.reset();
      }
      setLeadSent(true);
      setLeadOpen(false);
    } catch (error) {
      setLeadError(error.message);
    } finally {
      setLeadSubmitting(false);
    }
  }

  return (
    <div className="fixed bottom-[5.75rem] right-3 z-50 flex max-w-[calc(100vw-1.5rem)] flex-col items-end gap-2 sm:bottom-24 sm:right-5">
      {open ? (
        <section className="w-[min(21rem,calc(100vw-1.5rem))] overflow-hidden rounded-2xl border border-ciza-gold/18 bg-black/88 text-ciza-ivory shadow-panel backdrop-blur-2xl">
          <header className="flex items-center justify-between border-b border-white/10 px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="grid h-7 w-7 place-items-center rounded-full border border-ciza-gold/25 bg-ciza-gold/10 text-ciza-gold">
                <Bot className="h-4 w-4" aria-hidden="true" />
              </span>
              <p className="text-sm font-black text-white">Assistant CizaOnline</p>
            </div>
            <button type="button" aria-label="Fermer le chatbot" onClick={() => setOpen(false)} className="grid h-8 w-8 place-items-center rounded-full border border-white/10 text-white/60 transition hover:border-ciza-gold/35 hover:text-ciza-gold">
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          </header>

          <div className="max-h-72 space-y-3 overflow-y-auto px-4 py-4">
            {messages.map((message, index) => (
              <p key={`${message.role}-${index}`} className={`rounded-2xl px-3 py-2 text-sm leading-6 ${message.role === "user" ? "ml-8 bg-ciza-gold text-black" : "mr-6 border border-white/10 bg-white/[0.045] text-white/72"}`}>
                {message.text}
              </p>
            ))}
          </div>

          <div className="border-t border-white/10 px-4 py-3">
            <div className="flex flex-wrap gap-2">
              {quickQuestions.slice(0, 3).map((question) => (
                <button key={question} type="button" onClick={() => ask(question)} className="rounded-full border border-white/10 px-3 py-1.5 text-left text-[0.7rem] font-bold text-white/62 transition hover:border-ciza-gold/35 hover:text-ciza-gold">
                  {question}
                </button>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="mt-3 flex gap-2">
              <input value={input} onChange={(event) => setInput(event.target.value)} placeholder="Votre question..." className="min-h-10 flex-1 rounded-full border border-white/10 bg-black/40 px-4 text-sm text-white outline-none placeholder:text-white/34 focus:border-ciza-gold" />
              <button type="submit" aria-label="Envoyer la question" className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-ciza-gold text-black transition hover:bg-white">
                <Send className="h-4 w-4" aria-hidden="true" />
              </button>
            </form>

            {hasHumanCue ? (
              <div className="mt-3 grid gap-2">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-ciza-gold/25 px-4 py-2 text-xs font-black text-ciza-gold transition hover:bg-ciza-gold/10">
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  Continuer sur WhatsApp
                </a>
                <button type="button" onClick={() => setLeadOpen((current) => !current)} className="inline-flex w-full items-center justify-center rounded-full border border-white/10 px-4 py-2 text-xs font-black text-white/66 transition hover:border-ciza-gold/30 hover:text-ciza-gold">
                  Etre rappelé
                </button>
              </div>
            ) : null}

            {leadOpen ? (
              <form onSubmit={handleLeadSubmit} className="mt-3 grid gap-2 rounded-2xl border border-white/10 bg-white/[0.035] p-3">
                <input name="company" tabIndex="-1" autoComplete="off" className="hidden" aria-hidden="true" />
                <input name="nom" required placeholder="Nom" className="min-h-9 rounded-full border border-white/10 bg-black/40 px-3 text-xs text-white outline-none placeholder:text-white/34 focus:border-ciza-gold" />
                <input name="whatsapp" required placeholder="WhatsApp" className="min-h-9 rounded-full border border-white/10 bg-black/40 px-3 text-xs text-white outline-none placeholder:text-white/34 focus:border-ciza-gold" />
                <input name="email" required type="email" placeholder="Email" className="min-h-9 rounded-full border border-white/10 bg-black/40 px-3 text-xs text-white outline-none placeholder:text-white/34 focus:border-ciza-gold" />
                <textarea name="message" rows="2" placeholder="Message" className="min-h-16 resize-none rounded-2xl border border-white/10 bg-black/40 px-3 py-2 text-xs text-white outline-none placeholder:text-white/34 focus:border-ciza-gold" />
                <button type="submit" disabled={leadSubmitting} className="rounded-full bg-ciza-gold px-4 py-2 text-xs font-black text-black disabled:cursor-wait disabled:opacity-70">
                  {leadSubmitting ? "Envoi..." : "Envoyer au support"}
                </button>
              </form>
            ) : null}

            {leadSent ? (
              <p className="mt-3 inline-flex items-center gap-2 rounded-2xl border border-ciza-emerald/30 bg-ciza-emerald/10 p-3 text-xs font-bold leading-5 text-ciza-emerald">
                <CheckCircle2 className="h-4 w-4 shrink-0" />
                Demande envoyée. L'équipe CizaOnline vous contactera prochainement.
              </p>
            ) : null}

            {leadError ? (
              <p className="mt-3 rounded-2xl border border-red-400/30 bg-red-400/10 p-3 text-xs font-bold leading-5 text-red-200">
                {leadError}
              </p>
            ) : null}
          </div>
        </section>
      ) : null}

      <button type="button" aria-label="Ouvrir le chatbot CizaOnline" onClick={() => setOpen(true)} className="grid h-11 w-11 place-items-center rounded-full border border-ciza-gold/22 bg-black/78 text-ciza-gold shadow-panel backdrop-blur-xl transition hover:border-ciza-gold/50 hover:bg-ciza-gold/10 sm:h-12 sm:w-12">
        <Bot className="h-5 w-5" aria-hidden="true" />
      </button>
    </div>
  );
}
