"use client";

import { useState } from "react";
import { CheckCircle, EyeOff, Star, Trash2 } from "lucide-react";

export default function AdminReviewsPage() {
  const [reviews, setReviews] = useState([
    { id: 1, product: "Handcrafted Ceramic Vase", author: "Sarah M.", rating: 5, text: "Absolutely beautiful piece! It fits perfectly on my console table.", status: "Pending" },
    { id: 2, product: "Artisan Preserved Bouquet", author: "Emily R.", rating: 4, text: "Very nice quality. A bit smaller than I expected.", status: "Published" },
    { id: 3, product: "Woven Wall Hanging", author: "Jessica T.", rating: 2, text: "The color didn't match the picture online.", status: "Hidden" },
  ]);

  const toggleStatus = (id: number, newStatus: string) => {
    setReviews(reviews.map(r => r.id === id ? { ...r, status: newStatus } : r));
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-serif text-brand-dark">Review Moderation</h1>
      </div>

      <div className="bg-white/40 backdrop-blur-md border border-white/30 shadow-sm rounded-[2rem] overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-white/50 border-b border-brand-border/30 text-xs uppercase tracking-widest text-brand-dark/50 font-bold">
            <tr>
              <th className="px-8 py-5">Reviewer</th>
              <th className="px-8 py-5">Product & Rating</th>
              <th className="px-8 py-5 w-1/3">Review Text</th>
              <th className="px-8 py-5">Status</th>
              <th className="px-8 py-5 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-brand-border/20">
            {reviews.map(review => (
              <tr key={review.id} className="hover:bg-white/60 transition-colors group">
                <td className="px-8 py-5 font-bold text-brand-dark text-sm">{review.author}</td>
                <td className="px-8 py-5">
                  <div className="text-sm font-bold text-brand-dark mb-1">{review.product}</div>
                  <div className="flex gap-0.5 text-brand-coral">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-3.5 h-3.5 ${i < review.rating ? 'fill-current' : 'text-brand-border/40'}`} />
                    ))}
                  </div>
                </td>
                <td className="px-8 py-5 text-sm text-brand-dark/70 font-medium italic">"{review.text}"</td>
                <td className="px-8 py-5">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold border shadow-sm ${
                    review.status === 'Published' 
                      ? 'bg-brand-sage/10 text-brand-sage border-brand-sage/20' 
                      : review.status === 'Hidden' ? 'bg-brand-coral/10 text-brand-coral border-brand-coral/20'
                      : 'bg-brand-dark/5 text-brand-dark/60 border-brand-dark/10'
                  }`}>
                    {review.status}
                  </span>
                </td>
                <td className="px-8 py-5 text-right">
                  <div className="flex items-center justify-end gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    {review.status === 'Pending' && (
                      <button 
                        onClick={() => toggleStatus(review.id, "Published")}
                        className="w-8 h-8 rounded-full bg-brand-sage/10 flex items-center justify-center text-brand-sage hover:bg-brand-sage hover:text-white hover:-translate-y-0.5 hover:shadow-sm transition-all duration-300"
                      >
                        <CheckCircle className="w-4 h-4" />
                      </button>
                    )}
                    {review.status !== 'Hidden' && (
                      <button 
                        onClick={() => toggleStatus(review.id, "Hidden")}
                        className="w-8 h-8 rounded-full bg-brand-coral/5 flex items-center justify-center text-brand-coral/60 hover:bg-brand-coral/10 hover:text-brand-coral hover:-translate-y-0.5 hover:shadow-sm transition-all duration-300 border border-brand-coral/20"
                      >
                        <EyeOff className="w-4 h-4" />
                      </button>
                    )}
                    <button className="w-8 h-8 rounded-full bg-brand-dark/5 flex items-center justify-center text-brand-dark/60 hover:text-brand-dark hover:-translate-y-0.5 hover:shadow-sm transition-all duration-300 border border-brand-dark/10">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
