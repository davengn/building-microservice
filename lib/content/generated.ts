import fs from "node:fs/promises";
import path from "node:path";
import {
  knowledgeGraphEdgeSchema,
  searchIndexEntrySchema,
  type KnowledgeGraphEdge,
  type SearchIndexEntry,
} from "./schemas";

export const generatedPublicRoot = path.join(process.cwd(), "public", "generated");

export interface RouteMetadata {
  id: string;
  type: "chapter" | "concept" | "glossary" | "graph" | "review" | "search";
  path: string;
  title: string;
  summary?: string;
  tags?: string[];
}

export interface GraphMetadata {
  nodes: Array<{
    id: string;
    type: "chapter" | "concept" | "visualization" | "example" | "review";
    label: string;
    slug?: string;
    tags?: string[];
  }>;
  edges: KnowledgeGraphEdge[];
}

export interface SearchMetadata {
  entries: SearchIndexEntry[];
  generatedAt: string;
}

const privateSourceMarkers = [
  "references/",
  "references\\chapters\\",
  "Building Microservices Designing Fine-Grained Systems 2nd By Sam Newman.pdf",
];

function assertNoPrivateSourceMarkers(value: unknown, context: string): void {
  const serialized = JSON.stringify(value);

  for (const marker of privateSourceMarkers) {
    if (serialized.includes(marker)) {
      throw new Error(
        `Generated artifact ${context} contains private source marker: ${marker}`,
      );
    }
  }
}

export async function ensureGeneratedDirectory(): Promise<void> {
  await fs.mkdir(generatedPublicRoot, { recursive: true });
}

export async function writeJsonArtifact(
  fileName: string,
  data: unknown,
): Promise<string> {
  assertNoPrivateSourceMarkers(data, fileName);
  await ensureGeneratedDirectory();

  const filePath = path.join(generatedPublicRoot, fileName);
  await fs.writeFile(`${filePath}.tmp`, `${JSON.stringify(data, null, 2)}\n`);
  await fs.rename(`${filePath}.tmp`, filePath);

  return filePath;
}

export async function writeRouteManifest(
  routes: RouteMetadata[],
): Promise<string> {
  const normalized = routes
    .map((route) => ({
      ...route,
      tags: route.tags ?? [],
    }))
    .sort((left, right) => left.path.localeCompare(right.path));

  return writeJsonArtifact("routes.json", {
    generatedAt: new Date().toISOString(),
    routes: normalized,
  });
}

export async function writeGraphMetadata(
  graph: GraphMetadata,
): Promise<string> {
  const edges = graph.edges.map((edge) => knowledgeGraphEdgeSchema.parse(edge));

  return writeJsonArtifact("graph.json", {
    generatedAt: new Date().toISOString(),
    nodes: graph.nodes,
    edges,
  });
}

export async function writeSearchMetadata(
  entries: SearchIndexEntry[],
): Promise<string> {
  const parsedEntries = entries
    .map((entry) => searchIndexEntrySchema.parse(entry))
    .sort((left, right) => right.priority - left.priority);

  const metadata: SearchMetadata = {
    generatedAt: new Date().toISOString(),
    entries: parsedEntries,
  };

  return writeJsonArtifact("search-metadata.json", metadata);
}
