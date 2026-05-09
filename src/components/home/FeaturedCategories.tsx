"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const categories = [
  { name: "Handwoven Bags", image: "/basket.png" },
  { name: "Ceramic Decor", image: "/pot.png" },
  { name: "Handcrafted Scarves", image: "/scarf.png" },
  { name: "Artisan Home Decor", image: "/bouquet.png" },
  { name: "Handmade Jewelry", image: "/hairband.png" },
  { name: "Traditional Crafts", image: "/keychain.png" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: any = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function FeaturedCategories() {
  return (
    <section id="featured" className="w-full bg-brand-bg py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        <div className="text-center mb-12 md:mb-16 lg:mb-24 w-full">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-serif text-brand-dark mb-4 md:mb-8 tracking-tight"
          >
            Curated <span className="italic text-brand-coral">Collections</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-brand-dark/70 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed md:leading-loose font-light px-2"
          >
            Explore our meticulously crafted categories, each telling a unique story of artisan dedication and sustainable materials.
          </motion.p>
        </div>

        {/* Structured Grid: responsive gap and columns */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12 lg:gap-16 justify-items-center w-full"
        >
          {categories.map((category) => (
            <motion.div key={category.name} variants={itemVariants} className="w-full max-w-sm">
              <Link href={`/shop?category=${category.name}`} className="group block w-full text-center">
                <div className="relative w-full aspect-[4/5] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden mb-6 md:mb-8 shadow-sm hover:shadow-xl transition-all duration-500 bg-white border border-brand-border/40 p-2 md:p-3">
                  <div className="relative w-full h-full rounded-[1rem] md:rounded-[1.5rem] overflow-hidden">
                    <div className="absolute inset-0 bg-brand-dark/5 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>
                </div>
                <h3 className="text-lg md:text-xl font-serif font-medium text-brand-dark group-hover:text-brand-coral transition-colors tracking-wide">
                  {category.name}
                </h3>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 md:mt-24 text-center w-full"
        >
          <Link href="/shop" className="inline-flex items-center gap-2 md:gap-3 text-brand-dark font-medium hover:text-brand-coral transition-colors tracking-[0.2em] uppercase text-[10px] md:text-xs border-b border-brand-dark/30 hover:border-brand-coral pb-2 group">
            View All Categories
            <span className="transform group-hover:translate-x-2 transition-transform">→</span>
          </Link>
        </motion.div>
        
      </div>
    </section>
  );
}
