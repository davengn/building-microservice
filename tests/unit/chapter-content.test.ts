import { describe, expect, it } from "vitest";
import { getAllChapters, getChapterBySlug } from "@/lib/content/chapters";
import { chapterFrontmatterSchema, sectionSchema } from "@/lib/content/schemas";

describe("chapter content schemas", () => {
  it("accepts a source-backed chapter frontmatter record with section ids", () => {
    const parsed = chapterFrontmatterSchema.parse({
      id: "chapter-99",
      order: 99,
      slug: "example-chapter",
      title: "Example Chapter",
      source: {
        book: "building-microservices-2e",
        chapterFile: "references/chapters/99_Example.md",
        chapterLabel: "Chapter 99",
      },
      summary: "An original public summary for a chapter starter.",
      learningObjectives: ["Explain the chapter goal in original wording."],
      takeaways: ["Use the lesson to guide study and review."],
      sections: ["chapter-99-overview"],
      tags: ["example"],
      readingEstimateMinutes: 20,
      editorialStatus: "drafted",
    });

    expect(parsed.sections).toEqual(["chapter-99-overview"]);
    expect(parsed.source.chapterFile).toContain("references/chapters/");
  });

  it("accepts a parsed chapter section with original explanation and takeaways", () => {
    const parsed = sectionSchema.parse({
      id: "chapter-99-overview",
      chapterId: "chapter-99",
      slug: "overview",
      heading: "Overview",
      originalExplanation: "Original study guidance written for the public lesson.",
      summary: "A short original section summary.",
      takeaways: ["Keep the source boundary clear."],
      concepts: [],
      visualizations: [],
      examples: [],
      reviewItems: [],
      quotes: [],
      editorialStatus: "drafted",
    });

    expect(parsed.chapterId).toBe("chapter-99");
    expect(parsed.takeaways).toHaveLength(1);
  });
});

describe("chapter content loading", () => {
  it("loads all public chapter starters in reading order", async () => {
    const chapters = await getAllChapters();

    expect(chapters).toHaveLength(18);
    expect(chapters.map((chapter) => chapter.order)).toEqual(
      [...chapters].map((chapter) => chapter.order).sort((left, right) => left - right),
    );
    expect(chapters[0].previous).toBeUndefined();
    expect(chapters[0].next?.id).toBe("chapter-01");
  });

  it("builds the guided lesson model without exposing private source paths in body content", async () => {
    const chapter = await getChapterBySlug("what-are-microservices");

    expect(chapter).toBeDefined();
    expect(chapter?.sections).toHaveLength(3);
    expect(chapter?.next?.slug).toBe("how-to-model-microservices");
    expect(chapter?.body).not.toContain("references/");
    expect(chapter?.sourceLabel).toBe("Chapter 1");
  });
});
