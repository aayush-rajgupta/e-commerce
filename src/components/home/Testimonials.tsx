"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const reviews = [
  {
    id: 1,
    text: "The handcrafted vase I purchased is absolutely breathtaking. You can see the intricate detailing and love poured into it. It has completely transformed my living room.",
    author: "Sarah Jenkins",
    location: "New York, NY"
  },
  {
    id: 2,
    text: "I love knowing that my purchase directly supports the artisans. The sustainable packaging was a wonderful touch. Highly recommend Nityakhushi to anyone looking for authentic decor.",
    author: "Michael Chen",
    location: "San Francisco, CA"
  },
  {
    id: 3,
    text: "Beautiful quality and exceptional service. The hand-dyed scarf feels like pure luxury. It is evident that Nityakhushi curates their pieces with extreme care.",
    author: "Emma Thompson",
    location: "London, UK"
  }
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 w-full relative overflow-hidden bg-brand-dark">
      {/* Decorative Blur - scaled safely for mobile */}
      <div className="absolute inset-0 pointer-events-none flex justify-center items-center">
        <div className="w-[150vw] h-[150vw] sm:w-[800px] sm:h-[800px] bg-brand-coral rounded-full blur-[80px] sm:blur-[150px] opacity-10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
        
        <div className="text-center mb-16 md:mb-20 w-full">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-serif text-white tracking-tight mb-6 md:mb-8"
          >
            Words of <span className="italic text-brand-yellow">Appreciation</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/60 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed md:leading-loose font-light px-2"
          >
            Hear from our community of conscious consumers who have experienced the magic of handcrafted artistry.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-16 justify-items-center w-full">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="w-full max-w-sm bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 sm:p-10 shadow-2xl relative flex flex-col items-center text-center"
            >
              <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-brand-coral/40 mb-6 sm:mb-8" />
              <p className="text-white/80 text-sm sm:text-base leading-relaxed sm:leading-loose font-light relative z-10 mb-8 sm:mb-10 flex-grow">
                "{review.text}"
              </p>
              <div className="border-t border-white/10 pt-6 w-full">
                <span className="block font-medium font-serif text-white mb-2 tracking-wide text-base sm:text-lg">{review.author}</span>
                <span className="block text-[9px] sm:text-[10px] text-brand-yellow uppercase tracking-[0.2em]">{review.location}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
