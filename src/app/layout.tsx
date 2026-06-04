import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Safe Giant Movers — Safe, Reliable Moving Services",
  description:
    "Professional moving services you can count on. Request your move online and receive a free estimate. Licensed, insured, and transparent pricing.",
  keywords: "moving company, movers, local moving, residential moving, packing, loading",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-[var(--font-inter)] bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
