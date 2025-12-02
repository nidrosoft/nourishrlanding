import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Nourishr - Decide What to Eat in 5 Seconds, Not Hours",
  description:
    "Nourishr uses AI to understand your cravings, dietary needs, and what's in your fridge to instantly recommend the perfect meal — whether you're cooking or ordering.",
  keywords: [
    "meal planning app",
    "what to eat app",
    "AI meal recommendations",
    "food decision app",
    "recipe finder",
    "nutrition tracker",
    "dietary preferences app",
  ],
  openGraph: {
    title: "Nourishr - Your AI Meal Companion",
    description:
      "Decide what to eat in 5 seconds, not hours. AI-powered meal recommendations based on your mood, diet, and what's in your fridge.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nourishr - Your AI Meal Companion",
    description:
      "Decide what to eat in 5 seconds, not hours. AI-powered meal recommendations.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
