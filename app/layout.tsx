import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gurpreet Singh - Senior Full-Stack Developer & AI Specialist | React, Next.js, Node.js",
  description: "Senior Full-Stack Developer with 10+ years experience in React, Next.js, Node.js, and AI automation. 100% Job Success Rate, $200K+ in completed projects. Available for SaaS development, web applications, and AI-driven solutions.",
  keywords: ["Full Stack Developer", "React Developer", "Next.js Developer", "Node.js Developer", "AI Specialist", "SaaS Developer", "Freelance Developer", "Web Developer", "Gurpreet Singh"],
  authors: [{ name: "Gurpreet Singh" }],
  openGraph: {
    title: "Gurpreet Singh - Senior Full-Stack Developer & AI Specialist",
    description: "Senior Full-Stack Developer with 10+ years experience. 100% Job Success Rate, $200K+ in completed projects.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
