import type { ReactElement } from "react";
import type { ChapterLessonSection } from "@/lib/content/chapters";

function renderInline(text: string) {
  return text.split(/(`[^`]+`)/g).map((part, index) => {
    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <code
          className="rounded bg-surface px-1.5 py-0.5 text-[0.9em] text-ink-charcoal"
          key={`${part}-${index}`}
        >
          {part.slice(1, -1)}
        </code>
      );
    }

    return part;
  });
}

function MarkdownLite({ markdown }: { markdown: string }) {
  const lines = markdown.split("\n");
  const blocks: ReactElement[] = [];
  let paragraph: string[] = [];
  let list: string[] = [];

  function flushParagraph() {
    if (paragraph.length === 0) {
      return;
    }

    const text = paragraph.join(" ").trim();
    blocks.push(
      <p className="text-base leading-8 text-ink-slate" key={`p-${blocks.length}`}>
        {renderInline(text)}
      </p>,
    );
    paragraph = [];
  }

  function flushList() {
    if (list.length === 0) {
      return;
    }

    blocks.push(
      <ul className="grid gap-2 text-sm leading-6 text-ink-slate" key={`ul-${blocks.length}`}>
        {list.map((item) => (
          <li className="flex gap-3" key={item}>
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
            <span>{renderInline(item)}</span>
          </li>
        ))}
      </ul>,
    );
    list = [];
  }

  for (const line of lines) {
    const trimmed = line.trim();

    if (!trimmed) {
      flushParagraph();
      flushList();
      continue;
    }

    if (trimmed.startsWith("### ")) {
      flushParagraph();
      flushList();
      blocks.push(
        <h3
          className="pt-2 text-lg font-semibold leading-snug text-ink-charcoal"
          key={`h3-${blocks.length}`}
        >
          {trimmed.replace(/^###\s+/, "")}
        </h3>,
      );
      continue;
    }

    if (trimmed.startsWith("- ")) {
      flushParagraph();
      list.push(trimmed.replace(/^-\s+/, ""));
      continue;
    }

    flushList();
    paragraph.push(trimmed);
  }

  flushParagraph();
  flushList();

  return <div className="mt-4 grid gap-4">{blocks}</div>;
}

export function SectionBlock({ section }: { section: ChapterLessonSection }) {
  return (
    <section
      className="scroll-mt-28 rounded-lg border border-hairline bg-canvas p-6 shadow-subtle sm:p-8"
      id={section.anchor}
    >
      <p className="text-xs font-semibold uppercase text-primary">
        Section {section.position}
      </p>
      <h2 className="mt-2 text-2xl font-semibold leading-snug text-ink">
        {section.heading}
      </h2>
      <p className="mt-3 text-sm leading-6 text-ink-steel">{section.summary}</p>
      <MarkdownLite markdown={section.body} />
    </section>
  );
}
