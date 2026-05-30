import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

export const expectedSourceChapterCount = 18;
export const sourceBookId = "building-microservices-2e";
export const sourcePdfFileName =
  "Building Microservices Designing Fine-Grained Systems 2nd By Sam Newman.pdf";

const sourceRoot = path.join(process.cwd(), "references");
const sourceChapterRoot = path.join(sourceRoot, "chapters");

export interface SourceChapterRecord {
  id: string;
  order: number;
  slug: string;
  title: string;
  chapterLabel: string;
  fileName: string;
  sourcePath: string;
  sizeBytes: number;
}

function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function titleFromFileName(fileName: string): string {
  const withoutExtension = fileName.replace(/\.md$/i, "");
  const withoutPrefix = withoutExtension.replace(/^\d+_/, "");

  return withoutPrefix
    .replace(/^Chapter_(\d+)_/, "Chapter $1: ")
    .replace(/_/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function orderFromFileName(fileName: string): number {
  const match = fileName.match(/^(\d+)_/);
  return match ? Number(match[1]) : Number.MAX_SAFE_INTEGER;
}

function chapterLabel(fileName: string, order: number): string {
  if (fileName.includes("Front_Matter")) {
    return "Front Matter";
  }

  if (fileName.includes("Back_Matter")) {
    return "Back Matter";
  }

  return `Chapter ${order}`;
}

export async function getSourceChapterManifest(): Promise<SourceChapterRecord[]> {
  const entries = await fs.readdir(sourceChapterRoot, { withFileTypes: true });
  const markdownFiles = entries
    .filter((entry) => entry.isFile() && entry.name.endsWith(".md"))
    .map((entry) => entry.name)
    .sort((left, right) => orderFromFileName(left) - orderFromFileName(right));

  const records = await Promise.all(
    markdownFiles.map(async (fileName) => {
      const order = orderFromFileName(fileName);
      const absolutePath = path.join(sourceChapterRoot, fileName);
      const stats = await fs.stat(absolutePath);
      const title = titleFromFileName(fileName);

      return {
        id: `chapter-${String(order).padStart(2, "0")}`,
        order,
        slug: slugify(title.replace(/^Chapter \d+:\s*/, "")),
        title,
        chapterLabel: chapterLabel(fileName, order),
        fileName,
        sourcePath: path
          .relative(process.cwd(), absolutePath)
          .split(path.sep)
          .join("/"),
        sizeBytes: stats.size,
      };
    }),
  );

  return records;
}

export async function checkSourceInputs(): Promise<SourceChapterRecord[]> {
  const manifest = await getSourceChapterManifest();
  const pdfPath = path.join(sourceRoot, sourcePdfFileName);
  const errors: string[] = [];

  if (manifest.length !== expectedSourceChapterCount) {
    errors.push(
      `Expected ${expectedSourceChapterCount} markdown inputs, found ${manifest.length}`,
    );
  }

  const orders = new Set(manifest.map((chapter) => chapter.order));
  for (let order = 0; order < expectedSourceChapterCount; order += 1) {
    if (!orders.has(order)) {
      errors.push(`Missing source markdown order ${order}`);
    }
  }

  try {
    await fs.access(pdfPath);
  } catch {
    errors.push(`Missing source PDF: references/${sourcePdfFileName}`);
  }

  for (const chapter of manifest) {
    if (!chapter.sourcePath.startsWith("references/chapters/")) {
      errors.push(`Source chapter outside references/chapters/: ${chapter.fileName}`);
    }
  }

  if (errors.length > 0) {
    throw new Error(errors.join("\n"));
  }

  return manifest;
}

async function main() {
  const asJson = process.argv.includes("--json");
  const manifest = await checkSourceInputs();

  if (asJson) {
    console.log(
      JSON.stringify(
        {
          sourceBookId,
          sourcePdf: `references/${sourcePdfFileName}`,
          expected: expectedSourceChapterCount,
          found: manifest.length,
          chapters: manifest,
        },
        null,
        2,
      ),
    );
    return;
  }

  console.log(
    `Source check passed: ${manifest.length}/${expectedSourceChapterCount} markdown inputs and source PDF found.`,
  );
}

const currentFile = fileURLToPath(import.meta.url);
if (process.argv[1] && path.resolve(process.argv[1]) === currentFile) {
  main().catch((error: unknown) => {
    console.error(error instanceof Error ? error.message : String(error));
    process.exitCode = 1;
  });
}
