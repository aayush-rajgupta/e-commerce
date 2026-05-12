"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, ShoppingCart, User, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCartStore } from "../../store/useCartStore";
import CartDrawer from "../shop/CartDrawer";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { openCart, itemCount } = useCartStore();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const allNavLinks = [
    { name: "Home", href: "/" },
    { name: "Categories", href: "/categories" },
    { name: "Contact", href: "#contact" },
  ];

  // Hide the link whose href exactly matches the current page
  const navLinks = allNavLinks.filter((link) => link.href !== pathname);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 w-screen z-50 flex justify-center pointer-events-none pt-4 sm:pt-6 lg:pt-8 px-4"
      >
        <div className={`pointer-events-auto flex items-center transition-all duration-500 ease-in-out ${isScrolled
          ? "bg-white/40 backdrop-blur-md border border-white/30 shadow-sm rounded-full px-6 py-3 lg:px-10"
          : "bg-white/20 backdrop-blur-sm border border-white/20 shadow-sm rounded-full px-5 py-3 lg:px-8"
          } w-full max-w-7xl lg:w-max lg:max-w-none justify-between gap-4 lg:gap-16`}>

          {/* MOBILE LEFT: Menu Button */}
          <div className="flex justify-start lg:hidden">
            <button
              className="text-brand-dark hover:text-brand-sage transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="w-6 h-6 sm:w-7 sm:h-7" />
            </button>
          </div>

          {/* DESKTOP LEFT: Logo */}
          <div className="hidden lg:flex shrink-0 items-center">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 xl:w-12 xl:h-12 border-2 border-brand-dark rounded-full flex items-center justify-center group-hover:bg-brand-dark transition-all duration-500 shadow-sm shrink-0">
                <span className="font-serif font-bold text-lg xl:text-xl text-brand-dark group-hover:text-white transition-colors duration-500">N</span>
              </div>
              <span className="font-serif font-bold tracking-[0.2em] text-brand-dark text-sm xl:text-base transition-colors duration-300 group-hover:text-brand-sage pt-0.5 whitespace-nowrap">
                NITYAKHUSHI
              </span>
            </Link>
          </div>

          {/* MOBILE CENTER: Logo */}
          <div className="shrink-0 flex justify-center lg:hidden">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 border-2 border-brand-dark rounded-full flex items-center justify-center group-hover:bg-brand-dark transition-all duration-500 shadow-sm shrink-0">
                <span className="font-serif font-bold text-lg text-brand-dark group-hover:text-white transition-colors duration-500">N</span>
              </div>
              <span className="font-serif font-bold tracking-[0.2em] text-brand-dark hidden sm:block text-sm pt-0.5 whitespace-nowrap">
                NITYAKHUSHI
              </span>
            </Link>
          </div>

          {/* DESKTOP CENTER: Links */}
          <div className="hidden lg:flex shrink-0 items-center">
            <ul className="flex items-center justify-center gap-8 xl:gap-12">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-xs xl:text-sm font-bold text-brand-dark/80 hover:text-brand-sage transition-all duration-300 relative group tracking-widest uppercase flex items-center whitespace-nowrap"
                  >
                    {link.name}
                    <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-brand-sage transition-all duration-300 ease-in-out group-hover:w-full rounded-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT AREA (Icons) */}
          <div className="flex items-center justify-end gap-5 sm:gap-6 shrink-0">
            <button className="flex items-center text-brand-dark hover:text-brand-sage hover:-translate-y-0.5 transition-all duration-300">
              <Search className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <Link href="/profile" className="hidden sm:flex items-center">
              <button className="text-brand-dark hover:text-brand-sage hover:-translate-y-0.5 transition-all duration-300">
                <User className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </Link>
            <button
              onClick={openCart}
              className="relative flex items-center text-brand-dark hover:text-brand-sage hover:-translate-y-0.5 transition-all duration-300"
            >
              <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6" />
              {itemCount() > 0 && (
                <span className="absolute -top-1.5 -right-2 bg-brand-coral text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full shadow-sm">
                  {itemCount()}
                </span>
              )}
            </button>
          </div>

        </div>
      </motion.nav>

      {/* Slide-out Cart Drawer */}
      <CartDrawer />

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
