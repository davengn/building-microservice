"use client";

export type LocalReadingStatus = "not-started" | "in-progress" | "completed";

export const readingProgressStorageKey = "microservices-learning-progress:v1";

export type ReadingProgressMap = Record<string, LocalReadingStatus>;

function canUseStorage(): boolean {
  return typeof window !== "undefined" && "localStorage" in window;
}

export function readProgress(): ReadingProgressMap {
  if (!canUseStorage()) {
    return {};
  }

  try {
    const raw = window.localStorage.getItem(readingProgressStorageKey);
    return raw ? (JSON.parse(raw) as ReadingProgressMap) : {};
  } catch {
    return {};
  }
}

export function writeProgress(progress: ReadingProgressMap): void {
  if (!canUseStorage()) {
    return;
  }

  window.localStorage.setItem(readingProgressStorageKey, JSON.stringify(progress));
}

export function readChapterProgress(slug: string): LocalReadingStatus {
  return readProgress()[slug] ?? "not-started";
}

export function writeChapterProgress(
  slug: string,
  status: LocalReadingStatus,
): ReadingProgressMap {
  const next = {
    ...readProgress(),
    [slug]: status,
  };

  writeProgress(next);
  return next;
}

export function countCompletedChapters(progress: ReadingProgressMap): number {
  return Object.values(progress).filter((status) => status === "completed").length;
}
