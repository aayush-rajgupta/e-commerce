"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Instagram = ({ className }: { className?: string }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);

const galleryImages = [
  { id: 1, src: "/basket.png", span: "md:col-span-2 md:row-span-2" },
  { id: 2, src: "/pot.png", span: "col-span-1 row-span-1" },
  { id: 3, src: "/scarf.png", span: "col-span-1 row-span-1" },
  { id: 4, src: "/hairband.png", span: "col-span-1 row-span-1" },
  { id: 5, src: "/bouquet.png", span: "col-span-1 row-span-1" },
];

export default function CraftGallery() {
  return (
    <section className="py-16 md:py-24 w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        <div className="text-center mb-12 md:mb-16 lg:mb-24 w-full">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-serif text-brand-dark mb-4 md:mb-8 tracking-tight"
          >
            The Artisan <span className="italic text-brand-coral">Gallery</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-brand-dark/70 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed md:leading-loose font-light px-2"
          >
            Follow us <a href="#" className="font-bold hover:text-brand-coral transition-colors tracking-wide">@nityakhushi_</a> for a behind-the-scenes look at our process and new drops.
          </motion.p>
        </div>

        <div className="w-full max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8 auto-rows-[150px] sm:auto-rows-[200px] md:auto-rows-[250px]">
          {galleryImages.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative rounded-2xl md:rounded-3xl overflow-hidden group cursor-pointer border border-brand-border/30 shadow-sm hover:shadow-xl transition-all ${img.span}`}
            >
              <Image
                src={img.src}
                alt="Gallery image"
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
              {/* Instagram Hover Overlay */}
              <div className="absolute inset-0 bg-brand-dark/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                <Instagram className="w-8 h-8 md:w-10 md:h-10 text-white" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
