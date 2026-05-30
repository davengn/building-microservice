import { z } from "zod";

const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const idPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export const idSchema = z
  .string()
  .min(3)
  .regex(idPattern, "Use lowercase kebab-case IDs");

export const slugSchema = z
  .string()
  .min(2)
  .regex(slugPattern, "Use lowercase kebab-case slugs");

export const sourceChapterPathSchema = z
  .string()
  .regex(
    /^references\/chapters\/.+\.md$/,
    "Source chapter paths must stay under references/chapters/",
  );

export const editorialStatusSchema = z.enum([
  "source-imported",
  "drafted",
  "reviewed",
  "published",
  "needs-revision",
]);

export const readingStatusSchema = z.enum([
  "not-started",
  "in-progress",
  "completed",
]);

export const sourceBookSchema = z
  .string()
  .min(3)
  .default("building-microservices-2e");

export const sourceRefSchema = z
  .object({
    chapterId: idSchema.optional(),
    chapterSlug: slugSchema.optional(),
    chapterFile: sourceChapterPathSchema.optional(),
    chapterLabel: z.string().min(1).optional(),
    section: z.string().min(1).optional(),
    sectionId: idSchema.optional(),
    note: z.string().min(1).optional(),
  })
  .refine(
    (value) => Boolean(value.chapterId ?? value.chapterSlug ?? value.chapterFile),
    "A source reference must identify a chapter",
  );

export const chapterSourceSchema = z.object({
  book: sourceBookSchema,
  chapterFile: sourceChapterPathSchema,
  chapterLabel: z.string().min(1),
  section: z.string().min(1).optional(),
});

const shortTextSchema = z.string().min(1).max(280);
const explanationSchema = z.string().min(1).max(5000);

const quoteTextSchema = z.string().superRefine((value, ctx) => {
  const words = value.trim().split(/\s+/).filter(Boolean);

  if (words.length > 25) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Exact quotes must stay at or under 25 words",
    });
  }
});

export const quoteSchema = z.object({
  text: quoteTextSchema,
  attribution: z.string().min(1),
  sourceRef: sourceRefSchema.optional(),
  commentary: z.string().min(1),
});

export const sectionSchema = z.object({
  id: idSchema,
  chapterId: idSchema,
  slug: slugSchema,
  heading: z.string().min(1),
  sourceSection: z.string().min(1).optional(),
  sourceLocation: z.string().min(1).optional(),
  originalExplanation: explanationSchema,
  summary: shortTextSchema,
  takeaways: z.array(shortTextSchema).default([]),
  concepts: z.array(idSchema).default([]),
  visualizations: z.array(idSchema).default([]),
  examples: z.array(idSchema).default([]),
  reviewItems: z.array(idSchema).default([]),
  quotes: z.array(quoteSchema).default([]),
  editorialStatus: editorialStatusSchema,
});

export const chapterSchema = z.object({
  id: idSchema,
  order: z.number().int().nonnegative(),
  slug: slugSchema,
  title: z.string().min(1),
  sourcePath: sourceChapterPathSchema,
  sourceBook: sourceBookSchema,
  summary: shortTextSchema,
  learningObjectives: z.array(shortTextSchema).default([]),
  takeaways: z.array(shortTextSchema).default([]),
  sections: z.array(idSchema).default([]),
  concepts: z.array(idSchema).default([]),
  visualizations: z.array(idSchema).default([]),
  examples: z.array(idSchema).default([]),
  reviewItems: z.array(idSchema).default([]),
  relatedChapters: z.array(idSchema).default([]),
  tags: z.array(slugSchema).default([]),
  readingEstimateMinutes: z.number().int().positive(),
  readingStatus: readingStatusSchema.default("not-started"),
  editorialStatus: editorialStatusSchema,
});

export const chapterFrontmatterSchema = z.object({
  id: idSchema,
  order: z.number().int().nonnegative(),
  slug: slugSchema,
  title: z.string().min(1),
  source: chapterSourceSchema,
  summary: shortTextSchema,
  learningObjectives: z.array(shortTextSchema).default([]),
  takeaways: z.array(shortTextSchema).default([]),
  sections: z.array(idSchema).default([]),
  tags: z.array(slugSchema).default([]),
  concepts: z.array(idSchema).default([]),
  visualizations: z.array(idSchema).default([]),
  examples: z.array(idSchema).default([]),
  reviewItems: z.array(idSchema).default([]),
  relatedChapters: z.array(idSchema).default([]),
  readingEstimateMinutes: z.number().int().positive(),
  readingStatus: readingStatusSchema.default("not-started"),
  editorialStatus: editorialStatusSchema,
});

const balancedGuidanceSchema = z
  .array(z.string().min(1).max(500))
  .default([]);

export const conceptSchema = z
  .object({
    id: idSchema,
    slug: slugSchema,
    name: z.string().min(1),
    definition: shortTextSchema,
    summary: shortTextSchema,
    sourceRefs: z.array(sourceRefSchema).min(1),
    tags: z.array(slugSchema).default([]),
    relatedConcepts: z.array(idSchema).default([]),
    graphEdges: z.array(idSchema).default([]),
    diagrams: z.array(idSchema).default([]),
    examples: z.array(idSchema).default([]),
    tradeoffs: balancedGuidanceSchema,
    risks: balancedGuidanceSchema,
    alternatives: balancedGuidanceSchema,
    antiPatterns: balancedGuidanceSchema,
    commonMistakes: balancedGuidanceSchema,
    glossaryTerms: z.array(slugSchema).default([]),
    recommendedNextReading: z.array(idSchema).default([]),
    editorialStatus: editorialStatusSchema,
  })
  .refine(
    (value) =>
      value.tradeoffs.length > 0 ||
      value.risks.length > 0 ||
      value.alternatives.length > 0,
    "Concepts must include tradeoffs, risks, or alternatives",
  );

export const visualizationTypeSchema = z.enum([
  "mermaid",
  "react-flow",
  "svg",
  "comparison",
  "decision-tree",
  "animation",
]);

export const visualizationSchema = z.object({
  id: idSchema,
  slug: slugSchema,
  title: z.string().min(1),
  type: visualizationTypeSchema,
  conceptIds: z.array(idSchema).default([]),
  chapterIds: z.array(idSchema).default([]),
  sourceRefs: z.array(sourceRefSchema).default([]),
  description: shortTextSchema,
  accessibilityText: z.string().min(20),
  mobileFallback: z.string().min(10),
  dataFile: z.string().min(1).optional(),
  componentName: z.string().min(1).optional(),
  editorialStatus: editorialStatusSchema,
});

export const exampleSchema = z
  .object({
    id: idSchema,
    slug: slugSchema,
    title: z.string().min(1),
    context: z.enum([
      "startup",
      "enterprise",
      "migration",
      "platform",
      "operations",
      "security",
    ]),
    conceptIds: z.array(idSchema).default([]),
    chapterIds: z.array(idSchema).default([]),
    problem: z.string().min(1),
    approach: z.string().min(1),
    tradeoffs: balancedGuidanceSchema,
    failureModes: balancedGuidanceSchema,
    antiPatterns: balancedGuidanceSchema,
    lessons: z.array(z.string().min(1)).default([]),
    evidenceLevel: z.enum(["illustrative", "documented", "source-backed"]),
    sourceRefs: z.array(sourceRefSchema).default([]),
    editorialStatus: editorialStatusSchema,
  })
  .refine(
    (value) => value.tradeoffs.length > 0 || value.failureModes.length > 0,
    "Examples must include at least one tradeoff or failure mode",
  );

export const reviewItemSchema = z.object({
  id: idSchema,
  type: z.enum(["quiz", "flashcard", "exercise", "prompt"]),
  chapterIds: z.array(idSchema).default([]),
  conceptIds: z.array(idSchema).default([]),
  question: z.string().min(1),
  answer: z.string().min(1),
  explanation: z.string().min(1),
  difficulty: z.enum(["intro", "intermediate", "advanced"]),
  sourceRefs: z.array(sourceRefSchema).default([]),
  relatedSectionIds: z.array(idSchema).default([]),
  editorialStatus: editorialStatusSchema,
});

export const searchIndexEntrySchema = z.object({
  id: idSchema,
  type: z.enum([
    "chapter",
    "section",
    "concept",
    "visualization",
    "example",
    "glossary",
    "review",
  ]),
  title: z.string().min(1),
  slug: z.string().startsWith("/"),
  summary: shortTextSchema,
  bodyExcerpt: z.string().min(1).max(500).optional(),
  tags: z.array(slugSchema).default([]),
  chapterIds: z.array(idSchema).default([]),
  conceptIds: z.array(idSchema).default([]),
  priority: z.number().int().min(0).max(100).default(50),
});

export const knowledgeGraphEdgeSchema = z.object({
  id: idSchema,
  sourceId: idSchema,
  targetId: idSchema,
  relationship: z.enum([
    "depends-on",
    "contrasts-with",
    "enables",
    "mitigates",
    "extends",
    "appears-in",
    "example-of",
  ]),
  label: z.string().min(1).max(80),
  rationale: z.string().min(1).max(500),
  chapterRefs: z.array(idSchema).default([]),
  strength: z.enum(["primary", "secondary", "supporting"]),
});

export const publicContentFrontmatterSchema = z.union([
  chapterFrontmatterSchema,
  conceptSchema,
  visualizationSchema,
  exampleSchema,
  reviewItemSchema,
]);

export type EditorialStatus = z.infer<typeof editorialStatusSchema>;
export type SourceRef = z.infer<typeof sourceRefSchema>;
export type Chapter = z.infer<typeof chapterSchema>;
export type ChapterFrontmatter = z.infer<typeof chapterFrontmatterSchema>;
export type Section = z.infer<typeof sectionSchema>;
export type Concept = z.infer<typeof conceptSchema>;
export type Visualization = z.infer<typeof visualizationSchema>;
export type Example = z.infer<typeof exampleSchema>;
export type ReviewItem = z.infer<typeof reviewItemSchema>;
export type SearchIndexEntry = z.infer<typeof searchIndexEntrySchema>;
export type KnowledgeGraphEdge = z.infer<typeof knowledgeGraphEdgeSchema>;
