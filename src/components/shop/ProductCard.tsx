import Link from "next/link";
import { motion } from "framer-motion";

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
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className="group relative flex flex-col p-4 bg-white/40 backdrop-blur-md border border-white/30 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-in-out"
    >
      {/* Image Container */}
      <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-brand-border/20 mb-5">
        {product.isNew && (
          <div className="absolute top-4 left-4 z-20 px-4 py-1 bg-brand-coral text-white text-[10px] font-bold uppercase tracking-widest rounded-full shadow-sm">
            New
          </div>
        )}
        
        {/* Doodle Wishlist Heart */}
        <button className="absolute top-3 right-3 z-20 w-10 h-10 flex items-center justify-center text-brand-dark hover:text-brand-coral hover:bg-white/50 rounded-full transition-all duration-300 drop-shadow-md backdrop-blur-sm bg-white/20">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" 
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

      {/* Content */}
      <div className="flex flex-col flex-grow px-1">
        <Link href={`/shop/${product.id}`} className="block flex-grow">
          <h3 className="text-base font-serif font-medium text-brand-dark group-hover:text-brand-coral transition-colors duration-300 leading-snug tracking-tight mb-2">
            {product.title}
          </h3>
        </Link>
        <div className="mt-auto font-bold text-lg text-brand-dark tracking-tight mb-4">
          ${product.price.toFixed(2)}
        </div>
        
        {/* Solid Add to Cart Button (Touch Optimized h-12) */}
        <button className="w-full h-12 flex items-center justify-center bg-brand-dark text-white text-sm font-medium rounded-full hover:bg-brand-sage hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 ease-in-out">
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
}
