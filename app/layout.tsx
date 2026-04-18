import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "Helvetica Neue", "Arial", "sans-serif"],
});


export const metadata: Metadata = {
  title: "Get Hyped | Social Content Agency",
  description: "Get Hyped creates social content that gets noticed, remembered, and measured.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, viewport-fit=cover" />
      </head>
      <body className="min-h-full flex flex-col overflow-x-hidden">
        <Navbar />
        {children}</body>
    </html>
  );
}
