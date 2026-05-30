import type { Route } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Clock,
  Network,
  Search,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getChapterStats, getFeaturedChapters } from "@/lib/content/chapters";

const studyLanes = [
  { label: "Read", value: "Guided lessons", tint: "bg-tint-lavender" },
  { label: "Connect", value: "Concept graph", tint: "bg-tint-mint" },
  { label: "Review", value: "Takeaway prompts", tint: "bg-tint-yellow" },
];

export default async function HomePage() {
  const [featuredChapters, stats] = await Promise.all([
    getFeaturedChapters(4),
    getChapterStats(),
  ]);

  return (
    <main className="bg-canvas text-ink">
      <section className="bg-brand-navy px-4 py-14 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-content gap-10 lg:grid-cols-[minmax(0,1fr)_440px] lg:items-center">
          <div className="max-w-3xl">
            <Badge className="border-white/15 bg-white/10 text-white" variant="outline">
              Building Microservices Study Companion
            </Badge>
            <h1 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Study microservices as a connected engineering workspace.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
              Move through original chapter lessons, track reading progress, and
              revisit the tradeoffs behind service boundaries, communication,
              deployment, observability, and team ownership.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="on-dark">
                <Link href="/chapters">
                  <BookOpen aria-hidden="true" />
                  Browse chapters
                </Link>
              </Button>
              <Button asChild variant="outline-on-dark">
                <a href="/search">
                  <Search aria-hidden="true" />
                  Search concepts
                </a>
              </Button>
            </div>
          </div>

          <div className="rounded-lg border border-white/15 bg-white p-4 text-ink shadow-mockup">
            <div className="flex items-center justify-between border-b border-hairline pb-3">
              <div>
                <p className="text-sm font-semibold text-ink-charcoal">Study board</p>
                <p className="text-xs text-ink-steel">Chapter sequence workspace</p>
              </div>
              <span className="rounded-full bg-tint-mint px-3 py-1 text-xs font-semibold text-brand-green">
                {stats.drafted} drafts
              </span>
            </div>

            <div className="grid gap-3 py-4">
              {studyLanes.map((lane) => (
                <div
                  className="grid grid-cols-[88px_1fr_auto] items-center gap-3 rounded-md border border-hairline bg-surface-soft px-3 py-3"
                  key={lane.label}
                >
                  <span className={`h-2 rounded-full ${lane.tint}`} />
                  <div>
                    <p className="text-sm font-semibold text-ink-charcoal">{lane.label}</p>
                    <p className="text-xs text-ink-steel">{lane.value}</p>
                  </div>
                  <CheckCircle2 aria-hidden="true" className="size-4 text-brand-green" />
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-2 border-t border-hairline pt-3 text-center">
              <div>
                <p className="text-lg font-semibold text-ink">{stats.total}</p>
                <p className="text-xs text-ink-steel">chapters</p>
              </div>
              <div>
                <p className="text-lg font-semibold text-ink">
                  {Math.round(stats.totalReadingMinutes / 60)}h
                </p>
                <p className="text-xs text-ink-steel">study time</p>
              </div>
              <div>
                <p className="text-lg font-semibold text-ink">0</p>
                <p className="text-xs text-ink-steel">raw sources</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-content">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase text-primary">Start reading</p>
              <h2 className="mt-2 text-3xl font-semibold leading-tight text-ink">
                First lessons in the path
              </h2>
            </div>
            <Button asChild variant="secondary">
              <Link href="/chapters">
                View all chapters
                <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {featuredChapters.map((chapter) => {
              const href = `/chapters/${chapter.slug}` as Route;

              return (
                <Link
                  className="rounded-lg border border-hairline bg-canvas p-5 shadow-subtle transition hover:-translate-y-0.5 hover:shadow-card"
                  href={href}
                  key={chapter.id}
                >
                  <div className="flex items-center justify-between gap-3">
                    <Badge variant="outline">{chapter.sourceLabel}</Badge>
                    <span className="flex items-center gap-1 text-xs text-ink-steel">
                      <Clock aria-hidden="true" className="size-3.5" />
                      {chapter.readingEstimateMinutes}m
                    </span>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold leading-snug text-ink-charcoal">
                    {chapter.title}
                  </h3>
                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-ink-slate">
                    {chapter.summary}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-hairline bg-surface-soft px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-content flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-md bg-brand-navy text-white">
              <Network aria-hidden="true" className="size-5" />
            </span>
            <div>
              <h2 className="text-lg font-semibold text-ink-charcoal">
                Static-first and source-safe
              </h2>
              <p className="text-sm leading-6 text-ink-slate">
                Public pages render original notes and navigation without exposing
                private source files.
              </p>
            </div>
          </div>
          <Button asChild variant="ghost">
            <Link href="/chapters">Continue to chapter index</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
