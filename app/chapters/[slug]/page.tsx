import type { Metadata, Route } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BookOpen } from "lucide-react";
import { ReaderShell } from "@/components/layout/ReaderShell";
import { ChapterHeader } from "@/components/learning/ChapterHeader";
import { ReadingProgress } from "@/components/learning/ReadingProgress";
import { SectionBlock } from "@/components/learning/SectionBlock";
import { SourceNote } from "@/components/learning/SourceNote";
import { TakeawayList } from "@/components/learning/TakeawayList";
import { ChapterPager } from "@/components/navigation/ChapterPager";
import { ChapterToc } from "@/components/navigation/ChapterToc";
import { Badge } from "@/components/ui/badge";
import {
  getAllChapters,
  getChapterBySlug,
  getChapterSummaries,
} from "@/lib/content/chapters";

interface ChapterPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const chapters = await getChapterSummaries();

  return chapters.map((chapter) => ({
    slug: chapter.slug,
  }));
}

export async function generateMetadata({
  params,
}: ChapterPageProps): Promise<Metadata> {
  const { slug } = await params;
  const chapter = await getChapterBySlug(slug);

  if (!chapter) {
    return {
      title: "Chapter not found",
    };
  }

  return {
    title: chapter.title,
    description: chapter.summary,
    alternates: {
      canonical: `/chapters/${chapter.slug}`,
    },
  };
}

export default async function ChapterPage({ params }: ChapterPageProps) {
  const { slug } = await params;
  const [chapter, chapters] = await Promise.all([
    getChapterBySlug(slug),
    getAllChapters(),
  ]);

  if (!chapter) {
    notFound();
  }

  const sidebar = (
    <nav
      aria-label="Chapter sequence"
      className="rounded-lg border border-hairline bg-canvas p-3 shadow-subtle"
    >
      <div className="mb-3 flex items-center gap-2 px-2 text-sm font-semibold text-ink-charcoal">
        <BookOpen aria-hidden="true" className="size-4 text-primary" />
        Chapters
      </div>
      <div className="grid gap-1">
        {chapters.map((item) => {
          const href = `/chapters/${item.slug}` as Route;
          const active = item.slug === chapter.slug;

          return (
            <Link
              aria-current={active ? "page" : undefined}
              className={
                active
                  ? "rounded-md bg-tint-lavender px-3 py-2 text-sm font-semibold text-brand-purple"
                  : "rounded-md px-3 py-2 text-sm text-ink-slate hover:bg-surface hover:text-ink"
              }
              href={href}
              key={item.id}
            >
              {item.order.toString().padStart(2, "0")}. {item.title}
            </Link>
          );
        })}
      </div>
    </nav>
  );

  return (
    <ReaderShell
      mobileToc={<ChapterToc sections={chapter.sections} variant="mobile" />}
      sidebar={sidebar}
      toc={
        <>
          <ChapterToc sections={chapter.sections} />
        </>
      }
    >
      <ChapterHeader chapter={chapter} />
      <ReadingProgress
        chapterSlug={chapter.slug}
        chapterTitle={chapter.title}
        totalChapters={chapters.length}
      />
      <TakeawayList takeaways={chapter.takeaways} />
      {chapter.sections.map((section) => (
        <SectionBlock key={section.id} section={section} />
      ))}
      <SourceNote sourceLabel={chapter.sourceLabel} />
      <div className="flex flex-wrap gap-2">
        {chapter.tags.map((tag) => (
          <Badge key={tag} variant="secondary">
            {tag}
          </Badge>
        ))}
      </div>
      <ChapterPager next={chapter.next} previous={chapter.previous} />
    </ReaderShell>
  );
}
