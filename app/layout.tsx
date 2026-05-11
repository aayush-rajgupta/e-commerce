import type { Metadata } from "next";
import { Nunito, Playfair_Display, Great_Vibes } from "next/font/google";
import "./globals.css";

const nunito = Nunito({ subsets: ["latin"], variable: "--font-inter" }); // keeping variable name to not break existing styles
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
      <body className={`${nunito.variable} ${playfair.variable} ${greatVibes.variable} bg-[#f9f6f0] text-emerald-900`}>
        {children}
      </body>
    </html>
  );
}
