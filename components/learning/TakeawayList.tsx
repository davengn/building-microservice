import { CheckCircle2 } from "lucide-react";

export function TakeawayList({ takeaways }: { takeaways: string[] }) {
  if (takeaways.length === 0) {
    return null;
  }

  return (
    <section className="rounded-lg border border-hairline bg-tint-yellow p-6 text-ink-charcoal shadow-subtle sm:p-8">
      <h2 className="text-xl font-semibold leading-snug">Key takeaways</h2>
      <ul className="mt-4 grid gap-3">
        {takeaways.map((takeaway) => (
          <li className="flex gap-3 text-sm leading-6" key={takeaway}>
            <CheckCircle2 aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-brand-green" />
            <span>{takeaway}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
