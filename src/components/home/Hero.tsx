"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full flex items-center justify-center overflow-hidden py-20 md:py-28 lg:py-32 mt-16 md:mt-20">
      
      {/* Background Ambient Glow (Scaled for mobile) */}
      <div className="absolute inset-0 z-0 pointer-events-none flex justify-center items-center overflow-hidden">
        <div className="w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] lg:w-[800px] lg:h-[800px] bg-brand-coral/5 rounded-full mix-blend-multiply filter blur-[80px] sm:blur-[120px] opacity-70"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 flex flex-col items-center justify-center text-center w-full">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6 md:mb-10 inline-flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2 rounded-full border border-brand-coral/30 bg-brand-coral/5 backdrop-blur-sm"
        >
          <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-brand-coral"></span>
          <span className="text-[10px] md:text-xs font-bold text-brand-coral tracking-[0.1em] md:tracking-[0.2em] uppercase">New Artisan Collection</span>
        </motion.div>

        {/* Fluid typography scaling */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-serif text-brand-dark mb-6 md:mb-10 leading-[1.2] md:leading-[1.1] tracking-tight max-w-4xl mx-auto"
        >
          <span className="block font-medium">Handcrafted</span>
          <span className="block italic text-brand-coral mt-1 md:mt-2">Luxury & Artistry</span>
        </motion.h1>

        {/* Fluid paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="text-sm sm:text-base md:text-lg text-brand-dark/80 max-w-xl md:max-w-2xl mx-auto mb-10 md:mb-16 leading-relaxed md:leading-loose font-light px-2"
        >
          Discover our curated selection of sustainable, artisan-crafted home decor, bespoke bouquets, and unique accessories made with passion and purpose.
        </motion.p>

        {/* Fluid buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 w-full max-w-md mx-auto"
        >
          <Link
            href="/shop"
            className="w-full sm:w-auto px-8 md:px-10 py-3 md:py-4 bg-brand-dark text-white rounded-full text-sm md:text-base font-medium hover:bg-brand-coral hover:shadow-xl hover:shadow-brand-coral/20 transition-all duration-300 text-center tracking-wide"
          >
            Explore Collection
          </Link>
          <Link
            href="#featured"
            className="w-full sm:w-auto px-8 md:px-10 py-3 md:py-4 bg-transparent border border-brand-dark/30 text-brand-dark rounded-full text-sm md:text-base font-medium hover:border-brand-dark transition-all duration-300 text-center tracking-wide"
          >
            Shop Handmade
          </Link>
        </motion.div>

        {/* Fluid image height */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
          className="mt-16 md:mt-24 lg:mt-32 w-full max-w-6xl mx-auto relative h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[60vh] rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl border border-brand-border/30"
        >
          <div className="absolute inset-0 bg-brand-dark/5 z-10"></div>
          <Image 
            src="/bouquet.png" 
            alt="Handcrafted lifestyle" 
            fill 
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="object-cover object-center transform hover:scale-105 transition-transform duration-1000"
            priority
          />
        </motion.div>

      </div>
    </section>
  );
}
