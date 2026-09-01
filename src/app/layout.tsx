import type { Metadata } from "next";
import { Bricolage_Grotesque, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
});

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plex-sans",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nicksjohnson.com"),
  title: "Nick Johnson | Full-Stack Engineer",
  description:
    "Full-Stack Engineer specializing in Laravel, Vue, React, and Next.js. I build clean, scalable web applications from backend APIs to interactive frontends.",
  keywords: [
    "Full-Stack Engineer",
    "Laravel",
    "Vue.js",
    "React",
    "TypeScript",
    "Next.js",
    "Web Developer",
    "Nick Johnson",
  ],
  openGraph: {
    title: "Nick Johnson | Full-Stack Engineer",
    description:
      "Full-Stack Engineer specializing in Laravel, Vue, React, and Next.js.",
    url: "https://nicksjohnson.com",
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
      lang="en"
      className={`${bricolage.variable} ${plexSans.variable} ${plexMono.variable}`}
    >
      <body className="font-sans">{children}</body>
    </html>
  );
}
