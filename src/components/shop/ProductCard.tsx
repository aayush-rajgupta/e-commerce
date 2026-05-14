"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { generateSlug } from "../../lib/generateSlug";

export interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
  category: string;
  isNew?: boolean;
}

export default function ProductCard({
  product,
  index,
}: {
  product: Product;
  index: number;
}) {
  // Generate SEO-friendly slug: /shop/hand-woven-floral-hairband/dp/p2
  const slug = generateSlug(product.title);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(0,0,0,0.12)" }}
      className="group relative flex flex-col p-4 bg-white/40 backdrop-blur-md border border-white/30 rounded-3xl shadow-sm cursor-pointer"
    >
      {/* Entire clickable area: image + title + price */}
      <Link
        href={`/shop/${slug}/dp/${product.id}`}
        className="block flex-grow"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        {/* Image Container */}
        <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-brand-border/20 mb-5">
          {product.isNew && (
            <div className="absolute top-4 left-4 z-20 px-4 py-1 bg-brand-coral text-white text-[10px] font-bold uppercase tracking-widest rounded-full shadow-sm">
              New
            </div>
          )}

          {/* Doodle Wishlist Heart — stops propagation so it doesn't navigate */}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              // TODO: dispatch wishlist action
            }}
            className="absolute top-3 right-3 z-20 w-10 h-10 flex items-center justify-center text-brand-dark hover:text-brand-coral hover:bg-white/50 rounded-full transition-all duration-300 drop-shadow-md backdrop-blur-sm bg-white/20"
            aria-label="Add to wishlist"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5"
            >
              <path
                d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                transform="rotate(-2 12 12) skewX(2)"
              ></path>
            </svg>
          </button>

          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
          />
        </div>

        {/* Title + Price */}
        <div className="flex flex-col px-1 mb-4">
          <h3 className="text-base font-serif font-medium text-brand-dark group-hover:text-brand-coral transition-colors duration-300 leading-snug tracking-tight mb-2">
            {product.title}
          </h3>
          <div className="font-bold text-lg text-brand-dark tracking-tight">
            ${product.price.toFixed(2)}
          </div>
        </div>
      </Link>

      {/* Add to Cart — stops propagation so it doesn't navigate */}
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          // TODO: dispatch add-to-cart action
        }}
        className="w-full h-12 flex items-center justify-center bg-brand-dark text-white text-sm font-medium rounded-full hover:bg-brand-sage hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 ease-in-out"
        aria-label={`Add ${product.title} to cart`}
      >
        Add to Cart
      </button>
    </motion.div>
  );
}
