import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/home/Navbar";
import Footer from "../components/home/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NITYAKHUSHI — Handcrafted Artisan Goods",
  description:
    "Discover handcrafted artisan goods from NITYAKHUSHI. Sustainable, ethically sourced products for your home and lifestyle.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        {/* Fixed navbar — rendered once for every page */}
        <Navbar />

        {/*
          pt-[88px]: pushes page content below the fixed navbar.
          Breakdown: navbar top padding (pt-8 = 32px) + pill height (~56px) = ~88px.
          Adjust if the navbar pill height ever changes.
        */}
        <main className="pt-[88px]">
          {children}
        </main>

        {/* Global footer */}
        <Footer />
      </body>
    </html>
  );
}
