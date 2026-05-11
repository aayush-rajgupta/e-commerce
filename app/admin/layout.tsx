"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Package, MessageSquare, Settings, LogOut } from "lucide-react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const navItems = [
    { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
    { name: "Products", href: "/admin/products", icon: Package },
    { name: "Reviews", href: "/admin/reviews", icon: MessageSquare },
    { name: "Settings", href: "/admin/settings", icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-brand-bg flex">
      {/* Persistent Sidebar */}
      <aside className="w-64 bg-white/40 backdrop-blur-md border-r border-brand-border/30 shadow-sm flex flex-col fixed h-full z-10">
        <div className="p-6 border-b border-brand-border/30">
          <Link href="/" className="font-serif font-bold text-xl text-brand-dark tracking-widest">
            NITYAKHUSHI
          </Link>
          <p className="text-xs text-brand-sage font-medium mt-1 uppercase tracking-wider">Admin Portal</p>
        </div>

        <nav className="flex-1 p-6 space-y-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/admin" && pathname?.startsWith(item.href));
            const Icon = item.icon;
            
            return (
              <Link 
                key={item.name} 
                href={item.href}
                className={`flex items-center gap-3 px-4 h-12 rounded-xl text-sm font-bold transition-all duration-300 ease-in-out ${
                  isActive 
                    ? "bg-brand-sage text-white shadow-md translate-x-2" 
                    : "text-brand-dark/70 hover:bg-white/50 hover:text-brand-dark hover:translate-x-1"
                }`}
              >
                <Icon className="w-5 h-5" />
                {item.name}
              </Link>
            )
          })}
        </nav>

        <div className="p-6 border-t border-brand-border/30">
          <Link 
            href="/"
            className="flex items-center gap-3 px-4 h-12 text-sm font-bold text-brand-coral hover:bg-brand-coral/10 rounded-xl transition-all duration-300 hover:translate-x-1"
          >
            <LogOut className="w-5 h-5" />
            Exit Admin
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64 p-10 lg:p-12">
        {children}
      </main>
    </div>
  );
}
