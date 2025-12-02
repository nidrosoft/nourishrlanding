import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nourishr.app"),
  title: {
    default: "Nourishr - Decide What to Eat in 5 Seconds, Not Hours",
    template: "%s | Nourishr",
  },
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
    "food delivery",
    "healthy eating",
    "meal ideas",
  ],
  authors: [{ name: "Cyriac Zeh", url: "https://www.linkedin.com/in/cyriac-zeh/" }],
  creator: "Nourishr",
  publisher: "Nourishr",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nourishr.app",
    siteName: "Nourishr",
    title: "Nourishr - Decide What to Eat in 5 Seconds, Not Hours",
    description:
      "Your AI meal companion. Understand your cravings, dietary needs, and what's in your fridge to instantly recommend the perfect meal.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nourishr - Decide What to Eat in 5 Seconds 🍕",
    description:
      "Your AI meal companion. Get personalized meal recommendations based on your mood, diet, and what's in your fridge. Try it free!",
    creator: "@nourishrapp",
    site: "@nourishrapp",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
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
