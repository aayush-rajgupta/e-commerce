"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function StorySection() {
  return (
    <section id="about" className="py-16 md:py-24 w-full relative overflow-hidden bg-brand-dark text-white">
      {/* Decorative BG - fluid sizing */}
      <div className="absolute inset-0 opacity-10 pointer-events-none flex justify-center items-center">
        <div className="w-[150vw] h-[150vw] sm:w-[800px] sm:h-[800px] bg-brand-coral rounded-full blur-[80px] sm:blur-[150px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24 items-center w-full">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1 flex flex-col items-center text-center lg:items-start lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full border border-brand-coral/30 mb-8 sm:mb-10 bg-brand-coral/5">
              <span className="text-brand-coral text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase">Our Heritage</span>
            </div>
            
            {/* Fluid typography */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif mb-6 sm:mb-10 leading-[1.2] sm:leading-[1.1] tracking-tight">
              Preserving <span className="italic text-brand-coral">Tradition</span>,<br/>
              Crafting the <span className="italic text-brand-yellow">Future</span>.
            </h2>
            
            <div className="space-y-6 sm:space-y-8 text-white/70 text-sm sm:text-base md:text-lg font-light leading-relaxed sm:leading-loose mb-10 sm:mb-16 max-w-xl sm:max-w-2xl mx-auto lg:mx-0">
              <p>
                At NITYAKHUSHI, we believe that true luxury lies in the touch of a human hand. Our journey began with a simple mission: to empower local artisans while bringing authentic, sustainable, and beautifully crafted pieces into modern homes.
              </p>
              <p>
                Every hand-dyed scarf, woven basket, and bespoke bouquet tells a story of generations of skill. By ethically sourcing our materials and ensuring fair trade practices, we are committed to preserving traditional craftsmanship in an ever-industrializing world.
              </p>
            </div>

            <div>
              <Link
                href="/about"
                className="inline-block px-8 sm:px-12 py-3 sm:py-4 bg-white text-brand-dark rounded-full font-bold hover:bg-brand-coral hover:text-white transition-all duration-300 shadow-xl tracking-[0.2em] uppercase text-[10px] sm:text-xs"
              >
                Read Our Full Story
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="order-1 lg:order-2 relative w-full max-w-sm sm:max-w-md mx-auto lg:max-w-none flex justify-center"
          >
            <div className="relative w-full aspect-[4/5] rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-2xl border border-white/10">
              <div className="absolute inset-0 bg-brand-dark/20 z-10"></div>
              <Image 
                src="/bouquet.png"
                alt="Artisan at work"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
            
            {/* Floating Stats Card - Fluid Padding and Text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute -bottom-6 sm:-bottom-8 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-xl border border-white/20 p-4 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] shadow-2xl z-20 w-[95%] sm:w-auto"
            >
              <div className="flex items-center justify-center gap-6 sm:gap-10 md:gap-16">
                <div className="text-center">
                  <h4 className="text-2xl sm:text-3xl md:text-4xl font-serif text-brand-yellow mb-1 sm:mb-2">50+</h4>
                  <p className="text-white/80 text-[8px] sm:text-[10px] font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em]">Local Artisans</p>
                </div>
                <div className="w-[1px] h-8 sm:h-12 bg-white/20"></div>
                <div className="text-center">
                  <h4 className="text-2xl sm:text-3xl md:text-4xl font-serif text-brand-coral mb-1 sm:mb-2">100%</h4>
                  <p className="text-white/80 text-[8px] sm:text-[10px] font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em]">Sustainable</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
