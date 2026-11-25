import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { AVAILABILITY } from "@/lib/availability";
import { PROFILE } from "@/content/profile";

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

const title = `${PROFILE.name} · ${PROFILE.role}`;
const description = `${PROFILE.role} : React, TypeScript, Python, NestJS. ${PROFILE.tagline} ${AVAILABILITY.next}.`;

export const metadata: Metadata = {
  // The site redirects nadegepelcat.com to the www address, so www is the canonical one.
  metadataBase: new URL("https://www.nadegepelcat.com"),
  title,
  description,
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
  authors: [{ name: PROFILE.name }],
  openGraph: {
    title,
    description,
    url: "/",
    siteName: PROFILE.name,
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
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
