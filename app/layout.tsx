import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SolaceTrade.ai",
  description: "Dealer-facing trade intake and appraisal workflow infrastructure for modern automotive retail.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
