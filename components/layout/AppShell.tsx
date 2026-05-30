import * as React from "react";
import { Footer } from "./Footer";
import { ThemeProvider } from "./ThemeProvider";
import { MainNav } from "@/components/navigation/MainNav";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-canvas text-ink">
        <MainNav />
        {children}
        <Footer />
      </div>
    </ThemeProvider>
  );
}
