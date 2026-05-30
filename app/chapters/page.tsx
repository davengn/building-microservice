import type { Metadata, Route } from "next";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getChapterStats, getChapterSummaries } from "@/lib/content/chapters";

export const metadata: Metadata = {
  title: "Chapters",
  description:
    "Read the guided chapter sequence for the Microservices Learning Studio.",
};

export default async function ChaptersPage() {
  const [chapters, stats] = await Promise.all([
    getChapterSummaries(),
    getChapterStats(),
  ]);

  return (
    <main className="bg-surface-soft px-4 py-10 text-ink sm:px-6 lg:px-8">
      <div className="mx-auto max-w-content">
        <section className="rounded-lg bg-brand-navy p-6 text-white sm:p-8">
          <div className="max-w-3xl">
            <Badge className="border-white/15 bg-white/10 text-white" variant="outline">
              Guided lessons
            </Badge>
            <h1 className="mt-4 text-4xl font-semibold leading-tight">
              Study chapters in source order.
            </h1>
            <p className="mt-4 text-lg leading-8 text-white/75">
              Each lesson is an original public study page with summaries,
              takeaways, section navigation, local progress, and previous or next
              chapter links.
            </p>
          </div>
          <div className="mt-6 grid gap-3 text-sm sm:grid-cols-3">
            <div className="rounded-md border border-white/15 bg-white/10 p-4">
              <p className="text-2xl font-semibold">{stats.total}</p>
              <p className="text-white/70">chapter files</p>
            </div>
            <div className="rounded-md border border-white/15 bg-white/10 p-4">
              <p className="text-2xl font-semibold">{stats.drafted}</p>
              <p className="text-white/70">original drafts</p>
            </div>
            <div className="rounded-md border border-white/15 bg-white/10 p-4">
              <p className="text-2xl font-semibold">
                {Math.round(stats.totalReadingMinutes / 60)}h
              </p>
              <p className="text-white/70">estimated study time</p>
            </div>
          </div>
        </section>

        <section className="mt-8 grid gap-4">
          {chapters.map((chapter) => {
            const href = `/chapters/${chapter.slug}` as Route;

            return (
              <article
                className="rounded-lg border border-hairline bg-canvas p-5 shadow-subtle transition hover:shadow-card sm:p-6"
                key={chapter.id}
              >
                <div className="grid gap-5 lg:grid-cols-[96px_minmax(0,1fr)_auto] lg:items-start">
                  <div className="flex items-center gap-3 lg:block">
                    <span className="flex size-12 items-center justify-center rounded-md bg-tint-lavender text-sm font-semibold text-brand-purple">
                      {chapter.order.toString().padStart(2, "0")}
                    </span>
                    <Badge className="lg:mt-3" variant="outline">
                      {chapter.editorialStatus}
                    </Badge>
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge variant="secondary">{chapter.sourceLabel}</Badge>
                      <span className="inline-flex items-center gap-1 text-xs text-ink-steel">
                        <Clock aria-hidden="true" className="size-3.5" />
                        {chapter.readingEstimateMinutes} min
                      </span>
                    </div>
                    <h2 className="mt-3 text-2xl font-semibold leading-snug text-ink-charcoal">
                      {chapter.title}
                    </h2>
                    <p className="mt-3 max-w-3xl text-sm leading-6 text-ink-slate">
                      {chapter.summary}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {chapter.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button asChild variant="secondary">
                    <Link href={href}>
                      Open lesson
                      <ArrowRight aria-hidden="true" />
                    </Link>
                  </Button>
                </div>
              </article>
            );
          })}
        </section>
      </div>
    </main>
  );
}
