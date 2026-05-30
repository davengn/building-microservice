import type { Metadata } from "next";
import { AppShell } from "@/components/layout/AppShell";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: {
    default: "Microservices Learning Studio",
    template: "%s | Microservices Learning Studio",
  },
  description:
    "Original guided lessons, diagrams, search, and review tools for studying microservices.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
