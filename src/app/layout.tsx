import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Nick Johnson | Senior Full-Stack Developer",
  description:
    "Senior Full-Stack Developer specializing in Laravel, Vue.js, and modern JavaScript. 15+ years building clean, scalable web applications.",
  keywords: [
    "Full-Stack Developer",
    "Laravel",
    "Vue.js",
    "React",
    "TypeScript",
    "Next.js",
    "Web Developer",
    "Nick Johnson",
  ],
  openGraph: {
    title: "Nick Johnson | Senior Full-Stack Developer",
    description:
      "Senior Full-Stack Developer specializing in Laravel, Vue.js, and modern JavaScript.",
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
    <html lang="en" className={inter.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
