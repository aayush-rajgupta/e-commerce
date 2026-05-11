"use client";

import { useState } from "react";
import { Plus, Edit2, Trash2, Image as ImageIcon } from "lucide-react";

export default function AdminProductsPage() {
  const [isAdding, setIsAdding] = useState(false);

  const mockProducts = [
    { id: "p1", title: "Handcrafted Ceramic Vase", price: 120, category: "Decor", stock: 15 },
    { id: "p2", title: "Artisan Preserved Bouquet", price: 85, category: "Bouquets", stock: 8 },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-serif text-brand-dark">Products</h1>
        <button 
          onClick={() => setIsAdding(!isAdding)}
          className="flex items-center gap-2 bg-brand-dark text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-brand-sage transition-colors shadow-sm"
        >
          <Plus className="w-4 h-4" />
          {isAdding ? "Cancel" : "Add Product"}
        </button>
      </div>

      {isAdding ? (
        <div className="bg-white/40 backdrop-blur-md border border-white/30 shadow-sm rounded-[2rem] p-8 sm:p-10 mb-8 transition-all duration-300">
          <h2 className="text-2xl font-serif text-brand-dark mb-8 tracking-tight">Add New Product</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <div className="space-y-6">
              <div>
                <label className="block text-xs font-bold text-brand-dark/70 mb-2 ml-1 uppercase tracking-widest">Product Title</label>
                <input type="text" className="w-full h-12 bg-white/50 backdrop-blur-sm border border-brand-border/50 rounded-xl px-5 text-sm font-medium text-brand-dark outline-none focus:border-brand-sage focus:ring-1 focus:ring-brand-sage transition-all shadow-sm" />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-brand-dark/70 mb-2 ml-1 uppercase tracking-widest">Price ($)</label>
                  <input type="number" className="w-full h-12 bg-white/50 backdrop-blur-sm border border-brand-border/50 rounded-xl px-5 text-sm font-medium text-brand-dark outline-none focus:border-brand-sage focus:ring-1 focus:ring-brand-sage transition-all shadow-sm" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-brand-dark/70 mb-2 ml-1 uppercase tracking-widest">Category</label>
                  <select className="w-full h-12 bg-white/50 backdrop-blur-sm border border-brand-border/50 rounded-xl px-5 text-sm font-medium text-brand-dark outline-none focus:border-brand-sage focus:ring-1 focus:ring-brand-sage transition-all shadow-sm appearance-none">
                    <option>Decor</option>
                    <option>Bouquets</option>
                    <option>Accessories</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-brand-dark/70 mb-2 ml-1 uppercase tracking-widest">Description</label>
                <textarea rows={5} className="w-full bg-white/50 backdrop-blur-sm border border-brand-border/50 rounded-xl px-5 py-4 text-sm font-medium text-brand-dark outline-none focus:border-brand-sage focus:ring-1 focus:ring-brand-sage transition-all shadow-sm resize-none"></textarea>
              </div>
            </div>

            <div className="flex flex-col h-full">
              <label className="block text-xs font-bold text-brand-dark/70 mb-2 ml-1 uppercase tracking-widest">Product Images</label>
              <div className="flex-1 min-h-[240px] border-2 border-dashed border-brand-border/60 rounded-[1.5rem] bg-white/30 flex flex-col items-center justify-center text-brand-dark/50 hover:bg-white/60 hover:border-brand-sage hover:shadow-inner transition-all duration-300 cursor-pointer group">
                <ImageIcon className="w-12 h-12 mb-4 text-brand-sage/60 group-hover:scale-110 group-hover:text-brand-sage transition-transform duration-300" />
                <p className="text-sm font-bold text-brand-dark/70">Click or drag images to upload</p>
                <p className="text-xs font-medium mt-1">PNG, JPG up to 5MB</p>
              </div>
              
              <button className="w-full h-14 mt-8 bg-brand-sage text-white rounded-full font-bold hover:bg-emerald-700 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-in-out shadow-md">
                Save Product
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="bg-white/40 backdrop-blur-md border border-white/30 shadow-sm rounded-[2rem] overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-white/50 border-b border-brand-border/30 text-xs uppercase tracking-widest text-brand-dark/50 font-bold">
              <tr>
                <th className="px-8 py-5">Product</th>
                <th className="px-8 py-5">Category</th>
                <th className="px-8 py-5">Price</th>
                <th className="px-8 py-5">Stock</th>
                <th className="px-8 py-5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-border/20">
              {mockProducts.map(product => (
                <tr key={product.id} className="hover:bg-white/60 transition-colors group">
                  <td className="px-8 py-5 font-bold text-brand-dark text-sm">{product.title}</td>
                  <td className="px-8 py-5 text-brand-dark/70 text-sm font-medium">{product.category}</td>
                  <td className="px-8 py-5 font-bold text-brand-dark text-sm">${product.price.toFixed(2)}</td>
                  <td className="px-8 py-5">
                    <span className="bg-brand-sage/10 text-brand-sage px-3 py-1 rounded-full text-xs font-bold border border-brand-sage/20 shadow-sm">
                      {product.stock} in stock
                    </span>
                  </td>
                  <td className="px-8 py-5 text-right">
                    <div className="flex items-center justify-end gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="w-8 h-8 rounded-full bg-white/50 flex items-center justify-center text-brand-dark/60 hover:text-brand-dark hover:shadow-sm hover:-translate-y-0.5 transition-all duration-300 border border-brand-border/50">
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button className="w-8 h-8 rounded-full bg-brand-coral/5 flex items-center justify-center text-brand-coral/60 hover:text-brand-coral hover:shadow-sm hover:-translate-y-0.5 hover:bg-brand-coral/10 transition-all duration-300 border border-brand-coral/20">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
