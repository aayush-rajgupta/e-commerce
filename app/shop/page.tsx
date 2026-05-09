import Navbar from "../../src/components/home/Navbar";
import FeaturedCategories from "../../src/components/home/FeaturedCategories";
import BestSelling from "../../src/components/home/BestSelling";
import NewArrivals from "../../src/components/home/NewArrivals";
import Footer from "../../src/components/home/Footer";

export default function Shop() {
  return (
    <main className="w-full min-h-screen bg-[var(--bg-color)] selection:bg-brand-coral selection:text-white overflow-x-hidden pt-20">
      <Navbar />
      
      <div className="text-center py-12">
        <h1 className="text-4xl md:text-5xl font-serif text-brand-dark mb-4">
          All <span className="italic text-brand-coral">Products</span>
        </h1>
        <p className="text-brand-dark/70 text-lg">Browse our entire artisan collection.</p>
      </div>

      <NewArrivals />
      <BestSelling />
      <FeaturedCategories />
      
      <Footer />
    </main>
  );
}
