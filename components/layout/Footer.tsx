const footerLinks = [
  { href: "/chapters", label: "Chapters" },
  { href: "/search", label: "Search" },
  { href: "/review", label: "Review" },
];

export function Footer() {
  return (
    <footer className="border-t border-hairline bg-surface-soft">
      <div className="mx-auto flex max-w-content flex-col gap-4 px-4 py-8 text-sm text-ink-slate sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <p>
          Original study notes and learning tools. Private source files stay out
          of public artifacts.
        </p>
        <nav aria-label="Footer navigation" className="flex flex-wrap gap-4">
          {footerLinks.map((link) => (
            <a className="font-medium hover:text-ink" href={link.href} key={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
