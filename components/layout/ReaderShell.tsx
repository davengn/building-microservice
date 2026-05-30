import type { ReactNode } from "react";

export function ReaderShell({
  sidebar,
  toc,
  mobileToc,
  children,
}: {
  sidebar: ReactNode;
  toc: ReactNode;
  mobileToc: ReactNode;
  children: ReactNode;
}) {
  return (
    <main className="min-h-screen bg-surface-soft">
      <div className="mx-auto grid max-w-[1440px] gap-6 px-4 py-6 sm:px-6 lg:grid-cols-[220px_minmax(0,760px)] lg:gap-8 lg:py-8 xl:grid-cols-[220px_minmax(0,760px)_260px]">
        <aside className="hidden lg:block">
          <div className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto">
            {sidebar}
          </div>
        </aside>
        <div className="min-w-0">
          <div className="mb-6 lg:hidden">{mobileToc}</div>
          <div className="grid gap-6">{children}</div>
        </div>
        <aside className="hidden xl:block">
          <div className="sticky top-24 grid gap-4">{toc}</div>
        </aside>
      </div>
    </main>
  );
}
