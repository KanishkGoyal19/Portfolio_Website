import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-50">
      <main className="max-w-5xl mx-auto px-6 md:px-12 pt-28 pb-20 flex flex-col gap-10">
        <div className="flex items-center gap-3 text-orange-200 uppercase tracking-[0.2em] text-xs md:text-sm">
          <span className="h-px w-10 bg-orange-200/60" />
          <span>Page Not Found</span>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-orange-100">
            404 — This page drifted off course
          </h1>
          <p className="text-base md:text-lg text-slate-200 max-w-3xl">
            The link you followed doesn’t exist. Head back to the main portfolio or open the Work Term Report.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Link
            href="/main#hero"
            className="group inline-flex items-center justify-between rounded-2xl border border-orange-200/40 bg-orange-50/10 px-5 py-4 text-orange-100 transition hover:border-orange-200 hover:bg-orange-50/20"
          >
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-orange-200">Portfolio</p>
              <p className="text-lg font-semibold">Return to Home</p>
            </div>
            <span className="text-orange-200 transition group-hover:translate-x-1">→</span>
          </Link>

          <Link
            href="/wtr"
            className="group inline-flex items-center justify-between rounded-2xl border border-slate-700 bg-slate-900 px-5 py-4 text-slate-50 transition hover:border-slate-500 hover:bg-slate-800"
          >
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-orange-200">Reports</p>
              <p className="text-lg font-semibold">Open Work Term Report</p>
            </div>
            <span className="text-orange-200 transition group-hover:translate-x-1">→</span>
          </Link>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 px-5 py-4 text-sm text-slate-300">
          If you believe this is an error, check the URL or contact me via the form on the main page.
        </div>
      </main>
    </div>
  );
}
