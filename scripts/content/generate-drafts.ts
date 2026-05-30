import fs from "node:fs/promises";
import path from "node:path";
import {
  checkSourceInputs,
  sourceBookId,
  type SourceChapterRecord,
} from "./check-sources";

interface DraftChapterRecord {
  id: string;
  order: number;
  slug: string;
  title: string;
  source: {
    book: string;
    chapterFile: string;
    chapterLabel: string;
  };
  summary: string;
  learningObjectives: string[];
  takeaways: string[];
  tags: string[];
  editorialStatus: "source-imported";
}

function toDraftRecord(chapter: SourceChapterRecord): DraftChapterRecord {
  return {
    id: chapter.id,
    order: chapter.order,
    slug: chapter.slug,
    title: chapter.title,
    source: {
      book: sourceBookId,
      chapterFile: chapter.sourcePath,
      chapterLabel: chapter.chapterLabel,
    },
    summary:
      "Original public study notes have not been drafted for this source chapter yet.",
    learningObjectives: [
      "Draft an original explanation of the chapter's core learning goal.",
      "Record tradeoffs, risks, and alternatives before publishing.",
    ],
    takeaways: [
      "Replace this placeholder with original review-ready takeaways.",
    ],
    tags: ["draft"],
    editorialStatus: "source-imported",
  };
}

async function writeDraftManifest(drafts: DraftChapterRecord[]): Promise<string> {
  const draftDir = path.join(process.cwd(), "content", "drafts");
  const draftFile = path.join(draftDir, "source-chapters.json");

  await fs.mkdir(draftDir, { recursive: true });
  await fs.writeFile(
    `${draftFile}.tmp`,
    `${JSON.stringify(
      {
        schemaVersion: 1,
        generatedAt: new Date().toISOString(),
        note:
          "This file stores source pointers and original editorial placeholders. It does not copy source chapter prose.",
        chapters: drafts,
      },
      null,
      2,
    )}\n`,
  );
  await fs.rename(`${draftFile}.tmp`, draftFile);

  return draftFile;
}

async function main() {
  const manifest = await checkSourceInputs();
  const drafts = manifest.map(toDraftRecord);
  const draftFile = await writeDraftManifest(drafts);

  console.log(`Generated ${drafts.length} draft source records at ${draftFile}`);
}

main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : String(error));
  process.exitCode = 1;
});
