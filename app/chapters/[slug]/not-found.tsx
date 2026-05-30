import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ChapterNotFound() {
  return (
    <main className="min-h-[60vh] bg-surface-soft px-4 py-16 text-ink sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl rounded-lg border border-hairline bg-canvas p-8 text-center shadow-subtle">
        <h1 className="text-3xl font-semibold text-ink-charcoal">Chapter not found</h1>
        <p className="mt-3 text-sm leading-6 text-ink-slate">
          The lesson URL does not match a public chapter. Use the chapter index to
          return to the guided sequence.
        </p>
        <div className="mt-6 flex justify-center">
          <Button asChild>
            <Link href="/chapters">Open chapter index</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
