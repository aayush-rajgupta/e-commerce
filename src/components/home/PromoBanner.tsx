"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function PromoBanner() {
  return (
    <section className="py-16 md:py-24 w-full bg-brand-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full max-w-5xl rounded-[2rem] sm:rounded-[3rem] overflow-hidden bg-brand-dark flex flex-col lg:flex-row items-center p-8 sm:p-12 md:p-24 shadow-xl border border-brand-border/20 text-center lg:text-left justify-between"
        >
          {/* Background Gradients - scaled for mobile */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
            <div className="w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] bg-brand-coral/20 rounded-full blur-[80px] sm:blur-[120px]"></div>
          </div>

          <div className="w-full lg:w-1/2 relative z-10 flex flex-col items-center lg:items-start mb-12 sm:mb-16 lg:mb-0">
            <span className="text-brand-yellow font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[9px] sm:text-[10px] mb-6 sm:mb-8 block">
              Limited Edition
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white mb-6 sm:mb-8 leading-tight tracking-tight">
              The Festive <br className="hidden sm:block"/><span className="italic text-brand-coral">Artisan</span> Collection
            </h2>
            <p className="text-white/70 text-sm sm:text-base md:text-lg mb-8 sm:mb-12 max-w-sm sm:max-w-md leading-relaxed sm:leading-loose font-light px-2 sm:px-0">
              Celebrate the season with exclusive handcrafted pieces. Perfect for gifting or elevating your own living space.
            </p>
            <Link
              href="/shop?collection=festive"
              className="px-8 sm:px-12 py-3 sm:py-4 bg-brand-coral text-white rounded-full font-bold uppercase text-[10px] sm:text-xs tracking-[0.2em] hover:bg-white hover:text-brand-coral transition-colors shadow-lg shadow-brand-coral/20"
            >
              Shop the Collection
            </Link>
          </div>

          <div className="w-full lg:w-1/2 relative z-10 flex justify-center lg:justify-end mt-8 lg:mt-0">
            {/* Glowing circular showcase - properly scaled down for mobile */}
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center shadow-2xl">
              <div className="absolute inset-0 rounded-full border border-dashed border-brand-yellow/30 animate-spin-slow"></div>
              <div className="absolute inset-3 sm:inset-4 rounded-full border border-brand-coral/20 border-t-transparent animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '15s' }}></div>
              <div className="text-center p-4 sm:p-8 flex flex-col items-center justify-center">
                <span className="block text-lg sm:text-xl font-serif text-brand-yellow mb-1 sm:mb-2 italic">Up to</span>
                <span className="block text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-1 sm:mb-2 tracking-tighter">30%</span>
                <span className="block text-[10px] sm:text-xs text-white/70 uppercase tracking-[0.3em] sm:tracking-[0.4em]">Off</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
