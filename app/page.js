const navItems = ["Product", "Workflow", "Pricing"];

const featureCards = [
  {
    title: "Speed",
    metric: "4 min",
    description:
      "Turn raw signal into launch-ready action before the next sprint starts.",
  },
  {
    title: "Scalability",
    metric: "14/14",
    description: "Run every pipeline and every team with one calm operational view.",
  },
  {
    title: "Observability",
    metric: "12ms",
    description: "Trace every edge, anomaly, and momentum shift in real time.",
  },
];

const workflowSteps = [
  {
    title: "Capture signal",
    text: "Connect your tools and feed product, support, and growth data into one place.",
  },
  {
    title: "Prioritize action",
    text: "Surface the moments that matter most with intelligent scoring and alerts.",
  },
  {
    title: "Ship with clarity",
    text: "Share momentum across teams and move from insight to execution in one motion.",
  },
];

const trustedBy = ["Northstar Labs", "Ravel AI", "Mira Cloud", "Apex Works"];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900">
      <div className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.11),_transparent_32%),radial-gradient(circle_at_85%_10%,_rgba(14,165,233,0.11),_transparent_28%)]" />
        <div className="absolute inset-0 -z-10 opacity-40 [background-image:linear-gradient(to_right,rgba(15,23,42,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.05)_1px,transparent_1px)] [background-size:64px_64px]" />

        <header className="border-b border-slate-200 bg-white/80">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
            <a
              href="#"
              className="text-sm font-semibold tracking-[0.35em] text-slate-900"
            >
              aero//metrics
            </a>
            <nav className="hidden items-center gap-7 text-sm text-slate-600 md:flex">
              {navItems.map((item) => (
                <a key={item} href="#" className="transition hover:text-slate-900">
                  {item}
                </a>
              ))}
            </nav>
            <a
              href="#"
              className="rounded-md border border-slate-200 bg-slate-950 px-3 py-2 text-[11px] font-medium uppercase tracking-[0.24em] text-white transition hover:bg-slate-800"
            >
              Launch App
            </a>
          </div>
        </header>

        <main className="mx-auto flex max-w-7xl flex-col px-4 pb-20 pt-8 sm:px-6 lg:px-8 lg:pt-12">
          <section className="grid gap-10 py-10 md:py-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-12 lg:py-20">
            <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left">
              <div className="mb-6 inline-flex rounded-full border border-slate-200 bg-white px-3 py-1 text-[11px] font-medium uppercase tracking-[0.3em] text-slate-500">
                AI velocity workflow
              </div>
              <h1 className="text-4xl font-semibold leading-[0.95] tracking-[-0.03em] text-slate-950 sm:text-5xl lg:text-7xl">
                See every move. Ship every sprint.
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-600 sm:text-xl">
                AeroMetrics turns live product signals into calm, decisive action for
                teams that move fast and build with precision.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
                <a
                  href="#"
                  className="rounded-md bg-slate-950 px-5 py-3 text-center text-sm font-medium text-white transition hover:bg-slate-800"
                >
                  Launch your workflow
                </a>
                <a
                  href="#"
                  className="rounded-md border border-slate-200 bg-white px-5 py-3 text-center text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
                >
                  Book a demo
                </a>
              </div>
            </div>

            <article className="rounded-2xl border border-slate-200 bg-white p-3 shadow-[0_10px_40px_rgba(15,23,42,0.06)] sm:p-4">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 sm:p-6">
                <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.28em] text-slate-500">
                      Live signal board
                    </p>
                    <p className="mt-1 text-sm text-slate-900">Velocity pulse</p>
                  </div>
                  <div className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600">
                    Syncing 24/7
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  <div className="rounded-lg border border-slate-200 bg-white p-3">
                    <p className="text-[10px] uppercase tracking-[0.24em] text-slate-500">
                      Active pipelines
                    </p>
                    <p className="mt-2 text-lg font-semibold text-slate-900">14/14</p>
                  </div>
                  <div className="rounded-lg border border-slate-200 bg-white p-3">
                    <p className="text-[10px] uppercase tracking-[0.24em] text-slate-500">
                      Edge latency
                    </p>
                    <p className="mt-2 text-lg font-semibold text-slate-900">12ms</p>
                  </div>
                  <div className="rounded-lg border border-slate-200 bg-white p-3">
                    <p className="text-[10px] uppercase tracking-[0.24em] text-slate-500">
                      Forecast accuracy
                    </p>
                    <p className="mt-2 text-lg font-semibold text-slate-900">96%</p>
                  </div>
                </div>

                <div className="mt-4 rounded-lg border border-slate-200 bg-white p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <p className="text-sm text-slate-900">Workflow trend</p>
                    <p className="text-xs text-slate-500">Last 7 days</p>
                  </div>
                  <svg
                    viewBox="0 0 320 140"
                    className="h-36 w-full"
                    aria-label="Usage trend chart"
                  >
                    <path
                      d="M0 100 C25 92, 40 80, 60 82 S95 92, 112 74 S150 54, 172 60 S205 86, 228 72 S275 42, 320 28"
                      fill="none"
                      stroke="#0f172a"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                    />
                    <path
                      d="M0 100 C25 92, 40 80, 60 82 S95 92, 112 74 S150 54, 172 60 S205 86, 228 72 S275 42, 320 28 L320 140 L0 140 Z"
                      fill="url(#chartFill)"
                    />
                    <defs>
                      <linearGradient id="chartFill" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="#0f172a" stopOpacity="0.14" />
                        <stop offset="100%" stopColor="#0f172a" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </article>
          </section>

          <section className="mb-8 rounded-2xl border border-slate-200 bg-white p-4 sm:p-6 lg:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-sm text-slate-500">Trusted by product teams at</p>
              <div className="flex flex-wrap gap-3">
                {trustedBy.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 px-3 py-2 text-sm text-slate-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-6 lg:p-8">
            <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
                  Product pillars
                </p>
                <h2 className="mt-1 text-2xl font-semibold tracking-[-0.02em] text-slate-950 sm:text-3xl">
                  Built for clean execution at every level.
                </h2>
              </div>
              <a
                href="#"
                className="text-sm text-slate-600 transition hover:text-slate-900"
              >
                Explore the stack →
              </a>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {featureCards.map((card) => (
                <article
                  key={card.title}
                  className="group rounded-xl border border-slate-200 bg-slate-50 p-5 transition-all duration-200 hover:scale-[1.01] hover:border-slate-300"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-900">
                      {card.title}
                    </span>
                    <span className="text-xs uppercase tracking-[0.24em] text-slate-500">
                      {card.metric}
                    </span>
                  </div>
                  <p className="text-sm leading-7 text-slate-600">{card.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-8 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-2xl border border-slate-200 bg-slate-950 p-6 text-white sm:p-8">
              <p className="text-[11px] uppercase tracking-[0.3em] text-slate-400">
                How it works
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-[-0.02em] text-white sm:text-3xl">
                From scattered signals to one sharp operating rhythm.
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-400">
                Replace fragmented updates with a single, beautiful command center your
                team can trust in every moment.
              </p>
              <a
                href="#"
                className="mt-6 inline-flex rounded-md bg-white px-4 py-2 text-sm font-medium text-slate-950 transition hover:bg-slate-100"
              >
                Start a free trial
              </a>
            </div>

            <div className="grid gap-4">
              {workflowSteps.map((step, index) => (
                <article
                  key={step.title}
                  className="rounded-2xl border border-slate-200 bg-white p-5"
                >
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-sm font-semibold text-slate-700">
                      0{index + 1}
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900">{step.title}</h3>
                  </div>
                  <p className="text-sm leading-7 text-slate-600">{step.text}</p>
                </article>
              ))}
            </div>
          </section>
        </main>

        <footer className="border-t border-slate-200 bg-white/80">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
            <p>© 2026 AeroMetrics. Built for calm, fast-moving teams.</p>
            <div className="flex gap-4">
              <a href="#" className="transition hover:text-slate-900">
                Privacy
              </a>
              <a href="#" className="transition hover:text-slate-900">
                Terms
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
