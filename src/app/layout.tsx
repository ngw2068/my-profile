import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "대박동",
  description: "메뉴 확인부터 예약 문의까지 카카오톡으로 간편하게 연결하세요.",
  openGraph: {
    title: "대박동",
    description: "메뉴 확인부터 예약 문의까지 카카오톡으로 간편하게 연결하세요.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
