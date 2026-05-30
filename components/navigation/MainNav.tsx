import { BookOpen, Search } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { MobileNav } from "./MobileNav";
import { navItems } from "./nav-items";

export function MainNav() {
  return (
    <header className="sticky top-0 z-40 border-b border-hairline bg-canvas/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-content items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link className="flex items-center gap-2 font-semibold text-ink" href="/">
          <span className="flex size-9 items-center justify-center rounded-md bg-brand-navy text-white">
            <BookOpen aria-hidden="true" className="size-4" />
          </span>
          <span className="hidden sm:inline">Microservices Studio</span>
          <span className="sm:hidden">Studio</span>
        </Link>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-1 lg:flex"
        >
          {navItems.map((item) => (
            <a
              className="rounded-md px-3 py-2 text-sm font-medium text-ink-slate hover:bg-surface hover:text-ink"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <Button asChild className="hidden sm:inline-flex" variant="secondary">
            <a href="/search">
              <Search aria-hidden="true" />
              Search
            </a>
          </Button>
          <ThemeToggle />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
