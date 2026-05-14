import type { Metadata } from "next";
import { Nunito, Playfair_Display, Great_Vibes } from "next/font/google";
import "./globals.css";
import Navbar from "../src/components/home/Navbar";
import Footer from "../src/components/home/Footer";

const nunito = Nunito({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const greatVibes = Great_Vibes({ weight: "400", subsets: ["latin"], variable: "--font-great-vibes" });

export const metadata: Metadata = {
  title: "NITYAKHUSHI | Handcrafted Artistry",
  description: "Discover unique, hand-dyed hairbands, bespoke bouquets, charming keychains, and decorative pots.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunito.variable} ${playfair.variable} ${greatVibes.variable} bg-[#f9f6f0] text-emerald-900`}
      >
        {/* Fixed navbar — rendered once, applies to every page */}
        <Navbar />

        {/*
          This div is the page content wrapper.
          padding-top matches the navbar's total height:
            - The navbar outer element has pt-8 (32px) on desktop, pt-4 (16px) on mobile
            - The pill inside is ~56px tall (py-3 * 2 + icon height)
          We use a generous value that works across all breakpoints.
          The sticky filter bar inside shop/page.tsx uses top: 5.5rem which
          correctly accounts for this offset.
        */}
        <div style={{ paddingTop: "88px" }}>
          {children}
        </div>

        <Footer />
      </body>
    </html>
  );
}
