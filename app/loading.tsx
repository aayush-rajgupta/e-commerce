"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-brand-bg">
      <div className="relative flex items-center justify-center">
        {/* Animated Outer Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="w-24 h-24 sm:w-32 sm:h-32 border-2 border-dashed border-brand-coral/30 rounded-full"
        />
        
        {/* Pulsating Inner Circle */}
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-16 h-16 sm:w-20 sm:h-20 border border-brand-coral rounded-full flex items-center justify-center bg-white shadow-xl"
        >
          <span className="font-serif font-bold text-2xl sm:text-3xl text-brand-dark">N</span>
        </motion.div>
        
        {/* Spinning Petal */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 flex items-start justify-center"
        >
          <div className="w-1.5 h-6 sm:w-2 sm:h-8 bg-brand-coral rounded-full mt-[-8px] sm:mt-[-12px] opacity-60"></div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="mt-8 text-center"
      >
        <h2 className="font-serif text-xl sm:text-2xl text-brand-dark tracking-wide">
          Nityakhushi
        </h2>
        <p className="text-brand-dark/40 text-[10px] sm:text-xs uppercase tracking-[0.3em] mt-3">
          Crafting your experience...
        </p>
      </motion.div>
    </div>
  );
}
