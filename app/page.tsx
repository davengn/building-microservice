const highlights = [
  "Guided chapter lessons",
  "Original concept diagrams",
  "Searchable study graph",
  "Review-ready takeaways",
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-canvas text-ink">
      <section className="bg-brand-navy px-6 py-20 text-white sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-content gap-10 lg:grid-cols-[1fr_420px] lg:items-center">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase text-white/60">
              Building Microservices Study Companion
            </p>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-7xl">
              A workspace for understanding microservices, one concept at a
              time.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
              Public pages will contain original notes, guided lessons,
              diagrams, examples, and review tools derived from private local
              source material.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                className="rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground"
                href="/chapters"
              >
                Browse chapters
              </a>
              <a
                className="rounded-md border border-white/35 px-5 py-3 text-sm font-medium text-white"
                href="/search"
              >
                Search concepts
              </a>
            </div>
          </div>

          <div className="rounded-lg border border-hairline bg-canvas p-4 text-ink shadow-mockup">
            <div className="rounded-md border border-hairline bg-surface p-4">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm font-semibold text-ink-charcoal">
                  Study board
                </span>
                <span className="rounded-full bg-tint-lavender px-3 py-1 text-xs font-semibold text-brand-purple">
                  Draft
                </span>
              </div>
              <div className="space-y-3">
                {highlights.map((item) => (
                  <div
                    className="rounded-lg border border-hairline bg-canvas p-3 text-sm text-ink-slate"
                    key={item}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
