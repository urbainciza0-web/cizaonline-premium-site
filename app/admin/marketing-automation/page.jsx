import { LockKeyhole, RefreshCw } from "lucide-react";
import MarketingAutomationAdmin from "../../components/MarketingAutomationAdmin";
import { isMarketingAdminAuthorized, listMarketingAutomation } from "../../lib/marketingAutomationStore";

export const metadata = {
  title: "Marketing Automation | CizaOnline",
  robots: {
    index: false,
    follow: false
  }
};

export const dynamic = "force-dynamic";

export default async function MarketingAutomationPage({ searchParams }) {
  const params = await searchParams;
  const token = params?.token || "";
  const authorized = isMarketingAdminAuthorized(token);
  const data = authorized ? listMarketingAutomation() : null;

  return (
    <main className="min-h-screen bg-ciza-black px-4 pb-24 pt-28 text-ciza-ivory sm:px-6 lg:px-8">
      <section className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 border-b border-ciza-gold/14 pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="inline-flex rounded-full border border-ciza-gold/25 bg-ciza-gold/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-ciza-gold">
              Admin CizaOnline
            </p>
            <h1 className="mt-5 font-display text-4xl font-black leading-tight text-white sm:text-5xl">
              Marketing Automation
            </h1>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-white/62">
              Calendrier editorial interne, modeles de publication et export compatible Metricool, Make et n8n.
            </p>
          </div>
          {authorized ? (
            <a
              href={`/admin/marketing-automation?token=${encodeURIComponent(token)}`}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-ciza-gold/25 px-5 py-2 text-sm font-black text-ciza-gold transition hover:bg-ciza-gold/10"
            >
              <RefreshCw className="h-4 w-4" />
              Actualiser
            </a>
          ) : null}
        </div>

        {!authorized ? (
          <div className="mt-10 max-w-xl rounded-[1.5rem] border border-ciza-gold/18 bg-white/[0.035] p-6 shadow-panel">
            <LockKeyhole className="h-9 w-9 text-ciza-gold" />
            <h2 className="mt-4 font-display text-2xl font-black text-white">Acces protege</h2>
            <p className="mt-3 text-sm leading-7 text-white/64">
              Ajoutez `?token=VOTRE_MOT_DE_PASSE_ADMIN` a l'URL. La valeur doit correspondre a `CIZA_ADMIN_PASSWORD` dans Vercel.
            </p>
          </div>
        ) : (
          <MarketingAutomationAdmin initialData={data} token={token} />
        )}
      </section>
    </main>
  );
}
