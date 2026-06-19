"use client";

import { CalendarDays, CheckCircle2, Copy, Plus, Send, Workflow } from "lucide-react";
import { useMemo, useState } from "react";

export default function MarketingAutomationAdmin({ initialData, token }) {
  const [data, setData] = useState(initialData);
  const [status, setStatus] = useState("");
  const [form, setForm] = useState({
    scheduledFor: "",
    category: initialData.categories[0],
    platform: initialData.platforms[0],
    title: "",
    caption: "",
    callToAction: "",
    automationReady: false
  });

  const automationUrl = useMemo(() => {
    return `/api/marketing-automation?format=automation&token=${encodeURIComponent(token)}`;
  }, [token]);

  function applyTemplate(template) {
    setForm((current) => ({
      ...current,
      category: template.category,
      title: template.title,
      caption: `${template.hook}. ${template.body}`,
      callToAction: template.callToAction
    }));
  }

  async function submitPublication(event) {
    event.preventDefault();
    setStatus("Enregistrement en cours...");

    const response = await fetch(`/api/marketing-automation?token=${encodeURIComponent(token)}`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ ...form, status: form.automationReady ? "Pret automation" : "Brouillon" })
    });

    const payload = await response.json();

    if (!response.ok) {
      setStatus(payload.error || "Publication invalide.");
      return;
    }

    setData((current) => ({
      ...current,
      calendar: [...current.calendar, payload.item].sort((a, b) => String(a.scheduledFor).localeCompare(String(b.scheduledFor)))
    }));
    setForm((current) => ({
      ...current,
      scheduledFor: "",
      title: "",
      caption: "",
      callToAction: "",
      automationReady: false
    }));
    setStatus(payload.webhook?.sent ? "Publication enregistree et envoyee au webhook." : "Publication enregistree.");
  }

  async function copyAutomationUrl() {
    await navigator.clipboard.writeText(`${window.location.origin}${automationUrl}`);
    setStatus("URL export automation copiee.");
  }

  return (
    <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1fr)_24rem]">
      <section className="rounded-[1.25rem] border border-ciza-gold/16 bg-black/34 p-5 shadow-panel">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-display text-2xl font-black text-white">Calendrier editorial</h2>
            <p className="mt-2 text-sm leading-6 text-white/58">
              Planification interne pour Facebook, Telegram, X et les workflows Metricool, Make ou n8n.
            </p>
          </div>
          <button
            type="button"
            onClick={copyAutomationUrl}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-ciza-gold/25 px-5 py-2 text-sm font-black text-ciza-gold transition hover:bg-ciza-gold/10"
          >
            <Copy className="h-4 w-4" />
            Export JSON
          </button>
        </div>

        <div className="mt-5 overflow-x-auto">
          <table className="min-w-[56rem] w-full border-collapse text-left text-sm">
            <thead className="bg-ciza-gold/10 text-xs uppercase tracking-[0.16em] text-ciza-gold">
              <tr>
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3">Categorie</th>
                <th className="px-4 py-3">Plateforme</th>
                <th className="px-4 py-3">Titre</th>
                <th className="px-4 py-3">Statut</th>
                <th className="px-4 py-3">Automation</th>
              </tr>
            </thead>
            <tbody>
              {data.calendar.map((item) => (
                <tr key={item.id} className="border-t border-white/8 text-white/68">
                  <td className="px-4 py-4 align-top">{item.scheduledFor}</td>
                  <td className="px-4 py-4 align-top">{item.category}</td>
                  <td className="px-4 py-4 align-top">{item.platform}</td>
                  <td className="px-4 py-4 align-top font-bold text-white">{item.title}</td>
                  <td className="px-4 py-4 align-top">{item.status}</td>
                  <td className="px-4 py-4 align-top">
                    {item.automationReady ? (
                      <span className="inline-flex items-center gap-2 text-ciza-gold">
                        <CheckCircle2 className="h-4 w-4" />
                        Pret
                      </span>
                    ) : (
                      "Brouillon"
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <aside className="space-y-6">
        <form onSubmit={submitPublication} className="rounded-[1.25rem] border border-ciza-gold/16 bg-white/[0.035] p-5 shadow-panel">
          <div className="flex items-center gap-2 text-ciza-gold">
            <Plus className="h-5 w-5" />
            <h2 className="font-display text-xl font-black text-white">Nouvelle publication</h2>
          </div>

          <div className="mt-5 space-y-3">
            <input
              type="datetime-local"
              value={form.scheduledFor}
              onChange={(event) => setForm({ ...form, scheduledFor: event.target.value })}
              className="min-h-11 w-full rounded-xl border border-ciza-gold/16 bg-black/30 px-4 text-sm text-white outline-none focus:border-ciza-gold"
              required
            />
            <select
              value={form.category}
              onChange={(event) => setForm({ ...form, category: event.target.value })}
              className="min-h-11 w-full rounded-xl border border-ciza-gold/16 bg-black/30 px-4 text-sm text-white outline-none focus:border-ciza-gold"
            >
              {data.categories.map((category) => (
                <option key={category}>{category}</option>
              ))}
            </select>
            <select
              value={form.platform}
              onChange={(event) => setForm({ ...form, platform: event.target.value })}
              className="min-h-11 w-full rounded-xl border border-ciza-gold/16 bg-black/30 px-4 text-sm text-white outline-none focus:border-ciza-gold"
            >
              {data.platforms.map((platform) => (
                <option key={platform}>{platform}</option>
              ))}
            </select>
            <input
              value={form.title}
              onChange={(event) => setForm({ ...form, title: event.target.value })}
              placeholder="Titre"
              className="min-h-11 w-full rounded-xl border border-ciza-gold/16 bg-black/30 px-4 text-sm text-white outline-none placeholder:text-white/36 focus:border-ciza-gold"
              required
            />
            <textarea
              value={form.caption}
              onChange={(event) => setForm({ ...form, caption: event.target.value })}
              placeholder="Texte de publication"
              rows="5"
              className="w-full rounded-xl border border-ciza-gold/16 bg-black/30 px-4 py-3 text-sm text-white outline-none placeholder:text-white/36 focus:border-ciza-gold"
              required
            />
            <input
              value={form.callToAction}
              onChange={(event) => setForm({ ...form, callToAction: event.target.value })}
              placeholder="Appel a l'action"
              className="min-h-11 w-full rounded-xl border border-ciza-gold/16 bg-black/30 px-4 text-sm text-white outline-none placeholder:text-white/36 focus:border-ciza-gold"
            />
            <label className="flex items-center gap-3 rounded-xl border border-ciza-gold/12 bg-black/24 px-4 py-3 text-sm text-white/70">
              <input
                type="checkbox"
                checked={form.automationReady}
                onChange={(event) => setForm({ ...form, automationReady: event.target.checked })}
                className="h-4 w-4 accent-ciza-gold"
              />
              Pret pour Make, n8n ou Metricool
            </label>
          </div>

          <button
            type="submit"
            className="mt-5 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-ciza-gold px-5 py-2 text-sm font-black text-ciza-black transition hover:bg-ciza-gold-soft"
          >
            <Send className="h-4 w-4" />
            Enregistrer
          </button>
          {status ? <p className="mt-3 text-sm text-white/62">{status}</p> : null}
        </form>

        <section className="rounded-[1.25rem] border border-ciza-gold/16 bg-black/34 p-5 shadow-panel">
          <div className="flex items-center gap-2">
            <Workflow className="h-5 w-5 text-ciza-gold" />
            <h2 className="font-display text-xl font-black text-white">Architecture automation</h2>
          </div>
          <div className="mt-4 space-y-3 text-sm leading-6 text-white/62">
            <p>Webhook sortant: {data.webhookConfigured ? "configure" : "non configure"}</p>
            <p>Variable optionnelle: MARKETING_AUTOMATION_WEBHOOK_URL</p>
            <p>Export JSON: publications marquees comme pretes pour automation.</p>
          </div>
        </section>

        <section className="rounded-[1.25rem] border border-ciza-gold/16 bg-black/34 p-5 shadow-panel">
          <div className="flex items-center gap-2">
            <CalendarDays className="h-5 w-5 text-ciza-gold" />
            <h2 className="font-display text-xl font-black text-white">Modeles reutilisables</h2>
          </div>
          <div className="mt-4 space-y-3">
            {data.templates.map((template) => (
              <button
                key={template.id}
                type="button"
                onClick={() => applyTemplate(template)}
                className="block w-full rounded-xl border border-ciza-gold/12 bg-white/[0.035] px-4 py-3 text-left transition hover:border-ciza-gold/40"
              >
                <span className="block text-sm font-black text-white">{template.title}</span>
                <span className="mt-1 block text-xs uppercase tracking-[0.14em] text-ciza-gold">{template.category}</span>
              </button>
            ))}
          </div>
        </section>
      </aside>
    </div>
  );
}
