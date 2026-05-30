"use client";

import * as React from "react";
import { Check, Circle, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  countCompletedChapters,
  readChapterProgress,
  readProgress,
  type LocalReadingStatus,
  writeChapterProgress,
} from "@/lib/content/reading-progress";

const statusLabels: Record<LocalReadingStatus, string> = {
  "not-started": "Not started",
  "in-progress": "In progress",
  completed: "Completed",
};

export function ReadingProgress({
  chapterSlug,
  chapterTitle,
  totalChapters,
}: {
  chapterSlug: string;
  chapterTitle: string;
  totalChapters: number;
}) {
  const [status, setStatus] = React.useState<LocalReadingStatus>("not-started");
  const [completedCount, setCompletedCount] = React.useState(0);

  React.useEffect(() => {
    const allProgress = readProgress();
    setStatus(readChapterProgress(chapterSlug));
    setCompletedCount(countCompletedChapters(allProgress));
  }, [chapterSlug]);

  function setChapterStatus(nextStatus: LocalReadingStatus) {
    const nextProgress = writeChapterProgress(chapterSlug, nextStatus);
    setStatus(nextStatus);
    setCompletedCount(countCompletedChapters(nextProgress));
  }

  const percent = totalChapters > 0 ? Math.round((completedCount / totalChapters) * 100) : 0;

  return (
    <section
      aria-label={`Reading progress for ${chapterTitle}`}
      className="rounded-lg border border-hairline bg-canvas p-5 shadow-subtle"
    >
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-ink-charcoal">Reading progress</p>
          <p className="mt-1 text-xs text-ink-steel">
            {statusLabels[status]} · {completedCount} of {totalChapters} complete
          </p>
        </div>
        <span className="text-sm font-semibold text-primary">{percent}%</span>
      </div>

      <div className="mt-4 h-2 overflow-hidden rounded-full bg-surface">
        <div
          className="h-full rounded-full bg-primary transition-all"
          style={{ width: `${percent}%` }}
        />
      </div>

      <div className="mt-4 grid gap-2">
        <Button
          onClick={() => setChapterStatus("in-progress")}
          size="sm"
          type="button"
          variant={status === "in-progress" ? "primary" : "secondary"}
        >
          <Play aria-hidden="true" />
          Studying
        </Button>
        <Button
          onClick={() => setChapterStatus("completed")}
          size="sm"
          type="button"
          variant={status === "completed" ? "primary" : "secondary"}
        >
          <Check aria-hidden="true" />
          Complete
        </Button>
        <Button
          onClick={() => setChapterStatus("not-started")}
          size="sm"
          type="button"
          variant="ghost"
        >
          <Circle aria-hidden="true" />
          Reset
        </Button>
      </div>
    </section>
  );
}
