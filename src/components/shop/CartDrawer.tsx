"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Trash2, Plus, Minus, ShoppingBag } from "lucide-react";
import { useCartStore } from "../../store/useCartStore";
import Image from "next/image";
import Link from "next/link";

export default function CartDrawer() {
  const { isCartOpen, closeCart, items, removeItem, updateQuantity, cartTotal } = useCartStore();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 z-[60] bg-brand-dark/30 backdrop-blur-sm"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 z-[70] h-full w-full max-w-md bg-white/40 backdrop-blur-md border-l border-white/30 shadow-[-10px_0_30px_rgba(0,0,0,0.05)] flex flex-col p-6 sm:p-8"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-brand-border/30">
              <h2 className="text-2xl font-serif text-brand-dark flex items-center gap-3">
                <ShoppingBag className="w-6 h-6" />
                Your Cart
              </h2>
              <button
                onClick={closeCart}
                className="w-10 h-10 rounded-full bg-white/40 backdrop-blur-md border border-white/30 shadow-sm flex items-center justify-center text-brand-dark hover:bg-white/80 hover:-translate-y-0.5 transition-all duration-300"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Items List */}
            <div className="flex-1 overflow-y-auto pr-2 space-y-4 scrollbar-hide">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center opacity-70">
                  <ShoppingBag className="w-16 h-16 mb-4 text-brand-dark/30" />
                  <p className="text-brand-dark text-lg font-serif">Your cart is empty.</p>
                  <p className="text-brand-dark/60 text-sm mt-2">Looks like you haven't added anything yet.</p>
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="flex gap-4 p-4 bg-white/40 backdrop-blur-md border border-white/30 shadow-sm rounded-2xl relative group transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                    <div className="relative w-24 h-24 rounded-xl overflow-hidden flex-shrink-0 bg-white/50">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col flex-1 justify-between py-1">
                      <div>
                        <h3 className="font-serif font-medium text-brand-dark text-lg leading-tight mb-1 pr-6 tracking-tight">
                          {item.title}
                        </h3>
                        <p className="text-brand-dark font-bold">${item.price.toFixed(2)}</p>
                      </div>
                      
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center gap-3 bg-white/40 backdrop-blur-md border border-white/30 shadow-sm rounded-full px-3 py-1">
                          <button
                            onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                            className="text-brand-dark/70 hover:text-brand-dark p-1 transition-colors"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="text-sm font-bold text-brand-dark w-4 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="text-brand-dark/70 hover:text-brand-dark p-1 transition-colors"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-brand-dark/40 hover:text-brand-coral transition-colors p-2"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="pt-6 mt-6 border-t border-brand-border/30">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-brand-dark/70 uppercase tracking-widest text-xs font-bold">Subtotal</span>
                  <span className="text-2xl font-serif font-bold text-brand-dark tracking-tight">
                    ${cartTotal().toFixed(2)}
                  </span>
                </div>
                <Link href="/checkout" onClick={closeCart}>
                  <button className="w-full h-12 bg-brand-dark text-white rounded-full font-medium shadow-md hover:bg-brand-sage hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-in-out flex items-center justify-center gap-2">
                    Proceed to Checkout
                  </button>
                </Link>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
