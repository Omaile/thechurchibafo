import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Church At Ibafo",
  description:
    "The Church At Ibafo is a Christ-centered congregation committed to truth, God's Word, fellowship, and spiritual growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}