"use client";

import { useState } from "react";
import ProductCard, { Product } from "../../src/components/shop/ProductCard";
import { motion } from "framer-motion";
import { Filter, ChevronDown } from "lucide-react";

// Mock data for shop products
const SHOP_PRODUCTS: Product[] = [
  {
    id: "p1",
    title: "Handcrafted Ceramic Vase",
    price: 120.0,
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800&auto=format&fit=crop",
    category: "Decor",
    isNew: true,
  },
  {
    id: "p2",
    title: "Artisan Preserved Bouquet",
    price: 85.0,
    image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?q=80&w=800&auto=format&fit=crop",
    category: "Bouquets",
  },
  {
    id: "p3",
    title: "Woven Wall Hanging",
    price: 150.0,
    image: "https://images.unsplash.com/photo-1583847268964-b28e501765c4?q=80&w=800&auto=format&fit=crop",
    category: "Decor",
  },
  {
    id: "p4",
    title: "Minimalist Table Lamp",
    price: 210.0,
    image: "https://images.unsplash.com/photo-1600166898405-da9535204843?q=80&w=800&auto=format&fit=crop",
    category: "Lighting",
    isNew: true,
  },
  {
    id: "p5",
    title: "Dried Floral Arrangement",
    price: 65.0,
    image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?q=80&w=800&auto=format&fit=crop",
    category: "Bouquets",
  },
  {
    id: "p6",
    title: "Rustic Wooden Bowl",
    price: 45.0,
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800&auto=format&fit=crop",
    category: "Accessories",
  },
  {
    id: "p7",
    title: "Linen Throw Pillow",
    price: 55.0,
    image: "https://images.unsplash.com/photo-1583847268964-b28e501765c4?q=80&w=800&auto=format&fit=crop",
    category: "Decor",
  },
  {
    id: "p8",
    title: "Geometric Candle Holder",
    price: 35.0,
    image: "https://images.unsplash.com/photo-1600166898405-da9535204843?q=80&w=800&auto=format&fit=crop",
    category: "Accessories",
  },
  {
    id: "p9",
    title: "Spring Blossoms Bouquet",
    price: 95.0,
    image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?q=80&w=800&auto=format&fit=crop",
    category: "Bouquets",
    isNew: true,
  },
];

const CATEGORIES = ["All", "Decor", "Bouquets", "Lighting", "Accessories"];
const SORTS = ["Featured", "Price: Low to High", "Price: High to Low", "Newest"];

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeSort, setActiveSort] = useState("Featured");

  // Filter products
  const filteredProducts = SHOP_PRODUCTS.filter((product) => {
    if (activeCategory === "All") return true;
    return product.category === activeCategory;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (activeSort === "Price: Low to High") return a.price - b.price;
    if (activeSort === "Price: High to Low") return b.price - a.price;
    if (activeSort === "Newest") return a.isNew ? -1 : 1;
    return 0; // Featured (default)
  });

  return (
    <main className="relative w-full min-h-screen bg-brand-bg selection:bg-brand-coral selection:text-white overflow-x-hidden">
      
      {/* Enhanced Fluid Mesh Gradient Background */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, 150, 0],
            y: [0, -100, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[5%] left-[-15%] w-[60vw] h-[60vw] bg-brand-yellow/15 rounded-full mix-blend-multiply filter blur-[120px] opacity-80"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.6, 1],
            x: [0, -200, 0],
            y: [0, 150, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[30%] right-[-15%] w-[50vw] h-[50vw] bg-brand-coral/15 rounded-full mix-blend-multiply filter blur-[140px] opacity-80"
        />
      </div>

      {/* Hero Section — clear the fixed navbar with explicit top spacing */}
      <section className="relative w-full flex flex-col items-center justify-center z-10 px-6" style={{ paddingTop: "4rem", paddingBottom: "4rem" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-4xl mx-auto"
        >
          <p className="text-brand-dark/35 text-[10px] font-bold uppercase tracking-[0.35em] mb-6">Nityakhushi · The Collection</p>
          <h1 className="font-serif text-brand-dark tracking-tighter leading-[0.92]" style={{ fontSize: "clamp(3rem, 8vw, 7rem)", marginBottom: "1.5rem" }}>
            The Collection
          </h1>
          <p className="text-brand-dark/50 max-w-lg mx-auto font-medium leading-relaxed" style={{ fontSize: "1rem" }}>
            A curated selection of extraordinary pieces — each made with love, designed to bring warmth and elegance to your space.
          </p>
        </motion.div>
      </section>

      {/* Sticky Filter Bar — sticks just below the fixed navbar */}
      <div className="sticky z-40 w-full flex justify-center px-4" style={{ top: "5rem", paddingBottom: "1rem", marginBottom: "2.5rem" }}>
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 w-full max-w-[1100px] bg-white/60 backdrop-blur-xl border border-white/50 shadow-sm rounded-full" style={{ padding: "0.5rem 1.25rem" }}>
          
          {/* Categories */}
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex items-center gap-1.5">
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`whitespace-nowrap rounded-full font-bold transition-all duration-300 ${
                    activeCategory === category 
                      ? "bg-brand-dark text-white shadow-sm" 
                      : "text-brand-dark/55 hover:text-brand-dark hover:bg-white/80"
                  }`}
                  style={{ padding: "0.45rem 1.1rem", fontSize: "0.78rem" }}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-5 bg-brand-dark/10" />

          {/* Sort Dropdown */}
          <div className="relative group shrink-0 z-50">
            <button className="flex items-center gap-2 text-brand-dark hover:text-brand-sage transition-colors duration-200" style={{ fontSize: "0.78rem", fontWeight: 700 }}>
              {activeSort}
              <ChevronDown className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 transition-opacity" />
            </button>
            <div className="absolute top-full right-0 mt-3 w-52 bg-white backdrop-blur-xl border border-brand-dark/[0.08] shadow-xl rounded-2xl p-1.5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-1 group-hover:translate-y-0">
              {SORTS.map((sort) => (
                <button
                  key={sort}
                  onClick={() => setActiveSort(sort)}
                  className={`w-full text-left rounded-xl transition-colors ${
                    activeSort === sort ? "bg-brand-sage/10 text-brand-sage" : "text-brand-dark/60 hover:bg-brand-bg hover:text-brand-dark"
                  }`}
                  style={{ padding: "0.6rem 1rem", fontSize: "0.78rem", fontWeight: 700 }}
                >
                  {sort}
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Product Grid */}
      <section className="relative z-10" style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem 6rem" }}>
        {sortedProducts.length > 0 ? (
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" style={{ gap: "2rem" }}>
            {sortedProducts.map((product, index) => (
              <motion.div 
                key={product.id}
                className={index % 2 !== 0 ? "lg:mt-16" : ""}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut", delay: (index % 4) * 0.1 }}
              >
                <ProductCard product={product} index={index} />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-32 text-center bg-white/20 backdrop-blur-sm rounded-[3rem] border border-white/30 shadow-sm max-w-4xl mx-auto">
            <Filter className="w-12 h-12 text-brand-dark/20 mb-6" />
            <h3 className="text-2xl font-serif text-brand-dark mb-2">No items found</h3>
            <p className="text-brand-dark/60 font-medium mb-8">Try adjusting your filters or search criteria.</p>
            <button 
              onClick={() => setActiveCategory("All")}
              className="px-8 py-3.5 bg-brand-dark text-white rounded-full text-sm font-bold hover:bg-brand-sage hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              Clear Filters
            </button>
          </div>
        )}
      </section>

      {/* Load More Area */}
      {sortedProducts.length > 0 && (
        <div className="flex justify-center mb-10 relative z-10">
          <button className="group relative px-10 h-14 bg-white/40 backdrop-blur-md border border-white/40 rounded-full font-bold text-brand-dark shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 overflow-hidden">
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">Load More Treasures</span>
            <div className="absolute inset-0 bg-brand-dark transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] z-0"></div>
          </button>
        </div>
      )}

    </main>
  );
}
