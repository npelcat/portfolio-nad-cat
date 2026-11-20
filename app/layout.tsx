import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { AVAILABILITY } from "@/lib/availability";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio Nadège PELCAT - Développeuse Fullstack",
  icons: {
    icon: "/icons/favicon-32x32.png",
    apple: "/icons/apple-touch-icon.png",
  },
  description: `Portfolio de développeuse fullstack spécialisée en React, TypeScript, Python et NestJS. ${AVAILABILITY.next}.`,
  keywords: [
    "développeuse",
    "fullstack",
    "React",
    "TypeScript",
    "Python",
    "NestJS",
    "Next.js",
    "portfolio",
  ],
  authors: [{ name: "Nadège Pelcat" }],
  openGraph: {
    title:
      "Portfolio Nadège PELCAT - Développeuse Fullstack Paris et Région Parisienne",
    description:
      "Développeuse fullstack passionnée par les technologies web modernes",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
