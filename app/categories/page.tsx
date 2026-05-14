"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    name: "Handwoven Bags",
    image: "/basket.png",
    description: "Artisan-crafted bags woven with natural fibres and timeless patterns.",
    count: 12,
  },
  {
    name: "Ceramic Decor",
    image: "/pot.png",
    description: "Hand-thrown ceramics that bring warmth and texture to any space.",
    count: 8,
  },
  {
    name: "Handcrafted Scarves",
    image: "/scarf.png",
    description: "Lightweight, hand-dyed scarves in seasonal palettes.",
    count: 15,
  },
  {
    name: "Artisan Home Decor",
    image: "/bouquet.png",
    description: "One-of-a-kind pieces that bring nature indoors.",
    count: 20,
  },
  {
    name: "Handmade Jewelry",
    image: "/hairband.png",
    description: "Delicate, hand-formed jewelry inspired by organic shapes.",
    count: 18,
  },
  {
    name: "Traditional Crafts",
    image: "/keychain.png",
    description: "Heritage craft pieces that honour generations of skill.",
    count: 10,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants: any = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function CategoriesPage() {
  return (
    <main className="relative w-full min-h-screen bg-brand-bg selection:bg-brand-coral selection:text-white overflow-x-hidden">

      {/* Animated background blobs — same as shop page */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.3, 1], x: [0, 150, 0], y: [0, -100, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[5%] left-[-15%] w-[60vw] h-[60vw] bg-brand-yellow/15 rounded-full mix-blend-multiply filter blur-[120px] opacity-80"
        />
        <motion.div
          animate={{ scale: [1, 1.6, 1], x: [0, -200, 0], y: [0, 150, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[30%] right-[-15%] w-[50vw] h-[50vw] bg-brand-coral/15 rounded-full mix-blend-multiply filter blur-[140px] opacity-80"
        />
      </div>

      {/* ── Hero ── */}
      <section className="relative z-10 w-full flex flex-col items-center justify-center px-6" style={{ paddingTop: "4rem", paddingBottom: "4rem" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-4xl mx-auto"
        >
          <p className="text-brand-dark/35 text-[10px] font-bold uppercase tracking-[0.35em] mb-6">
            Nityakhushi · Browse by Category
          </p>
          <h1
            className="font-serif text-brand-dark tracking-tighter leading-[0.92]"
            style={{ fontSize: "clamp(3rem, 8vw, 7rem)", marginBottom: "1.5rem" }}
          >
            All{" "}
            <span className="italic text-brand-coral">Categories</span>
          </h1>
          <p className="text-brand-dark/50 max-w-lg mx-auto font-medium leading-relaxed" style={{ fontSize: "1rem" }}>
            Every piece tells a story of artisan dedication, sustainable materials, and generations of craft.
          </p>
        </motion.div>
      </section>

      {/* ── Category Grid ── */}
      <section className="relative z-10" style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem 6rem" }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          style={{ gap: "2rem" }}
        >
          {categories.map((cat) => (
            <motion.div key={cat.name} variants={cardVariants}>
              <Link
                href={`/shop?category=${encodeURIComponent(cat.name)}`}
                className="group block rounded-[2rem] overflow-hidden bg-white/40 backdrop-blur-md border border-white/30 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              >
                {/* Image */}
                <div className="relative w-full overflow-hidden" style={{ aspectRatio: "4/3" }}>
                  <div className="absolute inset-0 bg-brand-dark/5 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Item count badge */}
                  <span className="absolute top-4 right-4 z-20 px-3 py-1 bg-white/80 backdrop-blur-sm text-brand-dark text-[10px] font-bold uppercase tracking-widest rounded-full shadow-sm">
                    {cat.count} items
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h2 className="text-lg sm:text-xl font-serif font-medium text-brand-dark group-hover:text-brand-coral transition-colors duration-300 leading-snug">
                      {cat.name}
                    </h2>
                    {/* Arrow */}
                    <span className="shrink-0 mt-1 w-7 h-7 rounded-full border border-brand-dark/20 flex items-center justify-center text-brand-dark/50 group-hover:bg-brand-coral group-hover:border-brand-coral group-hover:text-white transition-all duration-300">
                      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                        <path d="M3 8h10M9 4l4 4-4 4" />
                      </svg>
                    </span>
                  </div>
                  <p className="text-sm text-brand-dark/55 leading-relaxed font-light">
                    {cat.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <Link
            href="/shop"
            className="inline-flex items-center gap-3 px-8 py-4 bg-brand-dark text-white text-xs font-bold uppercase tracking-[0.2em] rounded-full hover:bg-brand-coral hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
          >
            Browse All Products
            <span>→</span>
          </Link>
        </motion.div>
      </section>

    </main>
  );
}
