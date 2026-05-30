"use client";

import * as React from "react";
import { Menu, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navItems } from "./nav-items";

export function MobileNav() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="lg:hidden">
      <Button
        aria-expanded={open}
        aria-label={open ? "Close navigation" : "Open navigation"}
        onClick={() => setOpen((value) => !value)}
        size="icon"
        type="button"
        variant="ghost"
      >
        {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </Button>

      {open ? (
        <div className="absolute inset-x-4 top-16 z-50 rounded-lg border border-hairline bg-canvas p-3 shadow-card">
          <nav aria-label="Mobile navigation" className="grid gap-1">
            {navItems.map((item) => (
              <a
                className="rounded-md px-3 py-2 text-sm font-medium text-ink-slate hover:bg-surface hover:text-ink"
                href={item.href}
                key={item.href}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            className="mt-3 flex items-center gap-2 rounded-md border border-hairline-strong px-3 py-2 text-sm font-medium text-ink"
            href="/search"
            onClick={() => setOpen(false)}
          >
            <Search aria-hidden="true" className="size-4" />
            Search
          </a>
        </div>
      ) : null}
    </div>
  );
}
