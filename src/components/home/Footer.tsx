import Link from "next/link";
import { Mail } from "lucide-react";

const Instagram = ({ className }: { className?: string }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white pt-16 md:pt-24 pb-8 md:pb-12 w-full border-t border-brand-border/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-10 lg:gap-16 justify-items-center sm:justify-items-start w-full mb-16 md:mb-20">
          
          {/* Brand Col */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <Link href="/" className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8 group">
              <div className="w-10 h-10 sm:w-12 sm:h-12 border border-white/20 rounded-full flex items-center justify-center group-hover:bg-brand-coral group-hover:border-brand-coral transition-colors duration-300">
                <span className="font-serif font-bold text-lg sm:text-xl text-white">N</span>
              </div>
              <span className="font-serif font-semibold tracking-[0.2em] text-white text-base sm:text-lg">
                NITYAKHUSHI
              </span>
            </Link>
            <p className="text-white/60 font-light leading-relaxed sm:leading-loose mb-6 sm:mb-8 max-w-xs text-sm sm:text-base px-4 sm:px-0">
              Handcrafted artistry for your joy. We bring you sustainable, ethically sourced artisan goods designed to elevate your everyday life and support local communities.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/10 flex items-center justify-center bg-white/5 hover:bg-brand-coral hover:border-brand-coral transition-all duration-300 group shadow-md">
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-white/80 group-hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/10 flex items-center justify-center bg-white/5 hover:bg-brand-coral hover:border-brand-coral transition-all duration-300 group shadow-md">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-white/80 group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left mt-4 sm:mt-0">
            <h4 className="font-serif text-base sm:text-lg mb-6 sm:mb-8 text-brand-yellow">Shop</h4>
            <ul className="space-y-4 sm:space-y-6">
              <li><Link href="/shop" className="text-white/60 hover:text-brand-coral transition-colors text-sm tracking-wide">All Products</Link></li>
              <li><Link href="/shop?category=new" className="text-white/60 hover:text-brand-coral transition-colors text-sm tracking-wide">New Arrivals</Link></li>
              <li><Link href="/shop?category=decor" className="text-white/60 hover:text-brand-coral transition-colors text-sm tracking-wide">Home Decor</Link></li>
              <li><Link href="/shop?category=accessories" className="text-white/60 hover:text-brand-coral transition-colors text-sm tracking-wide">Accessories</Link></li>
              <li><Link href="/shop?category=gifts" className="text-white/60 hover:text-brand-coral transition-colors text-sm tracking-wide">Gifts</Link></li>
            </ul>
          </div>

          {/* About */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left mt-4 sm:mt-0">
            <h4 className="font-serif text-base sm:text-lg mb-6 sm:mb-8 text-brand-yellow">About</h4>
            <ul className="space-y-4 sm:space-y-6">
              <li><Link href="/about" className="text-white/60 hover:text-brand-coral transition-colors text-sm tracking-wide">Our Story</Link></li>
              <li><Link href="/artisans" className="text-white/60 hover:text-brand-coral transition-colors text-sm tracking-wide">Meet the Artisans</Link></li>
              <li><Link href="/sustainability" className="text-white/60 hover:text-brand-coral transition-colors text-sm tracking-wide">Sustainability</Link></li>
              <li><Link href="/blog" className="text-white/60 hover:text-brand-coral transition-colors text-sm tracking-wide">Journal</Link></li>
              <li><Link href="/contact" className="text-white/60 hover:text-brand-coral transition-colors text-sm tracking-wide">Contact Us</Link></li>
            </ul>
          </div>

          {/* Customer Care */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left w-full max-w-xs sm:max-w-none mt-4 sm:mt-0">
            <h4 className="font-serif text-base sm:text-lg mb-6 sm:mb-8 text-brand-yellow">Customer Care</h4>
            <div className="bg-white/5 border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 w-full flex flex-col items-center sm:items-start">
              <ul className="space-y-4 sm:space-y-6 mb-6 sm:mb-8 w-full">
                <li><Link href="/faq" className="text-white/60 hover:text-brand-coral transition-colors text-sm tracking-wide">FAQ</Link></li>
                <li><Link href="/shipping" className="text-white/60 hover:text-brand-coral transition-colors text-sm tracking-wide">Shipping & Returns</Link></li>
                <li><Link href="/terms" className="text-white/60 hover:text-brand-coral transition-colors text-sm tracking-wide">Terms & Conditions</Link></li>
              </ul>
              <div className="pt-6 sm:pt-8 border-t border-white/10 w-full flex flex-col items-center sm:items-start">
                <p className="text-xs sm:text-sm text-white/60 font-light">Need help? Email us:</p>
                <a href="mailto:hello@nityakhushi.com" className="text-brand-coral hover:text-brand-yellow transition-colors font-medium mt-2 sm:mt-3 block tracking-widest text-[10px] sm:text-xs uppercase">
                  hello@nityakhushi.com
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 sm:pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 w-full">
          <p className="text-white/40 text-[9px] sm:text-[10px] uppercase tracking-widest font-light text-center md:text-left">
            &copy; {new Date().getFullYear()} NITYAKHUSHI. All rights reserved.
          </p>
          <div className="flex items-center gap-4 sm:gap-8 mt-4 md:mt-0">
            <span className="text-white/40 text-[9px] sm:text-[10px] uppercase tracking-widest font-light hidden sm:inline">Secure Payments</span>
            <div className="flex gap-2 sm:gap-3 opacity-40">
              <div className="w-8 h-5 sm:w-10 sm:h-6 bg-white rounded-sm"></div>
              <div className="w-8 h-5 sm:w-10 sm:h-6 bg-white rounded-sm"></div>
              <div className="w-8 h-5 sm:w-10 sm:h-6 bg-white rounded-sm"></div>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
