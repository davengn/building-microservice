import { ShieldCheck } from "lucide-react";

export function SourceNote({ sourceLabel }: { sourceLabel: string }) {
  return (
    <aside className="rounded-lg border border-hairline bg-surface-soft p-5 text-sm leading-6 text-ink-slate">
      <div className="flex items-start gap-3">
        <ShieldCheck aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-primary" />
        <div>
          <p className="font-semibold text-ink-charcoal">Source note</p>
          <p className="mt-1">
            This lesson is source-backed by {sourceLabel} and rewritten as original
            study material. Private source files stay outside public routes and
            build artifacts.
          </p>
        </div>
      </div>
    </aside>
  );
}
