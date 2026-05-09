"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const arrivals = [
  { id: 1, name: "Woven Wall Hanging", price: "$85.00", image: "/basket.png" },
  { id: 2, name: "Amber Glass Vase", price: "$42.00", image: "/pot.png" },
  { id: 3, name: "Silk Blend Scarf", price: "$55.00", image: "/scarf.png" },
  { id: 4, name: "Preserved Floral Display", price: "$95.00", image: "/bouquet.png" },
  { id: 5, name: "Brass Motif Hairband", price: "$28.00", image: "/hairband.png" },
  { id: 6, name: "Terracotta Pitcher", price: "$50.00", image: "/pot.png" },
];

export default function NewArrivals() {
  return (
    <section className="py-16 md:py-24 w-full overflow-hidden bg-brand-dark/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center w-full">
        
        <div className="text-center mb-12 md:mb-16 lg:mb-24 w-full">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-serif text-brand-dark mb-4 md:mb-8 tracking-tight"
          >
            Just <span className="italic text-brand-coral">Arrived</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-brand-dark/70 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed md:leading-loose font-light mb-8 md:mb-10 px-2"
          >
            Be the first to explore our latest handcrafted pieces, hot out of the artisan's studio.
          </motion.p>
          <Link href="/shop?sort=new" className="inline-flex items-center gap-2 md:gap-3 px-8 md:px-10 py-3 border border-brand-dark/30 rounded-full font-bold text-[9px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] hover:border-brand-dark transition-all">
            Shop All New
            <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
          </Link>
        </div>

        {/* Responsive grid-cols-3 and centered layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12 lg:gap-16 justify-items-center w-full">
          {arrivals.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="w-full max-w-sm group flex flex-col"
            >
              <Link href={`/product/${item.id}`} className="block w-full">
                <div className="relative w-full aspect-[4/5] rounded-[1.5rem] md:rounded-3xl overflow-hidden mb-6 md:mb-8 bg-white shadow-sm border border-brand-border/20 p-2">
                  <div className="relative w-full h-full rounded-[1rem] md:rounded-[1.5rem] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 350px"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/10 transition-colors duration-300"></div>
                  </div>
                </div>
                <div className="text-center px-4">
                  <h3 className="text-base md:text-lg font-serif font-medium text-brand-dark mb-2 md:mb-3 group-hover:text-brand-coral transition-colors">
                    {item.name}
                  </h3>
                  <span className="text-brand-dark/60 text-xs md:text-sm tracking-widest">{item.price}</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
