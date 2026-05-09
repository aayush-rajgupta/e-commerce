"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingBag, Eye } from "lucide-react";

const products = [
  { id: 1, name: "Sunset Horizon Scarf", price: "$45.00", artisan: "Maria Santos", image: "/scarf.png", isNew: true },
  { id: 2, name: "Midnight Bloom Bouquet", price: "$60.00", artisan: "Elena Rose", image: "/bouquet.png", isNew: false },
  { id: 3, name: "Terracotta Dream Pot", price: "$35.00", artisan: "Carlos Ceramics", image: "/pot.png", isNew: false },
  { id: 4, name: "Ocean Breeze Hairband", price: "$18.00", artisan: "Sophie Crafts", image: "/hairband.png", isNew: true },
  { id: 5, name: "Amber Handwoven Basket", price: "$85.00", artisan: "Luna Weaves", image: "/basket.png", isNew: false },
  { id: 6, name: "Brass Motif Keychain", price: "$22.00", artisan: "Forge & Fire", image: "/keychain.png", isNew: false },
];

export default function BestSelling() {
  return (
    <section className="w-full py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        <div className="text-center mb-12 md:mb-16 lg:mb-24 w-full">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-serif text-brand-dark mb-4 md:mb-8 tracking-tight"
          >
            Artisan <span className="italic text-brand-coral">Bestsellers</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-brand-dark/70 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed md:leading-loose font-light px-2"
          >
            Our most loved handcrafted pieces, carefully selected for their exceptional quality and unique design.
          </motion.p>
        </div>

        {/* Responsive gaps and internal card padding */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12 lg:gap-16 justify-items-center w-full">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="w-full max-w-sm group relative bg-white border border-brand-border/30 rounded-3xl p-4 sm:p-6 shadow-sm hover:shadow-xl hover:shadow-brand-dark/5 transition-all duration-500 flex flex-col"
            >
              {product.isNew && (
                <span className="absolute top-6 left-6 md:top-10 md:left-10 z-20 bg-brand-coral text-white text-[9px] md:text-[10px] font-bold px-3 md:px-4 py-1 md:py-1.5 rounded-full uppercase tracking-widest shadow-sm">
                  New
                </span>
              )}

              {/* Quick Actions (Hover) */}
              <div className="absolute top-6 right-6 md:top-10 md:right-10 z-20 flex flex-col gap-2 md:gap-3 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                <button className="w-8 h-8 md:w-10 md:h-10 bg-white/90 text-brand-dark rounded-full flex items-center justify-center shadow-md hover:bg-brand-coral hover:text-white transition-colors">
                  <Heart className="w-3 h-3 md:w-4 md:h-4" />
                </button>
                <button className="w-8 h-8 md:w-10 md:h-10 bg-white/90 text-brand-dark rounded-full flex items-center justify-center shadow-md hover:bg-brand-coral hover:text-white transition-colors">
                  <Eye className="w-3 h-3 md:w-4 md:h-4" />
                </button>
              </div>

              <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden mb-6 md:mb-8 bg-brand-bg mix-blend-multiply">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              <div className="flex flex-col flex-grow text-center">
                <span className="text-[9px] md:text-[10px] text-brand-yellow font-bold uppercase tracking-widest mb-2 md:mb-3">
                  By {product.artisan}
                </span>
                <Link href={`/product/${product.id}`}>
                  <h3 className="text-base md:text-lg font-serif font-medium text-brand-dark mb-3 md:mb-4 hover:text-brand-coral transition-colors line-clamp-1">
                    {product.name}
                  </h3>
                </Link>
                <div className="flex items-center justify-between mt-auto pt-4 md:pt-6 border-t border-brand-border/20">
                  <span className="text-base md:text-lg font-serif text-brand-dark">{product.price}</span>
                  <button className="flex items-center gap-1 md:gap-2 text-[10px] md:text-xs font-bold uppercase tracking-widest text-brand-coral hover:text-brand-dark transition-colors group/btn">
                    <ShoppingBag className="w-3 h-3 md:w-4 md:h-4 group-hover/btn:scale-110 transition-transform" />
                    Add
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 md:mt-24 text-center w-full">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 md:gap-3 px-8 md:px-12 py-3 md:py-4 border border-brand-dark/30 text-brand-dark rounded-full font-medium hover:border-brand-dark transition-all duration-300 tracking-[0.2em] uppercase text-[10px] md:text-xs"
          >
            View All Bestsellers
          </Link>
        </div>
      </div>
    </section>
  );
}
