import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { AVAILABILITY } from "@/lib/availability";

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

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
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
