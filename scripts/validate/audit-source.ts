import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

interface Finding {
  file: string;
  marker: string;
  reason: string;
}

const sourcePdfName =
  "Building Microservices Designing Fine-Grained Systems 2nd By Sam Newman.pdf";

const scanRoots = [
  "out",
  "public",
  path.join(".next", "static"),
  path.join(".next", "server", "app"),
  "content",
];

const textExtensions = new Set([
  ".css",
  ".html",
  ".js",
  ".json",
  ".md",
  ".mdx",
  ".mjs",
  ".txt",
  ".xml",
]);

function normalizeText(value: string): string {
  return value.replace(/\s+/g, " ").trim().toLowerCase();
}

async function pathExists(filePath: string): Promise<boolean> {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function collectFiles(root: string): Promise<string[]> {
  if (!(await pathExists(root))) {
    return [];
  }

  const entries = await fs.readdir(root, { withFileTypes: true });
  const nested = await Promise.all(
    entries.map(async (entry) => {
      const entryPath = path.join(root, entry.name);

      if (entry.isDirectory()) {
        return collectFiles(entryPath);
      }

      if (entry.isFile() && textExtensions.has(path.extname(entry.name))) {
        return [entryPath];
      }

      return [];
    }),
  );

  return nested.flat();
}

async function collectSourceMarkers(): Promise<{
  fileNames: string[];
  copiedPassages: string[];
}> {
  const chaptersRoot = path.join(process.cwd(), "references", "chapters");

  if (!(await pathExists(chaptersRoot))) {
    return { fileNames: [], copiedPassages: [] };
  }

  const entries = await fs.readdir(chaptersRoot, { withFileTypes: true });
  const fileNames = entries
    .filter((entry) => entry.isFile() && entry.name.endsWith(".md"))
    .map((entry) => entry.name);
  const copiedPassages: string[] = [];

  for (const fileName of fileNames) {
    const source = await fs.readFile(path.join(chaptersRoot, fileName), "utf8");
    const lines = source
      .split("\n")
      .map((line) => normalizeText(line))
      .filter((line) => line.length >= 120 && !line.startsWith("#"));

    copiedPassages.push(...lines);
  }

  return {
    fileNames,
    copiedPassages: [...new Set(copiedPassages)],
  };
}

function stripAllowedContentFrontmatter(filePath: string, source: string): string {
  if (!filePath.includes(`${path.sep}content${path.sep}`)) {
    return source;
  }

  if (!/\.mdx?$/i.test(filePath)) {
    return "";
  }

  return matter(source).content;
}

async function auditFile(
  filePath: string,
  sourceFileNames: string[],
  copiedPassages: string[],
): Promise<Finding[]> {
  const rawSource = await fs.readFile(filePath, "utf8");
  const source = stripAllowedContentFrontmatter(filePath, rawSource);
  const normalized = normalizeText(source);
  const relativeFile = path.relative(process.cwd(), filePath);
  const findings: Finding[] = [];

  const markers = [
    "references/",
    "references\\chapters\\",
    sourcePdfName,
    ...sourceFileNames,
  ];

  for (const marker of markers) {
    if (source.includes(marker)) {
      findings.push({
        file: relativeFile,
        marker,
        reason: "Public artifact contains a private source marker",
      });
    }
  }

  for (const passage of copiedPassages) {
    if (passage.length > 0 && normalized.includes(passage)) {
      findings.push({
        file: relativeFile,
        marker: `${passage.slice(0, 96)}...`,
        reason: "Public artifact appears to contain copied source prose",
      });
      break;
    }
  }

  return findings;
}

async function main() {
  const roots = scanRoots.map((root) => path.join(process.cwd(), root));
  const files = (await Promise.all(roots.map(collectFiles))).flat();
  const { fileNames, copiedPassages } = await collectSourceMarkers();
  const findings = (
    await Promise.all(
      files.map((file) => auditFile(file, fileNames, copiedPassages)),
    )
  ).flat();

  if (findings.length > 0) {
    for (const finding of findings) {
      console.error(
        `${finding.file}: ${finding.reason}: ${finding.marker}`,
      );
    }
    process.exitCode = 1;
    return;
  }

  console.log(`Source audit passed for ${files.length} public artifact files.`);
}

main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : String(error));
  process.exitCode = 1;
});
