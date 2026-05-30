import path from "node:path";
import type { z } from "zod";
import {
  chapterFrontmatterSchema,
  conceptSchema,
  exampleSchema,
  reviewItemSchema,
  visualizationSchema,
} from "./schemas";
import type {
  ChapterFrontmatter,
  Concept,
  Example,
  ReviewItem,
  Visualization,
} from "./schemas";
import {
  contentRoot,
  discoverMdxFiles,
  readMdxFile,
  type ParsedMdx,
} from "./mdx";

export async function loadPublicMdxRecords<TSchema extends z.ZodTypeAny>(
  directory: string,
  schema: TSchema,
): Promise<Array<ParsedMdx<z.infer<TSchema>>>> {
  const files = await discoverMdxFiles(path.join(contentRoot, directory));

  return Promise.all(files.map((file) => readMdxFile(file, schema)));
}

export async function loadChapterMdx(): Promise<
  Array<ParsedMdx<ChapterFrontmatter>>
> {
  const chapters = await loadPublicMdxRecords(
    "chapters",
    chapterFrontmatterSchema,
  );

  return chapters.sort(
    (left, right) => left.frontmatter.order - right.frontmatter.order,
  );
}

export async function loadConceptMdx(): Promise<Array<ParsedMdx<Concept>>> {
  return loadPublicMdxRecords("concepts", conceptSchema);
}

export async function loadVisualizationMdx(): Promise<
  Array<ParsedMdx<Visualization>>
> {
  return loadPublicMdxRecords("diagrams", visualizationSchema);
}

export async function loadExampleMdx(): Promise<Array<ParsedMdx<Example>>> {
  return loadPublicMdxRecords("examples", exampleSchema);
}

export async function loadReviewMdx(): Promise<Array<ParsedMdx<ReviewItem>>> {
  return loadPublicMdxRecords("review", reviewItemSchema);
}

export async function loadAllPublicMdx(): Promise<
  Array<ParsedMdx<Record<string, unknown>>>
> {
  const [chapters, concepts, visualizations, examples, reviewItems] =
    await Promise.all([
      loadChapterMdx(),
      loadConceptMdx(),
      loadVisualizationMdx(),
      loadExampleMdx(),
      loadReviewMdx(),
    ]);

  return [
    ...chapters,
    ...concepts,
    ...visualizations,
    ...examples,
    ...reviewItems,
  ];
}
