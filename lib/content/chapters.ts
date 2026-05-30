import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

type EditorialStatus =
  | "source-imported"
  | "drafted"
  | "reviewed"
  | "published"
  | "needs-revision";

type ReadingStatus = "not-started" | "in-progress" | "completed";

interface ChapterMatter {
  id: string;
  order: number;
  slug: string;
  title: string;
  sourceBook: string;
  sourceLabel: string;
  summary: string;
  learningObjectives: string[];
  takeaways: string[];
  declaredSections: string[];
  tags: string[];
  concepts: string[];
  visualizations: string[];
  examples: string[];
  reviewItems: string[];
  relatedChapters: string[];
  readingEstimateMinutes: number;
  readingStatus: ReadingStatus;
  editorialStatus: EditorialStatus;
}

interface ParsedChapterRecord {
  frontmatter: ChapterMatter;
  body: string;
  filePath: string;
}

export interface ChapterSummary {
  id: string;
  order: number;
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  readingEstimateMinutes: number;
  readingStatus: ReadingStatus;
  editorialStatus: EditorialStatus;
  sourceLabel: string;
  route: string;
}

export interface ChapterLessonSection {
  id: string;
  chapterId: string;
  slug: string;
  heading: string;
  originalExplanation: string;
  summary: string;
  takeaways: string[];
  concepts: string[];
  visualizations: string[];
  examples: string[];
  reviewItems: string[];
  quotes: [];
  editorialStatus: EditorialStatus;
  anchor: string;
  body: string;
  position: number;
}

export interface ChapterLesson {
  id: string;
  order: number;
  slug: string;
  title: string;
  summary: string;
  learningObjectives: string[];
  takeaways: string[];
  tags: string[];
  concepts: string[];
  visualizations: string[];
  examples: string[];
  reviewItems: string[];
  relatedChapters: string[];
  readingEstimateMinutes: number;
  readingStatus: ReadingStatus;
  editorialStatus: EditorialStatus;
  body: string;
  route: string;
  sourceBook: string;
  sourceLabel: string;
  sections: ChapterLessonSection[];
  previous?: ChapterSummary;
  next?: ChapterSummary;
}

export interface ChapterStats {
  total: number;
  drafted: number;
  published: number;
  totalReadingMinutes: number;
}

const chapterContentRoot = path.join(process.cwd(), "content", "chapters");

function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function asString(value: unknown, fallback = ""): string {
  return typeof value === "string" && value.length > 0 ? value : fallback;
}

function asNumber(value: unknown, fallback: number): number {
  return typeof value === "number" && Number.isFinite(value) ? value : fallback;
}

function asStringArray(value: unknown): string[] {
  return Array.isArray(value)
    ? value.filter((item): item is string => typeof item === "string")
    : [];
}

function asReadingStatus(value: unknown): ReadingStatus {
  if (value === "in-progress" || value === "completed") {
    return value;
  }

  return "not-started";
}

function asEditorialStatus(value: unknown): EditorialStatus {
  if (
    value === "source-imported" ||
    value === "drafted" ||
    value === "reviewed" ||
    value === "published" ||
    value === "needs-revision"
  ) {
    return value;
  }

  return "drafted";
}

function normalizeChapterMatter(data: Record<string, unknown>): ChapterMatter {
  const source =
    typeof data.source === "object" && data.source !== null
      ? (data.source as Record<string, unknown>)
      : {};

  return {
    id: asString(data.id),
    order: asNumber(data.order, 0),
    slug: asString(data.slug),
    title: asString(data.title),
    sourceBook: asString(source.book, "building-microservices-2e"),
    sourceLabel: asString(source.chapterLabel, "Source chapter"),
    summary: asString(data.summary),
    learningObjectives: asStringArray(data.learningObjectives),
    takeaways: asStringArray(data.takeaways),
    declaredSections: asStringArray(data.sections),
    tags: asStringArray(data.tags),
    concepts: asStringArray(data.concepts),
    visualizations: asStringArray(data.visualizations),
    examples: asStringArray(data.examples),
    reviewItems: asStringArray(data.reviewItems),
    relatedChapters: asStringArray(data.relatedChapters),
    readingEstimateMinutes: asNumber(data.readingEstimateMinutes, 20),
    readingStatus: asReadingStatus(data.readingStatus),
    editorialStatus: asEditorialStatus(data.editorialStatus),
  };
}

async function discoverChapterFiles(): Promise<string[]> {
  const entries = await fs.readdir(chapterContentRoot, { withFileTypes: true }).catch((error) => {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return [];
    }

    throw error;
  });

  return entries
    .filter((entry) => entry.isFile() && /\.mdx?$/i.test(entry.name))
    .map((entry) => path.join(chapterContentRoot, entry.name))
    .sort((left, right) => left.localeCompare(right));
}

async function readChapterFile(filePath: string): Promise<ParsedChapterRecord> {
  const source = await fs.readFile(filePath, "utf8");
  const parsed = matter(source);

  return {
    frontmatter: normalizeChapterMatter(parsed.data),
    body: parsed.content.trim(),
    filePath,
  };
}

async function loadChapterRecords(): Promise<ParsedChapterRecord[]> {
  const files = await discoverChapterFiles();
  const records = await Promise.all(files.map(readChapterFile));

  return records.sort(
    (left, right) => left.frontmatter.order - right.frontmatter.order,
  );
}

function firstParagraph(markdown: string, fallback: string): string {
  const paragraph = markdown
    .split(/\n{2,}/)
    .map((part) => part.trim())
    .find((part) => part.length > 0 && !part.startsWith("-") && !part.startsWith("#"));

  return paragraph?.replace(/\s+/g, " ") ?? fallback;
}

function bulletTakeaways(markdown: string, fallback: string[]): string[] {
  const bullets = markdown
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.startsWith("- "))
    .map((line) => line.replace(/^-\s+/, "").trim())
    .filter(Boolean)
    .slice(0, 4);

  return bullets.length > 0 ? bullets : fallback;
}

function parseChapterSections(
  chapter: ChapterMatter,
  body: string,
): ChapterLessonSection[] {
  const headings = [...body.matchAll(/^##\s+(.+)$/gm)];

  if (headings.length === 0) {
    const fallbackSlug = "overview";
    return [
      {
        id: chapter.declaredSections[0] ?? `${chapter.id}-${fallbackSlug}`,
        chapterId: chapter.id,
        slug: fallbackSlug,
        heading: "Overview",
        originalExplanation: body,
        summary: firstParagraph(body, chapter.summary),
        takeaways: bulletTakeaways(body, chapter.takeaways),
        concepts: chapter.concepts,
        visualizations: chapter.visualizations,
        examples: chapter.examples,
        reviewItems: chapter.reviewItems,
        quotes: [],
        editorialStatus: chapter.editorialStatus,
        anchor: fallbackSlug,
        body,
        position: 1,
      },
    ];
  }

  return headings.map((heading, index) => {
    const headingText = heading[1].trim();
    const start = (heading.index ?? 0) + heading[0].length;
    const nextHeading = headings[index + 1];
    const end = nextHeading?.index ?? body.length;
    const sectionBody = body.slice(start, end).trim();
    const sectionSlug = slugify(headingText);

    return {
      id: chapter.declaredSections[index] ?? `${chapter.id}-${sectionSlug}`,
      chapterId: chapter.id,
      slug: sectionSlug,
      heading: headingText,
      originalExplanation: sectionBody,
      summary: firstParagraph(sectionBody, chapter.summary),
      takeaways: bulletTakeaways(sectionBody, chapter.takeaways),
      concepts: chapter.concepts,
      visualizations: chapter.visualizations,
      examples: chapter.examples,
      reviewItems: chapter.reviewItems,
      quotes: [],
      editorialStatus: chapter.editorialStatus,
      anchor: sectionSlug,
      body: sectionBody,
      position: index + 1,
    };
  });
}

function toSummary(chapter: ChapterLesson): ChapterSummary {
  return {
    id: chapter.id,
    order: chapter.order,
    slug: chapter.slug,
    title: chapter.title,
    summary: chapter.summary,
    tags: chapter.tags,
    readingEstimateMinutes: chapter.readingEstimateMinutes,
    readingStatus: chapter.readingStatus,
    editorialStatus: chapter.editorialStatus,
    sourceLabel: chapter.sourceLabel,
    route: chapter.route,
  };
}

function toLesson(record: ParsedChapterRecord): ChapterLesson {
  const frontmatter = record.frontmatter;

  return {
    id: frontmatter.id,
    order: frontmatter.order,
    slug: frontmatter.slug,
    title: frontmatter.title,
    summary: frontmatter.summary,
    learningObjectives: frontmatter.learningObjectives,
    takeaways: frontmatter.takeaways,
    tags: frontmatter.tags,
    concepts: frontmatter.concepts,
    visualizations: frontmatter.visualizations,
    examples: frontmatter.examples,
    reviewItems: frontmatter.reviewItems,
    relatedChapters: frontmatter.relatedChapters,
    readingEstimateMinutes: frontmatter.readingEstimateMinutes,
    readingStatus: frontmatter.readingStatus,
    editorialStatus: frontmatter.editorialStatus,
    body: record.body,
    route: `/chapters/${frontmatter.slug}`,
    sourceBook: frontmatter.sourceBook,
    sourceLabel: frontmatter.sourceLabel,
    sections: parseChapterSections(frontmatter, record.body),
  };
}

function withAdjacentChapters(chapters: ChapterLesson[]): ChapterLesson[] {
  return chapters.map((chapter, index) => ({
    ...chapter,
    previous: chapters[index - 1] ? toSummary(chapters[index - 1]) : undefined,
    next: chapters[index + 1] ? toSummary(chapters[index + 1]) : undefined,
  }));
}

export async function getAllChapters(): Promise<ChapterLesson[]> {
  const records = await loadChapterRecords();
  const chapters = records.map(toLesson);

  return withAdjacentChapters(chapters);
}

export async function getChapterSummaries(): Promise<ChapterSummary[]> {
  const chapters = await getAllChapters();

  return chapters.map(toSummary);
}

export async function getFeaturedChapters(limit = 4): Promise<ChapterSummary[]> {
  const chapters = await getChapterSummaries();

  return chapters.filter((chapter) => chapter.order > 0).slice(0, limit);
}

export async function getChapterBySlug(
  slug: string,
): Promise<ChapterLesson | undefined> {
  const chapters = await getAllChapters();

  return chapters.find((chapter) => chapter.slug === slug);
}

export async function getChapterStats(): Promise<ChapterStats> {
  const chapters = await getChapterSummaries();

  return {
    total: chapters.length,
    drafted: chapters.filter((chapter) => chapter.editorialStatus === "drafted").length,
    published: chapters.filter((chapter) => chapter.editorialStatus === "published").length,
    totalReadingMinutes: chapters.reduce(
      (total, chapter) => total + chapter.readingEstimateMinutes,
      0,
    ),
  };
}
