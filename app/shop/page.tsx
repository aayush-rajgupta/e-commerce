"use client";

import { useState } from "react";
import Navbar from "../../src/components/home/Navbar";
import Footer from "../../src/components/home/Footer";
import ProductCard, { Product } from "../../src/components/shop/ProductCard";
import { motion } from "framer-motion";
import { Filter, ChevronDown } from "lucide-react";

// Mock data for shop products
const SHOP_PRODUCTS: Product[] = [
  {
    id: "p1",
    title: "Handcrafted Ceramic Vase",
    price: 120.0,
    image: "/decor1.jpg",
    category: "Decor",
    isNew: true,
  },
  {
    id: "p2",
    title: "Artisan Preserved Bouquet",
    price: 85.0,
    image: "/bouquet.png",
    category: "Bouquets",
  },
  {
    id: "p3",
    title: "Woven Wall Hanging",
    price: 150.0,
    image: "/decor2.jpg",
    category: "Decor",
  },
  {
    id: "p4",
    title: "Minimalist Table Lamp",
    price: 210.0,
    image: "/decor3.jpg",
    category: "Lighting",
    isNew: true,
  },
  {
    id: "p5",
    title: "Dried Floral Arrangement",
    price: 65.0,
    image: "/bouquet.png",
    category: "Bouquets",
  },
  {
    id: "p6",
    title: "Rustic Wooden Bowl",
    price: 45.0,
    image: "/decor1.jpg",
    category: "Accessories",
  },
  {
    id: "p7",
    title: "Linen Throw Pillow",
    price: 55.0,
    image: "/decor2.jpg",
    category: "Decor",
  },
  {
    id: "p8",
    title: "Geometric Candle Holder",
    price: 35.0,
    image: "/decor3.jpg",
    category: "Accessories",
  },
  {
    id: "p9",
    title: "Spring Blossoms Bouquet",
    price: 95.0,
    image: "/bouquet.png",
    category: "Bouquets",
    isNew: true,
  },
];

const CATEGORIES = ["All", "Decor", "Bouquets", "Lighting", "Accessories"];
const SORTS = ["Featured", "Price: Low to High", "Price: High to Low", "Newest"];

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeSort, setActiveSort] = useState("Featured");
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

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
    <main className="w-full min-h-screen bg-[var(--bg-color)] selection:bg-brand-coral selection:text-white overflow-x-hidden pt-24">
      <Navbar />
      
      {/* Shop Header */}
      <section className="relative w-full py-16 md:py-24 flex items-center justify-center bg-brand-dark overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-brand-dark/80 z-10"></div>
          {/* Subtle background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-coral/20 blur-[100px] rounded-full"></div>
        </div>
        
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-4 md:mb-6 tracking-tight">
              Our Collection
            </h1>
            <p className="text-white/70 text-sm md:text-base max-w-2xl mx-auto font-light leading-relaxed">
              Explore our curated selection of handcrafted decor, bespoke bouquets, and unique accessories. Every piece is designed to bring warmth and artistry to your space.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Shop Layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        
        {/* Mobile Filter Toggle */}
        <div className="md:hidden flex items-center justify-between mb-8 border-b border-brand-border/50 pb-4">
          <button 
            onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
            className="flex items-center gap-2 text-brand-dark font-medium uppercase tracking-widest text-xs"
          >
            <Filter className="w-4 h-4" />
            Filters
          </button>
          
          <div className="flex items-center gap-2 text-xs font-medium text-brand-dark/70 tracking-widest uppercase">
            {filteredProducts.length} Products
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 lg:gap-16">
          
          {/* Sidebar (Desktop) & Mobile Filter Dropdown */}
          <aside className={`md:w-64 flex-shrink-0 ${isMobileFilterOpen ? 'block' : 'hidden'} md:block mb-8 md:mb-0`}>
            <div className="sticky top-32">
              <div className="mb-10">
                <h3 className="text-sm font-bold text-brand-dark tracking-[0.2em] uppercase mb-6 flex items-center justify-between">
                  Categories
                </h3>
                <ul className="space-y-4">
                  {CATEGORIES.map((category) => (
                    <li key={category}>
                      <button
                        onClick={() => {
                          setActiveCategory(category);
                          setIsMobileFilterOpen(false);
                        }}
                        className={`text-sm tracking-wide transition-colors duration-200 ${
                          activeCategory === category 
                            ? "text-brand-coral font-medium" 
                            : "text-brand-dark/70 hover:text-brand-dark"
                        }`}
                      >
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-bold text-brand-dark tracking-[0.2em] uppercase mb-6">
                  Sort By
                </h3>
                <ul className="space-y-4">
                  {SORTS.map((sort) => (
                    <li key={sort}>
                      <button
                        onClick={() => {
                          setActiveSort(sort);
                          setIsMobileFilterOpen(false);
                        }}
                        className={`text-sm tracking-wide flex items-center gap-2 transition-colors duration-200 ${
                          activeSort === sort 
                            ? "text-brand-coral font-medium" 
                            : "text-brand-dark/70 hover:text-brand-dark"
                        }`}
                      >
                        <div className={`w-3 h-3 rounded-full border flex items-center justify-center ${
                          activeSort === sort ? "border-brand-coral" : "border-brand-dark/30"
                        }`}>
                          {activeSort === sort && <div className="w-1.5 h-1.5 bg-brand-coral rounded-full" />}
                        </div>
                        {sort}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Desktop Top Bar */}
            <div className="hidden md:flex items-center justify-between mb-10 pb-4 border-b border-brand-border/30">
              <h2 className="text-2xl font-serif text-brand-dark">
                {activeCategory === "All" ? "All Products" : activeCategory}
              </h2>
              <span className="text-sm text-brand-dark/60 tracking-widest uppercase">
                Showing {filteredProducts.length} Results
              </span>
            </div>

            {/* Grid */}
            {sortedProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 xl:gap-x-8 xl:gap-y-16">
                {sortedProducts.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <p className="text-brand-dark/60 text-lg mb-4">No products found in this category.</p>
                <button 
                  onClick={() => setActiveCategory("All")}
                  className="px-6 py-2 border border-brand-dark text-brand-dark rounded-full text-sm font-medium hover:bg-brand-dark hover:text-white transition-colors duration-300"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
