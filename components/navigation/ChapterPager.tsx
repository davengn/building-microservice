import type { Route } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { ChapterSummary } from "@/lib/content/chapters";

function PagerCard({
  chapter,
  direction,
}: {
  chapter: ChapterSummary;
  direction: "previous" | "next";
}) {
  const href = `/chapters/${chapter.slug}` as Route;
  const label = direction === "previous" ? "Previous chapter" : "Next chapter";

  return (
    <Link
      className="group rounded-lg border border-hairline bg-canvas p-5 shadow-subtle transition hover:-translate-y-0.5 hover:shadow-card"
      href={href}
    >
      <span className="flex items-center gap-2 text-xs font-semibold uppercase text-primary">
        {direction === "previous" ? (
          <ArrowLeft aria-hidden="true" className="size-4" />
        ) : null}
        {label}
        {direction === "next" ? <ArrowRight aria-hidden="true" className="size-4" /> : null}
      </span>
      <span className="mt-3 block text-base font-semibold leading-snug text-ink-charcoal group-hover:text-primary">
        {chapter.title}
      </span>
      <span className="mt-2 block text-sm leading-6 text-ink-slate">{chapter.summary}</span>
    </Link>
  );
}

export function ChapterPager({
  previous,
  next,
}: {
  previous?: ChapterSummary;
  next?: ChapterSummary;
}) {
  if (!previous && !next) {
    return null;
  }

  return (
    <nav aria-label="Previous and next chapters" className="grid gap-4 sm:grid-cols-2">
      {previous ? <PagerCard chapter={previous} direction="previous" /> : <div />}
      {next ? <PagerCard chapter={next} direction="next" /> : <div />}
    </nav>
  );
}
