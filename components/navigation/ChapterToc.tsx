import { ListTree } from "lucide-react";
import type { ChapterLessonSection } from "@/lib/content/chapters";
import { cn } from "@/lib/utils";

export function ChapterToc({
  sections,
  className,
  variant = "desktop",
}: {
  sections: ChapterLessonSection[];
  className?: string;
  variant?: "desktop" | "mobile";
}) {
  const list = (
    <nav aria-label="Chapter table of contents" className="grid gap-1">
      {sections.map((section) => (
        <a
          className="rounded-md px-3 py-2 text-sm leading-5 text-ink-slate hover:bg-surface hover:text-ink"
          href={`#${section.anchor}`}
          key={section.id}
        >
          {section.heading}
        </a>
      ))}
    </nav>
  );

  if (variant === "mobile") {
    return (
      <details
        className={cn("rounded-lg border border-hairline bg-canvas p-4", className)}
        open
      >
        <summary className="flex cursor-pointer items-center gap-2 text-sm font-semibold text-ink-charcoal">
          <ListTree aria-hidden="true" className="size-4 text-primary" />
          Chapter contents
        </summary>
        <div className="mt-3">{list}</div>
      </details>
    );
  }

  return (
    <aside className={cn("rounded-lg border border-hairline bg-canvas p-4 shadow-subtle", className)}>
      <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-ink-charcoal">
        <ListTree aria-hidden="true" className="size-4 text-primary" />
        Contents
      </div>
      {list}
    </aside>
  );
}
