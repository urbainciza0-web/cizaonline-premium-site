import { LockKeyhole, RefreshCw } from "lucide-react";
import { listProspects } from "../../lib/prospectsStore";

export const metadata = {
  title: "Administration prospects | CizaOnline",
  robots: {
    index: false,
    follow: false
  }
};

export const dynamic = "force-dynamic";

function isAuthorized(searchParams) {
  const configuredPassword = process.env.CIZA_ADMIN_PASSWORD;

  if (!configuredPassword) {
    return false;
  }

  return searchParams?.token === configuredPassword;
}

export default async function AdminProspectsPage({ searchParams }) {
  const params = await searchParams;
  const authorized = isAuthorized(params);
  const data = authorized ? await listProspects() : { mode: "locked", prospects: [] };

  return (
    <main className="min-h-screen bg-ciza-black px-4 pb-24 pt-28 text-ciza-ivory sm:px-6 lg:px-8">
      <section className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 border-b border-ciza-gold/14 pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="inline-flex rounded-full border border-ciza-gold/25 bg-ciza-gold/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-ciza-gold">
              Admin CizaOnline
            </p>
            <h1 className="mt-5 font-display text-4xl font-black leading-tight text-white sm:text-5xl">
              Prospects reçus
            </h1>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-white/62">
              Page protégée. Les données prospects ne sont visibles que si le mot de passe admin est configuré côté serveur.
            </p>
          </div>
          {authorized ? (
            <a href={`/admin/prospects?token=${encodeURIComponent(params.token)}`} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-ciza-gold/25 px-5 py-2 text-sm font-black text-ciza-gold transition hover:bg-ciza-gold/10">
              <RefreshCw className="h-4 w-4" />
              Actualiser
            </a>
          ) : null}
        </div>

        {!authorized ? (
          <div className="mt-10 max-w-xl rounded-[1.5rem] border border-ciza-gold/18 bg-white/[0.035] p-6 shadow-panel">
            <LockKeyhole className="h-9 w-9 text-ciza-gold" />
            <h2 className="mt-4 font-display text-2xl font-black text-white">Accès protégé</h2>
            <p className="mt-3 text-sm leading-7 text-white/64">
              Ajoutez `?token=VOTRE_MOT_DE_PASSE_ADMIN` à l'URL. La valeur doit correspondre à `CIZA_ADMIN_PASSWORD` dans Vercel.
            </p>
          </div>
        ) : (
          <div className="mt-10">
            <div className="mb-4 flex flex-col gap-2 text-sm text-white/58 sm:flex-row sm:items-center sm:justify-between">
              <p>
                Source des données: <span className="font-black text-ciza-gold">{data.mode}</span>
              </p>
              <p>{data.prospects.length} prospect(s)</p>
            </div>

            <div className="overflow-x-auto rounded-[1.25rem] border border-ciza-gold/16 bg-black/34 shadow-panel">
              <table className="min-w-[58rem] w-full border-collapse text-left text-sm">
                <thead className="bg-ciza-gold/10 text-xs uppercase tracking-[0.16em] text-ciza-gold">
                  <tr>
                    <th className="px-4 py-3">Date</th>
                    <th className="px-4 py-3">Nom</th>
                    <th className="px-4 py-3">Email</th>
                    <th className="px-4 py-3">WhatsApp</th>
                    <th className="px-4 py-3">Source</th>
                    <th className="px-4 py-3">Sujet</th>
                    <th className="px-4 py-3">Message</th>
                  </tr>
                </thead>
                <tbody>
                  {data.prospects.map((prospect, index) => (
                    <tr key={`${prospect.submittedAt}-${prospect.email}-${index}`} className="border-t border-white/8 text-white/68">
                      <td className="px-4 py-4 align-top">{prospect.submittedAt}</td>
                      <td className="px-4 py-4 align-top font-bold text-white">{prospect.name}</td>
                      <td className="px-4 py-4 align-top">{prospect.email}</td>
                      <td className="px-4 py-4 align-top">{prospect.whatsapp}</td>
                      <td className="px-4 py-4 align-top">{prospect.source}</td>
                      <td className="px-4 py-4 align-top">{prospect.interest}</td>
                      <td className="max-w-md px-4 py-4 align-top leading-6">{prospect.message}</td>
                    </tr>
                  ))}
                  {data.prospects.length === 0 ? (
                    <tr>
                      <td colSpan="7" className="px-4 py-8 text-center text-white/52">
                        Aucun prospect enregistré pour le moment.
                      </td>
                    </tr>
                  ) : null}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
