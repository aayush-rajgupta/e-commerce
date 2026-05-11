import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";

export interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
  category: string;
  isNew?: boolean;
}

interface ProductCardProps {
  product: Product;
  index: number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className="group relative flex flex-col"
    >
      {/* Image Container */}
      <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-brand-border/20 mb-4">
        {product.isNew && (
          <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-brand-coral text-white text-xs font-bold uppercase tracking-widest rounded-full">
            New
          </div>
        )}
        
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
        />
        
        {/* Overlay & Add to Cart Button */}
        <div className="absolute inset-0 bg-brand-dark/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-end justify-center pb-6">
          <button className="transform translate-y-8 group-hover:translate-y-0 transition-all duration-500 ease-out flex items-center gap-2 bg-white text-brand-dark px-6 py-3 rounded-full font-medium shadow-xl hover:bg-brand-dark hover:text-white">
            <ShoppingCart className="w-4 h-4" />
            <span className="text-sm tracking-wide">Add to Cart</span>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col px-1">
        <div className="text-xs text-brand-dark/60 tracking-widest uppercase mb-1">{product.category}</div>
        <Link href={`/shop/${product.id}`} className="block">
          <h3 className="text-lg font-serif text-brand-dark group-hover:text-brand-coral transition-colors duration-200">
            {product.title}
          </h3>
        </Link>
        <div className="mt-1 font-medium text-brand-dark">
          ${product.price.toFixed(2)}
        </div>
      </div>
    </motion.div>
  );
}
