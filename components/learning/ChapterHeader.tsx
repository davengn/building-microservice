import { Clock, Layers3 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { ChapterLesson } from "@/lib/content/chapters";

export function ChapterHeader({ chapter }: { chapter: ChapterLesson }) {
  return (
    <header className="rounded-lg border border-hairline bg-canvas p-6 shadow-subtle sm:p-8">
      <div className="flex flex-wrap items-center gap-2">
        <Badge variant="outline">{chapter.sourceLabel}</Badge>
        <Badge variant={chapter.editorialStatus === "published" ? "success" : "warning"}>
          {chapter.editorialStatus}
        </Badge>
      </div>

      <h1 className="mt-5 max-w-3xl text-3xl font-semibold leading-tight text-ink sm:text-4xl">
        {chapter.title}
      </h1>
      <p className="mt-4 max-w-3xl text-base leading-7 text-ink-slate sm:text-lg">
        {chapter.summary}
      </p>

      <div className="mt-6 flex flex-wrap gap-3 text-sm text-ink-slate">
        <span className="inline-flex items-center gap-2 rounded-md bg-surface px-3 py-2">
          <Clock aria-hidden="true" className="size-4 text-primary" />
          {chapter.readingEstimateMinutes} min lesson
        </span>
        <span className="inline-flex items-center gap-2 rounded-md bg-surface px-3 py-2">
          <Layers3 aria-hidden="true" className="size-4 text-primary" />
          {chapter.sections.length} guided sections
        </span>
      </div>

      {chapter.learningObjectives.length > 0 ? (
        <div className="mt-7 border-t border-hairline pt-5">
          <h2 className="text-sm font-semibold uppercase text-ink-charcoal">
            Learning objectives
          </h2>
          <ul className="mt-3 grid gap-2 text-sm leading-6 text-ink-slate">
            {chapter.learningObjectives.map((objective) => (
              <li className="flex gap-2" key={objective}>
                <span className="mt-2 size-1.5 rounded-full bg-primary" />
                <span>{objective}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  );
}
