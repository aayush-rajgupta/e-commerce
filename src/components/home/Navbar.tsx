"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, ShoppingCart, User, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "Collections", href: "#collections" },
    { name: "Decor", href: "#decor" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-brand-border/30 py-3 md:py-4"
            : "bg-transparent py-4 md:py-8"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center w-full">
          
          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-brand-dark flex-shrink-0"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6 sm:w-7 sm:h-7" />
          </button>

          {/* Brand Logo (Left) */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 group flex-shrink-0">
            <div className="w-10 h-10 sm:w-12 sm:h-12 border border-brand-dark rounded-full flex items-center justify-center group-hover:bg-brand-dark transition-colors duration-300">
              <span className="font-serif font-bold text-lg sm:text-xl text-brand-dark group-hover:text-white transition-colors duration-300">N</span>
            </div>
            <span className="font-serif font-semibold tracking-[0.2em] text-brand-dark hidden sm:block text-sm sm:text-lg">
              NITYAKHUSHI
            </span>
          </Link>

          {/* Centered Desktop Links (Responsive Spacing) */}
          <ul className="hidden lg:flex items-center justify-center flex-1 gap-6 xl:gap-12 px-4 xl:px-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-[11px] xl:text-sm font-medium text-brand-dark/80 hover:text-brand-coral transition-colors duration-200 relative group tracking-widest uppercase"
                >
                  {link.name}
                  <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-brand-coral transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Icons (Right) */}
          <div className="flex items-center gap-4 sm:gap-8 flex-shrink-0">
            <button className="text-brand-dark hover:text-brand-coral transition-colors duration-200">
              <Search className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <button className="text-brand-dark hover:text-brand-coral transition-colors duration-200 hidden sm:block">
              <User className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <button className="relative text-brand-dark hover:text-brand-coral transition-colors duration-200">
              <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="absolute -top-2 -right-2 bg-brand-coral text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                2
              </span>
            </button>
          </div>

        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-brand-dark/40 backdrop-blur-sm z-50 lg:hidden"
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 w-[85%] max-w-sm h-full bg-brand-bg shadow-2xl z-50 p-6 sm:p-8 flex flex-col lg:hidden"
            >
              <button
                className="self-end text-brand-dark mb-8"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X className="w-6 h-6" />
              </button>
              
              <ul className="flex flex-col gap-6 overflow-y-auto">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-lg font-medium text-brand-dark hover:text-brand-coral transition-colors duration-200 tracking-wide"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
