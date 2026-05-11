"use client";

import { Package, MessageSquare, DollarSign, TrendingUp } from "lucide-react";

export default function AdminDashboardPage() {
  const stats = [
    { name: "Total Revenue", value: "$12,450", icon: DollarSign, change: "+12%" },
    { name: "Active Products", value: "24", icon: Package, change: "+3" },
    { name: "Pending Reviews", value: "8", icon: MessageSquare, change: "Needs Attention" },
    { name: "Conversion Rate", value: "3.2%", icon: TrendingUp, change: "+0.4%" },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-serif text-brand-dark">Dashboard</h1>
        <p className="text-brand-dark/70 mt-1">Welcome back, Admin.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-10">
        {stats.map(stat => {
          const Icon = stat.icon;
          return (
            <div key={stat.name} className="bg-white/40 backdrop-blur-md border border-white/30 shadow-sm rounded-[2rem] p-8 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="flex justify-between items-start mb-6">
                <div className="p-4 bg-white/50 rounded-2xl shadow-sm">
                  <Icon className="w-6 h-6 text-brand-dark" />
                </div>
                <span className={`text-xs font-bold px-3 py-1.5 rounded-md shadow-sm ${stat.change.includes('+') ? 'bg-brand-sage/10 text-brand-sage border border-brand-sage/20' : 'bg-brand-yellow/10 text-brand-yellow border border-brand-yellow/20'}`}>
                  {stat.change}
                </span>
              </div>
              <h3 className="text-brand-dark/70 text-xs font-bold uppercase tracking-widest mb-2">{stat.name}</h3>
              <p className="text-3xl font-serif text-brand-dark tracking-tight">{stat.value}</p>
            </div>
          )
        })}
      </div>
      
      <div className="bg-white/40 backdrop-blur-md border border-white/30 shadow-sm rounded-[2rem] p-8 h-80 flex flex-col items-center justify-center group hover:bg-white/50 transition-all duration-300">
        <TrendingUp className="w-12 h-12 text-brand-dark/20 mb-4 group-hover:scale-110 group-hover:text-brand-dark/40 transition-all duration-300" />
        <p className="text-brand-dark/50 font-bold uppercase tracking-widest text-sm">Chart/Graph area mocked for frontend</p>
      </div>
    </div>
  );
}
