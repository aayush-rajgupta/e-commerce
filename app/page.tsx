import Navbar from "../src/components/home/Navbar";
import Hero from "../src/components/home/Hero";
import FeaturedCategories from "../src/components/home/FeaturedCategories";
import BestSelling from "../src/components/home/BestSelling";
import StorySection from "../src/components/home/StorySection";
import PromoBanner from "../src/components/home/PromoBanner";
import NewArrivals from "../src/components/home/NewArrivals";
import WhyChooseUs from "../src/components/home/WhyChooseUs";
import Testimonials from "../src/components/home/Testimonials";
import CraftGallery from "../src/components/home/CraftGallery";
import Newsletter from "../src/components/home/Newsletter";
import Footer from "../src/components/home/Footer";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-[var(--bg-color)] selection:bg-brand-coral selection:text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <FeaturedCategories />
      <BestSelling />
      <StorySection />
      <PromoBanner />
      <NewArrivals />
      <WhyChooseUs />
      <Testimonials />
      <CraftGallery />
      <Newsletter />
      <Footer />
    </main>
  );
}
