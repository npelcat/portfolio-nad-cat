import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio - Développeuse Fullstack",
  description:
    "Portfolio de développeuse fullstack spécialisée en React, TypeScript et Python. Actuellement en alternance chez EDF Power Solutions.",
  keywords: [
    "développeuse",
    "fullstack",
    "React",
    "TypeScript",
    "Python",
    "Next.js",
    "portfolio",
  ],
  authors: [{ name: "Nadège Pelcat" }],
  openGraph: {
    title: "Portfolio - Développeuse Fullstack",
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
