"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function Newsletter() {
  return (
    <section className="py-16 md:py-24 w-full bg-brand-bg relative overflow-hidden">
      {/* Soft Background Decor - scaled safely for mobile */}
      <div className="absolute inset-0 pointer-events-none flex justify-center items-center">
        <div className="w-[150vw] h-[150vw] sm:w-[800px] sm:h-[800px] bg-brand-coral/5 rounded-full blur-[80px] sm:blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex justify-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-4xl bg-white border border-brand-border/30 rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-12 md:p-20 text-center shadow-xl flex flex-col items-center mx-2"
        >
          <span className="text-brand-coral text-[9px] sm:text-[10px] font-bold tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-6 sm:mb-8 block">
            Join The Community
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-brand-dark mb-6 sm:mb-8 tracking-tight">
            Exclusive <span className="italic text-brand-yellow">Offers</span> & Updates
          </h2>
          <p className="text-brand-dark/70 text-sm sm:text-base md:text-lg mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed md:leading-loose font-light">
            Subscribe to our newsletter to receive early access to new collections, artisan stories, and a 10% discount on your first order.
          </p>

          <form className="relative w-full max-w-lg mx-auto flex flex-col sm:flex-row gap-4 sm:gap-0" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full pl-6 sm:pl-8 pr-6 sm:pr-40 py-4 sm:py-5 rounded-full border border-brand-border/50 bg-brand-bg/50 focus:bg-white shadow-inner focus:outline-none focus:ring-1 focus:ring-brand-coral focus:border-brand-coral transition-all text-sm sm:text-base text-brand-dark font-medium placeholder:font-normal placeholder:text-brand-dark/40"
              required
            />
            <button
              type="submit"
              className="sm:absolute sm:right-2 sm:top-2 sm:bottom-2 px-8 sm:px-10 py-4 sm:py-3 bg-brand-dark text-white rounded-full font-bold uppercase text-[10px] tracking-[0.2em] hover:bg-brand-coral transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 group shadow-md"
            >
              Subscribe
              <Send className="w-3 h-3 sm:w-4 sm:h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>
          <p className="text-brand-dark/40 text-[9px] sm:text-[10px] uppercase tracking-widest mt-6 sm:mt-8">
            By subscribing, you agree to our Terms & Privacy Policy.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
