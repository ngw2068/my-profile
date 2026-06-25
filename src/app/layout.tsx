import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Na GyeWon | Global Food Safety & Supplier Audit Professional",
  description:
    "Na GyeWon — Sales BDM & Food Auditor at BSI Korea. Building trust across global food supply chains through rigorous auditing, supplier assessment, and food safety culture.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
