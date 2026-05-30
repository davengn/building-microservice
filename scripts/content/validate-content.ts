import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import type { z } from "zod";
import {
  chapterFrontmatterSchema,
  conceptSchema,
  exampleSchema,
  reviewItemSchema,
  visualizationSchema,
} from "../../lib/content/schemas";
import { contentRoot, discoverMdxFiles } from "../../lib/content/mdx";

interface ValidationIssue {
  file: string;
  message: string;
}

const sourcePdfName =
  "Building Microservices Designing Fine-Grained Systems 2nd By Sam Newman.pdf";

const schemaByDirectory: Array<{
  directory: string;
  schema: z.ZodTypeAny;
}> = [
  { directory: "chapters", schema: chapterFrontmatterSchema },
  { directory: "concepts", schema: conceptSchema },
  { directory: "diagrams", schema: visualizationSchema },
  { directory: "examples", schema: exampleSchema },
  { directory: "review", schema: reviewItemSchema },
];

function wordCount(value: string): number {
  return value.trim().split(/\s+/).filter(Boolean).length;
}

function validateBodyRules(file: string, body: string): ValidationIssue[] {
  const issues: ValidationIssue[] = [];

  if (body.includes("references/") || body.includes("references\\")) {
    issues.push({
      file,
      message: "Public body must not expose private references/ paths",
    });
  }

  if (body.includes(sourcePdfName)) {
    issues.push({
      file,
      message: "Public body must not expose the source PDF file name",
    });
  }

  if (/]\(\s*references\//.test(body)) {
    issues.push({
      file,
      message: "Public body must not link to private source files",
    });
  }

  const blockQuotes = body
    .split("\n")
    .filter((line) => line.trimStart().startsWith(">"))
    .map((line) => line.replace(/^>\s?/, "").trim())
    .filter(Boolean);

  for (const quote of blockQuotes) {
    if (wordCount(quote) > 25) {
      issues.push({
        file,
        message: "Block quotes must stay at or under 25 words",
      });
    }
  }

  return issues;
}

function validateFrontmatter(
  file: string,
  schema: z.ZodTypeAny,
  data: Record<string, unknown>,
): ValidationIssue[] {
  const result = schema.safeParse(data);

  if (result.success) {
    return [];
  }

  return result.error.issues.map((issue) => ({
    file,
    message: `${issue.path.join(".") || "frontmatter"}: ${issue.message}`,
  }));
}

async function validateMdxDirectory(
  directory: string,
  schema: z.ZodTypeAny,
): Promise<{
  count: number;
  ids: string[];
  slugs: string[];
  issues: ValidationIssue[];
}> {
  const files = await discoverMdxFiles(path.join(contentRoot, directory));
  const issues: ValidationIssue[] = [];
  const ids: string[] = [];
  const slugs: string[] = [];

  for (const filePath of files) {
    const source = await fs.readFile(filePath, "utf8");
    const parsed = matter(source);
    const relativeFile = path.relative(process.cwd(), filePath);

    issues.push(
      ...validateFrontmatter(relativeFile, schema, parsed.data),
      ...validateBodyRules(relativeFile, parsed.content),
    );

    if (typeof parsed.data.id === "string") {
      ids.push(parsed.data.id);
    }

    if (typeof parsed.data.slug === "string") {
      slugs.push(parsed.data.slug);
    }
  }

  return { count: files.length, ids, slugs, issues };
}

function findDuplicates(values: string[]): string[] {
  const seen = new Set<string>();
  const duplicates = new Set<string>();

  for (const value of values) {
    if (seen.has(value)) {
      duplicates.add(value);
    }
    seen.add(value);
  }

  return [...duplicates].sort();
}

async function validateDraftManifest(): Promise<ValidationIssue[]> {
  const file = path.join(contentRoot, "drafts", "source-chapters.json");

  try {
    const source = await fs.readFile(file, "utf8");
    const parsed = JSON.parse(source) as {
      chapters?: Array<{ summary?: string; takeaways?: string[] }>;
    };

    const serializedPublicText = JSON.stringify(
      parsed.chapters?.map((chapter) => ({
        summary: chapter.summary,
        takeaways: chapter.takeaways,
      })) ?? [],
    );

    return validateBodyRules(path.relative(process.cwd(), file), serializedPublicText);
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return [];
    }

    return [
      {
        file: path.relative(process.cwd(), file),
        message: error instanceof Error ? error.message : String(error),
      },
    ];
  }
}

async function main() {
  const allIds: string[] = [];
  const allSlugs: string[] = [];
  const allIssues: ValidationIssue[] = [];
  let totalRecords = 0;

  for (const item of schemaByDirectory) {
    const result = await validateMdxDirectory(item.directory, item.schema);
    totalRecords += result.count;
    allIds.push(...result.ids);
    allSlugs.push(...result.slugs);
    allIssues.push(...result.issues);
  }

  allIssues.push(...(await validateDraftManifest()));

  for (const duplicateId of findDuplicates(allIds)) {
    allIssues.push({
      file: "content/",
      message: `Duplicate content id: ${duplicateId}`,
    });
  }

  for (const duplicateSlug of findDuplicates(allSlugs)) {
    allIssues.push({
      file: "content/",
      message: `Duplicate content slug: ${duplicateSlug}`,
    });
  }

  if (allIssues.length > 0) {
    for (const issue of allIssues) {
      console.error(`${issue.file}: ${issue.message}`);
    }
    process.exitCode = 1;
    return;
  }

  console.log(`Content validation passed for ${totalRecords} public MDX records.`);
}

main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : String(error));
  process.exitCode = 1;
});
