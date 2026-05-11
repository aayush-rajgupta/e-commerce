"use client";

import { useState } from "react";
import Navbar from "../../src/components/home/Navbar";
import Footer from "../../src/components/home/Footer";
import { motion } from "framer-motion";
import { Package, Heart, User as UserIcon, CheckCircle2, Circle, Truck, PackageOpen } from "lucide-react";
import ProductCard from "../../src/components/shop/ProductCard";

// Mock data
const MOCK_WISHLIST = [
  {
    id: "p3",
    title: "Woven Wall Hanging",
    price: 150.0,
    image: "https://images.unsplash.com/photo-1583847268964-b28e501765c4?q=80&w=800&auto=format&fit=crop",
    category: "Decor",
  },
  {
    id: "p5",
    title: "Dried Floral Arrangement",
    price: 65.0,
    image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?q=80&w=800&auto=format&fit=crop",
    category: "Bouquets",
  }
];

const MOCK_ORDER = {
  id: "ORD-88231",
  date: "October 10, 2026",
  total: 215.00,
  status: "Shipped", // "Placed", "Processing", "Shipped", "Delivered"
  items: [
    { title: "Woven Wall Hanging", quantity: 1, price: 150.0 },
    { title: "Dried Floral Arrangement", quantity: 1, price: 65.0 }
  ]
};

const statuses = ["Placed", "Processing", "Shipped", "Delivered"];

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("orders");

  return (
    <main className="min-h-screen bg-brand-bg pt-24 pb-20 selection:bg-brand-coral selection:text-white">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row gap-8 lg:gap-16 items-start mt-8">
          
          {/* Sidebar Tabs */}
          <aside className="w-full md:w-64 shrink-0 space-y-2">
            <h1 className="text-3xl font-serif text-brand-dark mb-8 px-4 tracking-tight">My Account</h1>
            
            <button 
              onClick={() => setActiveTab("orders")}
              className={`w-full flex items-center gap-3 px-4 h-12 rounded-xl text-sm font-bold transition-all duration-300 ${activeTab === "orders" ? "bg-white/40 backdrop-blur-md border border-white/30 shadow-sm text-brand-dark translate-x-2" : "text-brand-dark/60 hover:bg-white/20 hover:text-brand-dark hover:translate-x-1"}`}
            >
              <Package className="w-4 h-4" />
              Order History
            </button>
            <button 
              onClick={() => setActiveTab("wishlist")}
              className={`w-full flex items-center gap-3 px-4 h-12 rounded-xl text-sm font-bold transition-all duration-300 ${activeTab === "wishlist" ? "bg-white/40 backdrop-blur-md border border-white/30 shadow-sm text-brand-dark translate-x-2" : "text-brand-dark/60 hover:bg-white/20 hover:text-brand-dark hover:translate-x-1"}`}
            >
              <Heart className="w-4 h-4" />
              Wishlist
            </button>
            <button 
              onClick={() => setActiveTab("details")}
              className={`w-full flex items-center gap-3 px-4 h-12 rounded-xl text-sm font-bold transition-all duration-300 ${activeTab === "details" ? "bg-white/40 backdrop-blur-md border border-white/30 shadow-sm text-brand-dark translate-x-2" : "text-brand-dark/60 hover:bg-white/20 hover:text-brand-dark hover:translate-x-1"}`}
            >
              <UserIcon className="w-4 h-4" />
              Account Details
            </button>
            
            <div className="pt-8 px-4">
              <button className="text-sm font-bold text-brand-coral underline underline-offset-4 decoration-brand-coral/30 hover:decoration-brand-coral transition-colors">
                Log Out
              </button>
            </div>
          </aside>

          {/* Main Content Area */}
          <div className="flex-1 w-full bg-white/40 backdrop-blur-md border border-white/30 shadow-sm rounded-[2rem] p-8 sm:p-12 transition-all duration-300">
            
            {activeTab === "orders" && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
                <h2 className="text-2xl font-serif text-brand-dark mb-8 tracking-tight">Order History</h2>
                
                <div className="border border-brand-border/40 rounded-[2rem] p-8 bg-white/30 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 border-b border-brand-border/40 pb-6 mb-8">
                    <div>
                      <h3 className="font-bold text-lg text-brand-dark tracking-tight">Order #{MOCK_ORDER.id}</h3>
                      <p className="text-xs font-medium text-brand-dark/60 mt-1 uppercase tracking-widest">Placed on {MOCK_ORDER.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-xl text-brand-dark tracking-tight">${MOCK_ORDER.total.toFixed(2)}</p>
                      <p className="text-xs text-brand-sage font-bold mt-1 uppercase tracking-widest">{MOCK_ORDER.status}</p>
                    </div>
                  </div>

                  {/* Order Timeline Visual UI */}
                  <div className="relative flex justify-between items-center w-full max-w-lg mx-auto my-14">
                    <div className="absolute top-1/2 left-0 w-full h-[2px] bg-brand-border/40 -translate-y-1/2 z-0"></div>
                    <div className="absolute top-1/2 left-0 h-[2px] bg-brand-sage -translate-y-1/2 z-0 transition-all duration-500" style={{ width: "66%" }}></div>
                    
                    {statuses.map((status, index) => {
                      const isCompleted = index <= statuses.indexOf(MOCK_ORDER.status);
                      const isCurrent = index === statuses.indexOf(MOCK_ORDER.status);
                      
                      return (
                        <div key={status} className="relative z-10 flex flex-col items-center gap-2">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center bg-white border-2 shadow-sm transition-all duration-300 ${isCompleted ? 'border-brand-sage scale-110' : 'border-brand-border/50'}`}>
                            {isCompleted ? (
                              <CheckCircle2 className={`w-5 h-5 ${isCurrent ? 'text-brand-sage' : 'text-brand-sage/60'}`} />
                            ) : (
                              <Circle className="w-2.5 h-2.5 text-brand-border/30 fill-brand-border/30" />
                            )}
                          </div>
                          <span className={`absolute top-10 text-[10px] font-bold uppercase tracking-widest transition-colors ${isCompleted ? 'text-brand-sage' : 'text-brand-dark/40'}`}>
                            {status}
                          </span>
                        </div>
                      )
                    })}
                  </div>

                  <div className="space-y-4 mt-16 bg-white/40 p-6 rounded-2xl border border-white/50">
                    {MOCK_ORDER.items.map((item, i) => (
                      <div key={i} className="flex justify-between items-center text-sm font-medium">
                        <span className="text-brand-dark/80">{item.quantity}x {item.title}</span>
                        <span className="font-bold text-brand-dark">${item.price.toFixed(2)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "wishlist" && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
                <h2 className="text-2xl font-serif text-brand-dark mb-8 tracking-tight">Your Wishlist</h2>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                  {MOCK_WISHLIST.map((product, idx) => (
                    <ProductCard key={product.id} product={product as any} index={idx} />
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === "details" && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
                <h2 className="text-2xl font-serif text-brand-dark mb-8 tracking-tight">Account Details</h2>
                <form className="max-w-md space-y-6">
                  <div>
                    <label className="block text-xs font-bold text-brand-dark/70 mb-2 ml-1 uppercase tracking-widest">Full Name</label>
                    <input type="text" defaultValue="Jane Doe" className="w-full h-12 bg-white/50 backdrop-blur-sm border border-brand-border/50 rounded-xl px-5 text-sm font-medium text-brand-dark outline-none focus:border-brand-sage focus:ring-1 focus:ring-brand-sage transition-all shadow-sm" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-brand-dark/70 mb-2 ml-1 uppercase tracking-widest">Email Address</label>
                    <input type="email" defaultValue="jane@example.com" className="w-full h-12 bg-white/50 backdrop-blur-sm border border-brand-border/50 rounded-xl px-5 text-sm font-medium text-brand-dark outline-none focus:border-brand-sage focus:ring-1 focus:ring-brand-sage transition-all shadow-sm" />
                  </div>
                  <button type="button" className="mt-6 h-12 px-8 border-2 border-brand-dark rounded-full text-brand-dark font-bold hover:bg-brand-dark hover:text-white hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ease-in-out text-sm">
                    Save Changes
                  </button>
                </form>
              </motion.div>
            )}

          </div>
        </div>
      </div>
      
      <div className="mt-24">
        <Footer />
      </div>
    </main>
  );
}
