const featureCards = [
  {
    title: "Automated Telemetry Sync",
    description:
      "Serverless log processing captures high-volume events without sacrificing fidelity or operator clarity.",
  },
  {
    title: "Edge Mutation Controls",
    description:
      "Globally distributed caching arrays route state changes through deterministic policy layers in milliseconds.",
  },
  {
    title: "PostgreSQL Connection Pooling",
    description:
      "Query execution thread balancing reduces contention and preserves stable throughput across dense workloads.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0C] text-[#F4F4F5]">
      <div className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.06),_transparent_30%),radial-gradient(circle_at_90%_10%,_rgba(113,113,122,0.12),_transparent_24%)]" />
        <div className="absolute inset-0 -z-10 opacity-35 [background-image:linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:56px_56px]" />

        <header className="border-b border-[#1F1F23] bg-[#0A0A0C]">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
            <a
              href="#"
              className="text-sm font-semibold tracking-[0.35em] text-[#F4F4F5]"
            >
              aero//metrics
            </a>
            <nav className="hidden items-center gap-6 text-sm text-[#A1A1AA] md:flex">
              <a href="#" className="transition hover:text-[#F4F4F5]">
                Infrastructure
              </a>
              <a href="#" className="transition hover:text-[#F4F4F5]">
                Performance Logs
              </a>
            </nav>
            <a
              href="#"
              className="rounded-md border border-[#1F1F23] bg-[#111115] px-3 py-2 text-[11px] font-medium uppercase tracking-[0.24em] text-[#F4F4F5] transition hover:border-[#3F3F46]"
            >
              View Repository
            </a>
          </div>
        </header>

        <main className="mx-auto flex max-w-7xl flex-col px-4 pb-16 pt-8 sm:px-6 lg:px-8 lg:pb-24 lg:pt-12">
          <section className="grid gap-8 py-8 sm:py-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-10 lg:py-16">
            <div className="max-w-2xl text-center lg:mx-0 lg:text-left">
              <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.3em] text-[#A1A1AA]">
                Sub-second instrumentation
              </p>
              <h1 className="text-4xl font-semibold leading-[0.95] tracking-[-0.03em] text-[#F4F4F5] sm:text-5xl lg:text-6xl">
                Real-time pipeline analytics engineered for zero latency.
              </h1>
              <p className="mt-6 text-lg leading-8 text-[#A1A1AA] sm:text-xl">
                AeroMetrics instruments live database operations with sub-second
                visibility so platform teams can identify pressure points before service
                impact reaches customers.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
                <a
                  href="#"
                  className="rounded-md bg-[#F4F4F5] px-5 py-3 text-center text-sm font-medium text-[#0A0A0C] transition hover:bg-white"
                >
                  Deploy Core Engine
                </a>
                <a
                  href="#"
                  className="rounded-md border border-[#1F1F23] bg-[#0A0A0C] px-5 py-3 text-center text-sm font-medium text-[#F4F4F5] transition hover:border-[#3F3F46] hover:bg-[#111115]"
                >
                  Read Technical Docs
                </a>
              </div>
            </div>

            <article className="rounded-md border border-[#1F1F23] bg-[#111115] p-3 sm:p-4">
              <div className="rounded-md border border-[#1F1F23] bg-[#0A0A0C] p-4 sm:p-6">
                <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.28em] text-[#A1A1AA]">
                      Live infrastructure monitor
                    </p>
                    <p className="mt-1 text-sm text-[#F4F4F5]">
                      Operations control plane
                    </p>
                  </div>
                  <div className="rounded-md border border-[#1F1F23] bg-[#111115] px-3 py-1 text-xs text-[#A1A1AA]">
                    Stream connected
                  </div>
                </div>

                <div className="grid gap-3 md:grid-cols-3">
                  <div className="rounded-md border border-[#1F1F23] bg-[#111115] p-3">
                    <div className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                      <p className="text-[10px] uppercase tracking-[0.24em] text-[#A1A1AA]">
                        Active Network Streams
                      </p>
                    </div>
                    <p className="mt-3 text-lg font-semibold text-[#F4F4F5]">
                      2,481 / 2,500
                    </p>
                  </div>
                  <div className="rounded-md border border-[#1F1F23] bg-[#111115] p-3">
                    <p className="text-[10px] uppercase tracking-[0.24em] text-[#A1A1AA]">
                      Global Edge Latency
                    </p>
                    <p className="mt-3 text-lg font-semibold text-[#F4F4F5]">11.4ms</p>
                    <p className="mt-1 text-xs text-[#A1A1AA]">Top 99th Percentile</p>
                  </div>
                  <div className="rounded-md border border-[#1F1F23] bg-[#111115] p-3">
                    <p className="text-[10px] uppercase tracking-[0.24em] text-[#A1A1AA]">
                      Database Ingestion Rate
                    </p>
                    <p className="mt-3 text-lg font-semibold text-[#F4F4F5]">
                      48,102 req/sec
                    </p>
                    <div className="mt-3 h-1 w-4/5 bg-emerald-500" />
                  </div>
                </div>
              </div>
            </article>
          </section>

          <section className="rounded-md border border-[#1F1F23] bg-[#111115] p-4 sm:p-6 lg:p-8">
            <div className="mb-6">
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#A1A1AA]">
                Core capabilities
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-[-0.02em] text-[#F4F4F5] sm:text-3xl">
                Precise workflow control for dense operational environments.
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {featureCards.map((card) => (
                <article
                  key={card.title}
                  className="rounded-md border border-[#1F1F23] bg-[#0A0A0C] p-5 transition-all duration-200 hover:border-[#3F3F46]"
                >
                  <h3 className="text-lg font-semibold text-[#F4F4F5]">{card.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#A1A1AA]">
                    {card.description}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-8 rounded-md border border-[#1F1F23] bg-[#111115] p-4 sm:p-6 lg:p-8">
            <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
              <div>
                <p className="text-[11px] uppercase tracking-[0.3em] text-[#A1A1AA]">
                  System integration
                </p>
                <h2 className="mt-2 text-2xl font-semibold tracking-[-0.02em] text-[#F4F4F5] sm:text-3xl">
                  Connect your observability stack to production-grade workflows.
                </h2>
                <p className="mt-4 text-sm leading-7 text-[#A1A1AA]">
                  Share operational context with your teams and activate the
                  instrumentation layer in a single controlled intake.
                </p>
              </div>

              <form className="rounded-md border border-[#1F1F23] bg-[#0A0A0C] p-4 sm:p-5">
                <div className="grid gap-4">
                  <label className="block">
                    <span className="mb-2 block text-sm font-medium text-[#F4F4F5]">
                      Corporate Email Address
                    </span>
                    <input
                      type="email"
                      placeholder="ops@organization.com"
                      className="w-full rounded-md border border-[#1F1F23] bg-[#111115] px-3 py-3 text-sm text-[#F4F4F5] outline-none ring-0 placeholder:text-[#A1A1AA]"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-sm font-medium text-[#F4F4F5]">
                      Target Monthly Throughput
                    </span>
                    <input
                      type="text"
                      placeholder="e.g. 18 TB / month"
                      className="w-full rounded-md border border-[#1F1F23] bg-[#111115] px-3 py-3 text-sm text-[#F4F4F5] outline-none ring-0 placeholder:text-[#A1A1AA]"
                    />
                  </label>
                </div>
                <button
                  type="submit"
                  className="mt-5 w-full rounded-md bg-[#F4F4F5] px-4 py-3 text-sm font-medium text-[#0A0A0C] transition hover:bg-white"
                >
                  Initialize System Integration
                </button>
              </form>
            </div>
          </section>
        </main>

        <footer className="border-t border-[#1F1F23] bg-[#0A0A0C]">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-sm text-[#A1A1AA] sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
            <p>© 2026 AeroMetrics. Licensed for enterprise deployment.</p>
            <div className="flex gap-4">
              <a href="#" className="transition hover:text-[#F4F4F5]">
                SLA Policy
              </a>
              <a href="#" className="transition hover:text-[#F4F4F5]">
                Security Disclosures
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
