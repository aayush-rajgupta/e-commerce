"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { ChevronLeft, Plus, Minus, Star, ShieldCheck, Truck } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Navbar from "../../../src/components/home/Navbar";
import Footer from "../../../src/components/home/Footer";
import { useCartStore } from "../../../src/store/useCartStore";

const MOCK_PRODUCT = {
  id: "p1",
  title: "Handcrafted Ceramic Vase",
  price: 120.0,
  description: "This exquisite ceramic vase is handcrafted by skilled artisans. Featuring a matte off-white finish with subtle terracotta speckles, it brings a warm, minimalist aesthetic to any room. Perfect for dried florals or standing elegantly on its own.",
  images: [
    "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1583847268964-b28e501765c4?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600166898405-da9535204843?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800&auto=format&fit=crop",
  ],
  category: "Decor",
  rating: 4.8,
  reviewsCount: 24,
};

const MOCK_REVIEWS = [
  { id: 1, author: "Sarah M.", rating: 5, date: "October 12, 2026", text: "Absolutely beautiful piece! It fits perfectly on my console table. The texture is lovely." },
  { id: 2, author: "Emily R.", rating: 4, date: "September 28, 2026", text: "Very nice quality. A bit smaller than I expected, but still a great addition to my living room." },
  { id: 3, author: "Jessica T.", rating: 5, date: "September 15, 2026", text: "Stunning craftsmanship. I bought two for my bedroom side tables." },
];

export default function ProductDetailPage() {
  const { id } = useParams();
  const { addItem, openCart } = useCartStore();
  const [emblaRef] = useEmblaCarousel({ loop: true });
  
  const [quantity, setQuantity] = useState(1);
  const [pinCode, setPinCode] = useState("");
  const [deliveryStatus, setDeliveryStatus] = useState<"idle" | "checking" | "success" | "error">("idle");
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleCheckDelivery = (e: React.FormEvent) => {
    e.preventDefault();
    if (pinCode.length !== 6) {
      setDeliveryStatus("error");
      return;
    }
    setDeliveryStatus("checking");
    setTimeout(() => {
      setDeliveryStatus("success");
    }, 1000);
  };

  const handleAddToCart = () => {
    addItem({
      id: MOCK_PRODUCT.id,
      title: MOCK_PRODUCT.title,
      price: MOCK_PRODUCT.price,
      image: MOCK_PRODUCT.images[0],
      quantity: quantity,
    });
    openCart();
  };

  return (
    <main className="relative w-full min-h-screen bg-brand-bg selection:bg-brand-coral selection:text-white pt-24 pb-20">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb & Back */}
        <div className="mb-8 flex items-center justify-between text-sm">
          <Link href="/shop" className="flex items-center gap-2 text-brand-dark/60 font-medium hover:text-brand-coral transition-colors duration-200">
            <ChevronLeft className="w-4 h-4" />
            Back to Shop
          </Link>
          <div className="text-brand-dark/40 font-bold tracking-widest uppercase text-xs">
            {MOCK_PRODUCT.category}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mb-24">
          
          {/* Mobile-Optimized Swipeable Gallery */}
          <div className="w-full lg:w-1/2">
            <div className="relative w-full bg-white/40 backdrop-blur-md border border-white/30 shadow-sm rounded-[2.5rem] p-3 overflow-hidden">
              <div className="overflow-hidden rounded-[2rem]" ref={emblaRef}>
                <div className="flex touch-pan-y">
                  {MOCK_PRODUCT.images.map((src, index) => (
                    <div className="relative flex-[0_0_100%] min-w-0 aspect-[4/5] sm:aspect-square" key={index}>
                      <img
                        src={src}
                        alt={`${MOCK_PRODUCT.title} - Image ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-10 pointer-events-none">
                {MOCK_PRODUCT.images.map((_, i) => (
                  <div key={i} className={`w-2 h-2 rounded-full transition-all ${i === 0 ? "bg-brand-dark w-4" : "bg-white/50 backdrop-blur-sm border border-brand-dark/20"}`} />
                ))}
              </div>
            </div>
          </div>

          {/* Product Details & Actions */}
          <div className="w-full lg:w-1/2 flex flex-col pt-2 lg:pt-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-brand-dark mb-4 leading-tight tracking-tight">
                {MOCK_PRODUCT.title}
              </h1>
              
              <div className="flex items-center gap-5 mb-8">
                <span className="text-2xl font-bold text-brand-dark tracking-tight">${MOCK_PRODUCT.price.toFixed(2)}</span>
                <div className="w-px h-6 bg-brand-border/50"></div>
                <div className="flex items-center gap-1.5 text-brand-yellow">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="text-sm font-bold text-brand-dark">{MOCK_PRODUCT.rating}</span>
                  <span className="text-sm font-medium text-brand-dark/50 underline decoration-brand-dark/20 underline-offset-4 ml-1 cursor-pointer hover:text-brand-dark transition-colors">
                    ({MOCK_PRODUCT.reviewsCount} reviews)
                  </span>
                </div>
              </div>

              <p className="text-brand-dark/70 text-[15px] leading-relaxed mb-10">
                {MOCK_PRODUCT.description}
              </p>

              {/* Action Area */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                {/* Quantity */}
                <div className="flex items-center justify-between sm:justify-start gap-4 h-14 bg-white/40 backdrop-blur-md border border-white/30 shadow-sm rounded-full px-6 w-full sm:w-auto shrink-0 transition-colors">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="text-brand-dark/60 hover:text-brand-dark transition-colors p-2 -ml-2">
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="text-base font-bold w-6 text-center text-brand-dark">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="text-brand-dark/60 hover:text-brand-dark transition-colors p-2 -mr-2">
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                {/* Add to Cart */}
                <button 
                  onClick={handleAddToCart}
                  className="flex-1 h-14 bg-brand-dark text-white rounded-full font-bold hover:bg-brand-sage hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-in-out shadow-md flex items-center justify-center gap-2"
                >
                  Add to Cart - ${(MOCK_PRODUCT.price * quantity).toFixed(2)}
                </button>

                {/* Doodle Wishlist */}
                <button 
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className={`w-14 h-14 shrink-0 rounded-full flex items-center justify-center hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ${isWishlisted ? 'bg-brand-coral/10 text-brand-coral border-brand-coral/20' : 'bg-white/40 text-brand-dark hover:text-brand-coral border-white/30'} backdrop-blur-md border shadow-sm`}
                >
                  <svg viewBox="0 0 24 24" fill={isWishlisted ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 transform -rotate-3">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" transform="rotate(-2 12 12) skewX(2)"></path>
                  </svg>
                </button>
              </div>

              {/* Delivery Check UI */}
              <div className="bg-white/40 backdrop-blur-md border border-white/30 shadow-sm rounded-[2rem] p-8 mb-10">
                <div className="flex items-center gap-3 mb-5">
                  <Truck className="w-5 h-5 text-brand-dark/60" />
                  <h3 className="font-bold text-brand-dark tracking-tight">Check Delivery Availability</h3>
                </div>
                <form onSubmit={handleCheckDelivery} className="flex gap-3 relative">
                  <input 
                    type="text" 
                    placeholder="Enter 6-digit PIN code" 
                    maxLength={6}
                    value={pinCode}
                    onChange={(e) => setPinCode(e.target.value.replace(/\D/g, ''))}
                    className="flex-1 h-12 bg-white/50 backdrop-blur-sm border border-white/60 focus:border-brand-sage focus:ring-1 focus:ring-brand-sage rounded-full px-5 text-sm font-medium text-brand-dark outline-none transition-all placeholder:text-brand-dark/40"
                  />
                  <button type="submit" className="h-12 bg-brand-dark text-white px-8 rounded-full text-sm font-bold hover:bg-brand-sage hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 ease-in-out shadow-sm">
                    {deliveryStatus === "checking" ? "Checking..." : "Check"}
                  </button>
                </form>
                
                {deliveryStatus === "success" && (
                  <motion.div initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} className="mt-5 flex items-start gap-2 text-brand-sage text-sm font-bold bg-brand-sage/5 p-4 rounded-xl border border-brand-sage/20">
                    <ShieldCheck className="w-5 h-5 mt-0.5 shrink-0" />
                    <p>Delivery available in 3-5 days. Free shipping on your first order!</p>
                  </motion.div>
                )}
                {deliveryStatus === "error" && (
                  <motion.div initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} className="mt-4 text-brand-coral text-sm font-bold pl-1">
                    Please enter a valid 6-digit PIN code.
                  </motion.div>
                )}
              </div>
              
              {/* Product Info Accordeons (Mocked as static) */}
              <div className="space-y-5 text-sm">
                <div className="border-b border-brand-border/30 pb-5">
                  <h4 className="font-bold text-brand-dark mb-2 tracking-tight">Materials & Care</h4>
                  <p className="text-brand-dark/60 font-medium leading-relaxed">100% natural ceramic. Wipe clean with a damp cloth. Do not use harsh chemicals.</p>
                </div>
                <div className="border-b border-brand-border/30 pb-5">
                  <h4 className="font-bold text-brand-dark mb-2 tracking-tight">Dimensions</h4>
                  <p className="text-brand-dark/60 font-medium leading-relaxed">Height: 8.5", Width: 4.5", Opening: 2.0"</p>
                </div>
              </div>

            </motion.div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="max-w-4xl mx-auto pt-16 border-t border-brand-border/30">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-4xl font-serif text-brand-dark mb-4 tracking-tight">Customer Reviews</h2>
              <div className="flex items-center gap-4">
                <div className="flex text-brand-yellow">
                  {[1,2,3,4,5].map(i => <Star key={i} className={`w-6 h-6 ${i <= 4 ? "fill-current" : i === 5 ? "fill-current opacity-50" : ""}`} />)}
                </div>
                <span className="font-bold text-brand-dark text-lg">4.8 out of 5</span>
                <span className="text-brand-dark/50 font-medium">Based on {MOCK_PRODUCT.reviewsCount} reviews</span>
              </div>
            </div>
            <button className="h-12 px-8 bg-white/40 backdrop-blur-md border border-white/30 shadow-sm rounded-full text-brand-dark font-bold hover:bg-white/60 hover:-translate-y-1 hover:shadow-md transition-all duration-300">
              Write a Review
            </button>
          </div>

          <div className="space-y-6">
            {MOCK_REVIEWS.map((review) => (
              <div key={review.id} className="bg-white/40 backdrop-blur-md border border-white/30 shadow-sm rounded-[2rem] p-8 sm:p-10 transition-all duration-300 hover:shadow-md">
                <div className="flex items-start justify-between mb-5">
                  <div>
                    <h4 className="font-bold text-brand-dark text-lg tracking-tight">{review.author}</h4>
                    <p className="text-xs font-medium text-brand-dark/40 mt-1 uppercase tracking-widest">{review.date}</p>
                  </div>
                  <div className="flex text-brand-yellow bg-white/50 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/60 shadow-sm">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < review.rating ? "fill-current" : "opacity-20"}`} />
                    ))}
                  </div>
                </div>
                <p className="text-brand-dark/80 font-medium leading-relaxed">{review.text}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <button className="h-12 px-8 text-sm font-bold text-brand-dark border-2 border-brand-dark rounded-full hover:bg-brand-dark hover:text-white transition-all duration-300 ease-in-out">
              Load More Reviews
            </button>
          </div>
        </div>

      </div>
      <Footer />
    </main>
  );
}
