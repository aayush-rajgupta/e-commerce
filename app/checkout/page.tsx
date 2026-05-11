"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronLeft, Lock, CreditCard, ArrowRight } from "lucide-react";
import { useCartStore } from "../../src/store/useCartStore";

export default function CheckoutPage() {
  const { items, cartTotal } = useCartStore();
  const [promoCode, setPromoCode] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  
  // Mocked state
  const hasFreeShipping = true; 

  const subtotal = cartTotal();
  const shippingCost = hasFreeShipping ? 0 : 15;
  const taxes = subtotal * 0.08; // Mock 8% tax
  const total = subtotal + shippingCost + taxes;

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      alert("Checkout functionality mocked!");
      setIsProcessing(false);
    }, 1000);
  };

  return (
    <main className="min-h-screen bg-brand-bg selection:bg-brand-coral selection:text-white pb-20">
      {/* Checkout Header (Minimal) */}
      <header className="w-full border-b border-brand-border/30 bg-brand-bg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between">
          <Link href="/shop" className="text-brand-dark/60 hover:text-brand-dark flex items-center gap-1 text-sm font-medium transition-colors">
            <ChevronLeft className="w-4 h-4" />
            Return to Shop
          </Link>
          <div className="font-serif font-bold text-xl text-brand-dark tracking-widest">
            NITYAKHUSHI
          </div>
          <div className="flex items-center gap-2 text-brand-sage text-sm font-medium">
            <Lock className="w-4 h-4" />
            Secure
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          
          {/* Left Column: Forms */}
          <div className="w-full lg:w-[55%] flex flex-col gap-10">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
              <h2 className="text-2xl font-serif text-brand-dark mb-6">Contact Information</h2>
              <div className="space-y-4">
                <input type="email" placeholder="Email Address" className="w-full bg-white/50 backdrop-blur-sm border border-brand-border/50 rounded-xl px-4 py-3.5 text-brand-dark outline-none focus:border-brand-sage focus:ring-1 focus:ring-brand-sage transition-all placeholder:text-brand-dark/40" />
                <label className="flex items-center gap-2 text-sm text-brand-dark/70">
                  <input type="checkbox" className="rounded text-brand-sage focus:ring-brand-sage border-brand-border/50 bg-white/50" />
                  Email me with news and offers
                </label>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              <h2 className="text-2xl font-serif text-brand-dark mb-6">Shipping Address</h2>
              <form className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="First Name" className="col-span-1 bg-white/50 backdrop-blur-sm border border-brand-border/50 rounded-xl px-4 py-3.5 text-brand-dark outline-none focus:border-brand-sage focus:ring-1 focus:ring-brand-sage transition-all placeholder:text-brand-dark/40" />
                <input type="text" placeholder="Last Name" className="col-span-1 bg-white/50 backdrop-blur-sm border border-brand-border/50 rounded-xl px-4 py-3.5 text-brand-dark outline-none focus:border-brand-sage focus:ring-1 focus:ring-brand-sage transition-all placeholder:text-brand-dark/40" />
                <input type="text" placeholder="Address" className="col-span-2 bg-white/50 backdrop-blur-sm border border-brand-border/50 rounded-xl px-4 py-3.5 text-brand-dark outline-none focus:border-brand-sage focus:ring-1 focus:ring-brand-sage transition-all placeholder:text-brand-dark/40" />
                <input type="text" placeholder="Apartment, suite, etc. (optional)" className="col-span-2 bg-white/50 backdrop-blur-sm border border-brand-border/50 rounded-xl px-4 py-3.5 text-brand-dark outline-none focus:border-brand-sage focus:ring-1 focus:ring-brand-sage transition-all placeholder:text-brand-dark/40" />
                <input type="text" placeholder="City" className="col-span-2 sm:col-span-1 bg-white/50 backdrop-blur-sm border border-brand-border/50 rounded-xl px-4 py-3.5 text-brand-dark outline-none focus:border-brand-sage focus:ring-1 focus:ring-brand-sage transition-all placeholder:text-brand-dark/40" />
                <input type="text" placeholder="PIN Code" className="col-span-2 sm:col-span-1 bg-white/50 backdrop-blur-sm border border-brand-border/50 rounded-xl px-4 py-3.5 text-brand-dark outline-none focus:border-brand-sage focus:ring-1 focus:ring-brand-sage transition-all placeholder:text-brand-dark/40" />
                <input type="text" placeholder="Phone Number" className="col-span-2 bg-white/50 backdrop-blur-sm border border-brand-border/50 rounded-xl px-4 py-3.5 text-brand-dark outline-none focus:border-brand-sage focus:ring-1 focus:ring-brand-sage transition-all placeholder:text-brand-dark/40" />
              </form>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-white/40 backdrop-blur-md border border-white/30 shadow-sm rounded-[2rem] p-8 sm:p-10 mb-8">
              <h2 className="text-2xl font-serif text-brand-dark mb-8 tracking-tight">Shipping Address</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-brand-dark/70 mb-2 ml-1 uppercase tracking-widest">Country/Region</label>
                  <select className="w-full h-12 bg-white/50 backdrop-blur-sm border border-brand-border/50 rounded-xl px-5 text-sm font-medium text-brand-dark outline-none focus:border-brand-sage focus:ring-1 focus:ring-brand-sage transition-all shadow-sm appearance-none">
                    <option>United States</option>
                    <option>Canada</option>
                    <option>United Kingdom</option>
                    <option>Australia</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-brand-dark/70 mb-2 ml-1 uppercase tracking-widest">First Name</label>
                  <input type="text" className="w-full h-12 bg-white/50 backdrop-blur-sm border border-brand-border/50 rounded-xl px-5 text-sm font-medium text-brand-dark outline-none focus:border-brand-sage focus:ring-1 focus:ring-brand-sage transition-all shadow-sm" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-brand-dark/70 mb-2 ml-1 uppercase tracking-widest">Last Name</label>
                  <input type="text" className="w-full h-12 bg-white/50 backdrop-blur-sm border border-brand-border/50 rounded-xl px-5 text-sm font-medium text-brand-dark outline-none focus:border-brand-sage focus:ring-1 focus:ring-brand-sage transition-all shadow-sm" />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-brand-dark/70 mb-2 ml-1 uppercase tracking-widest">Address</label>
                  <input type="text" className="w-full h-12 bg-white/50 backdrop-blur-sm border border-brand-border/50 rounded-xl px-5 text-sm font-medium text-brand-dark outline-none focus:border-brand-sage focus:ring-1 focus:ring-brand-sage transition-all shadow-sm" />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-brand-dark/70 mb-2 ml-1 uppercase tracking-widest">Apartment, suite, etc. (optional)</label>
                  <input type="text" className="w-full h-12 bg-white/50 backdrop-blur-sm border border-brand-border/50 rounded-xl px-5 text-sm font-medium text-brand-dark outline-none focus:border-brand-sage focus:ring-1 focus:ring-brand-sage transition-all shadow-sm" />
                </div>
                <div className="sm:col-span-2 grid grid-cols-3 gap-6">
                  <div className="col-span-1">
                    <label className="block text-xs font-bold text-brand-dark/70 mb-2 ml-1 uppercase tracking-widest">City</label>
                    <input type="text" className="w-full h-12 bg-white/50 backdrop-blur-sm border border-brand-border/50 rounded-xl px-5 text-sm font-medium text-brand-dark outline-none focus:border-brand-sage focus:ring-1 focus:ring-brand-sage transition-all shadow-sm" />
                  </div>
                  <div className="col-span-1">
                    <label className="block text-xs font-bold text-brand-dark/70 mb-2 ml-1 uppercase tracking-widest">State</label>
                    <input type="text" className="w-full h-12 bg-white/50 backdrop-blur-sm border border-brand-border/50 rounded-xl px-5 text-sm font-medium text-brand-dark outline-none focus:border-brand-sage focus:ring-1 focus:ring-brand-sage transition-all shadow-sm" />
                  </div>
                  <div className="col-span-1">
                    <label className="block text-xs font-bold text-brand-dark/70 mb-2 ml-1 uppercase tracking-widest">ZIP code</label>
                    <input type="text" className="w-full h-12 bg-white/50 backdrop-blur-sm border border-brand-border/50 rounded-xl px-5 text-sm font-medium text-brand-dark outline-none focus:border-brand-sage focus:ring-1 focus:ring-brand-sage transition-all shadow-sm" />
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-white/40 backdrop-blur-md border border-white/30 shadow-sm rounded-[2rem] p-8 sm:p-10 mb-8">
              <h2 className="text-2xl font-serif text-brand-dark mb-8 tracking-tight">Payment</h2>
              <p className="text-sm font-medium text-brand-dark/60 mb-6">All transactions are secure and encrypted.</p>
              
              <div className="border border-brand-border/40 rounded-[1.5rem] bg-white/30 p-6 flex flex-col items-center justify-center h-40">
                <CreditCard className="w-10 h-10 text-brand-dark/30 mb-3" />
                <p className="font-bold text-brand-dark/50 tracking-wide">Mock Payment Gateway</p>
                <p className="text-xs font-medium text-brand-dark/40 mt-1">Frontend implementation only.</p>
              </div>
            </motion.div>

            <button 
              onClick={handlePlaceOrder}
              disabled={isProcessing}
              className="w-full h-14 bg-brand-dark text-white rounded-full font-bold shadow-md hover:bg-brand-sage hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-in-out disabled:opacity-50 disabled:hover:translate-y-0 disabled:hover:shadow-md flex items-center justify-center gap-3 text-lg"
            >
              {isProcessing ? "Processing..." : "Place Order"}
              {!isProcessing && <ArrowRight className="w-5 h-5" />}
            </button>
          </div>

          {/* Order Summary (Sticky Panel) */}
          <div className="lg:col-span-5">
            <div className="sticky top-24 bg-white/40 backdrop-blur-md border border-white/30 shadow-sm rounded-[2rem] p-8 sm:p-10">
              <h2 className="text-2xl font-serif text-brand-dark mb-8 tracking-tight">Order Summary</h2>
              
              <div className="space-y-6 mb-8 max-h-[40vh] overflow-y-auto pr-2 scrollbar-hide">
                {items.length === 0 ? (
                  <p className="text-brand-dark/50 text-sm">Your cart is empty.</p>
                ) : (
                  items.map(item => (
                    <div key={item.id} className="flex gap-4">
                      <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-white/50 shrink-0 shadow-sm">
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                        <div className="absolute top-0 right-0 bg-brand-dark text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-bl-lg">
                          {item.quantity}
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col justify-center">
                        <h3 className="font-medium text-brand-dark leading-tight tracking-tight mb-1">{item.title}</h3>
                        <p className="font-bold text-brand-dark">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Promo Code */}
              <div className="flex gap-3 mb-8 border-b border-brand-border/30 pb-8">
                <input 
                  type="text" 
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  placeholder="Gift card or discount code" 
                  className="flex-1 h-12 bg-white/50 backdrop-blur-sm border border-brand-border/50 rounded-xl px-4 text-sm font-medium text-brand-dark outline-none focus:border-brand-sage focus:ring-1 focus:ring-brand-sage transition-all shadow-sm" 
                />
                <button className="h-12 bg-brand-border border border-brand-dark/10 text-brand-dark px-6 rounded-xl text-sm font-bold hover:bg-brand-border/80 transition-colors shadow-sm">Apply</button>
              </div>

              <div className="space-y-4 mb-6 text-sm font-medium text-brand-dark/70">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-bold text-brand-dark">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Shipping</span>
                  <div className="text-right">
                    {hasFreeShipping ? (
                      <span className="text-brand-sage font-bold bg-brand-sage/10 px-2 py-0.5 rounded-md">Free</span>
                    ) : (
                      <span className="font-bold text-brand-dark">${shippingCost.toFixed(2)}</span>
                    )}
                  </div>
                </div>
                <div className="flex justify-between">
                  <span>Taxes</span>
                  <span className="font-bold text-brand-dark">${taxes.toFixed(2)}</span>
                </div>
              </div>

              <div className="pt-6 border-t border-brand-border/30 flex justify-between items-end">
                <span className="text-lg font-bold text-brand-dark">Total</span>
                <span className="text-3xl font-serif text-brand-dark tracking-tight">
                  <span className="text-sm font-medium text-brand-dark/50 mr-1 uppercase">USD</span>
                  ${total.toFixed(2)}
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
