import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import type { z } from "zod";

export const contentRoot = path.join(process.cwd(), "content");

export type MdxMatter = Record<string, unknown>;

export interface ParsedMdx<TFrontmatter extends MdxMatter = MdxMatter> {
  frontmatter: TFrontmatter;
  body: string;
  excerpt?: string;
  filePath: string;
  relativePath: string;
}

export function toContentRelativePath(filePath: string): string {
  return path.relative(contentRoot, filePath).split(path.sep).join("/");
}

export function assertPublicContentPath(filePath: string): string {
  const resolved = path.resolve(filePath);
  const relative = path.relative(contentRoot, resolved);

  if (relative.startsWith("..") || path.isAbsolute(relative)) {
    throw new Error(`Content file must be under content/: ${filePath}`);
  }

  if (resolved.includes(`${path.sep}references${path.sep}`)) {
    throw new Error(`Public content cannot be read from references/: ${filePath}`);
  }

  return resolved;
}

export function stripFrontmatter(source: string): string {
  if (!source.startsWith("---")) {
    return source;
  }

  const closing = source.indexOf("\n---", 3);
  if (closing === -1) {
    return source;
  }

  return source.slice(closing + 4).replace(/^\s+/, "");
}

export function parseMdx<TSchema extends z.ZodTypeAny>(
  source: string,
  schema: TSchema,
): Omit<ParsedMdx<z.infer<TSchema>>, "filePath" | "relativePath"> {
  const parsed = matter(source, { excerpt: true });
  const frontmatter = schema.parse(parsed.data);

  return {
    frontmatter,
    body: parsed.content.trim(),
    excerpt: parsed.excerpt?.trim(),
  };
}

export async function readMdxFile<TSchema extends z.ZodTypeAny>(
  filePath: string,
  schema: TSchema,
): Promise<ParsedMdx<z.infer<TSchema>>> {
  const resolved = assertPublicContentPath(filePath);
  const source = await fs.readFile(resolved, "utf8");
  const parsed = parseMdx(source, schema);

  return {
    ...parsed,
    filePath: resolved,
    relativePath: toContentRelativePath(resolved),
  };
}

export async function discoverMdxFiles(directory: string): Promise<string[]> {
  const resolved = assertPublicContentPath(directory);
  const entries = await fs.readdir(resolved, { withFileTypes: true }).catch((error) => {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return [];
    }

    throw error;
  });

  const files = await Promise.all(
    entries.map(async (entry) => {
      const entryPath = path.join(resolved, entry.name);

      if (entry.isDirectory()) {
        return discoverMdxFiles(entryPath);
      }

      if (entry.isFile() && /\.(md|mdx)$/i.test(entry.name)) {
        return [entryPath];
      }

      return [];
    }),
  );

  return files.flat().sort((left, right) => left.localeCompare(right));
}
