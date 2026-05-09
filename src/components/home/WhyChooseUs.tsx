"use client";

import { motion } from "framer-motion";
import { Leaf, HeartHandshake, ShieldCheck, Truck } from "lucide-react";

const features = [
  {
    icon: <HeartHandshake className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: "100% Handmade",
    description: "Every item is meticulously crafted by skilled artisans, ensuring unique character and quality."
  },
  {
    icon: <Leaf className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: "Sustainable Materials",
    description: "We use ethically sourced, eco-friendly materials to protect our planet for future generations."
  },
  {
    icon: <ShieldCheck className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: "Authenticity Guaranteed",
    description: "Direct partnerships with creators guarantee the authenticity and fair trade of every piece."
  },
  {
    icon: <Truck className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: "Eco-Conscious Delivery",
    description: "Your treasures are packed in recyclable materials and shipped with carbon-neutral methods."
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 w-full bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        <div className="text-center mb-12 md:mb-16 lg:mb-24 w-full">
          <span className="text-brand-coral text-[9px] md:text-[10px] font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase mb-4 md:mb-6 block">
            The Nityakhushi Difference
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-serif text-brand-dark mb-6 md:mb-8 tracking-tight"
          >
            Crafting with <span className="italic text-brand-yellow">Conscience</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-brand-dark/70 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed md:leading-loose font-light px-2"
          >
            We are dedicated to building a sustainable future without compromising on premium craftsmanship.
          </motion.p>
        </div>

        {/* 4 Items in a grid. responsive cols and gaps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12 justify-items-center w-full">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="w-full max-w-[320px] flex flex-col items-center text-center p-6 sm:p-8 lg:p-10 bg-brand-bg/50 border border-brand-border/30 rounded-[2rem] md:rounded-[2.5rem] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white text-brand-coral flex items-center justify-center mb-6 sm:mb-8 border border-brand-coral/20 shadow-sm">
                {feature.icon}
              </div>
              <h3 className="text-base sm:text-lg font-serif font-medium text-brand-dark mb-3 sm:mb-4 tracking-wide">{feature.title}</h3>
              <p className="text-brand-dark/60 leading-relaxed md:leading-loose font-light text-xs md:text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
