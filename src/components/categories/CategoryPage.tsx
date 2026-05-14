"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    name: "Handwoven Bags",
    slug: "handwoven-bags",
    image: "/basket.png",
    description: "Artisan-crafted bags woven with natural fibres and timeless patterns.",
    count: 12,
    accent: "#c9a98a",
  },
  {
    name: "Ceramic Decor",
    slug: "ceramic-decor",
    image: "/pot.png",
    description: "Hand-thrown ceramics that bring warmth and texture to any space.",
    count: 8,
    accent: "#a3b18a",
  },
  {
    name: "Handcrafted Scarves",
    slug: "handcrafted-scarves",
    image: "/scarf.png",
    description: "Lightweight, hand-dyed scarves in seasonal palettes.",
    count: 15,
    accent: "#d4a5a5",
  },
  {
    name: "Artisan Home Decor",
    slug: "artisan-home-decor",
    image: "/bouquet.png",
    description: "One-of-a-kind pieces that bring nature indoors.",
    count: 20,
    accent: "#b5c4b1",
  },
  {
    name: "Handmade Jewelry",
    slug: "handmade-jewelry",
    image: "/hairband.png",
    description: "Delicate, hand-formed jewelry inspired by organic shapes.",
    count: 18,
    accent: "#c9b8a8",
  },
  {
    name: "Traditional Crafts",
    slug: "traditional-crafts",
    image: "/keychain.png",
    description: "Heritage craft pieces that honour generations of skill.",
    count: 10,
    accent: "#a89880",
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

export default function CategoryPage() {
  return (
    <div className="min-h-screen bg-brand-bg flex flex-col">
      {/* ── Hero ── */}
      <section className="relative w-full pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden">
        {/* soft radial backdrop */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(201,169,138,0.18) 0%, transparent 70%)",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] text-brand-coral mb-6"
          >
            Explore Our World
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-brand-dark tracking-tight leading-tight mb-6"
          >
            All{" "}
            <span className="italic text-brand-coral">Categories</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.16 }}
            className="text-brand-dark/60 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-light"
          >
            Every piece tells a story of artisan dedication, sustainable materials,
            and generations of craft.
          </motion.p>
        </div>
      </section>

      {/* ── Grid ── */}
      <section className="flex-1 w-full pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {categories.map((cat) => (
              <motion.div key={cat.slug} variants={cardVariants}>
                <Link
                  href={`/shop?category=${encodeURIComponent(cat.name)}`}
                  className="group block rounded-[2rem] overflow-hidden bg-white border border-brand-border/30 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
                >
                  {/* Image */}
                  <div className="relative w-full aspect-[4/3] overflow-hidden">
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
                      style={{
                        background: `linear-gradient(180deg, transparent 40%, ${cat.accent}55 100%)`,
                      }}
                    />
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
                      {/* arrow */}
                      <span className="shrink-0 mt-1 w-7 h-7 rounded-full border border-brand-dark/20 flex items-center justify-center text-brand-dark/50 group-hover:bg-brand-coral group-hover:border-brand-coral group-hover:text-white transition-all duration-300">
                        <svg
                          viewBox="0 0 16 16"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-3.5 h-3.5"
                        >
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
        </div>
      </section>

    </div>
  );
}
